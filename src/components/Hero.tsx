import { motion } from "motion/react";
import { useEffect, useState } from "react";

const ScrambledText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let frame = 0;

    const interval = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";

          if (index < frame) {
            return text[index];
          }

          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayText(scrambled);

      frame += 0.5;

      if (frame >= text.length) {
        setDisplayText(text);
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

export default function Hero() {
  const text = "Chinmai D Bharadwaj";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 100); // typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4"
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.h1>
    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 0.2,
                        duration: 0.8,
                      }}
                      className="text-xl md:text-2xl text-slate-400 font-light flex items-center gap-3"
                    >
                      <ScrambledText text="Senior Full-Stack Developer & Entrepreneur" />
                    </motion.h2>
    </>
  );
}