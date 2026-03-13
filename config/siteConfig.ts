// ╔══════════════════════════════════════════════════════════════════════════╗
// ║                     CA WEBSITE TEMPLATE — SITE CONFIG                   ║
// ║                                                                          ║
// ║  Fill in the fields below to create a new CA website.                    ║
// ║  Every component reads from this file — change once, updates everywhere. ║
// ╚══════════════════════════════════════════════════════════════════════════╝

import { img } from "framer-motion/client";

// ─────────────────────────────────────────────
// 1. FIRM / BUSINESS IDENTITY
// ─────────────────────────────────────────────
export const firmName = "Rakesh Goyal & Company";
export const firmNameShort = "RAKESH GOYAL & CO."; // shown in Navbar logo
export const firmNameLegal = "Rakesh Goyal & Company"; // used in copyright
export const firmPrefix = "CA"; // prefix before firm name (used in logo & avatar)
export const firmSubtitle = "INDIA · CHARTERED ACCOUNTANTS"; // below the logo
export const tagline = "Your Trusted Partner for Financial Excellence"; // give me catchy one-liner
export const taglineExtended =
  "Your Trusted Partner for Financial Excellence and Compliance"; // shown in hero section

// ─────────────────────────────────────────────
// 2. CONTACT INFORMATION
// ─────────────────────────────────────────────
export const phone = "+91-98970 67236"; // displayed phone number
export const phoneWhatsApp = "919897067236"; // digits only, used in wa.me links
export const phoneDisplay = "+91 9897067236"; // formatted for display on cards
export const email = "goyalca2003@gmail.com";
export const address =
  "593W+P6R, Jalesar Rd, Opp. Kali Mandir, Comapny Baag, Raniwala Market, Firozabad, Uttar Pradesh 283203";
export const googleMapUrl = "https://maps.app.goo.gl/bCQDehoy6aipbRiT7"; // link to Google Maps

// ─────────────────────────────────────────────
// 3. SOCIAL MEDIA
// ─────────────────────────────────────────────
export const socialMedia = {
  instagram: { handle: "rakesh_goyal", url: "#" },
  linkedin: {
    handle: "Rakesh Goyal",
    url: "https://www.linkedin.com/in/rakesh-goyal-204aab29/",
  },
  facebook: { url: "#", handle: "Rakesh Goyal" },
  whatsApp: { display: "+91 9897067236" }, // uses phoneWhatsApp for links
  website: { display: "www.cagmc.com", url: "#" },
};

// ─────────────────────────────────────────────
// 4. SEO / METADATA
// ─────────────────────────────────────────────
export const seoTitle =
  "Rakesh Goyal & Company | Trusted Chartered Accountants in Firozabad, Uttar Pradesh, India";
export const seoDescription =
  "Rakesh Goyal & Company is a leading chartered accountancy firm based in Firozabad, Uttar Pradesh, India. With over 40 years of experience, we provide expert financial services including tax planning, auditing, and business consulting to individuals and businesses across various industries. Our commitment to excellence and client satisfaction has made us a trusted partner for all your accounting needs.";
export const copyrightYear = "2026"; // used in footer copyright notice

// ─────────────────────────────────────────────
// 4b. JSON-LD / LOCAL SEO (Google Rich Results)
//     Fill these in carefully — this is what makes
//     your site appear for "best CA near me" searches.
// ─────────────────────────────────────────────
export const siteUrl = "https://www.cagmc.com"; // your live domain (no trailing slash)
export const businessType = "Chartered Accountant"; // shown in Google

