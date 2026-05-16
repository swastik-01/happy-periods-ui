import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import workshop from "@/assets/home/outreach.jpg";
import outreach from "@/assets/home/outreach.jpg";
import stage from "@/assets/home/stage.jpg";
import school1 from "@/assets/GallerySchools/school-1.jpeg";
import mijwanHero from "@/assets/GalleryMijwan/mijwan-event-hero.jpg";
import nmmcHero from "@/assets/GalleryNmmc/nmmc-event-hero.jpg";

export const Route = createFileRoute("/events/")({
  head: () => ({ 
    meta: [
      { title: "Events — Safe n' Happy Periods" }, 
      { name: "description", content: "From summits to workshops, bringing menstrual health awareness to everyone." }
    ] 
  }),
  component: Events,
});

function EventSection({ title, children, image, reverse = false, to }: { title: string; children: React.ReactNode; image: string; reverse?: boolean; to: string }) {
  return (
    <section className="py-12 md:py-16 border-b border-border/50 last:border-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={reverse ? 'lg:order-2' : ''}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={image} 
                className="rounded-3xl aspect-[16/10] object-cover w-full shadow-2xl" 
                alt={title} 
              />
            </motion.div>
          </div>
          <div className={reverse ? 'lg:order-1' : ''}>
            <motion.div
              initial={{ opacity: 0, x: reverse ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-foreground">{title}</h2>
              <div className="mt-6 space-y-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                {children}
              </div>
              <Link 
                to={to} 
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-coral text-primary-foreground rounded-full text-sm font-semibold hover:scale-105 transition-all group"
              >
                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <SiteLayout>
      <PageHero 
        eyebrow="Events" 
        title="Where conversations become" 
        highlight="collective action." 
        image={workshop}
      >
        From powerful summits to grassroots workshops, awareness drives to community circles — our events bring menstrual health into classrooms, boardrooms, streets and everyday conversations.
      </PageHero>

      <div className="bg-background">
        <EventSection title="Mijwan" image={mijwanHero} to="/events/mijwan">
          <p>
            Safe n’ Happy Periods (SNHP) is a personal social impact initiative founded by Sarika Gupta with the vision of creating a shame-free and pain-free approach towards menstruation.
          </p>
          <p>
            One of the most meaningful and long-standing collaborations in SNHP’s journey has been with Mijwan Welfare Society and its stitching centres and schools. Over the past seven years this partnership has enabled SNHP to conduct menstrual health awareness workshops for girls from underprivileged communities.
          </p>
        </EventSection>

        <EventSection title="NMMC" image={nmmcHero} reverse to="/events/nmmc">
          <p>
            Safe n Happy Periods (SNHP) has played an important role in creating awareness around menstrual health and hygiene through its extensive work with NMMC since 2016.
          </p>
          <p>
            At a time when conversations around menstruation were still considered uncomfortable and stigmatized in many communities SNHP began working at the grassroots level to make menstrual education more accessible informed and stigma-free.
          </p>
        </EventSection>

        <EventSection title="CSR Initiatives" image={stage} to="/events/csr">
          <p>
            Safe n Happy Periods (SNHP) has consistently worked towards expanding conversations around menstrual health awareness beyond classrooms and local communities through collaborations partnerships and CSR-driven initiatives.
          </p>
          <p>
            One such significant milestone in SNHP’s journey was its association with CSR initiatives connected to Accra and PepsiCo reflecting the growing importance of menstrual health awareness at a global level.
          </p>
        </EventSection>

        <EventSection title="Schools & Colleges" image={school1} reverse to="/events/schools">
          <p>
            Safe n Happy Periods (SNHP) has built a strong grassroots movement around menstrual health awareness through its extensive school and college outreach programs across different cities and communities in India.
          </p>
          <p>
            The organization’s journey in educational institutions began with the vision of ensuring that menstrual health education reaches students at an early age especially girls navigating puberty for the first time.
          </p>
        </EventSection>
      </div>
    </SiteLayout>
  );
}
