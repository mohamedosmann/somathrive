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

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md py-4 border-b border-gray-100" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/logo.png" alt="SomaThrive" width={32} height={32} className="group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold tracking-tighter italic">Soma<span className="text-[#1a4d2e]">Thrive</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {["About", "Programs", "Community"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-500 hover:text-black transition-colors uppercase tracking-widest">
                {item}
              </Link>
            ))}
            <Link href="#community" className="px-6 py-2 bg-black text-white rounded-full text-xs font-bold hover:bg-[#1a4d2e] transition-colors">
              GET STARTED
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="inline-block px-3 py-1 bg-green-50 text-[#1a4d2e] text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
              Empowering Somali Youth
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-black leading-[1.05] tracking-tight mb-8 text-balance">
              Helping Somali Students <br />
              <span className="text-[#1a4d2e]">Learn, Grow</span> & Access <br />
              Global Opportunities
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-xl leading-relaxed font-medium">
              SomaThrive is a student-focused education and opportunity platform supporting Somali youth to navigate scholarships, mentorship, and global learning pathways with clarity and confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#programs" className="btn-brand">
                Explore Scholarships
              </Link>
              <Link href="#community" className="btn-outline">
                Join Mentorship
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/hero-student.jpg" alt="Student" fill className="object-cover" />
              </div>
              <div className="bg-[#1a4d2e] p-8 rounded-3xl text-white">
                <p className="text-3xl font-bold mb-2">2K+</p>
                <p className="text-xs font-medium uppercase tracking-widest opacity-60">Students Reached</p>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <p className="text-3xl font-bold mb-2 text-black">40+</p>
                <p className="text-xs font-medium uppercase tracking-widest text-gray-400">Scholarships</p>
              </div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/classroom-bg.jpg" alt="Classroom" fill className="object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="programs" className="section-padding bg-gray-50">
        <div className="container-narrow">
          <div className="max-w-2xl mb-20 text-left">
            <span className="text-[#1a4d2e] text-xs font-bold uppercase tracking-widest block mb-4">What SomaThrive Does</span>
            <h2 className="heading-lg mb-6">Our Focus Areas</h2>
            <p className="text-gray-500 text-lg">We bridge the gap between talent and opportunity through specialized support systems.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Scholarship Guidance", desc: "Clear, step-by-step guidance on international scholarships and study opportunities, delivered through online sessions and in-person meetups." },
              { title: "Academic Mentorship", desc: "Mentorship sessions that support students with academic planning, applications, and decision-making throughout their education journey." },
              { title: "Global Exposure", desc: "Information sharing, webinars, and peer learning that expose students to global academic and professional pathways." }
            ].map((item, idx) => (
              <div key={idx} className="card-minimal group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-[#1a4d2e] transition-colors">
                  <span className="text-lg group-hover:scale-110 transition-transform">{idx === 0 ? "🎓" : idx === 1 ? "🤝" : "🌍"}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#1a4d2e] transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/hero-student.jpg" alt="Mentorship" fill className="object-cover" />
              <div className="absolute inset-0 bg-[#1a4d2e]/10 mix-blend-overlay" />
            </div>
            <div>
              <h2 className="heading-lg mb-10">Why Students Trust <br /><span className="text-[#1a4d2e]">SomaThrive</span></h2>
              <div className="space-y-6">
                {[
                  "Simple, clear guidance",
                  "Student-focused and practical",
                  "Built on real experience and global exposure",
                  "Active community engagement"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-[#1a4d2e] text-xs group-hover:bg-[#1a4d2e] group-hover:text-white transition-all">✓</div>
                    <span className="text-lg font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section id="community" className="section-padding">
        <div className="container-narrow">
          <div className="bg-[#1a4d2e] rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">Join Our Community</h2>
              <p className="text-xl text-green-100/70 mb-12 font-medium">Stay updated on scholarships, mentorship opportunities, and upcoming events.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-10 py-5 bg-white text-[#1a4d2e] font-bold rounded-2xl hover:scale-105 transition-transform shadow-xl">
                  Join WhatsApp Community
                </button>
                <button className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-colors">
                  Join Email List
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-[#fcfcfc]">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-24 mb-32">
            <div>
              <h2 className="heading-lg mb-8">Who We Are</h2>
              <p className="text-xl text-gray-500 leading-relaxed font-medium">
                SomaThrive is a youth-led education and opportunity platform dedicated to supporting Somali students to access quality learning and global opportunities. We work at the intersection of education, mentorship, and technology to bridge the gap between talent and opportunity for Somali students.
              </p>
            </div>
            <div className="grid gap-12">
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#1a4d2e] mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 font-medium">To increase access to global learning opportunities and academic support for Somali students.</p>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#1a4d2e] mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 font-medium">A confident generation of Somali students competing globally with knowledge, and transforming the country.</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4 uppercase tracking-[0.1em]">Our Team</h2>
            <div className="h-1.5 w-16 bg-[#1a4d2e] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Deqa Daud", role: "Co-founder" },
              { name: "Farhia Dini", role: "Co-founder" },
              { name: "Amiro Osman", role: "Program Coordinator" }
            ].map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden bg-gray-100 border border-gray-100 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img
                    src={`https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=1a4d2e&color=fff&size=512&font-size=0.3&bold=true`}
                    className="w-full h-full object-cover"
                    alt={member.name}
                  />
                </div>
                <h4 className="text-2xl font-bold text-black mb-1">{member.name}</h4>
                <p className="text-[#1a4d2e] font-black uppercase tracking-[0.2em] text-[10px]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section-padding">
        <div className="container-narrow">
          <div className="bg-gray-50 rounded-[4rem] p-12 md:p-24 flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2">
              <span className="text-xs font-black uppercase tracking-widest text-[#1a4d2e] mb-6 block text-left">Programs / Webinars</span>
              <h2 className="text-5xl font-black text-black mb-10 text-left italic">Live Guidance. <br /> Global Insights.</h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10 text-left">
                Live, interactive sessions that provide practical guidance on studying abroad, scholarships, and navigating global opportunities, led by experienced mentors and guest speakers.
              </p>
              <button className="btn-brand text-left">Join Next Webinar</button>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-3xl">
                <Image src="/classroom-bg.jpg" alt="Webinar" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Next Session</p>
                  <p className="text-xl font-bold">Study Abroad Masterclass</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-gray-100 bg-white">
        <div className="container-narrow flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="SomaThrive" width={32} height={32} className="opacity-40" />
            <span className="text-lg font-bold text-gray-400 tracking-tighter uppercase italic">SomaThrive</span>
          </div>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.4em]">
            &copy; {new Date().getFullYear()} SomaThrive
          </p>
          <div className="flex gap-10">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <Link key={social} href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 hover:text-[#1a4d2e] transition-colors">
                {social}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
