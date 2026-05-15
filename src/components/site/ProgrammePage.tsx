import { SiteLayout } from "./Layout";
import { PageHero } from "./PageHero";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROGRAMME_REGISTER_FORM_URL } from "@/lib/forms";

type TextSection = {
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ProgrammeData = {
  slug: string;
  title: string;
  highlight?: string;
  eyebrow: string;
  intro: string;
  hero: string;
  whatWeDo: TextSection & { heading: string };
  impact: TextSection & {
    heading?: string;
    sections?: TextSection[];
    stats?: { num: string; label: string }[];
    images?: string[];
  };
};

export function ProgrammePage({ data }: { data: ProgrammeData }) {
  const whatWeDoParagraphs = data.whatWeDo.paragraphs ?? [];
  const impactParagraphs = data.impact.paragraphs ?? [];
  const impactSections = data.impact.sections ?? [];
  const stats = data.impact.stats ?? [];
  const images = data.impact.images ?? [];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        highlight={data.highlight}
        image={data.hero}
      >
        {data.intro}
      </PageHero>

      <section id="what-we-do" className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="min-w-0 lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.3em] text-coral">What we do</span>
            <h2 className="mt-3 font-display text-4xl uppercase lg:text-5xl">
              {data.whatWeDo.heading}
            </h2>
          </div>
          <div className="min-w-0 space-y-5 text-lg leading-relaxed text-muted-foreground lg:col-span-8">
            {whatWeDoParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {data.whatWeDo.bullets && (
              <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                {data.whatWeDo.bullets.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-[8px] border border-border bg-cream p-5 text-base leading-relaxed text-foreground"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section id="impact" className="bg-plum py-12 md:py-16 text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">Impact</span>
          <h2 className="mt-3 font-display text-4xl uppercase lg:text-5xl">
            {data.impact.heading ?? "On-ground change"}
          </h2>

          {stats.length > 0 && (
            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[8px] border border-cream/10 bg-cream/5 p-6"
                >
                  <div className="font-display text-5xl text-coral">{stat.num}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-cream/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 max-w-4xl space-y-5 text-lg leading-relaxed text-cream/80">
            {impactParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {data.impact.bullets && (
              <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                {data.impact.bullets.map((item) => (
                  <li
                    key={item}
                    className="rounded-[8px] border border-cream/10 bg-cream/5 p-4 text-base text-cream"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {impactSections.map((section) => (
              <div key={section.title} className="pt-4">
                {section.title && (
                  <h3 className="font-display text-3xl uppercase text-coral">{section.title}</h3>
                )}
                <div className="mt-4 space-y-5">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        className="rounded-[8px] border border-cream/10 bg-cream/5 p-4 text-base text-cream"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {images.length > 0 && (
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
              {images.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt={`Impact moment ${index + 1}`}
                  className="aspect-[4/3] w-full rounded-[8px] object-cover"
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="apply" className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">Register here</span>
          <h2 className="mt-3 font-display text-4xl uppercase lg:text-5xl">
            Get this programme at your space
          </h2>
          <p className="mt-4 text-muted-foreground">
            Register through our Google Form and we'll be in touch within 48 hours.
          </p>
          <a
            href={PROGRAMME_REGISTER_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-4 font-semibold text-primary-foreground transition hover:scale-105"
          >
            Register now <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
