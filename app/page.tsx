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
    { name: "Support", href: "#support" },
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

  const ctaCards = [
    {
      title: "Volunteer with us",
      desc: "Support Somali students by contributing your time and expertise. You can work with us in essay reviewing, interview preparation and student mentorship.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog"
    },
    {
      title: "Partner With Us",
      desc: "Collaborate with us to expand access to information, training and opportunities for Somali students.",
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
    <div className="min-h-screen bg-[#06090a] text-white font-inter selection:bg-[#22c55e]/30 selection:text-white">
      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? "bg-[#06090a]/80 backdrop-blur-2xl py-6" : "py-12"}`}>
        <div className="max-w-[1920px] mx-auto px-6 md:px-[191px] flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-2xl font-black tracking-tighter">Soma<span className="text-[#22c55e]">Thrive</span></Link>
            <span className="px-3 py-1 bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20 text-[9px] font-black uppercase tracking-[0.2em] rounded-full">Maintenance Undergoing</span>
          </div>
          <div className="hidden md:flex items-center gap-16">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-[10px] font-black text-gray-400 hover:text-white transition-colors tracking-[0.2em] uppercase">{link.name}</Link>
            ))}
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScLrSQ6vBLkGbd6vA3OYws0IdAHgHMZ9tkpKcO4-N_aIuT6Xg/viewform?usp=dialog" target="_blank" className="px-8 py-3 bg-[#22c55e] text-black text-[10px] font-black rounded-full hover:bg-white transition-all tracking-widest uppercase">Get Started</Link>
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
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-tighter mb-10">
                Helping Somali <br /> Students <br />
                <span className="text-[#22c55e]">Learn, Grow <br /> & Access Global Opportunities</span>
              </h1>

              <p className="text-lg text-gray-400 mb-12 max-w-xl leading-relaxed">
                SomaThrive is a student-focused education and opportunity platform supporting Somali youth to navigate scholarships, mentorship, and global learning pathways with clarity and confidence.
              </p>

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

        {/* FOCUS AREAS */}
        <section id="why" className="py-40 bg-[#080b0c]">
          <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
            <div className="max-w-3xl mb-24">
              <span className="text-[#22c55e] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">What SomaThrive Does</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter italic">Focus Areas</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
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
              ].map((area, idx) => (
                <div key={idx} className="group p-12 rounded-[3.5rem] bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all">
                  <div className="text-[#22c55e] font-black text-sm mb-8 tracking-widest uppercase">0{idx + 1}</div>
                  <h3 className="text-2xl font-black mb-6 italic">{area.title}</h3>
                  <p className="text-base text-gray-500 font-medium leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-32 pt-20 border-t border-white/5">
              <h3 className="text-2xl font-black mb-12">Why Students Trust SomaThrive</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  "Simple, clear guidance",
                  "Student-focused and practical",
                  "Built on real experience",
                  "Active community engagement"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                    <span className="text-gray-300 font-semibold uppercase text-xs tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* JOIN COMMUNITY */}
        <section id="support" className="py-20">
          <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
            <div className="bg-[#22c55e] rounded-[4rem] p-16 md:p-24 text-black text-center relative overflow-hidden">
              <div className="relative z-10 max-w-4xl mx-auto">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 block opacity-60">Join Our Community</span>
                <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tighter">Stay updated on scholarships, mentorship opportunities, and upcoming events.</h2>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link href="#" className="px-10 py-5 bg-black text-white font-black text-[10px] rounded-2xl hover:scale-105 transition-transform tracking-widest uppercase">Join WhatsApp Community</Link>
                  <Link href="#" className="px-10 py-5 bg-white text-black font-black text-[10px] rounded-2xl hover:scale-105 transition-transform tracking-widest uppercase">Join Email List</Link>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[120px] rounded-full pointer-events-none" />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-40 bg-[#06090a]">
          <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
            <div className="grid lg:grid-cols-2 gap-24 items-start mb-40">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10"
              >
                <Image src="/hero-2.jpg" alt="SomaThrive Community" fill className="object-cover" />
              </motion.div>

              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#22c55e] text-[10px] font-black uppercase tracking-[0.5em] mb-8 block">Who We Are</span>
                  <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tighter leading-tight">SomaThrive is a youth-led <br /> education platform.</h2>
                  <p className="text-lg text-gray-400 leading-relaxed font-medium">
                    Dedicated to supporting Somali students to access quality learning and global opportunities. We work at the intersection of education, mentorship, and technology to bridge the gap between talent and opportunity for Somali students.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5"
                  >
                    <h4 className="text-[#22c55e] text-[10px] font-black uppercase tracking-widest mb-6">Our Mission</h4>
                    <p className="text-base text-gray-300 font-medium leading-relaxed">
                      To increase access to global learning opportunities and academic support for Somali students.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5"
                  >
                    <h4 className="text-[#22c55e] text-[10px] font-black uppercase tracking-widest mb-6">Our Vision</h4>
                    <p className="text-base text-gray-300 font-medium leading-relaxed">
                      A confident generation of Somali students competing globally with knowledge, and transforming the country.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="pt-20">
              <h3 className="text-3xl font-black mb-20 uppercase italic text-center">Our Team</h3>
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
          </div>
        </section>

        {/* PROGRAMS SECTION */}
        <section id="programs" className="py-40 bg-[#080b0c]">
          <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
            <div className="max-w-3xl mb-24">
              <span className="text-[#22c55e] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Story / Programs</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter italic whitespace-nowrap">Programs & Learning Path</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-4xl font-black mb-8 uppercase italic">Webinars</h3>
                  <p className="text-lg text-gray-400 leading-relaxed font-medium">
                    Live, interactive sessions that provide practical guidance on studying abroad, scholarships, and navigating global opportunities, led by experienced mentors and guest speakers.
                  </p>
                </div>
                <div className="absolute top-10 right-10 text-8xl opacity-10 group-hover:opacity-30 transition-opacity">🎥</div>
              </div>

              <div className="p-16 rounded-[4rem] bg-[#22c55e] text-black relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-4xl font-black mb-8 uppercase italic">Mentorship Programs</h3>
                  <p className="text-lg font-black leading-relaxed">
                    Personalized one-on-one and group mentorship connecting students with experienced guides who support their academic, career, and personal growth every step of the way.
                  </p>
                </div>
                <div className="absolute top-10 right-10 text-8xl opacity-20">🌱</div>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION (Flipping Cards) */}
        <section id="support-cards" className="py-40">
          <div className="max-w-[1920px] mx-auto px-6 md:px-[191px]">
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter italic uppercase">Support Our Mission</h2>
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
                    <div className="absolute inset-0 h-full w-full rounded-[4rem] bg-[#22c55e] p-12 text-black [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between items-start">
                      <p className="text-xl font-black leading-tight italic">{card.desc}</p>
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
                <span className="text-[#22c55e] text-[10px] font-black uppercase tracking-[0.5em] mb-8 block">Contact Us</span>
                <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter italic uppercase">Direct Contact</h2>

                <div className="space-y-12">
                  {[
                    { label: "Email", value: "contact@somathrive.com", icon: "✉️" },
                    { label: "WhatsApp", value: "+252 61 XXX XXXX", icon: "💬" },
                    { label: "Social Media", value: "@SomaThrive", icon: "📱" }
                  ].map((item, idx) => (
                    <motion.div key={idx} whileHover={{ x: 10 }} className="flex gap-10 items-center">
                      <div className="text-3xl text-[#22c55e]">{item.icon}</div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">{item.label}</h4>
                        <p className="text-2xl font-black uppercase italic leading-none">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 relative">
                <h3 className="text-2xl font-black mb-12 uppercase italic">Simple Contact Form</h3>
                <form className="space-y-12">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="relative group">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4 block">Name</label>
                      <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#22c55e] transition-colors text-xl font-bold uppercase" placeholder="Your Name" />
                    </div>
                    <div className="relative group">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4 block">Email</label>
                      <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#22c55e] transition-colors text-xl font-bold uppercase" placeholder="email@address.com" />
                    </div>
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4 block">Message</label>
                    <textarea rows={1} className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-[#22c55e] transition-colors text-xl font-bold uppercase resize-none" placeholder="Your Message" />
                  </div>
                  <button className="px-16 py-8 bg-[#22c55e] text-black font-black text-xs rounded-full hover:bg-white transition-all tracking-widest uppercase">
                    Send Message
                  </button>
                </form>
              </div>
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
