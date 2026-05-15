import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Play, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- ASSET IMPORTS ---
// Mijwan
import m1 from "@/assets/Mijwan/mijwan-1.jpeg";
import m2 from "@/assets/Mijwan/mijwan-2.jpeg";
import m3 from "@/assets/Mijwan/mijwan-3.jpeg";
import m4 from "@/assets/Mijwan/mijwan-4.jpeg";
import m5 from "@/assets/Mijwan/mijwan-5.jpeg";
import m6 from "@/assets/Mijwan/mijwan-6.jpeg";

// Schools
import s1 from "@/assets/Schools/dgsagdassssss.jpeg";
import s2 from "@/assets/Schools/sgfdshfssfd.jpeg";
import s3 from "@/assets/Schools/WhatsApp Image 2026-05-15 at 13.48.41.jpeg";
import s4 from "@/assets/Schools/WhatsApp Image 2026-05-15 at 13.48.42.jpeg";
import s5 from "@/assets/Schools/WhatsApp Image 2026-05-15 at 13.48.43.jpeg";

// Home/Workshops
import h1 from "@/assets/home/outreach.jpg";
import h2 from "@/assets/home/field.jpg";
import h3 from "@/assets/donate.jpg";
import h4 from "@/assets/home/outreach.jpg";
import h5 from "@/assets/home/stage.jpg";
import h6 from "@/assets/home/park.jpg";
import h7 from "@/assets/home/wall.jpg";

// News/Media
import n1 from "@/assets/news/forbes.png";
import n2 from "@/assets/news/hindu.jpg";
import n3 from "@/assets/news/mijwan.jpg";
import n4 from "@/assets/news/radiocity.jpg";

// Impact
import i1 from "@/assets/impact/impact1.jpg";
import i2 from "@/assets/impact/impact2.jpg";
import i3 from "@/assets/impact/impact3.jpg";
import i4 from "@/assets/impact/impact4.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({ 
    meta: [
      { title: "Gallery — Safe n' Happy Periods" }, 
      { name: "description", content: "Pictures, videos and testimonies from our workshops, drives and community work." }
    ] 
  }),
  component: Gallery,
});

const categories = [
  { id: "all", name: "All Moments" },
  { id: "workshops", name: "Workshops" },
  { id: "schools", name: "Schools" },
  { id: "mijwan", name: "Mijwan" },
  { id: "impact", name: "Impact" },
  { id: "media", name: "Media" },
];

const allImages = [
  { src: m1, cat: "mijwan" }, { src: m2, cat: "mijwan" }, { src: m3, cat: "mijwan" },
  { src: m4, cat: "mijwan" }, { src: m5, cat: "mijwan" }, { src: m6, cat: "mijwan" },
  { src: s1, cat: "schools" }, { src: s2, cat: "schools" }, { src: s3, cat: "schools" },
  { src: s4, cat: "schools" }, { src: s5, cat: "schools" },
  { src: h1, cat: "workshops" }, { src: h2, cat: "workshops" }, { src: h3, cat: "workshops" },
  { src: h4, cat: "workshops" }, { src: h5, cat: "workshops" }, { src: h6, cat: "workshops" },
  { src: h7, cat: "workshops" },
  { src: n1, cat: "media" }, { src: n2, cat: "media" }, { src: n3, cat: "media" },
  { src: n4, cat: "media" },
  { src: i1, cat: "impact" }, { src: i2, cat: "impact" }, { src: i3, cat: "impact" },
  { src: i4, cat: "impact" },
];

function Gallery() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredImages = activeTab === "all" 
    ? allImages 
    : allImages.filter(img => img.cat === activeTab);

  return (
    <SiteLayout>
      <PageHero eyebrow="Gallery" title="Moments from" highlight="the field." image={h1}>
        A decade of conversations, classrooms and community — captured in pictures, videos and the words of those we've worked with.
      </PageHero>

      <section id="pics" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-coral mb-3 block">Visual Story</span>
              <h2 className="font-display text-4xl lg:text-5xl uppercase">Pictures</h2>
            </div>
            
            <div className="flex flex-wrap gap-2 bg-muted/50 p-1 rounded-full border border-border overflow-x-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all ${
                    activeTab === cat.id 
                      ? "bg-coral text-primary-foreground shadow-lg" 
                      : "hover:bg-muted text-muted-foreground"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group aspect-square rounded-2xl overflow-hidden border border-border"
                >
                  <img
                    src={img.src}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-zoom-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-white text-[10px] uppercase tracking-[0.2em] font-semibold">
                      {img.cat}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section id="video" className="bg-plum text-cream py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-coral/80 mb-4 block font-bold">Documentaries</span>
            <h2 className="font-display text-5xl uppercase mb-6">Stories in Motion</h2>
            <p className="text-cream/70 text-lg">Voices from the ground, glimpses into our workshops, and the real-world impact of menstrual health awareness.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Pandora's Box Feature", desc: "Our feature in the global documentary on period poverty." },
              { title: "Rural Outreach", desc: "A day in the life of our trainers in Mulshi village." },
              { title: "Student Voices", desc: "How open conversations are changing lives in NMMC schools." }
            ].map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-video bg-cream/5 border border-cream/10 rounded-[2rem] flex flex-col items-center justify-center overflow-hidden cursor-pointer hover:border-coral transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="bg-coral text-primary-foreground rounded-full p-6 group-hover:scale-110 transition shadow-2xl relative z-10">
                  <Play size={24} fill="currentColor" />
                </div>
                <div className="absolute bottom-8 left-8 right-8 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-display text-lg uppercase mb-1">{v.title}</h3>
                  <p className="text-[10px] text-cream/60 uppercase tracking-widest">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonies" className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] text-coral mb-4 block font-bold">Public Record</span>
              <h2 className="font-display text-5xl uppercase text-foreground leading-[0.9]">In the <span className="text-coral">Press.</span></h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm mb-2">Our mission has been documented by leading publications, recognizing the impact of our grassroots efforts.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { src: "Mid-Day Feature", text: "How a Mumbai grassroots collective is rewriting period education." },
              { src: "The Better India", text: "Meet the team turning awkward classroom moments into confident conversations." },
              { src: "Forbes Under 30", text: "On the activists scaling menstrual literacy across rural India." },
              { src: "YourStory", text: "Behind the scenes of Project RED's train-the-trainer model." },
            ].map((t, i) => (
              <motion.a 
                key={t.src} 
                href="#" 
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="block group bg-background border border-border rounded-[2.5rem] p-10 hover:border-coral hover:shadow-2xl hover:shadow-coral/5 transition-all duration-500"
              >
                <div className="flex items-start justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-coral font-bold">{t.src}</p>
                  <ArrowRight className="text-coral -rotate-45 group-hover:rotate-0 transition-transform duration-500" size={20} />
                </div>
                <p className="mt-6 font-display text-3xl leading-tight text-foreground group-hover:text-coral transition-colors">{t.text}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

// Reuse ArrowRight from index or just import it
import { ArrowRight } from "lucide-react";
