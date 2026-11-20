import type { knowledgeTracks, learningModes } from "./knowledge-base";

type Track = (typeof knowledgeTracks)[number];
type Mode = (typeof learningModes)[number];

export const statusRussian: Record<Track["status"] | Mode["status"], string> = {
  Available: "Доступно",
  Expanding: "Пополняется",
  Roadmap: "В планах",
  "Phase 1": "Этап 1",
  "Phase 2": "Этап 2",
  "Phase 3": "Этап 3",
};

export const trackRussian: Record<
  Track["path"],
  { name: string; copy: string }
> = {
  javascript: {
    name: "JavaScript",
    copy: "Поведение в рантайме, семантика языка и модели, которые помогают понимать повседневный код.",
  },
  typescript: {
    name: "TypeScript",
    copy: "Моделирование данных, сужение типов и поддерживаемые контракты.",
  },
  react: {
    name: "React",
    copy: "Рендеринг, состояние, эффекты и границы компонентов.",
  },
  "data-structures-algorithms": {
    name: "Структуры данных и алгоритмы",
    copy: "Типовые структуры и приёмы, которые встречаются в разных задачах.",
  },
  "browser-web-platform": {
    name: "Браузер и веб-платформа",
    copy: "Связь между событиями, рендерингом, сетью, хранилищами и воркерами.",
  },
  "frontend-system-design": {
    name: "Архитектура фронтенда",
    copy: "Как из требований вывести границы ответственности, требования к надёжности и компромиссы.",
  },
  "html-css-accessibility": {
    name: "HTML, CSS и доступность",
    copy: "Семантичные, адаптивные и доступные интерфейсы.",
  },
  testing: {
    name: "Тестирование",
    copy: "Выбор границ тестирования и проверка асинхронного поведения продукта.",
  },
  nextjs: {
    name: "Next.js",
    copy: "Практический путь от маршрутизации до безопасного развёртывания.",
  },
  performance: {
    name: "Производительность",
    copy: "Измерение загрузки, рендеринга, отклика и памяти перед оптимизацией.",
  },
  "web-security": {
    name: "Веб-безопасность",
    copy: "Угрозы в браузере, идентификация пользователей и защита данных.",
  },
  graphql: {
    name: "GraphQL",
    copy: "Схемы, клиентское кэширование, развитие API и надёжность.",
  },
};

export const modeRussian: Record<
  Mode["name"],
  { name: string; title: string; copy: string; action: string }
> = {
  Learn: {
    name: "Понять",
    title: "Разобраться в механизме",
    copy: "Замыкание сохраняет доступ к лексическому окружению. Разберитесь, к чему оно сохраняет доступ, что может измениться и почему переменные остаются доступны.",
    action: "Читать главу о замыканиях",
  },
  Explain: {
    name: "Объяснить",
    title: "Сформулировать объяснение",
    copy: "От короткого ответа перейдите к разбору области видимости, колбэков и общих переменных.",
    action: "Вопросы и ответы по JavaScript",
  },
  Recall: {
    name: "Вспомнить",
    title: "Быстро освежить различия",
    copy: "В планах компактная справка со сравнениями, API и списками для отладки.",
    action: "Смотреть план справки",
  },
  Practice: {
    name: "Применить",
    title: "Проверить понимание",
    copy: "В планах задания на предсказание результата, поиск ошибок, написание кода и архитектуру.",
    action: "Смотреть план практики",
  },
};

