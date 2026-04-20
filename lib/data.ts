export const SOCIAL = {
  github: "https://github.com/Rizwan4529",
  linkedin: "https://www.linkedin.com/in/rizwan4529/",
  email: "rizwikhattak4384@gmail.com",
};

export const SKILLS = [
  "React.js", "Next.js", "Node.js", "Express.js",
  "TypeScript", "MongoDB", "PostgreSQL", "Redux Toolkit",
  "Tailwind CSS", "ShadCN", "React Native", "REST APIs",
  "Stripe", "OCR Integration", "AI Integration", "WordPress",
];

export const STATS = [
  { value: 13, suffix: "+", label: "Mobile Apps Shipped" },
  { value: 10, suffix: "+", label: "Web Projects Built" },
  { value: 5, suffix: "", label: "AI Platforms Launched" },
  { value: 3, suffix: "+", label: "Years of Experience" },
];

export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "Stash Technologies",
    period: "2024 – Present",
    type: "Full-time",
    current: true,
    bullets: [
      "Building production-grade mobile and web applications for enterprise clients as part of a cross-functional team at Stash Technologies.",
      "Led full-stack development on the TDCP (Tourism Development Corporation Punjab) mobile app — a feature-rich platform managing chairlift bookings, sightseeing, transport, hotels, and events.",
      "Architecting scalable React Native screens, complex booking flows, skeleton loading systems, and deep API integrations across multiple service modules.",
    ],
  },
  {
    role: "Front End Developer",
    company: "Tumarms",
    period: "June 2024 – Aug 2025",
    type: "Full-time",
    current: false,
    bullets: [
      "Built the complete front end of a Dext-like financial automation platform with responsive, role-based dashboards for accountant agencies and businesses.",
      "Delivered OCR-based document processing, Stripe subscription workflows, and multilingual support using React.js, Redux Toolkit, Tailwind CSS, and ShadCN.",
      "Owned end-to-end front-end delivery across agile sprints ensuring clean code, seamless backend integration, and timely feature releases.",
    ],
  },
  {
    role: "MERN Stack Intern",
    company: "Cafevista",
    period: "July 2024 – Oct 2024",
    type: "Internship",
    current: false,
    bullets: [
      "Led development of a Trello/Asana-inspired project management platform with task, ticket, and card workflows and role-based permissions.",
      "Built interactive dashboards and drag-and-drop task boards using the MERN stack ensuring smooth UX, scalability, and collaborative functionality.",
      "Coordinated team execution — assigning tasks, reviewing code, and guiding development in a structured sprint workflow.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "2022 – 2024",
    type: "Freelance",
    current: false,
    bullets: [
      "Independently delivered 20+ projects across web, mobile, and WordPress — serving clients in the UK, Germany, and Pakistan across industries including fitness, food, finance, and real estate.",
      "Built and launched 10+ React Native mobile apps to the Google Play Store and Apple App Store, handling everything from architecture and UI to API integration and store deployment.",
      "Managed full client lifecycles solo — scoping requirements, estimating timelines, delivering polished products, and iterating based on feedback — developing the discipline that defines my approach to every project today.",
    ],
  },
];

export type ProjectCategory = "web" | "mobile";

