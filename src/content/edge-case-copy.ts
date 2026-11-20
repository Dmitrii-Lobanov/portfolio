export const edgePath = "/thinking/edge-case-inc";

export const indexCopy = {
  en: {
    eyebrow: "Thinking / Edge Case Inc.",
    first: "Small incident.",
    last: "Whole-system story.",
    intro:
      "A fictional software company. Real engineering questions. Follow an unexpected behavior through the runtime, the architecture, and the people who depend on it.",
    open: "Open the first case",
    meet: "Meet the investigators",
    diagram:
      "One server event reaches two active listeners after reconnection, producing duplicate effects. The investigation asks who owns the subscription lifecycle.",
    trace: "Case 001 / Runtime trace",
    observe: "Observe → explain",
    input: "01 / The input",
    event: "One event from the server.",
    reconnect: "Connection re-established",
    listenerA: "Listener A · still active",
    listenerB: "Listener B · registered",
    symptom: "02 / The symptom",
    effects: "Two effects in the interface.",
    question: "The transport reconnected. Did the previous subscription leave?",
    foot: "Trace the behavior. Find the ownership boundary.",
    series: "About the series",
    perspectives:
      "Each case follows one mechanism through four perspectives: production behavior, architecture, product workflows, and business value.",
    fictional: "Fictional team · real trade-offs",
    directory: "01 / Case directory",
    directoryTitle: "Start with the symptom.",
    directoryIntro:
      "The opening investigation begins with a duplicate WebSocket effect. Follow the mechanism before deciding where the fix belongs.",
    follow: "Follow the investigation",
    what: "What you’ll investigate",
    linkedin: "Read the series on LinkedIn",
    team: "02 / The investigators",
    teamFirst: "Different questions.",
    teamLast: "One shared trace.",
    teamIntro:
      "The characters make invisible behavior easier to discuss. Four follow the opening case; Owl joins when AI or automation changes the question.",
    context: "03 / Keep following the reasoning",
    contextFirst: "From an incident",
    contextLast: "to a working principle.",
    contextIntro:
      "Explore the architectural decisions behind product systems, or use the Engineering Wiki to study the underlying concepts.",
    related: "Related thinking",
    articles: "Read the architecture essays",
    wiki: "Explore the Engineering Wiki",
  },
  ru: {
    eyebrow: "Заметки / Edge Case Inc.",
    first: "Один инцидент.",
    last: "История всей системы.",
    intro:
      "Компания вымышленная, инженерные вопросы реальные. Проследите, как неожиданное поведение связано с кодом, архитектурой и работой пользователей.",
    open: "Открыть первое дело",
    meet: "Познакомиться с командой",
    diagram:
      "После переподключения одно событие сервера получают два активных обработчика. Интерфейс реагирует дважды. Вопрос расследования: кто отвечает за жизненный цикл подписки?",
    trace: "Дело 001 / Трассировка",
    observe: "Наблюдать → объяснить",
    input: "01 / Вход",
    event: "Одно событие от сервера.",
    reconnect: "Соединение восстановлено",
    listenerA: "Обработчик A · ещё активен",
    listenerB: "Обработчик B · добавлен",
    symptom: "02 / Симптом",
    effects: "Две реакции в интерфейсе.",
    question: "Соединение восстановилось. А прежнюю подписку сняли?",
    foot: "Проследите цепочку и выясните, кто отвечает за подписку.",
    series: "О серии",
    perspectives:
      "Каждое дело рассматривает один механизм с четырёх сторон: поведение в продакшене, архитектура, рабочие сценарии и влияние на бизнес.",
    fictional: "Вымышленная команда · реальные компромиссы",
    directory: "01 / Список дел",
    directoryTitle: "Начните с симптома",
    directoryIntro:
      "Первое расследование начинается с повторной реакции на событие WebSocket. Проследите, где возникает дубль, прежде чем выбирать место исправления.",
    follow: "Читать расследование",
    what: "Что предстоит выяснить",
    linkedin: "Читать серию на английском в LinkedIn",
    team: "02 / Команда",
    teamFirst: "Разные вопросы.",
    teamLast: "Одна цепочка событий.",
    teamIntro:
      "Персонажи помогают обсуждать то, что обычно скрыто внутри системы. Первое дело ведут четверо. Сова подключается, когда ИИ или автоматизация меняют характер задачи.",
    context: "03 / Связанные материалы",
    contextFirst: "От инцидента",
    contextLast: "к рабочему принципу",
    contextIntro:
      "Изучите архитектурные решения в статьях или разберите базовые понятия в Engineering Wiki.",
    related: "Связанные материалы",
    articles: "Читать статьи об архитектуре",
    wiki: "Открыть базу знаний",
  },
} as const;

