import { ArrowUpRight } from 'lucide-react'

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const MailIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const contactCards = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/hüseyin-ergün-4b6498158',
    href: 'https://linkedin.com/in/hüseyin-ergün-4b6498158/',
    Icon: LinkedinIcon,
    gradient: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 50%, #0284c7 100%)',
    accentColor: '#38bdf8',
    accentBg: 'rgba(56,189,248,0.10)',
    accentBorder: 'rgba(56,189,248,0.25)',
    description: 'Profesyonel ağ & kariyer',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/huseyinergunn',
    href: 'https://github.com/huseyinergunn',
    Icon: GithubIcon,
    gradient: 'linear-gradient(135deg, #c4b5f4 0%, #9b8ec4 50%, #7c6fb5 100%)',
    accentColor: '#9b8ec4',
    accentBg: 'rgba(155,142,196,0.10)',
    accentBorder: 'rgba(155,142,196,0.25)',
    description: 'Açık kaynak projeler & kod',
  },
  {
    id: 'email',
    label: 'E-posta',
    value: 'huseyinergun234@gmail.com',
    href: 'mailto:huseyinergun234@gmail.com',
    Icon: MailIcon,
    gradient: 'linear-gradient(135deg, #6ee7b7 0%, #34d399 50%, #10b981 100%)',
    accentColor: '#34d399',
    accentBg: 'rgba(52,211,153,0.10)',
    accentBorder: 'rgba(52,211,153,0.25)',
    description: 'Doğrudan iletişim',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="r-section print-block"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 24px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: '360px', height: '360px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(155,142,196,0.12) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '15%', left: '-5%',
        width: '280px', height: '280px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>

        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #c4b5f4, transparent)' }} />
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#9b8ec4', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            İletişim
          </span>
        </div>

        <h2 style={{
          fontSize: 'clamp(1.5rem, 5vw, 2.6rem)',
          fontWeight: 700, color: 'var(--c-primary)',
          letterSpacing: '-0.02em', margin: '0 0 12px',
        }}>
          Yeni Fırsatlara Açığım
        </h2>
        <p className="r-contact-bio" style={{ fontSize: '1rem', color: 'var(--c-secondary)', margin: '0 0 64px', maxWidth: '520px', lineHeight: 1.75 }}>
          Yazılım geliştirme yolculuğuma Fullstack odaklı devam eden, verimlilik ve otomasyon araçlarını (n8n, AI) projelerine entegre etmeyi seven bir geliştiriciyim. Junior pozisyonlar için aktif olarak iş arayışındayım.
        </p>

        {/* Contact cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginBottom: '80px',
        }}>
          {contactCards.map(({ id, label, value, href, Icon, gradient, accentColor, accentBg, accentBorder, description }) => (
            <a
              key={id}
              href={href}
              target={id !== 'email' ? '_blank' : undefined}
              rel={id !== 'email' ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                borderRadius: '24px',
                background: 'var(--c-card)',
                backdropFilter: 'blur(14px)',
                border: '1px solid var(--c-card-border)',
                boxShadow: '0 4px 32px var(--c-card-shadow)',
                textDecoration: 'none',
                overflow: 'hidden',
                transition: 'transform 0.25s, box-shadow 0.25s, background 0.4s, border-color 0.4s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = `0 20px 48px ${accentBg.replace('0.10', '0.22')}`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 32px var(--c-card-shadow)'
              }}
            >
              {/* Gradient top bar */}
              <div style={{ height: '3px', background: gradient }} />

              <div style={{ padding: '28px 28px 24px' }}>
                {/* Icon + arrow */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '16px',
                    background: gradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff',
                    boxShadow: `0 4px 16px ${accentBg.replace('0.10', '0.30')}`,
                  }}>
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '10px',
                    background: accentBg,
                    border: `1px solid ${accentBorder}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: accentColor,
                  }}>
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </div>
                </div>

                {/* Label + description */}
                <p style={{ fontSize: '0.72rem', fontWeight: 600, color: accentColor, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 4px' }}>
                  {label}
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--c-muted)', margin: '0 0 14px' }}>
                  {description}
                </p>

                {/* Value */}
                <div style={{
                  padding: '10px 14px', borderRadius: '12px',
                  background: accentBg,
                  border: `1px solid ${accentBorder}`,
                }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--c-primary)', wordBreak: 'break-all' }}>
                    {value}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          paddingTop: '28px',
          borderTop: '1px solid var(--c-footer-line)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--c-muted2)' }}>
            © 2025 Hüseyin Ergün · Tüm hakları saklıdır.
          </span>
          <span style={{ fontSize: '0.82rem', color: 'var(--c-muted2)' }}>
            React & Tailwind CSS ile yapılmıştır
          </span>
        </div>
      </div>
    </section>
  )
}
