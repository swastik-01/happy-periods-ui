import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "framer-motion";
import { ArrowLeft, PlayCircle } from "lucide-react";
import workshop from "@/assets/home/outreach.jpg";

// Gallery Images
import m1 from "@/assets/GalleryMijwan/mijwan-1.jpeg";
import m2 from "@/assets/GalleryMijwan/mijwan-2.jpeg";
import m3 from "@/assets/GalleryMijwan/mijwan-3.jpeg";
import m4 from "@/assets/GalleryMijwan/mijwan-4.jpeg";
import m5 from "@/assets/GalleryMijwan/mijwan-5.jpeg";
import m6 from "@/assets/GalleryMijwan/mijwan-6.jpeg";

const mijwanGallery = [m1, m2, m3, m4, m5, m6];

export const Route = createFileRoute("/events/mijwan")({
  head: () => ({ 
    meta: [
      { title: "Mijwan Collaboration — Safe n' Happy Periods" },
      { name: "description", content: "Our seven-year partnership with Mijwan Welfare Society providing menstrual health awareness for girls." }
    ] 
  }),
  component: MijwanEvent,
});

function MijwanEvent() {
  return (
    <SiteLayout>
      <PageHero 
        eyebrow="Events" 
        title="Mijwan" 
        highlight="Collaboration" 
        image={m1}
      >
        A transformative seven-year journey of empowering girls from underserved communities through menstruation hygiene, body literacy, and self-care.
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
              Safe N’ Happy Periods (SNHP) is a personal social impact initiative founded by Sarika Gupta with the vision of creating a shame-free and pain-free approach towards menstruation.
            </p>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Supported by family friends well-wishers and community collaborators SNHP was started after recognizing the widespread myths taboos and lack of menstrual awareness that continue to affect girls and women across communities. The initiative works towards breaking the stigma around periods and helping girls and women feel informed confident and comfortable with their bodies through education awareness and open conversations.
              </p>
              
              <p>
                One of the most meaningful and long-standing collaborations in SNHP’s journey has been with Mijwan Welfare Society and its stitching centres and schools. Over the past seven years this partnership has enabled SNHP to conduct menstrual health awareness workshops for girls from underserved communities creating safe spaces where young students could openly learn about menstruation hygiene body literacy and self-care. What initially began as sessions within the Mijwan community soon expanded as nearby schools also requested workshops for their students after witnessing the positive impact created among the girls.
              </p>

              <div className="my-12 not-prose">
                <div className="bg-cream rounded-3xl p-8 border border-border mb-10">
                  <PlayCircle className="text-coral mb-4" size={32} />
                  <h3 className="font-display text-xl uppercase mb-2">Videos</h3>
                  <p className="text-sm">Video content coming soon. We are documenting our sessions to share the impact with you.</p>
                </div>
                
                <h3 className="font-display text-2xl uppercase mb-6 text-foreground">Workshop Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {mijwanGallery.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="aspect-square rounded-2xl overflow-hidden border border-border"
                    >
                      <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt={`Mijwan workshop ${i + 1}`} />
                    </motion.div>
                  ))}
                </div>
              </div>

              <p>
                The workshops conducted through Mijwan focused not only on menstrual education but also on emotional comfort confidence-building hygiene awareness and wellness practices including yoga for period pain and flow relief. Many girls attended these sessions without prior exposure to open discussions around menstruation making the experience deeply transformative.
              </p>
              
              <p>
                As shared by Samyukta Ji Head at the Mijwan Stitching Centre the girls “came with no expectations but shared their joy with us for knowing things their mothers would never talk to them about.” This reflects the deep communication gap around menstrual health that still exists in many homes and communities and highlights the importance of creating accessible educational spaces for young girls.
              </p>
              
              <p>
                Through this collaboration SNHP and Mijwan together have helped normalize conversations around periods in schools and community centres empowering girls with knowledge they can carry forward into their lives. The partnership stands as an example of how grassroots collaborations and sustained community engagement can create lasting impact by addressing menstrual stigma through education empathy and collective support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
