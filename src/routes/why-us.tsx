import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Us - Safe n' Happy Periods" },
      { name: "description", content: "Our partners, appraises and volunteers - why people choose Safe n' Happy Periods." },
    ],
  }),
  component: WhyUs,
});

const partnerModules = import.meta.glob<{ default: string }>("/src/assets/partners/*.{png,jpg,jpeg}", { eager: true });
const partners = Object.entries(partnerModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, module]) => ({
    src: module.default,
    name: path
      .split("/")
      .pop()!
      .replace(/\.(png|jpe?g)$/i, "")
      .replace(/[_-]/g, " "),
  }));
const movingPartners = [...partners, ...partners];

const partnerCopy = [
  "At Safe n Happy Periods, we believe meaningful change happens through collaboration. Our partners include schools, colleges, student committees, NGOs, healthcare advocates and community organizations who share our vision of making menstrual health conversations more open, accessible and stigma-free.",
  "Together, we work to conduct impactful workshops, awareness drives, donation initiatives and outreach programs that help us reach more individuals and communities with education, support and dignity.",
];

const appraises = [
  "Appreciated by students, educators and communities for making menstrual health education accessible, inclusive and stigma-free through engaging on-ground initiatives.",
  "The impact of Safe n Happy Periods is reflected in the voices of the students, schools and communities we work with. Through open conversations, awareness sessions and menstrual health initiatives, we are helping create safer, more informed and stigma-free spaces for everyone.",
];

const volunteers = [
  "Safe n Happy Periods has always been a volunteer-driven non-profit built on the passion, dedication, and collective efforts of people who believe in menstrual health equity and dignity for all. From conducting awareness sessions and community outreach to supporting campaigns, content, logistics, and creative initiatives, volunteers remain at the heart of everything we do.",
  "Over the years, SNHP has welcomed both Indian and international volunteers, creating a diverse and inclusive community united by a shared mission to break stigma and build awareness around menstrual health. Many of our volunteers have joined us through platforms like ConnectFor and AIESEC, contributing their skills, time, and ideas to create meaningful impact across communities.",
  "Their support has helped us expand conversations around periods, reach underprivileged groups, and build safe spaces for education, empathy, and change.",
];

function WhyUs() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Why Us" title="Built on" highlight="trust.">
        A decade in. Hundreds of partners. Tens of thousands of voices. Here's what carries the work forward.
      </PageHero>

      <section id="partners" className="py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">Our Partners</span>
          <h2 className="mt-3 font-display text-4xl uppercase">In good company.</h2>
          <div className="mt-6 max-w-[20rem] space-y-4 text-base leading-8 text-muted-foreground sm:max-w-4xl">
            {partnerCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 overflow-hidden">
            <div className="flex w-max animate-[partner-marquee_56s_linear_infinite] items-center gap-8 sm:gap-12">
              {movingPartners.map((partner, index) => (
                <div key={`${partner.src}-${index}`} className="flex h-20 w-36 shrink-0 items-center justify-center sm:h-28 sm:w-44">
                  <img src={partner.src} alt={`${partner.name} logo`} className="max-h-16 w-full object-contain sm:max-h-20" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 overflow-hidden sm:mt-8" aria-hidden="true">
            <div className="flex w-max animate-[partner-marquee-reverse_64s_linear_infinite] items-center gap-8 sm:gap-12">
              {movingPartners
                .slice()
                .reverse()
                .map((partner, index) => (
                  <div key={`${partner.src}-reverse-${index}`} className="flex h-20 w-36 shrink-0 items-center justify-center sm:h-28 sm:w-44">
                    <img src={partner.src} alt="" className="max-h-16 w-full object-contain sm:max-h-20" />
                  </div>
                ))}
            </div>
          </div>
          <style>{`
            @keyframes partner-marquee {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }

            @keyframes partner-marquee-reverse {
              from {
                transform: translateX(-50%);
              }
              to {
                transform: translateX(0);
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .animate-\\[partner-marquee_56s_linear_infinite\\],
              .animate-\\[partner-marquee-reverse_64s_linear_infinite\\] {
                animation: none;
              }
            }
          `}</style>
        </div>
      </section>

      <section id="appraises" className="bg-plum py-12 md:py-16 text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">Appraises</span>
          <h2 className="mt-3 font-display text-4xl uppercase">Recognized by communities.</h2>
          <div className="mt-8 max-w-4xl space-y-5 text-lg leading-9 text-cream/90">
            {appraises.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="volunteers" className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">Our Volunteers</span>
          <h2 className="mt-3 font-display text-4xl uppercase">Driven by people.</h2>
          <div className="mt-8 max-w-4xl space-y-5 text-base leading-8 text-muted-foreground">
            {volunteers.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
