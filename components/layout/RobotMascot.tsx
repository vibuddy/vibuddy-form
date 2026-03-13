"use client";
import { useState, useEffect } from "react";
import ChatWindow from "./ChatWindow";
import ChatGreetingBubble from "./ChatGreetingBubble";

const RobotMascot = () => {
  const [settled, setSettled] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSettled(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Reset bubble when chat closes
  useEffect(() => {
    if (!chatOpen) {
      setBubbleDismissed(false);
    }
  }, [chatOpen]);

  return (
    <>
     {/* Corner robot button */}
      <div
        className={`fixed bottom-24 right-6 z-6000 transition-all duration-500 ${settled ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
      >
        {/* Chat Window */}
        {chatOpen && (
          <div className="absolute bottom-20 right-0 z-5000">
            <ChatWindow onClose={() => setChatOpen(false)} />
          </div>
        )}

        {/* Greeting bubble — hidden when chat is open or dismissed */}
        {!chatOpen && !bubbleDismissed && (
          <div
            className="absolute bottom-1/2 translate-y-1/2"
            style={{ right: "calc(100% + 12px)" }}
          >
            <ChatGreetingBubble onDismiss={() => setBubbleDismissed(true)} />
          </div>
        )}

        {/* Robot Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="relative flex h-14.75 w-14.75 items-center justify-center rounded-full bg-card border border-primary/20 animate-glow-pulse animate-float cursor-pointer hover:scale-110 transition-transform"
          aria-label="Open AI chat"
        >
          <img src="/download-removebg-preview.png" alt="kanjoos" className="w-8 h-8" />
        </button>
      </div>
    </>
  );
};

export default RobotMascot;
