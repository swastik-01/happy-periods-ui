import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import sarika from "@/assets/team/sarika.jpg";
import rajni from "@/assets/team/rajni.jpg";
import ragini from "@/assets/team/ragini.png";
import swapnil from "@/assets/team/swapnil-new.jpeg";
import mukesh from "@/assets/team/mukesh.png";
import anisha from "@/assets/team/anisha-nair.jpeg";
import aboutHero from "@/assets/about-hero.jpg";
import storyWorkshop from "@/assets/about-story-workshop.jpg";

const AMODINI_URL = "https://amodinifoundation.org/";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us - Safe n' Happy Periods" },
      {
        name: "description",
        content:
          "Meet Safe n' Happy Periods, the nonprofit making menstrual health conversations open, inclusive, and empowering.",
      },
      { property: "og:title", content: "About Us - Safe n' Happy Periods" },
      {
        property: "og:description",
        content:
          "Founded in 2016, Safe n' Happy Periods works to eliminate period poverty and stigma through education, access, and inclusive conversations.",
      },
      { property: "og:image", content: aboutHero },
    ],
  }),
  component: About,
});

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  initials?: string;
};

const team = [
  {
    name: "Sarika Gupta",
    role: "Founder - Safe n Happy Periods",
    bio: "Impact-driven education leader with 24+ years of experience designing, implementing, and scaling programs that improve learning outcomes across schools, government bodies, and NGOs to drive inclusive educational impact.",
    image: sarika,
  },
  {
    name: "Rajni Gupta",
    role: "Trustee",
    bio: "With over a decade of experience as a primary education specialist, Rajni is passionate about nurturing young minds and creating inclusive, joyful learning spaces.",
    image: rajni,
  },
  {
    name: "Ragini Gupta",
    role: "Yoga and Wellness Support",
    bio: "A Seattle-based yoga practitioner who works with Renewal Food Bank and supports the wellness and yoga component of menstrual health initiatives.",
    image: ragini,
  },
  {
    name: "Dr. Swapnil Gupta",
    role: "Curriculum Advisor",
    bio: "A medicine doctor based in Dallas, USA, Dr. Swapnil brings a healthcare-driven perspective and a deep commitment to community health and women's well-being.",
    image: swapnil,
  },
  {
    name: "Mukesh Amra Vaghela",
    role: "Design Specialist",
    bio: "Leads creative and visual communication across websites, brochures, branding, and campaign creatives to make menstrual health awareness more engaging and accessible.",
    image: mukesh,
  },
  {
    name: "Anisha Nair",
    role: "Social Media and Content Marketing Manager",
    bio: "Leads digital storytelling, awareness campaigns, and community engagement to amplify conversations around menstrual health, period equity, and youth awareness.",
    image: anisha,
  },
] satisfies TeamMember[];

const milestones = [
  {
    year: "2016",
    title: "Foundation Established",
    body: "Safe n Happy Periods began as a movement for shame-free, pain-free periods.",
  },
  {
    year: "2016",
    title: "First School Program",
    body: "Our first NMMC school outreach opened menstrual health conversations in municipal schools.",
  },
  {
    year: "2018",
    title: "Recognition & Reach",
    body: "Shabana Azmi Ji recognized the work at the Menstrual Conclave.",
  },
  {
    year: "2021",
    title: "Pandora's Box: Lifting the Lid on Menstruation",
    body: "Featured in Pandora's Box, a 75-minute documentary on period poverty and stigma.",
  },
  {
    year: "2022",
    title: "Corporate Partnerships",
    body: "Expanded CSR and workplace partnerships, including PepsiCo Ghana.",
  },
  {
    year: "2024",
    title: "Specialized Programs",
    body: "Scaled yoga and train-the-trainer programs for wider community education.",
  },
];

