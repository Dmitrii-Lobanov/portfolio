import type * as English from "./polaris";

type Translated<T> = T extends string
  ? string
  : { [K in keyof T]: Translated<T[K]> };

export const polarisRussian = {
  clocks: [
    [
      "01",
      "Мгновенно",
      "Выделение, открытые файлы, расположение панелей и незавершённый ввод.",
    ],
    [
      "02",
      "С сохранением",
      "Проекты, записи о файлах, диалоги и принадлежность пользователю.",
    ],
    [
      "03",
      "В фоне",
      "Запросы к ИИ, поиск контекста, мониторинг и фоновые задачи.",
    ],
  ],
  requestStages: [
    ["Выбрать код", "Диапазон в редакторе"],
    ["Дать инструкцию", "Запрос пользователя"],
    ["Собрать контекст", "Файлы и история"],
    ["Вызвать модель", "Фоновая задача"],
    ["Показать ответ", "Потоковый вывод"],
    ["Сохранить диалог", "Запись в хранилище"],
  ],
  boundaries: [
    ["Адаптер редактора", "Документы, выделение и правки", "Хранение данных"],
    ["Сервис проектов", "Проекты и записи о файлах", "Отображение редактора"],
    [
      "Сценарий работы ИИ",
      "Выполнение запроса и прогресс",
      "Расположение панелей",
    ],
    ["Модель диалога", "Сообщения и история", "Реализация модели ИИ"],
    [
      "Наблюдаемость",
      "Ошибки, трассировки, запросы к ИИ",
      "Поведение продукта",
    ],
  ],
  current: [
    "Вход в систему, рабочее пространство и дерево файлов",
    "Панели с изменяемым размером и редактирование нескольких файлов",
    "Редактор CodeMirror, подсказки ИИ и быстрые правки",
    "Сохраняемые диалоги и фоновые задачи ИИ",
    "Агент для программирования с инструментами работы с файлами проекта",
    "Запуск в WebContainer, терминал и предпросмотр",
    "Импорт и экспорт репозиториев GitHub",
    "Мониторинг ошибок и запросов к моделям",
  ],
  constraints: [
    "Запуск в браузере зависит от поддержки WebContainer",
    "Для работы с GitHub нужен доступ к репозиторию",
    "Для ИИ и хранения данных нужны настроенные внешние сервисы",
    "Сгенерированные изменения требуют проверки разработчиком",
  ],
  decisions: [
    [
      "Долгая задача должна жить дольше запроса",
      "Задача ИИ может выполняться после перехода на другую страницу или отправки ответа сервера.",
      "Перенести выполнение в фоновые процессы, сохраняющие состояние.",
      "Больше состояний и компонентов для сопровождения.",
      "Редактор остаётся отзывчивым, пока задача выполняется независимо.",
    ],
    [
      "Редактор должен оставаться заменяемым",
      "Вызовы API конкретного редактора могут разойтись по всему продукту.",
      "Скрыть операции редактора за небольшим адаптером рабочей среды.",
      "Дополнительный код для преобразования данных и вызовов.",
      "Сценарии продукта зависят от возможностей редактора, а не от его внутреннего устройства.",
    ],
    [
      "Контекст должен быть явным",
      "Качество ответа зависит от кода, состояния проекта, истории и документации.",
      "Сделать сбор контекста отдельным наблюдаемым процессом.",
      "Больше работы по координации и мониторингу.",
      "Поведение ИИ проще анализировать и улучшать.",
    ],
  ],
} satisfies Translated<typeof English>;

export const polarisRussianProject = {
  name: "Polaris",
  label: "Среда разработки с ИИ",
  status: "Рабочий прототип",
  summary:
    "Браузерная IDE на Next.js и TypeScript с деревом файлов, редактором кода, терминалом, предпросмотром, импортом и экспортом GitHub и ИИ-помощником.",
  role: "Независимый фронтенд-разработчик и продуктовый инженер",
  period: "2026",
  scale: "Редактор · среда исполнения · репозитории · ИИ",
  outcome:
    "В одной среде можно загрузить репозиторий, править код, открыть предпросмотр и работать с ИИ.",
};

