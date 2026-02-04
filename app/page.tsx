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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Community", href: "#community" },
  ];

  return (
    <div className="min-h-screen selection:bg-[#22c55e]/30 font-sans text-gray-200 bg-[#06090a]">
      {/* Navigation */}
      <nav id="home" className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "glass-nav py-3" : "py-6"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#22c55e]/10 flex items-center justify-center border border-[#22c55e]/20 group-hover:scale-110 transition-transform">
              <Image src="/logo.png" alt="SomaThrive Logo" width={24} height={24} className="invert" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Soma<span className="text-[#22c55e]">Thrive</span></span>
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
              href="#community"
              className="px-6 py-2.5 bg-[#22c55e] text-black text-sm font-bold rounded-full hover:bg-[#16a34a] transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          <button className="md:hidden text-gray-400 hover:text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="space-y-1.5 w-6">
              <div className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
              <div className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <Image
          src="/hero-student.jpg"
          alt="SomaThrive Student Session"
          fill
          className="object-cover object-right md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06090a] via-[#06090a]/60 to-transparent z-10" />

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 text-gradient text-left">
              Helping Somali Students <br />
              <span className="text-[#22c55e]">Learn, Grow & Access</span> <br />
              Global Opportunities
            </h1>
            <p className="text-base md:text-lg text-gray-400 mb-12 max-w-xl leading-relaxed text-left">
              SomaThrive is a student-focused education and opportunity platform supporting Somali youth to navigate scholarships, mentorship, and global learning pathways with clarity and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="#programs" className="px-10 py-4 bg-[#22c55e] text-black font-black rounded-2xl hover:bg-[#16a34a] transition-all hover:translate-y-[-2px] shadow-lg shadow-[#22c55e]/20 text-center">
                Explore Scholarships
              </Link>
              <Link href="#community" className="px-10 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-center">
                Join Mentorship
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="py-32 relative overflow-hidden bg-[#06090a]">
        <div className="container mx-auto px-6 text-center mb-24 relative z-10">
          <span className="text-[#22c55e] font-bold tracking-widest uppercase text-xs mb-4 block">What SomaThrive Does</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Our Focus Areas</h2>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {[
            {
              title: "Scholarship Guidance",
              desc: "Clear, step-by-step guidance on international scholarships and study opportunities, delivered through online sessions and in-person student meetups."
            },
            {
              title: "Academic Mentorship",
              desc: "Mentorship sessions that support students with academic planning, applications, and decision-making throughout their education journey."
            },
            {
              title: "Global Exposure",
              desc: "Information sharing, webinars, and peer learning that expose students to global academic and professional pathways."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] glass-card group text-left border-l-4 border-l-transparent hover:border-l-[#22c55e]"
            >
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#22c55e] transition-colors uppercase tracking-tight">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium mb-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-32 border-y border-white/5 bg-[#06090a]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">Why Students Trust <br /><span className="text-[#22c55e]">SomaThrive</span></h2>
              <div className="grid grid-cols-1 gap-6">
                {[
                  "Simple, clear guidance",
                  "Student-focused and practical",
                  "Built on real experience and global exposure",
                  "Active community engagement"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center text-black text-xs font-bold transition-transform group-hover:scale-125">✓</div>
                    <span className="text-lg font-medium text-gray-300">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-[#22c55e]/10 blur-[100px] rounded-full" />
              <div className="relative p-1 rounded-[3rem] bg-gradient-to-br from-[#22c55e]/20 to-transparent">
                <div className="bg-[#0c1114] rounded-[2.9rem] p-12 text-center">
                  <h4 className="text-2xl font-bold mb-4 text-white">Join Our Community</h4>
                  <p className="text-gray-500 mb-10 leading-relaxed">Stay updated on scholarships, mentorship opportunities, and upcoming events.</p>
                  <div className="flex flex-col gap-4">
                    <button className="w-full py-4 bg-[#22c55e] text-black font-black rounded-2xl hover:bg-[#16a34a] transition-all shadow-lg shadow-[#22c55e]/20">
                      Join WhatsApp Community
                    </button>
                    <button className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                      Join Email List
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-[#06090a]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-24 mb-32">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Who We Are</h2>
                <p className="text-xl text-gray-400 leading-relaxed font-medium">
                  SomaThrive is a youth-led education and opportunity platform dedicated to supporting Somali students to access quality learning and global opportunities. We work at the intersection of education, mentorship, and technology to bridge the gap between talent and opportunity for Somali students.
                </p>
              </div>
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-[#22c55e] mb-4 uppercase tracking-widest">Our Mission</h3>
                  <p className="text-lg text-gray-300">To increase access to global learning opportunities and academic support for Somali students.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#22c55e] mb-4 uppercase tracking-widest">Our Vision</h3>
                  <p className="text-lg text-gray-300">A confident generation of Somali students competing globally with knowledge, and transforming the country.</p>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-tight">Our Team</h2>
              <div className="h-1 w-20 bg-[#22c55e] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: "Deqa Daud", role: "Co-founder" },
                { name: "Farhia Dini", role: "Co-founder" },
                { name: "Amiro Osman", role: "Program Coordinator" }
              ].map((member, idx) => (
                <div key={idx} className="text-center group">
                  <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden bg-[#0c1114] border border-white/5 mb-8 p-1">
                    <div className="absolute inset-0 bg-[#22c55e] opacity-0 group-hover:opacity-10 transition-opacity" />
                    <img
                      src={`https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=06090a&color=22c55e&size=400&font-size=0.3&bold=true`}
                      className="w-full h-full object-cover rounded-[2.8rem] transition-all duration-500 opacity-80 group-hover:opacity-100"
                      alt={member.name}
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-1 tracking-tight">{member.name}</h4>
                  <p className="text-[#22c55e] font-bold tracking-[0.2em] text-[10px] uppercase">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-32 bg-[#080b0c] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#22c55e]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-20 items-center max-w-6xl mx-auto">
            <div className="md:w-1/2 text-left">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Webinars</h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed mb-10">
                Live, interactive sessions that provide practical guidance on studying abroad, scholarships, and navigating global opportunities, led by experienced mentors and guest speakers.
              </p>
              <button className="px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-[#22c55e] transition-all text-lg">
                Join Next Session
              </button>
            </div>
            <div className="md:w-1/2 relative group">
              <div className="relative aspect-square md:aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl">
                <Image src="/classroom-bg.jpg" alt="Webinar" fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-10 left-10 p-2 bg-[#22c55e] text-black font-black text-[10px] rounded uppercase tracking-widest">Live Interactive</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-32 bg-[#06090a] text-center">
        <div className="container mx-auto px-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-20 rounded-[4rem] border border-white/5 bg-gradient-to-t from-white/[0.02] to-transparent inline-block max-w-4xl w-full"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">Transforming the country.</h2>
            <p className="text-xl text-gray-400 mb-12 font-medium">Be part of the generation that competes globally.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-12 py-5 bg-[#22c55e] text-black font-black rounded-2xl hover:ring-8 hover:ring-[#22c55e]/10 transition-all text-lg uppercase tracking-tight">
                Join Community
              </button>
              <button className="px-12 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all text-lg uppercase tracking-tight">
                Email List
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-[#06090a]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="SomaThrive Logo" width={32} height={32} className="invert opacity-20" />
            <span className="text-lg font-bold text-gray-700 tracking-tight italic">SomaThrive</span>
          </div>
          <p className="text-gray-800 text-xs font-black uppercase tracking-[0.3em] font-mono">
            &copy; {new Date().getFullYear()} SomaThrive
          </p>
          <div className="flex gap-10">
            {["Twitter", "LinkedIn", "Insta"].map((social) => (
              <Link key={social} href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-800 hover:text-[#22c55e] transition-colors">
                {social}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
