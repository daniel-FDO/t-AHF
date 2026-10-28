import { featuredArticle, relatedReading, video } from '../content'
import { href } from '../router'
import { PageIntro } from '../components/Layout'
import { Thumb } from '../components/Thumb'
import { ArrowIcon } from '../components/Icons'
import { ArticleCard } from './Home'
import { BlogPost } from './BlogPost'

const articleHref = href(`/insights/${featuredArticle.slug}`)

export function Insights({ path }: { path: string }) {
  if (path === '/insights') return <InsightsList />
  if (path === `/insights/${featuredArticle.slug}`) return <BlogPost />
  return (
    <PageIntro eyebrow="Insights" title="Article not found">
      <p>
        <a href={href('/insights')}>Back to Insights</a>
      </p>
    </PageIntro>
  )
}

function InsightsList() {
  return (
    <>
      <PageIntro eyebrow="Articles & insights" title="Insights">
        <p>My own writing, plus news from insurers I think is worth a read.</p>
      </PageIntro>

      <section className="pv2 tight" aria-label="Articles">
        <div className="container insights">
          <article className="feature-card">
            <Thumb src={featuredArticle.image} label={featuredArticle.title} />
            <div className="feature-body">
              <p className="acat">By {featuredArticle.author}</p>
              <h2>
                <a href={articleHref}>{featuredArticle.title}</a>
              </h2>
              <p className="feature-excerpt">
                Your future matters. Your family deserves protection. How I
                help, the cover I work with, and how to get in touch.
              </p>
              <a
                className="btn btn-dark"
                href={articleHref}
                aria-label={`Read article: ${featuredArticle.title}`}
              >
                Read article
                <span className="arc">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </article>

          <ul className="art-row">
            <li>
              <ArticleCard
                title={video.eyebrow}
                image={video.image}
                url={video.url}
                external
              />
            </li>
            {relatedReading.map((a) => (
              <li key={a.slug}>
                <ArticleCard title={a.title} image={a.image} url={a.url} external />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
