'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2200)
    return () => clearTimeout(t)
  }, [])

  const style = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  })

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 48px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background portrait — large, atmospheric */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '50%',
          height: '100%',
          opacity: loaded ? 0.27 : 0,
          transition: 'opacity 1.5s ease 1s',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #080808 0%, transparent 40%, transparent 80%, #080808 100%)',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #080808 0%, transparent 30%)',
            zIndex: 1,
          }}
        />
        <Image
          src="/portrait.jpg"
          alt="Gowshick Raja"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(60%)' }}
        />
      </div>

      {/* Grid lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(#1c1c1c 1px, transparent 1px), linear-gradient(90deg, #1c1c1c 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.25,
        }}
      />

      {/* Top label row */}
      <div
        style={{
          position: 'absolute',
          top: 120,
          left: 48,
          right: 48,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          ...style(300),
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.18em',
            color: '#7a6d5a',
            textTransform: 'uppercase',
          }}
        >
          Available for opportunities
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.18em',
            color: '#7a6d5a',
            textTransform: 'uppercase',
          }}
        >
          Coimbatore, India
        </span>
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Role label */}
        <div className="section-label" style={{ ...style(400), marginBottom: 24 }}>
          Fullstack Developer & UI/UX Designer
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 9vw, 120px)',
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: '#f5f5f0',
            marginBottom: 8,
            ...style(500),
          }}
        >
          Gowshick
        </h1>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 9vw, 120px)',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: '#c8b89a',
            marginBottom: 48,
            ...style(600),
          }}
        >
          Raja.
        </h1>

        {/* Descriptor row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 32,
            marginBottom: 56,
            maxWidth: 640,
            ...style(700),
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              color: '#999',
              lineHeight: 1.7,
              maxWidth: 380,
            }}
          >
            Engineering scalable products at the edge of code and design.
            ECE student. React. Node. Figma. SDLC.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', ...style(800) }}>
          <a href="#projects" className="btn-primary" data-hover>
            View Projects
            <span style={{ fontSize: 16 }}>↗</span>
          </a>
          <a href="#contact" className="btn-ghost" data-hover>
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          right: 48,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          ...style(1000),
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            letterSpacing: '0.2em',
            color: '#444',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 48,
            background: 'linear-gradient(to bottom, #444, transparent)',
          }}
        />
      </div>

      {/* Bottom ticker */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: '1px solid #1c1c1c',
          overflow: 'hidden',
          padding: '10px 0',
          background: '#080808',
          ...style(900),
        }}
      >
        <div className="marquee-track">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#2a2a2a', letterSpacing: '0.15em' }}>
            {Array(8).fill('React.js · Node.js · TypeScript · MongoDB · Figma · UI/UX Design · REST APIs · Docker · Agile · SDLC · ').join('')}
          </span>
        </div>
      </div>
    </section>
  )
}
