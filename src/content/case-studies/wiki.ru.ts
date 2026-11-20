import type * as English from "./wiki";

type Translated<T> = T extends string
  ? string
  : { [K in keyof T]: Translated<T[K]> };

export const wikiRussian = {
  learningModes: [
    [
      "01",
      "Понять",
      "Составить целостное представление о теме, разобрав её с самых основ.",
    ],
    [
      "02",
      "Объяснить",
      "Сформулировать короткий ответ для собеседования, ревью или технического обсуждения.",
    ],
    [
      "03",
      "Вспомнить",
      "Восстановить по кратким справкам важные различия, правила и термины.",
    ],
    [
      "04",
      "Применить",
      "Закрепить материал упражнениями, разбором ошибок и задачами на реализацию.",
    ],
  ],
  architecture: [
    [
      "Направление",
      "Маршруты задают порядок",
      "Двенадцать маршрутов объединяют близкие идеи. Отдельные темы можно изучать и вне маршрута.",
    ],
    [
      "Связи",
      "Ссылки показывают зависимости",
      "Материалы связывают предварительные знания, смежные понятия, практические последствия и углублённые разборы.",
    ],
    [
      "Глубина",
      "У каждого формата своя задача",
      "Подробные объяснения, краткие ответы, справки и упражнения устроены по-разному, потому что нужны в разных ситуациях.",
    ],
  ],
  editorialDecisions: [
    [
      "Глубина зависит от цели",
      "Одному читателю нужно быстро освежить знания, другому — разобраться в теме с нуля.",
      "Разделить короткие ответы и подробные объяснения, связав их в обе стороны.",
      "Можно быстро найти ответ и при необходимости перейти к подробному разбору.",
    ],
    [
      "Навигация помогает учиться",
      "Плоский список статей скрывает зависимости между темами.",
      "Собрать материалы в маршруты и показать связи между темами.",
      "Структура показывает, что изучить до и после выбранной темы.",
    ],
    [
      "За объяснением следует практика",
      "При чтении всё может казаться понятным, пока не нужно применить идею самостоятельно.",
      "Связать объяснения с вопросами на повторение и практическими заданиями.",
      "Понимание проверяется применением на практике.",
    ],
    [
      "Прогресс должен быть виден",
      "В развивающейся программе всегда есть незавершённые разделы.",
      "Показывать план развития и степень готовности тем.",
      "Читателям понятно, что уже доступно и что ещё в работе.",
    ],
  ],
  evidence: [
    ["10", "Глав", "Основные области программы"],
    ["224", "Объяснения", "Ответы, связанные с более широким контекстом"],
    ["12", "Маршрутов", "Последовательности связанных инженерных тем"],
    ["4", "Формата обучения", "Разные способы понять и закрепить материал"],
  ],
} satisfies Translated<typeof English>;

export const wikiRussianProject = {
  name: "Frontend Engineering Wiki",
  label: "Образовательный продукт",
  status: "Развивается",
  summary:
    "База знаний по фронтенду, в которой объяснения основ связаны с вопросами для собеседований, справочными материалами и практическими заданиями.",
  role: "Автор и разработчик",
  period: "С 2026 года",
  scale: "10 глав · 224 ответа · 12 маршрутов",
  outcome:
    "От объяснения основ можно перейти к короткому ответу, справке и заданию для практики.",
};

export const wikiCopy = {
  en: {
    problem: "01 / The problem",
    problemTitle:
      "Frontend knowledge is abundant. Finding the right explanation is difficult.",
    problemIntro:
      "Documentation, articles, interview lists, and courses each solve a different part of learning. The Wiki connects them into a route from first understanding to confident application.",
    mapLabel:
      "Separate knowledge formats converging into one connected mental model",
    mapTitle: "Knowledge fragments / connection map",
    linking: " System linking",
    docs: "Documentation",
    source: "Source truth",
    articles: "Articles",
    context: "Deep context",
    interviews: "Interview prompts",
    recall: "Active recall",
    courses: "Courses",
    guided: "Guided practice",
    connected: "Connected",
    mentalModel: "Mental model",
    understand: "Understand",
    explain: "Explain",
    apply: "Apply",
    learning: "02 / The learning loop",
    learningTitle: "One topic. Four useful ways to engage with it.",
    learningIntro:
      "Take debounce: understand why calls are delayed, explain how it differs from throttling, recall the meaning of cancel and flush, then implement those behaviors. The goal is to connect a definition to a decision an engineer can make in a real interface.",
    learningLabel: "Learning loop",
    architecture: "03 / Information architecture",
    architectureTitle: "The structure grows without becoming a content dump.",
    architectureIntro:
      "Readers can navigate by goal, topic, or depth without losing their position in the wider system.",
    editorial: "04 / Editorial decisions",
    editorialTitle: "Content is designed as deliberately as an interface.",
    pressure: "Pressure",
    decision: "Decision",
    evidence: "05 / Shape of the system",
    evidenceTitle: "A curriculum built for explanation and practice",
    evidenceLabels: ["Coverage", "Connected", "In progress", "Modes"],
  },
  ru: {
    problem: "01 / Проблема",
    problemTitle:
      "Материалов по фронтенду много. Найти нужное объяснение трудно.",
    problemIntro:
      "Документация, статьи, вопросы для собеседований и курсы помогают на разных этапах обучения. Вики связывает их в путь от первого знакомства с темой до применения на практике.",
    mapLabel: "Как разные форматы помогают понять одну тему",
    mapTitle: "Карта материалов",
    linking: " Связи между темами",
    docs: "Документация",
    source: "Первоисточник",
    articles: "Статьи",
    context: "Подробный разбор",
    interviews: "Собеседования",
    recall: "Повторение",
    courses: "Курсы",
    guided: "Практика",
    connected: "Цельное",
    mentalModel: "Понимание",
    understand: "Понять",
    explain: "Объяснить",
    apply: "Применить",
    learning: "02 / Как устроено обучение",
    learningTitle: "Четыре способа изучить одну тему",
    learningIntro:
      "На примере debounce: разобраться, зачем откладывать вызовы, объяснить отличие от throttling, вспомнить, что делают cancel и flush, и реализовать их. Так определение связывается с решением, которое можно применить в интерфейсе.",
    learningLabel: "Этапы обучения",
    architecture: "03 / Информационная архитектура",
    architectureTitle: "Новые материалы вписываются в общую структуру",
    architectureIntro:
      "Читатель может идти от цели, темы или нужной глубины и видеть, как материал связан с остальными разделами.",
    editorial: "04 / Редакционные решения",
    editorialTitle: "Материалы проектируются так же внимательно, как интерфейс",
    pressure: "Проблема",
    decision: "Решение",
    evidence: "05 / Вики в цифрах",
    evidenceTitle: "Программа для понимания и практики",
    evidenceLabels: ["Охват", "Связи", "В работе", "Форматы"],
  },
} as const;
