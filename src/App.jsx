
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail,
  Sparkles,
} from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiVite,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiMysql,
  SiFigma,
  SiPostman,
  SiNpm,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Certificates from "./sections/Certificates";
import Resume from "./sections/Resume";

const stats = [
  { value: "01", label: "Developer mindset" },
  { value: "MERN", label: "Full-stack development" },
  { value: "AI", label: "Intelligence and innovation" },
];

const skillGroups = [
  {
    title: "Frontend",
    description: "Building polished, responsive user experiences.",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Vite", icon: SiVite, color: "#A78BFA" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    title: "Backend",
    description: "Creating APIs and application logic.",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
    ],
  },
  {
    title: "Database",
    description: "Managing application data and persistence.",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Mongoose", icon: SiMongoose, color: "#880000" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Tools I use to build, test, and manage projects.",
    skills: [
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "npm", icon: SiNpm, color: "#CB3837" },
    ],
  },
];

const projects = [
  {
    number: "01",
    category: "AI · REMOTE SENSING",
    title: "SATQUERY AI",
    description:
      "A natural-language satellite intelligence platform designed to help users search satellite imagery and explore changes over time without complicated GIS workflows.",
    tags: ["React", "TypeScript", "FastAPI", "PyTorch", "PostGIS"],
    github: "",
    demo: "",
  },
  {
    number: "02",
    category: "FULL-STACK · AI",
    title: "AI Chatbot",
    description:
      "An AI-powered chat application featuring a React interface, Node.js backend, authentication, and saved conversation history.",
    tags: ["React", "Node.js", "Express", "MongoDB", "AI APIs"],
    github: "",
    demo: "",
  },
  {
    number: "03",
    category: "FRONTEND · PERSONAL BRAND",
    title: "Developer Portfolio",
    description:
      "A responsive personal portfolio showcasing projects, technical skills, certifications, and development progress.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "",
    demo: "",
  },
];

