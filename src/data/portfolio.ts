import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Badrudin',
    headline: 'Programmer at Diskominfo Tangsel | CS Student at Institut Teknologi Tangerang Selatan (ITTS)',
    availability: 'Open for Mid/Senior Internships & Strategic Tech Roles',
    summary:
      'Programmer di Diskominfo Tangerang Selatan dan mahasiswa Teknik Informatika di Institut Teknologi Tangerang Selatan (ITTS). Berpengalaman merancang RESTful API, integrasi data antar-layanan publik daerah, dan arsitektur backend modular yang andal.',
    links: {
      cv: '/assets/badrudin-resume.pdf',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com/in/badrudin',
      email: 'contact@badrudin.dev',
      whatsapp:
        'https://wa.me/628XXXXXXXXXX?text=Halo%20Badrudin%2C%20saya%20melihat%20portofolio%20Anda',
    },
  },
  experience: [
    {
      id: 'exp-1',
      role: 'Programmer',
      organization: 'Dinas Komunikasi dan Informatika (Diskominfo) Tangerang Selatan',
      period: 'Aktif (2023 - Sekarang)',
      location: 'Tangerang Selatan, Indonesia',
      responsibilities: [
        'Merancang dan mengembangkan RESTful API untuk integrasi sistem layanan internal dan publik Pemkot Tangerang Selatan.',
        'Mengelola interoperabilitas data antar-aplikasi kedinasan (Sisumaker, Amando) dan pemeliharaan backend.',
        'Mendukung keandalan, performa, dan keamanan sistem administrasi digital pemerintahan daerah.',
      ],
    },
  ],
  education: [
    {
      id: 'edu-1',
      institution: 'Institut Teknologi Tangerang Selatan (ITTS)',
      degree: 'S1 Teknik Informatika',
      period: 'Sedang Berjalan (Kelas Karyawan)',
      highlights: [
        'Arsitektur Perangkat Lunak & Clean Architecture',
        'Basis Data & Sistem Terdistribusi',
        'Jaringan Komputer & Keamanan Sistem Informasi',
      ],
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Municipal Integration & Archive Service API',
      type: 'enterprise',
      typeLabel: 'Public Sector / Enterprise',
      problemSolved:
        'Menjembatani integrasi data antar-aplikasi kedinasan Pemkot Tangerang Selatan (Sisumaker, Amando) dengan arsitektur microservices API yang aman, terstandarisasi, dan terpusat.',
      solution:
        'Mengembangkan RESTful endpoint dengan autentikasi berbasis token, rate limiting, logging transaksi terintegrasi, dan sinkronisasi background worker menggunakan Laravel & Docker.',
      techStack: ['PHP', 'Laravel', 'MySQL', 'REST API', 'Docker', 'Postman'],
      githubUrl: 'https://github.com',
      liveUrl: '',
      featured: true,
    },
    {
      id: 'proj-2',
      title: 'Enterprise Library Catalog & Access Management',
      type: 'academic',
      typeLabel: 'Academic & Architecture',
      problemSolved:
        'Implementasi RESTful backend modern menggunakan arsitektur bersih (Clean Architecture), integrasi ORM efisien, dan dokumentasi otomatis OpenAPI/Swagger.',
      solution:
        'Menerapkan pola Repository & Unit of Work dengan ASP.NET Core dan EF Core, memastikan pemisahan concern tingkat tinggi serta kemudahan pengujian unit.',
      techStack: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQLite', 'Swagger'],
      githubUrl: 'https://github.com',
      liveUrl: '',
      featured: true,
    },
    {
      id: 'proj-3',
      title: 'Developer Auth & Starter Scaffolding Engine',
      type: 'community',
      typeLabel: 'Tooling & Community',
      problemSolved:
        'Boilerplate modular untuk mempercepat setup autentikasi berbasis role (RBAC) pada workshop pengembang aplikasi dan prototype cepat.',
      solution:
        'Paket starter kit siap pakai dengan modul permission guard, UI Tailwind yang bersih, audit log login, dan generator template otomatis.',
      techStack: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL', 'PHP'],
      githubUrl: 'https://github.com',
      liveUrl: '',
      featured: true,
    },
  ],
  skills: [
    {
      category: 'Languages',
      items: ['PHP', 'TypeScript', 'JavaScript', 'C#', 'Dart', 'Go', 'SQL'],
    },
    {
      category: 'Frameworks & Backend',
      items: ['Laravel', 'ASP.NET Core', 'Next.js', 'React', 'Tailwind CSS', 'Flutter'],
    },
    {
      category: 'Database & DevOps Tools',
      items: ['MySQL', 'PostgreSQL', 'SQLite', 'Docker', 'Git', 'Postman', 'Linux/Nginx'],
    },
  ],
  activities: [
    {
      id: 'act-1',
      role: 'Co-Mentor Workshop Web Development',
      organization: 'Komunitas Pengembang / Kampus ITTS',
      period: '2026',
      description:
        'Membimbing instalasi environment pengembangan, konfigurasi auth controller & middleware, serta best practices struktur RESTful API modular untuk peserta pemula.',
    },
  ],
};
