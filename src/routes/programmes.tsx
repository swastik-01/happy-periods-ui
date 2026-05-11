import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase, Handshake, Users, Flower2 } from "lucide-react";
import padDonation from "@/assets/home/pad-donation.jpg";

export const Route = createFileRoute("/programmes")({
  head: () => ({
    meta: [
      { title: "Our Programmes — Safe n' Happy Periods" },
      { name: "description", content: "School workshops, workplace training, train-the-trainer, impact partnerships and yoga sessions." },
      { property: "og:image", content: padDonation },
    ],
  }),
  component: Programmes,
});

const items = [
  { to: "/programmes/schools", icon: GraduationCap, title: "For Schools", desc: "Age-appropriate menstrual health & hygiene sessions." },
  { to: "/programmes/workplace", icon: Briefcase, title: "For Workplace", desc: "Period-friendly offices, PMS yoga, POSH literacy." },
  { to: "/programmes/impact-partner", icon: Handshake, title: "Impact Partner", desc: "Long-term community partnerships." },
  { to: "/programmes/train-the-trainer", icon: Users, title: "Train the Trainer", desc: "Build a network of facilitators." },
  { to: "/programmes/yoga", icon: Flower2, title: "Yoga Sessions", desc: "Periods · Menopause · MIJWAN." },
];

function Programmes() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="What we do"
        title="Action across"
        highlight="five fronts."
        image={padDonation}
      >
        From schools to corporate boardrooms to remote villages — every programme is designed with dignity, evidence and access at the centre.
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.div
              key={p.to}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Link to={p.to} className="group h-full block bg-cream border border-border rounded-3xl p-7 hover:bg-plum hover:text-cream hover:border-coral transition">
                <p.icon className="text-coral" size={32} />
                <h3 className="font-display text-2xl uppercase mt-5">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-cream/70">{p.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-coral text-sm font-semibold">
                  Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
