import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import sarika from "@/assets/team/sarika.jpg";
import rajni from "@/assets/team/rajni.jpg";
import ragini from "@/assets/team/ragini.png";
import swapnil from "@/assets/team/swapnil.png";
import mukesh from "@/assets/team/mukesh.png";
import ankita from "@/assets/team/ankita.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import whoWeAre from "@/assets/about-who-we-are.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Safe n' Happy Periods" },
      { name: "description", content: "Our story, mission, and the humans behind the movement making periods shame-free and joyful." },
      { property: "og:title", content: "About Us — Safe n' Happy Periods" },
      { property: "og:description", content: "Founded in 2016, we are on a mission to create effortless period conversations." },
      { property: "og:image", content: aboutHero },
    ],
  }),
  component: About,
});

const team = [
  {
    name: "Sarika Gupta",
    role: "Founder Trustee — Amodini Foundation, Founder — Safe N' Happy Periods",
    image: sarika
  },
  {
    name: "Rajni Gupta",
    role: "Trustee — Amodini Foundation, Primary Education Specialist",
    image: rajni
  },
  {
    name: "Ragini Gupta",
    role: "Co-founder — Safe N' Happy Periods, Development and PR Manager (USA)",
    image: ragini
  },
  {
    name: "Dr. Swapnil Gupta",
    role: "Trustee — Amodini Foundation, Medical Dr (Dallas), Community Health",
    image: swapnil
  },
  {
    name: "Mukesh Amra",
    role: "Design Element — Mission: Removing barriers and connecting individuals",
    image: mukesh
  },
  {
    name: "Ankita Tekwani",
    role: "Brand & Strategic Initiatives — Marketing Enthusiast",
    image: ankita
  },
];

const milestones = [
  { year: "2016", text: "Safe N' Happy Periods (SNHP) founded by Sarika with a goal to end period shame; first major project with NMMC." },
  { year: "2018", text: "Gained major recognition with support from Shabana Azmi Ji at the Menstrual Conclave." },
  { year: "2020", text: "Global expansion through international volunteer programs (15+ countries) and digital outreach." },
  { year: "2022", text: "Partnered with Pepsi for a landmark CSR project in Ghana, taking our mission international." },
  { year: "2024", text: "Reached over 1.5 million girls and women with specialized 'Yoga for Periods' and 'Train the Trainer' programs." },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Who we are"
        title="Real talk."
        highlight="Zero shame."
        image={aboutHero}
      >
        We are a nonprofit organization on a mission to make periods shame-free, pain-free, and joyful for all those who menstruate.
      </PageHero>

      <section id="story" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src={whoWeAre} alt="Safe N' Happy Periods workshops" className="rounded-3xl shadow-2xl w-full aspect-square object-cover" />
            </motion.div>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary">The Story</span>
              <h2 className="font-display text-5xl lg:text-6xl uppercase mt-3 leading-tight">From a living room to a global movement.</h2>
              <div className="mt-8 text-muted-foreground leading-relaxed text-lg space-y-6">
                <p>
                  Safe N’ Happy Periods (SNHP) is a flagship project of the <strong>Amodini Foundation</strong>, a Mumbai-based non-profit started in 2016 by Sarika with the help of two friends. What began as an honest dialogue about the silence surrounding menstruation has grown into a movement with volunteers from over 15 countries.
                </p>
                <p>
                  From first periods to menopause, we work across schools, communities, and organizations to make menstrual health accessible and stigma-free. We believe knowledge is the most powerful tool against stigma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          {[
            { title: "Vision", body: "Our Vision is to make Periods shame-free, pain-free, and joyful for all those who menstruate." },
            { title: "Mission", body: "Our Mission is to create gender neutral and effortless conversations on Periods. Real Talk Zero Shame." },
          ].map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-3xl border border-border"
            >
              <h3 className="font-display text-3xl uppercase text-primary">{c.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Section id="amodini" eyebrow="Our Philosophy" title="Inclusive Education.">
        <p>
          We believe knowledge is the most powerful tool against stigma. Our programs are designed to be inclusive, evidence-based, and culturally sensitive. We simplify the biology, clear up the grey areas, and build a culture where respect and accountability are non-negotiable.
        </p>
      </Section>

      <section id="team" className="bg-secondary text-secondary-foreground py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Our Team</span>
          <h2 className="font-display text-5xl lg:text-6xl uppercase mt-3">The humans behind the work.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-background/10 border border-border/50">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                <h3 className="font-display text-2xl uppercase text-primary mt-6">{m.name}</h3>
                <p className="text-secondary-foreground/80 mt-2 text-sm leading-relaxed">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="milestones" className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Milestones</span>
          <h2 className="font-display text-4xl lg:text-5xl uppercase mt-3">A decade in motion.</h2>
          <div className="mt-10 space-y-6 border-l-2 border-primary/30 pl-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[2.55rem] top-1.5 w-4 h-4 rounded-full bg-primary" />
                <div className="font-display text-3xl text-primary">{m.year}</div>
                <p className="text-foreground mt-1">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-5xl uppercase">Be part of the next decade.</h2>
          <Link to="/get-involved" className="mt-8 inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Get involved <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</span>
        <h2 className="font-display text-4xl lg:text-5xl uppercase mt-3">{title}</h2>
        <div className="mt-6 text-muted-foreground leading-relaxed text-lg">{children}</div>
      </div>
    </section>
  );
}
