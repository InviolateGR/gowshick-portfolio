export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #1c1c1c',
        padding: '28px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: '#333',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        © 2026 Gowshick Raja
      </span>
      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: '#333',
            letterSpacing: '0.1em',
          }}
        >
          Designed & Built by Gowshick Raja
        </span>
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#2a5a2a',
            boxShadow: '0 0 6px #2a5a2a',
            animation: 'pulse 2s infinite',
          }}
        />
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </footer>
  )
}
