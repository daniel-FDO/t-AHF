import { adviser, featuredArticle, insurerPanel, services } from '../content'
import { href } from '../router'
import { Headshot, Thumb } from '../components/Thumb'
import { InsurerTicker } from '../components/InsurerTicker'
import { ContactSection } from './ContactSection'

// Anjorin's blog, built from his printed flyers and profile page. Where a
// flyer gives a fuller description of a service, it replaces the profile wording.
const flyerDescriptions: Partial<Record<string, string>> = {
  'life-critical-illness':
    'Life and Mortgage insurance plans pay out a cash lump sum in the event of your death within the term of the policy. Critical illness cover is often sold together with life insurance and will pay a cash lump sum upon diagnosis of a specified critical illness.',
  'income-protection':
    'A small monthly payment provides cover so that if you do have to take time off work because of an accident or illness, you’ll receive a regular income under the terms of the policy until you’re back on your feet.',
  'private-medical-insurance':
    'Tavistock Protect’s private medical insurance (PMI) allows you to avoid NHS waiting lists, receive fast-track consultations and private treatment for short-term curable medical problems.',
}

// The two covers the article leads with; the rest are listed more briefly.
const mainCover = ['life-critical-illness', 'income-protection']

const questions = [
  'Who relies on your income, and how would they manage without it?',
  'How long could you keep up with your mortgage or rent and bills if you couldn’t work?',
  'What support, if any, would your employer give you if you were off sick?',
  'Do you already have cover, through work or a policy of your own, and do you know what it includes?',
  'What could you comfortably afford to pay each month?',
  'Has anything changed recently, such as a new home, a new baby, a new job or starting a business?',
]

// The enquiry form sits at the foot of this page, so scroll to it in place.
function scrollToContact() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document
    .getElementById('contact')
    ?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
  const heading = document.getElementById('contact-heading')
  heading?.setAttribute('tabindex', '-1')
  heading?.focus({ preventScroll: true })
}

export function BlogPost() {
  const main = services.filter((s) => mainCover.includes(s.id))
  const other = services.filter((s) => !mainCover.includes(s.id))

  return (
    <article className="reader blog">
      <div className="container reader-inner">
        <p className="back-link">
          <a href={href('/insights')}>
            <span aria-hidden="true">←</span> All insights
          </a>
        </p>

        <header className="blog-header">
          <div className="sec-label">
            <span className="eyebrow">Protection guide</span>
          </div>
          <h1>Your Future Matters. Your Family Deserves Protection.</h1>
          <p className="blog-dek">
            Why protection may matter, what the main types of cover generally
            do, and what to think about before you speak to an adviser.
          </p>
          <div className="byline">
            <Headshot src={adviser.photoThumb} name={adviser.name} alt="" />
            <div>
              <p className="amn">By {adviser.name}</p>
              <p className="amr">
                {adviser.role}, {adviser.firm}
              </p>
            </div>
            <button
              type="button"
              className="byline-contact"
              onClick={scrollToContact}
            >
              Contact {adviser.firstName} <span aria-hidden="true">↓</span>
            </button>
          </div>
        </header>

        <figure className="reader-figure blog-figure">
          <Thumb src={featuredArticle.image} label={featuredArticle.title} />
        </figure>

        <div className="prose">
          <p className="blog-lede">{adviser.intro[1]}</p>

          <section aria-labelledby="why-heading">
            <h2 id="why-heading">Why protection may matter</h2>
            <p>
              Most of us rely on a regular income to pay for a home, the bills
              and everyday life, and often other people rely on it too. An
              illness, an accident or a death can put that income at risk at
              the moment your family can least afford it.
            </p>
            <p>
              Protection is there to help with that: to look after your loved
              ones and cover your financial obligations if the unexpected
              happens. It’s easy to put off, so it’s worth taking a moment to
              think about what would happen if your income stopped.
            </p>
          </section>

          <section aria-labelledby="cover-heading">
            <h2 id="cover-heading">The main types of cover</h2>
            <dl className="cover-list">
              {main.map((s) => (
                <div key={s.id}>
                  <dt>{s.title}</dt>
                  <dd>{flyerDescriptions[s.id] ?? s.summary}</dd>
                </div>
              ))}
            </dl>

            <h3>Other cover I can help with</h3>
            <dl className="cover-list is-compact">
              {other.map((s) => (
                <div key={s.id}>
                  <dt>{s.title}</dt>
                  <dd>{flyerDescriptions[s.id] ?? s.summary}</dd>
                </div>
              ))}
            </dl>

            <p className="blog-note">
              Every policy has its own terms, and the right cover depends on
              your circumstances: your age, health, job, budget and what you
              want to protect. This article is general information, not
              personal advice.
            </p>
          </section>

          <section aria-labelledby="questions-heading">
            <h2 id="questions-heading">
              Questions to consider before you speak to an adviser
            </h2>
            <ol className="blog-questions">
              {questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>
            <p>
              You don’t need all the answers before getting in touch. I take
              time to understand your situation, and we can work through these
              together.
            </p>
          </section>

          <section aria-labelledby="insurers-heading">
            <h2 id="insurers-heading">Cover from the UK’s major insurers</h2>
            <p>{insurerPanel.intro}</p>
          </section>
        </div>
      </div>

      {/* Outside the reading column so the logos run the full screen width. */}
      <div className="blog-providers">
        <InsurerTicker compact />
      </div>

      <div className="container reader-inner">
        <p className="blog-flipbook">
          <a href={featuredArticle.url} target="_blank" rel="noopener">
            View this blog as a flipbook
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </p>
      </div>

      <ContactSection />
    </article>
  )
}
