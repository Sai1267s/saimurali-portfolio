
import { motion } from "framer-motion";
import { ArrowDownToLine, Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Python Certificate",
    issuer: "Python Programming",
    file: "/certificates/python-certificate.pdf",
  },
  {
    title: "Web Development Certificate",
    issuer: "Web Development",
    file: "/certificates/web-development.pdf",
  },
  {
    title: "AI & Machine Learning Certificate",
    issuer: "Artificial Intelligence",
    file: "/certificates/ai-ml-certificate.pdf",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="bg-[#09080f] px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">
            Learning milestones
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Certificates & achievements.
          </h2>
          <p className="mt-4 leading-7 text-white/50">
            Courses and learning milestones that support my development journey.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-violet-300/30"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200">
                <Award size={23} />
              </div>
              <h3 className="text-lg font-semibold text-white">{certificate.title}</h3>
              <p className="mt-2 text-sm text-white/45">{certificate.issuer}</p>
              <div className="mt-6 flex gap-3">
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  View <ExternalLink size={14} />
                </a>
                <a
                  href={certificate.file}
                  download
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-300 px-3 py-2 text-sm font-medium text-[#171020] transition hover:bg-violet-200"
                >
                  Download <ArrowDownToLine size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
