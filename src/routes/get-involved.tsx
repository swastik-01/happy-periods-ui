import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { PROGRAMME_REGISTER_FORM_URL } from "@/lib/forms";
import { ArrowRight, ClipboardList, Heart, UserPlus } from "lucide-react";

const VOLUNTEER_INTERN_FORM_URL = PROGRAMME_REGISTER_FORM_URL;

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved - Safe n' Happy Periods" },
      {
        name: "description",
        content: "Donate, volunteer or register - every action counts.",
      },
    ],
  }),
  component: GetInvolved,
});

function GetInvolved() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Get Involved" title="There are many" highlight="ways in.">
        Money, time, voice or skills - pick the one that fits and join the movement.
      </PageHero>

      <nav className="sticky top-24 z-30 border-b border-white/10 bg-plum-deep text-cream sm:top-28">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-6 px-4 py-4 text-xs uppercase tracking-wider sm:px-6 lg:px-8">
          <Link to="/donate" className="hover:text-coral">
            Donate
          </Link>
          <a href="#volunteer" className="hover:text-coral">
            Volunteer / Intern
          </a>
          <a href="#register" className="hover:text-coral">
            Register
          </a>
        </div>
      </nav>

      <section id="donate" className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Heart className="text-coral" size={28} />
            <h2 className="font-display text-4xl uppercase">Donate</h2>
          </div>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Choose what your contribution funds. Every rupee supports menstrual health education, access, and outreach.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Pad Drive", desc: "Sanitary product distribution drives." },
              { title: "Seminar", desc: "Support a school or community seminar." },
              { title: "Hygiene Kits", desc: "Comprehensive monthly kits for one girl." },
              { title: "Rural Outreach", desc: "Multi-day outreach in remote communities." },
            ].map((card) => (
              <div key={card.title} className="rounded-[8px] border border-border bg-cream p-6">
                <h3 className="font-display text-xl uppercase">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.desc}</p>
                <Link
                  to="/donate"
                  className="mt-5 inline-block rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:scale-105"
                >
                  Donate now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="volunteer" className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <UserPlus className="text-coral" size={28} />
            <h2 className="font-display text-4xl uppercase">Volunteer / Intern</h2>
          </div>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Join a 200+ strong volunteer network, from one-day drives to multi-month internships.
          </p>
          <a
            href={VOLUNTEER_INTERN_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-4 font-semibold text-primary-foreground transition hover:scale-105"
          >
            Open volunteer / intern form <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section id="register" className="bg-plum py-12 md:py-16 text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <ClipboardList className="text-coral" size={28} />
            <h2 className="font-display text-4xl uppercase">Register</h2>
          </div>
          <p className="mt-4 max-w-2xl text-cream/70">
            Sign up for upcoming seminars, workshops, events or CSR partnerships.
          </p>
          <a
            href={PROGRAMME_REGISTER_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-4 font-semibold text-primary-foreground transition hover:scale-105"
          >
            Register here <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
