import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ApplyForm } from "@/components/site/ApplyForm";
import { Heart, HandHeart, UserPlus, ClipboardList } from "lucide-react";

export const Route = createFileRoute("/get-involved")({
  head: () => ({ meta: [{ title: "Get Involved — Safe n' Happy Periods" }, { name: "description", content: "Donate, sponsor, volunteer or register — every action counts." }] }),
  component: GetInvolved,
});

function GetInvolved() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Get Involved" title="There are many" highlight="ways in.">
        Money, time, voice or skills — pick the one that fits and join the movement.
      </PageHero>

      <nav className="bg-plum-deep text-cream sticky top-20 z-30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap gap-6 py-4 text-xs uppercase tracking-wider">
          <a href="#donate" className="hover:text-coral">Donate</a>
          <a href="#sponsor" className="hover:text-coral">Sponsor</a>
          <a href="#volunteer" className="hover:text-coral">Volunteer / Intern</a>
          <a href="#register" className="hover:text-coral">Register</a>
        </div>
      </nav>

      <section id="donate" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Heart className="text-coral" size={28} />
            <h2 className="font-display text-4xl uppercase">Donate</h2>
          </div>
          <p className="mt-4 text-muted-foreground max-w-2xl">Choose what your contribution funds — every rupee is tracked and reported.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {[
              { title: "Pad Drive", desc: "Sanitary product distribution drives." },
              { title: "Seminar", desc: "Sponsor a school or community seminar." },
              { title: "Hygiene Kits", desc: "Comprehensive monthly kits for one girl." },
              { title: "Rural Outreach", desc: "Multi-day outreach in remote villages." },
            ].map((c) => (
              <div key={c.title} className="bg-cream border border-border rounded-3xl p-6">
                <h3 className="font-display text-xl uppercase">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <Link to="/donate" className="mt-5 inline-block bg-coral text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition">
                  Donate now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sponsor" className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <HandHeart className="text-coral" size={28} />
            <h2 className="font-display text-4xl uppercase">Sponsor</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {[
              { title: "1 Girl", price: "₹2,400 / yr", desc: "A year of products + education." },
              { title: "1 Workshop", price: "₹15,000", desc: "A full school workshop programme." },
              { title: "1 Community Drive", price: "₹40,000", desc: "End-to-end village outreach." },
              { title: "1 Underprivileged Area", price: "₹2,00,000", desc: "Year-long programme in one area." },
            ].map((c) => (
              <div key={c.title} className="bg-background border border-border rounded-3xl p-6">
                <h3 className="font-display text-xl uppercase">{c.title}</h3>
                <p className="mt-2 font-display text-2xl text-coral">{c.price}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ApplyForm programme="Sponsorship" fields={[
              { name: "name", label: "Your Name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone" },
              { name: "tier", label: "Sponsorship Tier", required: true },
              { name: "company", label: "Company (if applicable)" },
              { name: "message", label: "Notes", rows: 3 },
            ]} />
          </div>
        </div>
      </section>

      <section id="volunteer" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <UserPlus className="text-coral" size={28} />
            <h2 className="font-display text-4xl uppercase">Volunteer / Intern</h2>
          </div>
          <p className="mt-4 text-muted-foreground max-w-2xl">Join a 200+ strong volunteer network — from one-day drives to multi-month internships.</p>
          <div className="mt-10">
            <ApplyForm programme="Volunteer / Intern" fields={[
              { name: "name", label: "Full Name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone" },
              { name: "city", label: "City" },
              { name: "type", label: "Volunteer or Intern?", required: true },
              { name: "skills", label: "Skills you bring", rows: 3 },
              { name: "availability", label: "Availability" },
            ]} />
          </div>
        </div>
      </section>

      <section id="register" className="bg-plum text-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <ClipboardList className="text-coral" size={28} />
            <h2 className="font-display text-4xl uppercase">Register</h2>
          </div>
          <p className="mt-4 text-cream/70 max-w-2xl">Sign up for upcoming seminars, workshops, events or CSR partnerships.</p>
          <div className="mt-10 bg-cream rounded-3xl p-2">
            <ApplyForm programme="Register · Event" fields={[
              { name: "name", label: "Full Name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone" },
              { name: "type", label: "Register for (Seminar / Workshop / Event / CSR)", required: true },
              { name: "organization", label: "Organisation (if applicable)" },
              { name: "notes", label: "Anything else?", rows: 3 },
            ]} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
