import { useState } from 'react'
import {
  adviser,
  credentials,
  featuredArticle,
  insurerPanel,
  relatedReading,
  services,
  video,
} from '../content'
import { href } from '../router'
import { ArrowButton } from '../components/Layout'
import { Headshot, Thumb } from '../components/Thumb'
import { CredentialIcon, PlayIcon, ServiceIcon } from '../components/Icons'
import { InsurerLogoGrid, InsurerTicker } from '../components/InsurerTicker'
import { ContactSection } from './ContactSection'

export function Home() {
  return (
    <>
      <section className="pv2 hero-dark" aria-labelledby="hero-heading">
        <div className="container hero-grid">
          <div className="hero-left">
            <div className="sec-label">
              <span className="eyebrow">Hello, I’m your {adviser.role}</span>
            </div>
            <h1 id="hero-heading" className="prof-name">
              {adviser.name}
            </h1>
            {adviser.intro.map((p) => (
              <p key={p} className="prof-intro">
                {p}
              </p>
            ))}
            <div className="hero-ctas">
              <ArrowButton to={href('/contact')}>Let’s talk</ArrowButton>
              <a className="scroll-link" href={href('/protection')}>
                How I can help you <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="hero-photo">
            <div className="photo-frame">
              <Headshot
                src={adviser.photo}
                name={adviser.name}
                alt={`${adviser.name}, ${adviser.role}`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pv2 bordered" aria-labelledby="about-heading">
        <div className="container about-grid">
          <div className="about-text">
            <div className="sec-label">
              <span className="eyebrow">About me</span>
            </div>
            <h2 id="about-heading">A little about me</h2>
            {adviser.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <h3>Who I help</h3>
            <p>{adviser.whoIHelp}</p>
          </div>
          <figure className="pull-quote">
            <span className="qm" aria-hidden="true">
              ”
            </span>
            <blockquote>{adviser.quote}</blockquote>
            <figcaption className="qa">
              {adviser.name} - {adviser.role}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="pv2 tight subtle" aria-labelledby="trust-heading">
        <div className="container">
          <div className="sec-label">
            <span className="eyebrow">Experience and Expertise</span>
          </div>
          <h2 id="trust-heading" className="h2-lg">
            Advice you can trust
          </h2>
          <ul className="cred-grid">
            {credentials.map((c) => (
              <li key={c.title} className="cred-tile">
                <div className="ci">
                  <CredentialIcon name={c.icon} />
                </div>
                <h3 className="cn">{c.title}</h3>
                <p className="cb">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="how-i-help"
        className="pv2 bordered"
        aria-labelledby="help-heading"
      >
        <div className="container">
          <div className="sec-label">
            <span className="eyebrow">What I do</span>
          </div>
          <div className="help-head">
            <h2 id="help-heading">How I can help you</h2>
            <p className="sub">
              The protection I work with for individuals, families and
              business owners.
            </p>
          </div>
          <ul className="svc-grid">
            {services.map((s) => (
              <li key={s.id} className="svc">
                <div className="si">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pv2 tight subtle" aria-labelledby="panel-heading">
        <div className="container">
          <div className="panel-grid">
            <div>
              <div className="sec-label">
                <span className="eyebrow">{insurerPanel.eyebrow}</span>
              </div>
              <h2 id="panel-heading" className="h2-lg">
                {insurerPanel.title}
              </h2>
              <p className="panel-intro">{insurerPanel.intro}</p>
            </div>
            <div className="providers">
              <h3>{insurerPanel.providersTitle}</h3>
              <InsurerLogoGrid />
            </div>
          </div>
          <p className="panel-closing">{insurerPanel.closing}</p>
        </div>
      </section>

      <section className="pv2 navy" aria-labelledby="video-heading">
        <div className="container video-wrap">
          <div className="sec-label">
            <span className="eyebrow on-dark">{video.eyebrow}</span>
          </div>
          <h2 id="video-heading">{video.title}</h2>
          <VideoFrame />
          <p className="vcap">{video.caption}</p>
        </div>
      </section>

      <section
        className="pv2 bordered before-ticker"
        aria-labelledby="articles-heading"
      >
        <div className="container">
          <div className="sec-label">
            <span className="eyebrow">Articles &amp; insights</span>
          </div>
          <div className="art-row-head">
            <h2 id="articles-heading">Worth a read</h2>
            <a className="scroll-link" href={href('/insights')}>
              See all my insights <span aria-hidden="true">→</span>
            </a>
          </div>
          <ul className="art-row">
            {relatedReading.map((a) => (
              <li key={a.slug}>
                <ArticleCard title={a.title} image={a.image} url={a.url} external />
              </li>
            ))}
            <li>
              <ArticleCard
                title={featuredArticle.title}
                image={featuredArticle.image}
                url={href(`/insights/${featuredArticle.slug}`)}
              />
            </li>
          </ul>
        </div>
      </section>

      <InsurerTicker />

      <ContactSection />
    </>
  )
}

// Click-to-play: loads YouTube only once the visitor asks for the video.
function VideoFrame() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="vframe">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
          title={video.caption}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <>
          <img src={video.image} alt="" />
          <div className="vplay">
            <button
              className="vplay-btn"
              type="button"
              aria-label={`Play video: ${video.caption}`}
              onClick={() => setPlaying(true)}
            >
              <PlayIcon />
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export function ArticleCard({
  title,
  image,
  url,
  external = false,
}: {
  title: string
  image?: string
  url: string
  external?: boolean
}) {
  return (
    <a
      className="art"
      href={url}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
    >
      <div className="aim">
        <Thumb src={image} label={title} />
      </div>
      <div className="abd">
        <h3>{title}</h3>
        <span className="aread">
          Read article <span aria-hidden="true">→</span>
          {external && <span className="visually-hidden"> (opens in a new tab)</span>}
        </span>
      </div>
    </a>
  )
}
