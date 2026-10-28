import { useEffect, useSyncExternalStore } from 'react'

// Minimal hash router: works on any static host without server rewrites.

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

function getPath() {
  const path = window.location.hash.replace(/^#/, '')
  return path.startsWith('/') ? path : '/'
}

export function usePath() {
  return useSyncExternalStore(subscribe, getPath, () => '/')
}

export const href = (path: string) => `#${path}`

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// After navigating, jump to the top (or glide to a section) and move focus to
// the new heading so keyboard and screen reader users land in the content.
export function useRouteFocus(path: string, section: string | null) {
  useEffect(() => {
    showRoute(section)
  }, [path, section])

  // Clicking a link to the current route (e.g. "Contact" after scrolling away)
  // fires no hashchange, so handle it here.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element).closest?.('a[href^="#/"]')
      if (link && link.getAttribute('href') === window.location.hash) {
        e.preventDefault()
        showRoute(section, true)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [section])
}

function showRoute(section: string | null, smoothToTop = false) {
  const smooth = prefersReducedMotion() ? 'auto' : 'smooth'
  const sectionEl = section ? document.getElementById(section) : null
  const target = sectionEl ?? document.querySelector<HTMLElement>('main h1')
  if (sectionEl) {
    sectionEl.scrollIntoView({ behavior: smooth })
  } else {
    window.scrollTo({ top: 0, behavior: smoothToTop ? smooth : 'instant' })
  }
  if (target) {
    target.setAttribute('tabindex', '-1')
    target.focus({ preventScroll: true })
  }
}
