const ExternalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const GitHubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const projects = [
  {
    id: 'nexpos',
    name: 'NexPos',
    tagline: 'Dijital Perakende Yönetim Sistemi',
    description:
      'MERN Stack, Redux Toolkit ve Tailwind CSS ile geliştirilmiş kapsamlı bir dijital ' +
      'perakende ve satış noktası sistemi. Ürün yönetimi, sepet akışı, kullanıcı rolleri ' +
      've satış raporlama modülleri içermektedir.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #c4b5f4 0%, #a78bfa 50%, #8b5cf6 100%)',
    accentLight: 'rgba(167,139,250,0.12)',
    accentBorder: 'rgba(167,139,250,0.3)',
    image: '/projects/nexpos.png',
    features: ['MERN Stack', 'Redux Toolkit', 'Rol Tabanlı Yetkilendirme'],
    github: 'https://github.com/huseyinergunn/pos-app',
    demo: 'https://nexpos-app.vercel.app',
  },
  {
    id: 'reserveai',
    name: 'ReserveAI',
    tagline: 'AI Destekli Randevu Otomasyonu',
    description:
      'MERN Stack ve TypeScript ile geliştirilmiş, Groq API üzerinden Llama 3.3 modeli ' +
      'kullanan akıllı randevu sistemi. HTTP-Only Cookie tabanlı güvenli kimlik doğrulama ' +
      've yapay zeka destekli uygunluk analizi içermektedir.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TypeScript', 'Groq (Llama 3.3)'],
    gradient: 'linear-gradient(135deg, #93c5fd 0%, #60a5fa 50%, #3b82f6 100%)',
    accentLight: 'rgba(96,165,250,0.12)',
    accentBorder: 'rgba(96,165,250,0.3)',
    image: '/projects/reserveai.png',
    features: ['Groq / Llama 3.3', 'HTTP-Only Cookie Auth', 'TypeScript'],
    github: 'https://github.com/huseyinergunn/reserveai-app',
    demo: 'https://reserveai-cckb.onrender.com',
  },
  {
    id: 'fintrack',
    name: 'Fintrack',
    tagline: 'AI Destekli KOBİ Muhasebe Platformu',
    description:
      'KOBİ\'lerin finansal süreçlerini dijitalleştiren full-stack muhasebe platformu. ' +
      'Fatura oluşturma, gider takibi ve nakit akışı analizini tek arayüzde birleştiriyor. ' +
      'Groq (LLaMA 3.3) destekli OCR motoru, fiş ve fatura görüntülerinden tutar, tarih ve kategori bilgisini otomatik çıkarıyor.',
    tags: ['Next.js 14', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'React Query', 'Groq AI', 'Cloudinary'],
    gradient: 'linear-gradient(135deg, #6ee7b7 0%, #34d399 50%, #10b981 100%)',
    accentLight: 'rgba(52,211,153,0.12)',
    accentBorder: 'rgba(52,211,153,0.3)',
    image: '/projects/fintrack.png',
    features: ['Groq / LLaMA 3.3', 'HTTP-Only Cookie Auth', 'TypeScript'],
    github: 'https://github.com/huseyinergunn/fintrack-app',
    demo: 'https://fintrack-app-six-sand.vercel.app',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="r-section print-block"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 24px 60px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>

        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #60a5fa, transparent)' }} />
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#60a5fa', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Projeler
          </span>
        </div>
        <h2 className="r-projects-h2" style={{
          fontSize: 'clamp(1.5rem, 5vw, 2.6rem)',
          fontWeight: 700, color: 'var(--c-primary)',
          letterSpacing: '-0.02em', margin: '0 0 28px',
        }}>
          Öne Çıkan Çalışmalar
        </h2>

        <div className="r-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {projects.map((p) => (
            <div
              key={p.id}
              className="print-block"
              style={{
                background: 'var(--c-card)',
                backdropFilter: 'blur(16px)',
                borderRadius: '28px',
                border: '1px solid var(--c-card-border)',
                boxShadow: '0 4px 40px var(--c-card-shadow)',
                overflow: 'hidden',
                transition: 'transform 0.25s, box-shadow 0.25s, background 0.4s, border-color 0.4s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 16px 56px rgba(155,142,196,0.22)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 40px var(--c-card-shadow)'
              }}
            >
              {/* Screenshot preview */}
              <div className="r-proj-img" style={{
                height: '150px',
                position: 'relative',
                overflow: 'hidden',
                background: p.gradient,
              }}>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block',
                  }}
                />
                {/* Gradient fade overlay at bottom */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.45) 100%)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'absolute', top: '12px', right: '12px',
                  background: 'rgba(0,0,0,0.45)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '100px',
                  padding: '4px 12px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: '#fff',
                  letterSpacing: '0.06em',
                }}>
                  {p.id.toUpperCase()}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '20px 22px' }}>
                <h3 style={{
                  fontSize: '1.15rem', fontWeight: 700, color: 'var(--c-primary)',
                  margin: '0 0 3px', letterSpacing: '-0.02em',
                }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#9b8ec4', fontWeight: 500, margin: '0 0 10px' }}>
                  {p.tagline}
                </p>
                <p style={{ fontSize: '0.84rem', color: 'var(--c-secondary)', lineHeight: 1.65, margin: '0 0 14px' }}>
                  {p.description}
                </p>

                {/* Feature pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                  {p.features.map((f) => (
                    <span key={f} style={{
                      fontSize: '0.75rem', fontWeight: 500,
                      padding: '4px 12px', borderRadius: '100px',
                      background: p.accentLight, color: 'var(--c-primary)',
                      border: `1px solid ${p.accentBorder}`,
                    }}>
                      ✓ {f}
                    </span>
                  ))}
                </div>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                  {p.tags.map((t) => (
                    <span key={t} style={{
                      fontSize: '0.73rem',
                      padding: '3px 10px',
                      borderRadius: '100px',
                      background: 'var(--c-tag)',
                      color: 'var(--c-tag-text)',
                      fontWeight: 500,
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      padding: '8px 18px', borderRadius: '100px',
                      background: 'var(--c-primary)', color: 'var(--c-card)',
                      textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600,
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    <GitHubIcon /> GitHub
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '6px',
                        padding: '8px 18px', borderRadius: '100px',
                        background: 'transparent',
                        border: '1.5px solid var(--c-ghost-border)',
                        color: 'var(--c-primary)',
                        textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600,
                        transition: 'border-color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#9b8ec4')}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--c-ghost-border)')}
                    >
                      <ExternalIcon /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
