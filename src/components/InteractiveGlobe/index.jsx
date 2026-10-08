import React, { useEffect, useRef, useState, useCallback } from "react";
import "./InteractiveGlobe.css";
import { sound } from "../../utils/soundEffects";

const CONTINENT_DOTS = [
  [26.45, 80.33], [28.61, 77.21], [19.07, 72.88], [12.97, 77.59], [13.08, 80.27],
  [22.57, 88.36], [17.38, 78.48], [23.02, 72.57], [26.91, 75.79], [31.52, 74.35],
  [24.86, 67.00], [6.92, 79.86], [23.81, 90.41], [27.71, 85.32],
  [39.9, 116.4], [31.2, 121.5], [22.3, 114.2], [35.7, 139.7], [34.7, 135.5],
  [37.5, 127.0], [1.35, 103.8], [13.75, 100.5], [14.6, 120.98], [10.8, 106.6],
  [-6.2, 106.8], [30.6, 104.0], [36.0, 120.3], [43.8, 87.6], [25.0, 121.5],
  [43.0, 141.3], [33.5, 130.4], [3.14, 101.7],
  [51.5, -0.12], [48.85, 2.35], [52.52, 13.4], [41.9, 12.5], [40.4, -3.7],
  [52.37, 4.9], [50.85, 4.35], [47.37, 8.54], [48.2, 16.37], [50.07, 14.4],
  [55.75, 37.6], [59.33, 18.06], [60.17, 24.94], [59.91, 10.75], [55.67, 12.56],
  [37.98, 23.72], [41.0, 28.98], [38.7, -9.14], [53.34, -6.26], [52.23, 21.01],
  [25.2, 55.27], [24.7, 46.67], [29.37, 47.97], [32.08, 34.78], [35.68, 51.38],
  [31.95, 35.93], [33.89, 35.5],
  [30.04, 31.23], [36.8, 10.18], [33.57, -7.58], [9.05, 7.49], [6.52, 3.37],
  [-1.29, 36.82], [-4.44, 15.26], [-26.2, 28.04], [-33.92, 18.42], [14.69, -17.44],
  [0.34, 32.58], [-18.9, 47.5], [5.36, -4.0], [7.94, -1.02],
  [37.77, -122.42], [34.05, -118.24], [40.71, -74.0], [41.87, -87.62], [47.6, -122.33],
  [30.26, -97.74], [25.76, -80.19], [39.73, -104.99], [45.51, -122.67], [32.77, -96.79],
  [43.65, -79.38], [45.5, -73.56], [49.28, -123.12], [19.43, -99.13], [20.65, -103.34],
  [36.16, -115.14], [33.44, -112.07], [29.76, -95.36], [38.9, -77.03], [42.36, -71.05],
  [-23.55, -46.63], [-22.9, -43.17], [-34.6, -58.38], [-33.44, -70.66], [4.71, -74.07],
  [-12.04, -77.04], [-0.18, -78.46], [-16.5, -68.15], [10.48, -66.9], [-25.26, -57.57],
  [-33.86, 151.2], [-37.81, 144.96], [-27.47, 153.02], [-31.95, 115.86],
  [-36.84, 174.76], [-41.28, 174.77]
];

const GLOBAL_HUBS = [
  { name: "San Francisco", lat: 37.77, lon: -122.42 },
  { name: "London", lat: 51.5, lon: -0.12 },
  { name: "Tokyo", lat: 35.68, lon: 139.76 },
  { name: "Berlin", lat: 52.52, lon: 13.4 },
  { name: "Singapore", lat: 1.35, lon: 103.82 },
  { name: "Sydney", lat: -33.86, lon: 151.2 },
];

