"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function StarfieldBackground() {
  const canvasRef = useRef(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Only run landscape animation when dark theme is active
    if (resolvedTheme !== "dark") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Clean, crisp star dots in upper sky
    let stars = [];
    const initStars = () => {
      const count = Math.floor((width * height) / 9000);
      stars = Array.from({ length: Math.min(count, 120) }, () => ({
        x: Math.random() * width,
        y: Math.random() * (height * 0.65),
        radius: Math.random() * 1.2 + 0.4,
        alpha: Math.random() * 0.6 + 0.3,
        twinkleSpeed: Math.random() * 0.01 + 0.003,
        dir: Math.random() > 0.5 ? 1 : -1,
      }));
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", handleResize);
    initStars();

    // Helper for organic mountain peaks
    const getMountainPoints = (baseY, maxAmplitude, segments, seed) => {
      const points = [];
      const step = width / segments;
      for (let i = 0; i <= segments; i++) {
        const x = i * step;
        const n1 = Math.sin(i * 0.75 + seed);
        const n2 = Math.cos(i * 1.4 + seed * 1.8);
        const n3 = Math.sin(i * 2.8 + seed * 0.4);
        const y = baseY - Math.abs(n1 * 0.5 + n2 * 0.3 + n3 * 0.2) * maxAmplitude;
        points.push({ x, y });
      }
      return points;
    };

    // Helper for stylized pine trees
    const drawPineTree = (x, baseY, treeH, treeW) => {
      ctx.beginPath();
      ctx.moveTo(x, baseY - treeH);
      ctx.lineTo(x + treeW * 0.25, baseY - treeH * 0.65);
      ctx.lineTo(x + treeW * 0.12, baseY - treeH * 0.65);
      ctx.lineTo(x + treeW * 0.38, baseY - treeH * 0.35);
      ctx.lineTo(x + treeW * 0.18, baseY - treeH * 0.35);
      ctx.lineTo(x + treeW * 0.5, baseY);
      ctx.lineTo(x - treeW * 0.5, baseY);
      ctx.lineTo(x - treeW * 0.18, baseY - treeH * 0.35);
      ctx.lineTo(x - treeW * 0.38, baseY - treeH * 0.35);
      ctx.lineTo(x - treeW * 0.12, baseY - treeH * 0.65);
      ctx.lineTo(x - treeW * 0.25, baseY - treeH * 0.65);
      ctx.closePath();
      ctx.fill();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Sky Gradient (Simple Midnight Blue to Deep Navy Horizon)
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, "#060714");
      skyGrad.addColorStop(0.5, "#0b0c24");
      skyGrad.addColorStop(1, "#111336");
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Crisp, Non-glowing Stars
      stars.forEach((star) => {
        star.alpha += star.twinkleSpeed * star.dir;
        if (star.alpha >= 0.85) {
          star.alpha = 0.85;
          star.dir = -1;
        } else if (star.alpha <= 0.2) {
          star.alpha = 0.2;
          star.dir = 1;
        }
        ctx.fillStyle = `rgba(241, 245, 249, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Cyberpunk Detailed Moon
      const moonX = width > 768 ? width * 0.82 : width * 0.78;
      const moonY = Math.min(height * 0.2, 150);
      const moonRadius = width > 768 ? 44 : 34;

      // Soft ambient cyan moon halo
      const moonGlow = ctx.createRadialGradient(
        moonX,
        moonY,
        moonRadius * 0.8,
        moonX,
        moonY,
        moonRadius * 2.5
      );
      moonGlow.addColorStop(0, "rgba(56, 189, 248, 0.18)");
      moonGlow.addColorStop(0.5, "rgba(168, 85, 247, 0.08)");
      moonGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = moonGlow;
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Detailed Moon Body Radial Gradient
      const moonGrad = ctx.createRadialGradient(
        moonX - moonRadius * 0.35,
        moonY - moonRadius * 0.35,
        moonRadius * 0.1,
        moonX,
        moonY,
        moonRadius
      );
      moonGrad.addColorStop(0, "#ffffff");
      moonGrad.addColorStop(0.45, "#e0f7fc");
      moonGrad.addColorStop(0.8, "#a5f3fc");
      moonGrad.addColorStop(1, "#38bdf8");

      ctx.fillStyle = moonGrad;
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.fill();

      // Soft Crater Texture Details
      ctx.fillStyle = "rgba(147, 51, 234, 0.14)";
      ctx.beginPath();
      ctx.arc(moonX - moonRadius * 0.3, moonY + moonRadius * 0.22, moonRadius * 0.22, 0, Math.PI * 2);
      ctx.arc(moonX + moonRadius * 0.28, moonY - moonRadius * 0.18, moonRadius * 0.16, 0, Math.PI * 2);
      ctx.arc(moonX + moonRadius * 0.12, moonY + moonRadius * 0.36, moonRadius * 0.14, 0, Math.PI * 2);
      ctx.fill();

      // 4. Layer 1: Far Background Mountains (Midnight Violet)
      const farPts = getMountainPoints(height * 0.88, height * 0.2, 10, 1.8);
      ctx.fillStyle = "#0e0f2d";
      ctx.beginPath();
      ctx.moveTo(0, height);
      farPts.forEach((pt) => ctx.lineTo(pt.x, pt.y));
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      // 5. Layer 2: Midground Mountain Range (Dark Navy)
      const midPts = getMountainPoints(height * 0.93, height * 0.15, 14, 4.5);
      ctx.fillStyle = "#090a1e";
      ctx.beginPath();
      ctx.moveTo(0, height);
      midPts.forEach((pt) => ctx.lineTo(pt.x, pt.y));
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      // 6. Layer 3: Foreground Pine Forest Silhouette (Deepest Dark Navy)
      ctx.fillStyle = "#040510";
      const treeSpacing = Math.max(14, width / 75);
      const numTrees = Math.ceil(width / treeSpacing) + 3;

      for (let i = 0; i < numTrees; i++) {
        const treeX = i * treeSpacing - (treeSpacing * 0.5);
        const heightNoise = Math.sin(i * 1.85) * 20 + Math.cos(i * 3.3) * 14;
        const treeH = Math.min(height * 0.16, 120) + heightNoise;
        const treeW = treeH * 0.44;
        drawPineTree(treeX, height, treeH, treeW);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  if (resolvedTheme !== "dark") return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
