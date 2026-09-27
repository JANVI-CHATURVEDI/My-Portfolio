// Lightweight 60fps Canvas Confetti Cannon - Zero External Dependencies
export function triggerConfetti(originX, originY) {
  if (typeof window === "undefined") return;

  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9999999";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);

  const startX = originX !== undefined ? originX : width / 2;
  const startY = originY !== undefined ? originY : height / 2;

  const colors = [
    "#a855f7", // purple
    "#06b6d4", // cyan
    "#ec4899", // pink
    "#3b82f6", // blue
    "#10b981", // emerald
    "#f59e0b", // amber
    "#ffffff", // white
  ];

  const particleCount = 85;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 9;
    particles.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      size: 4 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRotation: (Math.random() - 0.5) * 12,
      opacity: 1,
      shape: Math.random() > 0.4 ? "rect" : "circle",
      decay: 0.012 + Math.random() * 0.015,
      wobble: Math.random() * 10,
    });
  }

  let animationFrame;
  function update() {
    ctx.clearRect(0, 0, width, height);

    let activeParticles = 0;
    particles.forEach((p) => {
      if (p.opacity <= 0) return;
      activeParticles++;

      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22; // gravity
      p.vx *= 0.98; // air drag
      p.rotation += p.vRotation;
      p.opacity -= p.decay;
      p.wobble += 0.1;

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.translate(p.x + Math.sin(p.wobble) * 2, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;

      if (p.shape === "rect") {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });

    if (activeParticles > 0) {
      animationFrame = requestAnimationFrame(update);
    } else {
      cancelAnimationFrame(animationFrame);
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    }
  }

  animationFrame = requestAnimationFrame(update);
}
