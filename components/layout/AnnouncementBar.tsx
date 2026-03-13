"use client";
import { Shield } from "lucide-react";
import { useSiteConfig } from "@/context/SiteConfigContext";

const AnnouncementBar = () => {
  const { config } = useSiteConfig();
  const content = config.announcementItems.map((item, i) => (
    <span key={i} className="flex items-center gap-2 mx-4 whitespace-nowrap">
      <Shield className="w-3 h-3" />
      {item}
    </span>
  ));

  return (
    <div className="w-full h-9.5 bg-primary text-white overflow-hidden flex items-center relative z-40">
      <div className="animate-marquee flex items-center font-body text-[13px] font-medium tracking-[0.08em] uppercase">
        <div className="flex items-center">
          {content}
          {content}
        </div>
        <div className="flex items-center">
          {content}
          {content}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
