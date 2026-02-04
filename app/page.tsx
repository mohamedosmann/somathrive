"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "PROGRAMS", href: "#programs" },
    { name: "ABOUT", href: "#about" },
    { name: "COMMUNITY", href: "#community" },
  ];

  return (
    <div className="min-h-screen selection:bg-[#22c55e]/30 font-sans text-slate-900 mesh-gradient">
      {/* Navigation */}
      <nav id="home" className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "glass-nav py-3" : "py-6"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#22c55e]/10 flex items-center justify-center border border-[#22c55e]/20 group-hover:scale-110 transition-transform">
              <Image src="/logo.png" alt="SomaThrive Logo" width={24} height={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Soma<span className="text-[#22c55e]">Thrive</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-slate-500 hover:text-[#22c55e] transition-colors tracking-widest uppercase"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-4 w-[1px] bg-slate-200 mx-2" />
            <Link
              href="#login"
              className="px-6 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors uppercase"
            >
              Log In
            </Link>
            <Link
              href="#community"
              className="px-8 py-2.5 bg-[#22c55e] text-white text-xs font-bold rounded-full hover:bg-[#16a34a] transition-all shadow-md shadow-[#22c55e]/20 uppercase tracking-widest"
            >
              Sign Up
            </Link>
          </div>

          <button className="md:hidden text-slate-600 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="space-y-1.5 w-6">
              <div className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
              <div className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="badge-pill mb-8 mx-auto translate-y-[-10px]">
            <span className="w-5 h-5 rounded-full bg-[#22c55e]/10 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            </span>
            <span className="uppercase tracking-widest text-[10px] font-black">Your #1 Platform for Somali Students</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-8 text-slate-900 tracking-tight">
            Helping Somali Students <br />
            <span className="text-[#22c55e]">Learn, Grow & Access</span> <br />
            Global Opportunities.
          </h1>

          <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            SomaThrive is a student-focused education and opportunity platform supporting Somali youth to navigate scholarships, mentorship, and global learning pathways.
          </p>

          <div className="search-container mb-16">
            <div className="flex items-center gap-3 px-6 flex-1 border-r border-slate-100 last:border-0">
              <span className="text-[#22c55e] text-lg opacity-60">🔍</span>
              <input type="text" placeholder="Search Programs..." className="search-input" />
            </div>
            <div className="flex items-center gap-3 px-6 flex-1 md:border-r border-slate-100">
              <span className="text-[#22c55e] text-lg opacity-60">🎓</span>
              <input type="text" placeholder="e.g. Graduate" className="search-input" />
            </div>
            <button className="w-full md:w-auto px-10 py-4 bg-[#22c55e] text-white font-bold rounded-full hover:bg-[#16a34a] transition-all">
              Search
            </button>
          </div>
        </motion.div>

        {/* Soft Cards Row - Decorative */}
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 gap-4 h-64 mt-auto">
          {[
            { color: "bg-[#22c55e]/10", delay: 0 },
            { color: "bg-blue-50", delay: 0.1 },
            { color: "bg-orange-50", delay: 0.2 },
            { color: "bg-purple-50", delay: 0.3 },
            { color: "bg-yellow-50", delay: 0.4 },
            { color: "bg-cyan-50", delay: 0.5 }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.8 }}
              className={`${item.color} rounded-[2rem] h-full w-full border border-white`}
            />
          ))}
        </div>
      </section>

      {/* Focus Areas Section */}
      <section id="programs" className="py-32 relative bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center mb-24 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900 uppercase">What SomaThrive Does</h2>
          <div className="w-16 h-1 bg-[#22c55e] mx-auto rounded-full" />
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              title: "Scholarship Guidance",
              desc: "Clear, step-by-step guidance on international scholarships and study opportunities.",
              color: "bg-[#22c55e]/5"
            },
            {
              title: "Academic Mentorship",
              desc: "Mentorship sessions that support students with academic planning and applications.",
              color: "bg-blue-50"
            },
            {
              title: "Global Exposure",
              desc: "Webinars and peer learning that expose students to global academic pathways.",
              color: "bg-orange-50"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={`p-12 rounded-[3.5rem] ${item.color} group transition-all duration-500`}
            >
              <h3 className="text-2xl font-black mb-6 text-slate-800 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium mb-4">{item.desc}</p>
              <div className="mt-8 flex items-center gap-2 text-[#22c55e] font-bold text-sm tracking-widest uppercase">
                Learn More <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
              <Image src="/hero-student.jpg" alt="SomaThrive Session" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 tracking-tight uppercase">Who We Are</h2>
              <p className="text-xl text-slate-500 leading-relaxed font-medium mb-12">
                SomaThrive is a youth-led education and opportunity platform dedicated to supporting Somali students to access quality learning and global opportunities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs font-black text-[#22c55e] mb-2 uppercase tracking-widest">Our Mission</h3>
                  <p className="text-slate-600 font-medium">To increase access to global learning opportunities and academic support.</p>
                </div>
                <div>
                  <h3 className="text-xs font-black text-[#22c55e] mb-2 uppercase tracking-widest">Our Vision</h3>
                  <p className="text-slate-600 font-medium">A confident generation of Somali students competing globally with knowledge.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-20 uppercase tracking-tight">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: "Deqa Daud", role: "Co-founder" },
              { name: "Farhia Dini", role: "Co-founder" },
              { name: "Amiro Osman", role: "Program Coordinator" }
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden bg-slate-100 mb-8 shadow-xl">
                  <img
                    src={`https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=22c55e&color=fff&size=400&font-size=0.3&bold=true`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt={member.name}
                  />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-1">{member.name}</h4>
                <p className="text-[#22c55e] font-black tracking-widest text-[10px] uppercase">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#22c55e]/10 flex items-center justify-center">
              <Image src="/logo.png" alt="SomaThrive Logo" width={16} height={16} />
            </div>
            <span className="text-lg font-bold text-slate-900 tracking-tight">SomaThrive</span>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} SomaThrive - All rights reserved
          </p>
          <div className="flex gap-10">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <Link key={social} href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#22c55e] transition-colors">
                {social}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
