import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function HeroCarousel({ images, interval = 5500 }: { images: { src: string; alt: string }[]; interval?: number }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [paused, images.length, interval]);

  return (
    <div
      className="relative aspect-[4/5] overflow-hidden rounded-[8px] border-4 border-primary/30 bg-muted sm:aspect-[5/4]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence>
        <motion.img
          key={idx}
          src={images[idx].src}
          alt={images[idx].alt}
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 } }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-x-0 bottom-0 p-4 flex gap-1.5 justify-center bg-gradient-to-t from-black/40 to-transparent">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-3 bg-white/50"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
