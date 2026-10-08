import React, { useEffect, useRef } from "react";
import "./TechHologram.css";

const TechHologram = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const dpr = window.devicePixelRatio || 1;
    const width = 240;
    const height = 240;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const particles = [];
    const numParticles = 36;
    const radiusOuter = 75;
    const radiusInner = 45;

    for (let i = 0; i < numParticles; i++) {
      const angle = (i / numParticles) * Math.PI * 2;
      const isOuter = i % 2 === 0;
      const r = isOuter ? radiusOuter : radiusInner;
      particles.push({
        x: Math.cos(angle) * r,
        y: (Math.random() - 0.5) * 15,
        z: Math.sin(angle) * r,
        isOuter,
        angle,
      });
    }

    let angleX = 0.2;
    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isLightMode = document.documentElement.getAttribute("data-theme") === "light";
      const mainColor = isLightMode ? "#0a0a0a" : "#ffffff";
      const strokeColor = isLightMode ? "rgba(0, 0, 0, 0.18)" : "rgba(255, 255, 255, 0.2)";

      angleY += 0.012;
      angleX = Math.sin(angleY * 0.5) * 0.35;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const projected = particles.map((p) => {
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;
        let y1 = p.y;

        let y2 = y1 * cosX - z1 * sinX;
        let z2 = z1 * cosX + y1 * sinX;

        const fov = 220;
        const scale = fov / (fov + z2);
        const xProj = x1 * scale + width / 2;
        const yProj = y2 * scale + height / 2;

        return { x: xProj, y: yProj, z: z2, scale, isOuter: p.isOuter };
      });

      ctx.beginPath();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.2;

      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          if (p1.isOuter === p2.isOuter) {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 42) {
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
            }
          }
        }
      }
      ctx.stroke();

      projected.forEach((p) => {
        ctx.beginPath();
        const nodeRadius = Math.max(0.8, (p.isOuter ? 3 : 2) * p.scale);
        ctx.arc(p.x, p.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = mainColor;
        ctx.globalAlpha = p.z > 0 ? 0.35 : 0.9;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 4, 0, Math.PI * 2);
      ctx.fillStyle = mainColor;
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="tech-hologram-container">
      <canvas ref={canvasRef} className="tech-hologram-canvas"></canvas>
      <div className="hologram-glow"></div>
      <div className="hologram-ring-accent"></div>
    </div>
  );
};

export default TechHologram;
