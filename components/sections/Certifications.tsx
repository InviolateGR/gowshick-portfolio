'use client'

import { useRef, useEffect } from 'react'

const certs = [
  { title: 'Fundamentals of User Experience Design', issuer: 'Google', status: 'Completed', year: '2024' },
  { title: 'Software Development Life Cycle (SDLC)', issuer: 'LinkedIn Learning', status: 'Completed', year: '2024' },
  { title: 'Advanced Prompt Engineering Techniques', issuer: 'LinkedIn Learning', status: 'Completed', year: '2024' },
  { title: 'C++ Development', issuer: 'LinkedIn Learning', status: 'Completed', year: '2024' },
  { title: 'TCS NQT — Cognitive', issuer: 'TCS iON', status: 'Certified', year: '2024' },
  { title: 'Docker Essentials', issuer: 'IBM', status: 'In Progress', year: '2025' },
  { title: 'Petrichor Workshops \'23 & \'24', issuer: 'IIT Palakkad', status: 'Attended', year: '2024' },
  { title: 'International Conference Participant', issuer: 'Hindustan College of Engineering', status: 'Attended', year: '2024' },
]

export default function Certifications() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    el.querySelectorAll('.reveal').forEach(c => obs.observe(c))
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="certifications"
      ref={ref}
      style={{ padding: '140px 48px', borderTop: '1px solid #1c1c1c' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: 80 }}>
          <div className="section-label" style={{ marginBottom: 20 }}>Certifications</div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 400,
              color: '#f5f5f0',
            }}
          >
            Always learning.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 1,
            background: '#1c1c1c',
            border: '1px solid #1c1c1c',
          }}
        >
          {certs.map((cert, i) => (
            <div
              key={cert.title}
              className="reveal"
              style={{
                transitionDelay: `${i * 50}ms`,
                background: '#080808',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    letterSpacing: '0.12em',
                    color: cert.status === 'In Progress' ? '#7a8ab8' : '#7a6d5a',
                    textTransform: 'uppercase',
                    border: `1px solid ${cert.status === 'In Progress' ? '#7a8ab833' : '#c8b89a33'}`,
                    padding: '3px 8px',
                  }}
                >
                  {cert.status}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: '#333',
                  }}
                >
                  {cert.year}
                </span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  color: '#ccc',
                  lineHeight: 1.4,
                  fontWeight: 500,
                }}
              >
                {cert.title}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: '#555',
                  letterSpacing: '0.06em',
                }}
              >
                {cert.issuer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
