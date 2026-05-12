export const en = {
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },

  homepage: {
    badge: 'Open to new opportunities',
    subtitle: 'Dokuz Eylül University · Computer Science Graduate',
    role: 'Full Stack Developer',
    description: 'Building SaaS applications with MERN Stack, TypeScript and NestJS — integrating AI and automation with tools like Groq and n8n.',
    cta_projects: 'View Projects',
    cta_contact: 'Get in Touch',
    scroll: 'Scroll down',
  },

  about: {
    section_label: 'ABOUT',
    title: 'Who Am I?',
    description1: "I'm a Computer Science graduate from Dokuz Eylül University. I build scalable, full-stack web applications using the MERN Stack and .NET ecosystem (ASP.NET MVC, Entity Framework).",
    description2: 'I enjoy integrating AI-driven solutions into software workflows and have hands-on experience with end-to-end project delivery — from database design to modern UI implementation.',
    tags: ['Continuous Learner', 'Problem Solver', 'Team Player'],
    skills_title: 'Technical Skills',
    skills: {
      frontend:   { label: 'FRONTEND',             items: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'HTML5', 'CSS3'] },
      backend:    { label: 'BACKEND',              items: ['Node.js', 'Express.js', 'NestJS', 'Prisma ORM', 'ASP.NET MVC', 'Entity Framework', 'RESTful APIs'] },
      databases:  { label: 'DATABASES',            items: ['PostgreSQL', 'MongoDB', 'MS SQL Server'] },
      tools:      { label: 'TOOLS & TECHNOLOGIES', items: ['Git & GitHub', 'Postman', 'Vercel / Render', 'Cloudinary', 'JWT', 'n8n (Automation)', 'AI / LLM Integration'] },
      other:      { label: 'OTHER',                items: ['C#', 'C', 'English B2'] },
    },
    internship: {
      title: 'Back-End Developer Intern',
      company: 'SoftNET Yönetim Bilgi Sistemleri',
      location: 'Turkey',
      date: 'Jul – Aug 2024',
      badge: 'INTERNSHIP',
      description: 'Built CRUD modules for core business entities using ASP.NET MVC and Entity Framework. Designed relational schemas in MS SQL Server, wrote stored procedures and gained hands-on exposure to enterprise MVC architecture and Git-based version control workflows.',
    },
  },

  experience: {
    section_label: 'EXPERIENCE',
    title: 'Work Experience',
    cv_button: 'Download CV',
    internship: {
      title: 'Back-End Developer Intern',
      badge: 'INTERNSHIP',
      company: 'SoftNET Yönetim Bilgi Sistemleri',
      location: 'Turkey',
      date: 'July – August 2024',
      bullets: [
        'Built CRUD modules for core business entities (products, orders, users) using ASP.NET MVC and Entity Framework, reducing manual data-entry time for internal operations.',
        'Designed relational schemas in MS SQL Server; wrote stored procedures and identified slow queries — improving data access patterns during the internship period.',
        'Participated in code reviews and stand-up meetings with senior developers, gaining hands-on exposure to enterprise MVC architecture and Git-based version control workflows.',
      ],
      tags: ['C#', 'ASP.NET MVC', 'Entity Framework', 'MS SQL Server', 'RESTful APIs', 'Postman'],
    },
    banner: 'I want to work alongside a team and contribute while continuing to develop full-stack projects.',
  },

  projects: {
    section_label: 'PROJECTS',
    title: 'Featured Works',
    github_label: 'GitHub',
    demo_label: 'Demo',
    items: [
      {
        id: 'fintrack',
        name: 'Fintrack',
        subtitle: 'AI-Powered Financial Management & Invoicing Platform',
        description: 'A full-stack SaaS accounting platform that automatically processes receipts and invoices using Groq (LLaMA 3.3) powered OCR technology. Includes invoice creation and an analytics dashboard with real-time cash flow tracking.',
        highlights: ['Groq / LLaMA 3.3', 'HTTP-Only Cookie Auth', 'TypeScript'],
        tags: ['Next.js 14', 'NestJS', 'PostgreSQL', 'Prisma', 'React Query', 'Tailwind CSS', 'Groq AI', 'Cloudinary'],
      },
      {
        id: 'reserveai',
        name: 'ReserveAI',
        subtitle: 'AI-Powered Appointment Automation',
        description: 'A smart SaaS appointment system powered by Groq (Llama 3.3) where users book in plain language. Asynchronous n8n workflows on Railway reduce manual scheduling by ~80%. Secured against XSS/CSRF with HTTP-Only cookies and SameSite configuration.',
        highlights: ['Groq / Llama 3.3', 'HTTP-Only Cookie Auth', 'TypeScript'],
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TypeScript', 'Groq (Llama 3.3)', 'n8n', 'Railway'],
      },
      {
        id: 'nexpos',
        name: 'NexPos',
        subtitle: 'Fullstack Point of Sale & Inventory Management System',
        description: 'A comprehensive POS system that digitalizes retail operations. Features real-time inventory tracking, dynamic invoice generation, category-based product management, and role-based authorization. Includes a dark mode responsive UI and optimized state management with Redux Toolkit.',
        highlights: ['MERN Stack', 'Redux Toolkit'],
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'Tailwind CSS', 'REST API'],
      },
    ],
  },

  contact: {
    section_label: 'CONTACT',
    title: 'Open to New Opportunities',
    description: 'I want to work alongside a team and contribute while continuing to develop full-stack projects. Feel free to reach out through the channels below.',
    linkedin: {
      label: 'LINKEDIN',
      sublabel: 'Professional network & career',
      button: 'My LinkedIn Profile',
    },
    github: {
      label: 'GITHUB',
      sublabel: 'Open source projects & code',
      button: 'My GitHub Profile',
    },
    email: {
      label: 'EMAIL',
      sublabel: 'Direct contact',
      button: 'Send an Email',
    },
    footer: '© 2026 Hüseyin Ergün · All rights reserved.',
    footer_built: 'Built with React & Tailwind CSS',
  },
}
