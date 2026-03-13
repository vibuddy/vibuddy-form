"use client";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const MESSAGES = [
    "Hello, how can I help you?",
    "Need help with ITR filing?",
    "Have questions about GST compliance?",
    "Looking for tax planning advice?",
    "We are here to help. Ask us anything.",
];

const TYPEWRITER_SPEED = 35;
const HOLD_DURATION = 3000;
const FADE_DURATION = 300;

type Phase = "popping-in" | "typing" | "holding" | "fading-out";

interface ChatGreetingBubbleProps {
  onDismiss?: () => void;
}

const ChatGreetingBubble = ({ onDismiss }: ChatGreetingBubbleProps) => {
    const [msgIndex, setMsgIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [phase, setPhase] = useState<Phase>("popping-in");
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const clear = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    useEffect(() => {
        clear();
        setDisplayedText("");
        setPhase("popping-in");

        timeoutRef.current = setTimeout(() => {
            setPhase("typing");
            const fullText = MESSAGES[msgIndex];
            let charIdx = 0;

            intervalRef.current = setInterval(() => {
                charIdx++;
                setDisplayedText(fullText.slice(0, charIdx));

                if (charIdx >= fullText.length) {
                    clearInterval(intervalRef.current!);
                    setPhase("holding");

                    timeoutRef.current = setTimeout(() => {
                        setPhase("fading-out");

                        timeoutRef.current = setTimeout(() => {
                            setMsgIndex((prev) => (prev + 1) % MESSAGES.length);
                        }, FADE_DURATION);
                    }, HOLD_DURATION);
                }
            }, TYPEWRITER_SPEED);
        }, 420);

        return clear;
    }, [msgIndex]);

    const isVisible = phase !== "fading-out";

    return (
        <>
            <style>{`
                @keyframes bubble-pop-in {
                    0%   { opacity: 0; transform: scale(0.85) translateY(4px); }
                    100% { opacity: 1; transform: scale(1) translateY(0); }
                }
                @keyframes blink-cursor {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0; }
                }
            `}</style>
            <div
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: phase === "fading-out" ? "scale(0.95)" : "scale(1)",
                    transition: phase === "fading-out"
                        ? `opacity ${FADE_DURATION}ms ease, transform ${FADE_DURATION}ms ease`
                        : "none",
                    animation: phase === "popping-in" ? "bubble-pop-in 350ms ease-out forwards" : "none",
                    maxWidth: "calc(100vw - 110px)",
                    width: "max-content",
                    position: "relative",
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    padding: "0",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
                    fontSize: "13px",
                    color: "#1e293b",
                    lineHeight: "1.5",
                }}
            >
                {/* Close button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDismiss?.();
                    }}
                    style={{
                        position: "absolute",
                        top: "-6px",
                        left: "-6px",
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        backgroundColor: "#e2e8f0",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        padding: 0,
                        zIndex: 10,
                    }}
                    aria-label="Dismiss"
                >
                    <X size={10} color="#64748b" strokeWidth={2.5} />
                </button>

                {/* Message content */}
                <div style={{ padding: "10px 14px", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                    <span>{displayedText}</span>
                    {phase === "typing" && (
                        <span
                            style={{
                                display: "inline-block",
                                width: "1.5px",
                                height: "0.9em",
                                backgroundColor: "#64748b",
                                marginLeft: "1px",
                                verticalAlign: "text-bottom",
                                animation: "blink-cursor 0.7s step-end infinite",
                            }}
                        />
                    )}
                </div>

                {/* Tail pointing right */}
                <div
                    style={{
                        position: "absolute",
                        right: "-7px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 0,
                        height: 0,
                        borderTop: "7px solid transparent",
                        borderBottom: "7px solid transparent",
                        borderLeft: "8px solid #ffffff",
                    }}
                />
            </div>
        </>
    );
};

export default ChatGreetingBubble;
