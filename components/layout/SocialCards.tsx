"use client";
import {
  Instagram,
  Phone,
  Globe,
  Mail,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { useSiteConfig } from "@/context/SiteConfigContext";

const iconMap: Record<string, typeof Instagram> = {
  Instagram,
  WhatsApp: MessageCircle,
  LinkedIn: Linkedin,
  Email: Mail,
  "Call Us": Phone,
  Website: Globe,
};

const bgMap: Record<string, string> = {
  Instagram: "linear-gradient(135deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
  WhatsApp: "#25D366",
  LinkedIn: "#0A66C2",
  Email: "linear-gradient(135deg, #EA4335, #FBBC05)",
  "Call Us": "linear-gradient(135deg, #0A2A6E, #1D4ED8)",
  Website: "linear-gradient(135deg, #7C3AED, #4F46E5)",
};

const SocialCards = () => {
  const { config } = useSiteConfig();
  const cards = [
    { label: "Instagram", text: config.socialMedia.instagram.handle },
    { label: "WhatsApp", text: config.phoneDisplay },
    { label: "LinkedIn", text: config.socialMedia.linkedin.handle },
    { label: "Email", text: config.email },
    { label: "Call Us", text: config.phoneDisplay },
    { label: "Website", text: config.socialMedia.website.display },
  ].map((c) => ({
    bg: bgMap[c.label] || "#333",
    icon: iconMap[c.label] || Globe,
    label: c.label,
    text: c.text,
  }));

  const renderCards = () =>
    cards.map((card, i) => {
      const Icon = card.icon;
      return (
        <div
          key={i}
          className="shrink-0 w-45 h-30 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105 mx-3"
          style={{ background: card.bg }}
        >
          <Icon className="w-9 h-9 text-white" />
          <span className="font-body text-xs font-bold text-white">
            {card.label}
          </span>
          <span className="font-body text-[11px] text-white/85">
            {card.text}
          </span>
        </div>
      );
    });

  return (
    <section className="py-10 bg-black overflow-hidden ">
      <div className="animate-marquee-reverse flex md:hover:paused">
        <div className="flex">{renderCards()}</div>
        <div className="flex">{renderCards()}</div>
      </div>
    </section>
  );
};

export default SocialCards;
