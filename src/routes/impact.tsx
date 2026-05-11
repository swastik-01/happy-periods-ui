import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import wall from "@/assets/home/wall.jpg";
import workshop from "@/assets/home/workshop.jpg";
import impact1 from "@/assets/impact/impact1.jpg";
import impact2 from "@/assets/impact/impact2.jpg";
import impact3 from "@/assets/impact/impact3.jpg";
import impact4 from "@/assets/impact/impact4.jpg";
import mijwan from "@/assets/news/mijwan.jpg";
import hindu from "@/assets/news/hindu.jpg";
import radiocity from "@/assets/news/radiocity.jpg";
import ymca from "@/assets/partners/ymca.png";
import pps from "@/assets/partners/pps.png";
import nmmc from "@/assets/partners/nmmc.png";
import wipro from "@/assets/partners/wipro.png";
import podar from "@/assets/partners/podar.png";
import pepsico from "@/assets/partners/pepsico.png";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Safe n' Happy Periods" },
      { name: "description", content: "Stories, stats, and the moments that drive our work forward." },
      { property: "og:title", content: "Impact — Safe n' Happy Periods" },
      { property: "og:description", content: "Stories, stats, and the moments that drive our work forward." },
      { property: "og:image", content: workshop },
    ],
  }),
  component: Impact,
});

const stories = [
  {
    name: "Shabana Azmi",
    role: "Founder — Mizwan Welfare Society",
    quote: "Grateful to Shabana Azmi Ji for mentioning Safe n' Happy Periods at the Menstrual Conclave organized by the Nine Movement on the occasion of MHM 2018.",
    img: wall,
  },
  {
    name: "Yasemein Daldal",
    role: "Volunteer from Istanbul",
    quote: "By being a part of SNHP, I got a chance to observe and be in contact with women from various age groups and backgrounds. Seeing their reactions was an eye-opening experience.",
    img: impact1,
  },
  {
    name: "Isabella Hilber",
    role: "Volunteer from Austria",
    quote: "The longer I work with SNHP, the more I realize how invaluable this initiative is in making women feel confident about themselves & their bodies.",
    img: impact2,
  },
];

const gallery = [
  { src: mijwan, title: "Mijwan Welfare Society, Fulpur, UP" },
  { src: hindu, title: "Featured in The Hindu" },
  { src: impact3, title: "Pad donation at Budhwar Peth" },
  { src: radiocity, title: "Padyatra with Radio City" },
  { src: impact4, title: "MHM Week, Seawoods Grand Central" },
  { src: workshop, title: "Community workshop" },
];

const partners = [ymca, pps, nmmc, wipro, podar, pepsico];

function Impact() {
  return (
    <SiteLayout>
      <section className="bg-plum-deep text-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">Impact</span>
          <h1 className="font-display text-6xl lg:text-9xl uppercase mt-4 leading-[0.9]">
            The moments that<br /><span className="text-coral">move us forward.</span>
          </h1>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl lg:text-5xl uppercase mb-12">Inspiring stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((s) => (
              <div key={s.name} className="bg-cream rounded-3xl p-8">
                <p className="text-muted-foreground italic leading-relaxed">"{s.quote}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <img src={s.img} alt={s.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <div className="font-display text-lg uppercase">{s.name}</div>
                    <div className="text-xs text-muted-foreground">{s.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-plum text-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl lg:text-5xl uppercase mb-12">Highlights</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((g) => (
              <div key={g.title} className="group relative overflow-hidden rounded-3xl aspect-[4/3]">
                <img src={g.src} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-deep via-plum-deep/30 to-transparent" />
                <div className="absolute bottom-0 p-5 font-display text-xl uppercase">{g.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20 bg-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 text-center mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">Trusted by</span>
          <h2 className="font-display text-4xl uppercase mt-2">Our partners</h2>
        </div>
        <div className="marquee gap-16 items-center">
          {[...partners, ...partners].map((p, i) => (
            <img key={i} src={p} alt="Partner logo" className="h-16 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition flex-shrink-0" />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
