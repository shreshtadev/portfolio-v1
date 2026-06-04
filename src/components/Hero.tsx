import { motion } from "motion/react";
import { useEffect, useState } from "react";

type HeroProps = {
  name: string;
  title: string;
  summary: string;
  highlights?: string[];
};

const defaultHighlights = [
  "Cloud-native systems",
  "Microservices",
  "AI workflows",
];

export default function Hero({
  name,
  title,
  summary,
  highlights = defaultHighlights,
}: HeroProps) {
  const [displayedName, setDisplayedName] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = window.setInterval(() => {
      index += 1;
      setDisplayedName(name.slice(0, index));

      if (index >= name.length) {
        window.clearInterval(interval);
      }
    }, 85);

    return () => window.clearInterval(interval);
  }, [name]);

  return (
    <section className="space-y-3.5">
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 overflow-hidden text-[0.66rem] uppercase tracking-[0.34em] text-amber-300"
      >
        <span className="h-px w-7 shrink-0 bg-linear-to-r from-amber-400/0 via-amber-300/85 to-amber-400/0" />
        <span className="whitespace-nowrap">Professional profile</span>
        <span className="h-px flex-1 bg-white/10" />
      </motion.div>

      <div className="space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-[3.6rem]"
        >
          {displayedName}
          <span className="ml-1 inline-block animate-pulse text-amber-300/80">
            |
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-base font-light leading-relaxed text-(--theme-text-soft) md:text-lg"
        >
          {title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-sm leading-6 text-(--theme-text-muted) md:text-sm"
        >
          {summary}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap gap-2.5"
      >
        {highlights.map((item) => (
          <motion.span
            key={item}
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="theme-surface-soft inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] font-medium tracking-wide text-(--theme-text-soft) shadow-[0_12px_28px_rgba(15,23,42,0.2)]"
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
