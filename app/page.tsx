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
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Community", href: "#community" },
    { name: "Resources", href: "#resources" },
    { name: "Contacts", href: "#contacts" },
  ];

  return (
    <div className="min-h-screen selection:bg-green-500/30 font-sans bg-ilab-inspired overflow-x-hidden text-white/90">
      {/* Navigation - Pill Design */}
      <header className="fixed w-full top-8 z-50 px-6">
        <div className="container mx-auto max-w-6xl">
          <nav className="pill-nav flex items-center justify-between px-3 h-16 shadow-2xl">
            <Link href="/" className="flex items-center gap-3 pl-4">
              <div className="w-8 h-8 relative">
                <Image src="/logo.png" alt="SomaThrive Logo" fill className="object-contain invert" />
              </div>
              <span className="text-lg font-black tracking-tighter text-white uppercase italic">Soma<span className="text-[#22c55e]">Thrive</span></span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-xs font-bold text-white/60 hover:text-[#22c55e] transition-colors uppercase tracking-wider">
                  {link.name}
                </Link>
              ))}
            </div>

            <Link href="#apply" className="px-8 py-2.5 bg-[#22c55e] text-black text-[11px] font-black rounded-full hover:bg-white transition-all uppercase tracking-widest shadow-lg shadow-green-500/20 active:scale-95">
              Apply Now
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] border border-green-500/5 rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] border border-green-500/5 rounded-full pointer-events-none" />

        <div className="container mx-auto px-10 xl:px-20 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="drop-shadow-sm"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tighter uppercase italic drop-shadow-lg">
              Empowering <br />
              <span className="text-[#22c55e]">The Next</span> <br />
              Somali Generation
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-xl font-medium leading-relaxed">
              Helping students Learn, Grow & Access Global Opportunities through clarity and confidence.
            </p>
            <Link href="#apply" className="btn-ilab text-lg uppercase tracking-tight">
              Apply Now
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative h-[600px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-green-500/10 rounded-[4rem] blur-3xl opacity-30" />
            <div className="relative h-full w-full rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl bg-slate-900/50">
              <Image
                src="/hero-student.jpg"
                alt="SomaThrive Session"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-10 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-12 leading-tight uppercase italic drop-shadow-md">
                Our Numbers In <br /> Less Than <span className="text-[#22c55e]">Five</span> Years.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { val: "2K+", label: "Students Reached", icon: "🌱" },
                  { val: "150+", label: "Mentors Active", icon: "🤝" },
                  { val: "40+", label: "Global Scholarships", icon: "🎓" },
                  { val: "12+", label: "Global Pathways", icon: "🌍" }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="text-4xl filter group-hover:brightness-125 transition-all">{stat.icon}</div>
                    <div>
                      <div className="text-3xl font-black text-[#22c55e] mb-1 tracking-tighter text-glow">{stat.val}</div>
                      <div className="text-xs font-bold text-white/50 uppercase tracking-widest leading-none">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#22c55e]/5 rounded-full blur-[100px]" />
              <div className="relative aspect-square flex items-center justify-center">
                <div className="w-full h-full relative animate-slow-spin opacity-10">
                  <div className="absolute inset-0 border-[2px] border-dashed border-white rounded-full" />
                </div>
                <div className="absolute w-[80%] h-[80%] border border-white/5 rounded-full animate-reverse-spin" />
                <div className="text-8xl drop-shadow-2xl brightness-110">🌍</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section id="programs" className="py-32 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-10 xl:px-20 text-center mb-24">
          <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight italic">Our Focus Areas</h2>
          <div className="w-20 h-1 bg-[#22c55e] mx-auto rounded-full" />
        </div>

        <div className="container mx-auto px-10 xl:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            { title: "Scholarship Guidance", desc: "Clear, step-by-step guidance on international scholarships and study opportunities." },
            { title: "Academic Mentorship", desc: "Supporting students with academic planning, applications, and decision-making." },
            { title: "Global Exposure", desc: "Information sharing that exposes students to world-class academic and professional pathways." }
          ].map((item, idx) => (
            <div key={idx} className="p-12 rounded-[3.5rem] glass-stat group transition-all duration-500 hover:translate-y-[-10px] hover:bg-white/5">
              <h3 className="text-2xl font-black mb-6 text-white group-hover:text-[#22c55e] transition-colors italic uppercase">{item.title}</h3>
              <p className="text-white/60 leading-relaxed font-medium mb-4 group-hover:text-white/80 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="py-20 border-t border-white/5 bg-[#010409]">
        <div className="container mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="SomaThrive Logo" width={32} height={32} className="invert opacity-60" />
            <span className="text-lg font-black text-white/40 tracking-tighter uppercase italic">SomaThrive</span>
          </div>
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">
            &copy; {new Date().getFullYear()} SomaThrive - Impacting Futures
          </p>
          <div className="flex gap-10">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <Link key={social} href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 hover:text-[#22c55e] transition-colors">
                {social}
              </Link>
            ))}
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-slow-spin {
          animation: slow-spin 20s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
