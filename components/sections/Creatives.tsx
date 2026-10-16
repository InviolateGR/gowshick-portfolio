'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

const posters = [
  {
    id: 1,
    title: 'Sacred Stone',
    subtitle: 'Adobe Photoshop · 2026',
    src: '/creatives/poster-1.png',
  },
  {
    id: 2,
    title: 'The Shining Movie Poster',
    subtitle: 'Adobe Photoshop · 2026',
    src: '/creatives/poster-2.png',
  },
  {
    id: 3,
    title: 'Oldboy Movie Poster',
    subtitle: 'Adobe Photoshop · 2026',
    src: '/creatives/poster-3.png',
  },
  {
    id: 4,
    title: 'Movie Poster',
    subtitle: 'Adobe Photoshop · 2026',
    src: '/creatives/poster-4.png',
  },
    {
    id: 5,
    title: 'Rough Terrain T-Shirt Design',
    subtitle: 'Adobe Express · 2024',
    src: '/creatives/poster-5.png',
  },
    {
    id: 6,
    title: 'Blossom T-Shirt Design',
    subtitle: 'Adobe Express · 2024',
    src: '/creatives/poster-6.png',
  },
    {
    id: 7,
    title: 'Daffodil',
    subtitle: 'Adobe Photoshop · 2026',
    src: '/creatives/poster-7.png',
  },
    {
    id: 8,
    title: 'Clematis',
    subtitle: 'Adobe Photoshop · 2026',
    src: '/creatives/poster-8.png',
  },
    {
    id: 9,
    title: 'Virgin Mary',
    subtitle: 'Adobe Photoshop · 2026',
    src: '/creatives/poster-9.png',
  }
]

export default function Creatives() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState<(typeof posters)[0] | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.08 }
    )
    el.querySelectorAll('.reveal').forEach(c => obs.observe(c))
    return () => obs.disconnect()
  }, [])

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [active])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <section
        id="creatives"
        ref={ref}
        style={{ padding: '140px 48px', borderTop: '1px solid #1c1c1c' }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Header */}
          <div className="reveal" style={{ marginBottom: 80 }}>
            <div className="section-label" style={{ marginBottom: 20 }}>Creatives</div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4vw, 56px)',
                fontWeight: 400,
                color: '#f5f5f0',
              }}
            >
              Design work.
            </h2>
          </div>

          {/* Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 2,
            }}
          >
            {posters.map((poster, i) => (
              <div
                key={poster.id}
                className="reveal"
                data-hover
                onClick={() => setActive(poster)}
                style={{
                  transitionDelay: `${i * 80}ms`,
                  position: 'relative',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: '#111',
                }}
              >
                <Image
                  src={poster.src}
                  alt={poster.title}
                  fill
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease, filter 0.4s ease',
                  }}
                  onMouseEnter={e => {
                    const img = e.target as HTMLElement
                    img.style.transform = 'scale(1.04)'
                    img.style.filter = 'brightness(0.7)'
                  }}
                  onMouseLeave={e => {
                    const img = e.target as HTMLElement
                    img.style.transform = 'scale(1)'
                    img.style.filter = 'brightness(1)'
                  }}
                />

                {/* Hover label */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '40px 20px 20px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                  }}
                  className="poster-label"
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: '#f5f5f0',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {poster.title}
                  </span>
                  <span style={{ color: '#c8b89a', fontSize: 18 }}>↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hover label reveal via style tag */}
      <style>{`
        div:hover .poster-label { opacity: 1 !important; }
      `}</style>

      {/* Lightbox */}
      {active && (
        <div
          onClick={() => setActive(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 24px',
            // Glassmorphism blur backdrop
            backdropFilter: 'blur(24px) saturate(0.6)',
            WebkitBackdropFilter: 'blur(24px) saturate(0.6)',
            background: 'rgba(8, 8, 8, 0.75)',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          {/* Title block — top right, outside image */}
          <div
            style={{
              position: 'absolute',
              top: 48,
              right: 48,
              textAlign: 'right',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 2.5vw, 28px)',
                fontWeight: 400,
                color: '#fff',
                textShadow: '0 2px 16px rgba(0,0,0,0.8)',
                marginBottom: 4,
              }}
            >
              {active.title}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                color: '#c8b89a',
                textShadow: '0 2px 12px rgba(0,0,0,0.8)',
                textTransform: 'uppercase',
              }}
            >
              {active.subtitle}
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => setActive(null)}
            style={{
              position: 'absolute',
              top: 48,
              left: 48,
              background: 'none',
              border: '1px solid #333',
              color: '#999',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.12em',
              padding: '8px 16px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              const b = e.currentTarget
              b.style.color = '#f5f5f0'
              b.style.borderColor = '#666'
            }}
            onMouseLeave={e => {
              const b = e.currentTarget
              b.style.color = '#999'
              b.style.borderColor = '#333'
            }}
          >
            ✕ Close
          </button>

          {/* Image */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              maxHeight: '80vh',
              maxWidth: '90vw',
              aspectRatio: '3/4',
              width: 'min(480px, 90vw)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
            }}
          >
            <Image
              src={active.src}
              alt={active.title}
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 90vw, 480px"
            />
          </div>
        </div>
      )}
    </>
  )
}