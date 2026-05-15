import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowUpRight } from "lucide-react";
import forbes from "@/assets/news/forbes.png";
import hindu from "@/assets/news/hindu.jpg";
import mijwan from "@/assets/news/mijwan.jpg";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — Safe n' Happy Periods" },
      { name: "description", content: "Stories, features, and updates from our work in the field." },
      { property: "og:title", content: "News — Safe n' Happy Periods" },
      { property: "og:description", content: "Stories, features, and updates from our work in the field." },
    ],
  }),
  component: News,
});

const posts = [
  {
    img: forbes,
    date: "August 21, 2023",
    title: "Featured in Award-Winning Documentary 'Pandora's Box: Lifting the Lid on Menstruation'",
    excerpt: "Community development empowers local people to take charge of their own initiatives.",
    href: "https://safenhappyperiods.org/standard-post/",
  },
  {
    img: hindu,
    date: "2024",
    title: "Safe n' Happy Periods featured in The Hindu",
    excerpt: "Coverage of our menstrual awareness collaboration with NMMC across Navi Mumbai schools.",
    href: "https://safenhappyperiods.org/",
  },
  {
    img: mijwan,
    date: "2025",
    title: "Period awareness program at Mijwan Welfare Society, UP",
    excerpt: "Continuing the legacy of Kaifi Azmi by empowering women and girls through education.",
    href: "https://safenhappyperiods.org/",
  },
];

function News() {
  return (
    <SiteLayout>
      <section className="bg-plum-deep text-cream py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">News</span>
          <h1 className="font-display text-6xl lg:text-9xl uppercase mt-4 leading-[0.9]">
            Press &<br /><span className="text-coral">stories.</span>
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {posts.map((p) => (
            <a key={p.title} href={p.href} target="_blank" rel="noreferrer" className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-[0.2em] text-coral">{p.date}</div>
              <h3 className="font-display text-2xl uppercase mt-2 group-hover:text-coral transition flex items-start gap-2">
                {p.title} <ArrowUpRight className="flex-shrink-0 mt-1" size={20} />
              </h3>
              <p className="mt-3 text-muted-foreground text-sm">{p.excerpt}</p>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
