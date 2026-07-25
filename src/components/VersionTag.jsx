function VersionTag({ version, label }) {
    return (
      <p style={{ fontFamily: 'monospace', color: '#888', fontSize: '13px', letterSpacing: '0.05em' }}>
        {version} — {label}
      </p>
    )
  }
  
  export default VersionTag