export const polarisCopy = {
  en: {
    tension: "01 / Product tension",
    tensionTitle: "An AI editor brings several systems together.",
    tensionIntro:
      "Import a GitHub repository, open a file, request an AI change, and run the result in a browser preview. Each step crosses a different lifecycle: repository work, editor state, persisted files, background AI execution, and a running WebContainer.",
    mapLabel:
      "A workspace command coordinating editor, file persistence, and background assistant systems",
    orchestration: "Workspace orchestration",
    session: " Session active",
    intent: "User intent",
    refactor: "Refactor selection",
    run: "Run",
    immediate: "01 / Immediate",
    editor: "Editor intent",
    selection: "Selection preserved",
    persistent: "02 / Persistent",
    project: "Project state",
    recorded: "Changes recorded",
    async: "03 / Asynchronous",
    assistant: "Assistant task",
    independent: "Running independently",
    oneAction: "One action",
    threeLifecycles: "three lifecycles",
    workspace: "02 / Workspace model",
    workspaceTitle: "One workspace. Three different clocks.",
    workspaceIntro:
      "The workspace stays coherent by giving each kind of state its own pace and source of truth. Immediate feedback never pretends to be a saved result, and background work never blocks the editor.",
    ai: "03 / AI workflow",
    aiTitle: "The interaction continues after the button is released.",
    aiIntro:
      "The interface acknowledges intent immediately, then turns it into durable background work. Context assembly, model execution, streaming, and persistence remain visible as separate stages—so a slow or failed step can be understood and recovered.",
    request: "AI request / observable execution",
    workflow: " Workflow active",
    accepted: "Intent accepted",
    resolved: "Context resolved",
    retained: "Result retained",
    integration: "04 / Integration boundaries",
    integrationTitle: "Every subsystem gets a narrow contract.",
    integrationIntro:
      "Adapter code is deliberate friction: it keeps a tool change from becoming a workspace rewrite.",
    contracts: "Contract map / five guarded seams",
    boundaries: " Boundaries active",
    owns: "Owns",
    outside: "Kept outside",
    capability: "Capability",
    responsibility: "Protected responsibility",
    surface: "05 / Product surface",
    scopeTitle: "Import, edit, run, and export from one browser workspace.",
    scopeIntro:
      "The prototype connects repository import, editing, AI assistance, terminal output, and live preview. Runtime support, service access, and review remain visible constraints on that workflow.",
    implemented: " Implemented workflow",
    working: "Working now",
    conditions: "Conditions",
    constraints: " Operating constraints",
    review: "Review before use",
    decisions: "06 / Engineering decisions",
    decisionTitle: "The product shape determined the architecture.",
    decisionIntro:
      "Each choice turns a product pressure into a deliberate boundary. The cost stays visible alongside the behavior it makes possible.",
    pressure: "Pressure",
    decision: "Decision",
    cost: "Cost",
    scenes: [
      "Request released · task continues",
      "Editor swapped · contract remains",
      "Sources gathered · context made explicit",
    ],
  },
  ru: {
    tension: "01 / Задача продукта",
    tensionTitle: "Редактор с ИИ объединяет несколько систем",
    tensionIntro:
      "Импортируйте репозиторий GitHub, откройте файл, попросите ИИ внести изменение и запустите результат в предпросмотре. В этом сценарии пересекаются разные жизненные циклы: работа с репозиторием, состояние редактора, сохранение файлов, фоновые задачи ИИ и работа WebContainer.",
    mapLabel:
      "Как команда связывает редактор, хранение файлов и фонового помощника",
    orchestration: "Координация работы",
    session: " Сессия активна",
    intent: "Запрос пользователя",
    refactor: "Рефакторинг выделения",
    run: "Запуск",
    immediate: "01 / Мгновенно",
    editor: "Действие в редакторе",
    selection: "Выделение сохранено",
    persistent: "02 / Хранение",
    project: "Состояние проекта",
    recorded: "Изменения записаны",
    async: "03 / В фоне",
    assistant: "Задача помощника",
    independent: "Работает в фоне",
    oneAction: "Одно действие",
    threeLifecycles: "три жизненных цикла",
    workspace: "02 / Модель среды",
    workspaceTitle: "Одна среда, три режима работы",
    workspaceIntro:
      "У каждого вида состояния свой темп обновления и источник данных. Редактор сразу реагирует на ввод, отдельно показывает сохранённый результат и остаётся доступным во время фоновых задач.",
    ai: "03 / Работа ИИ",
    aiTitle: "После нажатия задача продолжается в фоне",
    aiIntro:
      "Интерфейс сразу принимает запрос и запускает фоновую задачу. Сбор контекста, вызов модели, потоковый ответ и сохранение результата видны как отдельные этапы. Это помогает понять, где возникла задержка или ошибка, и восстановить работу.",
    request: "Этапы запроса к ИИ",
    workflow: " Задача выполняется",
    accepted: "Запрос принят",
    resolved: "Контекст собран",
    retained: "Результат сохранён",
    integration: "04 / Границы интеграций",
    integrationTitle: "У каждой подсистемы свой контракт",
    integrationIntro:
      "Адаптер требует дополнительного кода, зато при замене инструмента не приходится переписывать всю среду.",
    contracts: "Пять границ системы",
    boundaries: " Границы подсистем",
    owns: "Отвечает за",
    outside: "За пределами",
    capability: "Подсистема",
    responsibility: "Граница ответственности",
    surface: "05 / Возможности продукта",
    scopeTitle: "От импорта до запуска в браузере",
    scopeIntro:
      "В прототипе связаны импорт репозитория, редактирование, помощь ИИ, терминал и предпросмотр. Для работы нужны поддержка среды исполнения, доступ к сервисам и проверка сгенерированных изменений.",
    implemented: " Готовые сценарии",
    working: "Уже работает",
    conditions: "Условия",
    constraints: " Ограничения",
    review: "Что проверить",
    decisions: "06 / Инженерные решения",
    decisionTitle: "Задачи продукта определили архитектуру",
    decisionIntro:
      "Каждое решение задаёт границу, которая помогает выполнить требование продукта. Ниже видно, что это даёт и какой ценой.",
    pressure: "Проблема",
    decision: "Решение",
    cost: "Цена решения",
    scenes: [
      "Запрос завершён · задача продолжается",
      "Редактор заменён · контракт сохранён",
      "Источники собраны · контекст виден",
    ],
  },
} as const;
