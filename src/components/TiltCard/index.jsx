import React, { useRef } from "react";
import "./TiltCard.css";
import { sound } from "../../utils/soundEffects";

export const TiltCard = ({ children, className = "", maxTilt = 8 }) => {
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

    if (glareRef.current) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.12), transparent 60%)`;
      glareRef.current.style.opacity = "1";
    }
  };

  const handleMouseEnter = () => {
    sound.playHover();
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }
    if (glareRef.current) {
      glareRef.current.style.opacity = "0";
    }
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div ref={glareRef} className="tilt-glare-effect" />
    </div>
  );
};

export default TiltCard;
