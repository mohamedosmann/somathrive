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
  ];

  const ctaCards = [
    {
      title: "Volunteer with us",
      desc: "Support Somali students by contributing your time and expertise in essay reviewing, interview preparation and student mentorship.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog"
    },
    {
      title: "Partner With Us",
      desc: "Collaborate with us to expand access to information, training and opportunities for Somali students.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog"
    },
    {
      title: "Host a Workshop",
      desc: "Invite SomaThrive to your school or community center to run a scholarship preparation or academic skills session.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog"
    },
    {
      title: "Refer a Student",
      desc: "Know a Somali student who could benefit from academic support or scholarship guidance? Refer them to SomaThrive.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog"
    },
    {
      title: "Share Your Story",
      desc: "Past scholarship recipients are invited to share their journeys to help inform and inspire other Somali students.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog"
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
              <Link key={link.name} href={link.href} className="text-xs font-bold text-gray-400 hover:text-white transition-colors tracking-[0.2em] uppercase">{link.name}</Link>
            ))}
            <Link href="#support" className="px-8 py-3 bg-[#22c55e] text-black text-xs font-black rounded-full hover:bg-white transition-all tracking-widest uppercase">Get Started</Link>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION - REFINED LAYOUT */}
        <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20">
          <div className="max-w-[1920px] mx-auto px-6 md:px-[191px] w-full grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.95] tracking-tight mb-12">
                  Helping Somali Students <br />
                  <span className="text-[#22c55e]">Learn, Grow & Access <br className="hidden xl:block" /> Global Opportunities</span>
                </h1>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <p className="text-xl text-gray-400 leading-relaxed font-medium">
                    SomaThrive is a student-focused platform supporting Somali youth to navigate scholarships, mentorship, and global learning pathways with clarity and confidence.
                  </p>
                  <div className="flex flex-col gap-4">
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog" target="_blank" className="inline-flex items-center justify-center px-10 py-5 bg-[#22c55e] text-black font-black text-xs rounded-2xl hover:bg-white transition-all tracking-widest uppercase shadow-2xl shadow-[#22c55e]/20">
                      Explore Scholarships
                    </Link>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog" target="_blank" className="inline-flex items-center justify-center px-10 py-5 border border-white/10 text-white font-black text-xs rounded-2xl hover:bg-white/5 transition-all tracking-widest uppercase">
                      Join Mentorship
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl"
              >
                <Image src="/hero-1.png" alt="SomaThrive Session" fill className="object-cover scale-110" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06090a]/40 to-transparent" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-12 -left-20 w-80 aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl hidden xl:block"
              >
                <Image src="/hero-2.jpg" alt="Community" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FOCUS AREAS - BENTO GRID STYLE */}
        <section id="programs" className="py-40 bg-[#080b0c]">
          <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
              <div className="max-w-xl">
                <span className="text-[#22c55e] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">What SomaThrive Does</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tight">Focus Areas</h2>
              </div>
              <p className="max-w-md text-gray-500 text-lg leading-relaxed">Dedicated support at the intersection of education, mentorship, and technology.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {focusAreas.map((area, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="text-4xl mb-12 opacity-50 group-hover:opacity-100 transition-opacity">
                    {idx === 0 ? "01" : idx === 1 ? "02" : "03"}
                  </div>
                  <h3 className="text-3xl font-black mb-8 leading-tight">{area.title}</h3>
                  <p className="text-xl text-gray-400 leading-relaxed font-medium">{area.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-40 grid md:grid-cols-2 lg:grid-cols-4 gap-12 pt-20 border-t border-white/5">
              {[
                { title: "Simple, clear guidance", icon: "✓" },
                { title: "Student-focused and practical", icon: "✓" },
                { title: "Built on real experience", icon: "✓" },
                { title: "Active community engagement", icon: "✓" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <span className="text-[#22c55e] font-black text-xl">{item.icon}</span>
                  <span className="text-2xl font-black leading-tight text-white/80">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JOIN COMMUNITY - IMPACT SECTION */}
        <section className="py-40">
          <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
            <div className="bg-[#22c55e] rounded-[5rem] p-20 md:p-32 text-black relative overflow-hidden flex flex-col items-center text-center">
              <div className="relative z-10 max-w-5xl">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-8 block text-black/40">Collaborate with Us</span>
                <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tight leading-[0.9]">Join Our Community</h2>
                <p className="text-2xl font-bold mb-16 max-w-2xl mx-auto text-black/70 italic">Stay updated on scholarships, mentorship opportunities, and upcoming events.</p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link href="#" className="px-12 py-6 bg-black text-white font-black text-xs rounded-2xl hover:scale-105 transition-transform tracking-widest uppercase">Join WhatsApp Community</Link>
                  <Link href="#" className="px-12 py-6 bg-white text-black font-black text-xs rounded-2xl hover:scale-105 transition-transform tracking-widest uppercase">Join Email List</Link>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION - ASYMMETRIC GRID */}
        <section id="about" className="py-40">
          <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
            <div className="grid lg:grid-cols-2 gap-32 items-start mb-48">
              <div>
                <span className="text-[#22c55e] text-[10px] font-black uppercase tracking-[0.5em] mb-8 block">About SomaThrive</span>
                <h2 className="text-5xl md:text-8xl font-black mb-16 tracking-tighter leading-[0.9]">Who We Are</h2>
                <p className="text-2xl text-gray-400 leading-relaxed font-semibold italic text-balance mb-20 group">
                  SomaThrive is a youth-led education and opportunity platform dedicated to supporting Somali students to <span className="text-white group-hover:text-[#22c55e] transition-colors">access quality learning</span> and global opportunities.
                </p>

                <div className="grid md:grid-cols-2 gap-16 p-16 rounded-[4rem] bg-white/[0.02] border border-white/5">
                  <div>
                    <h4 className="text-[#22c55e] text-[10px] font-black uppercase tracking-widest mb-6">Our Mission</h4>
                    <p className="text-lg text-gray-300 font-medium leading-relaxed">To increase access to global learning opportunities and academic support for Somali students.</p>
                  </div>
                  <div>
                    <h4 className="text-[#22c55e] text-[10px] font-black uppercase tracking-widest mb-6">Our Vision</h4>
                    <p className="text-lg text-gray-300 font-medium leading-relaxed">A confident generation of Somali students competing globally with knowledge, and transforming the country.</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-[5rem] overflow-hidden border border-white/5 shadow-2xl">
                <Image src="/hero-2.jpg" alt="About" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
            </div>

            {/* TEAM SECTION */}
            <div>
              <div className="flex justify-between items-end mb-24">
                <h3 className="text-5xl font-black tracking-tight uppercase italic">Our Team</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
                {team.map((member, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden mb-10 grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/5">
                      <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                    <h4 className="text-2xl font-black uppercase mb-3">{member.name}</h4>
                    <p className="text-[#22c55e] text-xs font-black uppercase tracking-[0.2em]">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STORY / PROGRAMS */}
        <section className="py-40 bg-[#080b0c]">
          <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="p-16 md:p-24 rounded-[5rem] bg-white/[0.03] border border-white/5 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-5xl font-black mb-12 uppercase italic">Webinars</h3>
                  <p className="text-xl text-gray-400 leading-relaxed font-medium">Live, interactive sessions providing practical guidance on studying abroad and scholarships, led by experienced mentors and guest speakers.</p>
                </div>
                <div className="absolute top-10 right-10 text-8xl opacity-10 group-hover:opacity-30 transition-opacity">🎥</div>
              </div>
              <div className="p-16 md:p-24 rounded-[5rem] bg-[#22c55e] text-black relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-5xl font-black mb-12 uppercase italic">Mentorship</h3>
                  <p className="text-xl font-black leading-relaxed">Personalized mentorship connecting students with experienced guides who support academic, career, and personal growth at every step.</p>
                </div>
                <div className="absolute top-10 right-10 text-8xl opacity-20">🌱</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FLIPPING CARDS */}
        <section id="support" className="py-40">
          <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
            <div className="max-w-3xl mb-32">
              <span className="text-[#22c55e] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Collaborate</span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.9]">Support Our <br /> Mission</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {ctaCards.map((card, idx) => (
                <div key={idx} className="group h-[500px] [perspective:1500px]">
                  <div className="relative h-full w-full rounded-[4rem] transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-white/[0.02] border border-white/10 rounded-[4rem] [backface-visibility:hidden]">
                      <h3 className="text-3xl font-black uppercase leading-tight italic">{card.title}</h3>
                      <div className="mt-12 w-12 h-12 rounded-full border border-[#22c55e]/30 flex items-center justify-center text-[#22c55e] group-hover:bg-[#22c55e] group-hover:text-black transition-all">→</div>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 h-full w-full rounded-[4rem] bg-[#22c55e] p-12 text-black [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
                      <p className="text-2xl font-black leading-tight italic">{card.desc}</p>
                      <Link href={card.link} target="_blank" className="w-full py-6 bg-black text-white font-black text-xs rounded-2xl text-center uppercase tracking-widest hover:scale-105 transition-transform">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-40 bg-[#080b0c]">
          <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
            <div className="grid lg:grid-cols-12 gap-24 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter uppercase italic leading-[0.9]">Get in <span className="text-[#22c55e]">Touch</span></h2>
                <div className="space-y-12">
                  {[
                    { label: "Email", value: "contact@somathrive.com", icon: "✉️" },
                    { label: "WhatsApp", value: "+252 61 XXX XXXX", icon: "💬" },
                    { label: "Socials", value: "@SomaThrive", icon: "📱" }
                  ].map((item, idx) => (
                    <motion.div key={idx} whileHover={{ x: 10 }} className="flex gap-10 items-center">
                      <div className="text-3xl grayscale opacity-50">{item.icon}</div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-[#22c55e] mb-2">{item.label}</h4>
                        <p className="text-3xl font-black uppercase italic leading-none">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 p-20 rounded-[5rem] bg-white/[0.01] border border-white/5 relative">
                <form className="space-y-12">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="relative group">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4 block">Your Name</label>
                      <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#22c55e] transition-colors text-2xl font-black uppercase leading-none" />
                    </div>
                    <div className="relative group">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4 block">Email Address</label>
                      <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#22c55e] transition-colors text-2xl font-black uppercase leading-none" />
                    </div>
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4 block">Your Message</label>
                    <textarea rows={1} className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#22c55e] transition-colors text-2xl font-black uppercase leading-none resize-none" />
                  </div>
                  <button className="relative overflow-hidden group/btn px-16 py-8 bg-[#22c55e] text-black font-black text-xs rounded-full hover:bg-white transition-all tracking-widest uppercase">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">
          &copy; {new Date().getFullYear()} SomaThrive. Minimal Website Structure.
        </p>
      </footer>
    </div>
  );
}
