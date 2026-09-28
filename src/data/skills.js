import {
  Layout,
  Server,
  Wrench,
} from "lucide-react";

import backendImg from "../assets/backend.png";
import frontendImg from "../assets/frontend.png";
import toolsImg from "../assets/tools.png";

export const sections = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend Web Engineering",
    icon: Layout,
    subtitle:
      "Building modern interfaces with component-driven architecture",
    image: frontendImg,
    description:
      "Primary expertise in observing details and crafting high-performance, responsive, and visually refined web applications. Driven by component modularity, fluid interactions, and modern UI systems.",
  },

  {
    id: "backend",
    number: "02",
    title: "Backend Systems, Databases & Authentication",
    icon: Server,
    subtitle:
      "Designing APIs, authorization, data modeling and application logic",
    image: backendImg,
    description:
      "Solid understanding of server-side architecture, designing clean RESTful APIs with Node.js & Express.js, handling database structures using MongoDB & Mongoose. Experienced in securing applications with modern authentication solutions like BetterAuth, JWT, and session management.",
  },

  {
    id: "tools",
    number: "03",
    title: "Tools, Workflow & Deployment",
    icon: Wrench,
    subtitle:
      "Development environment, version control, and cloud deployment",
    image: toolsImg,
    description:
      "Utilizing industry-standard development workflows to write clean, maintainable code, test API endpoints, and deploy applications to production smoothly.",
  },
];