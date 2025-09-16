
"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  ChevronRight,
  Star,
  GraduationCap,
  BadgeCheck,
  Code,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// -------------------------------------------------------
// Animations (no Variants typing to avoid TS error)
// -------------------------------------------------------
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const section = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUpWithDelay = (i: number) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  },
});

// -------------------------------------------------------
// Data
// -------------------------------------------------------
const anish = {
  name: "Anish Pathak",
  title: "Frontend Developer • Computing Student",
  tagline:
    "Passionate about frontend development and modern web experiences. Skilled in creating responsive, animated, and user-friendly applications with a focus on accessibility.",
  location: "Kamalpokhari, Kathmandu",
  phone: "9860909930",
  email: "anishpathak132@gmail.com",
  github: "https://github.com/anishpathak08",
  linkedin: "https://www.linkedin.com/in/anish-pathak-845119316/",
  cvUrl: "/Anish Pathak CV.pdf",
};

const skills = {
  technical: ["HTML", "CSS", "JavaScript", "Python", "Java", "Responsive Web Design"],
  learning: ["React", "Tailwind CSS", "Next.js"],
  soft: [
    "Communication",
    "Time Management",
    "Team Collaboration",
    "Problem Solving",
    "Project Management",
  ],
};

const projects = [
  {
    title: "Furniture Management System",
    stack: ["Python"],
    description:
      "Built a furniture retail system with automated stock monitoring, product management, and invoice generation.",
    links: { github: "#", live: "#" },
  },
  {
    title: "Full-Stack E-commerce Website",
    stack: ["Java", "MVC"],
    description:
      "Developed a shopping platform with authentication, product catalog, and order management using MVC architecture.",
    links: { github: "#", live: "#" },
  },
  {
    title: "GUI-Based OOP Application",
    stack: ["Java"],
    description:
      "Designed a CRUD desktop application demonstrating OOP principles in an interactive GUI.",
    links: { github: "#", live: "#" },
  },
  {
    title: "Customer Service Request Data Analysis",
    stack: ["Python", "Pandas"],
    description:
      "Performed data exploration and trend analysis on real complaint datasets to improve service quality.",
    links: { github: "#", live: "#" },
  },
];

const education = [
  {
    degree: "BSc (Hons) Computing",
    org: "Islington College • London Metropolitan University",
    time: "2023 – Present",
    detail: "Kamal Marg, Kamalpokhari, Kathmandu",
  },
  {
    degree: "+2 (SLC)",
    org: "New Horizon College",
    time: "2020 – 2022",
    detail: "Butwal, Rupandehi",
  },
  {
    degree: "SEE",
    org: "New Horizon English Boarding School",
    time: "2020",
    detail: "Butwal, Rupandehi",
  },
];

const experience = [
  {
    role: "Intern • Customer Success Representative (CSR)",
    org: "ING Skill Academy",
    time: "Dec 2024 – Jul 2025",
    detail:
      "Handled user queries, coordinated feedback loops, and collaborated with product/engineering teams to improve the learner experience.",
  },
];

const certifications = [
  { name: "AWS Academy Cloud Foundations", url: "https://www.credly.com/go/005Gz4p0" },
  { name: "AWS Academy Data Engineering", url: "https://www.credly.com/go/Umu1nXxL" },
  { name: "AWS Academy Machine Learning Foundations", url: "https://www.credly.com/go/iMIW0LDY" },
  { name: "AWS Academy Machine Learning for NLP", url: "https://www.credly.com/go/X3fAGL5E" },
];

// -------------------------------------------------------
// UI Components
// -------------------------------------------------------
function SectionHeader({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="rounded-full p-2 bg-gradient-to-tr from-pink-500 to-purple-600 shadow-lg shadow-pink-500/30">
        <Icon className="size-5" />
      </div>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl p-5 bg-white/5 backdrop-blur-md border border-white/10 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/30 transition-all"
    >
      {children}
    </motion.div>
  );
}

