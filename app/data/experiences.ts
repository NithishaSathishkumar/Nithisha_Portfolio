export interface ExperienceMetric {
  label: string;
  value: string;
  hint?: string;
}

export interface ExperienceExampleLink {
  label: string;
  url: string;
}

export interface ExperienceFeature {
  title: string;
  description: string;
  bullets?: string[];
  icon: string;
  image?: string;
  imageFit?: "cover" | "contain";
  videoUrl?: string;
  liveUrl?: string;
  tags?: string[];
  examples?: ExperienceExampleLink[];
}

export interface Experience {
  slug: string;
  period: string;
  title: string;
  org: string;
  location?: string;
  logo?: string;
  website?: string;
  summary: string;
  description: string;
  tagline: string;
  heroImage?: string;
  demoVideoUrl?: string;
  metrics: ExperienceMetric[];
  features: ExperienceFeature[];
  tools: { name: string; category: string }[];
  impact?: string;
  learnings?: string;
}

export const experiences: Experience[] = [
  {
    slug: "vitals-vault",
    period: "Jun 2025 – Present",
    title: "Full Stack Developer",
    org: "Vitals Vault",
    location: "Remote",
    website: "",
    summary:
      "Led development of revenue-critical features across checkout, onboarding, scheduling, and SEO using React, Next.js, TailwindCSS, Framer Motion, and Supabase — supporting 1,000+ active users. Built serverless AWS Lambda pipeline automating 1,000+ onboarding submissions, reducing manual operations by 80%. Developed multi-step Stripe checkout processing 1,000+ payments. Rebuilt the SEO surface — JSON-LD schema, dynamic sitemap, and programmatic biomarker/symptom pages — taking organic search from 107 clicks / 11K impressions to 21.4K clicks / 2.7M impressions in 3 months (200x clicks, 245x impressions). Integrated AI-powered workflows using OpenAI and Gemini APIs.",
    tagline:
      "Shipping revenue-critical features across checkout, onboarding, SEO, and AI workflows",
    description:
      "As a full-stack developer at Vitals Vault, I own end-to-end delivery of user-facing product features that directly move revenue and retention. I work across the stack — Next.js on the front, Supabase and serverless AWS Lambda on the back — and partner with design and operations to ship features that scale to 1,000+ active users. I also own the SEO surface: schema markup, sitemap generation, programmatic content pages, and metadata quality. When I started that work, the site was doing 107 clicks and 11K impressions in a 3-month window; three months later it's at 21.4K clicks and 2.7M impressions.",
    heroImage: "",
    demoVideoUrl: "",
    metrics: [
      { label: "Active users supported", value: "1,000+" },
      { label: "Search impressions (3 mo)", value: "11K → 2.7M", hint: "245x growth" },
      { label: "Organic clicks (3 mo)", value: "107 → 21.4K", hint: "200x growth" },
      { label: "Onboarding submissions automated", value: "1,000+" },
      { label: "Manual ops reduced", value: "80%" },
      { label: "Payments processed", value: "1,000+" },
    ],
    features: [
      {
        title: "SEO growth engine — 107 → 21.4K clicks",
        description:
          "Rebuilt the SEO surface end-to-end and took vitalsvault.com from 107 clicks / 11K impressions to 21.4K clicks / 2.7M impressions in 3 months — a ~200x lift in organic search.",
        bullets: [
          "Built JSON-LD schema markup (Biomarker, MedicalWebPage, FAQ, Breadcrumb) so pages qualify for rich Google snippets.",
          "Wrote a dynamic sitemap that pulls from Supabase, Strapi CMS, and comparison registries — thousands of URLs kept fresh automatically.",
          "Shipped programmatic content pages for biomarkers, symptoms, conditions, compares, and landing pages.",
          "Every symptom page ships with a TOC, structured FAQ, related-biomarker cards, and an AI-summary hook — see the live examples below.",
          "Wrote a metadata-quality checker so titles, descriptions, and canonicals stay healthy at scale.",
          "Pushed the average search position to 11.7 — first-page territory for most queries.",
        ],
        icon: "fa-solid fa-magnifying-glass-chart",
        image: "/image/vv-seo-gsc.png",
        imageFit: "contain",
        tags: [
          "Next.js",
          "JSON-LD",
          "Programmatic SEO",
          "Sitemap",
          "Supabase",
          "Strapi",
        ],
        examples: [
          {
            label: "Swelling in Perimenopause",
            url: "https://www.vitalsvault.com/symptoms/swelling-perimenopause",
          },
          {
            label: "Low Libido in Teenagers",
            url: "https://www.vitalsvault.com/symptoms/low-libido-in-teenagers",
          },
        ],
      },
      {
        title: "Stripe checkout — 10 distinct flows, 1,000+ payments",
        description:
          "Designed and built the entire Stripe payment surface — ten separate checkout flows tuned to different audiences, cart models, and payment integrations. Together they've processed 1,000+ payments and handle coupons, tax, saved cards, retest pricing, gift recipients, and post-payment webhooks that provision access instantly.",
        bullets: [
          "Standard multi-step public checkout — plan → email → add-ons → payment, built on Stripe Elements with a fully custom in-app form.",
          "Build Your Own Panel (BYOP) — users assemble a custom biomarker panel from the catalog; enforces minimum panel size and dedups the cart by biomarker handle signature.",
          "Guided Consultation — BYOP + PocketMD AI chat that walks the user through panel selection, with a confirm modal before checkout and its own conversion-funnel events.",
          "PocketMD-seeded checkout — cart pre-filled from an AI doctor conversation, with suggested biomarker handles recorded so analytics can attribute the sale back to the chat.",
          "Landing gift checkout — dedicated /checkout/[landing_slug] per promo (Father's Day, seasonal campaigns), recipient form, bundled free add-ons, and a voice-note gift recorder.",
          "Gift pair checkout — two recipients in one order with pair-specific pricing math (e.g. 160+ biomarkers each).",
          "Stripe Embedded Checkout Session — Stripe-hosted UI rendered inline via iframe, plus a companion route that finalizes guest-user account creation post-payment.",
          "One-click checkout — for logged-in users with a saved payment method: uses Stripe PaymentIntent directly (no redirect, no iframe), rate-limited to 5/min, idempotency-keyed for safe retries.",
          "Dashboard Labs checkout — protected/authenticated flow for existing users, with lab-draw-fee waivers for active visits and retest pricing evaluation.",
          "Follow-up upsell — modal offer that attaches to any main flow, appends the follow-up SKU with booking-pending metadata and pings the product Slack bot.",
        ],
        icon: "fa-solid fa-credit-card",
        tags: [
          "Stripe",
          "Stripe Elements",
          "Embedded Checkout",
          "PaymentIntent",
          "Webhooks",
          "Next.js",
          "Supabase",
        ],
      },
      {
        title: "Serverless onboarding pipeline",
        description:
          "Built an AWS Lambda pipeline that automates 1,000+ onboarding submissions — pulling form data, validating it, emailing operators, and writing normalized rows to Supabase. Cut manual operations by 80%.",
        icon: "fa-solid fa-bolt",
        image: "",
        videoUrl: "",
        tags: ["AWS Lambda", "Supabase", "Automation"],
      },
      {
        title: "AI-powered workflows",
        description:
          "Integrated OpenAI and Gemini APIs into internal tooling to auto-summarize submissions, draft outreach copy, and route users based on their intake responses.",
        icon: "fa-solid fa-wand-magic-sparkles",
        image: "",
        videoUrl: "",
        tags: ["OpenAI", "Gemini", "LLM"],
      },
      {
        title: "Scheduling & availability UI",
        description:
          "Shipped a scheduling surface with real-time availability, timezone-aware slots, and Framer Motion micro-interactions that made the flow feel calm under load.",
        icon: "fa-solid fa-calendar-check",
        image: "",
        videoUrl: "",
        tags: ["React", "Framer Motion", "Supabase"],
      },
    ],
    tools: [
      { name: "Next.js", category: "Framework" },
      { name: "React", category: "Framework" },
      { name: "TypeScript", category: "Language" },
      { name: "TailwindCSS", category: "Styling" },
      { name: "Framer Motion", category: "Motion" },
      { name: "Supabase", category: "Backend" },
      { name: "AWS Lambda", category: "Serverless" },
      { name: "Stripe", category: "Payments" },
      { name: "Strapi CMS", category: "Content" },
      { name: "JSON-LD / Schema.org", category: "SEO" },
      { name: "Google Search Console", category: "SEO" },
      { name: "OpenAI API", category: "AI" },
      { name: "Gemini API", category: "AI" },
    ],
    impact:
      "Features I own touch every revenue-critical path — from the first onboarding form to the final Stripe receipt. Reducing manual operations by 80% freed the ops team to focus on customer success. On the growth side, the SEO surface I rebuilt took the site from 107 clicks and 11K impressions to 21.4K clicks and 2.7M impressions in 3 months — turning organic search into a compounding acquisition channel the business didn't have before.",
    learnings:
      "Owning a stack end-to-end taught me to think about product decisions the way a founder does: what breaks first at 10x scale, and what can be automated before it becomes a fire.",
  },
  {
    slug: "stem-of-other",
    period: "Mar 2025 – Jun 2025",
    title: "Full Stack Web Developer",
    org: "Stem of Other",
    location: "Remote",
    website: "",
    summary:
      "Architected a STEM education game platform using React, Next.js, and Python, serving 2,000+ K–12 students nationwide. Built and optimized 15+ cross-platform features improving performance by 30%. Integrated Clerk authentication and Stripe payments supporting 100+ monthly transactions. Onboarded and mentored 5+ developers while enforcing coding standards.",
    tagline:
      "Architecting a STEM education game platform used by 2,000+ K–12 students",
    description:
      "At Stem of Other, I led architecture and shipping for a STEM education game platform used by 2,000+ K–12 students nationwide. I built performance-critical features, integrated auth and payments, and mentored a small team of developers on coding standards and review culture.",
    heroImage: "",
    demoVideoUrl: "",
    metrics: [
      { label: "K–12 students served", value: "2,000+" },
      { label: "Cross-platform features shipped", value: "15+" },
      { label: "Performance improvement", value: "30%" },
      { label: "Monthly Stripe transactions", value: "100+" },
      { label: "Developers mentored", value: "5+" },
    ],
    features: [
      {
        title: "Game-based learning surface",
        description:
          "Designed and built 15+ cross-platform features for a game-based learning platform — puzzles, leaderboards, and progress dashboards that keep K–12 students coming back.",
        icon: "fa-solid fa-gamepad",
        image: "",
        videoUrl: "",
        tags: ["React", "Next.js", "Python"],
      },
      {
        title: "Auth with Clerk",
        description:
          "Integrated Clerk authentication with role-based access for students, parents, and educators — including magic-link sign-in and per-classroom membership.",
        icon: "fa-solid fa-user-shield",
        image: "",
        videoUrl: "",
        tags: ["Clerk", "Auth"],
      },
      {
        title: "Stripe payments",
        description:
          "Built the subscription and one-time payment layer with Stripe, supporting 100+ monthly transactions across parent and school-billed plans.",
        icon: "fa-solid fa-credit-card",
        image: "",
        videoUrl: "",
        tags: ["Stripe", "Payments"],
      },
      {
        title: "Performance overhaul",
        description:
          "Optimized rendering, code-split heavy routes, and audited the data layer to lift platform performance by 30% on typical school hardware.",
        icon: "fa-solid fa-gauge-high",
        image: "",
        videoUrl: "",
        tags: ["Performance", "Next.js"],
      },
      {
        title: "Dev mentorship & standards",
        description:
          "Onboarded and mentored 5+ developers — set up review guidelines, a lint/format baseline, and paired on tricky features so the team could ship faster together.",
        icon: "fa-solid fa-people-group",
        image: "",
        tags: ["Mentorship", "Code Review"],
      },
    ],
    tools: [
      { name: "React", category: "Framework" },
      { name: "Next.js", category: "Framework" },
      { name: "TypeScript", category: "Language" },
      { name: "Python", category: "Backend" },
      { name: "Clerk", category: "Auth" },
      { name: "Stripe", category: "Payments" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Git", category: "Version Control" },
    ],
    impact:
      "Getting 2,000+ K–12 students onto a platform that actually feels like a game — and keeping it fast on cheap classroom Chromebooks — was the deliverable that mattered most.",
    learnings:
      "Mentoring 5+ developers while shipping quickly taught me the ROI of good docs, small PRs, and a lint config nobody has to argue about.",
  },
  {
    slug: "uwb-peer-coach",
    period: "Mar 2024 – Dec 2024",
    title: "Peer Coach & Student Leader",
    org: "University of Washington Bothell",
    location: "Bothell, WA",
    website: "https://www.uwb.edu/",
    summary:
      "Led onboarding for 40+ first-year CS students — delivered 1-on-1 mentorship, academic guidance, and career planning sessions resulting in 95% retention rate.",
    tagline:
      "Onboarding and mentoring first-year CS students at UW Bothell",
    description:
      "As a Peer Coach and Student Leader at UW Bothell, I owned onboarding for 40+ incoming CS students. I ran 1-on-1 mentorship, academic planning, and career sessions — helping students choose classes, land internships, and stick with the major through their toughest quarter.",
    heroImage: "",
    demoVideoUrl: "",
    metrics: [
      { label: "First-year students supported", value: "40+" },
      { label: "Retention rate", value: "95%" },
      { label: "1-on-1 sessions run", value: "150+" },
    ],
    features: [
      {
        title: "1-on-1 mentorship",
        description:
          "Ran recurring 1-on-1 sessions with 40+ first-year students — covering classes, study habits, imposter syndrome, and how to talk to professors during office hours.",
        icon: "fa-solid fa-handshake",
      },
      {
        title: "Academic planning",
        description:
          "Helped students map out multi-quarter course plans that lined up with prerequisites and their long-term CS specialization goals.",
        icon: "fa-solid fa-map",
      },
      {
        title: "Career sessions",
        description:
          "Coached students on resumes, LinkedIn, and internship search — including live mock interviews and portfolio reviews.",
        icon: "fa-solid fa-briefcase",
      },
      {
        title: "Community events",
        description:
          "Ran cohort-wide events and study jams that gave first-years a low-stakes place to ask questions and meet upperclassmen.",
        icon: "fa-solid fa-users",
      },
    ],
    tools: [
      { name: "Notion", category: "Planning" },
      { name: "Zoom", category: "Sessions" },
      { name: "Slack", category: "Comms" },
      { name: "Google Workspace", category: "Docs" },
    ],
    impact:
      "A 95% retention rate for the cohort was the number I was proudest of — those are real students who stayed in the major.",
    learnings:
      "Mentorship taught me that the best explanations aren't the most correct — they're the ones that meet the student where they are.",
  },
  {
    slug: "uwb-teaching-assistant",
    period: "Mar 2022 – Jun 2023",
    title: "CS Teaching Assistant",
    org: "University of Washington Bothell",
    location: "Bothell, WA",
    website: "https://www.uwb.edu/",
    summary:
      "Supported 35+ students in data structures & algorithms — created supplemental materials, held office hours, and improved average exam scores by 15%.",
    tagline: "Teaching data structures & algorithms at UW Bothell",
    description:
      "As a CS Teaching Assistant at UW Bothell, I supported 35+ students working through data structures and algorithms. I wrote supplemental notes, ran weekly office hours, and coached students through debugging until concepts clicked — measurably lifting average exam scores.",
    heroImage: "",
    demoVideoUrl: "",
    metrics: [
      { label: "Students supported", value: "35+" },
      { label: "Average exam score lift", value: "15%" },
      { label: "Office hours held", value: "Weekly" },
    ],
    features: [
      {
        title: "Supplemental materials",
        description:
          "Wrote handouts, visual walk-throughs, and practice problem sets for tricky topics like recursion, dynamic programming, and graph traversal.",
        icon: "fa-solid fa-file-lines",
      },
      {
        title: "Office hours",
        description:
          "Held weekly office hours where I debugged student code line-by-line and re-taught concepts using their own examples.",
        icon: "fa-solid fa-clock",
      },
      {
        title: "Exam prep",
        description:
          "Ran review sessions ahead of midterms and finals — average exam scores in my sections went up 15%.",
        icon: "fa-solid fa-graduation-cap",
      },
      {
        title: "1-on-1 debugging",
        description:
          "Coached students through their own bugs instead of just handing them the fix — building the muscle for the next assignment.",
        icon: "fa-solid fa-bug",
      },
    ],
    tools: [
      { name: "Java", category: "Language" },
      { name: "Python", category: "Language" },
      { name: "Canvas LMS", category: "Coursework" },
      { name: "Zoom", category: "Sessions" },
    ],
    impact:
      "A 15% average exam-score lift meant more students passing, staying in the major, and building the confidence to keep going.",
    learnings:
      "Teaching an algorithms class is the fastest way to find the gaps in your own understanding — and to learn how to explain a concept five different ways.",
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function getAllExperienceSlugs(): string[] {
  return experiences.map((e) => e.slug);
}
