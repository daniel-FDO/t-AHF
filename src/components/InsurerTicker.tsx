import aegon from '../assets/insurers/aegon.svg'
import aig from '../assets/insurers/aig.png'
import allianz from '../assets/insurers/allianz.svg'
import aviva from '../assets/insurers/aviva.svg'
import axa from '../assets/insurers/axa.svg'
import canadaLife from '../assets/insurers/canada-life.svg'
import cirencester from '../assets/insurers/cirencester.svg'
import guardian from '../assets/insurers/guardian.svg'
import hsbc from '../assets/insurers/hsbc.svg'
import lv from '../assets/insurers/lv.png'
import legalGeneral from '../assets/insurers/legal-general.png'
import royalLondon from '../assets/insurers/royal-london.svg'
import rsa from '../assets/insurers/rsa.svg'
import scottishWidows from '../assets/insurers/scottish-widows.png'
import shepherds from '../assets/insurers/shepherds.svg'
import vitality from '../assets/insurers/vitality.svg'
import zurich from '../assets/insurers/zurich.svg'

// Insurers from the panel on Anjorin's printed flyer, in the flyer's order.
// `size` evens out optical weight: wide wordmarks sit lower, stacked or
// square marks taller, so every logo reads at a similar size.
const logos = [
  { name: 'Aegon', src: aegon, size: 'wide' },
  { name: 'AIG', src: aig, size: 'mid' },
  { name: 'Allianz', src: allianz, size: 'wide' },
  { name: 'Aviva', src: aviva, size: 'tall' },
  { name: 'AXA', src: axa, size: 'tall' },
  { name: 'Cirencester Friendly', src: cirencester, size: 'wide' },
  { name: 'Canada Life', src: canadaLife, size: 'mid' },
  { name: 'Guardian', src: guardian, size: 'wide' },
  { name: 'HSBC', src: hsbc, size: 'wide' },
  { name: 'LV=', src: lv, size: 'mid' },
  { name: 'Legal & General', src: legalGeneral, size: 'tall' },
  { name: 'Royal London', src: royalLondon, size: 'tall' },
  { name: 'RSA', src: rsa, size: 'mid' },
  { name: 'Scottish Widows', src: scottishWidows, size: 'wide' },
  { name: 'Shepherds Friendly', src: shepherds, size: 'tall' },
  { name: 'Vitality', src: vitality, size: 'tall' },
  { name: 'Zurich', src: zurich, size: 'tall' },
] as const

// `compact` is the smaller version used inside the blog post's provider box.
export function InsurerTicker({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`ticker${compact ? ' is-compact' : ''}`}
      aria-label="Insurers I work with"
    >
      <div className="ticker-viewport">
        {/* Two identical runs side by side; the track slides by exactly one
            run's width, so the loop restarts without a visible jump. */}
        <div className="ticker-track">
          <LogoRun />
          <LogoRun hidden />
        </div>
      </div>
    </section>
  )
}

// Static version: every logo once, in a wrapping grid.
export function InsurerLogoGrid() {
  return (
    <ul className="logo-grid" aria-label="Insurers I work with">
      {logos.map((logo) => (
        <li key={logo.name} className={`ticker-item is-${logo.size}`}>
          <img src={logo.src} alt={logo.name} />
        </li>
      ))}
    </ul>
  )
}

function LogoRun({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="ticker-run" aria-hidden={hidden || undefined}>
      {logos.map((logo) => (
        <li key={logo.name} className={`ticker-item is-${logo.size}`}>
          <img src={logo.src} alt={hidden ? '' : logo.name} />
        </li>
      ))}
    </ul>
  )
}
