import {
  BookOpen,
  Database,
  Files,
  Image,
  Layers,
  Search,
  Send,
  Sparkles,
  UserRound,
} from "lucide-react";

const decisions = [
  {
    icon: Database,
    title: "Fast reads, with an authoritative record.",
    pressure: "Readers can request the same content repeatedly.",
    decision:
      "Use typed Postgres persistence with a Redis cache for reusable results.",
    cost: "Cached results need an explicit invalidation policy.",
    label: "Stored record / cached copy",
  },
  {
    icon: Image,
    title: "Store the article and its media deliberately.",
    pressure:
      "Article records and uploaded files have different storage needs.",
    decision:
      "Keep relational metadata in the database and media in object storage.",
    cost: "Two storage systems need coordinated references and lifecycle handling.",
    label: "Article record / media asset",
  },
  {
    icon: Sparkles,
    title: "Keep summaries downstream of the source.",
    pressure:
      "A short overview helps readers orient themselves, but generated text is supplemental.",
    decision: "Treat the AI summary as a derivative of the authored article.",
    cost: "Generated summaries need to stay relevant when the source changes.",
    label: "Authored content / derived summary",
  },
];

export function WikiMastersArticle() {
  return (
    <div
      className="wm-article"
      role="img"
      aria-label="Illustration of an authored article with an attached media asset and a supplemental AI summary"
    >
      <div className="wm-instrument-label">
        <span>Knowledge / authored first</span>
        <BookOpen size={18} />
      </div>
      <div className="wm-paper">
        <span className="wm-kicker">Article / source of truth</span>
        <strong>Ideas worth keeping.</strong>
        <div className="wm-paper-lines" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="wm-attachments">
          <span>
            <Image size={20} /> Media asset
          </span>
          <span>
            <Sparkles size={20} /> AI summary
          </span>
        </div>
      </div>
      <p>Write the knowledge. Keep its context connected.</p>
    </div>
  );
}

export function WikiMastersCaseStudy() {
  return (
    <>
      <section className="wm-section wm-split">
        <div>
          <p className="eyebrow">01 / Product challenge</p>
          <h2>A page is simple. Everything around it needs coordination.</h2>
          <p>
            Creating and reading articles is the visible experience. Behind it,
            identity, stored content, cached results, media, and AI summaries
            each have a different responsibility.
          </p>
          <p>
            WikiMasters explores how those pieces can support one understandable
            knowledge product.
          </p>
        </div>
        <div className="wm-responsibilities">
          <header>
            <span className="wm-kicker">
              One article / clear responsibilities
            </span>
            <span className="wm-responsibility-status">
              Context coordinated
            </span>
          </header>
          <i className="wm-responsibility-packet" aria-hidden="true" />
          {[
            [UserRound, "Identity", "Who is using the product"],
            [Database, "Persistence", "Where authored knowledge lives"],
            [Send, "Delivery", "How readers retrieve content"],
            [Sparkles, "Enrichment", "What helps readers understand it"],
          ].map(([Icon, name, text]) => {
            const Symbol = Icon as typeof Database;
            return (
              <div key={String(name)}>
                <i aria-hidden="true">
                  <Symbol size={18} />
                </i>
                <span>{String(name)}</span>
                <p>{String(text)}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="wm-section">
        <header className="wm-heading">
          <div>
            <p className="eyebrow">02 / Content lifecycle</p>
            <h2>One source of truth. Several ways to deliver it.</h2>
          </div>
          <p>
            The article remains the reference point. Cached reads, media, and
            summaries support different parts of the reading experience.
          </p>
        </header>
        <div className="wm-lifecycle">
          <div className="wm-source">
            <BookOpen size={28} />
            <span className="wm-kicker">Authored content</span>
            <h3>The article</h3>
            <p>Created, edited, and stored as a durable record.</p>
          </div>
          <div className="wm-lifecycle-routes" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="wm-branches">
            {[
              [
                Database,
                "Read efficiently",
                "Reuse cached results while keeping the database authoritative.",
              ],
              [
                Image,
                "Keep media connected",
                "Reference uploaded assets alongside the article.",
              ],
              [
                Sparkles,
                "Offer an overview",
                "Provide a generated summary as an additional reading aid.",
              ],
            ].map(([Icon, title, text]) => {
              const Symbol = Icon as typeof Database;
              return (
                <div key={String(title)}>
                  <Symbol size={23} />
                  <div>
                    <h3>{String(title)}</h3>
                    <p>{String(text)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="wm-section">
        <header className="wm-heading">
          <div>
            <p className="eyebrow">03 / Engineering decisions</p>
            <h2>Three boundaries keep the knowledge dependable.</h2>
          </div>
          <p>
            Each integration answers a product need and introduces a
            responsibility that the application must own.
          </p>
        </header>
        <div className="wm-decision-grid">
          {decisions.map(
            ({ icon: Icon, title, pressure, decision, cost, label }, index) => (
              <article key={title}>
                <div
                  className={`wm-mini wm-mini-${index + 1}`}
                  aria-hidden="true"
                >
                  <span className="wm-mini-source">
                    <Icon size={32} />
                  </span>
                  <span className="wm-mini-route">
                    <i />
                  </span>
                  <div className="wm-mini-pages">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <span className="wm-kicker">
                  0{index + 1} / {label}
                </span>
                <h3>{title}</h3>
                <dl>
                  <div>
                    <dt>Pressure</dt>
                    <dd>{pressure}</dd>
                  </div>
                  <div>
                    <dt>Decision</dt>
                    <dd>{decision}</dd>
                  </div>
                  <div>
                    <dt>Cost</dt>
                    <dd>{cost}</dd>
                  </div>
                </dl>
              </article>
            ),
          )}
        </div>
      </section>
      <section className="wm-section">
        <header className="wm-heading">
          <div>
            <p className="eyebrow">04 / Product scope</p>
            <h2>A working wiki, with room to grow.</h2>
          </div>
          <p>
            The project is an MVP. Its current foundation covers the article
            experience and supporting services; deeper collaboration remains a
            future direction.
          </p>
        </header>
        <div className="wm-scope">
          <article>
            <span className="wm-kicker">Current foundation</span>
            <h3>Author, organize, and read.</h3>
            <ul>
              {[
                "Article creation, editing, and listing",
                "Authentication with Stack Auth",
                "Typed database access and Redis caching",
                "Media storage and AI article summaries",
              ].map((x) => (
                <li key={x}>
                  <Files size={17} />
                  {x}
                </li>
              ))}
            </ul>
          </article>
          <article>
            <span className="wm-kicker">
              Future directions / repository ideas
            </span>
            <h3>Deeper collaboration.</h3>
            <ul>
              {[
                "Revision history and change comparisons",
                "Live editing with presence",
                "Comments and discussions",
                "Draft, review, and publishing workflows",
              ].map((x) => (
                <li key={x}>
                  <Layers size={17} />
                  {x}
                </li>
              ))}
            </ul>
          </article>
        </div>
        <p className="wm-evidence">
          <Search size={16} /> Scope follows the project README; future ideas
          are not presented as shipped features.
        </p>
      </section>
    </>
  );
}
