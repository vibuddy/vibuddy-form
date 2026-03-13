"use client";
import { motion } from "framer-motion";
import { BarChart3, Sparkles, GraduationCap, Globe } from "lucide-react";
import { useSiteConfig } from "@/context/SiteConfigContext";

const iconList = [BarChart3, Sparkles, GraduationCap, Globe];
const bgList = ["bg-[#FFFBEB]", "bg-[#FFF0F3]", "bg-[#F5F0FF]", "bg-[#F0FFF4]"];
const iconColorList = ["text-amber-500", "text-pink-500", "text-purple-500", "text-emerald-500"];

const NGORegistration = () => {
  const { config } = useSiteConfig();
  const cards = config.ngoRegistrations.map((s, i) => ({
    ...s,
    bg: bgList[i % bgList.length],
    icon: iconList[i % iconList.length],
    iconColor: iconColorList[i % iconColorList.length],
  }));
  return (
  <section className="bg-card py-20 px-6 md:px-10">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-[42px] text-dark-text font-bold">
          NGO Registration
        </h2>
        <div className="w-15 h-0.75 bg-gold mx-auto mt-4" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${c.bg} rounded-4xl p-8 hover:scale-[1.02] hover:shadow-lg transition-all duration-300`}
            >
              <Icon className={`w-12 h-12 ${c.iconColor} mb-5`} />
              <h3 className="font-body text-lg font-bold text-dark-text">
                {c.title}
              </h3>
              <p className="font-body text-sm text-slate-text leading-relaxed mt-2.5">
                {c.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
    </section>
  );
};

export default NGORegistration;
