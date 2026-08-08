"use client";

import { useEffect, useRef } from "react";

export default function NoiseCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let frameCount = 0;
    const generateNoise = () => {
      frameCount++;
      // Limit to ~20 FPS for subtle, retro noise animation
      if (frameCount % 3 === 0) {
        const w = canvas.width;
        const h = canvas.height;
        if (w > 0 && h > 0) {
          const imgData = ctx.createImageData(w, h);
          const data = imgData.data;
          
          for (let i = 0; i < data.length; i += 4) {
            if (Math.random() < 0.05) {
              const val = Math.random() < 0.5 ? 255 : 180;
              data[i] = val;
              data[i + 1] = val;
              data[i + 2] = val;
              data[i + 3] = Math.floor(Math.random() * 40 + 10);
            } else {
              data[i + 3] = 0;
            }
          }
          ctx.putImageData(imgData, 0, 0);
        }
      }
      animationFrameId = requestAnimationFrame(generateNoise);
    };

    generateNoise();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30 mix-blend-overlay"
    />
  );
}
