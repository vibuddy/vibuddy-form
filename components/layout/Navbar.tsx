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
  const { firmPrefix, firmNameShort, firmSubtitle, phoneWhatsApp, navLinks, mobileNavLinks } = config;

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
      className={`sticky top-0 z-40 bg-card h-18 flex items-center transition-shadow duration-300 ${scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)]" : ""}`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href={linkTo("/")} className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-heading text-[22px] font-bold text-primary">
              {firmPrefix}
            </span>
            <span className="font-body text-[14px] tracking-widest text-primary font-normal">
              {firmNameShort}
            </span>
          </div>
          <div className="w-full h-px bg-primary/20 my-0.5" />
          <span className="font-body text-[10px] tracking-[0.2em] text-muted-foreground">
            {firmSubtitle}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href={
              pagePath === "/"
                ? linkTo(navLinks.services.href)
                : linkTo(navLinks.services.homeFallback)
            }
            className={`font-body text-[15px] transition-colors relative group ${
              pagePath === "/" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
            }`}
          >
            {navLinks.services.label}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
              pagePath === "/" ? "w-full" : "w-0 group-hover:w-full"
            }`} />
          </Link>
          <Link
            href={linkTo(navLinks.about.href)}
            className={`font-body text-[15px] transition-colors relative group ${
              pagePath === "/about" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
            }`}
          >
            {navLinks.about.label}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
              pagePath === "/about" ? "w-full" : "w-0 group-hover:w-full"
            }`} />
          </Link>
          <Link
            href={linkTo(navLinks.blogs.href)}
            className={`font-body text-[15px] transition-colors relative group ${
              pagePath === "/blogs" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
            }`}
          >
            {navLinks.blogs.label}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
              pagePath === "/blogs" ? "w-full" : "w-0 group-hover:w-full"
            }`} />
          </Link>
          <Link
            href={linkTo(navLinks.join.href)}
            className={`font-body text-[15px] transition-colors relative group ${
              pagePath === "/join-us" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
            }`}
          >
            {navLinks.join.label}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
              pagePath === "/join-us" ? "w-full" : "w-0 group-hover:w-full"
            }`} />
          </Link>
          <Link
            href={linkTo(navLinks.contact.href)}
            className={`font-body text-[15px] transition-colors relative group ${
              pagePath === "/contact-us" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
            }`}
          >
            {navLinks.contact.label}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
              pagePath === "/contact-us" ? "w-full" : "w-0 group-hover:w-full"
            }`} />
          </Link>
          <a
            href={`https://wa.me/${phoneWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#21c45d] hover:bg-[#15ae4d] text-accent-foreground font-body text-[14px] font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(34,197,94,0.4)] hover:shadow-[0_6px_24px_rgba(34,197,94,0.5)]"
          >
            {/* <MessageCircle className="w-4 h-4" /> */}
            <svg
              className="w-4.5 h-4.5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contact Us
          </a>
        </nav>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href={`tel:+${phoneWhatsApp}`}
            className="flex items-center gap-1.5 border border-primary text-primary font-body text-[13px] font-semibold px-3.5 py-1.5 rounded-full"
          >
            <Phone className="w-3.5 h-3.5" />
            Call<span className="hidden min-[430px]:inline"> Us</span>
          </a>
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy-dark z-100"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-70 bg-card z-100 p-6 flex flex-col gap-6"
            >
              <button className="self-end" onClick={() => setMobileOpen(false)}>
                <X className="w-6 h-6 text-foreground" />
              </button>
              {mobileNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={linkTo(link.href)}
                  onClick={() => setMobileOpen(false)}
                  className={`font-body text-lg ${
                    pagePath === link.href
                      ? "text-primary font-semibold border-l-2 border-primary pl-3"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
             
              <a
                href={`tel:+${phoneWhatsApp}`}
                className="flex items-center gap-2 justify-center border-2 border-primary text-primary font-body font-semibold px-6 py-3 rounded-full"
              >
                <Phone className="w-4.5 h-4.5" />
                Call<span className="hidden min-[430px]:inline"> Us</span>
              </a>
              <a
                href={`https://wa.me/${phoneWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#21c45d] text-accent-foreground font-body font-semibold px-6 py-3 rounded-full justify-center"
              >
                <svg
                  className="w-4.5 h-4.5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact Us
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
