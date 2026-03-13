"use client";
import { motion } from 'framer-motion';
import { Copyright, Compass, FlaskConical } from 'lucide-react';
import { useSiteConfig } from '@/context/SiteConfigContext';

const iconMap = [null, Copyright, Compass, FlaskConical];

const TrademarkRegistration = () => {
  const { config } = useSiteConfig();
  const cards = config.trademarkRegistrations.map((t, i) => ({
    icon: iconMap[i % iconMap.length],
    symbol: t.symbol,
    title: t.title,
    desc: t.desc,
  }));
  return (
  <section className="bg-soft-blue py-20 px-6 md:px-10 dot-grid">
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-[42px] text-dark-text font-bold text-center mb-12"
      >
        Trademark Registration
      </motion.h2>

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
              className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              {/* Big number */}
              <span className="absolute top-2 right-4 text-[80px] font-black text-muted/60 select-none leading-none">{i + 1}</span>
              <div className="relative z-10">
                {c.symbol ? (
                  <span className="font-heading text-4xl font-bold text-dark-text">{c.symbol}</span>
                ) : (
                  Icon && <Icon className="w-10 h-10 text-dark-text group-hover:scale-110 transition-transform" />
                )}
                <h3 className="font-body text-[17px] font-bold text-dark-text mt-4">{c.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mt-2">{c.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
    </section>
  );
};

export default TrademarkRegistration;