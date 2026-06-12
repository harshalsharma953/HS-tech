// Company Information
export const COMPANY_INFO = {
  name: "HS Tech",
  founder: "Mrs. Pratibha Sharma",
  email: "hs.techind@gmail.com",
  phone: "+91 7024630069",
  address: "Indore - Betma - 453001, Madhya Pradesh, India",
  tagline: "Transforming Ideas Into Digital Excellence",
  subheading:
    "Mobile Apps, Web Applications, AI Solutions & Enterprise Software Development",
};

// Colors
export const COLORS = {
  primary: "#0EA5FF",
  secondary: "#C0C0C0",
  accent: "#38BDF8",
  dark: "#050816",
  darkSecondary: "#0F172A",
  darkTertiary: "#1E293B",
  neon: "#00D9FF",
  neonPink: "#FF006E",
};

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Technologies", href: "#technologies" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

// Services Data
export const SERVICES = [
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Native Android & iOS apps with modern UI/UX and seamless performance.",
    category: "Mobile",
  },
  {
    icon: "⚛️",
    title: "React Native Development",
    description:
      "Cross-platform mobile solutions that work on both iOS and Android.",
    category: "Mobile",
  },
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Full-stack web applications with modern frameworks and best practices.",
    category: "Web",
  },
  {
    icon: "🛠️",
    title: "Custom Software Development",
    description:
      "Tailored enterprise software solutions built to your specifications.",
    category: "Enterprise",
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    description:
      "Machine learning and AI-powered solutions for business intelligence.",
    category: "AI",
  },
  {
    icon: "🗄️",
    title: "Cloud Integration",
    description:
      "Seamless cloud deployment and management on AWS, Azure, or GCP.",
    category: "Cloud",
  },
  {
    icon: "💼",
    title: "ERP Solutions",
    description:
      "Enterprise resource planning systems for streamlined operations.",
    category: "Enterprise",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Premium user experience and interface design for modern applications.",
    category: "Design",
  },
  {
    icon: "🛒",
    title: "E-commerce Development",
    description:
      "Complete e-commerce platforms and online stores with payment integration.",
    category: "Web",
  },
];

// Technologies
export const TECHNOLOGIES = [
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "React Native", icon: "📱", category: "Mobile" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "Express.js", icon: "⚡", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "Firebase", icon: "🔥", category: "Backend" },
  { name: "TypeScript", icon: "📘", category: "Language" },
  { name: "JavaScript", icon: "✨", category: "Language" },
  { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
  { name: "Android", icon: "🤖", category: "Mobile" },
  { name: "Git", icon: "📂", category: "Tools" },
  { name: "REST APIs", icon: "🔌", category: "Backend" },
];

// Portfolio Projects
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Rajmani Jewellers",
    category: "Mobile App",
    description:
      "Premium jewellery e-commerce mobile application with stunning UI",
    features: [
      "Product Catalog",
      "Jewellery Showcase",
      "User Friendly Interface",
      "Business Growth",
    ],
    stats: { downloads: "50K+", rating: "4.8", users: "30K+" },
    image: "💎",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
  },
  {
    id: 2,
    title: "Property Bazar",
    category: "Real Estate Platform",
    description:
      "Comprehensive real estate marketplace platform with broker network",
    features: [
      "Property Listings",
      "Broker Network",
      "Loans & Insurance",
      "Business Directory",
    ],
    stats: { properties: "5K+", brokers: "500+", transactions: "2K+" },
    image: "🏢",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    id: 3,
    title: "Second Income",
    category: "FinTech App",
    description:
      "Wealth management and investment tracking platform for investors",
    features: [
      "Wealth Management",
      "Investment Tracking",
      "Wallet",
      "Dashboard",
    ],
    stats: { investments: "100M+", users: "50K+", roi: "25%+" },
    image: "💰",
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
  },
];

// Process Steps
export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Requirement Gathering",
    description:
      "We understand your business needs and project requirements thoroughly through detailed discussions.",
    icon: "📋",
  },
  {
    number: "02",
    title: "Planning & Strategy",
    description:
      "Create a comprehensive plan and development strategy tailored to your goals and timeline.",
    icon: "📊",
  },
  {
    number: "03",
    title: "Design & Prototyping",
    description:
      "Design beautiful interfaces and create interactive prototypes for your approval.",
    icon: "🎨",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Build your solution using latest technologies with clean, maintainable, and scalable code.",
    icon: "💻",
  },
  {
    number: "05",
    title: "Deployment & Support",
    description:
      "Deploy your application and provide ongoing support and maintenance services.",
    icon: "🚀",
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Rajesh Patel",
    company: "Rajmani Jewellers",
    role: "Business Owner",
    text: "HS Tech transformed our business with an amazing mobile app. The quality, attention to detail, and professionalism exceeded our expectations. Highly recommended!",
    rating: 5,
    avatar: "👔",
  },
  {
    name: "Priya Singh",
    company: "Property Bazar",
    role: "CEO",
    text: "Outstanding team that delivers exceptional results. Their expertise in real estate technology is unmatched. We saw immediate growth after launching our platform.",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    name: "Amit Kumar",
    company: "Second Income",
    role: "Founder",
    text: "The best decision we made was partnering with HS Tech. Our fintech platform is now industry-leading with thousands of active users.",
    rating: 5,
    avatar: "👨‍💻",
  },
];

// Statistics
export const STATISTICS = [
  { label: "Projects Delivered", value: 12, suffix: "+" },
  { label: "Happy Clients", value: 6, suffix: "+" },
  { label: "Apps Published", value: 5, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
];

// Team (for future expansion)
export const TEAM = [
  {
    name: "Mrs. Pratibha Sharma",
    role: "Founder & CEO",
    bio: "Visionary technology leader dedicated to creating solutions that empower people and transform lives.",
    avatar: "👩‍💼",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

// FAQs (for future expansion)
export const FAQS = [
  {
    question: "What is your development process?",
    answer:
      "We follow a 5-step process: Requirement Gathering, Planning & Strategy, Design & Prototyping, Development, and Deployment & Support.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary depending on complexity and scope. Typically, a mobile app takes 3-6 months and a web application takes 4-8 months.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes, we provide comprehensive post-launch support including maintenance, bug fixes, and feature updates.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern technologies including React, React Native, Node.js, MongoDB, Firebase, and cloud platforms like AWS and Azure.",
  },
];
