"use client";

import type { CSSProperties, PointerEvent } from "react";

type GradientStyle = CSSProperties & {
  "--name-x": string;
  "--name-y": string;
};

const initialStyle: GradientStyle = {
  "--name-x": "48%",
  "--name-y": "45%",
};

export function HeroName() {
  const handlePointerMove = (event: PointerEvent<HTMLHeadingElement>) => {
    if (event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    event.currentTarget.style.setProperty("--name-x", `${x.toFixed(1)}%`);
    event.currentTarget.style.setProperty("--name-y", `${y.toFixed(1)}%`);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLHeadingElement>) => {
    event.currentTarget.style.setProperty("--name-x", "48%");
    event.currentTarget.style.setProperty("--name-y", "45%");
  };

  return (
    <h1
      className="interactive-hero-name"
      style={initialStyle}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <span>Dmitrii</span>
      <span>Lobanov</span>
    </h1>
  );
}
