# Product Requirement Document (PRD)
## Personal Portfolio Website — Badrudin (Programmer Diskominfo Tangsel & Mahasiswa ITTS)

---

## 1. Executive Summary & Objectives

- **Target Persona**: Tech Recruiters, Engineering Leads, Instansi Pemerintah/Swasta, dan Evaluator Fast-Track Hiring.
- **Tujuan Utama**:
  - Memvalidasi kompetensi teknis praktis (pengalaman *real-world* di instansi pemerintah daerah + fondasi akademis ITTS).
  - Menyajikan portofolio yang cepat dipindai (< 30 detik) dan berfokus pada hasil (*outcome-driven*).
  - Membuka akses cepat ke CV/Resume (PDF), profil GitHub, LinkedIn, dan kontak langsung via WhatsApp/Email.
- **Value Proposition**: Mahasiswa ITTS yang aktif bekerja sebagai software programmer di Diskominfo Tangerang Selatan, memiliki spesialisasi dalam integrasi layanan API publik, arsitektur backend modular, dan pengembangan sistem instansi.

---

## 2. Technical Stack & Architecture

- **Framework**: Next.js 15+ (App Router, Server Components untuk SEO).
- **Styling**: Tailwind CSS, Lucide Icons.
- **Language**: TypeScript (Strict mode).
- **Hosting & Deploy**: Vercel / Cloudflare Pages, mobile-first design.

---

## 3. Page Structure (Single-Page App)

### 3.1 Hero Section
- **Headline**: "Badrudin — Programmer at Diskominfo Tangerang Selatan & Computer Science Student at ITTS".
- **Status Badge**: `Open for Mid/Senior Internships & Strategic Tech Roles`.
- **Primary CTAs**:
  - `Download CV (PDF)`
  - Direct links ke GitHub & LinkedIn.

### 3.2 Experience & Education (Two-Column / Alternating Timeline)
- **Work Experience**: Programmer di Dinas Komunikasi dan Informatika Tangerang Selatan (pengembangan API, integrasi data antar-aplikasi kota, pemeliharaan sistem internal).
- **Academics**: Institut Teknologi Tangerang Selatan (ITTS) — Program Studi Informatika / Sistem Informasi (Kelas Executive/Malam).

### 3.3 Featured Projects (Grid Card Layout)
- 3 Proyek Utama:
  1. **Enterprise / Public Sector**: API Integrasi & Layanan Arsip/Layanan Publik Pemkot Tangsel.
  2. **Academic & System Dev**: ASP.NET Core Web API Catalog / Clean Architecture System.
  3. **Community & Tooling**: Boilerplate Auth & Scaffolding / Mobile Logistics Prototype.
- Setiap kartu memuat: Tech stack tags, ringkasan arsitektur (Problem & Solution), link GitHub Repo, dan link Live Demo.

### 3.4 Skills & Tools
- Pengelompokan: Languages, Frameworks & Libraries, DevOps & Databases.

### 3.5 Activities & Community
- Pengalaman co-mentor workshop web development, kolaborasi proyek instansi, dan riset/komunitas kampus.

### 3.6 Direct Contact & Footer
- Quick trigger `mailto:` profesional dan link direct chat WhatsApp dengan pre-filled message.

---

## 4. Structured Data (JSON)

```json
{
  "profile": {
    "name": "Badrudin",
    "headline": "Programmer at Diskominfo Tangsel | CS Student at Institut Teknologi Tangerang Selatan (ITTS)",
    "availability": "Open for Advanced Internship & Technical Collaborations",
    "summary": "Programmer di Diskominfo Tangerang Selatan dan mahasiswa Informatika di Institut Teknologi Tangerang Selatan (ITTS). Berpengalaman membangun RESTful API, integrasi data antar-layanan publik daerah, dan arsitektur backend modular.",
    "links": {
      "cv": "/assets/badrudin-resume.pdf",
      "github": "[https://github.com](https://github.com)",
      "linkedin": "[https://linkedin.com/in/badrudin](https://linkedin.com/in/badrudin)",
      "email": "contact@badrudin.dev",
      "whatsapp": "[https://wa.me/628XXXXXXXXXX?text=Halo%20Badrudin%2C%20saya%20melihat%20portofolio%20Anda](https://wa.me/628XXXXXXXXXX?text=Halo%20Badrudin%2C%20saya%20melihat%20portofolio%20Anda)"
    }
  },
  "experience": [
    {
      "id": "exp-1",
      "role": "Programmer",
      "organization": "Diskominfo Tangerang Selatan",
      "period": "Aktif",
      "responsibilities": [
        "Merancang dan mengembangkan RESTful API untuk integrasi sistem layanan internal dan publik.",
        "Mengelola interoperabilitas data antar-aplikasi kedinasan dan pemeliharaan backend.",
        "Mendukung keandalan dan keamanan sistem administrasi digital pemerintahan daerah."
      ]
    }
  ],
  "education": [
    {
      "id": "edu-1",
      "institution": "Institut Teknologi Tangerang Selatan (ITTS)",
      "degree": "S1 Teknik Informatika",
      "period": "Sedang Berjalan",
      "highlights": [
        "Arsitektur Perangkat Lunak",
        "Basis Data & Sistem Terdistribusi",
        "Jaringan Komputer & Keamanan Sistem"
      ]
    }
  ],
  "projects": [
    {
      "id": "proj-1",
      "title": "Municipal Integration & Archive Service API",
      "type": "enterprise",
      "problemSolved": "Menjembatani integrasi data antar-aplikasi kedinasan Pemkot Tangerang Selatan (Sisumaker, Amando) dengan arsitektur microservices API yang aman dan terpusat.",
      "techStack": ["PHP", "Laravel", "MySQL", "REST API", "Docker"],
      "githubUrl": "[https://github.com](https://github.com)",
      "liveUrl": ""
    },
    {
      "id": "proj-2",
      "title": "Enterprise Library Catalog & Access Management",
      "type": "academic",
      "problemSolved": "Implementasi RESTful backend modern menggunakan arsitektur bersih, integrasi ORM efisien, dan dokumentasi otomatis OpenAPI/Swagger.",
      "techStack": ["C#", "ASP.NET Core", "Entity Framework Core", "SQLite", "Swagger"],
      "githubUrl": "[https://github.com](https://github.com)",
      "liveUrl": ""
    },
    {
      "id": "proj-3",
      "title": "Developer Auth & Starter Scaffolding Engine",
      "type": "community",
      "problemSolved": "Boilerplate modular untuk mempercepat setup autentikasi berbasis role (RBAC) pada workshop pengembang aplikasi.",
      "techStack": ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
      "githubUrl": "[https://github.com](https://github.com)",
      "liveUrl": ""
    }
  ],
  "skills": [
    {
      "category": "Languages",
      "items": ["PHP", "TypeScript", "JavaScript", "C#", "Dart", "Go", "SQL"]
    },
    {
      "category": "Frameworks & Backend",
      "items": ["Laravel", "ASP.NET Core", "Next.js", "React", "Tailwind CSS", "Flutter"]
    },
    {
      "category": "Database & DevOps Tools",
      "items": ["MySQL", "PostgreSQL", "SQLite", "Docker", "Git", "Postman", "Linux/Nginx"]
    }
  ],
  "activities": [
    {
      "role": "Co-Mentor Workshop Web Development",
      "organization": "Komunitas Pengembang / Kampus",
      "period": "2026",
      "description": "Membimbing instalasi environment, konfigurasi auth controller, dan struktur API modular untuk peserta pemula."
    }
  ]
}