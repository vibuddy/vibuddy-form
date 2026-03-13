import type { ClientOverride } from "@/context/SiteConfigContext";

// ─────────────────────────────────────────────────────────────────────────────
// CLIENT REGISTRY
//
// To add a new client:
//   1. Add an entry below (key = URL slug, value = fields to override)
//   2. Share the URL:  yoursite.com/preview/<key>
//
// Only include fields that differ from the defaults in siteConfig.ts.
// Everything else falls back to the default values automatically.
// ─────────────────────────────────────────────────────────────────────────────
export const clientsRegistry: Record<string, ClientOverride> = {
  // Example — remove or replace with real clients
  demo: {
    firmName: "Demo & Associates",
    firmNameShort: "DEMO & CO.",
    firmNameLegal: "Demo & Associates",
    firmPrefix: "CA",
    firmSubtitle: "INDIA · CHARTERED ACCOUNTANTS",
    tagline: "Your Trusted Partner for Financial Excellence",
    taglineExtended:
      "Your Trusted Partner for Financial Excellence and Compliance",
    phone: "+91-98100 00000",
    phoneWhatsApp: "919810000000",
    phoneDisplay: "+91 98100 00000",
    email: "info@demo.com",
    address: "123, Demo Street, Mumbai, Maharashtra 400001",
    googleMapUrl: "https://maps.google.com",
    announcementItems: [
      "EXPERT TAX PLANNING",
      "TRUSTED BY 100+ BUSINESSES",
      "GST & ITR FILING",
      "ICAI REGISTERED FIRM",
      "100% COMPLIANCE GUARANTEED",
    ],
  },
  "sharma-assoc": {
    firmName: "Sharma & Associates",
    firmPrefix: "CA",
    firmSubtitle: "INDIA · CHARTERED ACCOUNTANTS",
    firmNameShort: "SHARMA & CO.",
    phone: "+91-98100 11223",
    phoneWhatsApp: "919810011223",
    phoneDisplay: "+91 98100 11223",
    blogAuthor: {
      name: "CA Ramesh Sharma",
      bio: "Chartered Accountant with 20 years of experience in tax consulting and financial advisory. Passionate about sharing insights on taxation, compliance, and business growth strategies.",
      imgUrl:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fHww",
      prefix: "CA",
    },
    email: "info@sharma.com",
    address: "123, Connaught Place, New Delhi 110001",
  },
  "harshit-verma": {
    firmName: "Harshit Verma & Co.",
    firmPrefix: "CA",
    firmSubtitle: "INDIA · CHARTERED ACCOUNTANTS",
    firmNameShort: "HARSHIT VERMA & CO.",
    phone: "+91-98100 33445",
    phoneWhatsApp: "919810033445",
    phoneDisplay: "+91 98100 33445",
    email: "info@harshit.com",
    address:
      "Shop No 2, Kataria Complex, opposite Prem Sweets, Moradabad, Uttar Pradesh 244105",
    googleMapUrl: "https://maps.app.goo.gl/yURbxzudXycPwGxT9",
    blogAuthor: {
      name: "CA Harshit Verma",
      bio: "Chartered Accountant with 20 years of experience in tax consulting and financial advisory. Passionate about sharing insights on taxation, compliance, and business growth strategies.",
      imgUrl:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fHww",
      prefix: "CA",
    },
    socialMedia: {
      facebook: {
        handle: "harshitverma",
        url: "https://www.facebook.com/harshitverma",
      },
      instagram: {
        handle: "harshitverma",
        url: "https://www.instagram.com/harshitverma",
      },
      linkedin: {
        handle: "harshitverma",
        url: "https://www.linkedin.com/in/harshitverma",
      },
      website: {
        display: "www.harshitverma.com",
        url: "https://www.harshitverma.com",
      },
      whatsApp: {
        display: "+91 98100 33445",
      },
    },
  },
};
