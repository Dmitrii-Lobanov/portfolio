export type HomeLocale = "en" | "ru";

export const heroCopy = {
  en: {
    name: ["Dmitrii", "Lobanov"],
    role: "Senior frontend engineer",
    intro:
      "I build React and TypeScript products for complex workflows, with measured improvements to performance, reliability, and delivery.",
    work: "Explore the work",
    contact: "Let's talk",
    portraitNote: ["The person", "behind the system"],
  },
  ru: {
    name: ["Дмитрий", "Лобанов"],
    role: "Senior-фронтенд-инженер",
    intro:
      "Разрабатываю продукты на React и TypeScript для сложных рабочих процессов. Измеряю, как изменения влияют на скорость интерфейса, надёжность и выпуск новых функций.",
    work: "Смотреть проекты",
    contact: "Связаться",
    portraitNote: ["Человек", "за системой"],
  },
} as const;

export const impactHeading = {
  en: { title: "Measured impact", subtitle: "Production outcomes / selected" },
  ru: { title: "Результаты в цифрах", subtitle: "Показатели в продакшене" },
} as const;

export const impactProof = [
  {
    en: {
      category: "Experience",
      value: "6+ yrs",
      label: "React and TypeScript product engineering",
    },
    ru: {
      category: "Опыт",
      value: "6+ лет",
      label: "Разработка продуктов на React и TypeScript",
    },
    visual: "experience",
  },
  {
    en: {
      category: "Platform scale",
      value: "300k+",
      label: "Users served by the Tinkoff fintech platform",
    },
    ru: {
      category: "Масштаб платформы",
      value: "300 000+",
      label: "Пользователей финтех-платформы Tinkoff",
    },
    visual: "scale",
  },
  {
    en: {
      category: "Loading · p75 LCP",
      value: "6s → 2s",
      label: "Production loading time across critical pages",
    },
    ru: {
      category: "Загрузка · p75 LCP",
      value: "6 → 2 с",
      label: "Время загрузки ключевых страниц в продакшене",
    },
    visual: "performance",
  },
  {
    en: {
      category: "Interaction · p75 INP",
      value: "−70%",
      label: "Production interaction latency: 500ms → 150ms",
    },
    ru: {
      category: "Отзывчивость · p75 INP",
      value: "−70%",
      label: "Задержка отклика в продакшене: с 500 до 150 мс",
    },
    visual: "performance",
  },
] as const;

export type ImpactVisualKind = (typeof impactProof)[number]["visual"];