export const detailCopy = {
  en: {
    mechanism: "01 / Mechanism",
    mechanismTitle: "Follow the duplicate.",
    mechanismIntro:
      "The visible symptom occurs at the end. The ownership mistake starts earlier in the connection lifecycle.",
    perspectives: "02 / Perspectives",
    perspectivesTitle: "One mechanism, four consequences.",
    perspectivesIntro:
      "Each episode can stand alone on LinkedIn. Together they expose the complete system problem.",
    linkedin: "Read the series on LinkedIn",
  },
  ru: {
    mechanism: "01 / Механизм",
    mechanismTitle: "Проследите путь дубликата",
    mechanismIntro:
      "Пользователь видит симптом в конце цепочки. Ошибка в распределении ответственности возникает раньше, в жизненном цикле соединения.",
    perspectives: "02 / Взгляды на инцидент",
    perspectivesTitle: "Один механизм, четыре взгляда",
    perspectivesIntro:
      "Каждый эпизод в LinkedIn можно читать отдельно. Вместе они показывают проблему на уровне всей системы.",
    linkedin: "Читать серию на английском в LinkedIn",
  },
} as const;

export const russianCharacters = [
  [
    "Лис",
    "Поведение в рантайме",
    "Что именно выполнилось?",
    "Прослеживает регистрацию обработчиков, их снятие и переподключение, прежде чем назвать причину.",
  ],
  [
    "Медведь",
    "Границы системы",
    "Кто отвечает за жизненный цикл?",
    "Ищет границу, которая гарантирует одну активную подписку.",
  ],
  [
    "Кролик",
    "Рабочие сценарии",
    "Что увидел пользователь?",
    "Прослеживает последствия дубля для уведомлений, задач и решений пользователя.",
  ],
  [
    "Ёж",
    "Доказательства и ценность",
    "Что можно доказать?",
    "Сверяет объяснение с наблюдаемым поведением и оценивает, как сбой влияет на доверие.",
  ],
  [
    "Сова",
    "ИИ и автоматизация",
    "Что меняется при автоматизации?",
    "Присоединяется к расследованиям, где ИИ меняет механизм или распределение ответственности.",
  ],
] as const;

export const edgeRussian = {
  slug: "websocket-duplicate-events",
  number: "ДЕЛО 001",
  title: "Событие, которое произошло дважды",
  mechanism: "Жизненный цикл WebSocket и повторная обработка",
  summary:
    "На первый взгляд обычное переподключение приводит к повторной реакции. Разбираем, как это связано с жизненным циклом подписки, действиями пользователя и корректностью работы продукта.",
  status: "Первое дело серии",
  path: [
    "Событие с сервера",
    "Соединение A",
    "Переподключение",
    "Соединение B",
    "Повторная реакция",
  ],
  lenses: [
    {
      name: "Лис",
      role: "Поведение в продакшене",
      copy: "Проследить регистрацию и снятие обработчиков, а также переподключение. По наблюдениям отличить повторную доставку по сети от повторной обработки на клиенте.",
    },
    {
      name: "Медведь",
      role: "Архитектура на практике",
      copy: "Определить, кто владеет соединением и как гарантировать, что активна только одна подписка.",
    },
    {
      name: "Кролик",
      role: "Продуктовая разработка",
      copy: "Проследить, как повторное событие влияет на уведомления, решения пользователя и состояние задач, в том числе тех, по которым действие ещё не завершилось.",
    },
    {
      name: "Ёж",
      role: "Ценность для бизнеса",
      copy: "Сверить объяснение с наблюдаемыми фактами и связать повторы с нагрузкой на поддержку и доверием пользователей.",
    },
  ],
} as const;
