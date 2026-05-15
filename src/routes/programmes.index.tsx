import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Flower2,
  GraduationCap,
  Handshake,
  Users,
} from "lucide-react";
import padDonation from "@/assets/donate.jpg";

export const Route = createFileRoute("/programmes/")({
  head: () => ({
    meta: [
      { title: "Our Programmes - Safe n' Happy Periods" },
      {
        name: "description",
        content:
          "Education, access, advocacy, and action through school, workplace, trainer, partnership, yoga, and CSR programmes.",
      },
      { property: "og:image", content: padDonation },
    ],
  }),
  component: Programmes,
});

const items = [
  {
    to: "/programmes/schools",
    icon: GraduationCap,
    title: "Schools & Colleges",
    desc: "Menstrual health education, product awareness, yoga, and wellness support for adolescent girls and early menstruators.",
  },
  {
    to: "/programmes/workplace",
    icon: Briefcase,
    title: "Workplaces",
    desc: "Workplace wellness seminars on menstrual health, menopause awareness, and holistic support.",
  },
  {
    to: "/programmes/impact-partner",
    icon: Handshake,
    title: "Corporate Partnership",
    desc: "Long-term partnerships, sponsorships, and community engagement that sustain grassroots impact.",
  },
  {
    to: "/programmes/train-the-trainer",
    icon: Users,
    title: "Train the Trainer",
    desc: "Educator and advocate training for sustainable peer-led menstrual health awareness.",
  },
  {
    to: "/programmes/yoga",
    icon: Flower2,
    title: "Yoga Sessions",
    desc: "Movement, breathing, and relaxation practices that support menstrual wellness and body awareness.",
  },
  {
    to: "/programmes/csr",
    icon: Building2,
    title: "CSR",
    desc: "Measurable menstrual health initiatives for underserved communities and inclusive social impact.",
  },
];

function Programmes() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Programmes" title="Our" highlight="programs" image={padDonation}>
        Creating impact through education, access, advocacy, and action.
        <br />
        From classrooms and campuses to corporate spaces and underserved communities, every Safe N
        Happy Periods initiative is built around dignity, awareness, inclusion, and access ensuring
        menstrual health support reaches those who need it most.
      </PageHero>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {items.map((programme, index) => (
            <motion.div
              key={programme.to}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
            >
              <div className="group flex h-full flex-col rounded-[8px] border border-border bg-cream p-7 transition hover:border-coral hover:bg-plum hover:text-cream">
                <programme.icon className="text-coral" size={32} />
                <h3 className="mt-5 font-display text-2xl uppercase">{programme.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground group-hover:text-cream/70">
                  {programme.desc}
                </p>
                <Link
                  to={programme.to}
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:scale-105"
                >
                  View details <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
