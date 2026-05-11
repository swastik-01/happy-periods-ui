import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { FileText, BookOpen, Download, Microscope } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({ meta: [{ title: "Resources — Safe n' Happy Periods" }, { name: "description", content: "Reports, guides, open resources, and research papers from our work." }] }),
  component: Resources,
});

const resources = {
  reports: [
    { title: "Annual Impact Report 2024", desc: "A year in numbers, stories and learnings." },
    { title: "Rural Outreach Whitepaper", desc: "What worked, what didn't — five-state evaluation." },
    { title: "Workplace Periods Index", desc: "Benchmarking 60+ organisations on period-friendliness." },
  ],
  guides: [
    { title: "First Period Guide for Parents", desc: "A 32-page handbook in 6 languages." },
    { title: "Workplace Period Policy Template", desc: "Free, customisable for HR teams." },
    { title: "Teacher's Curriculum Pack (Grades 5–10)", desc: "Slides, activities and assessment." },
  ],
  open: [
    { title: "Posters & Infographics", desc: "Free download for schools and clinics." },
    { title: "Multilingual Glossary", desc: "12 Indian languages." },
    { title: "Volunteer Onboarding Kit", desc: "Everything to start a chapter." },
  ],
  research: [
    { title: "Menstrual Stigma in Indian Schools (2023)", desc: "Mixed-methods study, n=2,400." },
    { title: "Yoga & PMS Symptom Reduction", desc: "12-week clinical pilot." },
  ],
};

const sections: { id: string; label: string; icon: typeof FileText; items: { title: string; desc: string }[] }[] = [
  { id: "reports", label: "Reports", icon: FileText, items: resources.reports },
  { id: "guides", label: "Guides", icon: BookOpen, items: resources.guides },
  { id: "open", label: "Open Resources", icon: Download, items: resources.open },
  { id: "research", label: "Research Papers", icon: Microscope, items: resources.research },
];

function Resources() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Resources" title="Free. Honest." highlight="Downloadable.">
        Everything we make is meant to be shared. Browse reports, guides, posters and our peer-reviewed research.
      </PageHero>

      {sections.map((s, i) => (
        <section key={s.id} id={s.id} className={i % 2 === 0 ? "py-20" : "py-20 bg-cream"}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <s.icon className="text-coral" size={28} />
              <h2 className="font-display text-4xl uppercase">{s.label}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {s.items.map((it) => (
                <div key={it.title} className="bg-background border border-border rounded-3xl p-7 hover:border-coral transition group">
                  <h3 className="font-display text-xl uppercase">{it.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
                  <button className="mt-5 inline-flex items-center gap-2 text-coral font-semibold text-sm group-hover:gap-3 transition-all">
                    <Download size={14}/> Request access
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </SiteLayout>
  );
}
