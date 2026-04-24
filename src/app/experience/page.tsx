import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Dmitrii Lobanov",
};

export default function Experience() {
  return (
    <main className="flex flex-col gap-16">
      <section className="flex flex-col gap-8">
        <h1 className="text-3xl font-semibold text-text-primary tracking-tight">
          Experience
        </h1>
        <div className="flex flex-col gap-12 max-w-3xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
              <div>
                <h3 className="text-lg font-medium text-text-primary">
                  Senior Frontend Engineer
                </h3>
                <h4 className="text-text-secondary">Tinkoff</h4>
              </div>
              <span className="text-sm font-mono text-text-muted">
                2020 — Present
              </span>
            </div>
            <p className="text-text-secondary leading-relaxed max-w-2xl">
              Led the architecture and development of core financial products.
              Spearheaded performance initiatives resulting in a 3x speedup in
              TTI (Time to Interactive). Mentored junior and mid-level
              engineers, enforced strict code quality standards, and closely
              collaborated with product and design to align technical
              constraints with business objectives.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
              <div>
                <h3 className="text-lg font-medium text-text-primary">
                  Frontend Engineer
                </h3>
                <h4 className="text-text-secondary">Previous Company</h4>
              </div>
              <span className="text-sm font-mono text-text-muted">
                2018 — 2020
              </span>
            </div>
            <p className="text-text-secondary leading-relaxed max-w-2xl">
              Developed and scaled responsive web applications using React and
              Redux. Integrated complex third-party APIs and established
              comprehensive testing suites using Jest and Cypress.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
