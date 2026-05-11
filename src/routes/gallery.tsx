import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import workshop from "@/assets/home/workshop.jpg";
import field from "@/assets/home/field.jpg";
import padDonation from "@/assets/home/pad-donation.jpg";
import outreach from "@/assets/home/outreach.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery — Safe n' Happy Periods" }, { name: "description", content: "Pictures, videos and testimonies from our workshops, drives and community work." }] }),
  component: Gallery,
});

const pics = [
  workshop,
  field,
  padDonation,
  outreach,
  workshop,
  field,
];

function Gallery() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Gallery" title="Moments from" highlight="the field.">
        A decade of conversations, classrooms and community — captured in pictures, videos and the words of those we've worked with.
      </PageHero>

      <section id="pics" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl uppercase">Pictures</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            {pics.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt=""
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl aspect-square object-cover w-full hover:scale-[1.02] transition cursor-zoom-in"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="video" className="bg-plum text-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl uppercase">Videos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video bg-cream/5 border border-cream/10 rounded-2xl flex items-center justify-center group cursor-pointer hover:border-coral transition">
                <div className="bg-coral text-primary-foreground rounded-full p-5 group-hover:scale-110 transition">
                  <Play size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonies" className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl uppercase">Testimonies & Articles</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { src: "Mid-Day Feature", text: "How a Mumbai grassroots collective is rewriting period education." },
              { src: "The Better India", text: "Meet the team turning awkward classroom moments into confident conversations." },
              { src: "Forbes Under 30", text: "On the activists scaling menstrual literacy across rural India." },
              { src: "YourStory", text: "Behind the scenes of Project RED's train-the-trainer model." },
            ].map((t) => (
              <a key={t.src} href="#" className="block bg-background border border-border rounded-3xl p-7 hover:border-coral transition">
                <p className="text-xs uppercase tracking-[0.2em] text-coral">{t.src}</p>
                <p className="mt-3 font-display text-2xl">{t.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