const journey = [
  {
    year: "Present",
    title: "B.Tech in Computer Science",
    organization: "Rai University",
    description:
      "Developing a foundation in computer science while building practical programming and software development skills.",
  },
  {
    year: "Building",
    title: "Full-Stack Development",
    organization: "Personal projects",
    description:
      "Practising React, Node.js, Express, MongoDB, APIs, and responsive web development through hands-on projects.",
  },
  {
    year: "Exploring",
    title: "AI & Emerging Technologies",
    organization: "Continuous learning",
    description:
      "Exploring Python, generative AI, machine learning, and satellite imagery analysis.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-violet-300"
      >
        {eyebrow}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>

      {description && (
        <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <SectionHeading
            eyebrow="A little about me"
            title="Curiosity turns into code."
            description="I enjoy understanding how things work and turning ideas into practical digital experiences."
          />

          <div className="space-y-4 text-sm leading-8 text-white/60 sm:text-base">
            <p>
              I'm a B.Tech Computer Science student interested in full-stack
              development, artificial intelligence, and building useful
              software.
            </p>
            <p>
              I learn by building projects, solving problems, and experimenting
              with technologies that help bring ideas to life.
            </p>
            <p>
              My current focus is strengthening my development fundamentals
              while creating projects that demonstrate practical skills.
            </p>
          </div>

          <a
            href="#projects"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white transition hover:border-violet-300/60 hover:bg-violet-300/10"
          >
            Explore my work <ArrowUpRight size={16} />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/15 via-[#11101b] to-[#0a0a10] p-7 sm:p-10"
        >
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative">
            <div className="mb-8 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-violet-300/20 bg-violet-400/10">
                <Sparkles className="text-violet-300" size={22} />
              </div>

              <div>
                <p className="font-medium text-white">The way I build</p>
                <p className="mt-1 text-xs text-white/40">
                  Learn · Build · Improve
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                ["01", "Understand the problem"],
                ["02", "Design a clear solution"],
                ["03", "Build and test"],
                ["04", "Learn from each iteration"],
              ].map(([number, text]) => (
                <div
                  key={number}
                  className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.03] p-4"
                >
                  <span className="font-mono text-xs text-violet-300">
                    {number}
                  </span>
                  <span className="text-sm text-white/75">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-3 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
          >
            <p className="text-3xl font-semibold tracking-tight text-violet-200">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-white/45">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="My toolkit"
          title="Technologies I work with."
          description="The technologies and tools I use to build applications, manage data, and develop projects."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-violet-300/25 hover:bg-white/[0.04] sm:p-7"
            >
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {group.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/45">
                {group.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group/skill flex min-h-[64px] items-center gap-3 rounded-xl border border-white/[0.07] bg-black/20 px-3 py-3 transition-all duration-300 hover:border-violet-300/25 hover:bg-violet-300/[0.04]"
                    >
                      <Icon
                        size={23}
                        color={skill.color}
                        aria-hidden="true"
                        className="shrink-0 transition-transform duration-300 group-hover/skill:scale-110"
                      />

                      <span className="text-sm font-medium text-white/70 transition-colors group-hover/skill:text-white">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Ideas made tangible."
          description="A selection of projects I am developing to apply my skills to practical problems."
        />

        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group grid gap-7 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-6 sm:p-8 md:grid-cols-[100px_1fr_auto] md:items-start md:p-10"
            >
              <span className="font-mono text-sm text-violet-300">
                /{project.number}
              </span>

              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-violet-200/70">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white transition-colors group-hover:text-violet-200 sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 md:flex-col">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} source code`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs text-white/75 transition hover:border-violet-300/50 hover:text-white"
                  >
                    <Code2 size={15} /> Source
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs text-white/35">
                    <Code2 size={15} /> Source soon
                  </span>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} demo`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs text-white/75 transition hover:border-violet-300/50 hover:text-white"
                  >
                    <ExternalLink size={15} /> Live demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs text-white/35">
                    <ExternalLink size={15} /> Demo soon
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section id="journey" className="px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The journey"
          title="Always in progress."
          description="My path through computer science, hands-on projects, and continuous learning."
        />

        <div className="relative ml-2 space-y-8 border-l border-violet-300/20 pl-7 sm:ml-4 sm:pl-10">
          {journey.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
            >
              <span className="absolute -left-[35px] top-8 h-3 w-3 rounded-full border-2 border-violet-200 bg-[#09080f] shadow-[0_0_15px_rgba(167,139,250,0.65)] sm:-left-[48px]" />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                {item.year}
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-white/40">
                {item.organization}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 text-sm text-white/45">
          <GraduationCap size={19} className="text-violet-300" />
          Learning is a continuous process.
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const email = "YOUR_EMAIL@example.com";
  const subject = encodeURIComponent("Let's connect");
  const body = encodeURIComponent(
    "Hi Saimurali,\n\nI visited your portfolio and would like to connect."
  );

  return (
    <section id="contact" className="px-5 py-24 sm:px-8 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-violet-300/20 bg-gradient-to-br from-violet-500/15 via-[#171321] to-[#0c0b12] px-6 py-14 sm:px-12 sm:py-20 md:px-16"
      >
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-violet-200">
            Get in touch
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Have an idea?
            <br />
            <span className="text-violet-200">Let's build it.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            Interested in collaborating, discussing a project, or connecting
            with another developer? Send me a message.
          </p>

          <a
            href={`mailto:${email}?subject=${subject}&body=${body}`}
            className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.045] px-6 py-3.5 text-sm font-medium text-white/75 transition-all duration-300 hover:border-violet-300/30 hover:bg-white/[0.08] hover:text-white"
          >
            <Mail size={17} /> Let's talk <ArrowUpRight size={16} />
          </a>

          <p className="mt-4 text-xs text-white/35">
            Replace the placeholder email in App.jsx with your real email.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-5 py-7 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Saimurali. Built with intention.</p>

        <a
          href="#home"
          className="inline-flex items-center gap-2 transition hover:text-violet-200"
        >
          Back to top <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#09080f] text-white">
      <Navbar />

      <main>
        <div id="home">
          <Hero />
        </div>

        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <Certificates />
        <Resume />
        <JourneySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
