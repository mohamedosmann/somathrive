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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Contact", href: "#contact" },
  ];

  const focusAreas = [
    {
      title: "Scholarship Guidance",
      desc: "Clear, step-by-step guidance on international scholarships and study opportunities."
    },
    {
      title: "Academic Mentorship",
      desc: "Mentorship sessions that support students with academic planning and applications."
    },
    {
      title: "Global Exposure",
      desc: "Webinars and peer learning that expose students to global academic pathways."
    }
  ];

  const team = [
    { name: "Deqa Daud", role: "Co-founder", img: "https://ui-avatars.com/api/?name=Deqa+Daud&background=22c55e&color=fff&size=400" },
    { name: "Farhia Dini", role: "Co-founder", img: "https://ui-avatars.com/api/?name=Farhia+Dini&background=22c55e&color=fff&size=400" },
    { name: "Amiro Osman", role: "Program Coordinator", img: "https://ui-avatars.com/api/?name=Amiro+Osman&background=22c55e&color=fff&size=400" }
  ];

  return (
    <div className="min-h-screen bg-[#06090a] text-white font-inter selection:bg-[#22c55e]/30 selection:text-white">
      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? "bg-[#06090a]/80 backdrop-blur-2xl py-6" : "py-12"}`}>
        <div className="max-w-[1920px] mx-auto px-6 md:px-[191px] flex justify-between items-center">
          <Link href="/" className="text-2xl font-black tracking-tighter">Soma<span className="text-[#22c55e]">Thrive</span></Link>
          <div className="hidden md:flex items-center gap-16">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-[10px] font-black text-gray-400 hover:text-white transition-colors tracking-[0.2em] uppercase">{link.name}</Link>
            ))}
            <Link href="#support" className="px-8 py-3 bg-[#22c55e] text-black text-[10px] font-black rounded-full hover:bg-white transition-all tracking-widest uppercase">Get Started</Link>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-20">
          <div className="max-w-[1920px] mx-auto px-6 md:px-[191px] w-full grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.9] tracking-tighter mb-12">
                Helping Somali <br /> Students <br />
                <span className="text-[#22c55e]">Learn, Grow <br /> & Access</span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog" target="_blank" className="px-10 py-5 bg-[#22c55e] text-black font-black text-[10px] rounded-2xl hover:bg-white transition-all tracking-widest uppercase">
                  Explore Scholarships
                </Link>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog" target="_blank" className="px-10 py-5 border border-white/10 text-white font-black text-[10px] rounded-2xl hover:bg-white/5 transition-all tracking-widest uppercase">
                  Join Mentorship
                </Link>
              </div>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/5"
              >
                <Image src="/hero-1.png" alt="SomaThrive Session" fill className="object-cover" priority />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION - THE VISUAL CRISS-CROSS (AS REQUESTED IN IMAGE 971) */}
        <section id="about" className="py-40 bg-[#080b0c]">
          <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column: Large Portrait Image (Criss-Cross Anchor) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10"
              >
                <Image src="/hero-2.jpg" alt="SomaThrive Community" fill className="object-cover" />
              </motion.div>

              {/* Right Column: Staggered Content */}
              <div className="space-y-12">
                {/* Intro Text Block */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="max-w-xl"
                >
                  <span className="text-[#22c55e] text-[10px] font-black uppercase tracking-[0.5em] mb-8 block">Who We Are</span>
                  <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-none">Bridging the gap <br /> between talent & <br /> opportunity.</h2>
                  <p className="text-xl text-gray-400 leading-relaxed font-medium">
                    SomaThrive is a youth-led platform dedicated to supporting Somali students to access quality learning and global opportunities.
                  </p>
                </motion.div>

                {/* Mission Card (Criss-Cross Item 1) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/5"
                >
                  <h4 className="text-[#22c55e] text-[10px] font-black uppercase tracking-widest mb-6">Our Mission</h4>
                  <p className="text-lg text-gray-300 font-medium leading-relaxed">
                    To increase access to global learning opportunities and academic support for Somali students worldwide.
                  </p>
                </motion.div>

                {/* Vision Card (Criss-Cross Item 2) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/5"
                >
                  <h4 className="text-[#22c55e] text-[10px] font-black uppercase tracking-widest mb-6">Our Vision</h4>
                  <p className="text-lg text-gray-300 font-medium leading-relaxed">
                    A confident generation of Somali students competing globally with knowledge, and transforming the country.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FOCUS AREAS */}
        <section id="programs" className="py-40">
          <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
            <div className="grid md:grid-cols-3 gap-12">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="group p-12 rounded-[3.5rem] bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all">
                  <div className="text-[#22c55e] font-black text-sm mb-8 tracking-widest uppercase">0{idx + 1}</div>
                  <h3 className="text-3xl font-black mb-8 italic">{area.title}</h3>
                  <p className="text-lg text-gray-500 font-medium leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-40 bg-[#080b0c]">
          <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
            <h3 className="text-5xl font-black mb-24 uppercase italic text-center">Our Team</h3>
            <div className="grid md:grid-cols-3 gap-16">
              {team.map((member, idx) => (
                <div key={idx} className="text-center group">
                  <div className="aspect-[4/5] rounded-[4rem] overflow-hidden mb-8 relative grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                  </div>
                  <h4 className="text-2xl font-black">{member.name}</h4>
                  <p className="text-[#22c55e] text-[10px] font-black uppercase tracking-widest mt-2">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-40">
          <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
            <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/5 rounded-[4rem] p-16 md:p-24 text-center">
              <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter italic">Get In Touch</h2>
              <div className="grid md:grid-cols-3 gap-12 mb-16">
                <div>
                  <h4 className="text-[#22c55e] text-[10px] font-black uppercase tracking-widest mb-2">Email</h4>
                  <p className="font-bold">contact@somathrive.com</p>
                </div>
                <div>
                  <h4 className="text-[#22c55e] text-[10px] font-black uppercase tracking-widest mb-2">WhatsApp</h4>
                  <p className="font-bold">+252 61 XXX XXXX</p>
                </div>
                <div>
                  <h4 className="text-[#22c55e] text-[10px] font-black uppercase tracking-widest mb-2">Socials</h4>
                  <p className="font-bold">@SomaThrive</p>
                </div>
              </div>
              <Link href="mailto:contact@somathrive.com" className="inline-block px-12 py-6 bg-[#22c55e] text-black font-black text-[10px] rounded-full hover:bg-white transition-all tracking-widest uppercase shadow-2xl shadow-[#22c55e]/20">
                Send Message
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 text-center text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">
        &copy; {new Date().getFullYear()} SomaThrive. Minimalist Excellence.
      </footer>
    </div>
  );
}
