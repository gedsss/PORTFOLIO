"use client";

import { useEffect, useState } from "react";
import { LiquidMetal, liquidMetalPresets } from "@paper-design/shaders-react";

// A single centered metallic sphere on solid black.
// Tweak `speed` for how fast the metal flows; sphere size is set per-breakpoint below.
const spherePreset = {
  ...liquidMetalPresets[0].params,
  colorBack: "#000000",
  colorTint: "#ffffff",
  shape: "circle" as const,
  speed: 1,
  softness: 0.3,
  contour: 0.9,
  distortion: 0.12,
  repetition: 3,
};

const DESKTOP_SCALE = 0.55;
const MOBILE_SCALE = 0.85;

/**
 * Persistent background layer. Mounted once by <Portfolio /> and never unmounted,
 * so the shader keeps running while sections transition on top of it.
 */
export function MetalBackground() {
  // Narrow (phone) viewports are tall and thin, so the sphere needs to be
  // bigger there to stay the focal point.
  const [scale, setScale] = useState(DESKTOP_SCALE);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 640px)");
    const sync = () => setScale(query.matches ? MOBILE_SCALE : DESKTOP_SCALE);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden bg-black">
      <LiquidMetal
        {...spherePreset}
        scale={scale}
        className="absolute inset-0 h-full w-full"
        style={{ position: "absolute", inset: 0 }}
      />
    </div>
  );
}
