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
      github: 'https://github.com/druzxh',
      linkedin: 'https://www.linkedin.com/in/bdrudin/',
      instagram: 'https://www.instagram.com/bd.ruu/',
      email: 'badrudin.on@gmail.com',
      whatsapp:
        'https://wa.me/6281585768935?text=Halo%20Badrudin%2C%20saya%20melihat%20portofolio%20Anda',
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
      id: 'proj-diskominfo',
      title: 'Municipal Integration & Archive Service API',
      type: 'enterprise',
      typeLabel: 'Public Sector / Enterprise',
      problemSolved:
        'Menjembatani integrasi dan interoperabilitas data antar-aplikasi kedinasan Pemkot Tangerang Selatan (Sisumaker, Amando) dengan arsitektur microservices API yang aman, terstandarisasi, dan terpusat.',
      solution:
        'Mengembangkan RESTful endpoint dengan token-based authentication, rate limiting, logging audit transaksi terintegrasi, dan sinkronisasi background worker menggunakan Laravel & Docker.',
      techStack: ['PHP', 'Laravel', 'MySQL', 'REST API', 'Docker', 'Postman'],
      githubUrl: 'https://github.com/druzxh',
      liveUrl: '',
      featured: true,
    },
    {
      id: 'proj-gcpxkas',
      title: 'Squad GCP Financial & Member Management System',
      type: 'enterprise',
      typeLabel: 'Enterprise & Finance',
      problemSolved:
        'Sistem manajemen perputaran kas organisasi dan tata kelola keanggotaan dengan isolasi data pengguna serta otorisasi yang ketat.',
      solution:
        'Membangun platform Next.js 15, TypeScript, Tailwind CSS, dan Supabase (PostgreSQL) dengan Row Level Security (RLS), Supabase Auth, pelacakan riwayat kas, dan ringkasan analitik real-time.',
      techStack: ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com/druzxh/gcpxkas',
      liveUrl: 'https://gcpxkas.vercel.app',
      featured: true,
    },
    {
      id: 'proj-kasir',
      title: 'Point of Sale & Kasir Transaction Engine',
      type: 'community',
      typeLabel: 'Fullstack / Commercial',
      problemSolved:
        'Sistem pencatatan transaksi ritel, pengelolaan katalog barang, dan rekapitulasi penjualan untuk operasional kasir harian.',
      solution:
        'Mengembangkan backend RESTful API menggunakan Laravel 8 dan database MySQL, terhubung ke frontend responsif Vue.js dengan otomasi kalkulasi total serta cetak invoice.',
      techStack: ['Laravel 8', 'PHP', 'Vue.js', 'MySQL', 'REST API', 'Vercel'],
      githubUrl: 'https://github.com/druzxh/kasir-backend',
      liveUrl: 'https://kasir-app-nine.vercel.app',
      featured: true,
    },
    {
      id: 'proj-vehicles',
      title: 'Vehicles Inventory & Specification Platform',
      type: 'academic',
      typeLabel: 'System Architecture & Fullstack',
      problemSolved:
        'Pendataan spesifikasi armada kendaraan, pengelolaan catatan inventaris, dan validasi data terstruktur pada sistem transportasi.',
      solution:
        'Menerapkan arsitektur fullstack modern menggunakan Adonis.js (Node.js/TypeScript backend framework) dengan MySQL serta integrasi antarmuka dinamis Vue.js.',
      techStack: ['Adonis.js', 'TypeScript', 'Vue.js', 'Node.js', 'MySQL', 'REST API'],
      githubUrl: 'https://github.com/druzxh/vehicles-data-app',
      liveUrl: '',
      featured: true,
    },
    {
      id: 'proj-library-api',
      title: 'Library Catalog & Access Control API',
      type: 'academic',
      typeLabel: 'Backend Architecture',
      problemSolved:
        'Kebutuhan API backend yang aman untuk sirkulasi perpustakaan dengan pembagian hak akses bertingkat antara Administrator dan Pengguna umum.',
      solution:
        'Merancang RESTful API modular berbasis TypeScript dan Node.js dengan Role-Based Access Control (RBAC), skema validasi request, dan error handling terpusat.',
      techStack: ['TypeScript', 'Node.js', 'Express', 'SQL', 'REST API', 'Postman'],
      githubUrl: 'https://github.com/druzxh/app-library-api',
      liveUrl: '',
      featured: true,
    },
    {
      id: 'proj-wapi',
      title: 'WAPI — Interactive API Service Client',
      type: 'community',
      typeLabel: 'Modern Web App & Tooling',
      problemSolved:
        'Antarmuka aplikasi web cepat untuk konsumsi dan visualisasi data API publik secara real-time dengan pengalaman pengguna interaktif.',
      solution:
        'Dibangun dengan Next.js 16, React 19, TypeScript, Axios, dan Headless UI dengan optimalisasi partial prefetching dan tata letak mobile-first.',
      techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Axios', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com/druzxh/wapi',
      liveUrl: 'https://wapi-ten.vercel.app',
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
