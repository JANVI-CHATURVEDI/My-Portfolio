import React, { useEffect, useState } from "react";
import "./ScrollProgress.css";

export const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollPercentage(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container" aria-hidden="true">
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollPercentage}%` }}
      >
        <div className="scroll-progress-glow"></div>
      </div>
    </div>
  );
};

export default ScrollProgress;
