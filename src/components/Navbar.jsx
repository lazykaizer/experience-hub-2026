import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Categories', href: '#categories' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'Rules', href: '#rules' },
  { label: 'GfG Connect', href: 'https://www.geeksforgeeks.org/connect', isExternal: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cream neo-border-sm border-t-0 border-l-0 border-r-0' : 'bg-transparent'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between h-auto py-4 md:h-[80px] md:py-0">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-4">
            <img
              src="/images/gfg-logo.png"
              alt="GeeksforGeeks"
              className="h-10 w-auto"
            />
            <span className="font-heading font-bold text-2xl text-rich-black tracking-tight">
              ExperienceHub 2026
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className="neo-btn px-6 py-2.5 text-sm bg-cream text-rich-black hover:bg-electric-yellow hover:-translate-y-1 transition-transform"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden neo-btn p-2 bg-electric-yellow"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                onClick={link.isExternal ? undefined : () => setMobileOpen(false)}
                className="neo-btn px-4 py-3 text-sm bg-cream text-rich-black hover:bg-electric-yellow text-center"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
