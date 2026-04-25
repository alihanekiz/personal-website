import { useState } from 'react'

const KeyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="15" r="4" />
    <line x1="10.85" y1="12.15" x2="19" y2="4" />
    <line x1="18" y1="5" x2="20" y2="7" />
    <line x1="15" y1="8" x2="17" y2="10" />
  </svg>
)

const BitcoinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />
    <path d="M8 6v12" />
    <path d="M8 12h6" />
    <path d="M9 3v3m0 12v3m4 -18v3m0 12v3" />
  </svg>
)

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const ICONS = {
  pgp: KeyIcon,
  bitcoin: BitcoinIcon,
}

export function KeyBlock({ label, value, href, icon }) {
  const [copied, setCopied] = useState(false)
  const Icon = ICONS[icon]

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  return (
    <div className="key-block">
      {Icon && (
        <span className="key-block-icon" aria-hidden="true">
          <Icon />
        </span>
      )}
      <span className="key-block-label">{label}</span>
      {href ? (
        <a href={href} className="key-block-value">
          {value}
        </a>
      ) : (
        <span className="key-block-value">{value}</span>
      )}
      <button
        className={`key-block-copy${copied ? ' copied' : ''}`}
        onClick={handleCopy}
        title={copied ? 'Copied' : 'Copy'}
        aria-label={copied ? 'Copied' : 'Copy to clipboard'}
        type="button"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  )
}
