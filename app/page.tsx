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
    { name: "Support", href: "#cta" },
    { name: "Contact", href: "#contact" },
  ];

  const ctaItems = [
    {
      title: "Volunteer with us",
      desc: "Support Somali students by contributing your time and expertise. You can work with us in essay reviewing, interview preparation and student mentorship.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog"
    },
    {
      title: "Partner With Us",
      desc: "Collaborate with us to expand access to information, training and opportunities for Somali students. ",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog"
    },
    {
      title: "Host a Workshop",
      desc: "Invite SomaThrive to your school or community center to run a scholarship preparation or academic skills session for students.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog"
    },
    {
      title: "Refer a Student",
      desc: "Know a Somali student who could benefit from academic support or scholarship guidance? Refer them to SomaThrive.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog"
    },
    {
      title: "Share Your Story",
      desc: "Past scholarship recipients and university students are invited to share their journeys to help inform and inspire other Somali students.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-[#22c55e]/30 font-inter text-gray-200 bg-[#06090a]">
      {/* Navigation */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50">
        <nav
          id="home"
          className={`transition-all duration-500 rounded-full px-8 flex justify-between items-center ${isScrolled ? "glass-nav py-2 border border-white/10 shadow-2xl" : "py-3 bg-[#06090a]/40 backdrop-blur-md border border-white/5"
            }`}
        >
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Image src="/logo.png" alt="SomaThrive Logo" width={32} height={32} className="invert object-contain" />
            </div>
            <span className="text-xl font-roboto font-black tracking-tight text-white uppercase italic">Soma<span className="text-[#22c55e]">Thrive</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#community"
              className="px-6 py-2.5 bg-[#22c55e] text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-white transition-all transform hover:scale-105"
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
        </nav>
      </header>

      {/* Hero Section - KEEPS THE WIDE LAYOUT */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 bg-[#06090a] overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#22c55e]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-20 grid lg:grid-cols-2 gap-20 xl:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <span className="text-[#facc15] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">
              Empowering Somali Youth
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-roboto font-black leading-[0.95] mb-8 text-white tracking-tighter uppercase italic">
              Helping Students <br />
              <span className="text-[#22c55e]">Learn & Grow</span> <br />
              Globally
            </h1>
            <p className="text-base md:text-lg text-gray-400 mb-10 max-w-lg leading-relaxed font-medium">
              SomaThrive is a student-focused education and opportunity platform supporting Somali youth to navigate scholarships, mentorship, and global learning pathways with clarity and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="#programs" className="px-10 py-4 bg-[#22c55e] text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white transition-all hover:translate-y-[-2px] shadow-lg shadow-[#22c55e]/10 text-center">
                Explore Scholarships
              </Link>
              <Link href="#community" className="px-10 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white/10 transition-all text-center">
                Join Mentorship
              </Link>
            </div>
          </motion.div>

          {/* Capsule Image Mosaic */}
          <div className="relative h-[650px] hidden lg:grid grid-cols-2 gap-8 items-center">
            {/* Column 1 (Merged previous Col 2) */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="h-[320px] rounded-full overflow-hidden bg-white/5 border border-white/10 relative group shadow-2xl"
              >
                <Image src="/speaker-1.jpg" alt="SomaThrive Speaker" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="h-[220px] rounded-full overflow-hidden bg-[#22c55e]/20 border border-white/5 relative group"
              >
                <Image src="/classroom-bg.jpg" alt="Classroom" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                <div className="absolute inset-0 bg-[#22c55e]/10 mix-blend-overlay" />
              </motion.div>
            </div>

            {/* Column 2 (Merged previous Col 3) */}
            <div className="space-y-4 pt-16">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="h-[240px] rounded-full overflow-hidden bg-white/5 border border-white/10 relative group"
              >
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <p className="text-[10px] font-roboto font-black uppercase tracking-[0.3em] text-[#22c55e]">Empowering Dreams</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="h-[300px] rounded-full overflow-hidden border border-white/10 relative group shadow-2xl"
              >
                <Image src="/speaker-2.jpg" alt="SomaThrive Session" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* REVERTED: Focus Areas - Restore previous detail */}
      <section className="py-32 relative overflow-hidden bg-[#06090a]">
        <div className="container mx-auto px-6 text-center mb-24 relative z-10">
          <span className="text-[#22c55e] font-roboto font-black tracking-[0.4em] uppercase text-xs mb-4 block">What SomaThrive Does</span>
          <h2 className="text-4xl md:text-5xl font-roboto font-black mb-6 tracking-tight text-white uppercase italic">Our Focus Areas</h2>
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
              className="p-12 rounded-[2.5rem] glass-card group text-left border-l-4 border-l-transparent hover:border-l-[#22c55e] transition-all duration-500"
            >
              <h3 className="text-2xl font-roboto font-black mb-6 text-white group-hover:text-[#22c55e] transition-colors uppercase italic">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium mb-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REVERTED: Why Trust Us (Section restored) */}
      <section className="py-32 border-y border-white/5 bg-[#06090a]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-roboto font-black mb-10 text-white uppercase italic">Why Students Trust <br /><span className="text-[#22c55e]">SomaThrive</span></h2>
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
                  <h4 className="text-2xl font-roboto font-black mb-4 text-white uppercase italic">Join Our Community</h4>
                  <p className="text-gray-500 mb-10 leading-relaxed">Stay updated on scholarships, mentorship opportunities, and upcoming events.</p>
                  <div className="flex flex-col gap-4">
                    <button className="w-full py-4 bg-[#22c55e] text-black font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white transition-all shadow-lg shadow-[#22c55e]/20">
                      Join WhatsApp Community
                    </button>
                    <button className="w-full py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white/10 transition-all">
                      Join Email List
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVERTED: About Section (Restored detail) */}
      <section id="about" className="py-32 bg-[#06090a]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-24 mb-32">
              <div>
                <h2 className="text-4xl md:text-5xl font-roboto font-black mb-8 text-white uppercase italic">Who We Are</h2>
                <p className="text-xl text-gray-400 leading-relaxed font-medium">
                  SomaThrive is a youth-led education and opportunity platform dedicated to supporting Somali students to access quality learning and global opportunities. We work at the intersection of education, mentorship, and technology to bridge the gap between talent and opportunity for Somali students.
                </p>
              </div>
              <div className="space-y-12">
                <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#22c55e] mb-4">Our Mission</h3>
                  <p className="text-lg text-gray-300 font-medium">To increase access to global learning opportunities and academic support for Somali students.</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#22c55e] mb-4">Our Vision</h3>
                  <p className="text-lg text-gray-300 font-medium">A confident generation of Somali students competing globally with knowledge, and transforming the country.</p>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl font-roboto font-black text-white mb-2 uppercase tracking-widest italic">Our Team</h2>
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
                      className="w-full h-full object-cover rounded-[2.8rem] grayscale hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                      alt={member.name}
                    />
                  </div>
                  <h4 className="text-2xl font-roboto font-black text-white mb-1 uppercase italic tracking-tight">{member.name}</h4>
                  <p className="text-[#22c55e] font-black tracking-[0.2em] text-[10px] uppercase">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVERTED: Programs Section (Section Restored) */}
      <section id="programs" className="py-32 bg-[#080b0c] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#22c55e]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-20 items-center max-w-6xl mx-auto">
            <div className="md:w-1/2 text-left">
              <h2 className="text-5xl md:text-7xl font-roboto font-black text-white mb-8 tracking-tighter uppercase italic">Webinars</h2>
              <p className="text-2xl text-gray-400 font-medium leading-relaxed mb-10">
                Live, interactive sessions that provide practical guidance on studying abroad, scholarships, and navigating global opportunities.
              </p>
              <button className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-[#22c55e] transition-all">
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

      {/* CALL TO ACTION - Flipping Cards - KEEPS THESE */}
      <section id="cta" className="py-32 bg-[#080b0c] overflow-hidden">
        <div className="container mx-auto px-6 mb-20 text-center">
          <span className="text-[#22c55e] font-roboto font-black tracking-[0.4em] uppercase text-xs mb-4 block">Take the next step</span>
          <h2 className="text-4xl md:text-5xl font-roboto font-black text-white uppercase italic">Collaborate With Us</h2>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {ctaItems.map((item, idx) => (
            <div key={idx} className="group h-[400px] [perspective:1000px]">
              <div className="relative h-full w-full rounded-[3rem] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
                {/* Front Side */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white/[0.03] border border-white/5 rounded-[3rem] [backface-visibility:hidden]">
                  <div className="w-16 h-16 rounded-full bg-[#22c55e]/10 flex items-center justify-center mb-6 text-2xl">✨</div>
                  <h3 className="text-xl font-roboto font-black text-white uppercase italic leading-tight">{item.title}</h3>
                  <div className="mt-8 text-[10px] font-black uppercase tracking-widest text-[#22c55e] group-hover:opacity-0 transition-opacity">Learn More</div>
                </div>
                {/* Back Side */}
                <div className="absolute inset-0 h-full w-full rounded-[3rem] bg-[#22c55e] p-8 text-black [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-roboto font-black uppercase italic mb-4">{item.title}</h3>
                    <p className="text-sm font-bold leading-relaxed">{item.desc}</p>
                  </div>
                  <Link href={item.link} target="_blank" className="w-full py-4 bg-black text-white font-black uppercase tracking-widest text-[10px] rounded-2xl text-center hover:bg-white hover:text-black transition-colors">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVERTED: Contact Section (Restore detail) */}
      <section id="contact" className="py-32 bg-[#06090a]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-roboto font-black mb-8 text-white uppercase italic leading-none">Contact Us</h2>
              <p className="text-gray-400 mb-12 font-medium">Reach out to us for any inquiries or collaborations. Our team is ready to support you.</p>

              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl group-hover:bg-[#22c55e] group-hover:text-black transition-all">✉️</div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#22c55e] mb-1">Email</h4>
                    <p className="text-lg font-roboto font-bold text-white">contact@somathrive.com</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl group-hover:bg-[#22c55e] group-hover:text-black transition-all">💬</div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#22c55e] mb-1">WhatsApp</h4>
                    <p className="text-lg font-roboto font-bold text-white">+252 61 XXX XXXX</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl group-hover:bg-[#22c55e] group-hover:text-black transition-all">📱</div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#22c55e] mb-1">Social Media</h4>
                    <p className="text-lg font-roboto font-bold text-white">@SomaThrive</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5">
              <form className="space-y-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 block">Your Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#22c55e] transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 block">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#22c55e] transition-colors" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 block">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#22c55e] transition-colors resize-none" placeholder="How can we help you?" />
                </div>
                <button className="w-full py-5 bg-[#22c55e] text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white transition-all transform hover:translate-y-[-2px]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Restored Detail */}
      <footer className="py-20 border-t border-white/5 bg-[#06090a]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="SomaThrive Logo" width={32} height={32} className="invert opacity-20" />
            <span className="text-sm font-roboto font-black text-gray-600 tracking-tighter uppercase italic">SomaThrive</span>
          </div>
          <p className="text-gray-800 text-[10px] font-black uppercase tracking-[0.5em]">
            &copy; {new Date().getFullYear()} SomaThrive. Established for Impact.
          </p>
          <div className="flex gap-10">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <Link key={social} href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-800 hover:text-[#22c55e] transition-colors">
                {social}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
