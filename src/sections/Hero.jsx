import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useReducedMotion, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  Code2,
  Sparkles,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/YOUR_USERNAME",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/YOUR_USERNAME/",
    Icon: FaLinkedin,
  },
];

const skills = ["React", "Node.js", "Python", "AI/ML"];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : 0.6,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-3xl">
          <motion.div
            {...reveal(0.05)}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2 text-sm text-violet-200"
          >
            <Sparkles size={15} />
            Building digital experiences
          </motion.div>

          <motion.p
            {...reveal(0.12)}
            className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-slate-400"
          >
            Hello, I&apos;m Saimurali
          </motion.p>

          <motion.h1
            {...reveal(0.2)}
            className="text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl"
          >
            Turning ideas into{" "}
            <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              real experiences.
            </span>
          </motion.h1>

          <motion.p
            {...reveal(0.3)}
            className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            I&apos;m a B.Tech Computer Science student passionate about
            building modern web applications, exploring AI, and turning
            complex problems into useful solutions.
          </motion.p>

          <motion.div
            {...reveal(0.38)}
            className="mt-7 flex flex-wrap gap-2"
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-violet-400/40 hover:text-violet-200"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.div
            {...reveal(0.45)}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-violet-500 px-6 py-3.5 font-medium text-white transition-all hover:bg-violet-400 hover:shadow-lg hover:shadow-violet-500/20"
            >
              Explore my work
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3.5 font-medium text-slate-300 transition-colors hover:border-violet-400/30 hover:bg-white/[0.04] hover:text-violet-200"
            >
              Let&apos;s connect
              <ArrowDownRight size={17} />
            </a>
          </motion.div>

          <motion.div
            {...reveal(0.52)}
            className="mt-9 flex items-center gap-3"
          >
            <span className="mr-2 text-sm text-slate-500">Find me on</span>

            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-slate-300 transition-all hover:-translate-y-1 hover:border-violet-400/40 hover:text-violet-200"
              >
                <Icon size={21} aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          {...reveal(0.3)}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-8 rounded-full bg-violet-600/15 blur-[80px]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0d15]/90 p-5 shadow-2xl shadow-black/30 sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>

              <span className="font-mono text-xs text-slate-500">
                developer.js
              </span>
            </div>

            <div className="space-y-5 py-7 font-mono text-sm leading-7 sm:text-base">
              <p className="text-slate-500">
                <span className="text-violet-400">01</span>{" "}
                <span className="text-slate-400">// A little about me</span>
              </p>

              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">developer</span>{" "}
                <span className="text-slate-300">= {"{"}</span>
              </p>

              <p className="pl-5">
                <span className="text-slate-300">name:</span>{" "}
                <span className="text-green-300">&quot;Saimurali&quot;</span>,
              </p>

              <p className="pl-5">
                <span className="text-slate-300">role:</span>{" "}
                <span className="text-green-300">&quot;Developer&quot;</span>,
              </p>

              <p className="pl-5">
                <span className="text-slate-300">passion:</span>{" "}
                <span className="text-green-300">
                  &quot;Building things&quot;
                </span>
                ,
              </p>

              <p className="pl-5">
                <span className="text-slate-300">learning:</span>{" "}
                <span className="text-green-300">true</span>
              </p>

              <p className="text-slate-300">{"};"}</p>

              <div className="mt-7 rounded-xl border border-violet-400/15 bg-violet-400/[0.05] p-4">
                <div className="flex items-center gap-3">
                  <Code2 className="text-violet-300" size={21} />

                  <div>
                    <p className="text-sm text-white">Always building</p>
                    <p className="text-xs text-slate-500">Always learning</p>
                  </div>

                  <span className="ml-auto h-2 w-2 animate-pulse rounded-full bg-green-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 top-16 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#10121c] px-4 py-3 shadow-xl sm:flex sm:-right-8">
            <div className="rounded-xl bg-blue-400/10 p-2 text-blue-300">
              <Code2 size={20} />
            </div>

            <div>
              <p className="text-sm font-medium text-white">Clean code</p>
              <p className="text-xs text-slate-500">Thoughtful solutions</p>
            </div>
          </div>

          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#10121c] px-4 py-3 shadow-xl sm:-left-8">
            <div className="rounded-xl bg-violet-400/10 p-2 text-violet-300">
              <Sparkles size={20} />
            </div>

            <div>
              <p className="text-sm font-medium text-white">Curious mind</p>
              <p className="text-xs text-slate-500">Ideas into reality</p>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-violet-300 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll to explore
        </span>
        <ArrowDown size={17} className="animate-bounce" />
      </a>
    </section>
  );
}