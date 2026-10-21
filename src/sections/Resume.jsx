import { FileText, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="px-5 py-20 sm:px-8 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10"
      >
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-violet-300/20 bg-violet-300/10 text-violet-200">
            <FileText size={22} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
              Resume
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              My resume is coming soon.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">
              I’m preparing my resume. The download link will be available
              here once the PDF is ready.
            </p>
          </div>
        </div>

        <span className="inline-flex w-fit cursor-not-allowed items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/40">
          Not available yet <ArrowUpRight size={16} />
        </span>
      </motion.div>
    </section>
  );
}