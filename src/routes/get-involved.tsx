import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { PROGRAMME_REGISTER_FORM_URL, VOLUNTEER_INTERN_FORM_URL } from "@/lib/forms";
import { ArrowRight, ClipboardList, Heart, UserPlus } from "lucide-react";
import volunteersCollage from "@/assets/volunteers-collage.jpeg";

const volunteerVideos = [
  {
    title: "Safe N Happy Periods volunteer story",
    src: "https://www.youtube-nocookie.com/embed/zQ5wyQGF6gc",
  },
  {
    title: "Safe N Happy Periods volunteer moments",
    src: "https://www.youtube-nocookie.com/embed/l26kLPy3VUw",
  },
];

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
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Pad Drive", desc: "Sanitary product distribution drives." },
              { title: "Seminar", desc: "Support a school or community seminar." },
              { title: "Hygiene Kits", desc: "Comprehensive monthly kits for one girl." },
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

      <section id="volunteer" className="bg-[#eef8f7] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4">
                <UserPlus className="text-coral" size={28} />
                <h2 className="font-display text-4xl uppercase">Our Volunteers</h2>
              </div>
              <div className="mt-5 space-y-4 text-muted-foreground">
                <p>
                  Safe N Happy Periods has always been a volunteer-driven non-profit built on the
                  passion, dedication, and collective efforts of people who believe in our mission.
                  From conducting awareness sessions and community outreach to supporting campaigns,
                  content, logistics, and creative initiatives, volunteers remain at the heart of
                  everything we do.
                </p>
                <p>
                  Over the years, SNHP has welcomed both Indian and international volunteers,
                  creating a diverse and inclusive community united by a shared mission. Many of our
                  volunteers have joined us through platforms like ConnectFor and AIESEC, contributing
                  their skills, time, and ideas to create meaningful impact across communities.
                </p>
                <p>
                  Their support has helped us expand conversations around periods, reach underserved
                  groups, and build safe spaces for education, empathy, and change.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <img
                src={volunteersCollage}
                alt="Safe N Happy Periods volunteer community collage"
                className="aspect-[4/3] w-full rounded-[8px] border border-border object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {volunteerVideos.map((video) => (
              <iframe
                key={video.src}
                className="aspect-video w-full rounded-[8px] border border-border bg-background shadow-md"
                src={video.src}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ))}
          </div>

          <a
            href={VOLUNTEER_INTERN_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-4 font-semibold text-primary-foreground transition hover:scale-105"
          >
            Volunteer with us <ArrowRight size={18} />
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
