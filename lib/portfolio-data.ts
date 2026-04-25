import {
  Award,
  Blocks,
  Bot,
  Briefcase,
  Braces,
  Cloud,
  Container,
  Cpu,
  Database,
  DatabaseZap,
  FileJson,
  GitBranch,
  Globe,
  Lock,
  MonitorPlay,
  Network,
  Server,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Wind,
  Workflow,
} from "lucide-react";

export const personal = {
  name: "Anand Raj Pandey",
  title: "Cloud Engineer & Backend Developer",
  tagline:
    "I design reliable cloud systems, secure backend services, and automation pipelines that make infrastructure feel effortless.",
  email: "anandrajpandey75@gmail.com",
  phone: "+91 866-086-2307",
  github: "https://github.com/anandrajpandey",
  linkedin: "https://linkedin.com/in/anand-raj-pandey-4231a827a",
  resume: "/Resume_27-4.pdf",
  location: "Bengaluru, India",
  summary:
    "AWS Certified Developer Associate with hands-on experience building cloud-native platforms, secure APIs, and automation-first delivery systems across backend, DevOps, and security workflows.",
};

export const sections = [
  { id: "home", label: "Home" },
  { id: "certification", label: "Certification" },
  { id: "skills", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const focusAreas = [
  {
    title: "Cloud Architecture",
    description:
      "Designing AWS-first systems with serverless components, observability, resilience, and clear operational ownership.",
    icon: Cloud,
  },
  {
    title: "Backend Systems",
    description:
      "Building APIs and event-driven services in Python and Node.js with security, performance, and maintainability in mind.",
    icon: ServerCog,
  },
  {
    title: "AI + Automation",
    description:
      "Applying automation and intelligent workflows to reduce toil, improve visibility, and accelerate shipping.",
    icon: Bot,
  },
];

export const techStack = [
  { name: "AWS", icon: Cloud, tone: "from-cyan-400/25 to-cyan-400/10" },
  {
    name: "Terraform",
    icon: Blocks,
    tone: "from-violet-400/25 to-violet-400/10",
  },
  { name: "Docker", icon: Container, tone: "from-sky-500/25 to-sky-400/10" },
  { name: "Kubernetes", icon: Network, tone: "from-sky-500/25 to-sky-500/10" },
  { name: "Ansible", icon: Workflow, tone: "from-red-400/25 to-red-400/10" },
  {
    name: "DynamoDB",
    icon: DatabaseZap,
    tone: "from-indigo-400/25 to-indigo-400/10",
  },
  {
    name: "Node.js",
    icon: Server,
    tone: "from-emerald-500/25 to-emerald-500/10",
  },
  {
    name: "FastAPI",
    icon: Wind,
    tone: "from-emerald-400/25 to-emerald-400/10",
  },
  { name: "Python", icon: Cpu, tone: "from-sky-400/25 to-yellow-300/10" },
  {
    name: "Next.js",
    icon: MonitorPlay,
    tone: "from-slate-100/20 to-slate-100/5",
  },
  {
    name: "TypeScript",
    icon: FileJson,
    tone: "from-blue-500/25 to-blue-500/10",
  },
  {
    name: "Tailwind CSS",
    icon: Sparkles,
    tone: "from-cyan-300/25 to-cyan-300/10",
  },
  {
    name: "JavaScript",
    icon: Braces,
    tone: "from-yellow-300/30 to-yellow-300/10",
  },
  { name: "MySQL", icon: Database, tone: "from-cyan-500/25 to-cyan-500/10" },
  { name: "Java", icon: Cpu, tone: "from-orange-400/25 to-orange-400/10" },
  { name: "Google ADK", icon: Cloud, tone: "from-blue-400/25 to-blue-400/10" },
];

export const badges = [
  "AWS Lambda",
  "API Gateway",
  "EventBridge",
  "ECS Fargate",
  "SNS",
  "SQS",
  "IAM",
  "Security Testing",
  "Blockchain",
  "Machine Learning",
];

export const projects = [
  {
    title: "API Health Monitoring System",
    description:
      "Engineered an event-driven monitoring platform on AWS to track external API uptime, persist state changes, and trigger intelligent alerts for reliability workflows. The system leverages AWS managed services as its foundation and is set up using Terraform, thus following DevOps best practices such as Infrastructure as Code (IaC), event, driven design, least privilege access control using IAM, and horizontal scalability.",
    stack: [
      "AWS Lambda",
      "Eventbridge",
      "ECS",
      "SQS & SNS",
      "Terraform",
      "Docker",
      "DynamoDB",
      "Python",
    ],
    github:
      "https://github.com/anandrajpandey/API-Health-Check-Monitoring-System",
    live: "https://github.com/anandrajpandey/API-Health-Check-Monitoring-System",
    icon: Globe,
  },
  {
    title: "Incentra",
    description:
      "Built an AI-enhanced streaming platform that makes movie watching interactive and context-aware, combining cinematic playback with a timestamp-aware 'Second Seat' companion, spoiler-safe reactions, adaptive discovery, subtitle-driven scene analysis, and admin tooling for content operations.",
    hostedAt: "https://inc3ntra.netlify.app",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
      "CloudFront",
      "Terraform",
      "HLS",
    ],
    github: "https://github.com/anandrajpandey",
    live: "https://github.com/anandrajpandey",
    icon: Blocks,
  },
  {
    title: "Traceroute Anomaly Detection",
    description:
      "Created a FastAPI service that uses Isolation Forest-based anomaly detection to surface suspicious routes, unusual latency spikes, and network stability issues. Performs traceroute/tracert based on user input. It uses AI to detect abnormal network behavior (high latency, unexpected IPs) and returns results in structured JSON format for easy integration.",
    stack: ["FastAPI", "Python", "Scikit-learn", "NumPy", "Security"],
    github: "https://github.com/anandrajpandey/Tracert",
    live: "https://github.com/anandrajpandey/Tracert",
    icon: Lock,
  },
  {
    title: "Incentiv3 : Ethereum Bounty Management System",
    description:
      "Designed a decentralized bounty workflow on Ethereum for trustless bug bounty submission, reward distribution, and transparent stakeholder coordination. A blockchain-powered task marketplace where users earn crypto by completing missions. Includes a decentralized browser-based file conversion tool with IPFS uploads and wallet-signed ownership verification. Built using Solidity, Next.js, Ethers.js, and Pinata.",
    stack: ["Solidity", "Ethereum", "Web3", "Smart Contracts", "JavaScript"],
    github: "https://github.com/anandrajpandey/Incentiv3",
    live: "https://github.com/anandrajpandey/Incentiv3",
    icon: GitBranch,
  },
];

export const experience = [
  {
    title: "Security Intern",
    company: "Association For Cybersecurity by Albus Security",
    period: "Sep 2024 - Feb 2025",
    location: "Remote",
    points: [
      "Tested production-grade web applications for XSS, CSRF, SQL injection, and broader application-layer weaknesses.",
      "Worked with a 6-member cybersecurity team to document issues, verify fixes, and improve remediation turnaround.",
      "Delivered structured reports that translated technical findings into practical engineering actions.",
    ],
    icon: Briefcase,
  },
];

export const certifications = [
  {
    title: "AWS Certified Developer - Associate",
    code: "DVA-C02",
    issuer: "Amazon Web Services",
    detail:
      "Active credential with strong focus on serverless application development and AWS-native architecture patterns.",
    verificationUrl:
      "https://www.credly.com/users/anand-raj-pandey/badges#credly",
    icon: Award,
  },
];

export const education = {
  degree: "B.E. in Information Science",
  school: "Dayananda Sagar Academy of Technology",
  period: "Expected Jun 2026",
  score: "CGPA 8.5",
};
