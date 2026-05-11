import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Sparkles, GraduationCap, ShieldCheck, Gift } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import workshop from "@/assets/home/workshop.jpg";
import field from "@/assets/home/field.jpg";
import stage from "@/assets/home/stage.jpg";
import park from "@/assets/home/park.jpg";
import wall from "@/assets/home/wall.jpg";

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
  { icon: GraduationCap, title: "Awareness Workshops", desc: "Menstrual health & hygiene sessions for schools, colleges, and rural communities.", to: "/what-we-do" },
  { icon: Heart, title: "Project RED", desc: "Train-the-trainer program equipping people to lead stigma-free conversations.", to: "/what-we-do" },
  { icon: Gift, title: "Pad Donation", desc: "Sanitary product drives reaching the most under-served communities.", to: "/donate" },
];

const stats = [
  { num: "50K+", label: "Lives Touched" },
  { num: "200+", label: "Workshops" },
  { num: "15", label: "States Reached" },
  { num: "10yr", label: "Of Action" },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative bg-background text-foreground overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-coral/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 w-[400px] h-[400px] rounded-full bg-pink/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-coral mb-6">
              <Sparkles size={14} /> Since 2014
            </span>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-[8rem] leading-[0.85] uppercase">
              Shame Free.<br />
              <span className="text-coral">Pain Free.</span><br />
              Periods.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Periods without <strong className="text-coral">pain</strong>,{" "}
              <strong className="text-coral">shame</strong>, or{" "}
              <strong className="text-coral">silence</strong> — powered by action
              and gender-neutral conversations.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 bg-coral text-primary-foreground px-7 py-4 rounded-full font-semibold hover:scale-105 transition shadow-2xl shadow-coral/40"
              >
                Make a donation <ArrowRight size={18} />
              </Link>
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-4 rounded-full font-semibold hover:bg-muted transition"
              >
                Our Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <HeroCarousel
              images={[
                { src: workshop, alt: "Workshop participants" },
                { src: field, alt: "Field session" },
                { src: stage, alt: "Stage performance" },
                { src: park, alt: "Workshop in a park" },
                { src: wall, alt: "Community outreach" },
              ]}
            />
            <div className="absolute -bottom-6 -left-6 bg-coral text-primary-foreground px-6 py-4 rounded-2xl shadow-xl">
              <div className="font-display text-3xl">71%</div>
              <div className="text-xs uppercase tracking-wide">Girls learn at first period</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl lg:text-6xl">{s.num}</div>
              <div className="text-xs uppercase tracking-[0.2em] mt-2 opacity-90">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-coral">Our Mission</span>
            <h2 className="font-display text-5xl lg:text-6xl uppercase mt-4 text-balance">
              Breaking <span className="text-coral">Stigma.</span><br />
              Building <span className="text-coral">Understanding.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <p className="text-2xl leading-snug text-balance">
              Why is something so natural still treated like a secret?
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              In India, <strong>71% of girls</strong> learn about periods only when
              they get them. Despite growing product use, millions still miss school
              due to poor access and support — especially in rural areas. Stigma,
              misinformation, and poor access make menstrual health one of the most
              ignored parts of well-being affecting education, confidence, and dignity.
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
      <section className="bg-secondary text-secondary-foreground py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-coral">What we do</span>
              <h2 className="font-display text-5xl lg:text-6xl uppercase mt-3">
                Action across <br />
                <span className="text-coral">three fronts.</span>
              </h2>
            </div>
            <Link to="/what-we-do" className="text-secondary-foreground/80 hover:text-primary inline-flex items-center gap-2">
              Explore all programs <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* MANIFESTO QUOTE */}
      <section className="py-24 bg-muted text-foreground">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Users className="text-coral mx-auto" size={40} />
          <p className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-tight mt-6 text-balance">
            "Be the reason someone <span className="text-coral">finally understands</span> periods."
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <h2 className="font-display text-5xl lg:text-7xl uppercase">
            Support our mission.<br />
            <span className="opacity-80">Safer periods.</span>
          </h2>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link to="/donate" className="bg-background text-foreground px-7 py-4 rounded-full font-semibold hover:scale-105 transition">
              Donate
            </Link>
            <Link to="/about" className="border-2 border-primary-foreground text-primary-foreground px-7 py-4 rounded-full font-semibold hover:bg-primary-foreground hover:text-primary transition">
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
