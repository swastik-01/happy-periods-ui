import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "framer-motion";
import { ArrowLeft, PlayCircle, Image as ImageIcon } from "lucide-react";
import outreach from "@/assets/home/outreach.jpg";

export const Route = createFileRoute("/events/nmmc")({
  head: () => ({ 
    meta: [
      { title: "NMMC Initiative — Safe n' Happy Periods" },
      { name: "description", content: "Our extensive work with NMMC since 2016, making menstrual education accessible at the grassroots level." }
    ] 
  }),
  component: NMMCEvent,
});

function NMMCEvent() {
  return (
    <SiteLayout>
      <PageHero 
        eyebrow="Events" 
        title="NMMC" 
        highlight="Initiative" 
        image={outreach}
      >
        Breaking stigma and empowering thousands of girls across 60+ schools through consistent grassroots education and wellness.
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
              Safe N Happy Periods (SNHP) has played an important role in creating awareness around menstrual health and hygiene through its extensive work with NMMC since 2016.
            </p>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At a time when conversations around menstruation were still considered uncomfortable and stigmatized in many communities SNHP began working at the grassroots level to make menstrual education more accessible informed and stigma-free for young girls and women. Through collaborations with schools ward offices and community spaces SNHP has consistently focused on building awareness promoting menstrual hygiene and empowering individuals with accurate knowledge about periods and adolescent health.
              </p>
              
              <p>
                One of SNHP’s earliest large-scale initiatives began in 2016 through outreach with NMMC where the organization connected with 24 schools to conduct menstrual health education seminars and awareness programs. These school sessions were specially designed for adolescent girls including premenarchal girls and students who had recently started menstruating. The seminars focused on understanding puberty menstrual cycles hygiene practices body awareness and breaking myths and taboos surrounding periods. Through interactive discussions product awareness and safe spaces for questions SNHP helped students feel more informed confident and comfortable discussing menstrual health openly.
              </p>

              <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                <div className="bg-cream rounded-3xl p-8 border border-border">
                  <PlayCircle className="text-coral mb-4" size={32} />
                  <h3 className="font-display text-xl uppercase mb-2">Videos</h3>
                  <p className="text-sm">Video content coming soon. Stay tuned for glimpses of our work with NMMC schools.</p>
                </div>
                <div className="bg-cream rounded-3xl p-8 border border-border">
                  <ImageIcon className="text-coral mb-4" size={32} />
                  <h3 className="font-display text-xl uppercase mb-2">Gallery</h3>
                  <p className="text-sm">Explore photos from our school seminars and community ward sessions.</p>
                </div>
              </div>

              <p>
                Over the years the impact of these initiatives continued to grow with SNHP eventually reaching more than 60 schools and over 13,000 girls through awareness seminars workshops and wellness programs. These school events also included guidance on menstrual hygiene management awareness about different menstrual products and simple wellness practices such as yoga asanas for period pain and flow relief. By introducing both education and holistic wellness practices SNHP ensured that menstrual health conversations moved beyond awareness alone and focused on overall well-being and confidence building among young girls.
              </p>
              
              <p>
                Alongside school outreach SNHP also conducted extensive community engagement programs across various NMMC ward offices between 2016 and 2019. During this period more than 15 menstrual health and hygiene sessions were organized in ward offices reaching women and young girls from diverse socio-economic backgrounds. These sessions focused on spreading awareness in local communities where access to menstrual education and safe hygiene practices was often limited.
              </p>
              
              <p>
                The NMMC initiatives by SNHP were not limited to awareness alone but also contributed towards reducing period poverty and improving menstrual dignity through pad donation drives and community support efforts. By combining education accessibility and community involvement SNHP’s work through NMMC helped normalize conversations around menstruation while creating long-term impact at both school and community levels.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
