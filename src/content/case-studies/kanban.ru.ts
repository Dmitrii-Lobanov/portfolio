import type * as English from "./kanban";

type Translated<T> = T extends string
  ? string
  : { [K in keyof T]: Translated<T[K]> };

export const kanbanRussian = {
  guarantees: [
    {
      number: "01",
      title: "Мгновенный отклик",
      copy: "Карточка перемещается до ответа сервера.",
    },
    {
      number: "02",
      title: "Изоляция изменения",
      copy: "Ожидание ответа отмечается у конкретной задачи. Остальные задачи остаются доступны.",
    },
    {
      number: "03",
      title: "Проверка версии",
      copy: "API отклоняет запись, если версия задачи у клиента устарела.",
    },
    {
      number: "04",
      title: "Подтверждение или откат",
      copy: "Сервер подтверждает изменение, а при сбое клиент восстанавливает прежнее состояние задачи.",
    },
  ],
  decisions: [
    {
      signal: "Взаимодействие",
      title: "Оптимистичное обновление с откатом",
      copy: "Перед перемещением клиент сохраняет данные, необходимые для отката. Ошибка видна рядом с самой задачей.",
      result: "Мгновенный отклик · восстановление при сбое",
    },
    {
      signal: "Конкурентные изменения",
      title: "Устаревшие записи отклоняются",
      copy: "Версии задач позволяют явно обнаружить конфликт. Старая сессия не может незаметно перезаписать более свежие данные.",
      result: "Новые изменения защищены от перезаписи",
    },
    {
      signal: "Границы слоёв",
      title: "Хранение данных скрыто за API",
      copy: "Записи и перечисления из базы преобразуются в стабильные контракты API. Названия колонок нужны интерфейсу, а поведение определяется постоянными ключами.",
      result: "Интерфейс и хранилище развиваются независимо",
    },
    {
      signal: "Доступ",
      title: "Права проверяются при работе с данными",
      copy: "Clerk определяет пользователя сессии, а сервис проверяет его участие в рабочем пространстве перед чтением или изменением данных.",
      result: "Доступ к доскам ограничен правами пользователя",
    },
  ],
  delivery: [
    ["Клиент", "React 19 · TypeScript · TanStack Query"],
    ["API", "NestJS · Fastify · общие контракты"],
    ["Данные", "PostgreSQL · миграции Prisma"],
    ["Проверки", "Модульные, компонентные тесты, тесты API и базы"],
    ["Релиз", "GitHub Actions · Vercel · Render"],
  ],
} satisfies Translated<typeof English>;

export const kanbanRussianProject = {
  name: "Reliable Kanban",
  label: "Независимый продукт · Надёжность асинхронных операций",
  status: "Доступен",
  summary:
    "Канбан-система с мгновенным откликом при перетаскивании карточек. Состояние задач защищено при сбоях запросов, работе в нескольких сессиях и устаревших данных у клиента.",
  role: "Продуктовый инженер",
  period: "2026",
  scale: "Веб-приложение · API · база данных",
  outcome:
    "Карточки перемещаются сразу. При сбое изменения откатываются, а записи на основе устаревших данных отклоняются.",
};

export const kanbanCopy = {
  en: {
    tension: "01 / Product tension",
    title: "Moving a card is easy.",
    subtitle: " Keeping the move trustworthy is the work.",
    intro:
      "A board can change instantly in the browser while the request is still travelling. During that gap, the API can fail, another session can edit the same task, or access can change. The product needed to feel immediate without presenting hopeful UI as durable truth.",
    lifecycle: "Task update lifecycle",
    loop: "Task update / reliability loop",
    observing: " System observing",
    intent: "Client intent",
    durable: "Durable task state",
    decisions: "02 / Reliability decisions",
    decisionTitle: "Four boundaries make the board feel simple.",
    decisionDescription:
      "Reliability is expressed through product behavior: what updates immediately, what waits for authority, and what happens when the two disagree.",
    production: "03 / Production shape",
    productionTitle:
      "A deployed independent product, with inspectable recovery.",
    repo: "The repository keeps web, API, contracts, persistence, tests, and delivery visible as parts of the same product. That makes the reliability claims inspectable rather than decorative.",
    scenario:
      "Consider two sessions editing the same task. The first move is accepted; the second submits an older version. The API rejects the stale write, the UI explains the conflict, and newer state is protected. A failed request restores the affected task’s snapshot while other tasks remain available.",
    tests:
      "Unit, component, API, and database tests cover the mutation, permission, and persistence boundaries. The live app and source below make the implementation available for review.",
    layers: "Production system layers from web to delivery",
    commit: "Commit",
    verified: "Verified",
    deployed: "Deployed",
  },
  ru: {
    tension: "01 / Задача продукта",
    title: "Карточка перемещается сразу.",
    subtitle: " Важно корректно сохранить изменение.",
    intro:
      "Доска может обновиться сразу, пока запрос ещё в пути. За это время API может вернуть ошибку, другая сессия — изменить задачу, а права доступа — поменяться. Интерфейс должен быстро реагировать и показывать, когда изменение ещё не подтверждено.",
    lifecycle: "Жизненный цикл обновления задачи",
    loop: "Путь обновления задачи",
    observing: " Ожидание ответа",
    intent: "Действие",
    durable: "Запись на сервере",
    decisions: "02 / Решения для надёжности",
    decisionTitle: "Четыре решения для надёжной работы доски",
    decisionDescription:
      "Одни изменения видны сразу, другие ждут ответа сервера. Если ответ расходится с тем, что показал интерфейс, у доски есть понятный сценарий восстановления.",
    production: "03 / Как устроен продукт",
    productionTitle: "Как проверить откат в приложении",
    repo: "В одном репозитории собраны клиент, API, контракты, хранилище, тесты и развёртывание. По коду можно проследить, как работают проверки и восстановление.",
    scenario:
      "Представим, что одну задачу изменяют в двух сессиях. Первое перемещение сохраняется, а второе приходит с устаревшей версией. API отклоняет запись, интерфейс объясняет конфликт, и новое состояние остаётся в базе. При сбое запроса клиент восстанавливает прежнее состояние этой задачи. Остальные задачи остаются доступны.",
    tests:
      "Модульные и компонентные тесты, а также тесты API и базы проверяют изменения, права доступа и сохранение данных. Ниже можно открыть приложение и посмотреть исходный код.",
    layers: "Слои системы от клиента до развёртывания",
    commit: "Коммит",
    verified: "Проверка",
    deployed: "Релиз",
  },
} as const;
