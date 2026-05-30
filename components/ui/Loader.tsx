'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => {
        if (c >= 100) {
          clearInterval(interval)
          setTimeout(() => setVisible(false), 400)
          return 100
        }
        return c + 2
      })
    }, 36)
    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  return (
    <div
      className="loader"
      style={{
        opacity: count === 100 ? 0 : 1,
        transition: 'opacity 0.4s ease',
        pointerEvents: count === 100 ? 'none' : 'all',
      }}
    >
      {/* Snake logo SVG inline */}
      <div style={{ width: 64, height: 64, opacity: 0.9 }}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="#c8b89a" strokeWidth="1.5" fill="none" opacity="0.3" />
          <circle cx="50" cy="50" r="42" stroke="#c8b89a" strokeWidth="0.5" fill="none" opacity="0.2" />
          <text x="50" y="56" textAnchor="middle" fill="#c8b89a" fontSize="32" fontFamily="serif">⟁</text>
        </svg>
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.2em',
          color: '#7a6d5a',
          marginTop: 24,
          textTransform: 'uppercase',
        }}
      >
        {count}%
      </div>
      <div className="loader-bar" style={{ marginTop: 12 }} />
    </div>
  )
}
