import { Layout, Server, Database, Sparkles, ShieldCheck, Wrench } from "lucide-react";
import frontendImg from "../assets/frontend.png";
import backendImg from "../assets/backend.png";
import toolsImg from "../assets/tools.png";
export const sections = [
  {
    id: "frontend",
    number: "01",
    title: "Web Development & Frontend Engineering",
    icon: Layout,
    subtitle: "Building modern interfaces with component-driven architecture",
    image: frontendImg,
    description:
      "Primary expertise in observing details and crafting high-performance, responsive, and visually refined web applications. Driven by component modularity, fluid interactions, and modern UI systems.",

    allSkills: [
        "React.js", "Next.js", "JavaScript", "TypeScript",
        "HTML", "CSS", "Tailwind CSS", "HeroUI","Framer Motion",
        "TenStack Query","Stripe Integration", "Responsive Design",
      ], 
  },
  {
    id: "backend",
    number: "02",
    title: "Backend Systems, Databases & Authentication ",
    icon: Server,
    subtitle: "Designing APIs, authorization, Data modeling and application logic",
    image: backendImg,
    description:
      "Solid understanding of server-side architecture, designing clean RESTful APIs with Node.js & Express.js, handling database structures using MongoDB & Mongoose. Experienced in securing applications with modern authentication solutions like BetterAuth, JWT, and session management.",
    
    allSkills:[
        "Node.js", "Express.js", "BetterAuth","Middleware Design", "MongoDB", "Mongoose",
        "REST APIs", "Authentication", "JWT", ,
      ], 
  },

  {
    id: "tools",
    number: "04",
    title: "Tools, Workflow & Deployment",
    icon: Wrench,
    subtitle: "Development environment, version control, and cloud deployment",
    image: toolsImg,
    description:
      "Utilizing industry-standard development workflows to write clean, maintainable code, test API endpoints, and deploy applications to production smoothly.",
    
    allSkills: ["Git / GitHub", "Vercel", "Postman", "VS Code", "Cursor", "Figma"],
  },
];