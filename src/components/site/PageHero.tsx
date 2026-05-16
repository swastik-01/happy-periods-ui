import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  highlight,
  children,
  image,
  imageShape = "portrait",
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  children?: ReactNode;
  image?: string;
  imageShape?: "portrait" | "wide";
}) {
  const isWideImage = imageShape === "wide";

  return (
    <section className="relative bg-coral-soft/40 text-foreground dark:bg-plum-deep dark:text-cream overflow-hidden">
      <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-coral/20 blur-3xl" />
      <div className="absolute -left-32 bottom-0 w-[400px] h-[400px] rounded-full bg-pink/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 md:py-14 lg:grid-cols-12 lg:px-8 lg:py-16">
        <div className={image ? (isWideImage ? "min-w-0 lg:col-span-6" : "min-w-0 lg:col-span-7") : "min-w-0 lg:col-span-12"}>
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.3em] text-coral">{eyebrow}</span>
          <h1 className="font-display text-4xl uppercase leading-[0.9] sm:text-5xl lg:text-7xl">
            {title}
            {highlight && <> <span className="text-coral">{highlight}</span></>}
          </h1>
          {children && <div className="mt-5 max-w-[20rem] text-base leading-relaxed text-muted-foreground dark:text-cream/80 sm:max-w-2xl sm:text-lg">{children}</div>}
        </div>
        {image && (
          <div className={isWideImage ? "min-w-0 lg:col-span-6" : "min-w-0 lg:col-span-5"}>
            <img
              src={image}
              alt=""
              className={`${isWideImage ? "aspect-[16/10]" : "aspect-[4/5]"} w-full rounded-[8px] border-4 border-coral/30 object-cover`}
            />
          </div>
        )}
      </div>
    </section>
  );
}
