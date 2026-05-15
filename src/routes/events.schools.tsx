import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "framer-motion";
import { ArrowLeft, PlayCircle, Image as ImageIcon } from "lucide-react";
import school1 from "@/assets/GallerySchools/school-1.jpeg";

export const Route = createFileRoute("/events/schools")({
  head: () => ({ 
    meta: [
      { title: "Schools & Colleges — Safe n' Happy Periods" },
      { name: "description", content: "Our strong grassroots movement around menstrual health awareness through school and college outreach across India." }
    ] 
  }),
  component: SchoolsEvent,
});

function SchoolsEvent() {
  return (
    <SiteLayout>
      <PageHero 
        eyebrow="Events" 
        title="Schools" 
        highlight="& Colleges" 
        image={school1}
      >
        Creating safe, informed, and stigma-free spaces in educational institutions to normalize menstrual health conversations.
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link 
            to="/events" 
            className="inline-flex items-center gap-2 text-coral hover:gap-3 transition-all mb-10 font-medium"
          >
            <ArrowLeft size={18} /> Back to Events
          </Link>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight">
            <p className="text-xl text-foreground font-medium leading-relaxed mb-8">
              Safe N Happy Periods (SNHP) has built a strong grassroots movement around menstrual health awareness through its extensive school and college outreach programs across different cities and communities in India.
            </p>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Since its early years SNHP has worked towards creating safe informed and stigma-free spaces where young people can openly learn and talk about menstruation puberty hygiene and overall well-being. Through interactive seminars workshops awareness drives wellness sessions and community engagement activities SNHP has impacted thousands of students across schools colleges universities and rural outreach programs.
              </p>
              
              <p>
                The organization’s journey in educational institutions began with the vision of ensuring that menstrual health education reaches students at an early age especially girls navigating puberty and menstruation for the first time. Over the years these initiatives expanded significantly with SNHP reaching more than 60 schools and impacting over 13,000 girls through educational sessions focused on puberty menstrual hygiene menstrual product awareness body literacy and emotional well-being.
              </p>

              <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                <div className="bg-cream rounded-3xl p-8 border border-border">
                  <PlayCircle className="text-coral mb-4" size={32} />
                  <h3 className="font-display text-xl uppercase mb-2">Videos</h3>
                  <p className="text-sm">Video content coming soon. Watch students and educators share their experiences.</p>
                </div>
                <div className="bg-cream rounded-3xl p-8 border border-border">
                  <ImageIcon className="text-coral mb-4" size={32} />
                  <h3 className="font-display text-xl uppercase mb-2">Gallery</h3>
                  <p className="text-sm">Browse our collection of photos from school and college workshops across India.</p>
                </div>
              </div>

              <p>
                SNHP’s school programs were designed to be interactive age-appropriate and holistic. Sessions conducted in institutions such as Father Agnel School Podar School Pawar Public School and Sri Ma Vidyalaya focused on helping students understand periods without fear shame or misinformation. SNHP also conducted outreach in government and rural schools including schools in Kota Chambal Colony Mulshi Village and Khamboli Village where menstrual awareness and hygiene accessibility were often limited.
              </p>
              
              <p>
                At the college level SNHP expanded conversations around menstrual health beyond awareness into advocacy inclusivity and social engagement. Workshops seminars and awareness drives were conducted in institutions including IIT Bombay National Law University Mumbai SIES College of Arts Science and Commerce Pillai Institute of Management Studies and Research Datta Meghe College of Engineering and DY Patil University.
              </p>
              
              <p>
                One of SNHP’s most engaging college initiatives included period pain simulator workshops where male students were invited to experience simulated menstrual cramps to build empathy and understanding around period pain. Such initiatives sparked open dialogue among students challenged stereotypes and encouraged more inclusive conversations around menstruation on campuses.
              </p>
              
              <p>
                The impact created through SNHP’s school and college initiatives goes beyond awareness alone. By encouraging open conversations introducing scientifically accurate information and normalizing discussions around menstruation SNHP has helped young people feel more informed confident and supported.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
