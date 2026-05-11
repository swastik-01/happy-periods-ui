import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/why-us")({
  head: () => ({ meta: [{ title: "Why Us — Safe n' Happy Periods" }, { name: "description", content: "Our partners, appraises and testimonies — why people choose Safe n' Happy Periods." }] }),
  component: WhyUs,
});

const partners = [
  "Amodini Foundation", "P&G Whisper", "UNICEF India", "Tata Trusts", "Mumbai Municipal", "Femme Inc.",
  "PadCare Labs", "MIJWAN", "Niine Movement", "WaterAid India", "BMC", "Save The Children",
];

const appraises = [
  { src: "Forbes India", text: "\"A grassroots movement turning silence into structural change.\"" },
  { src: "The Hindu", text: "\"Among the most effective community-led menstrual education programmes in India.\"" },
  { src: "Mid-Day", text: "\"Honest, warm, and uncompromising — exactly what menstrual education needs.\"" },
];

const testimony = [
  { name: "Priya, Class 9 student", text: "I always felt scared to ask. After the SNHP workshop, I asked everything — and now I'm helping my younger sister." },
  { name: "Ravi, HR Lead at a Mumbai firm", text: "Our period policy moved from a paragraph to a real practice because of SNHP." },
  { name: "Sunita, Anganwadi worker", text: "The training gave me confidence to lead these talks in 14 villages around mine." },
];

function WhyUs() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Why Us" title="Built on" highlight="trust.">
        A decade in. Hundreds of partners. Tens of thousands of voices. Here's what carries the work forward.
      </PageHero>

      <section id="partners" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">Our Partners</span>
          <h2 className="font-display text-4xl uppercase mt-3">In good company.</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
            {partners.map((p) => (
              <div key={p} className="bg-cream border border-border rounded-2xl py-6 text-center font-display text-lg uppercase tracking-wide hover:border-coral hover:text-coral transition">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="appraises" className="bg-plum text-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">Appraises</span>
          <h2 className="font-display text-4xl uppercase mt-3">In the press.</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {appraises.map((a) => (
              <div key={a.src} className="bg-cream/5 border border-cream/10 rounded-3xl p-7">
                <Quote className="text-coral" size={28} />
                <p className="mt-4 text-cream/90 leading-relaxed">{a.text}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-coral">{a.src}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimony" className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">Testimony</span>
          <h2 className="font-display text-4xl uppercase mt-3">Voices from the ground.</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {testimony.map((t) => (
              <div key={t.name} className="bg-background border border-border rounded-3xl p-7">
                <p className="text-foreground italic leading-relaxed">"{t.text}"</p>
                <p className="mt-5 text-sm font-semibold text-coral">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
