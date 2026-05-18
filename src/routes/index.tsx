import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Users, Sparkles, GraduationCap, Gift, Youtube, Flower2 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import workshop from "@/assets/home/outreach.jpg";
import field from "@/assets/home/field.jpg";
import stage from "@/assets/home/stage.jpg";
import groupPhoto from "@/assets/home/grp photo.jpg";
import mhmDay from "@/assets/home/mhm day 2018.jpg";
import { VOLUNTEER_INTERN_FORM_URL } from "@/lib/forms";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safe n' Happy Periods — Shame Free, Pain Free Periods" },
      { name: "description", content: "Breaking stigma, building understanding. Menstrual health workshops, pad donations, and POSH training across India." },
      { property: "og:title", content: "Safe n' Happy Periods" },
      { property: "og:description", content: "Periods without pain, shame, or silence." },
      { property: "og:image", content: workshop },
    ],
  }),
  component: Home,
});

const programs = [
  { icon: GraduationCap, title: "Awareness Workshops", desc: "Menstrual health & hygiene sessions for schools, colleges, and rural communities.", to: "/programmes/schools" },
  { icon: Flower2, title: "Yoga Sessions", desc: "Movement, breathing, and relaxation practices for menstrual wellness.", to: "/programmes/yoga" },
  { icon: Gift, title: "Pad Donation", desc: "Sanitary product drives reaching the most underprivileged communities.", to: "/donate" },
  { icon: Sparkles, title: "Perios Simulation", desc: "SNHP conducts period simulation workshops for young men in colleges and workplaces", to: "/programmes" },
];

const stats = [
  { num: "250+", label: "Workshops" },
  { num: "25,000+", label: "Beneficiaries Reached" },
  { num: "60+", label: "Schools & Colleges" },
  { num: "100,000+", label: "Sanitary Pads Donated" },
];

const homeVideoId = "fki-a5Vj5M8";
const homeVideoStart = 979;

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative bg-background text-foreground overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-coral/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 w-[400px] h-[400px] rounded-full bg-pink/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 pt-6 pb-10 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pt-8 lg:pb-14">
          <motion.div className="min-w-0 lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-coral mb-6">
              <Sparkles size={14} /> Since 2016
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[6.5rem] leading-[0.88] uppercase">
              <span className="whitespace-nowrap">Shame-Free.</span><br />
              <span className="text-coral">Pain-Free.</span><br />
              Periods.
            </h1>
            <p className="mt-6 max-w-[20rem] text-base leading-relaxed text-muted-foreground sm:max-w-lg">
              Building a world where periods are free from pain, shame, and silence through action, awareness, and inclusive gender-neutral conversations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 bg-coral text-primary-foreground px-7 py-4 rounded-full font-semibold hover:scale-105 transition shadow-2xl shadow-coral/40"
              >
                Donate <ArrowRight size={18} />
              </Link>
              <Link
                to="/programmes"
                className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-4 rounded-full font-semibold hover:bg-muted transition"
              >
                Our Work
              </Link>
            </div>
          </motion.div>

          <motion.div className="relative min-w-0 lg:col-span-7">
            <HeroCarousel
              images={[
                { src: workshop, alt: "Workshop participants" },
                { src: field, alt: "Field session" },
                { src: stage, alt: "Stage performance" },
                { src: groupPhoto, alt: "Group photo from a community program" },
                { src: mhmDay, alt: "Menstrual Hygiene Day event" },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl lg:text-6xl">{s.num}</div>
              <div className="text-xs uppercase tracking-[0.2em] mt-2 opacity-90">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="min-w-0 lg:col-span-5">
            <h2 className="font-display text-5xl lg:text-6xl uppercase text-balance">
              Breaking <span className="text-coral">Stigma.</span><br />
              Building <span className="text-coral">Understanding.</span>
            </h2>
          </div>
          <div className="min-w-0 lg:col-span-7 lg:pt-6">
            <p className="text-2xl leading-snug text-balance">
              Why is something so natural still surrounded by silence?
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              In India, <strong>71% of girls</strong> learn about menstruation only after attaining MENARCHE. While awareness around menstrual products is growing, millions still struggle with limited access, misinformation, and lack of support especially in rural communities. Period stigma continues to impact education, confidence, health, and dignity, making menstrual well-being one of the most overlooked aspects of everyday life.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-coral font-semibold hover:gap-3 transition-all"
            >
              Read our story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-secondary text-secondary-foreground py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-coral">What we do</span>
              <h2 className="font-display text-5xl lg:text-6xl uppercase mt-3">
                Action across <span className="text-coral">four fronts.</span>
              </h2>
            </div>
            
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={p.to}
                  className="block h-full bg-background/50 border border-border/50 rounded-3xl p-7 hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all group"
                >
                  <p.icon className="text-coral group-hover:text-primary-foreground" size={32} />
                  <h3 className="font-display text-2xl mt-6 uppercase">{p.title}</h3>
                  <p className="mt-3 text-sm text-secondary-foreground/70 group-hover:text-primary-foreground/90">{p.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-12 md:py-14 bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="min-w-0 lg:col-span-4">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-coral">
              <Youtube size={16} /> Watch
            </span>
            <h2 className="font-display text-4xl lg:text-5xl uppercase mt-3">
              Pandora's Box.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              In 2021, Safe n Happy Periods was featured in Pandora's Box: Lifting the Lid on Menstruation (change red colour), a powerful 75-minute documentary highlighting the global crisis of period poverty and menstrual stigma. Made by all women crew, this showcased SNHP's efforts toward creating a more informed and stigma-free society.
            </p>
          </div>
          <div className="min-w-0 lg:col-span-8">
            <div className="aspect-video overflow-hidden rounded-3xl border border-border bg-muted shadow-xl shadow-coral/10">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${homeVideoId}?start=${homeVideoStart}`}
                title="Pandora's Box: Lifting the Lid on Menstruation featuring Safe n Happy Periods"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO QUOTE */}
      <section className="py-12 md:py-14 bg-muted text-foreground">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Users className="text-coral mx-auto" size={40} />
          <p className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-tight mt-6 text-balance">
            "It's up to everyone to let women live <span className="text-coral">happily their periods</span>."
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <h2 className="font-display text-5xl lg:text-7xl uppercase">
            Support our mission.<br />
            <span className="opacity-80">Safer periods.</span>
          </h2>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link to="/donate" className="bg-background text-foreground px-7 py-4 rounded-full font-semibold hover:scale-105 transition">
              Donate
            </Link>
            <a
              href={VOLUNTEER_INTERN_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-primary-foreground text-primary-foreground px-7 py-4 rounded-full font-semibold hover:bg-primary-foreground hover:text-primary transition"
            >
              Volunteer
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
