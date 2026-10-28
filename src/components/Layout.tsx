import { useState, type ReactNode } from 'react'
import { adviser } from '../content'
import { href } from '../router'
import { ArrowIcon, MailIcon, PhoneIcon } from './Icons'
import logo from '../assets/tavistock-protect-white.png'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/protection', label: 'Protection' },
  { path: '/insights', label: 'Insights' },
]

// "Protection" and "Contact" are sections of Home, so Home stays current on them.
function isActive(current: string, path: string) {
  if (path === '/') return ['/', '/contact', '/protection'].includes(current)
  return current === path || current.startsWith(`${path}/`)
}

// Red pill button with the white circular arrow, as on the reference page.
export function ArrowButton({
  to,
  children,
  small = false,
  onClick,
}: {
  to: string
  children: ReactNode
  small?: boolean
  onClick?: () => void
}) {
  return (
    <a
      className={`btn btn-dark${small ? ' btn-sm' : ''}`}
      href={to}
      onClick={onClick}
    >
      <span className="btn-label">{children}</span>
      <span className="arc">
        <ArrowIcon size={small ? 14 : 16} />
      </span>
    </a>
  )
}

export function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container nav">
        <a className="logo" href={href('/')} onClick={close}>
          <img
            src={logo}
            alt={`${adviser.firm} — ${adviser.name}, home`}
            width="435"
            height="108"
          />
        </a>
        <nav
          id="site-nav"
          className={`site-nav${open ? ' is-open' : ''}`}
          aria-label="Main"
        >
          <ul>
            {/* Hide "Home" while on the home page; the logo still links there. */}
            {navItems
              .filter((item) => item.path !== '/' || !isActive(path, '/'))
              .map((item) => (
                <li key={item.path}>
                  <a
                    href={href(item.path)}
                    aria-current={
                      isActive(path, item.path) ? 'page' : undefined
                    }
                    onClick={close}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
        <div className="nav-right">
          <ArrowButton to={href('/contact')} small onClick={close}>
            Contact {adviser.firstName}
          </ArrowButton>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="nav-toggle-bar" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="container foot-main">
        <div className="foot-brand">
          <a className="logo" href={href('/')}>
            <img src={logo} alt={`${adviser.firm}, home`} width="435" height="108" />
          </a>
          <p className="foot-who">
            {adviser.name}
            <span>
              {adviser.role}, {adviser.firm}
            </span>
          </p>
          <ArrowButton to={href('/contact')} small>
            Send me a message
          </ArrowButton>
        </div>

        <nav className="foot-col" aria-labelledby="foot-explore">
          <h2 id="foot-explore">Explore</h2>
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <a href={href(item.path)}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href={href('/contact')}>Contact</a>
            </li>
          </ul>
        </nav>

        <div className="foot-col">
          <h2>Get in touch</h2>
          <ul>
            <li>
              <a href={`tel:${adviser.phone}`}>
                <PhoneIcon /> {adviser.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${adviser.email}`}>
                <MailIcon /> {adviser.email}
              </a>
            </li>
            <li>
              <a href="https://www.tavistockprotect.com" target="_blank" rel="noopener">
                www.tavistockprotect.com
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container foot-bottom">
        <p>© 2026 Tavistock Protect. All rights reserved.</p>
        <a href="mailto:info@tavistockprotect.com">info@tavistockprotect.com</a>
      </div>
    </footer>
  )
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string
  title: string
  children?: ReactNode
}) {
  return (
    <div className="page-intro">
      <div className="container">
        {eyebrow && (
          <div className="sec-label">
            <span className="eyebrow">{eyebrow}</span>
          </div>
        )}
        <h1>{title}</h1>
        {children && <div className="page-intro-lede">{children}</div>}
      </div>
    </div>
  )
}
