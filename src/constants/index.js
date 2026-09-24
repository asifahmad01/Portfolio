import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  jobit,
  dashboard,
  homerai,
  nextjs,
  postgresql,
  linkedin,
  profanity,
  chatwithpdf,
  githubSocial,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

let socialMedia = [
  {
    title: "GitHub",
    socialLink: "https://github.com/asifahmad01",
    icon: githubSocial,
  },
  {
    title: "LinkedIn",
    socialLink: "https://www.linkedin.com/in/md-asif-anjum-0aa18a1a8/",
    icon: linkedin,
  },
];

const services = [
  {
    title: "Backend & REST APIs",
    icon: backend,
  },
  {
    title: "React.js / Next.js / TypeScript",
    icon: web,
  },
  {
    title: "Generative AI (LangChain, RAG)",
    icon: mobile,
  },
  {
    title: "DevOps & Cloud (Docker, K8s, AWS)",
    icon: creator,
  },
];

const skillCategories = [
  {
    title: "Backend & APIs",
    skills:
      "Python, FastAPI, Flask, Django (working knowledge), Node.js, Express.js, SQLAlchemy, Alembic, REST APIs, JWT, Keycloak",
  },
  {
    title: "Frontend",
    skills:
      "React.js, Next.js, TypeScript, JavaScript (ES6+), HTML, CSS, Material UI",
  },
  {
    title: "Databases",
    skills:
      "PostgreSQL, MySQL, MongoDB, Microsoft SQL Server, ChromaDB",
  },
  {
    title: "Architecture",
    skills:
      "Microservices, system design, scalability, API design, async programming, database design, performance optimization, RBAC",
  },
  {
    title: "Generative AI",
    skills:
      "OpenAI API, LangChain, RAG, vector embeddings, similarity search, prompt engineering",
  },
  {
    title: "DevOps & Cloud",
    skills: "Docker, Kubernetes, AWS EC2, Linux, Nginx",
  },
  {
    title: "Developer Tools",
    skills: "Git, GitHub, Postman, Cursor, Claude Code, OpenAI Codex",
  },
];

