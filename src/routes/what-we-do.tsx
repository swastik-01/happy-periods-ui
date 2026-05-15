import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";
import { PROGRAMME_REGISTER_FORM_URL } from "@/lib/forms";
import workshop from "@/assets/home/outreach.jpg";
import field from "@/assets/home/field.jpg";
import stage from "@/assets/home/stage.jpg";
import park from "@/assets/home/park.jpg";
import donate from "@/assets/donate.jpg";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — Safe n' Happy Periods" },
      {
        name: "description",
        content: "Workshops, Project RED, POSH training, and pad donation drives.",
      },
      { property: "og:title", content: "What We Do — Safe n' Happy Periods" },
      {
        property: "og:description",
        content: "Workshops, Project RED, POSH training, and pad donation drives.",
      },
      { property: "og:image", content: workshop },
    ],
  }),
  component: WhatWeDo,
});

const programs = [
  {
    eyebrow: "01 — Education",
    title: "Periods Awareness Workshops",
    body: "From first periods to menopause, our workshops make menstrual health make sense — across schools, colleges, and rural communities.",
    cta: "Schedule Workshop",
    href: PROGRAMME_REGISTER_FORM_URL,
    img: field,
  },
  {
    eyebrow: "02 — Train the Trainers",
    title: "Project RED",
    body: "Equipping individuals to lead informed, stigma-free, and inclusive conversations around menstruation. Be the reason someone finally understands periods.",
    cta: "Register here",
    href: PROGRAMME_REGISTER_FORM_URL,
    img: stage,
  },
  {
    eyebrow: "03 — Workplace Safety",
    title: "POSH Sessions",
    body: "We simplify the law, clear up the grey areas, and build a culture where safety, respect, and accountability are non-negotiable.",
    cta: "Book a POSH Session",
    href: PROGRAMME_REGISTER_FORM_URL,
    img: park,
  },
  {
    eyebrow: "04 — Access",
    title: "Pad Donation Drives",
    body: "Over 20% of menstruating people in India still rely on cloth, ash, or other unsafe materials. Support a period. Donate today.",
    cta: "Donate Now",
    href: "/donate",
    img: donate,
  },
];

function WhatWeDo() {
  return (
    <SiteLayout>
      <section className="bg-plum-deep text-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">What we do</span>
          <h1 className="font-display text-6xl lg:text-9xl uppercase mt-4 leading-[0.9]">
            Four programs.
            <br />
            <span className="text-coral">One mission.</span>
          </h1>
        </div>
      </section>

      <section className="py-20 space-y-24">
        {programs.map((p, i) => (
          <div key={p.title} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}
            >
              <div className="lg:[direction:ltr]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="rounded-3xl w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="lg:[direction:ltr]">
                <span className="text-xs uppercase tracking-[0.3em] text-coral">{p.eyebrow}</span>
                <h2 className="font-display text-5xl lg:text-6xl uppercase mt-3 text-balance">
                  {p.title}
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-lg">{p.body}</p>
                {p.href.startsWith("/") ? (
                  <Link
                    to={p.href}
                    className="inline-flex items-center gap-2 mt-8 bg-coral text-primary-foreground px-7 py-4 rounded-full font-semibold hover:scale-105 transition"
                  >
                    {p.cta} <ArrowRight size={18} />
                  </Link>
                ) : (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-8 bg-coral text-primary-foreground px-7 py-4 rounded-full font-semibold hover:scale-105 transition"
                  >
                    {p.cta} <ArrowRight size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
