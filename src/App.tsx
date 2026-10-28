import { useEffect, type MouseEvent } from 'react'
import { usePath, useRouteFocus, href } from './router'
import { Header, Footer, PageIntro } from './components/Layout'
import { Home } from './pages/Home'
import { Insights } from './pages/Insights'
import { featuredArticle } from './content'

// Home also answers to section links: the "Protection" nav item and every
// "Contact" button scroll to a section of Home rather than a separate page.
const homeSections: Record<string, string | null> = {
  '/': null,
  '/protection': 'how-i-help',
  '/contact': 'contact',
}

function resolve(path: string) {
  if (path in homeSections) {
    return { page: 'home', section: homeSections[path], title: null }
  }
  if (path === '/insights') {
    return { page: path, section: null, title: 'Insights' }
  }
  if (path.startsWith('/insights/')) {
    const slug = path.slice('/insights/'.length)
    const title = slug === featuredArticle.slug ? featuredArticle.title : null
    return { page: path, section: null, title: title ?? 'Insights' }
  }
  return { page: 'not-found', section: null, title: 'Page not found' }
}

function App() {
  const path = usePath()
  const { page, section, title } = resolve(path)
  useRouteFocus(page, section)

  useEffect(() => {
    document.title = title
      ? `${title} · Anjorin Henry Fasan`
      : 'Anjorin Henry Fasan · Protection Adviser'
  }, [title])

  return (
    <>
      <a className="skip-link" href="#main" onClick={skipToMain}>
        Skip to content
      </a>
      <Header path={path} />
      <main id="main">
        {/* Keyed by page so moving between pages replays the fade-in, while
            scrolling between sections of Home doesn't. */}
        <div key={page} className="page-transition">
          {page === 'home' ? (
            <Home />
          ) : page.startsWith('/insights') ? (
            <Insights path={path} />
          ) : (
            <PageIntro title="Page not found">
              <p>
                That page doesn’t exist.{' '}
                <a href={href('/')}>Go to the home page</a>.
              </p>
            </PageIntro>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

function skipToMain(e: MouseEvent) {
  e.preventDefault()
  const main = document.getElementById('main')
  main?.setAttribute('tabindex', '-1')
  main?.focus()
}

export default App
