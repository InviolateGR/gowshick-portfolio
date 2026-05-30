'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

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
      <div style={{ width: 54, height: 54, position: 'relative' }}>
        <Image
          src="/apple-touch-icon.png"
          alt="Gowshick Raja"
          fill
          style={{ objectFit: 'contain' }}
        />
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
