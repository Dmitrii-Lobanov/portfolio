import type { Metadata } from "next";
import { ExternalAction, PageIntro, SiteFooter } from "@/components/editorial";
import { articles, externalLinks } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Architecture Essays | Dmitrii Lobanov",
  description:
    "Long-form writing about frontend architecture, performance, and product engineering.",
};

export default function ArticlesPage() {
  return (
    <main className="route-main">
      <PageIntro
        eyebrow="Thinking / Long-form field notes"
        title={
          <>
            Systems,
            <br />
            not syntax.
          </>
        }
        description="Essays about the decisions behind scalable frontend platforms, written from production experience and organized by the engineering question they answer."
      />
      <section className="route-section route-section-first">
        <div className="articles-list routed-articles">
          {articles.map((article) => (
            <a
              className="article-row"
              href={article.href}
              target="_blank"
              rel="noreferrer"
              key={article.index}
            >
              <span className="article-index">{article.index}</span>
              <div className="article-meta">
                <span>{article.tag}</span>
                <small>{article.readTime}</small>
              </div>
              <div className="article-copy">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </div>
              <span className="article-arrow">↗</span>
            </a>
          ))}
        </div>
        <ExternalAction href={externalLinks.medium}>
          View all writing on Medium
        </ExternalAction>
      </section>
      <SiteFooter />
    </main>
  );
}