export const localSeo = {
  // Address components (used in structured data)
  streetAddress:
    "593W+P6R, Jalesar Rd, Opp. Kali Mandir, Comapny Baag, Raniwala Market",
  city: "Firozabad",
  state: "Uttar Pradesh",
  postalCode: "283203",
  country: "IN",

  // Geo-coordinates (get from Google Maps → right-click → copy coordinates)
  latitude: 27.1545,
  longitude: 78.3958,

  // Phone in international format (E.164)
  phoneE164: "+919897067236",

  // Business hours (ISO day format: Mo, Tu, We, Th, Fr, Sa, Su)
  openingHours: ["Mo-Sa 10:00-21:00"],

  // Founding year
  foundingYear: 2009,

  // Google Maps place URL (the "share" link from Google Maps)
  googleMapsEmbed: "https://maps.app.goo.gl/o1zgaXYbTXoXBrVZ7",

  // Price range indicator ($ / $$ / $$$ / $$$$)
  priceRange: "$$",

  // Aggregate rating (if you have Google reviews, put the real numbers)
  rating: {
    value: 4.8,
    count: 20, // total number of reviews
  },

  // Services you want Google to know about (appear in Knowledge Panel)
  services: [
    "Income Tax Return Filing",
    "GST Registration & Returns",
    "Company Registration",
    "Tax Audit",
    "Statutory Audit",
    "NGO Audit",
    "LLP Registration",
    "FSSAI License",
    "Trademark Registration",
    "TDS Return Filing",
    "ROC Filing",
    "Business Advisory",
    "NRI Taxation",
    "RERA Registration",
  ],

  // Areas / cities you serve (helps with "CA in {city}" searches)
  areaServed: ["Firozabad", "Uttar Pradesh", "India"],

  // Same-as links (your verified social profiles — helps Google Knowledge Panel)
  sameAs: [
    // "https://www.facebook.com/yourpage",
    // "https://www.instagram.com/yourhandle",
    "https://www.linkedin.com/in/rakesh-goyal-204aab29/",
  ],

  // Logo URL (absolute — used in Google results)
  logo: "", // e.g. "https://www.cagmc.com/logo.png"

  // Cover / hero image URL (absolute)
  image: "", // e.g. "https://www.cagmc.com/landing_1.avif"
};

// ─────────────────────────────────────────────
// 5. HERO SECTION
// ─────────────────────────────────────────────
export const heroSlides = ["/landing_3.jpeg", "/landing_4.jpeg", "/landing-5.jpeg", "/landing_6.jpeg","/landing_7.jpeg"]; // array of image URLs for hero slider];
export const heroSlideInterval = 4000; // milliseconds between slides

// ─────────────────────────────────────────────
// 6. ANNOUNCEMENT BAR
// ─────────────────────────────────────────────
export const announcementItems = [
  "EXPERT TAX PLANNING",
  "TRUSTED BY 100+ BUSINESSES",
  "GST & ITR FILING",
  "ICAI REGISTERED FIRM",
  "100% COMPLIANCE GUARANTEED",
];

// ─────────────────────────────────────────────
// 7. NAVIGATION
// ─────────────────────────────────────────────
export const navLinks = {
  services: { label: "Home", href: "/", homeFallback: "/" },
  about: { label: "About Us", href: "/about" },
  blogs: { label: "Blogs", href: "/blogs" },
  join: { label: "Join Us", href: "/join-us" },
  contact: { label: "Contact Us", href: "/contact-us" },
};

export const mobileNavLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Join Us", href: "/join-us" },
  { label: "Contact Us", href: "/contact-us" },
];

// ─────────────────────────────────────────────
// 8. BUSINESS REGISTRATION SERVICES
// ─────────────────────────────────────────────
export const businessRegistrationStartingPrice = "Starts at ₹999";
export const businessRegistrationInquiryLabel = "INQUIRY";

export const businessRegistrations = [
  {
    title: "Foreign Company Registration",
    desc: "For setting up a foreign company to establish business as a subsidiary in India.",
    price: "Starts at ₹24,999",
  },
  {
    title: "Private Limited Company",
    desc: "The most popular form of corporate legal entity in India for Startups.",
    price: "Starts at ₹7,999",
  },
  {
    title: "Public Limited Company Registration",
    desc: "Suitable for businesses that want to raise equity capital from the public.",
    price: "Starts at ₹14,999",
  },
  {
    title: "LLP Registration",
    desc: "An ideal approach for small businesses in the unorganized sector having multiple promoters.",
    price: "Starts at ₹4,999",
  },
  {
    title: "Nidhi Company Registration",
    desc: "Develop the habit of economizing by collecting deposits and lending to members.",
    price: "Starts at ₹19,999",
  },
  {
    title: "Producer Company Registration",
    desc: "Ideal for starting a company for farmers for agri purpose with 10 members.",
    price: "Starts at ₹14,999",
  },
  {
    title: "One Person Company Registration",
    desc: "Business Entity ideal for single entrepreneurs aiming to start with limited liability.",
    price: "Starts at ₹4,999",
  },
  {
    title: "Partnership Registration",
    desc: "Ideal for like-minded people forming an entity with less procedural compliances.",
    price: "Starts at ₹1,999",
  },
  {
    title: "GST Registration",
    desc: "GST Registration is applicable on goods (Turnover: 40 lakhs) and services (Turnover: 20 lakh).",
    price: "Starts at ₹999",
  },
  {
    title: "FSSAI Food License",
    desc: "Food License for food entrepreneurs as a basic, state or Central License.",
    price: "Starts at ₹1,999",
  },
  {
    title: "Import Export Code (IEC)",
    desc: "Entrepreneurs/Entities planning to work overseas need to have Import Export Code.",
    price: "Starts at ₹1,999",
  },
  {
    title: "RERA Registration",
    desc: "Commercial or residential land of over 500sq m or having more than 8 apartments.",
    price: "Starts at ₹9,999",
  },
];

