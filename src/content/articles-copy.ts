export const essaysRussian = {
  "04": {
    tag: "Производительность",
    readTime: "Разбор",
    title: "Оптимизация крупного приложения на React и Redux",
    description:
      "Как я находил узкие места в рендеринге, уточнял границы состояния, удалял лишние зависимости и оптимизировал сборку в продакшене.",
  },
  "01": {
    tag: "Архитектура системы",
    readTime: "30 мин",
    title: "Архитектура фронтенда крупной CPA-платформы",
    description:
      "Границы доменов, работа от имени партнёра, серверное состояние, события в реальном времени и решения для развития платформы на React.",
  },
  "02": {
    tag: "Продуктовая разработка",
    readTime: "15 мин",
    title: "Рабочие сценарии сложного финтех-интерфейса",
    description:
      "Как офферы, аналитика, онбординг, права доступа и документы стали частью единого рабочего процесса.",
  },
  "03": {
    tag: "Архитектура",
    readTime: "8 мин",
    title: "Почему требования определяют архитектуру",
    description:
      "Как ограничения продукта и измеримые требования помогают выбрать архитектуру.",
  },
} as const;

export const articlesCopy = {
  en: {
    eyebrow: "Thinking / Engineering field notes",
    titleFirst: "The decisions",
    titleLast: "behind the system.",
    intro:
      "Field notes on improving a production frontend: diagnose performance, follow the product workflow, and examine the architecture decisions behind the result.",
    start: "Start with performance",
    medium: "All writing on Medium",
    instrument:
      "A product constraint becomes an explicit ownership decision, with its trade-off recorded alongside it.",
    instrumentTitle: "Field note / trace the reasoning",
    observe: "Pressure → decision",
    observeTitle: "01 / Observe the product",
    manager: "One manager.",
    partners: "Several partner contexts.",
    tabA: "Tab A · Partner A",
    tabB: "Tab B · Partner B",
    ownership: "02 / Make ownership explicit",
    identityFirst: "Identity belongs",
    identityLast: "to the request context.",
    decision: "Decision",
    decisionText: "Keep each tab’s partner context separate.",
    tradeoff: "Trade-off",
    tradeoffText: "Resolve identity deliberately at the boundary.",
    instrumentFoot: "A constraint. A mechanism. A consequence.",
    selected: "selected essays",
    orientation:
      "Four ways into the work: performance, requirements, product workflows, and frontend system design.",
    published: "Published on Medium",
    choose: "01 / Choose the question",
    readingTitle: "Read for the reasoning.",
    readingIntro:
      "Each essay takes a different view of the work. Choose the question closest to your own product, from a slow interaction to a difficult architecture decision.",
    slow: "Why is the frontend slow?",
    slowText:
      "You need to diagnose rendering and loading bottlenecks before choosing an optimization.",
    measure: "Follow the measurements",
    shape: "What should shape the architecture?",
    shapeText:
      "You need to assess whether a proposed architecture answers an actual product requirement.",
    question: "Start with the question",
    workflow: "What makes the workflow complex?",
    workflowText:
      "A feature crosses roles, permissions, and several connected product surfaces.",
    follow: "Follow the product",
    responsibility: "Where do the responsibilities belong?",
    responsibilityText:
      "You need to reason about identity and state ownership across a frontend platform.",
    inspect: "Inspect the system",
    useful: "Useful when",
    read: "Read the essay",
    context: "02 / Keep the context connected",
    contextFirst: "From field notes",
    contextLast: "to working knowledge.",
    contextIntro:
      "See the production system behind the essays, or use the Wiki to explore the frontend concepts underneath the decisions.",
    nav: "Related engineering work",
    tinkoff: "Explore the Tinkoff case study",
    wiki: "Explore the Engineering Wiki",
    closing: "Follow the constraint.",
    closingStrong: "Understand the choice.",
    browse: "Browse all writing",
  },
  ru: {
    eyebrow: "Заметки / Инженерная практика",
    titleFirst: "Решения,",
    titleLast: "на которых держится система",
    intro:
      "Заметки о развитии фронтенда в продакшене: как диагностировать проблемы со скоростью, проследить рабочий сценарий и разобраться в архитектурных решениях.",
    start: "Начать с производительности",
    medium: "Все статьи на Medium",
    instrument:
      "Как ограничение продукта определяет границы ответственности и какие компромиссы с этим связаны.",
    instrumentTitle: "Заметка / логика решения",
    observe: "Проблема → решение",
    observeTitle: "01 / Изучить сценарий",
    manager: "Один менеджер.",
    partners: "Несколько партнёров.",
    tabA: "Вкладка A · Партнёр A",
    tabB: "Вкладка B · Партнёр B",
    ownership: "02 / Определить границы",
    identityFirst: "Контекст партнёра",
    identityLast: "передаётся с запросом.",
    decision: "Решение",
    decisionText: "Хранить контекст партнёра отдельно для каждой вкладки.",
    tradeoff: "Компромисс",
    tradeoffText: "Явно определять, от чьего имени выполняется запрос.",
    instrumentFoot: "Ограничение, механизм и результат.",
    selected: "избранные статьи",
    orientation:
      "Четыре темы: производительность, требования, рабочие сценарии и архитектура фронтенда.",
    published: "Опубликовано на Medium",
    choose: "01 / Выберите вопрос",
    readingTitle: "Как принимались решения",
    readingIntro:
      "Выберите вопрос, близкий вашему продукту: от медленного отклика интерфейса до сложного архитектурного решения.",
    slow: "Почему фронтенд работает медленно?",
    slowText:
      "Нужно найти узкие места в рендеринге и загрузке, прежде чем выбирать способ оптимизации.",
    measure: "Начать с измерений",
    shape: "Что должно определять архитектуру?",
    shapeText:
      "Нужно понять, отвечает ли предложенная архитектура реальному требованию продукта.",
    question: "Начать с вопроса",
    workflow: "Что усложняет рабочий сценарий?",
    workflowText:
      "Функция затрагивает разные роли, права доступа и несколько связанных интерфейсов.",
    follow: "Проследить сценарий",
    responsibility: "Как распределить ответственность?",
    responsibilityText:
      "Нужно определить, от чьего имени выполняется запрос и кто владеет состоянием.",
    inspect: "Разобрать систему",
    useful: "Когда пригодится",
    read: "Читать статью на английском",
    context: "02 / Связанные материалы",
    contextFirst: "От заметок",
    contextLast: "к практике",
    contextIntro:
      "Посмотрите кейс системы, о которой идут статьи, или разберите в вики понятия, на которых основаны решения.",
    nav: "Связанные материалы",
    tinkoff: "Читать кейс Tinkoff",
    wiki: "Открыть базу знаний",
    closing: "Проследите ход решения.",
    closingStrong: "Разберитесь, почему его выбрали.",
    browse: "Все статьи",
  },
} as const;
