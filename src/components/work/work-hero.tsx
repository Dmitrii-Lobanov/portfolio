export function WorkHero({ russian }: { russian: boolean }) {
  return (
    <section className="route-intro work-intro">
      <p className="eyebrow">
        {russian ? "Проекты / Избранное" : "Work / Selected systems"}
      </p>
      <div className="work-intro-layout">
        <div className="work-intro-copy">
          <h1>
            <span>{russian ? "Инженерные проекты." : "Not a gallery."}</span>
            <br />
            {russian ? "Решения и результаты." : "A record of decisions."}
          </h1>
          <p>
            {russian
              ? "В каждом проекте я показываю, с каким ограничением столкнулся, какое решение выбрал и как проверил результат."
              : "Products are shown here as systems under pressure: the constraint, the engineering response, and the measurable evidence that the response worked."}
          </p>
        </div>
        <div className="work-decision-engine" aria-hidden="true">
          <div className="system-sculpture">
            <div className="sculpture-caption sculpture-caption-input">
              {russian ? "Нагрузка на продукт" : "Product pressure"}
              <span>
                {russian ? "Разрозненные сигналы" : "Unsorted signals"}
              </span>
            </div>
            <div className="sculpture-fragments">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="sculpture-machine">
              <span className="machine-spine" />
              <span className="machine-ring machine-ring-outer" />
              <span className="machine-ring machine-ring-inner" />
              <span className="machine-core">
                <small>{russian ? "Инженерные" : "Engineering"}</small>
                <strong>{russian ? "Решения" : "Judgment"}</strong>
                <i />
              </span>
              <span className="machine-gate machine-gate-top">
                {russian ? "Границы" : "Boundary"}
              </span>
              <span className="machine-gate machine-gate-bottom">
                {russian ? "Ответственность" : "Ownership"}
              </span>
              <i className="machine-packet packet-one" />
              <i className="machine-packet packet-two" />
            </div>
            <div className="sculpture-output">
              <span>
                <small>01</small>
                {russian ? "Ясность" : "Clear"}
              </span>
              <span>
                <small>02</small>
                {russian ? "Скорость" : "Fast"}
              </span>
              <span>
                <small>03</small>
                {russian ? "Надёжность" : "Dependable"}
              </span>
            </div>
            <div className="sculpture-caption sculpture-caption-output">
              {russian ? "Стабильная система" : "Stable system"}
              <span>
                {russian ? "Проверенный результат" : "Defensible outcome"}
              </span>
            </div>
            <span className="sculpture-floor" />
          </div>
        </div>
      </div>
    </section>
  );
}