export const InteractiveGlobe = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const rotationRef = useRef({
    lon: 250,
    lat: -18,
    velLon: 0.28,
    velLat: 0,
  });

  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const pulseRef = useRef(0);
  const arcProgressRef = useRef(0);

  const [isHovered, setIsHovered] = useState(false);
  const [activeHub, setActiveHub] = useState("India (HQ)");

  const latLonToSphere = (latDeg, lonDeg, radius) => {
    const latRad = (latDeg * Math.PI) / 180;
    const lonRad = (lonDeg * Math.PI) / 180;
    return {
      x: radius * Math.cos(latRad) * Math.sin(lonRad),
      y: -radius * Math.sin(latRad),
      z: radius * Math.cos(latRad) * Math.cos(lonRad),
    };
  };

  const rotatePoint = (p, rotLat, rotLon) => {
    const radLon = (rotLon * Math.PI) / 180;
    const radLat = (rotLat * Math.PI) / 180;

    const x1 = p.x * Math.cos(radLon) + p.z * Math.sin(radLon);
    const y1 = p.y;
    const z1 = -p.x * Math.sin(radLon) + p.z * Math.cos(radLon);

    const x2 = x1;
    const y2 = y1 * Math.cos(radLat) - z1 * Math.sin(radLat);
    const z2 = y1 * Math.sin(radLat) + z1 * Math.cos(radLat);

    return { x: x2, y: y2, z: z2 };
  };

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
    sound.playPop();
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMouseRef.current.x;
    const dy = e.clientY - lastMouseRef.current.y;

    rotationRef.current.lon += dx * 0.45;
    rotationRef.current.lat -= dy * 0.45;

    rotationRef.current.lat = Math.max(-65, Math.min(65, rotationRef.current.lat));

    rotationRef.current.velLon = dx * 0.15;
    rotationRef.current.velLat = -dy * 0.15;

    lastMouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      lastMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - lastMouseRef.current.x;
    const dy = e.touches[0].clientY - lastMouseRef.current.y;

    rotationRef.current.lon += dx * 0.45;
    rotationRef.current.lat -= dy * 0.45;
    rotationRef.current.lat = Math.max(-65, Math.min(65, rotationRef.current.lat));

    lastMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const resetToIndia = () => {
    rotationRef.current.lon = 280;
    rotationRef.current.lat = -15;
    rotationRef.current.velLon = 0.25;
    sound.playChirp();
    setActiveHub("Kanpur, India (HQ)");
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationId;
    let width = (canvas.width = 440);
    let height = (canvas.height = 440);

    const resize = () => {
      if (!containerRef.current) return;
      const size = Math.min(containerRef.current.clientWidth || 400, 480);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.width = size * dpr;
      height = canvas.height = size * dpr;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const radius = (width / 2) * 0.72;

      if (!isDraggingRef.current) {
        rotationRef.current.lon += rotationRef.current.velLon;
        rotationRef.current.velLon += (0.28 - rotationRef.current.velLon) * 0.04;
        rotationRef.current.velLat *= 0.95;
        rotationRef.current.lat += rotationRef.current.velLat;
      }

      pulseRef.current += 0.04;
      arcProgressRef.current = (arcProgressRef.current + 0.012) % 1;

      const rotLon = rotationRef.current.lon;
      const rotLat = rotationRef.current.lat;

      const atmGlow = ctx.createRadialGradient(
        cx,
        cy,
        radius * 0.85,
        cx,
        cy,
        radius * 1.3
      );
      atmGlow.addColorStop(0, "rgba(168, 85, 247, 0.22)");
      atmGlow.addColorStop(0.5, "rgba(6, 182, 212, 0.15)");
      atmGlow.addColorStop(1, "rgba(6, 182, 212, 0)");
      ctx.fillStyle = atmGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      const sphereFill = ctx.createRadialGradient(
        cx - radius * 0.35,
        cy - radius * 0.35,
        radius * 0.1,
        cx,
        cy,
        radius
      );
      sphereFill.addColorStop(0, "rgba(22, 18, 38, 0.95)");
      sphereFill.addColorStop(0.7, "rgba(11, 10, 22, 0.98)");
      sphereFill.addColorStop(1, "rgba(5, 5, 12, 1)");
      ctx.fillStyle = sphereFill;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(168, 85, 247, 0.5)";
      ctx.lineWidth = 1.5 * dpr;
      ctx.stroke();

      for (let lon = 0; lon < 360; lon += 30) {
        ctx.beginPath();
        let started = false;
        for (let lat = -80; lat <= 80; lat += 8) {
          const pt = latLonToSphere(lat, lon, radius);
          const rpt = rotatePoint(pt, rotLat, rotLon);

          if (rpt.z > 0) {
            const screenX = cx + rpt.x;
            const screenY = cy + rpt.y;
            if (!started) {
              ctx.moveTo(screenX, screenY);
              started = true;
            } else {
              ctx.lineTo(screenX, screenY);
            }
          } else {
            started = false;
          }
        }
        ctx.strokeStyle = "rgba(168, 85, 247, 0.12)";
        ctx.lineWidth = 0.8 * dpr;
        ctx.stroke();
      }

      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        let started = false;
        for (let lon = 0; lon <= 360; lon += 6) {
          const pt = latLonToSphere(lat, lon, radius);
          const rpt = rotatePoint(pt, rotLat, rotLon);

          if (rpt.z > 0) {
            const screenX = cx + rpt.x;
            const screenY = cy + rpt.y;
            if (!started) {
              ctx.moveTo(screenX, screenY);
              started = true;
            } else {
              ctx.lineTo(screenX, screenY);
            }
          } else {
            started = false;
          }
        }
        ctx.strokeStyle = lat === 0 ? "rgba(6, 182, 212, 0.35)" : "rgba(168, 85, 247, 0.12)";
        ctx.lineWidth = (lat === 0 ? 1.2 : 0.8) * dpr;
        ctx.stroke();
      }

      CONTINENT_DOTS.forEach(([lat, lon]) => {
        const pt = latLonToSphere(lat, lon, radius);
        const rpt = rotatePoint(pt, rotLat, rotLon);

        if (rpt.z > 0) {
          const depthAlpha = Math.max(0.2, rpt.z / radius);
          const screenX = cx + rpt.x;
          const screenY = cy + rpt.y;

          ctx.beginPath();
          ctx.arc(screenX, screenY, 2.2 * dpr, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(6, 182, 212, ${depthAlpha * 0.9})`;
          ctx.shadowBlur = 4 * dpr;
          ctx.shadowColor = "rgba(6, 182, 212, 0.8)";
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      const indiaPt = latLonToSphere(26.45, 80.33, radius);
      const rIndia = rotatePoint(indiaPt, rotLat, rotLon);

      GLOBAL_HUBS.forEach((hub) => {
        const hubPt = latLonToSphere(hub.lat, hub.lon, radius);
        const rHub = rotatePoint(hubPt, rotLat, rotLon);

        if (rIndia.z > -radius * 0.3 || rHub.z > -radius * 0.3) {
          ctx.beginPath();
          const segments = 24;
          let started = false;

          for (let s = 0; s <= segments; s++) {
            const t = s / segments;
            const currentLat = 26.45 + (hub.lat - 26.45) * t;
            const currentLon = 80.33 + (hub.lon - 80.33) * t;
            const loft = Math.sin(t * Math.PI) * (radius * 0.22);

            const arcPt = latLonToSphere(currentLat, currentLon, radius + loft);
            const rArc = rotatePoint(arcPt, rotLat, rotLon);

            if (rArc.z > 0) {
              const sx = cx + rArc.x;
              const sy = cy + rArc.y;
              if (!started) {
                ctx.moveTo(sx, sy);
                started = true;
              } else {
                ctx.lineTo(sx, sy);
              }
            } else {
              started = false;
            }
          }

          ctx.strokeStyle = "rgba(168, 85, 247, 0.32)";
          ctx.lineWidth = 1 * dpr;
          ctx.stroke();

          const pulseT = (arcProgressRef.current + hub.lat * 0.01) % 1;
          const pLat = 26.45 + (hub.lat - 26.45) * pulseT;
          const pLon = 80.33 + (hub.lon - 80.33) * pulseT;
          const pLoft = Math.sin(pulseT * Math.PI) * (radius * 0.22);
          const pPt = latLonToSphere(pLat, pLon, radius + pLoft);
          const rp = rotatePoint(pPt, rotLat, rotLon);

          if (rp.z > 0) {
            ctx.beginPath();
            ctx.arc(cx + rp.x, cy + rp.y, 3 * dpr, 0, Math.PI * 2);
            ctx.fillStyle = "#ec4899";
            ctx.shadowBlur = 8 * dpr;
            ctx.shadowColor = "#ec4899";
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }

        if (rHub.z > 0) {
          const hx = cx + rHub.x;
          const hy = cy + rHub.y;
          ctx.beginPath();
          ctx.arc(hx, hy, 2.5 * dpr, 0, Math.PI * 2);
          ctx.fillStyle = "#a855f7";
          ctx.fill();
        }
      });

      if (rIndia.z > 0) {
        const ix = cx + rIndia.x;
        const iy = cy + rIndia.y;

        const pulseSize = (Math.sin(pulseRef.current) * 0.5 + 0.5) * 14 * dpr + 4 * dpr;
        const pulseAlpha = 1 - (pulseSize / (18 * dpr));

        ctx.beginPath();
        ctx.arc(ix, iy, pulseSize, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(236, 72, 153, ${pulseAlpha * 0.9})`;
        ctx.lineWidth = 1.8 * dpr;
        ctx.stroke();

        const pulseSize2 = ((Math.sin(pulseRef.current + 1.5) * 0.5 + 0.5) * 12 * dpr) + 3 * dpr;
        ctx.beginPath();
        ctx.arc(ix, iy, pulseSize2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(6, 182, 212, ${0.8 - (pulseSize2 / (15 * dpr))})`;
        ctx.lineWidth = 1.2 * dpr;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(ix, iy, 4.5 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = "#ec4899";
        ctx.shadowBlur = 12 * dpr;
        ctx.shadowColor = "#ec4899";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(ix, iy, 2 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.shadowBlur = 0;

        const tagText = "📍 Janvi (Kanpur, India)";
        ctx.font = `bold ${10 * dpr}px sans-serif`;
        const textWidth = ctx.measureText(tagText).width;

        ctx.fillStyle = "rgba(15, 12, 30, 0.85)";
        ctx.strokeStyle = "rgba(236, 72, 153, 0.7)";
        ctx.lineWidth = 1 * dpr;
        const boxX = ix - textWidth / 2 - 8 * dpr;
        const boxY = iy - 28 * dpr;
        const boxW = textWidth + 16 * dpr;
        const boxH = 18 * dpr;

        ctx.beginPath();
        ctx.roundRect(boxX, boxY, boxW, boxH, 4 * dpr);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.fillText(tagText, ix - textWidth / 2, iy - 15 * dpr);
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div
      className="interactive-globe-wrapper"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="globe-canvas-container">
        <canvas
          ref={canvasRef}
          className="interactive-globe-canvas"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          title="Click and drag to rotate the 3D Earth"
        />

        <div className="globe-meta-pill">
          <span className="globe-live-indicator"></span>
          <span>{isHovered ? `Focus: ${activeHub}` : "3D World • Drag to Spin"}</span>
          <button
            className="globe-reset-btn"
            onClick={resetToIndia}
            title="Recenter view on India"
          >
            Reset 📍
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveGlobe;
