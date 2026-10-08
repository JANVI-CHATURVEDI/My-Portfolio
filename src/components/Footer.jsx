import React, { useEffect, useState } from "react";
import { socialprofils, logotext } from "../content_option";
import { incrementVisitors } from "./firebase";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiFileText } from "react-icons/fi";

export default function Footer() {
  const [visitors, setVisitors] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    incrementVisitors()
      .then((count) => setVisitors(count))
      .catch((err) => console.error(err));

    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="mt-16 pt-8 pb-12 border-t border-stone-200 dark:border-stone-800 text-xs text-stone-500">
      <div className="narrow-container space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <a
              href={socialprofils.email}
              className="inline-flex items-center gap-1.5 text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
            >
              <FiMail size={14} />
              <span>Email</span>
            </a>
            <a
              href={socialprofils.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
            >
              <FiFileText size={14} />
              <span>Resume</span>
            </a>
            <a
              href={socialprofils.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
            >
              <FiGithub size={14} />
              <span>GitHub</span>
            </a>
            <a
              href={socialprofils.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
            >
              <FiLinkedin size={14} />
              <span>LinkedIn</span>
            </a>
            <a
              href={socialprofils.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
            >
              <FiTwitter size={14} />
              <span>Twitter</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono text-stone-400">
            <span>Kanpur, IN</span>
            <span>•</span>
            <span>{time} IST</span>
            {visitors > 0 && (
              <>
                <span>•</span>
                <span>#{visitors}</span>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-stone-400 pt-2 border-t border-stone-200/50 dark:border-stone-800/50">
          <span>© {new Date().getFullYear()} {logotext} Chaturvedi</span>
          <span className="italic font-serif">Crafted with care</span>
        </div>
      </div>
    </footer>
  );
}