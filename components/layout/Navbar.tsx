"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSiteConfig } from "@/context/SiteConfigContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { config, linkTo, stripBase } = useSiteConfig();
  const {
    firmPrefix,
    firmNameShort,
    firmSubtitle,
    phoneWhatsApp,
    navLinks,
    mobileNavLinks,
  } = config;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pathname = usePathname();
  const pagePath = stripBase(pathname);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`sticky top-0 z-40 bg-[#f8fafc] h-18 flex items-center transition-shadow duration-300 ${scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)]" : ""}`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href={linkTo("/")} className="flex flex-col">
          <span className="font-heading text-lg font-bold tracking-tight">
            Vibuddy
          </span>
        </Link>
        <Link
          href={"https://vibuddy.com"}
          className="font-heading text-[14px] font-semibold bg-navy-deep text-primary-foreground px-5 py-2 rounded-full hover:bg-navy-mid transition-all duration-250 shadow-[0_4px_20px_rgba(10,42,110,0.2)] hover:shadow-[0_6px_26px_rgba(10,42,110,0.28)] active:scale-[0.98]"
          target="_blank"
        >
          Visit Our Website
        </Link>
      </div>
    </motion.header>
  );
};

export default Navbar;
