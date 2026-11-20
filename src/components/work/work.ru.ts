import { cpaRussianProject } from "@/content/case-studies/cpa.ru";
import type { Project, ProjectSlug } from "@/content/portfolio";
import type { Capability } from "./presentation";

export const capabilityRussian: Record<Capability, string> = {
  Architecture: "Архитектура",
  Reliability: "Надёжность",
  "Product UX": "Интерфейс",
  Performance: "Скорость",
  Data: "Данные",
  Knowledge: "Знания",
};

type CardCopy = Pick<
  Project,
  "label" | "status" | "summary" | "role" | "period"
> & {
  name?: string;
  focus: string;
  evidenceSignal: string;
  evidenceCaption: string;
};

export const workProjectRussian: Record<ProjectSlug, CardCopy> = {
  "cpa-platform": {
    ...cpaRussianProject,
    evidenceSignal: "300 000+",
    evidenceCaption: "пользователей платформы",
    focus: "Ответственность за фронтенд · производительность · надёжность",
  },
  "reliable-kanban": {
    label: "Независимый продукт · Надёжность асинхронных операций",
    status: "Доступен",
    summary:
      "Канбан-система с мгновенным откликом при перетаскивании карточек. Состояние задач защищено при сбоях запросов, работе в нескольких сессиях и устаревших данных у клиента.",
    role: "Продуктовый инженер",
    period: "2026",
    evidenceSignal: "Контроль версий",
    evidenceCaption:
      "сервер отклоняет обновления задач на основе устаревших данных",
    focus: "Оптимистичный интерфейс · конкурентные изменения · восстановление",
  },
  "frontend-engineering-wiki": {
    label: "Образовательный продукт",
    status: "Развивается",
    summary:
      "База знаний по фронтенду, в которой объяснения основ связаны с вопросами для собеседований, справочными материалами и практическими заданиями.",
    role: "Автор и разработчик",
    period: "С 2026 года",
    evidenceSignal: "224",
    evidenceCaption: "объяснения для повторения и практики",
    focus: "Информационная архитектура · обучение",
  },
  polaris: {
    label: "Среда разработки с ИИ",
    status: "Рабочий прототип",
    summary:
      "Браузерная IDE на Next.js и TypeScript с деревом файлов, редактором кода, терминалом, предпросмотром, импортом и экспортом GitHub и ИИ-помощником.",
    role: "Независимый фронтенд-разработчик и продуктовый инженер",
    period: "2026",
    evidenceSignal: "Импорт → правки → экспорт",
    evidenceCaption: "работа с репозиториями в браузере",
    focus: "Изоляция среды исполнения · сценарии с ИИ · адаптеры",
  },
  wikimasters: {
    label: "Платформа совместной работы со знаниями",
    status: "MVP",
    summary:
      "Совместная вики для создания, редактирования и чтения статей с медиа, кэшированием и краткими пересказами от ИИ.",
    role: "Фулстек-разработчик",
    period: "2026",
    evidenceSignal: "Кэш на 60 с",
    evidenceCaption: "кэш списка статей сбрасывается после изменений",
    focus: "Хранение данных · кэширование · медиа · ИИ",
  },
};

export function workProjectHref(slug: ProjectSlug, russian: boolean) {
  return `${russian ? "/ru" : "/en"}/work/${slug}`;
}
