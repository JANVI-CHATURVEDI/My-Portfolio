import React, { useState } from "react";
import "./SoundToggle.css";
import { sound } from "../../utils/soundEffects";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export const SoundToggle = () => {
  const [enabled, setEnabled] = useState(sound.enabled);

  const toggleSound = () => {
    const newState = sound.toggle();
    setEnabled(newState);
  };

  return (
    <button
      className={`sound-toggle-btn ${enabled ? "active" : "muted"}`}
      onClick={toggleSound}
      title={enabled ? "Mute interactive sound effects" : "Enable interactive sound effects"}
      aria-label="Toggle Sound Effects"
    >
      {enabled ? <FaVolumeUp size={16} /> : <FaVolumeMute size={16} />}
      <span className="sound-toggle-text">{enabled ? "SFX On" : "SFX Off"}</span>
    </button>
  );
};

export default SoundToggle;
