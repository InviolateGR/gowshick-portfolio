'use client'

import { useRef, useEffect, useState } from 'react'

const projects = [
    {
    title: 'BooringGames',
    subtitle: 'Web Game Portal',
    year: '2025',
    stack: ['HTML', 'CSS', 'JavaScript'],
    role: 'Frontend Developer',
    description:
      'A responsive multi-game web portal with optimized frontend performance and cross-browser compatibility. Focused on smooth UX across all device sizes.',
    tags: ['Responsive', 'Performance', 'Cross-browser'],
    index: '03',
    accent: '#8ab89a',
    url: 'https://inviolategr.github.io/BoringGames/',
  },
  {
  title: 'Smart Plantar Monitor',
  subtitle: 'IoT + ML System — Final Year Research Project',
  year: '2026',
  stack: ['ESP32', 'Arduino', 'LSTM', 'TensorFlow Lite', 'Python'],
  role: 'Core Developer & Researcher',
  description:
    'An intelligent wearable insole system that detects diabetic foot ulcer risk in real time using FSR pressure sensors, IMU gait analysis, and an LSTM deep learning model. Achieves 93–95% classification accuracy across normal, moderate, and high-risk profiles. Accepted & presented at ICACCS 2026.',
  tags: ['IoT', 'Machine Learning', 'Healthcare', 'ICACCS 2026'],
  index: '06',
  accent: '#9ab8c8',
  url: '#', // replace with conference paper link or leave as '#'
  },
  {
    title: 'SnapMusic',
    subtitle: 'Full-Stack Music Platform',
    year: '2024',
    stack: ['React.js', 'Node.js', 'MongoDB', 'JWT'],
    role: 'Fullstack Developer',
    description:
      'A complete music web application with secure authentication, external API integrations, playlist management, and search. Built with scalability in mind under Agile iterations.',
    tags: ['Authentication', 'REST API', 'Agile'],
    index: '01',
    accent: '#c8b89a',
    url: 'https://www.behance.net/gallery/238682545/Snap-Music?tracking_source=project_owner_other_projects'
  },
  {
    title: "Admin's Hub",
    subtitle: 'HR Dashboard — UI + System Design',
    year: '2024',
    stack: ['Figma', 'SDLC', 'UX Research'],
    role: 'UI/UX Designer',
    description:
      'An end-to-end HR management dashboard featuring task scheduling, interview tracking, and data visualization. Designed from wireframe to high-fidelity prototype aligned with SDLC documentation.',
    tags: ['Figma', 'Prototyping', 'System Design'],
    index: '02',
    accent: '#7a8ab8',
    url: 'https://www.behance.net/gallery/238676519/Admins-Hub?tracking_source=project_owner_other_projects'
  },
  {
    title: 'Gradient Backgrounds',
    subtitle: 'Developer Utility Tool',
    year: '2023',
    stack: ['HTML', 'CSS', 'JavaScript'],
    role: 'Frontend Developer',
    description:
      'A utility platform for browsing and copying CSS gradient backgrounds with real-time direction preview. Clean interface focused on developer experience.',
    tags: ['CSS', 'Real-time Preview', 'DX'],
    index: '04',
    accent: '#b89ac8',
    url: 'https://inviolategr.github.io/Background_Generator/',
  },
  {
  title: 'Campus Nexus',
  subtitle: 'College ERP System — UI/UX Design',
  year: '2025',
  stack: ['Figma', 'UX Research', 'Design Systems'],
  role: 'UI/UX Designer',
  description:
    'A comprehensive college ERP system UI covering student management, scheduling, and administrative workflows. Designed with a focus on clarity, role-based navigation, and scalable component architecture.',
  tags: ['Figma', 'ERP', 'UI Design'],
  index: '05',
  accent: '#a8c4b8',
  url: 'https://www.behance.net/gallery/240353899/Campus-Nexus-College-EPR-system-UI',
  },
]

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.06 }
    )
    el.querySelectorAll('.reveal').forEach(c => obs.observe(c))
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: '140px 48px', borderTop: '1px solid #1c1c1c' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          className="reveal"
          style={{ marginBottom: 80 }}
        >
          <div className="section-label" style={{ marginBottom: 20 }}>Projects</div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 400,
              color: '#f5f5f0',
            }}
          >
            Things I've built.
          </h2>
        </div>

        {/* Project list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="reveal"
              data-hover
              style={{
                transitionDelay: `${i * 60}ms`,
                borderTop: '1px solid #1c1c1c',
                padding: '48px 0',
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: 40,
                alignItems: 'start',
                cursor: 'pointer',
                background: hovered === i ? '#111' : 'transparent',
                transition: 'background 0.3s ease',
                marginLeft: -48,
                marginRight: -48,
                paddingLeft: 48,
                paddingRight: 48,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Index */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: '#333',
                  letterSpacing: '0.08em',
                  paddingTop: 4,
                }}
              >
                {p.index}
              </div>

              {/* Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8, flexWrap: 'wrap' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(20px, 3vw, 32px)',
                      fontWeight: 400,
                      color: hovered === i ? p.accent : '#f5f5f0',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {p.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: '#444',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {p.year}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 12,
                    color: '#555',
                    letterSpacing: '0.06em',
                    marginBottom: 16,
                    textTransform: 'uppercase',
                  }}
                >
                  {p.subtitle} — {p.role}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    color: '#777',
                    lineHeight: 1.7,
                    maxWidth: 520,
                    marginBottom: 20,
                  }}
                >
                  {p.description}
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.stack.map(s => (
                    <span
                      key={s}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        color: '#555',
                        border: '1px solid #222',
                        padding: '4px 10px',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <a href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 24,
                  color: hovered === i ? p.accent : '#333',
                  transition: 'color 0.3s ease, transform 0.3s ease',
                  transform: hovered === i ? 'translate(4px, -4px)' : 'none',
                  paddingTop: 4,
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                ↗
              </a>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #1c1c1c' }} />
        </div>
      </div>
    </section>
  )
}
