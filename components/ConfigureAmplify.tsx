// components/ConfigureAmplify.tsx
"use client";

import { Amplify } from "aws-amplify";

import outputs from "@/src/amplifyconfiguration.json";

Amplify.configure(outputs, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  return null;
}
