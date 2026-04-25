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
  <svg viewBox="0 0 32 32" fill="currentColor">
    <path d="M30.95 19.875c-2.094 8.4-10.6 13.512-19 11.412-8.4-2.1-13.5-10.612-11.4-19.012 2.094-8.406 10.594-13.512 19-11.412 8.4 2.1 13.5 10.613 11.4 19.012zm-9.825-6.075c.319-2.119-1.281-3.262-3.481-4.012l.706-2.85-1.731-.431-.694 2.769c-.456-.113-.925-.225-1.394-.331l.694-2.788-1.738-.431-.706 2.85c-.381-.087-.756-.169-1.119-.262l.006-.012-2.394-.6-.463 1.85s1.288.294 1.262.319c.706.175.831.638.806 1.012l-.806 3.231c.05.012.113.031.181.056l-.187-.044-1.131 4.531c-.087.213-.3.531-.794.413.025.031-1.262-.319-1.262-.319l-.862 1.987 2.262.563c.419.106.831.213 1.238.319l-.713 2.881 1.731.431.706-2.85c.475.131.937.244 1.388.356l-.7 2.831 1.738.431.713-2.875c2.962.563 5.194.337 6.131-2.344.756-2.156-.038-3.4-1.594-4.213 1.137-.262 1.987-1.013 2.219-2.557zm-3.969 5.563c-.538 2.156-4.169.994-5.344.7l.944-3.819c1.181.294 4.969.881 4.4 3.119zm.538-5.594c-.488 1.962-3.512.969-4.494.725l.856-3.456c.987.244 4.144.706 3.637 2.731z" />
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