export const PROJECTS: {
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  images: string[];
}[] = [
  // ── Live web/AI/WordPress projects first ──
  {
    title: "aitwo.co",
    description:
      "AI-powered full-stack platform delivering intelligent automation and productivity tools with a modern, responsive interface.",
    tags: ["Next.js", "AI Integration", "Node.js", "Tailwind"],
    category: "web",
    liveUrl: "https://aitwo.co",
    images: [],
  },
  {
    title: "remodelai.co",
    description:
      "AI interior remodeling platform that transforms room photos with AI-generated design suggestions and style variations.",
    tags: ["Next.js", "AI/ML", "Image Processing", "Tailwind"],
    category: "web",
    liveUrl: "https://remodelai.co",
    images: [],
  },
  {
    title: "allailab.com",
    description:
      "Comprehensive AI tools laboratory offering a suite of AI-powered utilities and experiments for creators and developers.",
    tags: ["Next.js", "AI Integration", "REST APIs", "Tailwind"],
    category: "web",
    liveUrl: "https://allailab.com",
    images: [],
  },
  {
    title: "themakeupai.com",
    description:
      "AI-powered virtual makeup try-on platform enabling users to experiment with looks using real-time face detection.",
    tags: ["Next.js", "Computer Vision", "AI", "Tailwind"],
    category: "web",
    liveUrl: "https://themakeupai.com",
    images: [],
  },
  {
    title: "the3dai.com",
    description:
      "AI-driven 3D content generation platform with interactive viewer and real-time rendering capabilities.",
    tags: ["Next.js", "Three.js", "AI", "Tailwind"],
    category: "web",
    liveUrl: "https://the3dai.com",
    images: [],
  },
  {
    title: "thewheelai.com",
    description:
      "AI-powered automotive platform delivering smart vehicle recommendations and analytics for car buyers and dealers.",
    tags: ["Next.js", "AI Integration", "Node.js", "Tailwind"],
    category: "web",
    liveUrl: "https://thewheelai.com",
    images: [],
  },
  {
    title: "phonewave.co.uk",
    description: "Professional mobile phone repair and accessories e-commerce website built on WordPress with WooCommerce.",
    tags: ["WordPress", "WooCommerce", "Custom Theme"],
    category: "web",
    liveUrl: "https://phonewave.co.uk",
    images: [],
  },
  {
    title: "anpetroleum.com",
    description: "Corporate petroleum company website with services overview, fleet info, and client inquiry system.",
    tags: ["WordPress", "Custom Theme", "Contact Forms"],
    category: "web",
    liveUrl: "https://anpetroleum.com",
    images: [],
  },
  {
    title: "sloughdriving.com",
    description: "Driving school website with course listings, booking system, and instructor profiles.",
    tags: ["WordPress", "Booking System", "Custom Theme"],
    category: "web",
    liveUrl: "https://sloughdriving.com",
    images: [],
  },
  {
    title: "fcdltd.co.uk",
    description: "UK-based construction and facilities management company website with project portfolio showcase.",
    tags: ["WordPress", "Portfolio", "Custom Theme"],
    category: "web",
    liveUrl: "https://fcdltd.co.uk",
    images: [],
  },
  {
    title: "anfpetroleum.com",
    description: "Full-featured petroleum distribution corporate site with services overview and contact workflows.",
    tags: ["WordPress", "Corporate", "Custom Theme"],
    category: "web",
    liveUrl: "https://anfpetroleum.com",
    images: [],
  },
  // ── Web projects without live links ──
  {
    title: "Financial Automation Platform",
    description:
      "Production-grade Dext-like platform with multi-role dashboards, OCR document processing, Stripe subscriptions, OTP auth, and multilingual support for accountant agencies.",
    tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "ShadCN", "Stripe"],
    category: "web",
    images: [],
  },
  {
    title: "UAV Auto — Drone Inspection",
    description:
      "Multi-client autonomous drone inspection platform for solar panel monitoring with AI-driven defect detection, geofenced mission planning, and real-time analytics dashboard.",
    tags: ["Next.js", "AI/CV", "Node.js", "MongoDB", "Role-based Auth"],
    category: "web",
    images: [],
  },
  {
    title: "BidalotCoin — Coin Auction",
    description:
      "Scalable coin auction platform with scheduled bidding, instant Buy Now, super admin dashboard, customizable permissions, OTP/MFA, and real-time bidding architecture.",
    tags: ["React.js", "TypeScript", "RTK Query", "Tailwind", "ShadCN"],
    category: "web",
    images: [],
  },
  {
    title: "CareerFinders — Job Portal",
    description:
      "Full-featured job portal with dedicated employer and applicant portals, Stripe subscriptions, advanced job filtering, applicant tracking, and shortlisting features.",
    tags: ["Next.js", "Bootstrap", "Node.js", "PostgreSQL", "Stripe"],
    category: "web",
    images: [],
  },
  // ── Mobile — with live links first ──
  {
    title: "DevSynq",
    description:
      "Project management app for seamless collaboration — track milestones, manage events, monitor progress with an intuitive modern interface.",
    tags: ["React Native", "Firebase", "Redux", "TypeScript"],
    category: "mobile",
    liveUrl: "https://play.google.com/store/apps/details?id=com.pixelix.devsynq",
    images: [],
  },
  {
    title: "Fitrefect",
    description:
      "All-in-one fitness app combining smart nutrition tracking, habit building, and mindfulness into one clean, easy-to-use experience. iOS & Android.",
    tags: ["React Native", "Firebase", "Health APIs", "iOS & Android"],
    category: "mobile",
    liveUrl: "https://play.google.com/store/apps/details?id=com.fitness.fitrefect",
    images: [],
  },
  {
    title: "Mukhtara Hotels",
    description:
      "Hotel management app for Al Mukhtara Hotels — manage bookings, explore services, and access exclusive offers. Available on iOS & Android.",
    tags: ["React Native", "Node.js", "MongoDB", "iOS & Android"],
    category: "mobile",
    liveUrl: "https://play.google.com/store/apps/details?id=com.stash.almukhtarahotels",
    images: [],
  },
  {
    title: "free2score",
    description:
      "German sports social platform connecting coaches, clubs, and fans. Share skills, training clips, and game scenes with the football community.",
    tags: ["React Native", "Social Feed", "Media Upload", "Firebase"],
    category: "mobile",
    liveUrl: "https://play.google.com/store/apps/details?id=com.free2score.free2score",
    images: [],
  },
  {
    title: "60 Second Workouts",
    description:
      "Fitness app delivering efficient 60-second workout routines with Firebase push notifications and seamless navigation. iOS & Android.",
    tags: ["React Native", "Firebase", "Push Notifications", "iOS & Android"],
    category: "mobile",
    liveUrl: "https://play.google.com/store/apps/details?id=com.workout.mt_fitness",
    images: [],
  },
  {
    title: "VitaminRetter",
    description:
      "German food waste reduction app offering affordable seasonal fruit & vegetable boxes from surplus produce. Published on iOS & Android.",
    tags: ["React Native", "E-commerce", "Subscriptions", "iOS & Android"],
    category: "mobile",
    liveUrl: "https://play.google.com/store/apps/details?id=de.vitaminretter.app",
    images: [],
  },
  {
    title: "Lucky Cement / TDCP",
    description:
      "Maintenance management app for TDCP Patriata Chairlift tracking daily, weekly, fortnightly, and monthly maintenance activities.",
    tags: ["React Native", "Maintenance", "Forms", "Firebase"],
    category: "mobile",
    liveUrl: "https://play.google.com/store/apps/details?id=com.luckycementrelease2",
    images: [],
  },
  {
    title: "Beachwood Transportation",
    description:
      "Fleet management app for Beachwood Transportation tracking oil changes and odometer readings across each vehicle in the fleet.",
    tags: ["React Native", "Fleet Management", "Firebase", "Analytics"],
    category: "mobile",
    liveUrl: "https://play.google.com/store/apps/details?id=com.odometer.beachwoodtransportation",
    images: [],
  },
  {
    title: "KIPKO ToDo",
    description:
      "Intuitive task management app with reminders, categories, and productivity workflows to keep life organized.",
    tags: ["React Native", "Local Storage", "Push Notifications"],
    category: "mobile",
    liveUrl: "https://play.google.com/store/apps/details?id=com.kipko.todo",
    images: [],
  },
  {
    title: "KIPKO Invoice Maker",
    description:
      "Professional invoice and receipt generation app covering all invoicing needs for freelancers and small businesses.",
    tags: ["React Native", "PDF Generation", "Templates"],
    category: "mobile",
    liveUrl: "https://play.google.com/store/apps/details?id=com.generate.invoice",
    images: [],
  },
  {
    title: "The Crafter's Calculator",
    description:
      "Pricing tool for crafters and DIY makers — add up labor, tools, materials, and overhead to get the true cost of any project.",
    tags: ["React Native", "Calculator", "Local Storage"],
    category: "mobile",
    liveUrl: "https://play.google.com/store/apps/details?id=com.crafter.calculator.app",
    images: [],
  },
  {
    title: "Daily Diction",
    description:
      "Vocabulary builder app using a playful multiple-choice format to help users discover and learn new words daily. iOS only.",
    tags: ["React Native", "iOS", "Gamification", "Learning"],
    category: "mobile",
    liveUrl: "https://apps.apple.com/us/app/daily-diction/id6463383520",
    images: [],
  },
  {
    title: "Premium Meats",
    description:
      "B2B meat delivery platform for wholesale suppliers — streamlines procurement for restaurants, hotels, and caterers with fresh, on-time delivery.",
    tags: ["React Native", "E-commerce", "B2B", "Firebase"],
    category: "mobile",
    liveUrl: "https://play.google.com/store/apps/details?id=com.premiummeats.app",
    images: [],
  },
];

export const TESTIMONIALS = [
  {
    name: "Gregory Benson",
    quote:
      "Working with Rizwan was a great experience. He delivered exactly what we needed, on time and with impressive attention to detail. The final product exceeded our expectations.",
    role: "Client",
  },
  {
    name: "Ahmed Raza",
    quote:
      "Rizwan is highly skilled and very easy to communicate with. He understood our requirements quickly and built a smooth, high-quality solution. Would definitely work with him again.",
    role: "Client",
  },
  {
    name: "Ali Hassan",
    quote:
      "I was genuinely impressed by Rizwan's professionalism and problem-solving skills. He didn't just complete the task — he improved it. Highly recommended for any web development project.",
    role: "Client",
  },
];

export const VALUE_PITCH =
  "From AI-powered SaaS platforms to cross-platform mobile apps — I engineer complete digital products that look stunning, scale effortlessly, and turn your vision into reality.";

export const ROLES = [
  "Full Stack Developer",
  "Mobile App Developer",
  "AI Products Builder",
  "React & Next.js Expert",
];
