'use client'

import { useRef, useEffect } from 'react'

const socials = [
  { label: 'Email', value: 'gowshickrajab@gmail.com', href: 'mailto:gowshickrajab@gmail.com', icon: '✉' },
  { label: 'GitHub', value: 'github.com/gowshickraja', href: 'https://github.com', icon: '◈' },
  { label: 'LinkedIn', value: 'linkedin.com/in/gowshickraja', href: 'https://linkedin.com', icon: '◇' },
  { label: 'Behance', value: 'behance.net/gowshickraja', href: 'https://behance.net', icon: '◉' },
  { label: 'LeetCode', value: 'leetcode.com/gowshickraja', href: 'https://leetcode.com', icon: '◎' },
]

export default function Contact() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    el.querySelectorAll('.reveal').forEach(c => obs.observe(c))
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: '140px 48px 100px', borderTop: '1px solid #1c1c1c' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Big CTA */}
        <div className="reveal" style={{ marginBottom: 100, textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: 32 }}>
            Contact
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 7vw, 96px)',
              fontWeight: 400,
              color: '#f5f5f0',
              lineHeight: 1.05,
              marginBottom: 32,
            }}
          >
            Let's build
            <br />
            <em style={{ color: '#c8b89a' }}>something real.</em>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              color: '#666',
              lineHeight: 1.7,
              maxWidth: 400,
              margin: '0 auto 48px',
            }}
          >
            Open to internships, fullstack roles, and design engineering opportunities.
            I respond to every message.
          </p>
          <a
            href="mailto:gowshickrajab@gmail.com"
            className="btn-primary"
            data-hover
            style={{ fontSize: 13 }}
          >
            Send a message ↗
          </a>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #1c1c1c', paddingTop: 60 }}>
          <div
            className="reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 0,
              background: '#111',
              border: '1px solid #1c1c1c',
            }}
          >
            {socials.map((s, i) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  padding: '28px 24px',
                  borderRight: i < socials.length - 1 ? '1px solid #1c1c1c' : 'none',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#161616')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
              >
                <span style={{ color: '#c8b89a55', fontSize: 16 }}>{s.icon}</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: '#666',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {s.label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 12,
                    color: '#444',
                    lineHeight: 1.3,
                  }}
                >
                  {s.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
