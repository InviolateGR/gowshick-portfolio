'use client'

import { useRef, useEffect } from 'react'

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Angular', 'TypeScript', 'HTML/CSS', 'Responsive Design', 'UI Integration'],
  },
  {
    category: 'Backend & DB',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'REST APIs', 'JWT Auth'],
  },
  {
    category: 'UI/UX',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Systems', 'Canva'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Docker', 'Postman', 'VS Code', 'Linux'],
  },
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'C++', 'Java', 'Python', 'SQL'],
  },
  {
    category: 'Practices',
    skills: ['SDLC', 'Agile', 'Testing', 'Code Reviews', 'Documentation', 'Debugging'],
  },
]

export default function Skills() {
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
      id="skills"
      ref={ref}
      style={{ padding: '140px 48px', borderTop: '1px solid #1c1c1c' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: 80 }}>
          <div className="section-label" style={{ marginBottom: 20 }}>Skills</div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 400,
              color: '#f5f5f0',
            }}
          >
            What I work with.
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
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className="reveal"
              style={{
                transitionDelay: `${i * 60}ms`,
                background: '#080808',
                padding: '32px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.15em',
                  color: '#7a6d5a',
                  textTransform: 'uppercase',
                  marginBottom: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span style={{ color: '#c8b89a' }}>◈</span>
                {group.category}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      color: '#999',
                      border: '1px solid #1c1c1c',
                      padding: '6px 12px',
                      transition: 'color 0.2s ease, border-color 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      const el = e.target as HTMLElement
                      el.style.color = '#f5f5f0'
                      el.style.borderColor = '#333'
                    }}
                    onMouseLeave={e => {
                      const el = e.target as HTMLElement
                      el.style.color = '#999'
                      el.style.borderColor = '#1c1c1c'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
