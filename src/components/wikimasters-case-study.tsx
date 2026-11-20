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

import { wikiMastersCopy } from "@/content/case-studies/wikimasters.ru";

const decisions = [
  {
    icon: Database,
    title: "Fast reads, with an authoritative record.",
    pressure: "Readers can request the same content repeatedly.",
    decision:
      "Cache the article list in Redis for 60 seconds. Creation and edits delete that list key; article detail reads query Postgres directly.",
    cost: "The TTL bounds list freshness; invalidation adds a dependency on Redis.",
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
    decision:
      "Generate a summary from the title and content during creation and editing, then store it alongside the article for list and search previews.",
    cost: "Generation adds a service dependency to writes; readers still need the authored article as their reference.",
    label: "Authored content / derived summary",
  },
];

const russianDecisions = [
  {
    title: "Быстрое чтение с опорой на базу",
    pressure: "Читатели могут многократно запрашивать один и тот же список.",
    decision:
      "Кэшировать список статей в Redis на 60 секунд. При создании или правке удалять ключ списка. Полную статью читать напрямую из Postgres.",
    cost: "TTL ограничивает срок жизни списка в кэше, а его сброс при записи добавляет зависимость от Redis.",
    label: "Запись в базе / копия в кэше",
  },
  {
    title: "Текст и медиа хранятся отдельно",
    pressure:
      "У записей о статьях и загруженных файлов разные требования к хранению.",
    decision:
      "Хранить метаданные в реляционной базе, а медиа — в объектном хранилище.",
    cost: "Нужно согласовать ссылки и жизненные циклы в двух системах хранения.",
    label: "Запись о статье / медиафайл",
  },
  {
    title: "Пересказ дополняет оригинал",
    pressure:
      "Краткий обзор помогает сориентироваться в материале, но сгенерированный текст остаётся дополнением.",
    decision:
      "При создании или правке генерировать пересказ из заголовка и текста. Хранить его рядом со статьёй для списка и результатов поиска.",
    cost: "Запись зависит от сервиса генерации, а источником для читателя остаётся авторская статья.",
    label: "Авторский текст / пересказ",
  },
];

export function WikiMastersArticle({
  russian = false,
}: {
  russian?: boolean;
} = {}) {
  const copy = wikiMastersCopy[russian ? "ru" : "en"];
  return (
    <div
      className="wm-flow-panel wm-article"
      role="img"
      aria-label={copy.heroLabel}
    >
      <div className="wm-instrument-label">
        <span>{copy.knowledge}</span>
        <BookOpen size={18} />
      </div>
      <div className="wm-paper">
        <span className="wm-kicker">{copy.articleSource}</span>
        <strong>{copy.paperTitle}</strong>
        <div className="wm-paper-lines" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="wm-attachments">
          <span>
            <Image size={20} /> {copy.media}
          </span>
          <span>
            <Sparkles size={20} /> {copy.summary}
          </span>
        </div>
      </div>
      <p>{copy.paperNote}</p>
    </div>
  );
}

export function WikiMastersCaseStudy({
  russian = false,
}: {
  russian?: boolean;
} = {}) {
  const copy = wikiMastersCopy[russian ? "ru" : "en"];
  return (
    <>
      <section className="wm-section wm-split">
        <div>
          <p className="eyebrow">{copy.challenge}</p>
          <h2>{copy.challengeTitle}</h2>
          <p>{copy.challengeIntro}</p>
          <p>{copy.challengeFlow}</p>
        </div>
        <div className="wm-flow-panel wm-responsibilities">
          <header>
            <span className="wm-kicker">{copy.responsibilities}</span>
            <span className="wm-responsibility-status">{copy.coordinated}</span>
          </header>
          <i className="wm-responsibility-packet" aria-hidden="true" />
          {[
            [UserRound, copy.identity, copy.identityDescription],
            [Database, copy.persistence, copy.persistenceDescription],
            [Send, copy.delivery, copy.deliveryDescription],
            [Sparkles, copy.enrichment, copy.enrichmentDescription],
          ].map(([Icon, name, text]) => {
            const Glyph = Icon as typeof Database;
            return (
              <div key={String(name)}>
                <i aria-hidden="true">
                  <Glyph size={18} />
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
            <p className="eyebrow">{copy.lifecycle}</p>
            <h2>{copy.lifecycleTitle}</h2>
          </div>
          <p>{copy.lifecycleIntro}</p>
        </header>
        <div className="wm-flow-panel wm-lifecycle">
          <div className="wm-source">
            <BookOpen size={28} />
            <span className="wm-kicker">{copy.authored}</span>
            <h3>{copy.article}</h3>
            <p>{copy.articleDescription}</p>
          </div>
          <div className="wm-lifecycle-routes" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="wm-branches">
            {[
              [Database, copy.efficient, copy.efficientDescription],
              [Image, copy.connected, copy.connectedDescription],
              [Sparkles, copy.overview, copy.overviewDescription],
            ].map(([Icon, title, text]) => {
              const Glyph = Icon as typeof Database;
              return (
                <div key={String(title)}>
                  <Glyph size={23} />
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
            <p className="eyebrow">{copy.engineering}</p>
            <h2>{copy.engineeringTitle}</h2>
          </div>
          <p>{copy.engineeringIntro}</p>
        </header>
        <div className="wm-decision-grid">
          {decisions.map((item, index) => {
            const { icon: Icon } = item;
            const { title, pressure, decision, cost, label } = russian
              ? russianDecisions[index]
              : item;
            return (
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
                    <dt>{copy.pressure}</dt>
                    <dd>{pressure}</dd>
                  </div>
                  <div>
                    <dt>{copy.decision}</dt>
                    <dd>{decision}</dd>
                  </div>
                  <div>
                    <dt>{copy.cost}</dt>
                    <dd>{cost}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      </section>
      <section className="wm-section">
        <header className="wm-heading">
          <div>
            <p className="eyebrow">{copy.scope}</p>
            <h2>{copy.scopeTitle}</h2>
          </div>
          <p>{copy.scopeIntro}</p>
        </header>
        <div className="wm-scope">
          <article>
            <span className="wm-kicker">{copy.current}</span>
            <h3>{copy.currentTitle}</h3>
            <ul>
              {[copy.create, copy.auth, copy.typed, copy.mediaSummaries].map(
                (x) => (
                  <li key={x}>
                    <Files size={17} />
                    {x}
                  </li>
                ),
              )}
            </ul>
          </article>
          <article>
            <span className="wm-kicker">{copy.future}</span>
            <h3>{copy.futureTitle}</h3>
            <ul>
              {[copy.history, copy.live, copy.comments, copy.drafts].map(
                (x) => (
                  <li key={x}>
                    <Layers size={17} />
                    {x}
                  </li>
                ),
              )}
            </ul>
          </article>
        </div>
        <p className="wm-evidence">
          <Search size={16} /> {copy.evidence}
        </p>
      </section>
    </>
  );
}
