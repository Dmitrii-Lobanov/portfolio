export function WorkHero() {
  return (
    <section className="route-intro work-intro">
      <p className="eyebrow">Work / Selected systems</p>
      <div className="work-intro-layout">
        <div className="work-intro-copy">
          <h1>
            <span>Not a gallery.</span>
            <br />A record of decisions.
          </h1>
          <p>
            Products are shown here as systems under pressure: the constraint,
            the engineering response, and the measurable evidence that the
            response worked.
          </p>
        </div>
        <div className="work-decision-engine" aria-hidden="true">
          <div className="system-sculpture">
            <div className="sculpture-caption sculpture-caption-input">
              Product pressure
              <span>Unsorted signals</span>
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
                <small>Engineering</small>
                <strong>Judgment</strong>
                <i />
              </span>
              <span className="machine-gate machine-gate-top">Boundary</span>
              <span className="machine-gate machine-gate-bottom">
                Ownership
              </span>
              <i className="machine-packet packet-one" />
              <i className="machine-packet packet-two" />
            </div>
            <div className="sculpture-output">
              <span>
                <small>01</small>Clear
              </span>
              <span>
                <small>02</small>Fast
              </span>
              <span>
                <small>03</small>Dependable
              </span>
            </div>
            <div className="sculpture-caption sculpture-caption-output">
              Stable system
              <span>Defensible outcome</span>
            </div>
            <span className="sculpture-floor" />
          </div>
        </div>
      </div>
    </section>
  );
}
