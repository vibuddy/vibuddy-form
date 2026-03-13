import { generateClient } from "aws-amplify/api";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import outputs from "@/src/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { rateLimit } from "@/lib/rateLimiter";

// Configure Amplify for server-side
Amplify.configure(outputs, { ssr: true });

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  const result = rateLimit(ip, 5, 60000); // 5 requests per minute

  if (!result.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  try {
    const {
      budgetRange,
      company,
      emailId,
      message,
      name,
      projectType,
      phoneNumber,
    } = await req.json();

    // 4. Execute GraphQL mutation
    const client = generateClient({
      authMode: "apiKey",
    });

    const document = `
      mutation MyMutation($budgetRange: String, $emailId: String, $id: ID, $message: String, $name: String, $projectType: String, $phoneNumber: String) {
        createUntitledModel(
            input: {budgetRange: $budgetRange, emailId: $emailId, id: $id, message: $message, name: $name, projectType: $projectType, phoneNumber: $phoneNumber}
        ) {
            id
        }
    }
    `;

    const variables = {
      id: uuidv4(),
      budgetRange: budgetRange,
      emailId: emailId,
      message: message,
      name: name,
      projectType: projectType,
      phoneNumber: phoneNumber,
    };

    const response = await client.graphql({
      query: document,
      variables,
    });

    if ("data" in response) {
      if (response.data) {
        return NextResponse.json({
          success: true,
          message: "Contact information added successfully",
        });
      } else {
        return NextResponse.json(
          {
            success: false,
            error: response.errors?.[0]?.message || "Unknown error",
          },
          { status: 400 },
        );
      }
    }
  } catch (error: any) {
    console.error("Error creating shop:", error);

    if (error.message === "unable to send GraphQLRequest to client.") {
      return NextResponse.json(
        { error: "Network error. Please check your internet connection!" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { error: error.message || "An unexpected error occurred", data: error },
      { status: 400 },
    );
  }
}