function About() {
  return (
    <SiteLayout>
      <section className="bg-background py-12 md:py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <motion.div className="min-w-0 lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">About</span>
            <h1 className="mt-5 font-display text-5xl uppercase leading-[0.9] text-foreground sm:text-6xl lg:text-8xl">
              Who are we?
            </h1>
            <p className="mt-6 max-w-[20rem] text-lg leading-relaxed text-muted-foreground sm:max-w-2xl">
              At Safe n Happy Periods, we believe periods should never come with shame, silence, or
              struggle. We are a nonprofit organization working to make menstrual health
              conversations open, inclusive, and empowering, creating a world where periods are
              shame-free, pain-free, and joyful for everyone who menstruates.
            </p>
            <p className="mt-6 font-display text-3xl uppercase text-primary sm:text-4xl">
              Real talk. Zero shame. Real impact.
            </p>
          </motion.div>
          <motion.div className="min-w-0 lg:col-span-5">
            <img
              src={aboutHero}
              alt="Safe n Happy Periods community workshop"
              className="aspect-[4/5] w-full rounded-[8px] border border-border object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      <section id="story" className="py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={storyWorkshop}
                alt="Safe n Happy Periods menstrual health workshop"
                className="aspect-square w-full rounded-[8px] object-cover shadow-lg"
              />
            </motion.div>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary">
                How it started
              </span>
              <h2 className="mt-3 font-display text-5xl uppercase leading-tight lg:text-6xl">
                From a living room to a global movement.
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Safe n Happy Periods began in February 2016, when Sarika Gupta set out to
                  challenge the silence and stigma surrounding menstruation. What started as a small
                  initiative from a living room soon grew into a powerful movement dedicated to
                  making menstrual health education accessible, conversations more open, and hygiene
                  resources available to all.
                </p>
                <p>
                  Built on empathy, dignity, and the belief that no one should feel shame for a
                  natural biological process, SNHP works to create a world where periods are
                  understood, supported, and normalized. Through awareness workshops, community
                  outreach, campaigns, and on-ground initiatives, Safe n Happy Periods empowers
                  individuals with knowledge, confidence, and access to menstrual care.
                </p>
                <p>
                  From colleges and communities to collaborative campaigns and resource distribution
                  drives, SNHP continues to break taboos and spark conversations that create lasting
                  social change.
                </p>
                <blockquote className="border-l-4 border-primary pl-5 font-semibold text-foreground">
                  "We believe that open, shame-free conversations about menstruation are the first
                  step toward gender equity. When we normalize periods, we empower individuals and
                  transform communities."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="bg-muted py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Mission & Vision</span>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "Mission",
                body: "To eliminate period poverty and stigma through comprehensive education, accessible menstrual products, and inclusive conversations that normalize menstruation as a natural biological process.",
              },
              {
                title: "Vision",
                body: "A world where no one is limited by their period, where menstrual health is recognized as essential to gender equality, education access, and economic opportunity for all.",
              },
            ].map((c) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-l-4 border-primary bg-background p-8"
              >
                <h3 className="font-display text-3xl uppercase text-primary">{c.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Section
        id="amodini"
        title={
          <a href={AMODINI_URL} target="_blank" rel="noreferrer" className="hover:text-primary">
            Amodini Foundation
          </a>
        }
      >
        <p>
          Founded in 2018 by Sarika,{" "}
          <a href={AMODINI_URL} target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">
            Amodini Foundation
          </a>{" "}
          was born from a vision to create a society where girls and women live with dignity, free from taboos and limitations. "Amodini" means
          joyful girl or woman, and that lies at the heart of all we do.
        </p>
        <p>
          What began as a passionate initiative to break menstrual health taboos has grown into a
          multifaceted organization addressing pressing issues of menstrual health and POSH
          awareness, critical areas that impact women's confidence, safety, and empowerment.
        </p>
        <p>
          Today, we are proud to have reached thousands of individuals across schools, colleges,
          communities, and workplaces, creating spaces for open dialogue, education, and
          transformative change.
        </p>
      </Section>

      <section id="team" className="bg-secondary py-12 md:py-14 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Our Team</span>
          <h2 className="mt-3 font-display text-5xl uppercase lg:text-6xl">
            Real people. Real impact.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-[8px] border border-border bg-background p-4 text-left"
              >
                <div className="aspect-square overflow-hidden rounded-[8px] bg-muted">
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-primary/15 font-display text-6xl text-primary">
                      {m.initials}
                    </div>
                  )}
                </div>
                <h3 className="mt-5 font-display text-3xl uppercase text-primary">{m.name}</h3>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {m.role.includes("Amodini Foundation") ? (
                    <>
                      {m.role.replace("Amodini Foundation", "")}
                      <a href={AMODINI_URL} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                        Amodini Foundation
                      </a>
                    </>
                  ) : (
                    m.role
                  )}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="milestones" className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Milestones</span>
          <h2 className="mt-3 font-display text-4xl uppercase lg:text-5xl">
            From small beginnings to bigger change.
          </h2>
          <div className="relative mt-12">
            <div className="absolute bottom-6 left-2 top-2 w-px bg-primary/30 lg:left-1/2 lg:-translate-x-1/2" />
            <div className="space-y-8 lg:space-y-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative grid grid-cols-1 gap-4 pl-9 lg:grid-cols-2 lg:gap-10 lg:pl-0 ${
                    i % 2 === 0 ? "" : "lg:[&>div]:col-start-2"
                  }`}
                >
                  <div className="relative py-1">
                    <span
                      className={`absolute top-2 h-4 w-4 rounded-full border-4 border-background bg-primary lg:top-1/2 lg:-translate-y-1/2 ${
                        i % 2 === 0
                          ? "-left-[2.1rem] lg:-right-[2.45rem] lg:left-auto"
                          : "-left-[2.1rem] lg:-left-[2.55rem]"
                      }`}
                    />
                    <p className="font-display text-3xl text-primary">{m.year}</p>
                    <h3 className="mt-3 font-display text-3xl uppercase text-foreground">
                      {m.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{m.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-5xl uppercase">
            Help Shape a Stigma-Free Future.
          </h2>
          <Link
            to="/get-involved"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 font-semibold text-foreground transition hover:scale-105"
          >
            Get involved <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <span className="text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</span>
        )}
        <h2 className={`font-display text-4xl uppercase lg:text-5xl ${eyebrow ? "mt-3" : ""}`}>
          {title}
        </h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </section>
  );
}
