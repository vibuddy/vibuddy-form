"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useSiteConfig } from "@/context/SiteConfigContext";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);
  const { config } = useSiteConfig();
  const { phone, email, address, googleMapUrl, socialMedia, footerColumns, copyrightYear, firmNameLegal } = config;

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-5">
              Business Registration
            </h4>
            {footerColumns.businessRegistration.map((l, i) => (
              <a
                key={i}
                href="#"
                className="block font-body text-sm text-white/75 hover:text-white hover:translate-x-1 transition-all duration-200 mb-2"
              >
                {l}
              </a>
            ))}
          </div>
          {/* Col 2 */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-5">Licenses</h4>
            {footerColumns.licenses.map((l, i) => (
              <a
                key={i}
                href="#"
                className="block font-body text-sm text-white/75 hover:text-white hover:translate-x-1 transition-all duration-200 mb-2"
              >
                {l}
              </a>
            ))}
          </div>
          {/* Col 3 */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-5">Audit & Tax</h4>
            {footerColumns.auditTax.map((l, i) => (
              <a
                key={i}
                href="#"
                className="block font-body text-sm text-white/75 hover:text-white hover:translate-x-1 transition-all duration-200 mb-2"
              >
                {l}
              </a>
            ))}
          </div>
          {/* Col 4 */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-5">Get Contact</h4>
            <div className="space-y-3 font-body text-sm text-white/85">
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" /> {phone}
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" /> {email}
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {address}
              </p>
              <a
                href={googleMapUrl}
                className="flex items-center gap-2 underline hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-4 h-4" /> Locate us on Google Map
              </a>
            </div>
            <div className="flex gap-4 mt-5">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white/80 hover:text-cta hover:scale-125 transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-[13px] text-white/60">
            Copyright © {copyrightYear} {firmNameLegal}. All Rights Reserved
          </p>
         
        </div>
      </div>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-8 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white z-40 transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
