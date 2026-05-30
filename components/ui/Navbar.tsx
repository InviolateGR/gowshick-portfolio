'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '20px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: scrolled ? '1px solid #1c1c1c' : '1px solid transparent',
          background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 28,
                height: 28,
                border: '1px solid #c8b89a66',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: '#c8b89a', fontSize: 14, lineHeight: 1 }}>⟁</span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                letterSpacing: '0.12em',
                color: '#f5f5f0',
                textTransform: 'uppercase',
              }}
            >
              Gowshick
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div
          className="hidden md:flex"
          style={{ gap: 40, alignItems: 'center' }}
        >
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#666',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = '#c8b89a')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = '#666')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Gowshick_Raja_Resume.pdf"
            download
            className="btn-primary"
            style={{ padding: '8px 20px', fontSize: 11 }}
          >
            Resume
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#f5f5f0',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
          aria-label="Toggle menu"
        >
          <span
            style={{
              width: 24,
              height: 1,
              background: '#f5f5f0',
              display: 'block',
              transition: 'transform 0.3s ease',
              transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }}
          />
          <span
            style={{
              width: 24,
              height: 1,
              background: '#f5f5f0',
              display: 'block',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }}
          />
          <span
            style={{
              width: 24,
              height: 1,
              background: '#f5f5f0',
              display: 'block',
              transition: 'transform 0.3s ease',
              transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(8,8,8,0.98)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 40,
          }}
        >
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 32,
                fontStyle: 'italic',
                color: '#f5f5f0',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
