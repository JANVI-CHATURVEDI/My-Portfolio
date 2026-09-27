import React, { useState, useRef, useEffect } from "react";
import { FiMessageSquare, FiX, FiSend, FiUser, FiCpu, FiKey, FiSettings } from "react-icons/fi";
import "./AssistantWidget.css";
import { dataportfolio, skills, introdata, contactConfig, socialprofils } from "../../content_option";
import { sound } from "../../utils/soundEffects";

const JANVI_CONTEXT_PROMPT = `
You are Nexa, the personal AI assistant for Janvi Chaturvedi's developer portfolio.
Full Context about Janvi Chaturvedi:
- Role: Full-Stack Software Engineer & Open-Source Contributor.
- Location: Kanpur, India (Open to Remote & Full-Time Global Roles).
- Contact Email: ${contactConfig.YOUR_EMAIL}
- Socials: GitHub (${socialprofils.github}), LinkedIn (${socialprofils.linkedin}), Twitter (${socialprofils.twitter}).
- Bio: ${introdata.description}
- Key Skills:
  - Backend: Python, Django, Java, PostgreSQL, SQLite, REST APIs.
  - Frontend: JavaScript (ES6+), React 18, HTML5, CSS3, Tailwind CSS, Bootstrap.
  - Databases & Cloud Tools: PostgreSQL, SQLite, Firebase, Appwrite, Git, GitHub, Leaflet.js, Figma.
- Professional Experience:
  1. Backend Developer Intern (Django) at Ayursh (Mar 2026 - Present): Built production API endpoints, implemented dynamic filters, resolved application bugs.
  2. Open Source Contributor (2025 - Present): 6+ merged pull requests across Zulip, CircuitVerse, wger, and bugOpsX.
  3. UI/UX Contributor at LearnAxis (July 2025): Designed UI/UX for college management system.
- Featured Projects:
  1. Tweet: Full-stack microblogging platform (Django, Python, Tailwind, PostgreSQL).
  2. DevLinkTree: Drag-and-drop link builder (HTML, Tailwind, Vanilla JS).
  3. One-Time Secret App: Secure 1-read messaging app with Appwrite backend (React, Appwrite, Tailwind).
  4. Coffeeshop Landing Page: Modern responsive landing page.
  5. Travel Destination Explorer: Map-based explorer (React, Tailwind, Leaflet.js).

Instructions:
- Be friendly, concise, intelligent, professional, and enthusiastic.
- Answer user queries specifically using Janvi's background data.
- If asked about contacting her, provide her email: ${contactConfig.YOUR_EMAIL}.
`;

const AssistantWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_GEMINI_API_KEY || "");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm Nexa, Janvi's personal AI Assistant. Ask me anything about her skills, projects, or background!" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  const toggleChat = () => {
    sound.playPop();
    setIsOpen(!isOpen);
  };

  // Call Gemini REST API directly using gemini-1.5-flash
  const callGeminiAPI = async (userPrompt) => {
    try {
      const activeKey = apiKey || process.env.REACT_APP_GEMINI_API_KEY;
      if (!activeKey) return null;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${activeKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  { text: `${JANVI_CONTEXT_PROMPT}\n\nUser Question: ${userPrompt}` }
                ]
              }
            ]
          })
        }
      );

      const data = await response.json();
      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        return data.candidates[0].content.parts[0].text;
      }
      return null;
    } catch (err) {
      console.warn("Gemini API call fallback:", err);
      return null;
    }
  };

  // Local Grounded Fallback Engine
  const getGroundedResponse = (input) => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("skill") || lowerInput.includes("tech") || lowerInput.includes("stack") || lowerInput.includes("know")) {
      const topSkills = skills.map(s => s.name).join(", ");
      return `Janvi is skilled in: ${topSkills}. Her core strengths are Python, Django, React, and PostgreSQL!`;
    }
    if (lowerInput.includes("project") || lowerInput.includes("portfolio") || lowerInput.includes("work") || lowerInput.includes("build")) {
      const pNames = dataportfolio.map(p => p.name).join(", ");
      return `Janvi has built awesome projects including: ${pNames}. Check out the Portfolio section to try live demos!`;
    }
    if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("hire") || lowerInput.includes("reach") || lowerInput.includes("mail")) {
      return `You can reach Janvi directly at ${contactConfig.YOUR_EMAIL}. She is open to full-time engineering roles and remote opportunities!`;
    }
    if (lowerInput.includes("experience") || lowerInput.includes("intern") || lowerInput.includes("job") || lowerInput.includes("work history") || lowerInput.includes("pr") || lowerInput.includes("open source")) {
      return `Janvi is currently a Backend Developer Intern at Ayursh working with Django & APIs. She also has 6+ merged Open Source PRs across Zulip, CircuitVerse, wger, and bugOpsX!`;
    }
    if (lowerInput.includes("about") || lowerInput.includes("who") || lowerInput.includes("janvi")) {
      return introdata.description;
    }
    if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
      return "Hello! I'm Nexa. Ask me anything about Janvi's projects, experience, or skills!";
    }
    return `Janvi Chaturvedi is a Full-Stack Engineer from Kanpur skilled in Python, Django, React & PostgreSQL. Feel free to ask me about her projects, experience, or contact info (${contactConfig.YOUR_EMAIL})!`;
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { sender: "user", text: userMessage }]);
    setInputValue("");
    setIsLoading(true);
    sound.playPop();

    // Try Gemini API first if key exists
    let botReply = await callGeminiAPI(userMessage);

    // Fall back to grounded engine if no API key or API call returned null
    if (!botReply) {
      botReply = getGroundedResponse(userMessage);
    }

    setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
    setIsLoading(false);
    sound.playSuccess();
  };

  return (
    <div className={`assistant-wrapper ${isOpen ? "open" : ""}`}>
      {/* Chat Window */}
      <div className={`assistant-window ${isOpen ? "active" : ""}`}>
        <div className="assistant-header">
          <div className="assistant-title">
            <FiCpu className="bot-icon" />
            <span>Nexa • AI Assistant</span>
          </div>

          <div className="header-actions">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="icon-btn"
              title="Gemini API Settings"
            >
              <FiSettings />
            </button>
            <button onClick={toggleChat} className="icon-btn">
              <FiX />
            </button>
          </div>
        </div>

        {/* Gemini Settings Drawer */}
        {showSettings && (
          <div className="settings-drawer">
            <div className="settings-title">
              <FiKey /> <span>Gemini API Key (Optional)</span>
            </div>
            <p className="settings-desc">
              Enter a Google Gemini API Key to power Nexa with live Gemini LLM inference.
            </p>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="key-input"
            />
          </div>
        )}

        <div className="assistant-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message-bubble-wrapper ${msg.sender}`}>
              {msg.sender === "bot" && <div className="avatar bot-avatar"><FiCpu /></div>}
              <div className={`message-bubble ${msg.sender}`}>
                {msg.text}
              </div>
              {msg.sender === "user" && <div className="avatar user-avatar"><FiUser /></div>}
            </div>
          ))}

          {isLoading && (
            <div className="message-bubble-wrapper bot">
              <div className="avatar bot-avatar"><FiCpu /></div>
              <div className="message-bubble bot typing">
                <span>Nexa is thinking...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="assistant-input-area">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask Nexa about Janvi..."
            className="chat-input"
            disabled={isLoading}
          />
          <button type="submit" className="send-btn" disabled={!inputValue.trim() || isLoading}>
            <FiSend />
          </button>
        </form>
      </div>

      {/* Floating Action Button */}
      <button
        className={`assistant-fab ${isOpen ? "hidden" : ""}`}
        onClick={toggleChat}
        aria-label="Open Nexa AI Assistant"
      >
        <FiMessageSquare className="fab-icon" />
        <span className="fab-tooltip">Chat with Nexa</span>
      </button>
    </div>
  );
};

export default AssistantWidget;
