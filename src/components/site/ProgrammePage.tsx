import { SiteLayout } from "./Layout";
import { PageHero } from "./PageHero";
import { ApplyForm } from "./ApplyForm";
import { motion } from "framer-motion";

export type ProgrammeData = {
  slug: string;
  title: string;
  highlight?: string;
  eyebrow: string;
  intro: string;
  hero: string;
  whatWeDo: { heading: string; bullets: string[]; body?: string };
  impact: { stats: { num: string; label: string }[]; images: string[]; story?: string };
  formFields?: { name: string; label: string; type?: string; required?: boolean; rows?: number }[];
};

export function ProgrammePage({ data }: { data: ProgrammeData }) {
  return (
    <SiteLayout>
      <PageHero eyebrow={data.eyebrow} title={data.title} highlight={data.highlight} image={data.hero}>
        {data.intro}
      </PageHero>

      <section id="what-we-do" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-coral">What we do</span>
            <h2 className="font-display text-4xl lg:text-5xl uppercase mt-3">{data.whatWeDo.heading}</h2>
            {data.whatWeDo.body && <p className="mt-5 text-muted-foreground leading-relaxed">{data.whatWeDo.body}</p>}
          </div>
          <ul className="space-y-4">
            {data.whatWeDo.bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-2xl bg-cream border border-border"
              >
                <span className="font-display text-3xl text-coral">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-foreground">{b}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section id="impact" className="bg-plum text-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">Our Impact</span>
          <h2 className="font-display text-4xl lg:text-5xl uppercase mt-3">By the numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {data.impact.stats.map((s) => (
              <div key={s.label} className="bg-cream/5 border border-cream/10 p-6 rounded-2xl">
                <div className="font-display text-5xl text-coral">{s.num}</div>
                <div className="text-xs uppercase tracking-[0.2em] mt-2 text-cream/70">{s.label}</div>
              </div>
            ))}
          </div>
          {data.impact.images.length > 0 && (
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
              {data.impact.images.map((img, i) => (
                <img key={i} src={img} alt="Impact moment" className="rounded-2xl aspect-[4/3] object-cover w-full" />
              ))}
            </div>
          )}
          {data.impact.story && <p className="mt-8 text-cream/80 max-w-3xl leading-relaxed">{data.impact.story}</p>}
        </div>
      </section>

      <section id="apply" className="py-20 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">Apply Now</span>
          <h2 className="font-display text-4xl lg:text-5xl uppercase mt-3">Get this programme at your space</h2>
          <p className="mt-4 text-muted-foreground">Tell us a bit about yourself and we'll be in touch within 48 hours.</p>
          <div className="mt-8">
            <ApplyForm programme={data.title} fields={data.formFields} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
