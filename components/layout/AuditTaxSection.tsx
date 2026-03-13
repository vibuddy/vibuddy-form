"use client";
import { motion } from "framer-motion";
import {
  FileText,
  Briefcase,
  Tag,
  ClipboardCheck,
  Search,
  Landmark,
  Users,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import { useSiteConfig } from "@/context/SiteConfigContext";

const iconList = [FileText, Briefcase, Tag, ClipboardCheck, Search, Landmark, Users, UserCheck];

const AuditTaxSection = () => {
  const { config } = useSiteConfig();
  const services = config.auditTaxServices.map((s, i) => ({
    ...s,
    icon: iconList[i % iconList.length],
  }));
  return (
  <section id="audit" className="bg-card py-20 px-6 md:px-10">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-[42px] text-dark-text font-bold">
          Audit and Tax Management
        </h2>
        <div className="w-15 h-0.75 bg-gold mx-auto mt-4" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border-[1.5px] border-border rounded-2xl p-8 text-center hover:border-primary hover:shadow-[0_8px_30px_rgba(10,42,110,0.1)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-13 h-13 rounded-full bg-[#FFFBEB] flex items-center justify-center mx-auto">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-body text-[17px] font-bold text-dark-text mt-4">
                {s.title}
              </h3>
              <p className="font-body text-[13px] text-muted-foreground leading-relaxed mt-2">
                {s.desc}
              </p>
              {/* <a
                href="#"
                className="inline-flex items-center gap-1 font-body text-[13px] text-primary mt-3 hover:underline group-hover:gap-2 transition-all"
              >
                Learn More <ArrowRight className="w-3 h-3" />
              </a> */}
            </motion.div>
          );
        })}
      </div>
    </div>
    </section>
  );
};

export default AuditTaxSection;
