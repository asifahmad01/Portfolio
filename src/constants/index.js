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
    title: "Python & FastAPI Backend",
    icon: backend,
  },
  {
    title: "React.js / Next.js Frontend",
    icon: web,
  },
  {
    title: "Generative AI & LangChain",
    icon: mobile,
  },
  {
    title: "DevOps & Cloud (Docker, K8s, AWS)",
    icon: creator,
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
    company_name: "Nucelux Pvt. Ltd.",
    icon: meta,
    iconBg: "#383E56",
    date: "Nov 2025 – Present",
    points: [
      "Architected a production-grade HRMS & Finance platform using FastAPI, delivering 150+ async REST APIs and designing 50+ PostgreSQL tables for payroll, attendance, and approval workflows.",
      "Implemented a position-based approval engine with multi-step workflows, audit trails, and RBAC (25+ permissions) using Keycloak (JWT).",
      "Developed 100+ frontend components using React, TypeScript, and Material UI; deployed services using Docker & Kubernetes.",
    ],
  },
  {
    title: "Frontend Development Associate & Trainer",
    company_name: "MyAnatomy Integration",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Apr 2025 – Oct 2025",
    points: [
      "Developed full-stack applications using MongoDB, Express.js, React.js/Next.js, and Node.js; followed Git-based workflows and supported deployments on AWS.",
      "Trained and mentored student teams on real-world full-stack development projects.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Dhurina Venture Pvt Ltd",
    icon: tesla,
    iconBg: "#383E56",
    date: "Nov 2024 – Feb 2025",
    points: [
      "Built scalable RESTful APIs using Node.js, Express.js, and MongoDB for efficient data operations.",
      "Developed responsive user interfaces using React, Tailwind CSS, and Bootstrap.",
    ],
  },
  {
    title: "Software Developer (GenAI)",
    company_name: "TwinHome",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jun 2023 – Dec 2023",
    points: [
      "Designed and developed an AI-powered chatbot using Node.js and Express.js, integrating OpenAI's ChatGPT via LangChain.",
      "Integrated the chatbot with WhatsApp Business API using Python & Flask; stored conversation data in MongoDB and deployed on AWS EC2.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "SimplifyNote",
    icon: tesla,
    iconBg: "#383E56",
    date: "Nov 2022 – Dec 2022",
    points: [
      "Built an automated note-taking Chrome Extension using React.js and JavaScript.",
      "Developed dashboards using React and MongoDB, and integrated secure payments via Stripe API.",
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
    name: "AI Chatbot Web Application",
    description:
      "Full-stack AI chat system with a React.js frontend, Node.js + Express backend, and a Flask-based AI service using LangChain and OpenAI API. Implements JWT authentication, real-time messaging, and persistent chat storage using MongoDB. Also integrated with WhatsApp Business API.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "langchain",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: chatwithpdf,
    source_code_link: "https://github.com/asifahmad01/Ai-chatbot-webapplication",
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
  technologies,
  experiences,
  testimonials,
  projects,
  socialMedia,
};
