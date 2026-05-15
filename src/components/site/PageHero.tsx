import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  highlight,
  children,
  image,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  children?: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative bg-coral-soft/40 text-foreground dark:bg-plum-deep dark:text-cream overflow-hidden">
      <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-coral/20 blur-3xl" />
      <div className="absolute -left-32 bottom-0 w-[400px] h-[400px] rounded-full bg-pink/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className={image ? "lg:col-span-7" : "lg:col-span-12"}>
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-coral mb-5">{eyebrow}</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl uppercase leading-[0.9]">
            {title}
            {highlight && <> <span className="text-coral">{highlight}</span></>}
          </h1>
          {children && <div className="mt-6 max-w-2xl text-lg text-muted-foreground dark:text-cream/80 leading-relaxed">{children}</div>}
        </div>
        {image && (
          <div className="lg:col-span-5">
            <img src={image} alt="" className="rounded-3xl aspect-[4/5] object-cover w-full border-4 border-coral/30" />
          </div>
        )}
      </div>
    </section>
  );
}