const technologies = [
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: creator,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "FastAPI",
    icon: backend,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Nucelux Pvt. Ltd. · Bengaluru",
    icon: meta,
    iconBg: "#383E56",
    date: "Nov 2025 – Present",
    points: [
      "Built and scaled a production-grade HRMS & Payroll platform using Python, FastAPI, SQLAlchemy, PostgreSQL, Alembic, React, TypeScript, and Material UI — 150+ async REST APIs and 50+ database tables across payroll, attendance, employee lifecycle, and approval workflows.",
      "Implemented Keycloak/JWT-based RBAC with 25+ permissions, position-based approval workflows, and audit trails; developed 100+ role-aware React/TypeScript components for secure workflow-driven experiences.",
      "Containerized services with Docker, supported Kubernetes deployments, and worked across API, database, frontend, authentication, and production troubleshooting for end-to-end feature delivery.",
    ],
  },
  {
    title: "Frontend Development Associate & Trainer",
    company_name: "MyAnatomy · Noida",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Apr 2025 – Oct 2025",
    points: [
      "Developed full-stack application modules using MongoDB, Express.js, React.js/Next.js, and Node.js, integrating REST APIs and supporting Git-based development and deployments on AWS.",
      "Delivered backend and full-stack development training to 1500+ engineering students, covering REST API development, databases, application architecture, and deployment fundamentals.",
    ],
  },
  {
    title: "Software Development Engineer (Python)",
    company_name: "Robomanthan · Remote",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 – Feb 2025",
    points: [
      "Built backend systems using Python, FastAPI, PostgreSQL, and SQLAlchemy — REST APIs, business workflows, authentication, and third-party integrations.",
      "Worked on backend architecture, database design, scalability, and production troubleshooting across application, server, and network layers.",
      "Used Docker, Linux, and deployment environments for service configuration, application setup, and production support.",
      "Used Cursor and AI-assisted development for rapid development, debugging, and refactoring; integrated React.js interfaces with backend APIs.",
    ],
  },
  {
    title: "Software Developer (GenAI)",
    company_name: "TwinHome · Noida",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2023 – Dec 2023",
    points: [
      "Developed an AI-powered chatbot backend using Node.js, Express.js, OpenAI, LangChain, and RAG; integrated WhatsApp API workflows using Python & Flask for context-aware conversations.",
      "Built an AI interview assistant using Whisper AI and OpenAI for transcription and resume-based answer evaluation, with MongoDB persistence and deployment on AWS EC2.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Asif delivered our HRMS platform with exceptional quality. His FastAPI architecture and attention to async performance made our system handle scale effortlessly.",
    name: "Team Lead",
    designation: "Engineering Manager",
    company: "Nucelux Pvt. Ltd.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Asif's ability to bridge backend and frontend is rare. He built robust APIs and clean React components that our team could maintain with ease.",
    name: "Senior Developer",
    designation: "Tech Lead",
    company: "MyAnatomy",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    testimonial:
      "The AI chatbot Asif built for us using LangChain and WhatsApp API transformed how we engage with customers. Delivered on time with great documentation.",
    name: "Product Manager",
    designation: "PM",
    company: "TwinHome",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
];

const projects = [
  {
    name: "AI Chat Application",
    description:
      "RAG-based chatbot using Flask, LangChain, OpenAI API, OpenAI Embeddings, and ChromaDB; extended with a React + Node.js/Express application layer, JWT authentication, and persistent conversations in MongoDB.",
    tags: [
      {
        name: "langchain/rag",
        color: "blue-text-gradient",
      },
      {
        name: "flask+chromadb",
        color: "green-text-gradient",
      },
      {
        name: "react+mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: chatwithpdf,
    source_code_link: "https://github.com/asifahmad01/Ai-chatbot-webapplication",
  },
  {
    name: "Job Hunter Bot",
    description:
      "AI-powered job application automation tool that searches and applies to Python/FastAPI/React/GenAI roles across Naukri, LinkedIn, Wellfound, Indeed, and Glassdoor. Uses Claude AI for form filling, skill-based filtering, a FastAPI backend, React dashboard, and WebSocket live logs.",
    tags: [
      {
        name: "python/fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "claude-ai",
        color: "green-text-gradient",
      },
      {
        name: "playwright",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/asifahmad01/job-hunter",
  },
  {
    name: "HRMS Lite",
    description:
      "Production-grade Human Resource Management System with employee management, attendance tracking, and leave workflows. Built with FastAPI async backend, React + TypeScript frontend, and PostgreSQL. Deployed on Vercel + Render with GitHub Actions CI/CD.",
    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "react+typescript",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/asifahmad01/hrms-lite",
  },
  {
    name: "Cybership Carrier Integration",
    description:
      "Production-ready TypeScript microservice wrapping the UPS Rating API for carrier rate shopping. Features OAuth token lifecycle management, Zod validation, domain-driven architecture, and an extensible carrier interface. Fully tested with Vitest + nock.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "ups-api",
        color: "pink-text-gradient",
      },
    ],
    image: homerai,
    source_code_link: "https://github.com/asifahmad01/cybership-carrier-integration",
  },
  {
    name: "InnoStay – Hotel Management App",
    description:
      "Full MERN stack hotel management application with CRUD-driven backend, responsive React frontend, JWT authentication, and Docker support. Handles room bookings, guest management, and billing workflows.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: profanity,
    source_code_link: "https://github.com/asifahmad01/InnoStay-MERN-Full-Stack-Hotel-Management-App",
  },
  {
    name: "FoodTime",
    description:
      "MERN-based food delivery application for browsing food items, placing orders, and managing user accounts. Features a responsive UI, user authentication, cart management, and order tracking.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/asifahmad01/FoodTime",
  },
];

export {
  services,
  skillCategories,
  technologies,
  experiences,
  testimonials,
  projects,
  socialMedia,
};
