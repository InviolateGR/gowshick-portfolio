'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

export default function About() {
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

  const stats = [
    { value: '3+', label: 'Internships' },
    { value: '4+', label: 'Projects shipped' },
    { value: '6+', label: 'Certifications' },
    { value: 'ECE', label: 'Final year, 2026' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: '140px 48px', borderTop: '1px solid #1c1c1c' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Top row: label + heading */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24,
            marginBottom: 80,
          }}
        >
          <div>
            <div className="section-label" style={{ marginBottom: 20 }}>About</div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 400,
                color: '#f5f5f0',
                lineHeight: 1.1,
                maxWidth: 480,
              }}
            >
              Where engineering
              <br />
              <em style={{ color: '#c8b89a' }}>meets design.</em>
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              color: '#666',
              lineHeight: 1.8,
              maxWidth: 380,
              paddingTop: 64,
            }}
          >
            I'm an ECE student who fell in love with the space between pixels and logic.
            I build products that look intentional and work precisely — from database schema
            to hover state.
          </p>
        </div>

        {/* Main grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 40,
            alignItems: 'start',
          }}
        >
          {/* Portrait */}
          <div
            className="reveal"
            style={{ transitionDelay: '100ms', position: 'relative' }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3/4',
                overflow: 'hidden',
                border: '1px solid #1c1c1c',
              }}
            >
              <Image
                src="/portrait-bw.jpg"
                alt="Gowshick Raja"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(20%) contrast(1.05)' }}
              />
              {/* Corner accent */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 16,
                  right: 16,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: '#c8b89a',
                  letterSpacing: '0.1em',
                  background: '#08080888',
                  padding: '4px 8px',
                }}
              >
                Coimbatore, IN
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {/* Bio */}
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 16,
                  color: '#ccc',
                  lineHeight: 1.85,
                  borderLeft: '1px solid #c8b89a44',
                  paddingLeft: 24,
                }}
              >
                I started with circuits and sensors, but my curiosity pulled me toward
                interfaces and systems. Today I design and build fullstack web applications —
                handling everything from API design and authentication to pixel-perfect UI
                and usability flows.
              </p>
            </div>

            {/* Philosophy cards */}
            <div
              className="reveal"
              style={{
                transitionDelay: '300ms',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 1,
                background: '#1c1c1c',
                border: '1px solid #1c1c1c',
              }}
            >
              {[
                { icon: '◈', title: 'Product-minded', desc: 'I think about the user before I think about the code.' },
                { icon: '◉', title: 'Design-aware', desc: 'Visual hierarchy and UX are part of my development flow.' },
                { icon: '◎', title: 'SDLC fluent', desc: 'From requirements to deployment — I understand the full cycle.' },
                { icon: '◇', title: 'Collaborative', desc: 'Strong at bridging gaps between design and engineering teams.' },
              ].map(card => (
                <div
                  key={card.title}
                  style={{
                    background: '#111',
                    padding: '20px',
                    borderBottom: '1px solid #1c1c1c',
                  }}
                >
                  <div style={{ color: '#c8b89a', fontSize: 16, marginBottom: 8 }}>{card.icon}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, color: '#f5f5f0', marginBottom: 4 }}>
                    {card.title}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#555', lineHeight: 1.6 }}>
                    {card.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div
              className="reveal"
              style={{
                transitionDelay: '400ms',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 24,
                borderTop: '1px solid #1c1c1c',
                paddingTop: 32,
              }}
            >
              {stats.map(s => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 28,
                      color: '#c8b89a',
                      fontWeight: 400,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: '#555',
                      letterSpacing: '0.08em',
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
