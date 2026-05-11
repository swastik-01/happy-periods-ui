import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import workshop from "@/assets/home/workshop.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [{ title: "Events — Safe n' Happy Periods" }, { name: "description", content: "Our flagship gathering and events through the year." }] }),
  component: Events,
});

const flagship = {
  name: "Period Pride Summit",
  date: "March 8 · International Women's Day",
  location: "Mumbai, India",
  desc: "Our annual flagship gathering — bringing together activists, doctors, educators, students and policy-makers for a day of unfiltered conversation, performance and product exhibitions.",
  image: workshop,
};

const other = [
  { name: "Pad Drive Marathons", date: "Quarterly", location: "Multiple cities", desc: "Volunteer-powered drives collecting and distributing menstrual hygiene kits." },
  { name: "School Period Week", date: "May", location: "Pan-India", desc: "Week-long school takeovers across partner campuses." },
  { name: "Workplace Wellness Days", date: "October", location: "Corporate offices", desc: "Yoga + workshop combos at partner offices." },
  { name: "Menstrual Hygiene Day", date: "May 28", location: "Online + offline", desc: "Global day of awareness — community livestream + on-ground sessions." },
];

function Events() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Calendar" title="Where the" highlight="movement gathers." image={flagship.image}>
        From signature summits to grassroots drives — our events bring the conversation into rooms, streets and feeds.
      </PageHero>

      <section id="flagship" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <img src={flagship.image} className="rounded-3xl aspect-[4/3] object-cover w-full" alt={flagship.name} />
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-coral">Flagship Event</span>
            <h2 className="font-display text-5xl uppercase mt-3">{flagship.name}</h2>
            <div className="flex flex-wrap gap-5 mt-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><Calendar size={14}/> {flagship.date}</span>
              <span className="inline-flex items-center gap-2"><MapPin size={14}/> {flagship.location}</span>
            </div>
            <p className="mt-6 text-lg leading-relaxed">{flagship.desc}</p>
          </div>
        </div>
      </section>

      <section id="other" className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">Other Events</span>
          <h2 className="font-display text-4xl uppercase mt-3">Throughout the year.</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {other.map((e, i) => (
              <motion.div
                key={e.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-background border border-border rounded-3xl p-7"
              >
                <h3 className="font-display text-2xl uppercase">{e.name}</h3>
                <div className="flex flex-wrap gap-4 mt-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar size={12}/> {e.date}</span>
                  <span className="inline-flex items-center gap-1"><MapPin size={12}/> {e.location}</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
