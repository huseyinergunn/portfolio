const skillGroups = [
  {
    label: 'Diller',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.12)',
    border: 'rgba(167,139,250,0.25)',
    items: ['C#', 'JavaScript (ES6+)', 'TypeScript', 'C'],
  },
  {
    label: 'Frontend',
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.12)',
    border: 'rgba(96,165,250,0.25)',
    items: ['React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'],
  },
  {
    label: 'Backend',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.12)',
    border: 'rgba(52,211,153,0.25)',
    items: ['Node.js', 'Express.js', 'NestJS', 'Prisma ORM', 'ASP.NET MVC', 'Entity Framework', 'RESTful APIs'],
  },
  {
    label: 'Veritabanı',
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.12)',
    border: 'rgba(251,146,60,0.25)',
    items: ['MongoDB', 'PostgreSQL', 'MS SQL Server'],
  },
  {
    label: 'Araçlar & Teknolojiler',
    color: '#9b8ec4',
    bg: 'rgba(155,142,196,0.12)',
    border: 'rgba(155,142,196,0.25)',
    items: ['Git & GitHub', 'Postman', 'JWT', 'n8n (Automation)', 'AI Integration (LLMs)', 'Cloudinary', 'Vercel / Render'],
  },
]

const Card = ({ children, style = {} }) => (
  <div style={{
    background: 'var(--c-card)',
    backdropFilter: 'blur(14px)',
    borderRadius: '24px',
    border: '1px solid var(--c-card-border)',
    boxShadow: '0 4px 32px var(--c-card-shadow), 0 1px 4px rgba(0,0,0,0.04)',
    transition: 'background 0.4s, border-color 0.4s',
    ...style,
  }}>
    {children}
  </div>
)

export default function About() {
  return (
    <section
      id="about"
      className="r-section print-block"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px 60px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>

        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
          <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #9b8ec4, transparent)' }} />
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#9b8ec4', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Hakkımda
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px', alignItems: 'start',
        }}>

          {/* Ben Kimim? + Staj */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Card style={{ padding: '32px' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '14px',
                background: 'linear-gradient(135deg, #c4b5f4, #a78bfa)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', marginBottom: '20px',
              }}>
                👨‍💻
              </div>
              <h2 style={{
                fontSize: '1.5rem', fontWeight: 700, color: 'var(--c-primary)',
                letterSpacing: '-0.02em', margin: '0 0 14px',
              }}>
                Ben Kimim?
              </h2>
              <p style={{ color: 'var(--c-secondary)', lineHeight: 1.8, fontSize: '0.92rem', margin: '0 0 14px' }}>
                Dokuz Eylül Üniversitesi Bilgisayar Bilimleri mezunuyum. MERN Stack ve .NET
                ekosistemi (ASP.NET MVC, Entity Framework) ile{' '}
                <strong style={{ color: '#9b8ec4' }}>ölçeklenebilir</strong>,{' '}
                <strong style={{ color: '#9b8ec4' }}>kullanıcı odaklı</strong>{' '}
                full-stack uygulamalar geliştiriyorum.
              </p>
              <p style={{ color: 'var(--c-secondary)', lineHeight: 1.8, fontSize: '0.92rem', margin: 0 }}>
                AI destekli çözümleri yazılım iş akışlarına entegre etmeye ilgi duyuyor;
                veritabanı tasarımından modern UI implementasyonuna kadar uçtan uca proje
                yönetimi konusunda deneyim kazanıyorum.
              </p>

              {/* Qualitative badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
                {['Sürekli Öğrenen', 'Çözüm Odaklı', 'Takım Oyuncusu'].map((b) => (
                  <span key={b} style={{
                    fontSize: '0.75rem', fontWeight: 500,
                    padding: '4px 12px', borderRadius: '100px',
                    background: 'var(--c-tag)', color: 'var(--c-tag-text)',
                    border: '1px solid var(--c-card-border)',
                  }}>{b}</span>
                ))}
              </div>
            </Card>

            {/* Internship card */}
            <Card style={{ padding: '24px 28px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                  background: 'linear-gradient(135deg, #93c5fd, #60a5fa)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                }}>
                  💼
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', flexWrap: 'wrap' }}>
                    <div>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--c-primary)', margin: '0 0 2px' }}>
                        Back-End Developer Intern
                      </h3>
                      <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#60a5fa', margin: 0 }}>
                        SoftNET Yönetim Bilgi Sistemleri
                      </p>
                    </div>
                    <span style={{
                      fontSize: '0.72rem', fontWeight: 500,
                      padding: '3px 10px', borderRadius: '100px',
                      background: 'rgba(96,165,250,0.12)',
                      color: '#60a5fa',
                      border: '1px solid rgba(96,165,250,0.25)',
                      whiteSpace: 'nowrap',
                    }}>
                      Tem – Ağu 2024
                    </span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--c-secondary)', lineHeight: 1.7, margin: '10px 0 0' }}>
                    ASP.NET MVC ve Entity Framework kullanarak kurumsal yazılım modülleri geliştirdim.
                    RESTful API tasarımı ve MS SQL Server ile veri yönetimi konularında deneyim kazandım.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Skills — categorized */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--c-primary)', margin: '0 0 4px', letterSpacing: '-0.01em' }}>
              Teknik Yetkinlikler
            </h3>
            {skillGroups.map((group) => (
              <Card key={group.label} style={{ padding: '11px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{
                    display: 'inline-block', width: '8px', height: '8px',
                    borderRadius: '50%', background: group.color, flexShrink: 0,
                  }} />
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: group.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {group.label}
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: '0.8rem', fontWeight: 500,
                        padding: '4px 11px', borderRadius: '100px',
                        background: group.bg,
                        color: 'var(--c-primary)',
                        border: `1px solid ${group.border}`,
                        transition: 'transform 0.15s',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
