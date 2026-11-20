export const wikiMastersRussianProject = {
  name: "WikiMasters",
  label: "Платформа совместной работы со знаниями",
  status: "MVP",
  summary:
    "Совместная вики для создания, редактирования и чтения статей с медиа, кэшированием и краткими пересказами от ИИ.",
  role: "Фулстек-разработчик",
  period: "2026",
  scale: "Контент · кэширование · медиа · ИИ",
  outcome:
    "Авторы создают и редактируют статьи, прикрепляют медиа, а читатели находят нужные материалы по тегам и кратким пересказам.",
};

export const wikiMastersRussianOutcome =
  "Авторы входят в систему, создают и редактируют статьи с тегами и медиа. Читатели ищут по заголовкам и пересказам и открывают полные статьи. Кэш списка действует 60 секунд и сбрасывается после записи.";

export const wikiMastersCopy = {
  en: {
    heroLabel:
      "Illustration of an authored article with an attached media asset and a supplemental AI summary",
    knowledge: "Knowledge / authored first",
    articleSource: "Article / source of truth",
    paperTitle: "Ideas worth keeping.",
    media: " Media asset",
    summary: " AI summary",
    paperNote: "Write the knowledge. Keep its context connected.",
    challenge: "01 / Product challenge",
    challengeTitle: "An article connects identity, storage, and AI.",
    challengeIntro:
      "Creating and reading articles is the visible experience. Behind it, identity, stored content, cached results, media, and AI summaries each have a different responsibility.",
    challengeFlow:
      "An authenticated author creates an article with tags and optional media. Readers browse the list, search titles and summaries, and open the full article. Editing regenerates the summary and invalidates the cached list.",
    responsibilities: "One article / clear responsibilities",
    coordinated: "Context coordinated",
    identity: "Identity",
    identityDescription: "Who is using the product",
    persistence: "Persistence",
    persistenceDescription: "Where authored knowledge lives",
    delivery: "Delivery",
    deliveryDescription: "How readers retrieve content",
    enrichment: "Enrichment",
    enrichmentDescription: "What helps readers understand it",
    lifecycle: "02 / Content lifecycle",
    lifecycleTitle: "One source of truth. Several ways to deliver it.",
    lifecycleIntro:
      "The article remains the reference point. Cached reads, media, and summaries support different parts of the reading experience.",
    authored: "Authored content",
    article: "The article",
    articleDescription: "Created, edited, and stored as a durable record.",
    efficient: "Read efficiently",
    efficientDescription:
      "Reuse cached results while keeping the database authoritative.",
    connected: "Keep media connected",
    connectedDescription: "Reference uploaded assets alongside the article.",
    overview: "Offer an overview",
    overviewDescription:
      "Provide a generated summary as an additional reading aid.",
    engineering: "03 / Engineering decisions",
    engineeringTitle: "Three boundaries keep the knowledge dependable.",
    engineeringIntro:
      "Each integration answers a product need and introduces a responsibility that the application must own.",
    pressure: "Pressure",
    decision: "Decision",
    cost: "Cost",
    scope: "04 / Product scope",
    scopeTitle: "A working wiki, with room to grow.",
    scopeIntro:
      "The project is an MVP. Its current foundation covers the article experience and supporting services; deeper collaboration remains a future direction.",
    current: "Current foundation",
    currentTitle: "Author, organize, and read.",
    future: "Future directions / repository ideas",
    futureTitle: "Deeper collaboration.",
    evidence:
      " Scope follows the project README; future ideas are not presented as shipped features.",
    create: "Article creation, editing, and listing",
    auth: "Authentication with Stack Auth",
    typed: "Typed database access and Redis caching",
    mediaSummaries: "Media storage and AI article summaries",
    history: "Revision history and change comparisons",
    live: "Live editing with presence",
    comments: "Comments and discussions",
    drafts: "Draft, review, and publishing workflows",
  },
  ru: {
    heroLabel: "Авторская статья с медиафайлом и кратким пересказом от ИИ",
    knowledge: "Знания / от автора",
    articleSource: "Статья / первоисточник",
    paperTitle: "Идеи, которые стоит сохранить",
    media: " Медиафайл",
    summary: " Пересказ от ИИ",
    paperNote: "Сохраняйте идеи и материалы, которые помогают их понять.",
    challenge: "01 / Задача продукта",
    challengeTitle: "Статья связывает доступ, хранение и ИИ",
    challengeIntro:
      "Пользователь создаёт и читает статьи. За этим стоят отдельные задачи: вход в систему, хранение текста и медиа, кэширование и подготовка кратких пересказов.",
    challengeFlow:
      "Автор входит в систему, создаёт статью, добавляет теги и при желании прикрепляет медиа. Читатели просматривают список, ищут по заголовкам и пересказам, открывают полную статью. После правки пересказ создаётся заново, а кэш списка сбрасывается.",
    responsibilities: "Одна статья / разные задачи",
    coordinated: "Слои связаны",
    identity: "Доступ",
    identityDescription: "Кто работает с платформой",
    persistence: "Хранение",
    persistenceDescription: "Где хранится авторский материал",
    delivery: "Выдача",
    deliveryDescription: "Как читатель получает статью",
    enrichment: "Дополнения",
    enrichmentDescription: "Что помогает понять материал",
    lifecycle: "02 / Жизненный цикл контента",
    lifecycleTitle: "Одна статья, несколько способов читать",
    lifecycleIntro:
      "Статья остаётся первоисточником. Кэш ускоряет чтение, медиа дополняют текст, а пересказ помогает быстро понять тему.",
    authored: "Авторский материал",
    article: "Статья",
    articleDescription: "Статью создают, редактируют и сохраняют в базе.",
    efficient: "Ускорить чтение",
    efficientDescription:
      "Использовать кэш, сохраняя базу данных как источник истины.",
    connected: "Связать медиа со статьёй",
    connectedDescription:
      "Хранить ссылки на загруженные материалы рядом со статьёй.",
    overview: "Дать краткий обзор",
    overviewDescription:
      "Добавить сгенерированный пересказ, чтобы читатель мог быстро сориентироваться.",
    engineering: "03 / Инженерные решения",
    engineeringTitle: "Три границы системы",
    engineeringIntro:
      "Каждая интеграция решает задачу продукта и добавляет ответственность, которую приложение берёт на себя.",
    pressure: "Проблема",
    decision: "Решение",
    cost: "Цена решения",
    scope: "04 / Возможности продукта",
    scopeTitle: "Работающая вики с планом развития",
    scopeIntro:
      "В MVP уже есть работа со статьями и необходимые сервисы. Более тесное сотрудничество авторов остаётся в планах.",
    current: "Что уже работает",
    currentTitle: "Создание, организация и чтение",
    future: "Идеи для развития",
    futureTitle: "Совместная работа",
    evidence: " Текущие возможности и планы описаны в README проекта.",
    create: "Создание и редактирование статей, просмотр списка",
    auth: "Вход через Stack Auth",
    typed: "Типизированный доступ к базе и кэш в Redis",
    mediaSummaries: "Хранение медиа и пересказы от ИИ",
    history: "История версий и сравнение правок",
    live: "Совместное редактирование с отображением участников",
    comments: "Комментарии и обсуждения",
    drafts: "Черновики, проверка и публикация",
  },
} as const;