export const kbCopy = {
  en: {
    eyebrow: "Thinking / Frontend Engineering Wiki",
    titleStart: "Knowledge you can explain",
    titleEnd: " and apply.",
    intro:
      "Connected explanations for frontend engineers who want to understand the mechanism, articulate the trade-offs, and carry the reasoning into their work.",
    open: "Open the Wiki",
    caseStudy: "The product case study",
    instrumentLabel:
      "One topic, closures, connects a mental model to an explanation, a reference, and practice. Handbooks and Q&A are available; reference and practice are on the roadmap.",
    instrumentTitle: "One topic / connected understanding",
    start: "Start with the mechanism",
    closures: "Closures",
    returns: "The function returns.",
    binding: "The binding stays reachable.",
    carry: "Carry it into the explanation",
    access: "Access to a binding.",
    frozen: "Not a frozen value.",
    scope: "Scope",
    callbacks: "Callbacks",
    state: "Retained state",
    understand: "Understand the relationship.",
    explain: "Then explain the behavior.",
    coverage: "Wiki coverage",
    chapters: "chapters available",
    answers: "answers available",
    tracks: "tracks in the curriculum",
    growing: "A growing system.",
    availability: "Availability is shown at each entry point.",
    modes: "01 / One topic, four modes",
    deeper: "Go deeper.",
    useful: "Then make it useful.",
    modesIntro:
      "Start with closures: an available chapter connects lexical scope to mutation, callbacks, and memory. Handbooks and Q&A are ready to explore; the reference and practice modes are still growing.",
    example: "Try the mental model / example prompt",
    exampleTitle: "Two calls. One shared binding.",
    reasoning: "Reveal the reasoning",
    entry: "02 / Find your entry point",
    question: "Follow the question.",
    path: "Choose a path.",
    tracksIntro:
      "All 12 curriculum tracks are shown here. Start with available JavaScript material, explore expanding subjects, or inspect the phased roadmap for what comes next.",
    closing: "Start with one concept.",
    connections: "Follow the connections.",
    startJS: "Start with JavaScript",
  },
  ru: {
    eyebrow: "Заметки / Frontend Engineering Wiki",
    titleStart: "Знания, которые можно объяснить",
    titleEnd: " и применить.",
    intro:
      "Связанные объяснения для фронтенд-разработчиков, которые хотят понять, как всё работает, объяснить компромиссы и применить эти знания в работе.",
    open: "Открыть вики",
    caseStudy: "Читать кейс продукта",
    instrumentLabel:
      "На примере замыканий показано, как связать понимание темы с объяснением, справкой и практикой. Руководства и вопросы с ответами уже доступны, справка и практика в планах.",
    instrumentTitle: "Одна тема / от механизма к объяснению",
    start: "Начните с механизма",
    closures: "Замыкания",
    returns: "Вызов функции завершён.",
    binding: "Переменная всё ещё доступна.",
    carry: "Объясните поведение",
    access: "Доступ к переменной.",
    frozen: "Её значение может меняться.",
    scope: "Область видимости",
    callbacks: "Колбэки",
    state: "Сохранённое состояние",
    understand: "Разберитесь в связи.",
    explain: "Затем объясните поведение.",
    coverage: "Охват вики",
    chapters: "глав доступны",
    answers: "ответа доступны",
    tracks: "маршрутов в программе",
    growing: "База пополняется.",
    availability: "У каждого раздела указан статус.",
    modes: "01 / Одна тема, четыре формата",
    deeper: "Разберитесь в теме.",
    useful: "Затем примените знания.",
    modesIntro:
      "Начните с замыканий. В готовой главе показано, как лексическая область видимости связана с изменением данных, колбэками и памятью. Руководства и вопросы с ответами доступны, справка и практика в разработке.",
    example: "Проверьте себя / пример",
    exampleTitle: "Два вызова, одна переменная",
    reasoning: "Показать объяснение",
    entry: "02 / С чего начать",
    question: "Начните с вопроса.",
    path: "Выберите маршрут.",
    tracksIntro:
      "Здесь собраны все 12 маршрутов. Начните с готовых материалов по JavaScript, загляните в разделы, которые пополняются, или посмотрите план следующих этапов.",
    closing: "Начните с одного понятия.",
    connections: "Посмотрите, с чем оно связано.",
    startJS: "Начать с JavaScript",
  },
} as const;