function NavBar() {
  const items = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#certs", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <div className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="text-lg font-bold tracking-widest text-white">ANISH</a>
        <nav className="hidden gap-6 md:flex">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-sm text-white/70 hover:text-pink-400 transition">{it.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={anish.github} target="_blank" className="p-2 hover:text-pink-400"><Github className="size-5" /></a>
          <a href={anish.linkedin} target="_blank" className="p-2 hover:text-pink-400"><Linkedin className="size-5" /></a>
          <a href={anish.cvUrl} className="hidden md:inline-flex items-center gap-2 rounded-xl border border-pink-500/40 px-3 py-2 text-xs hover:bg-pink-500/20"><Download className="size-4" /> Download CV</a>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------
// Page
// -------------------------------------------------------
export default function PortfolioAnish() {
  return (
    <div className="min-h-dvh w-full bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white">
      <NavBar />
      <main className="mx-auto max-w-6xl px-4 md:px-6 space-y-24 py-12">

        {/* Hero */}
        <motion.section id="home" initial="hidden" animate="visible" variants={section} className="text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            {anish.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-3 text-lg md:text-xl text-white/80">{anish.title}</motion.p>
          <motion.p variants={fadeUp} className="mt-3 text-sm md:text-base text-white/70">{anish.tagline}</motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex items-center justify-center gap-4">
            <Button asChild className="rounded-xl bg-pink-600 hover:bg-pink-500">
              <a href="#projects" className="flex items-center gap-2">View Projects <ChevronRight className="size-4" /></a>
            </Button>
            <Button asChild variant="secondary" className="rounded-xl border border-purple-500 bg-purple-600/30 text-white hover:bg-purple-600/50">
              <a href="#contact" className="flex items-center gap-2">Contact Me <Mail className="size-4" /></a>
            </Button>
          </motion.div>
        </motion.section>

        {/* About */}
        <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={section}>
          <SectionHeader icon={Code} title="About Me" />
          <Card><p>{anish.tagline}</p></Card>
        </motion.section>

        {/* Skills */}
        <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={section}>
          <SectionHeader icon={Star} title="Skills" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card><h3 className="font-semibold mb-2">Technical</h3><div className="flex flex-wrap gap-2">{skills.technical.map((s) => <span key={s} className="px-3 py-1 rounded-full bg-purple-600/40 text-sm">{s}</span>)}</div></Card>
            <Card><h3 className="font-semibold mb-2">Learning</h3><div className="flex flex-wrap gap-2">{skills.learning.map((s) => <span key={s} className="px-3 py-1 rounded-full bg-pink-600/40 text-sm">{s}</span>)}</div></Card>
            <Card><h3 className="font-semibold mb-2">Soft Skills</h3><div className="flex flex-wrap gap-2">{skills.soft.map((s) => <span key={s} className="px-3 py-1 rounded-full bg-white/10 text-sm">{s}</span>)}</div></Card>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={section}>
          <SectionHeader icon={Code} title="Projects" />
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div key={p.title} variants={fadeUpWithDelay(i)} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-white/70 mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">{p.stack.map((s) => <span key={s} className="px-3 py-1 rounded-full bg-pink-500/30 text-sm">{s}</span>)}</div>
                <div className="flex gap-3">
                  <a href={p.links.github} className="text-sm hover:text-pink-400 flex items-center gap-1"><Github className="size-4" /> Code</a>
                  <a href={p.links.live} className="text-sm hover:text-pink-400 flex items-center gap-1"><ExternalLink className="size-4" /> Live</a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={section}>
          <SectionHeader icon={Briefcase} title="Experience" />
          {experience.map((e, i) => (
            <motion.div key={e.org} variants={fadeUpWithDelay(i)} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">{e.role}</h3>
              <p className="text-sm text-white/70">{e.org} • {e.time}</p>
              <p className="mt-2 text-sm">{e.detail}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Education */}
        <motion.section id="education" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={section}>
          <SectionHeader icon={GraduationCap} title="Education" />
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((ed, i) => (
              <motion.div key={ed.degree} variants={fadeUpWithDelay(i)} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold">{ed.degree}</h3>
                <p className="text-sm text-white/70">{ed.org}</p>
                <p className="text-xs text-white/60">{ed.time}</p>
                <p className="text-xs text-white/60">{ed.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section id="certs" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={section}>
          <SectionHeader icon={BadgeCheck} title="Certifications" />
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((c, i) => (
              <motion.div key={c.name} variants={fadeUpWithDelay(i)} className="rounded-xl border border-white/10 bg-white/5 p-5 flex justify-between items-center">
                <p>{c.name}</p>
                <a href={c.url} target="_blank" className="text-pink-400 hover:underline flex items-center gap-1"><ExternalLink className="size-4" /> View</a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={section}>
          <SectionHeader icon={Mail} title="Contact" />
          <Card>
            <form action="https://formspree.io/f/xyzdawnr" method="POST" className="space-y-4">
              <input type="text" name="name" placeholder="Your Name"
                className="w-full rounded-lg border border-purple-500/40 bg-black/40 px-4 py-2 outline-none focus:border-pink-500" required />
              <input type="email" name="email" placeholder="Your Email"
                className="w-full rounded-lg border border-purple-500/40 bg-black/40 px-4 py-2 outline-none focus:border-pink-500" required />
              <textarea name="message" rows={5} placeholder="Your Message"
                className="w-full rounded-lg border border-purple-500/40 bg-black/40 px-4 py-2 outline-none focus:border-pink-500" required />
              <button type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 py-2 font-semibold hover:opacity-90 transition">
                Send Message
              </button>
            </form>
          </Card>
        </motion.section>

      </main>
      <footer className="mx-auto mt-16 max-w-6xl px-4 pb-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} {anish.name}. Built with React, Tailwind & Framer Motion.
      </footer>
    </div>
  );
}
