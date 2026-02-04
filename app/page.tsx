"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Programs", href: "#programs" },
    { name: "About", href: "#about" },
    { name: "Community", href: "#community" },
  ];

  return (
    <div className="min-h-screen selection:bg-green-100 font-sans text-slate-800 bg-soft-pattern">
      {/* Navigation */}
      <nav id="home" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-3" : "py-6"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center border border-green-100">
              <Image src="/logo.png" alt="SomaThrive Logo" width={24} height={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 italic">Soma<span className="text-[#1a4d2e]">Thrive</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-500 hover:text-[#1a4d2e] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#login"
              className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-black transition-all shadow-md uppercase tracking-widest"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-[#1a4d2e] text-[11px] font-bold tracking-[0.1em] uppercase mb-8 border border-green-100/50">
              Student-Focused Growth
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.15] mb-8 text-balance">
              Helping Somali Students <span className="text-[#1a4d2e]">Learn, Grow</span> <br />
              & Access Global Opportunities
            </h1>

            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              SomaThrive is a dedicated education and opportunity platform supporting Somali youth to navigate scholarships, mentorship, and global learning pathways with absolute confidence.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#programs" className="btn-primary">
                Explore Scholarships
              </Link>
              <Link href="#community" className="btn-secondary">
                Join Community
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mt-20 relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src="/hero-student.jpg"
              alt="SomaThrive Student Session"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="programs" className="py-24 bg-white border-y border-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Focus Areas</h2>
            <div className="w-12 h-1 bg-[#1a4d2e] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Scholarship Guidance", desc: "Clear, step-by-step guidance on international scholarships and study opportunities." },
              { title: "Academic Mentorship", desc: "Mentorship sessions that support students with academic planning and applications." },
              { title: "Global Exposure", desc: "Information sharing and peer learning that expose students to world-class pathways." }
            ].map((item, idx) => (
              <div key={idx} className="p-10 rounded-3xl modern-card">
                <h3 className="text-xl font-bold mb-4 text-[#1a4d2e]">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / About */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight uppercase">Meet Our Team</h2>
              <p className="text-slate-500 font-medium">Dedicated mentors and leaders supporting the Somali youth.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: "Deqa Daud", role: "Co-founder" },
                { name: "Farhia Dini", role: "Co-founder" },
                { name: "Amiro Osman", role: "Program Coordinator" }
              ].map((member, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden bg-white shadow-lg mb-6 border border-slate-100 transition-transform group-hover:scale-105">
                    <img
                      src={`https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=1a4d2e&color=fff&size=200&font-size=0.35&bold=true`}
                      className="w-full h-full object-cover"
                      alt={member.name}
                    />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-[#1a4d2e] font-bold text-[10px] uppercase tracking-widest">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-lg font-bold text-slate-900 italic">Soma<span className="text-[#1a4d2e]">Thrive</span></span>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} SomaThrive
          </p>
          <div className="flex gap-8">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <Link key={social} href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-[#1a4d2e] transition-colors">
                {social}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
