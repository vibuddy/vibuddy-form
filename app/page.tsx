"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import { div } from "framer-motion/client";

/* ─── Animation ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: [0, 0, 0.2, 1] as const,
    },
  }),
};

const experienceLevels = [
  { value: "website", label: 'Website' },
  { value: "seo", label: "SEO" },
  { value: "automations", label: "Automations" },
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  budget: string;
  projectType: string;
};

const emptyForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
  budget: "",
  projectType: "",
};

const inputBase =
  "w-full font-body text-[14px] text-dark-text bg-off-white border border-brand-border rounded-lg px-4 py-3 placeholder:text-muted-text focus:outline-none focus:ring-2 focus:ring-navy-deep/30 focus:border-navy-deep transition-all";

function ApplicationForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // setSubmitted(true);
    e.preventDefault();
    if (!form.fullName || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true);

    const result = await fetch("/api/create-contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.fullName,
        emailId: form.email,
        budgetRange: form.budget,
        projectType: form.projectType,
        message: form.message,
        phoneNumber: form.phone,
      }),
    });

    if (result.ok) {
      toast.success("Your message has been sent successfully!", {
        duration: 2000,
      });
      setSubmitted(true);

      setIsSubmitting(false);
    } else {
      toast.error("Failed to send your message. Please try again.");
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setSubmitted(false);
    setForm(emptyForm);
  }

  return (
    <div>
      <Navbar />
      <section className="bg-off-white py-2 md:py-6 px-5 md:px-10">
        <Toaster />
        <div className="max-w-300 mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-body text-[11px] tracking-[0.2em] text-gold font-semibold mb-3">
              APPLY NOW
            </p>
            <h2 className="font-heading text-[32px] md:text-[42px] text-dark-text">
              Get Your Professional Website with ViBuddy
            </h2>
            <p className="font-body text-[17px] text-body-text mt-3">
              If you are a professional without a website, share your details
              here. The ViBuddy team will contact you to discuss the right
              website solution for your business.
            </p>
          </motion.div>

          <motion.div
            className="max-w-200 mx-auto bg-white border-[1.5px] border-brand-border rounded-2xl py-7 px-6 md:p-12 shadow-[0_8px_40px_rgba(10,42,110,0.07)]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            {submitted ? (
              /* ── Success State ── */
              <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
                <div className="w-20 h-20 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                  <CheckCircle2 size={40} className="text-[#16A34A]" />
                </div>
                <h3 className="font-heading text-[26px] text-dark-text font-bold">
                  Details Submitted
                </h3>
                <div className="w-12 h-0.5 bg-gold" />
                <p className="font-body text-[15px] text-body-text leading-[1.85] max-w-120">
                  Thank you for your interest in ViBuddy. Our team will contact
                  you shortly to discuss your website requirements.
                </p>
                <button
                  onClick={handleReset}
                  className="font-body text-[13px] text-navy-deep border border-navy-deep/40 px-6 py-2.5 rounded-full hover:bg-navy-deep hover:text-primary-foreground transition-all duration-250 mt-2"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Full Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block font-body text-[13px] text-slate-text font-semibold tracking-wide">
                      Full Name <span className="text-alert-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className={inputBase}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-body text-[13px] text-slate-text font-semibold tracking-wide">
                      Email Address <span className="text-alert-red">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Position */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block font-body text-[13px] text-slate-text font-semibold tracking-wide">
                      Phone Number <span className="text-alert-red">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className={inputBase}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-body text-[13px] text-slate-text font-semibold tracking-wide">
                      Budget Range
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="budget"
                        id="budget"
                        placeholder="₹15,000 - ₹20,000"
                        value={form.budget}
                        onChange={handleChange}
                        className={`${inputBase} appearance-none pr-10`}
                      />
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-2">
                  <label className="block font-body text-[13px] text-slate-text font-semibold tracking-wide">
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className={`${inputBase} appearance-none pr-10 cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select project type
                      </option>
                      {experienceLevels.map((lvl) => (
                        <option key={lvl.value} value={lvl.value}>
                          {lvl.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-text pointer-events-none"
                    />
                  </div>
                </div>

                {/* Message / Cover Letter */}
                <div className="space-y-2">
                  <label className="block font-body text-[13px] text-slate-text font-semibold tracking-wide">
                    Message / Cover Letter
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project, requirements, or any specific goals you have in mind."
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {/* Submit button */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="font-body text-[14px] font-semibold bg-navy-deep text-primary-foreground px-8 py-3.5 rounded-full hover:bg-navy-mid transition-all duration-250 shadow-[0_4px_20px_rgba(10,42,110,0.2)] hover:shadow-[0_6px_26px_rgba(10,42,110,0.28)] active:scale-[0.98]"
                  >
                    {isSubmitting ? "Submitting..." : "Request a Callback"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <ApplicationForm />
    </main>
  );
}
