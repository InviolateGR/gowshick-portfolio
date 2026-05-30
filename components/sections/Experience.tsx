'use client'

import { useRef, useEffect } from 'react'

const experiences = [
  {
    company: 'Variac Electricalss',
    role: 'Intern Trainee',
    period: 'May 2025 – Jun 2025',
    type: 'Industry',
    points: [
      'Conducted usability testing and customer research to improve an existing web application.',
      'Designed responsive UI prototypes and contributed to implementation discussions.',
      'Improved navigation clarity and content structure using data-driven insights.',
    ],
  },
  {
    company: 'ZettaStacks Pvt Ltd',
    role: 'UI/UX Design & Dev Intern',
    period: 'May 2024 – Jul 2024',
    type: 'Industry',
    points: [
      'Worked across full SDLC — from requirements gathering to design, development, and testing.',
      'Designed and prototyped the Admin\'sHub HR dashboard using Figma.',
      'Collaborated with engineering teams during design-to-implementation handoffs.',
    ],
  },
  {
    company: 'KNOCKIA',
    role: 'Joint Secretary',
    period: 'Jul 2024 – Nov 2025',
    type: 'Leadership',
    points: [
      'Led coordination of academic and technical events across the department.',
      'Developed organizational and communication skills in a high-responsibility environment.',
    ],
  },
  {
    company: 'AVANTAA\'24',
    role: 'Dept. Event Coordinator',
    period: 'Oct 2023 – Mar 2024',
    type: 'Leadership',
    points: [
      'Core organizing team for a national-level tech fest at Sri Krishna College of Technology.',
      'Managed participant coordination and cross-team logistics for successful execution.',
    ],
  },
  {
    company: 'Enthu Tech',
    role: 'Student Intern',
    period: 'Mar 2022 – Apr 2022',
    type: 'Industry',
    points: [
      'Built IoT prototypes using Arduino and sensors.',
      'Debugged hardware-software interactions and documented procedures.',
    ],
  },
]

export default function Experience() {
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
      id="experience"
      ref={ref}
      style={{ padding: '140px 48px', borderTop: '1px solid #1c1c1c' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          className="reveal"
          style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 80 }}
        >
          <div>
            <div className="section-label" style={{ marginBottom: 20 }}>Experience</div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4vw, 56px)',
                fontWeight: 400,
                color: '#f5f5f0',
              }}
            >
              Where I've worked.
            </h2>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: '#444',
              letterSpacing: '0.1em',
            }}
          >
            {experiences.length} roles
          </span>
        </div>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className="reveal"
              style={{
                transitionDelay: `${i * 80}ms`,
                borderTop: '1px solid #1c1c1c',
                padding: '40px 0',
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: 48,
              }}
            >
              {/* Left: meta */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    color: exp.type === 'Industry' ? '#c8b89a' : '#7a8ab8',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}
                >
                  {exp.type}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: '#555',
                    letterSpacing: '0.05em',
                  }}
                >
                  {exp.period}
                </div>
              </div>

              {/* Right: content */}
              <div>
                <div style={{ marginBottom: 16 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 22,
                      fontWeight: 400,
                      color: '#f5f5f0',
                      marginBottom: 4,
                    }}
                  >
                    {exp.company}
                  </h3>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      color: '#666',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {exp.role}
                  </div>
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {exp.points.map(p => (
                    <li
                      key={p}
                      style={{
                        display: 'flex',
                        gap: 12,
                        fontFamily: 'var(--font-body)',
                        fontSize: 14,
                        color: '#888',
                        lineHeight: 1.6,
                        listStyle: 'none',
                      }}
                    >
                      <span style={{ color: '#c8b89a44', flexShrink: 0, marginTop: 3 }}>—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #1c1c1c' }} />
        </div>
      </div>
    </section>
  )
}