export const homeSectionCopy = {
  cpa: {
    en: {
      kicker: "01 / Tinkoff · Fintech platform",
      title: "Engineering for 300,000+ users",
      description:
        "I built and evolved partner and internal operations frontends, connecting onboarding, analytics, documents, permissions, and real-time workflows. Production p75 LCP improved from 6s to 2s.",
      action: "Explore the case study",
    },
    ru: {
      kicker: "01 / Tinkoff · Финтех-платформа",
      title: "Платформа для 300 000+ пользователей",
      description:
        "Я разрабатывал интерфейсы для партнёров и внутренних команд. Они объединяли онбординг, аналитику, документы, права доступа и процессы в реальном времени. В продакшене p75 LCP снизился с 6 до 2 с.",
      action: "Читать кейс",
    },
  },
  kanban: {
    en: {
      kicker: "02 / Independent product · Reliable Kanban",
      title: "Immediate feedback. Recoverable moves.",
      description:
        "Drag-and-drop updates immediately. Failed moves roll back, stale writes are rejected, and unrelated tasks stay available while a move is pending.",
      action: "Open the project",
    },
    ru: {
      kicker: "02 / Независимый продукт · Reliable Kanban",
      title: "Мгновенный отклик и откат при сбоях",
      description:
        "Карточка перемещается сразу. Если сохранить изменение не удаётся, она возвращается на прежнее место. Сервер отклоняет записи с устаревшей версией, а с остальными задачами можно работать, пока перемещение сохраняется.",
      action: "Открыть проект",
    },
  },
  thinking: {
    en: {
      kicker: "04 / Thinking in public",
      title: "The reasoning is part of the work",
      wikiType: "Structured knowledge",
      articlesType: "Long-form field notes",
      articlesTitle: "Engineering field notes",
      investigationsType: "Serialized investigations",
    },
    ru: {
      kicker: "04 / Инженерные заметки",
      title: "Как я принимаю инженерные решения",
      wikiType: "База знаний",
      articlesType: "Подробные разборы",
      articlesTitle: "Заметки из практики",
      investigationsType: "Серия расследований",
    },
  },
  contact: {
    en: {
      kicker: "05 / Start a conversation",
      title: "Building a product whose complexity is starting to show?",
      description:
        "I’m open to remote Senior Frontend Engineer roles through international B2B contracts. English C1.",
      channel: "Conversation channel",
      availability: "Available",
      topicsLabel: "Signal",
      topics: "Product · architecture · frontend",
      nextLabel: "Next step",
      nextStep: "A focused first conversation",
      action: "Start the conversation",
    },
    ru: {
      kicker: "05 / Контакты",
      title: "Строите продукт, которым становится сложнее управлять?",
      description:
        "Рассматриваю удалённые позиции Senior Frontend Engineer по международным B2B-контрактам. Английский — C1.",
      channel: "Канал связи",
      availability: "Открыт к предложениям",
      topicsLabel: "Темы",
      topics: "Продукт · архитектура · фронтенд",
      nextLabel: "Следующий шаг",
      nextStep: "Короткий разговор о задаче",
      action: "Связаться",
    },
  },
  incident: {
    en: {
      title: "When the system breaks character",
      description:
        "Production incidents become visual stories: symptoms escape the interface, travel through the system, and reveal the real cause.",
      action: "Follow the investigations",
      topology: "Live event topology",
      status: "System observing",
      source: "Offer UI",
      emitted: "event emitted",
      gateway: "Event gateway",
      delivery: "delivery check",
      state: "Server state",
      accepted: "accepted once",
      guard: "Idempotency guard",
      duplicate: "duplicate absorbed",
      resolution: "Resolved · one state transition",
    },
    ru: {
      title: "Когда система ведёт себя неожиданно",
      description:
        "В визуальных разборах инцидентов я прослеживаю путь от симптома в интерфейсе до причины сбоя в системе.",
      action: "Читать расследования",
      topology: "Маршрут события",
      status: "Наблюдение",
      source: "Интерфейс оффера",
      emitted: "событие отправлено",
      gateway: "Шлюз событий",
      delivery: "проверка доставки",
      state: "Состояние сервера",
      accepted: "принято один раз",
      guard: "Защита от дублей",
      duplicate: "дубль отброшен",
      resolution: "Решено · одно изменение состояния",
    },
  },
  duality: {
    en: {
      productRole: "Product engineer",
      productTitle: "What people use",
      workflows: "Complex workflows",
      interactions: "Interaction systems",
      performance: "Performance",
      accessibility: "Accessible interfaces",
      diagram:
        "Product interactions flowing through a reliable architecture core",
      signals: "Product signals",
      core: "System core",
      reliability: "Reliable by design",
      architectureRole: "Frontend architecture",
      architectureTitle: "What keeps it reliable",
      boundaries: "Domain boundaries",
      state: "Server state",
      events: "Real-time events",
      architecture: "Long-lived architecture",
    },
    ru: {
      productRole: "Продуктовый инженер",
      productTitle: "С чем работают пользователи",
      workflows: "Сложные сценарии",
      interactions: "Механики взаимодействия",
      performance: "Производительность",
      accessibility: "Доступные интерфейсы",
      diagram: "Как действия пользователя проходят через ядро системы",
      signals: "События продукта",
      core: "Ядро системы",
      reliability: "Надёжность в архитектуре",
      architectureRole: "Архитектура фронтенда",
      architectureTitle: "Что обеспечивает надёжность",
      boundaries: "Границы доменов",
      state: "Серверное состояние",
      events: "События в реальном времени",
      architecture: "Архитектура с расчётом на развитие",
    },
  },
} as const;