// ─────────────────────────────────────────────
// 9. AUDIT & TAX SERVICES
// ─────────────────────────────────────────────
export const auditTaxServices = [
  {
    title: "ITR Filing",
    desc: "ITR is a form in which an Assessee files his information about Income and tax payable to the Income Tax Department.",
  },
  {
    title: "ROC Filing",
    desc: "Annual General Meeting of the company is conducted once a year and the due date for the first Annual General Meeting.",
  },
  {
    title: "GST Return",
    desc: "All business & entrepreneurs who are registered under the GST mechanism have to mandatorily file the GST returns in the relevant GST form.",
  },
  {
    title: "TDS Return",
    desc: "TDS return is a quarterly statement to be given to the IT department. It is compulsory for Deductor to submit a TDS return on time.",
  },
  {
    title: "GST Audit",
    desc: "GST Audit refers to the examination of the returns, records and other important documents which a taxable individual maintains.",
  },
  {
    title: "Bank Audit",
    desc: "They handle a huge amount of deposits and savings of the public, so they have to be closely monitored and reviewed.",
  },
  {
    title: "NGO Audit",
    desc: "Non-profit making organization in which funds are raised from members, donors or contributors besides from receiving donations.",
  },
  {
    title: "Tax Audit",
    desc: "There are various types of audits under different laws such as company audit, statutory audit, cost audit, stock audit, etc.",
  },
];

// ─────────────────────────────────────────────
// 10. NGO REGISTRATION SERVICES
// ─────────────────────────────────────────────
export const ngoRegistrations = [
  {
    title: "Trust Registration",
    desc: "A Trust is an arrangement where owner or trust or of Trust transfers the property to a trustee.",
  },
  {
    title: "Society Registration",
    desc: "A group of people working together to promote charitable activities like sports, music, culture, religion, art, education, etc.",
  },
  {
    title: "Section-8 Company",
    desc: "Company formed with an object to promote commerce, art, science, sports, research, education, religion, protection of the environment, charity etc.",
  },
  {
    title: "FCRA Registration",
    desc: "Foreign contributions or income from nations outside of India are governed by the Foreign Contribution Regulation Act (FCRA).",
  },
];

// ─────────────────────────────────────────────
// 11. TRADEMARK REGISTRATION SERVICES
// ─────────────────────────────────────────────
export const trademarkRegistrations = [
  {
    title: "Trademark Registration",
    desc: "Register your brand name/logo and create your goodwill in the market.",
    symbol: "TM",
  },
  {
    title: "Copyright Registration",
    desc: "Copyright is the legal right to ownership and enjoyment entitled to creators.",
    symbol: null,
  },
  {
    title: "Design Registration",
    desc: "Protect any newly created shape, configuration, patterns and composition of lines or colours.",
    symbol: null,
  },
  {
    title: "Patent Registration",
    desc: "Secured invention or the special right given to an inventor by a govt to manufacture, sell or use invention.",
    symbol: null,
  },
];

// ─────────────────────────────────────────────
// 12. FOOTER LINKS
// ─────────────────────────────────────────────
export const footerColumns = {
  businessRegistration: [
    "Private Limited Company Registration",
    "Public Limited Company Registration",
    "One Person Company Registration",
    "Company Registration",
    "Foreign Company Registration",
  ],
  licenses: [
    "GST Registration",
    "FSSAI Registration",
    "MSME Udyam Registration",
    "ISO Certification",
    "Business Registration Number",
  ],
  auditTax: [
    "NGO Audit",
    "NRI Taxation",
    "TDS Return",
    "Tax Audit",
    "Statutory Audit",
  ],
};

