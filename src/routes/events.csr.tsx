import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "framer-motion";
import { ArrowLeft, PlayCircle, Image as ImageIcon } from "lucide-react";
import stage from "@/assets/home/stage.jpg";

export const Route = createFileRoute("/events/csr")({
  head: () => ({ 
    meta: [
      { title: "CSR Initiatives — Safe n' Happy Periods" },
      { name: "description", content: "Our corporate social responsibility partnerships with organizations like Accra Ghana and PepsiCo." }
    ] 
  }),
  component: CSREvent,
});

function CSREvent() {
  return (
    <SiteLayout>
      <PageHero 
        eyebrow="Events" 
        title="CSR" 
        highlight="Initiatives" 
        image={stage}
      >
        Bridging the gap between corporate responsibility and community health through global partnerships and inclusive awareness programs.
      </PageHero>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link 
            to="/events" 
            className="inline-flex items-center gap-2 text-coral hover:gap-3 transition-all mb-10 font-medium"
          >
            <ArrowLeft size={18} /> Back to Events
          </Link>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight">
            <p className="text-xl text-foreground font-medium leading-relaxed mb-8">
              Safe n Happy Periods (SNHP) has consistently worked towards expanding conversations around menstrual health awareness beyond classrooms and local communities through collaborations partnerships and CSR-driven initiatives.
            </p>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                One such significant milestone in SNHP’s journey was its association with CSR initiatives connected to Accra and PepsiCo reflecting the growing importance of menstrual health awareness at a global and corporate level. These initiatives highlighted the importance of creating inclusive conversations around menstrual wellness hygiene education and women’s health within larger community and professional ecosystems.
              </p>
              
              <p>
                Through its CSR-focused events and awareness-driven outreach SNHP continued its mission of normalizing conversations around periods while advocating for dignity accessibility and education. The organization’s approach combined menstrual health seminars interactive discussions wellness-based learning and awareness activities designed to engage participants meaningfully and create long-term impact. These sessions focused not only on menstrual hygiene but also on body literacy emotional well-being healthy lifestyle practices and the importance of breaking stigma associated with menstruation.
              </p>

              <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                <div className="bg-cream rounded-3xl p-8 border border-border">
                  <PlayCircle className="text-coral mb-4" size={32} />
                  <h3 className="font-display text-xl uppercase mb-2">Videos</h3>
                  <p className="text-sm">Video content coming soon. Highlights from our corporate engagements will be available here.</p>
                </div>
                <div className="bg-cream rounded-3xl p-8 border border-border">
                  <ImageIcon className="text-coral mb-4" size={32} />
                  <h3 className="font-display text-xl uppercase mb-2">Gallery</h3>
                  <p className="text-sm">View our CSR-driven workshops and global outreach activities.</p>
                </div>
              </div>

              <p>
                SNHP’s work across schools colleges workplaces and underprivileged communities over the years helped shape the foundation of these larger collaborations. With experience reaching more than 60 schools and over 13,000 girls through seminars workshops yoga sessions pad donation drives and community outreach initiatives SNHP brought strong grassroots understanding into CSR-led spaces.
              </p>
              
              <p>
                The CSR events connected with Accra Ghana and Pepsi further represented the growing recognition that menstrual health is not just a personal issue but also a social educational and workplace concern that requires collective action. Through awareness-based engagement and community-centered conversations SNHP continued to advocate for a future where menstrual health education becomes accessible inclusive and stigma-free for everyone regardless of geography background or economic status.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
