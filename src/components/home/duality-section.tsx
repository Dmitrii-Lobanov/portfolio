export function DualitySection() {
  return (
    <section className="duality-section screenbreak-stage" data-depth-stage>
      <div className="duality-list" data-reveal>
        <p className="screenbreak-kicker">Product engineer</p>
        <h2>What people use</h2>
        <ul>
          <li>Complex workflows</li>
          <li>Interaction systems</li>
          <li>Performance</li>
          <li>Accessible interfaces</li>
        </ul>
      </div>
      <div
        className="duality-core"
        role="img"
        aria-label="Product interactions flowing through a reliable architecture core"
      >
        <div className="core-signal core-signal-in" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="core-orbit core-orbit-outer" aria-hidden="true">
          <i />
          <i />
        </div>
        <div className="core-orbit core-orbit-inner" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="core-module" data-depth="0.12">
          <span>Product signals</span>
          <strong>System core</strong>
          <small>Reliable by design</small>
        </div>
        <div className="core-node core-node-state" data-depth="-0.14">
          State
        </div>
        <div className="core-node core-node-events" data-depth="0.2">
          Events
        </div>
        <div className="core-node core-node-data" data-depth="-0.08">
          Data
        </div>
        <div className="core-signal core-signal-out" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="duality-list duality-list-right" data-reveal>
        <p className="screenbreak-kicker">System architect</p>
        <h2>What keeps it reliable</h2>
        <ul>
          <li>Domain boundaries</li>
          <li>Server state</li>
          <li>Real-time events</li>
          <li>Long-lived architecture</li>
        </ul>
      </div>
    </section>
  );
}
