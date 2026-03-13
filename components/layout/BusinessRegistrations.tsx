"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useSiteConfig } from "@/context/SiteConfigContext";

const INITIAL_VISIBLE = 8;

const BusinessRegistrations = () => {
  const [showAll, setShowAll] = useState(false);
  const { config } = useSiteConfig();
  const { businessRegistrations, phoneWhatsApp, businessRegistrationStartingPrice, businessRegistrationInquiryLabel } = config;
  const visible = showAll ? businessRegistrations : businessRegistrations.slice(0, INITIAL_VISIBLE);

  return (
  <section id="services" className="bg-primary py-20 px-6 md:px-10 relative">
    {/* WhatsApp badge */}
    

    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-[42px] text-white font-bold">
          Business Registrations
        </h2>
        <div className="w-15 h-0.75 bg-gold mx-auto mt-4" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {visible.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="bg-card rounded-2xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 flex flex-col"
          >
            <h3 className="font-body text-base font-bold text-dark-text">
              {s.title}
            </h3>
            <p className="font-body text-[13px] text-slate-text leading-relaxed mt-2.5 flex-1">
              {s.desc}
            </p>
            <p className="font-body text-[13px] font-semibold text-primary mt-3">
              {s.price}
            </p>
            <a
              href={`https://wa.me/${phoneWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 w-full bg-[#21c45d] hover:bg-[#15ae4d] text-white font-body text-[13px] font-bold rounded-lg h-10 transition-colors"
            >
              <svg
                className="w-4.5 h-4.5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {businessRegistrationInquiryLabel}
            </a>
          </motion.div>
        ))}
      </div>

      {!showAll && businessRegistrations.length > INITIAL_VISIBLE && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="font-body text-sm font-bold text-primary bg-white hover:bg-gold hover:text-white px-8 py-3 rounded-full shadow-md transition-all duration-300"
          >
            View More
          </button>
        </div>
      )}
    </div>
  </section>
  );
};

export default BusinessRegistrations;