// ─────────────────────────────────────────────
// 13. ABOUT PAGE
// ─────────────────────────────────────────────

// Hero stats
export const aboutHeroStats = {
  expertTeam: 75,
  charteredAccountants: 5,
  officeLocations: 1,
};

// Intro section
export const aboutIntroStats = [
  { val: "5", label: "Chartered Accountants" },
  { val: "2", label: "Company Secretaries" },
  { val: "75+", label: "Team Members" },
  { val: "1", label: "Office Location" },
];

export const aboutIntroText = {
  paragraph1:
    "Rakesh Goyal & Company is a leading chartered accountancy firm based in Firozabad, Uttar Pradesh, India. With over 40 years of experience, we provide expert financial services including tax planning, auditing, and business consulting to individuals and businesses across various industries. Our commitment to excellence and client satisfaction has made us a trusted partner for all your accounting needs.",
  paragraph2Prefix: "As an ",
  paragraph2Highlight1: "ICAI Peer-Reviewed firm",
  paragraph2Middle: ", NCS remains committed to delivering ",
  paragraph2Highlight2: "compliant, future-ready, and value-driven solutions",
  paragraph2Middle2:
    " for both domestic and international clients. A dedicated ",
  paragraph2Highlight3: "IT Innovation Lab",
  paragraph2Suffix:
    " ensures we stay at the forefront of technology-driven audits and financial solutions, while our unwavering commitment to integrity and professional excellence continues to be the cornerstone of our practice.",
};

// Quadrant / Core Framework
export const areasOfPractice = [
  "Business Consulting",
  "Audit & Assurance",
  "Direct Tax",
  "Indirect Tax",
];

export const industryExperience = [
  "Real Estate",
  "Travel & Logistics",
  "Hospitality",
  "IT & ITES",
  "Manufacturing",
];

export const officeLocations = ["Firozabad, Uttar Pradesh"];

export const teamSizeItems = ["5 Qualified CAs", "75+ Member Team"];

// Vision / Mission / Values
export const vision =
  "To be a leading chartered accountancy firm committed to delivering future-ready, value-driven solutions for both domestic and international clients.";

export const mission =
  "To provide a comprehensive range of financial services, including tax planning, auditing, and business consulting, to help our clients achieve their financial goals and grow their businesses.";

export const values = [
  "Integrity",
  "Excellence",
  "Innovation",
  "Collaboration",
  "Customer Focus",
];

