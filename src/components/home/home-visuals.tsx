import type { ImpactVisualKind } from "@/content/home";

const yearMarkers = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];
const densityMarkers = Array.from(
  { length: 24 },
  (_, index) => `density-${index + 1}`,
);

export function ImpactVisual({ visual }: { visual: ImpactVisualKind }) {
  if (visual === "experience") {
    return (
      <div className="impact-microviz impact-years" aria-hidden="true">
        {yearMarkers.map((year) => (
          <i key={year} />
        ))}
      </div>
    );
  }
  if (visual === "scale") {
    return (
      <div className="impact-microviz impact-density" aria-hidden="true">
        {densityMarkers.map((marker) => (
          <i key={marker} />
        ))}
      </div>
    );
  }
  if (visual === "reliability") {
    return (
      <div className="impact-microviz impact-loss" aria-hidden="true">
        <span>10%</span>
        <i />
        <span>0%</span>
      </div>
    );
  }
  return (
    <div className="impact-microviz impact-bars" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}

export function BrowserBreakout() {
  return (
    <div
      className="breakout-visual screenbreak-stage"
      aria-hidden="true"
      data-depth-stage
      data-reveal
    >
      <div className="breakout-rig">
        <div className="breakout-monitor">
          <div className="breakout-browser-bar">
            <i />
            <i />
            <i />
            <span>partner.workspace / campaigns</span>
          </div>
          <div className="breakout-screen">
            <div className="breakout-sidebar" />
            <div className="breakout-dashboard">
              <div className="breakout-heading" />
              <div className="breakout-chart">
                <i className="breakout-chart-pulse breakout-chart-pulse-a" />
                <i className="breakout-chart-pulse breakout-chart-pulse-b" />
              </div>
              <div className="breakout-row" />
            </div>
          </div>
        </div>
        <div className="breakout-card breakout-card-a" data-depth="0.55">
          <span>Conversion</span>
          <strong>42.8%</strong>
          <i />
        </div>
        <div className="breakout-card breakout-card-b" data-depth="-0.35">
          <span>Event health</span>
          <strong>99.98</strong>
          <small>stable</small>
        </div>
        <div className="breakout-card breakout-card-c" data-depth="0.28">
          <span>offer.updated</span>
          <small>42 ms</small>
        </div>
        <svg
          className="breakout-route"
          viewBox="0 0 720 500"
          aria-hidden="true"
        >
          <title>Event route leaving the product interface</title>
          <defs>
            <radialGradient id="event-sphere-orange" cx="32%" cy="26%">
              <stop offset="0" stopColor="#ffd8b7" />
              <stop offset="0.32" stopColor="#f27b47" />
              <stop offset="1" stopColor="#b72e15" />
            </radialGradient>
            <radialGradient id="event-sphere-cyan" cx="32%" cy="26%">
              <stop offset="0" stopColor="#e6ffff" />
              <stop offset="0.32" stopColor="#5bd3de" />
              <stop offset="1" stopColor="#08788d" />
            </radialGradient>
          </defs>
          <path
            className="breakout-route-body"
            d="M255 210C360 150 420 82 560 96S660 196 676 250"
          />
          <path
            className="breakout-route-light"
            d="M255 210C360 150 420 82 560 96S660 196 676 250"
          />
          <circle cx="255" cy="210" r="9" />
          <circle cx="560" cy="96" r="9" />
          <circle cx="676" cy="250" r="9" />
          <circle className="breakout-packet breakout-packet-a" r="5">
            <animateMotion
              dur="4.8s"
              path="M255 210C360 150 420 82 560 96S660 196 676 250"
              repeatCount="indefinite"
            />
          </circle>
          <circle className="breakout-packet breakout-packet-b" r="3.5">
            <animateMotion
              begin="-2.4s"
              dur="4.8s"
              path="M255 210C360 150 420 82 560 96S660 196 676 250"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
}

export function KanbanBreakout() {
  return (
    <div
      className="kanban-breakout screenbreak-stage"
      aria-hidden="true"
      data-depth-stage
      data-reveal
    >
      <div className="kanban-rig">
        <div className="kanban-window">
          <div className="kanban-toolbar">
            <i />
            <span>Product delivery</span>
          </div>
          <div className="kanban-columns">
            <div>
              <b>Backlog</b>
              <i />
              <i />
            </div>
            <div>
              <b>In progress</b>
              <i />
              <i />
            </div>
            <div>
              <b>Done</b>
              <i />
            </div>
          </div>
        </div>
        <svg className="kanban-route" viewBox="0 0 760 500">
          <title>Work item moving through delivery states</title>
          <path d="M185 300C280 230 360 250 430 190S565 118 650 170" />
          <circle r="7">
            <animateMotion
              dur="5.6s"
              path="M185 300C280 230 360 250 430 190S565 118 650 170"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
        <div
          className="kanban-flying-card kanban-flying-card-a"
          data-depth="0.45"
        >
          <span>Architecture review</span>
          <small>System boundary</small>
        </div>
        <div
          className="kanban-flying-card kanban-flying-card-b"
          data-depth="-0.3"
        >
          <span>Optimistic update</span>
          <small>Interaction state</small>
        </div>
      </div>
    </div>
  );
}
