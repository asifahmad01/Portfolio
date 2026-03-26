<h1 align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&pause=1000&color=915EFF&center=true&vCenter=true&width=600&lines=Hi+%F0%9F%91%8B%2C+I'm+Md+Asif+Anjum;Python+Full-Stack+Developer;Generative+AI+Engineer;FastAPI+%7C+React+%7C+PostgreSQL" alt="Typing SVG" />
</h1>

<p align="center">
  <a href="https://www.linkedin.com/in/md-asif-anjum-0aa18a1a8/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://github.com/asifahmad01" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://drive.google.com/file/d/1rqmYdVVK1vY9H1vpmPfHTxgwBy9lV3uq/view?usp=sharing" target="_blank">
    <img src="https://img.shields.io/badge/Resume-915EFF?style=for-the-badge&logo=googledrive&logoColor=white" />
  </a>
  <a href="https://portfolio-asifahmad.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live-portfolio--asifahmad.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  </a>
  <img src="https://img.shields.io/github/actions/workflow/status/asifahmad01/Portfolio/deploy.yml?branch=main&style=for-the-badge&label=CI&logo=githubactions&logoColor=white" />
</p>

---

## 🚀 About This Portfolio

A modern, interactive **3D portfolio** built with React, Three.js, and Framer Motion — showcasing my work as a Python Full-Stack Developer and Generative AI Engineer.

**Live:** [portfolio-asifahmad.vercel.app](https://portfolio-asifahmad.vercel.app)

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React 18, Vite, Three.js, Framer Motion, Tailwind CSS |
| **3D / Animation** | @react-three/fiber, @react-three/drei, react-tilt |
| **Routing** | React Router DOM v6 |
| **Email** | EmailJS |
| **CI/CD** | GitHub Actions (CI) + Vercel (CD) |

---

## ✨ Features

- 🌌 **3D Hero Section** — interactive desktop PC model rendered with Three.js
- 🌍 **3D Earth** — animated globe in the Contact section
- ⭐ **Star Field Background** — dynamic particle animation
- 📱 **Fully Responsive** — mobile-first design
- 🎬 **Smooth Animations** — Framer Motion scroll-triggered transitions
- 📧 **Contact Form** — EmailJS integration for direct messages
- 🔗 **Resume Download** — one-click access to Google Drive resume

---

## 📁 Project Structure

```
Portfolio-main/
├── public/
│   ├── desktop_pc/        # 3D PC model (GLTF)
│   └── planet/            # 3D Earth model (GLTF)
├── src/
│   ├── assets/            # Images, icons, company logos
│   ├── components/
│   │   ├── canvas/        # Three.js 3D components
│   │   ├── About.jsx
│   │   ├── Hero.jsx
│   │   ├── Experience.jsx
│   │   ├── Works.jsx      # Projects
│   │   ├── Tech.jsx
│   │   ├── Contact.jsx
│   │   └── Navbar.jsx
│   ├── constants/
│   │   └── index.js       # All content data (experiences, projects, skills)
│   ├── hoc/               # Higher-order components
│   └── utils/             # Framer Motion variants
├── .github/
│   └── workflows/
│       └── deploy.yml     # CI/CD pipeline
├── vite.config.js
└── tailwind.config.js
```

---

## ⚙️ CI/CD Pipeline

```
Push to main
     │
     ├─────────────────────────────────────┐
     ▼                                     ▼
┌──────────────────────┐     ┌─────────────────────────┐
│  GitHub Actions (CI) │     │     Vercel (CD)          │
│  ──────────────────  │     │  ─────────────────────  │
│  ✔ Checkout code     │     │  ✔ Detects push to main  │
│  ✔ Setup Node 18     │     │  ✔ Installs dependencies │
│  ✔ npm ci            │     │  ✔ Runs vite build       │
│  ✔ ESLint            │     │  ✔ Deploys to CDN edge   │
│  ✔ Vite build        │     │  ✔ Live in ~30 seconds   │
└──────────────────────┘     └─────────────────────────┘
```

- **GitHub Actions** — quality gate on every push & PR (lint + build)
- **Vercel** — auto-deploys production on every push to `main`, preview deployments on PRs

---

## 🏃 Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/asifahmad01/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Other commands

```bash
npm run build    # Production build → ./dist
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

---

## 🚀 Deploy on Vercel

This project is deployed on **Vercel** with automatic deployments.

| Event | Result |
|---|---|
| Push to `main` | Production deploy → [portfolio-asifahmad.vercel.app](https://portfolio-asifahmad.vercel.app) |
| Open Pull Request | Preview deploy with unique URL |

**Setup:** Connect your GitHub repo in [vercel.com](https://vercel.com) → Import Project → Deploy. No extra config needed.

---

## 📬 Contact

**Md Asif Anjum**
📧 5841asifanjum@gmail.com
📍 Delhi, India
🔗 [LinkedIn](https://www.linkedin.com/in/md-asif-anjum-0aa18a1a8/) · [GitHub](https://github.com/asifahmad01)

---

<p align="center">Made with ❤️ using React + Three.js</p>
