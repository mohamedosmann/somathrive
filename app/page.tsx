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
    <div className="min-h-screen bg-[#06090a] text-white font-inter selection:bg-[#22c55e]/20">
      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-[#06090a]/90 backdrop-blur-xl border-b border-white/5 py-4" : "py-10"}`}>
        <div className="max-w-[1920px] mx-auto px-6 md:px-[191px] flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter">Soma<span className="text-[#22c55e]">Thrive</span></Link>
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors tracking-wide uppercase">{link.name}</Link>
            ))}
            <Link href="#support" className="px-6 py-2.5 bg-[#22c55e] text-black text-[13px] font-bold rounded-full hover:bg-white transition-all transform active:scale-95">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-[1920px] mx-auto px-6 md:px-[191px] grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1] tracking-tight mb-10">
              Helping Somali Students <br />
              Learn, Grow & Access <br />
              <span className="text-[#22c55e]">Global Opportunities</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-xl font-medium">
              SomaThrive is a student-focused education and opportunity platform supporting Somali youth to navigate scholarships, mentorship, and global learning pathways with clarity and confidence.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog" target="_blank" className="px-10 py-5 bg-[#22c55e] text-black font-bold text-sm rounded-xl hover:bg-white transition-all shadow-xl shadow-[#22c55e]/10">
                Explore Scholarships
              </Link>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog" target="_blank" className="px-10 py-5 border border-white/10 text-white font-bold text-sm rounded-xl hover:bg-white/5 transition-all">
                Join Mentorship
              </Link>
            </div>
          </motion.div>

          <div className="relative grid grid-cols-2 gap-6 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/10 mt-16"
            >
              <Image src="/hero-2.jpg" alt="Community" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10"
            >
              <Image src="/hero-1.png" alt="Session" fill className="object-cover scale-110" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section id="programs" className="py-40 bg-[#080b0c]">
        <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
          <div className="max-w-3xl mb-24">
            <span className="text-[#22c55e] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">What We Do</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Focus Areas</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-[#22c55e]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e] mb-8 group-hover:bg-[#22c55e] group-hover:text-black transition-all">
                  {idx === 0 ? "✨" : idx === 1 ? "🤝" : "🌍"}
                </div>
                <h3 className="text-2xl font-bold mb-6">{area.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{area.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 pt-20 border-t border-white/5">
            <h3 className="text-2xl font-bold mb-12">Why Students Trust SomaThrive</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Simple, clear guidance",
                "Student-focused and practical",
                "Built on real experience",
                "Active community engagement"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="py-40 bg-[#06090a]">
        <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
          <div className="bg-[#22c55e] rounded-[4rem] p-16 md:p-32 text-black text-center relative overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-xs font-black uppercase tracking-[0.4em] mb-6 block opacity-60">Join Our Community</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">Stay updated on scholarships and events.</h2>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="#" className="px-10 py-5 bg-black text-white font-bold rounded-2xl hover:scale-105 transition-transform">Join WhatsApp Community</Link>
                <Link href="#" className="px-10 py-5 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-transform">Join Email List</Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[120px] rounded-full pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-40 border-t border-white/5">
        <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
          <div className="grid lg:grid-cols-2 gap-32 items-center mb-40">
            <div>
              <span className="text-[#22c55e] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Who We Are</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-tight">Bridging the gap between talent and opportunity.</h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                SomaThrive is a youth-led education and opportunity platform dedicated to supporting Somali students to access quality learning and global opportunities. We work at the intersection of education, mentorship, and technology to bridge the gap between talent and opportunity for Somali students.
              </p>
              <div className="grid sm:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                <div>
                  <h4 className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-4">Our Mission</h4>
                  <p className="text-gray-300">To increase access to global learning opportunities and academic support for Somali students.</p>
                </div>
                <div>
                  <h4 className="text-[#22c55e] font-bold uppercase tracking-widest text-xs mb-4">Our Vision</h4>
                  <p className="text-gray-300">A confident generation of Somali students competing globally with knowledge, and transforming the country.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/10">
              <Image src="/hero-2.jpg" alt="About" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
          </div>

          <div className="mb-40">
            <h3 className="text-3xl font-bold mb-16 px-[191pxx]">Our Team</h3>
            <div className="grid md:grid-cols-3 gap-12">
              {team.map((member, idx) => (
                <div key={idx} className="group">
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                  <p className="text-[#22c55e] font-medium tracking-wide uppercase text-[11px]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS (Webinars & Mentorship) */}
      <section className="py-40 bg-[#080b0c]">
        <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "Webinars",
                desc: "Live, interactive sessions that provide practical guidance on studying abroad, scholarships, and navigating global opportunities, led by experienced mentors and guest speakers.",
                icon: "🎥"
              },
              {
                title: "Mentorship Programs",
                desc: "Personalized one-on-one and group mentorship connecting students with experienced guides who support their academic, career, and personal growth every step of the way.",
                icon: "🌱"
              }
            ].map((program, idx) => (
              <div key={idx} className="p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                <div className="text-4xl mb-8">{program.icon}</div>
                <h3 className="text-3xl font-bold mb-8">{program.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA CARDS */}
      <section id="support" className="py-40 bg-[#06090a]">
        <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Support Our Mission</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {ctaCards.map((card, idx) => (
              <div key={idx} className="group h-[450px] [perspective:1000px]">
                <div className="relative h-full w-full rounded-[3rem] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center bg-white/[0.03] border border-white/10 rounded-[3rem] [backface-visibility:hidden]">
                    <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                    <div className="mt-8 px-6 py-3 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#22c55e]">Learn More</div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-[3rem] bg-[#22c55e] p-10 text-black [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
                    <p className="text-lg font-bold leading-relaxed">{card.desc}</p>
                    <Link href={card.link} target="_blank" className="w-full py-4 bg-black text-white font-bold rounded-2xl text-center text-sm uppercase">
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
          <div className="grid lg:grid-cols-2 gap-32">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">Contact Us</h2>
              <p className="text-xl text-gray-400 mb-16">Talk to us directly or through social media.</p>

              <div className="space-y-12">
                {[
                  { label: "Email", value: "contact@somathrive.com", icon: "✉️" },
                  { label: "WhatsApp", value: "+252 61 XXX XXXX", icon: "💬" },
                  { label: "Social Media", value: "@SomaThrive", icon: "📱" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-[2rem] bg-white/5 flex items-center justify-center text-2xl group-hover:bg-[#22c55e] group-hover:text-black transition-all">{item.icon}</div>
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#22c55e] mb-2">{item.label}</h4>
                      <p className="text-2xl font-bold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-16 rounded-[4rem] bg-white/[0.02] border border-white/5">
              <form className="space-y-8">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-[#22c55e] transition-colors" placeholder="Omar Shunac" />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-[#22c55e] transition-colors" placeholder="omar@shunac.com" />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-[#22c55e] transition-colors resize-none" placeholder="Type your message here..." />
                </div>
                <button className="w-full py-6 bg-[#22c55e] text-black font-bold text-sm rounded-2xl hover:bg-white transition-all transform active:scale-95 shadow-xl shadow-[#22c55e]/10">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <p className="text-sm text-gray-500 font-medium tracking-widest">&copy; {new Date().getFullYear()} SOMATHRIVE. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
