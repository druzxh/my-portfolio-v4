# SYSTEM_DESIGN.md
## Technical System Architecture & Frontend Design System
**Project**: Personal Portfolio — Badrudin (Programmer Diskominfo Tangsel & CS Student ITTS)  
**Stack**: Next.js 15+ (App Router), TypeScript, Tailwind CSS v4, Framer Motion, Lucide React

---

## 1. Directory Structure (`src/`)

Struktur modular berbasis *feature-driven* dan *component atomicity* untuk memastikan maintainability tinggi:

```text
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css              # Setup theme variables, base typography, & utility classes
│   ├── layout.tsx               # Root layout, metadata SEO, OpenGraph tags, smooth scroll wrapper
│   └── page.tsx                 # Single-page assembly (mengimpor section components)
├── components/
│   ├── common/                  # Reusable UI primitives
│   │   ├── Badge.tsx            # Pill status & tech stack chips
│   │   ├── Button.tsx           # Button variant (primary, outline, ghost) dengan micro-interaction
│   │   ├── Container.tsx        # Responsive max-width wrapper (max-w-5xl)
│   │   ├── SectionHeading.tsx   # Header judul section konsisten dengan sub-title & divider
│   │   └── SocialLink.tsx       # External icon link wrapper dengan accessibility attributes
│   ├── layout/
│   │   ├── Navbar.tsx           # Sticky/floating header bar dengan blur backdrop
│   │   └── Footer.tsx           # Direct contact trigger, WhatsApp CTA, copyright & build meta
│   └── sections/                # Main single-page sections
│       ├── HeroSection.tsx      # Headline, status badge availability, CTA buttons
│       ├── ExperienceSection.tsx# Timeline peran Programmer Diskominfo Tangsel
│       ├── EducationSection.tsx # Timeline akademik ITTS (Informatika)
│       ├── ProjectsSection.tsx  # Grid wrapper untuk ProjectCard (Public Sector, API, Tools)
│       ├── ProjectCard.tsx      # Komponen kartu proyek (tags, problem/solution, action buttons)
│       ├── SkillsSection.tsx    # Categorized skill badges (Languages, Frameworks, Tools)
│       └── ActivitiesSection.tsx# Mentorship & community contribution cards
├── config/
│   └── site.ts                  # Site metadata, URL base, SEO keywords, open graph details
├── data/
│   └── portfolio.ts             # Static typed data source (Profile, Education, Projects, Skills)
├── hooks/
│   └── useScrollSpy.ts          # Active navigation spy saat scrolling
├── lib/
│   ├── motion.ts                # Preset Framer Motion transition & animation variants
│   └── utils.ts                 # Helper fungsi (misal: clsx / tailwind-merge helper)
└── types/
    └── portfolio.ts             # Strict TypeScript interfaces & definitions