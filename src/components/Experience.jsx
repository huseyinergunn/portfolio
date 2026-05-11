import { useState, useEffect } from 'react'
import { Briefcase, Calendar, MapPin, Building2, Download, CheckCircle2, ChevronRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const EXP_STYLE = {
  gradient: 'linear-gradient(135deg, #93c5fd 0%, #60a5fa 50%, #3b82f6 100%)',
  accentColor: '#60a5fa',
  accentBg: 'rgba(96,165,250,0.10)',
  accentBorder: 'rgba(96,165,250,0.25)',
}

export default function Experience() {
  const { t } = useLanguage()
  const e = t.experience
  const exp = e.internship

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  )

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const cardPad = isMobile ? '20px 16px' : '28px 32px'

  return (
    <section
      id="experience"
      className="r-section print-block"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px 60px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>

        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #60a5fa, transparent)' }} />
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#60a5fa', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {e.section_label}
          </span>
        </div>

        <div style={{
          display: 'flex',
          alignItems: isMobile ? 'flex-start' : 'flex-end',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '32px',
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.6rem)',
            fontWeight: 700, color: 'var(--c-primary)',
            letterSpacing: '-0.02em', margin: 0,
          }}>
            {e.title}
          </h2>

          {/* CV Download Button */}
          <a
            href="/huseyin_ergun_cv.pdf"
            onClick={(ev) => {
              ev.preventDefault()
              fetch('/huseyin_ergun_cv.pdf')
                .then((res) => res.blob())
                .then((blob) => {
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement('a')
                  a.href = url
                  a.download = 'Huseyin_Ergun_CV.pdf'
                  a.click()
                  URL.revokeObjectURL(url)
                })
            }}
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
              width: isMobile ? '100%' : 'auto',
              justifyContent: isMobile ? 'center' : 'flex-start',
            }}
            onMouseEnter={(ev) => {
              ev.currentTarget.style.transform = 'translateY(-2px)'
              ev.currentTarget.style.boxShadow = '0 8px 28px rgba(155,142,196,0.50)'
            }}
            onMouseLeave={(ev) => {
              ev.currentTarget.style.transform = 'translateY(0)'
              ev.currentTarget.style.boxShadow = '0 4px 20px rgba(155,142,196,0.35)'
            }}
          >
            <Download size={16} strokeWidth={2.5} />
            {e.cv_button}
          </a>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>

          {!isMobile && (
            <div style={{
              position: 'absolute', left: '24px', top: '52px', bottom: '0',
              width: '2px',
              background: 'linear-gradient(180deg, rgba(96,165,250,0.5) 0%, rgba(155,142,196,0.2) 80%, transparent 100%)',
            }} />
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', gap: isMobile ? '0' : '40px', alignItems: 'flex-start' }}>

              {!isMobile && (
                <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '16px',
                    background: EXP_STYLE.gradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(96,165,250,0.30)',
                    color: '#fff', flexShrink: 0,
                  }}>
                    <Briefcase size={22} strokeWidth={2} />
                  </div>
                </div>
              )}

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
                minWidth: 0,
                breakInside: 'avoid',
                pageBreakInside: 'avoid',
              }}
                onMouseEnter={(ev) => {
                  ev.currentTarget.style.transform = 'translateY(-4px)'
                  ev.currentTarget.style.boxShadow = '0 16px 48px rgba(96,165,250,0.14)'
                }}
                onMouseLeave={(ev) => {
                  ev.currentTarget.style.transform = 'translateY(0)'
                  ev.currentTarget.style.boxShadow = '0 4px 32px var(--c-card-shadow)'
                }}
              >
                <div style={{ height: '4px', background: EXP_STYLE.gradient }} />

                <div style={{ padding: cardPad }}>
                  {/* Header */}
                  <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '12px',
                    marginBottom: '20px',
                  }}>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                        <h3 style={{
                          fontSize: isMobile ? '1rem' : '1.2rem',
                          fontWeight: 700, color: 'var(--c-primary)', margin: 0, letterSpacing: '-0.02em',
                        }}>
                          {exp.title}
                        </h3>
                        <span style={{
                          fontSize: '0.7rem', fontWeight: 600, padding: '3px 10px', borderRadius: '100px',
                          background: EXP_STYLE.accentBg, color: EXP_STYLE.accentColor, border: `1px solid ${EXP_STYLE.accentBorder}`,
                          letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                        }}>
                          {exp.badge}
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', fontWeight: 600, color: EXP_STYLE.accentColor }}>
                          <Building2 size={13} strokeWidth={2} />
                          {exp.company}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: 'var(--c-muted)' }}>
                          <MapPin size={12} strokeWidth={2} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      fontSize: '0.78rem', fontWeight: 500, color: 'var(--c-muted)',
                      background: 'var(--c-tag)', border: '1px solid var(--c-card-border)',
                      padding: '5px 12px', borderRadius: '100px', whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}>
                      <Calendar size={12} strokeWidth={2} />
                      {exp.date}
                    </span>
                  </div>

                  <div style={{ height: '1px', background: 'var(--c-card-border)', marginBottom: '20px' }} />

                  {/* Bullets */}
                  <ul style={{ margin: '0 0 24px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle2
                          size={15}
                          strokeWidth={2}
                          style={{ color: EXP_STYLE.accentColor, flexShrink: 0, marginTop: '3px' }}
                        />
                        <span style={{ fontSize: isMobile ? '0.82rem' : '0.875rem', color: 'var(--c-secondary)', lineHeight: 1.75 }}>
                          {bullet}
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
                          fontSize: '0.73rem', fontWeight: 500,
                          padding: '4px 10px', borderRadius: '100px',
                          background: EXP_STYLE.accentBg, color: 'var(--c-primary)',
                          border: `1px solid ${EXP_STYLE.accentBorder}`,
                          transition: 'transform 0.15s',
                          cursor: 'default',
                        }}
                        onMouseEnter={(ev) => (ev.currentTarget.style.transform = 'translateY(-1px)')}
                        onMouseLeave={(ev) => (ev.currentTarget.style.transform = 'translateY(0)')}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div style={{
          marginTop: '48px',
          padding: isMobile ? '20px' : '24px 32px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(155,142,196,0.08) 0%, rgba(96,165,250,0.06) 100%)',
          border: '1px solid rgba(155,142,196,0.20)',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: '16px',
        }}>
          <div style={{
            width: '10px', height: '10px', borderRadius: '50%',
            background: '#34d399',
            boxShadow: '0 0 0 3px rgba(52,211,153,0.20)',
            flexShrink: 0,
          }} />
          <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--c-secondary)', lineHeight: 1.7 }}>
            {e.banner}
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '9px 20px', borderRadius: '100px',
              marginLeft: isMobile ? '0' : 'auto',
              width: isMobile ? '100%' : 'auto',
              justifyContent: 'center',
              border: '1.5px solid rgba(155,142,196,0.40)',
              color: '#9b8ec4', textDecoration: 'none',
              fontSize: '0.82rem', fontWeight: 600,
              transition: 'border-color 0.2s, color 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(ev) => {
              ev.currentTarget.style.borderColor = '#9b8ec4'
              ev.currentTarget.style.color = 'var(--c-primary)'
            }}
            onMouseLeave={(ev) => {
              ev.currentTarget.style.borderColor = 'rgba(155,142,196,0.40)'
              ev.currentTarget.style.color = '#9b8ec4'
            }}
          >
            {t.homepage.cta_contact} <ChevronRight size={14} strokeWidth={2.5} />
          </a>
        </div>

      </div>
    </section>
  )
}
