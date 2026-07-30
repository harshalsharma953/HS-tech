// Company Information
export const COMPANY_INFO = {
  name: "HS Tech",
  founded: "2026",
  founder: "Mrs. Pratibha Sharma",
  email: "hs.techind@gmail.com",
  phones: ["+91 7024630069", "+91 8225819957"],
  website: "https://hs-tech-steel.vercel.app",
  address: "Indore - Betma - 453001, Madhya Pradesh, India",
  googleMaps: "https://maps.app.goo.gl/TkHAqMJAG2ZSRacv9",
  tagline: "Transforming Ideas Into Digital Excellence",
  subheading:
    "Mobile Apps, Web Applications, Custom Software & UI/UX Design",
  description:
    "HS Tech is a modern IT solutions company specializing in high-quality mobile applications, websites, custom software, UI/UX design, and scalable digital solutions. We help startups, businesses, and enterprises transform ideas into innovative digital products through cutting-edge technology, creativity, and user-focused development.",
  goal: "To deliver fast, secure, scalable, and visually stunning solutions that help businesses grow in the digital world.",
  mission:
    "To empower businesses with innovative digital solutions that are scalable, secure, and built for long-term success.",
  vision:
    "To become one of India's most trusted technology companies by delivering world-class software experiences and helping businesses embrace digital transformation.",
  social: {
    instagram:
      "https://www.instagram.com/hstech.ind?igsh=MWp2bDF3M2FldmYybw==",
    linkedin: "https://www.linkedin.com/company/hstech-ind/",
    facebook: "https://facebook.com/share/19ifK4PjMK/?mibextid=wwXIfr",
  },
};

// Colors
export const COLORS = {
  primary: "#1E90FF",
  darkBlue: "#0A3D91",
  silver: "#D9E3F0",
  white: "#FFFFFF",
  dark: "#0B0F19",
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
    title: "Android App Development",
    description:
      "Native Android applications with modern Material Design and optimal performance.",
    category: "Mobile",
  },
  {
    icon: "apple",
    title: "iOS App Development",
    description:
      "Premium iOS applications with smooth performance and Apple design guidelines.",
    category: "Mobile",
  },
  {
    icon: "⚛️",
    title: "Cross Platform Apps (React Native)",
    description:
      "Build once, deploy everywhere. Cost-effective cross-platform mobile solutions.",
    category: "Mobile",
  },
  {
    icon: "🌐",
    title: "Website Development",
    description:
      "Responsive, fast, and SEO-friendly websites built with modern frameworks.",
    category: "Web",
  },
  {
    icon: "🛠️",
    title: "Custom Software Development",
    description:
      "Tailored enterprise software solutions built to your exact specifications.",
    category: "Enterprise",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Premium user experience and interface design for modern digital products.",
    category: "Design",
  },
  {
    icon: "🗄️",
    title: "Database Development",
    description:
      "Robust database architecture and management for scalable applications.",
    category: "Backend",
  },
  {
    icon: "☁️",
    title: "Cloud Application Development",
    description:
      "Scalable cloud-native applications deployed on modern cloud platforms.",
    category: "Cloud",
  },
  {
    icon: "🔌",
    title: "API Development",
    description:
      "RESTful and GraphQL APIs for seamless integration and data exchange.",
    category: "Backend",
  },
  {
    icon: "🧪",
    title: "Software Testing",
    description:
      "Comprehensive testing including unit, integration, and end-to-end testing.",
    category: "Quality",
  },
  {
    icon: "🔧",
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, bug fixes, updates, and technical support services.",
    category: "Support",
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
  { name: "MySQL", icon: "🐬", category: "Database" },
  { name: "JavaScript", icon: "✨", category: "Language" },
  { name: "TypeScript", icon: "📘", category: "Language" },
  { name: "Java", icon: "☕", category: "Language" },
  { name: "HTML5", icon: "🌐", category: "Frontend" },
  { name: "CSS3", icon: "🎨", category: "Frontend" },
  { name: "REST APIs", icon: "🔌", category: "Backend" },
  { name: "Git", icon: "📂", category: "Tools" },
];

