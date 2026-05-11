import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const NAV_HREFS = ['#hero', '#about', '#experience', '#projects', '#contact']
const NAV_KEYS  = ['home', 'about', 'experience', 'projects', 'contact']

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1"  x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1"  y1="12" x2="3"  y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6"  x2="21" y2="6"  />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6"  x2="6"  y2="18" />
    <line x1="6"  y1="6"  x2="18" y2="18" />
  </svg>
)

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [active,      setActive]      = useState('hero')
  const [isDark,      setIsDark]      = useState(false)
  const { lang, toggleLang, t } = useLanguage()
  const NAV_LINKS = NAV_KEYS.map((key, i) => ({ label: t.nav[key], href: NAV_HREFS[i] }))

  /* scroll → scrolled state + active section */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
      const sections = ['hero', 'about', 'experience', 'projects', 'contact']
      let current = 'hero'
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* sync initial dark state from html class (e.g. OS preference later) */
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  /* toggle dark mode */
  const toggleDark = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
  }

  const navBg = scrolled
    ? 'var(--c-nav)'
    : 'transparent'

  const navBorder = scrolled
    ? `1px solid var(--c-nav-border)`
    : '1px solid transparent'

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'background 0.3s, box-shadow 0.3s, backdrop-filter 0.3s',
      background: navBg,
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      borderBottom: navBorder,
      boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.06)' : 'none',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto', padding: '0 24px',
        height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span style={{
            fontFamily: 'monospace',
            fontSize: '1.25rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
          }}>
            &lt;/&gt;
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center" style={{ gap: '8px' }}>
          {NAV_LINKS.map((l) => {
            const id = l.href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={l.href}
                href={l.href}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  padding: '6px 14px',
                  borderRadius: '100px',
                  transition: 'all 0.2s',
                  color: isActive ? 'var(--c-primary)' : 'var(--c-nav-link)',
                  background: isActive ? 'var(--c-nav-active-bg)' : 'transparent',
                }}
              >
                {l.label}
              </a>
            )
          })}

          {/* Language toggle */}
          <div style={{
            display: 'flex', alignItems: 'center',
            background: 'var(--c-nav-active-bg)',
            borderRadius: '100px',
            padding: '3px',
            marginLeft: '8px',
            gap: '2px',
          }}>
            {['TR', 'EN'].map((l) => (
              <button
                key={l}
                onClick={() => toggleLang(l.toLowerCase())}
                style={{
                  padding: '4px 10px',
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  transition: 'background 0.2s, color 0.2s',
                  background: lang === l.toLowerCase() ? '#9b8ec4' : 'transparent',
                  color: lang === l.toLowerCase() ? '#fff' : 'var(--c-nav-link)',
                }}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Dark / Light toggle */}
          <button
            onClick={toggleDark}
            aria-label={isDark ? 'Açık moda geç' : 'Koyu moda geç'}
            style={{
              marginLeft: '8px',
              width: '36px', height: '36px',
              borderRadius: '50%', border: 'none',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--c-nav-active-bg)',
              color: isDark ? '#f0c060' : '#9b8ec4',
              transition: 'background 0.2s, color 0.2s, transform 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(20deg) scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(0deg) scale(1)')}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Language toggle — mobile */}
          <div style={{
            display: 'flex', alignItems: 'center',
            background: 'var(--c-nav-active-bg)',
            borderRadius: '100px',
            padding: '3px',
            gap: '2px',
          }}>
            {['TR', 'EN'].map((l) => (
              <button
                key={l}
                onClick={() => toggleLang(l.toLowerCase())}
                style={{
                  padding: '3px 8px',
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  transition: 'background 0.2s, color 0.2s',
                  background: lang === l.toLowerCase() ? '#9b8ec4' : 'transparent',
                  color: lang === l.toLowerCase() ? '#fff' : 'var(--c-nav-link)',
                }}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            onClick={toggleDark}
            aria-label={isDark ? 'Açık moda geç' : 'Koyu moda geç'}
            style={{
              width: '36px', height: '36px', borderRadius: '50%',
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--c-nav-active-bg)',
              color: isDark ? '#f0c060' : '#9b8ec4',
              transition: 'color 0.2s',
            }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--c-primary)', padding: '4px',
            }}
            aria-label="Menü"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: 'var(--c-nav)',
            backdropFilter: 'blur(18px)',
            borderTop: '1px solid var(--c-nav-border)',
            padding: '12px 24px 20px',
            display: 'flex', flexDirection: 'column', gap: '4px',
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                textDecoration: 'none',
                fontSize: '0.95rem', fontWeight: 500,
                padding: '10px 12px', borderRadius: '12px',
                color: 'var(--c-primary)',
                transition: 'background 0.2s',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