// Partners
export const partners = [
  {
    name: "CA. Nithesh Shetty",
    role: "Managing Partner",
    branch: "Mumbai Branch",
    bio: "Nithesh Shetty is the Managing Partner of NCS and operates from the Mumbai branch of NCS.",
    imgUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fHww",
  },
  {
    name: "CA. Charan Muchoor",
    role: "Direct Tax Partner",
    branch: "Mangalore Branch",
    bio: "Charan Muchoor is the Direct Tax Partner of NCS and operates from the Mangalore branch of NCS.",
    imgUrl:
      "https://cdn.pixabay.com/photo/2019/08/11/11/28/man-4398724_1280.jpg",
  },
  {
    name: "CA. Sumanth Bangera",
    role: "Indirect Tax Partner",
    branch: "Bangalore Branch",
    bio: "Sumanth Bangera is the Indirect Tax Partner of NCS and operates from the Bangalore branch of NCS.",
    imgUrl:
      "https://ncsco.in/wp-content/uploads/elementor/thumbs/DSC_5380-copy-1-scaled-ri10jilqodv9l028pv5hmnp0ppxoy7qq3vwabpim9s.jpg",
  },
  {
    name: "CA. Thejas KC",
    role: "Audit & Assurance Partner",
    branch: "Karkala Branch",
    bio: "Thejas KC is the Audit and Assurance partner of the NCS and operates from the karkala branch of NCS.",
    imgUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "CA. Adarsh Betala",
    role: "AIF & SME-IPO Advisory",
    branch: "Chennai Branch",
    bio: "CA Adarsh Betala leads the Chennai branch, specializing in AIF Structuring and SME-IPO advisory for MSMEs, startups, and growing businesses.",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1675080431459-92373a9efd84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "CA. Sujith Bangera",
    role: "Audit & Assurance",
    branch: "Technology Focus",
    bio: "CA Sujith Bangera, a Chartered Accountant qualified in 2025, specializes in Audit & Assurance with a strong focus on technology-driven audits.",
    imgUrl:
      "https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

// Team members (Futureblox)
export const teamSectionTitle = "The Futureblox Team";
export const teamSectionDescription =
  "Meet the dedicated professionals who combine expertise, integrity, and innovation to deliver trusted results.";

export const teamMembers = [
  {
    name: "Sudha",
    role: "Human Resource",
    imgUrl:
      "https://images.unsplash.com/photo-1573496527892-904f897eb744?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHdvbWVufGVufDB8fDB8fHww",
  },
  {
    name: "Kiran",
    role: "Team Lead",
    imgUrl:
      "https://images.unsplash.com/photo-1560087637-bf797bc7796a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Nithasha",
    role: "Quality Team",
    imgUrl:
      "https://images.unsplash.com/photo-1690444963408-9573a17a8058?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHdvbWVufGVufDB8fDB8fHww",
  },
  {
    name: "Suraj",
    role: "IT Team",
    imgUrl:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Nivya",
    role: "Team Lead",
    imgUrl:
      "https://images.unsplash.com/photo-1602442787305-decbd65be507?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVufGVufDB8fDB8fHww",
  },
  {
    name: "Tarun",
    role: "Team Lead",
    imgUrl:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

// Trusted-by-numbers
export const trustedNumbers = {
  teamMembers: 75,
  yearsOfExcellence: 15,
  clientsServed: 500,
  cityOffices: 4,
};

// ─────────────────────────────────────────────
// 14. BLOG PAGE
// ─────────────────────────────────────────────
export const blogAuthor = {
  name: "CA Rakesh Goyal",
  prefix: "CA",
  bio: "CA Rakesh Goyal is a seasoned Chartered Accountant with over 40 years of experience in the field of taxation, auditing, and financial consulting.",
  imgUrl:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fHww",
};

export const blogPosts = [
  {
    year: "2026",
    category: "INCOME TAX",
    categoryColor: "bg-[#FEF9C3] text-[#854D0E]",
    title:
      "Income Tax Query 12: Set-off Unutilised Basic Exemption Limit against Capital Gains (Taxable at Special Rates)",
    excerpt:
      "Scenario Mr/s A. B. is an Individual having Income from Capital Gains on Equity / Equity Mutual Funds / Debt Mutual Funds as well as Interest / Dividend included under the head Income from Other Sources...",
    readTime: "6 min read",
  },
  {
    year: "2026",
    category: "TALLY",
    categoryColor: "bg-[#DCFCE7] text-[#166534]",
    title: "Transaction Cards Module in TallyPrime – Simplify TDS Compliance",
    excerpt:
      "A Walkthrough video / Demo of the TDL is available at https://youtu.be/zrBEYlYDI9E — Learn how the Transaction Cards Module makes TDS compliance significantly easier for chartered accountants and finance teams...",
    readTime: "3 min read",
  },
  {
    year: "2026",
    category: "INCOME TAX",
    categoryColor: "bg-[#FEF9C3] text-[#854D0E]",
    title:
      "Income Tax Query 11: Income Tax in case of Reconstitution of Firm ~ Section 9B & 45(4) of the Income Tax Act, 1961",
    excerpt:
      "Scenario M/s A. B. & Co is a Partnership Firm assessed to Income Tax for the last many assessment years. Case (1) The Partnership Firm is Dissolved. Case (2) The firm undergoes reconstitution...",
    readTime: "8 min read",
  },
  {
    year: "2025",
    category: "NGO",
    categoryColor: "bg-[#F5F0FF] text-[#5B21B6]",
    title: "NGO Module in TallyPrime",
    excerpt:
      "A Walkthrough video / Demo of the TDL is available at https://www.youtube.com/watch?v=7WnfcbRgQ3k. Further, a walkthrough video / Demo of the TDL for Foreign Contribution is available in version 1.5...",
    readTime: "4 min read",
  },
  {
    year: "2025",
    category: "INCOME TAX",
    categoryColor: "bg-[#FEF9C3] text-[#854D0E]",
    title:
      "Income Tax Query 10: What is Form 10BD of Income Tax Act and its Applicability?",
    excerpt:
      "Key Points About Form 10BD — Purpose: It serves as an annual statement of donations, containing details such as donor name, PAN, address, and the nature and amount of donation. Applicability: All trusts registered under sections 80G, 35AC...",
    readTime: "7 min read",
  },
  {
    year: "2025",
    category: "INCOME TAX",
    categoryColor: "bg-[#FEF9C3] text-[#854D0E]",
    title:
      "Income Tax Query 9: Gross Receipts in ITR is less than as per TDS Claimed in ITR / Form 26AS due to Deductor following Cash System & Assessee following Mercantile System",
    excerpt:
      "Scenario: In many cases, there is a difference in Accounting Method – Mercantile (or Accrual) or Cash System followed by the Deductor and Assessee (Deductee). In such a Scenario, the Gross Receipts as shown in ITR...",
    readTime: "5 min read",
  },
  {
    year: "2025",
    category: "INCOME TAX",
    categoryColor: "bg-[#FEF9C3] text-[#854D0E]",
    title: "Income Tax Query 8: Remuneration Clause in Partnership / LLP Deed",
    excerpt:
      "Scenario M/s A. B. & Co is a Partnership Firm. Section 40(b)(v) of the Income Tax Act, 1961 deals with the (dis)-allowance of Remuneration to Working Partners of a Firm. The remuneration clause in the partnership deed must be carefully drafted...",
    readTime: "6 min read",
  },
  {
    year: "2024",
    category: "INCOME TAX",
    categoryColor: "bg-[#FEF9C3] text-[#854D0E]",
    title:
      "Income Tax Query 7: Whether Gifts received from Maternal Grandparents are Taxable / Exempt?",
    excerpt:
      "Amongst the various unsettled controversies in Income Tax Laws of India, one is with respect to gifts / amounts received without consideration from Maternal Grand Parents (Nana, Nani). There appears to be significant ambiguity in the law...",
    readTime: "5 min read",
  },
];

export const newsletterHeading = "Stay Updated with Tax & Finance Insights";
export const newsletterDescription = `Subscribe to ${blogAuthor.name}'s blog and get expert insights on income tax, GST, and professional accounting delivered to your inbox.`;

// ─────────────────────────────────────────────
// 15. SOCIAL CARDS (marquee section)
// ─────────────────────────────────────────────
export const socialCards = [
  { label: "Instagram", text: socialMedia.instagram.handle },
  { label: "WhatsApp", text: phoneDisplay },
  { label: "LinkedIn", text: socialMedia.linkedin.handle },
  { label: "Email", text: email },
  { label: "Call Us", text: phoneDisplay },
  { label: "Website", text: socialMedia.website.display },
];

// ─────────────────────────────────────────────
// DEFAULT CONFIG BUNDLE — used by the preview system.
// Import `defaultSiteConfig` in context/SiteConfigContext.tsx.
// All existing named exports stay intact; nothing breaks.
// ─────────────────────────────────────────────
export const defaultSiteConfig = {
  // Identity
  firmName,
  firmNameShort,
  firmNameLegal,
  firmPrefix,
  firmSubtitle,
  tagline,
  taglineExtended,
  // Contact
  phone,
  phoneWhatsApp,
  phoneDisplay,
  email,
  address,
  googleMapUrl,
  socialMedia,
  // SEO
  seoTitle,
  seoDescription,
  copyrightYear,
  siteUrl,
  businessType,
  localSeo,
  // Hero
  heroSlides,
  heroSlideInterval,
  // Announcement bar
  announcementItems,
  // Navigation
  navLinks,
  mobileNavLinks,
  // Services
  businessRegistrationStartingPrice,
  businessRegistrationInquiryLabel,
  businessRegistrations,
  auditTaxServices,
  ngoRegistrations,
  trademarkRegistrations,
  footerColumns,
  // About page
  aboutHeroStats,
  aboutIntroStats,
  aboutIntroText,
  areasOfPractice,
  industryExperience,
  officeLocations,
  teamSizeItems,
  vision,
  mission,
  values,
  partners,
  teamSectionTitle,
  teamSectionDescription,
  teamMembers,
  trustedNumbers,
  // Blog page
  blogAuthor,
  blogPosts,
  newsletterHeading,
  newsletterDescription,
};
