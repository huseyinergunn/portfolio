export const tr = {
  nav: {
    home: 'Ana Sayfa',
    about: 'Hakkımda',
    experience: 'Deneyim',
    projects: 'Projeler',
    contact: 'İletişim',
  },

  homepage: {
    badge: 'Yeni projelere açığım',
    subtitle: 'Dokuz Eylül Üniversitesi · Bilgisayar Bilimleri Mezunu',
    role: 'Full Stack Developer',
    description: 'MERN Stack, TypeScript ve NestJS ile SaaS uygulamaları geliştiriyor, Groq ve n8n gibi araçlarla AI ve otomasyon entegre ediyorum.',
    cta_projects: 'Projelerimi Gör',
    cta_contact: 'İletişime Geç',
    scroll: 'Aşağı kaydır',
  },

  about: {
    section_label: 'HAKKIMDA',
    title: 'Ben Kimim?',
    description1: 'Dokuz Eylül Üniversitesi Bilgisayar Bilimleri mezunuyum. MERN Stack ve .NET ekosistemi (ASP.NET MVC, Entity Framework) ile ölçeklenebilir, kullanıcı odaklı full-stack uygulamalar geliştiriyorum.',
    description2: 'AI destekli çözümleri yazılım iş akışlarına entegre etmeye ilgi duyuyor; veritabanı tasarımından modern UI implementasyonuna kadar uçtan uca proje yönetimi konusunda deneyim kazanıyorum.',
    tags: ['Sürekli Öğrenen', 'Çözüm Odaklı', 'Takım Oyuncusu'],
    skills_title: 'Teknik Yetkinlikler',
    skills: {
      frontend:   { label: 'FRONTEND',                items: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'HTML5', 'CSS3'] },
      backend:    { label: 'BACKEND',                 items: ['Node.js', 'Express.js', 'NestJS', 'Prisma ORM', 'ASP.NET MVC', 'Entity Framework', 'RESTful APIs'] },
      databases:  { label: 'VERİTABANI',              items: ['PostgreSQL', 'MongoDB', 'MS SQL Server'] },
      tools:      { label: 'ARAÇLAR & TEKNOLOJİLER', items: ['Git & GitHub', 'Postman', 'Vercel / Render', 'Cloudinary', 'JWT', 'n8n (Automation)', 'AI / LLM Integration'] },
      language:   { label: 'YABANCI DİL',              items: ['İngilizce B2'] },
    },
    internship: {
      title: 'Back-End Developer Intern',
      company: 'SoftNET Yönetim Bilgi Sistemleri',
      location: 'Türkiye',
      date: 'Tem – Ağu 2024',
      badge: 'STAJ',
      description: 'ASP.NET MVC ve Entity Framework kullanarak ürünler, siparişler ve kullanıcılar gibi temel iş birimleri için CRUD modülleri geliştirdim. MS SQL Server\'da ilişkisel şemalar tasarladım, stored procedure yazdım ve kıdemli geliştiricilerle code review süreçlerine katılarak Git tabanlı versiyon kontrolüne pratik deneyim kazandım.',
    },
  },

  experience: {
    section_label: 'DENEYİM',
    title: 'İş Deneyimleri',
    cv_button: 'CV İndir',
    internship: {
      title: 'Back-End Developer Intern',
      badge: 'STAJ',
      company: 'SoftNET Yönetim Bilgi Sistemleri',
      location: 'Türkiye',
      date: 'Temmuz 2024 – Ağustos 2024',
      bullets: [
        'ASP.NET MVC ve Entity Framework kullanarak ürünler, siparişler ve kullanıcılar gibi temel iş birimleri için CRUD modülleri geliştirdim; manuel veri girişi süresini azalttım.',
        'MS SQL Server\'da ilişkisel şemalar tasarladım, stored procedure yazdım ve yavaş sorguları tespit ederek veri erişim performansını iyileştirdim.',
        'Kıdemli geliştiricilerle code review süreçlerine ve stand-up toplantılarına katılarak kurumsal MVC mimarisine ve Git tabanlı versiyon kontrolüne pratik deneyim kazandım.',
      ],
      tags: ['C#', 'ASP.NET MVC', 'Entity Framework', 'MS SQL Server', 'RESTful APIs', 'Postman'],
    },
    banner: 'Full-stack projeler geliştirirken bir ekiple birlikte çalışmak ve katkı sağlamak istiyorum.',
  },

  projects: {
    section_label: 'PROJELER',
    title: 'Öne Çıkan Çalışmalar',
    github_label: 'GitHub',
    demo_label: 'Demo',
    items: [
      {
        id: 'fintrack',
        name: 'Fintrack',
        subtitle: 'AI Destekli Finansal Yönetim & Faturalama Platformu',
        description: 'Groq (Llama 3.3) destekli OCR teknolojisiyle fiş ve faturaları otomatik işleyen full-stack SaaS muhasebe platformu Fatura oluşturma ve gerçek zamanlı nakit akışını gösteren analitik dashboard da içermektedir.',
        highlights: ['Groq (Llama 3.3)', 'HTTP-Only Cookie Auth', 'TypeScript'],
        tags: ['Next.js 14', 'NestJS', 'PostgreSQL', 'Prisma', 'React Query', 'Tailwind CSS', 'Groq (Llama 3.3)', 'Cloudinary'],
      },
      {
        id: 'reserveai',
        name: 'ReserveAI',
        subtitle: 'AI Destekli Randevu Otomasyonu',
        description: 'Kullanıcıların doğal dilde randevu oluşturabildiği, Groq (Llama 3.3) destekli akıllı bir SaaS sistemi. n8n ve Railway üzerindeki asenkron iş akışlarıyla manuel müdahaleyi ~%80 azaltmaktadır. HTTP-Only Cookie ve SameSite config ile XSS/CSRF koruması sağlamaktadır.',
        highlights: ['Groq (Llama 3.3)', 'HTTP-Only Cookie Auth', 'TypeScript'],
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TypeScript', 'Groq (Llama 3.3)', 'n8n', 'Railway'],
      },
      {
        id: 'nexpos',
        name: 'NexPos',
        subtitle: 'Fullstack Satış Noktası & Stok Yönetim Sistemi',
        description: 'Perakende operasyonlarını dijitalleştiren kapsamlı bir POS sistemi. Gerçek zamanlı stok takibi, dinamik fatura oluşturma, kategori bazlı ürün yönetimi ve kullanıcı rolleriyle yetkilendirme içermektedir. Dark mode destekli responsive arayüz ve Redux Toolkit ile optimize edilmiş state yönetimi sunmaktadır.',
        highlights: ['MERN Stack', 'Redux Toolkit'],
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'Tailwind CSS', 'REST API'],
      },
    ],
  },

  contact: {
    section_label: 'İLETİŞİM',
    title: 'Yeni Fırsatlara Açığım',
    description: 'Full-stack projeler geliştirirken bir ekiple birlikte çalışmak ve katkı sağlamak istiyorum. Aşağıdaki kanallardan bana ulaşabilirsin.',
    linkedin: {
      label: 'LINKEDIN',
      sublabel: 'Profesyonel ağ & kariyer',
      button: 'LinkedIn Profilim',
    },
    github: {
      label: 'GITHUB',
      sublabel: 'Açık kaynak projeler & kod',
      button: 'GitHub Profilim',
    },
    email: {
      label: 'E-POSTA',
      sublabel: 'Doğrudan iletişim',
      button: 'E-Posta Gönder',
    },
    footer: '© 2026 Hüseyin Ergün · Tüm hakları saklıdır.',
    footer_built: 'React & Tailwind CSS ile yapılmıştır',
  },
}