// Portfolio Projects
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Rajmani Jewellers",
    category: "Mobile App",
    description:
      "Jewellery business application featuring gold & silver rates, jewellery collections, exclusive offers, customer notifications, and store information.",
    features: [
      "Gold & Silver Rates",
      "Jewellery Collections",
      "Exclusive Offers",
      "Customer Notifications",
      "Store Information",
    ],
    icon: "💎",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
  },
  {
    id: 2,
    title: "Property Bazar",
    category: "Mobile App",
    description:
      "Real Estate platform with comprehensive property management and business listings.",
    features: [
      "Property Buy & Sell",
      "Rental Listings",
      "Business Listings",
      "Insurance & Loans",
      "Property Requirements",
      "Inventory",
      "Hot Leads",
      "Latest Offers",
      "Events & News",
    ],
    icon: "🏢",
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Second Income",
    category: "Mobile App",
    description:
      "Investment & Wealth Management application for smart financial planning.",
    features: [
      "Investment Plans",
      "Portfolio Management",
      "Wallet",
      "Fund Management",
      "Order History",
      "Financial Dashboard",
    ],
    icon: "💰",
    technologies: ["React Native", "Node.js", "Firebase"],
  },
  {
    id: 4,
    title: "Cleaning Service App",
    category: "Mobile App",
    description:
      "On-demand home service application for professional cleaning services.",
    features: [
      "Room Cleaning",
      "Bathroom Cleaning",
      "Kitchen Cleaning",
      "Booking System",
      "Order Tracking",
      "Notifications",
      "Address Management",
      "Payments",
    ],
    icon: "🧹",
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
  {
    id: 5,
    title: "Book Publication Website",
    category: "Website",
    description:
      "Professional publishing website for book authors with modern responsive design and complete publishing information.",
    features: [
      "Author Profiles",
      "Book Catalog",
      "Modern Design",
      "Responsive Layout",
    ],
    icon: "📚",
    technologies: ["React", "Tailwind CSS", "Node.js"],
  },
  {
    id: 6,
    title: "Portfolio Websites",
    category: "Website",
    description:
      "Modern portfolio websites with stunning animations, smooth transitions, and responsive design for professionals and businesses.",
    features: [
      "Animated Sections",
      "Responsive Design",
      "Contact Forms",
      "SEO Optimized",
    ],
    icon: "🌐",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 7,
    title: "Solar Energy Website",
    category: "Website",
    description:
      "Professional website for solar energy company showcasing solar panel solutions, services, and installation packages.",
    features: [
      "Service Showcase",
      "Product Catalog",
      "Quote Request",
      "Customer Testimonials",
    ],
    icon: "☀️",
    technologies: ["React", "Tailwind CSS", "Node.js"],
  },
  {
    id: 8,
    title: "Health & Wellness Website",
    category: "Website",
    description:
      "Healthcare website with doctor profiles, appointment booking, health tips, and patient portal features.",
    features: [
      "Doctor Profiles",
      "Appointment Booking",
      "Health Blog",
      "Patient Portal",
    ],
    icon: "🏥",
    technologies: ["React", "Node.js", "MongoDB"],
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
    title: "Testing & QA",
    description:
      "Rigorous testing to ensure your application is bug-free, secure, and performs optimally.",
    icon: "🧪",
  },
  {
    number: "06",
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
  { label: "Projects Delivered", value: 15, suffix: "+" },
  { label: "Happy Clients", value: 8, suffix: "+" },
  { label: "Apps Published", value: 5, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
];

// Company Highlights
export const HIGHLIGHTS = [
  "Modern UI/UX",
  "High Performance Applications",
  "Responsive Websites",
  "Secure Backend Development",
  "Scalable Architecture",
  "Premium User Experience",
  "Business Automation",
  "Custom Software Solutions",
  "Mobile First Approach",
  "Client Focused Development",
];

// FAQs
export const FAQS = [
  {
    question: "What is your development process?",
    answer:
      "We follow a 6-step process: Requirement Gathering, Planning & Strategy, Design & Prototyping, Development, Testing & QA, and Deployment & Support.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary depending on complexity and scope. Typically, a mobile app takes 3-6 months and a web application takes 2-4 months.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes, we provide comprehensive post-launch support including maintenance, bug fixes, and feature updates.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern technologies including React, React Native, Node.js, MongoDB, Firebase, MySQL, and cloud platforms.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Absolutely! We work with startups, small businesses, and enterprises alike. We tailor our solutions to fit your budget and requirements.",
  },
];
