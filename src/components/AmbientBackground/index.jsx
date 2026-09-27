import React, { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Orbs parameters
    const orbs = [
      { x: width * 0.2, y: height * 0.25, radius: 240, vx: 0.3, vy: 0.2, colorLight: "rgba(234, 88, 12, 0.08)", colorDark: "rgba(234, 88, 12, 0.12)" },
      { x: width * 0.8, y: height * 0.6, radius: 300, vx: -0.2, vy: 0.3, colorLight: "rgba(217, 119, 6, 0.06)", colorDark: "rgba(217, 119, 6, 0.1)" },
      { x: width * 0.5, y: height * 0.85, radius: 220, vx: 0.25, vy: -0.25, colorLight: "rgba(180, 83, 9, 0.07)", colorDark: "rgba(180, 83, 9, 0.11)" },
    ];

    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      t += 0.005;

      const isDark = document.documentElement.getAttribute("data-theme") !== "light";

      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -100 || orb.x > width + 100) orb.vx *= -1;
        if (orb.y < -100 || orb.y > height + 100) orb.vy *= -1;

        const radGradient = ctx.createRadialGradient(
          orb.x + Math.sin(t) * 30,
          orb.y + Math.cos(t) * 30,
          10,
          orb.x,
          orb.y,
          orb.radius
        );

        const color = isDark ? orb.colorDark : orb.colorLight;
        radGradient.addColorStop(0, color);
        radGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = radGradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
