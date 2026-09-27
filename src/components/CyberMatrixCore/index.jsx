import React, { useEffect, useRef, useState } from "react";
import "./CyberMatrixCore.css";
import { FiCode, FiTerminal, FiCheckCircle, FiCpu, FiPlay } from "react-icons/fi";
import { sound } from "../../utils/soundEffects";

const codeSnippets = [
  {
    lang: "Python / Django",
    file: "developer.py",
    code: `class FullStackEngineer:
    name = "Janvi Chaturvedi"
    location = "Kanpur, India 📍"
    stack = ["Python", "Django", "React", "PostgreSQL"]
    status = "AVAILABLE_FOR_HIRE"

    def deploy_impact(self):
        return {
            "prs_merged": 6,
            "apps_built": 5,
            "quality": "100% Production Grade"
        }`
  },
  {
    lang: "React / Architecture",
    file: "AppCore.jsx",
    code: `const JanviPortfolio = () => {
  const [engineer] = useState({
    role: "Full-Stack Software Engineer",
    strengths: "Clean UI + Scalable APIs",
    openToWork: true
  });

  return <ScalableApps impact={engineer} />;
};`
  }
];

const CyberMatrixCore = () => {
  const [activeSnippetIdx, setActiveSnippetIdx] = useState(0);
  const [typedText, setTypedText] = useState("");
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Typewriter effect for code block
  useEffect(() => {
    const fullText = codeSnippets[activeSnippetIdx].code;
    let i = 0;
    setTypedText("");

    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 18);

    return () => clearInterval(timer);
  }, [activeSnippetIdx]);

  // 3D Canvas Matrix Mesh Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;
    const width = 160;
    const height = 160;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // 3D Polyhedron Nodes (Icosahedron / Quantum Cube)
    const nodes = [
      { x: -1, y: -1, z: -1 }, { x: 1, y: -1, z: -1 },
      { x: 1, y: 1, z: -1 },  { x: -1, y: 1, z: -1 },
      { x: -1, y: -1, z: 1 },  { x: 1, y: -1, z: 1 },
      { x: 1, y: 1, z: 1 },   { x: -1, y: 1, z: 1 },
      { x: 0, y: -1.4, z: 0 }, { x: 0, y: 1.4, z: 0 },
      { x: -1.4, y: 0, z: 0 }, { x: 1.4, y: 0, z: 0 }
    ];

    const edges = [
      [0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],
      [0,4],[1,5],[2,6],[3,7],[8,0],[8,1],[8,4],[8,5],
      [9,2],[9,3],[9,6],[9,7],[10,0],[10,3],[10,4],[10,7],
      [11,1],[11,2],[11,5],[11,6]
    ];

    let rotX = 0;
    let rotY = 0;
    let animId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      rotX += 0.008;
      rotY += 0.012;

      const isLightMode = document.documentElement.getAttribute("data-theme") === "light";
      const strokeColor = isLightMode ? "rgba(0, 0, 0, 0.25)" : "rgba(255, 255, 255, 0.35)";
      const nodeColor = isLightMode ? "#000000" : "#ffffff";

      const projected = nodes.map(n => {
        // Rotate Y
        let x1 = n.x * Math.cos(rotY) - n.z * Math.sin(rotY);
        let z1 = n.z * Math.cos(rotY) + n.x * Math.sin(rotY);
        let y1 = n.y;

        // Rotate X
        let y2 = y1 * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = z1 * Math.cos(rotX) + y1 * Math.sin(rotX);

        const scale = 180 / (220 + z2);
        return {
          x: x1 * scale * 40 + width / 2,
          y: y2 * scale * 40 + height / 2,
          z: z2,
          scale
        };
      });

      // Draw Edges
      ctx.beginPath();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.2;

      edges.forEach(([i, j]) => {
        ctx.moveTo(projected[i].x, projected[i].y);
        ctx.lineTo(projected[j].x, projected[j].y);
      });
      ctx.stroke();

      // Draw Nodes
      projected.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, 3 * p.scale), 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  // Parallax Tilt on Mouse Move
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const tiltX = (y / (rect.height / 2)) * -6;
    const tiltY = (x / (rect.width / 2)) * 6;
    containerRef.current.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <div
      ref={containerRef}
      className="cyber-workbench-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating Status Telemetry Badges */}
      <div className="telemetry-badge telemetry-badge-top">
        <FiCheckCircle className="badge-icon success" />
        <span>API Gateway • 200 OK</span>
      </div>

      <div className="telemetry-badge telemetry-badge-bottom">
        <FiCpu className="badge-icon cpu" />
        <span>Django + React • 60 FPS</span>
      </div>

      {/* Terminal Window Header */}
      <div className="workbench-header">
        <div className="window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>

        <div className="window-tabs">
          {codeSnippets.map((snip, idx) => (
            <button
              key={idx}
              onClick={() => {
                sound.playPop();
                setActiveSnippetIdx(idx);
              }}
              className={`tab-btn ${activeSnippetIdx === idx ? "active" : ""}`}
            >
              <FiCode className="tab-icon" />
              <span>{snip.file}</span>
            </button>
          ))}
        </div>

        <div className="header-status">
          <FiTerminal className="term-icon" />
          <span>janvi@dev-core</span>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="workbench-body">
        <div className="code-editor-side">
          <div className="code-line-numbers">
            {typedText.split("\n").map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>

          <pre className="code-display">
            <code>
              {typedText}
              <span className="code-cursor">|</span>
            </code>
          </pre>
        </div>

        {/* 3D Quantum Mesh Node Side */}
        <div className="workbench-quantum-side">
          <div className="quantum-canvas-wrapper">
            <canvas ref={canvasRef} className="quantum-mesh-canvas" />
            <div className="quantum-core-glow" />
          </div>

          <div className="quantum-info-pill">
            <FiPlay className="play-icon" />
            <span>Core Active</span>
          </div>
        </div>
      </div>

      {/* Terminal Footer Bar */}
      <div className="workbench-footer">
        <div className="footer-left">
          <span className="status-dot"></span>
          <span>Full-Stack Environment Active</span>
        </div>
        <div className="footer-right">
          <span>UTF-8</span>
          <span>Python 3.11</span>
        </div>
      </div>
    </div>
  );
};

export default CyberMatrixCore;
