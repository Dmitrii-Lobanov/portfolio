"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function HeroPortrait() {
  const portraitRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const portrait = portraitRef.current;
    const hero = portrait?.closest<HTMLElement>(".screenbreak-hero");
    if (!portrait || !hero) return;

    const setColorLevel = (level: number) => {
      portrait.style.setProperty("--portrait-gray", `${1 - level}`);
      portrait.style.setProperty(
        "--portrait-saturation",
        `${0.72 + level * 0.28}`,
      );
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const portraitBounds = portrait.getBoundingClientRect();
      const heroBounds = hero.getBoundingClientRect();
      const centerX = portraitBounds.left + portraitBounds.width / 2;
      const centerY = portraitBounds.top + portraitBounds.height / 2;
      const distance = Math.hypot(
        event.clientX - centerX,
        event.clientY - centerY,
      );
      const range = Math.max(heroBounds.width * 0.58, portraitBounds.width);
      const level = Math.max(0, Math.min(1, 1 - distance / range));

      setColorLevel(level);
    };

    const handlePointerLeave = () => setColorLevel(0);

    hero.addEventListener("pointermove", handlePointerMove);
    hero.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <Image
      ref={portraitRef}
      src="/my-photo-no-bg-amazed.png"
      alt="Dmitrii Lobanov"
      width={1129}
      height={944}
      className="cutout-portrait cutout-portrait-polished"
      data-depth="0.1"
      priority
    />
  );
}
