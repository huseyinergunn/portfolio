import { useLanguage } from '../context/LanguageContext'

const ChevronDown = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export default function Hero() {
  const { t } = useLanguage()
  const h = t.homepage

  return (
    <section
      id="hero"
      className="r-section"
      style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        paddingTop: '68px', position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '10%', right: '8%',
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(155,142,196,0.18) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', left: '5%',
        width: '320px', height: '320px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(135,183,215,0.16) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div style={{ textAlign: 'center', padding: '0 16px', maxWidth: '760px', position: 'relative', width: '100%' }}>

        {/* "Available" badge */}
        <div className="fade-up delay-1" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'var(--c-badge)', backdropFilter: 'blur(10px)',
          border: '1px solid var(--c-ghost-border)',
          borderRadius: '100px', padding: '6px 18px',
          fontSize: '0.8rem', fontWeight: 500, color: 'var(--c-secondary)',
          marginBottom: '32px',
        }}>
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: '#7ec88a', display: 'inline-block',
            boxShadow: '0 0 0 3px rgba(126,200,138,0.25)',
          }} />
          {h.badge}
        </div>

        {/* Name */}
        <h1 className="fade-up delay-2" style={{
          fontSize: 'clamp(1.7rem, 8vw, 4rem)',
          fontWeight: 700,
          color: 'var(--c-primary)',
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          margin: '0 0 12px',
        }}>
          Hüseyin Ergün
        </h1>

        {/* University */}
        <p className="fade-up delay-2" style={{
          fontSize: '1rem',
          color: 'var(--c-muted)',
          fontWeight: 400,
          margin: '0 0 20px',
          letterSpacing: '0.01em',
        }}>
          {h.subtitle}
        </p>

        {/* Role tags */}
        <div className="fade-up delay-3" style={{
          display: 'flex', flexWrap: 'wrap', gap: '10px',
          justifyContent: 'center', marginBottom: '40px',
        }}>
          <span style={{
            padding: '8px 20px', borderRadius: '100px',
            fontWeight: 500, fontSize: '0.88rem',
            background: 'linear-gradient(135deg, #c4b5f4, #a78bfa)',
            color: '#1e1e2e',
            boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
          }}>
            {h.role}
          </span>
        </div>

        {/* Subtitle */}
        <p className="fade-up delay-3 r-hero-sub" style={{
          fontSize: '1.05rem',
          color: 'var(--c-secondary)',
          lineHeight: 1.75,
          marginBottom: '48px',
        }}>
          {h.description}
        </p>

        {/* CTA Buttons */}
        <div className="fade-up delay-4" style={{
          display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap',
        }}>
          <a
            href="#projects"
            style={{
              padding: '13px 32px', borderRadius: '100px',
              background: 'linear-gradient(135deg, #9b8ec4, #7c6eb0)',
              color: '#fff', fontWeight: 600, fontSize: '0.9rem',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(124,110,176,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,110,176,0.45)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,110,176,0.35)'
            }}
          >
            {h.cta_projects}
          </a>
          <a
            href="#contact"
            style={{
              padding: '13px 32px', borderRadius: '100px',
              background: 'var(--c-ghost)',
              backdropFilter: 'blur(10px)',
              border: '1.5px solid var(--c-ghost-border)',
              color: 'var(--c-primary)',
              fontWeight: 600, fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#9b8ec4'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--c-ghost-border)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {h.cta_contact}
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="fade-in delay-6"
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '4px', marginTop: '72px',
            color: 'var(--c-muted2)',
            textDecoration: 'none', fontSize: '0.75rem', fontWeight: 500,
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#9b8ec4')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--c-muted2)')}
        >
          <span>{h.scroll}</span>
          <ChevronDown />
        </a>
      </div>
    </section>
  )
}
