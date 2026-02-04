"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Support", href: "#support" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#06090a] text-white font-inter selection:bg-[#22c55e]/20">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#06090a]/80 backdrop-blur-md border-b border-white/5 py-4" : "py-8"}`}>
        <div className="max-w-[1920px] mx-auto px-6 md:px-[191px] flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tight">Soma<span className="text-[#22c55e]">Thrive</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#support"
              className="px-5 py-2 bg-[#22c55e] text-black text-sm font-bold rounded-lg hover:bg-white transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-[1920px] mx-auto px-6 md:px-[191px] grid lg:grid-cols-2 gap-20 xl:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Helping Somali Students
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#22c55e] mb-10 leading-tight">
              Learn, Grow & Access <br className="hidden md:block" /> Global Opportunities
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog" target="_blank" className="px-8 py-4 bg-[#22c55e] text-black font-bold rounded-xl hover:bg-white transition-all">
                Explore Scholarships
              </Link>
              <Link href="#about" className="px-8 py-4 border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-all">
                Learn More
              </Link>
            </div>
          </motion.div>

          <div className="relative hidden lg:grid grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 mt-12"
            >
              <Image src="/hero-2.jpg" alt="SomaThrive Community" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10"
            >
              <Image src="/hero-1.png" alt="SomaThrive Session" fill className="object-cover" />
            </motion.div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#22c55e]/5 blur-[100px] rounded-full pointer-events-none" />
          </div>
        </div>
      </section>

      {/* About Section - Criss Cross Modern Layout */}
      <section id="about" className="py-40 bg-[#06090a] overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Left Column: Mission & Descriptive Text */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                  Driven by needs, <br />
                  led by <span className="text-[#22c55e]">experience</span>.
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                  A student-led platform providing clear pathways to international scholarships and academic mentorship.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 relative group"
              >
                <div className="absolute top-8 right-8 text-[#22c55e] opacity-20 group-hover:opacity-100 transition-opacity">
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-[#22c55e] text-xs font-bold uppercase tracking-[0.3em] mb-6">Our Mission</h4>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To increase access to global learning for Somali students through tailored guidance, mentorship, and support.
                </p>
              </motion.div>
            </div>

            {/* Right Column: Vision Criss-Cross with Hero-2 image style */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 max-w-md mx-auto"
              >
                <Image src="/hero-2.jpg" alt="Mentorship" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06090a] to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 -right-6 md:right-10 p-10 rounded-[3rem] bg-[#0a0d0e] border border-white/5 shadow-2xl max-w-sm z-20"
              >
                <h4 className="text-[#22c55e] text-xs font-bold uppercase tracking-[0.3em] mb-6">Our Vision</h4>
                <p className="text-lg text-gray-300 leading-relaxed">
                  A confident generation of Somali students competing globally, achieving excellence and transforming their communities.
                </p>
              </motion.div>

              <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#22c55e]/5 blur-[120px] rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="programs" className="py-32">
        <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Focus</h2>
            <div className="h-1 w-12 bg-[#22c55e] rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Scholarship Guidance",
                desc: "Step-by-step support for international applications and interview preparation."
              },
              {
                title: "Academic Mentorship",
                desc: "One-on-one sessions with experienced mentors to shape your future career."
              },
              {
                title: "Global Community",
                desc: "Connect with a network of Somali students and professionals worldwide."
              }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <h3 className="text-xl font-bold mb-4 text-[#22c55e]">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support / CTA */}
      <section id="support" className="py-32">
        <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
          <div className="bg-[#22c55e] rounded-[3rem] p-12 md:p-24 text-black text-center relative overflow-hidden group">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to start <br /> your journey?</h2>
              <p className="text-lg md:text-xl font-medium mb-12 opacity-80">
                Whether you're a student seeking guidance or a professional wanting to give back, we'd love to have you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog" target="_blank" className="px-10 py-5 bg-black text-white font-bold rounded-2xl hover:scale-105 transition-transform">
                  Apply for Support
                </Link>
                <Link href="#contact" className="px-10 py-5 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-transform">
                  Partner with Us
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none group-hover:bg-white/30 transition-colors" />
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="py-32 border-t border-white/5 bg-[#06090a]">
        <div className="max-w-[1920px] mx-auto px-6 md:px-[191px] grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in touch</h2>
            <p className="text-xl text-gray-400 mb-12">Have questions? We're here to help.</p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-2xl">✉️</div>
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-lg font-medium">contact@somathrive.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-2xl">📱</div>
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Social</h4>
                  <p className="text-lg font-medium">@SomaThrive</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-20 lg:pt-0">
            <div className="flex flex-col h-full justify-between">
              <div className="text-2xl font-bold mb-12">Soma<span className="text-[#22c55e]">Thrive</span></div>
              <div className="text-sm text-gray-500 border-t border-white/5 pt-8 flex justify-between items-center">
                <span>&copy; {new Date().getFullYear()} SomaThrive</span>
                <div className="flex gap-6">
                  <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                  <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
