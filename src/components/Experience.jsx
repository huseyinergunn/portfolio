import { Briefcase, Calendar, MapPin, Building2, Download, CheckCircle2, ChevronRight } from 'lucide-react'

const experiences = [
  {
    id: 'softnet',
    role: 'Back-End Developer Intern',
    company: 'SoftNET Yönetim Bilgi Sistemleri',
    location: 'Türkiye',
    period: 'Temmuz 2024 – Ağustos 2024',
    type: 'Staj',
    gradient: 'linear-gradient(135deg, #93c5fd 0%, #60a5fa 50%, #3b82f6 100%)',
    accentColor: '#60a5fa',
    accentBg: 'rgba(96,165,250,0.10)',
    accentBorder: 'rgba(96,165,250,0.25)',
    tasks: [
      'ASP.NET MVC mimarisi kullanarak kurumsal yazılım modülleri geliştirdim; MVC katmanlarını tam bağımsız olarak yapılandırarak bakım kolaylığı sağladım.',
      'Entity Framework ile Code-First yaklaşımıyla veri modelleri oluşturdum, migration yönetimi ve ilişkisel şema tasarımı gerçekleştirdim.',
      'RESTful API endpoint\'leri tasarlayıp belgeledim; Postman koleksiyonlarıyla uçtan uca test süreçleri oluşturdum.',
      'MS SQL Server üzerinde sorgu optimizasyonu ve stored procedure yazımı ile veri erişim katmanı performansını iyileştirdim.',
      'Gerçek projelerde Agile iş akışına dahil olarak ekip içi code review ve daily stand-up süreçlerini deneyimledim.',
    ],
    tags: ['C#', 'ASP.NET MVC', 'Entity Framework', 'MS SQL Server', 'RESTful APIs', 'Postman'],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="r-section"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 24px 80px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>

        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #60a5fa, transparent)' }} />
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#60a5fa', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Deneyim
          </span>
        </div>

        <div className="r-dl-btn-wrap" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', marginBottom: '56px', flexWrap: 'wrap' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            fontWeight: 700, color: 'var(--c-primary)',
            letterSpacing: '-0.02em', margin: 0,
          }}>
            İş Deneyimleri
          </h2>

          {/* CV Download Button */}
          <a
            href="/huseyin_ergun_cv.pdf"
            download="Huseyin_Ergun_CV.pdf"
            className="r-dl-btn"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px', borderRadius: '100px',
              background: 'linear-gradient(135deg, #9b8ec4, #7c6fb5)',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.875rem', fontWeight: 600,
              boxShadow: '0 4px 20px rgba(155,142,196,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(155,142,196,0.50)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(155,142,196,0.35)'
            }}
          >
            <Download size={16} strokeWidth={2.5} />
            CV İndir
          </a>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>

          {/* Vertical line */}
          <div className="r-tl-line" style={{
            position: 'absolute', left: '24px', top: '52px', bottom: '0',
            width: '2px',
            background: 'linear-gradient(180deg, rgba(96,165,250,0.5) 0%, rgba(155,142,196,0.2) 80%, transparent 100%)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {experiences.map((exp) => (
              <div key={exp.id} className="r-tl-entry" style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>

                {/* Timeline dot */}
                <div className="r-tl-dot" style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '16px',
                    background: exp.gradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 4px 16px rgba(96,165,250,0.30)`,
                    color: '#fff',
                    flexShrink: 0,
                  }}>
                    <Briefcase size={22} strokeWidth={2} />
                  </div>
                </div>

                {/* Card */}
                <div style={{
                  flex: 1,
                  background: 'var(--c-card)',
                  backdropFilter: 'blur(14px)',
                  borderRadius: '24px',
                  border: '1px solid var(--c-card-border)',
                  boxShadow: '0 4px 32px var(--c-card-shadow)',
                  overflow: 'hidden',
                  transition: 'transform 0.25s, box-shadow 0.25s, background 0.4s, border-color 0.4s',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(96,165,250,0.14)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 32px var(--c-card-shadow)'
                  }}
                >
                  {/* Card top accent bar */}
                  <div style={{ height: '4px', background: exp.gradient }} />

                  <div className="r-card-body" style={{ padding: '28px 32px' }}>

                    {/* Header */}
                    <div className="r-exp-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--c-primary)', margin: 0, letterSpacing: '-0.02em' }}>
                            {exp.role}
                          </h3>
                          <span style={{
                            fontSize: '0.7rem', fontWeight: 600, padding: '3px 10px', borderRadius: '100px',
                            background: exp.accentBg, color: exp.accentColor, border: `1px solid ${exp.accentBorder}`,
                            letterSpacing: '0.06em', textTransform: 'uppercase',
                          }}>
                            {exp.type}
                          </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.875rem', fontWeight: 600, color: exp.accentColor }}>
                            <Building2 size={14} strokeWidth={2} />
                            {exp.company}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', color: 'var(--c-muted)' }}>
                            <MapPin size={13} strokeWidth={2} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <span style={{
                        display: 'flex', alignItems: 'center', gap: '6px',
                        fontSize: '0.8rem', fontWeight: 500, color: 'var(--c-muted)',
                        background: 'var(--c-tag)', border: '1px solid var(--c-card-border)',
                        padding: '6px 14px', borderRadius: '100px', whiteSpace: 'nowrap',
                      }}>
                        <Calendar size={13} strokeWidth={2} />
                        {exp.period}
                      </span>
                    </div>

                    {/* Separator */}
                    <div style={{ height: '1px', background: 'var(--c-card-border)', marginBottom: '20px' }} />

                    {/* Task bullets */}
                    <ul style={{ margin: '0 0 24px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {exp.tasks.map((task, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <CheckCircle2
                            size={16}
                            strokeWidth={2}
                            style={{ color: exp.accentColor, flexShrink: 0, marginTop: '2px' }}
                          />
                          <span style={{ fontSize: '0.875rem', color: 'var(--c-secondary)', lineHeight: 1.75 }}>
                            {task}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.75rem', fontWeight: 500,
                            padding: '4px 12px', borderRadius: '100px',
                            background: exp.accentBg, color: 'var(--c-primary)',
                            border: `1px solid ${exp.accentBorder}`,
                            transition: 'transform 0.15s',
                            cursor: 'default',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
                          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* "Open to opportunities" callout */}
        <div className="r-callout" style={{
          marginTop: '48px',
          padding: '24px 32px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(155,142,196,0.08) 0%, rgba(96,165,250,0.06) 100%)',
          border: '1px solid rgba(155,142,196,0.20)',
          display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap',
        }}>
          <div style={{
            width: '10px', height: '10px', borderRadius: '50%',
            background: '#34d399',
            boxShadow: '0 0 0 3px rgba(52,211,153,0.20)',
            flexShrink: 0,
          }} />
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--c-secondary)', lineHeight: 1.7 }}>
            Staj deneyimimin üzerine inşa ettiğim full-stack projelerle{' '}
            <strong style={{ color: 'var(--c-primary)' }}>junior pozisyonlara</strong> aktif olarak başvurmaktayım.
            Gerçek dünya sorunlarını çözen, ölçeklenebilir uygulamalar geliştirmeye hazırım.
          </p>
          <a
            href="#contact"
            className="r-callout-btn"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '9px 20px', borderRadius: '100px', marginLeft: 'auto',
              border: '1.5px solid rgba(155,142,196,0.40)',
              color: '#9b8ec4', textDecoration: 'none',
              fontSize: '0.82rem', fontWeight: 600,
              transition: 'border-color 0.2s, color 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#9b8ec4'
              e.currentTarget.style.color = 'var(--c-primary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(155,142,196,0.40)'
              e.currentTarget.style.color = '#9b8ec4'
            }}
          >
            İletişime Geç <ChevronRight size={14} strokeWidth={2.5} />
          </a>
        </div>

      </div>
    </section>
  )
}
