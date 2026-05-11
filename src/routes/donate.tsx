import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { motion } from "framer-motion";
import { Heart, Gift, Sparkles, Building2, CreditCard, Award, ArrowRight } from "lucide-react";
import donate from "@/assets/donate.jpg";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Safe n' Happy Periods" },
      { name: "description", content: "Donate to Safe n' Happy Periods. Fund workshops, pad drives, and education. 80G eligible (India)." },
      { property: "og:title", content: "Donate — Safe n' Happy Periods" },
      { property: "og:description", content: "Support a period. Every contribution funds workshops, pad drives, and education." },
      { property: "og:image", content: donate },
    ],
  }),
  component: Donate,
});

const tiers = [
  { amount: "₹500", icon: Gift, title: "Sponsor a kit", desc: "Provides sanitary pads + education booklet to one menstruator for 3 months.", featured: false },
  { amount: "₹2,500", icon: Heart, title: "Fund a workshop", desc: "Powers a full menstrual health workshop for 30 girls in a rural school.", featured: true },
  { amount: "₹10,000", icon: Sparkles, title: "Train a trainer", desc: "Sponsors a community member through our Project RED train-the-trainer program.", featured: false },
];

function Donate() {
  return (
    <SiteLayout>
      <section className="bg-plum-deep text-cream py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-coral/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
            <span className="text-xs uppercase tracking-[0.3em] text-coral">Donate</span>
            <h1 className="font-display text-6xl lg:text-8xl uppercase mt-4 leading-[0.9]">
              Support a <span className="text-coral">period.</span>
            </h1>
            <p className="mt-8 text-lg text-cream/80 max-w-xl leading-relaxed">
              Every contribution funds workshops, pad drives, and education for those who need it most. <strong className="text-coral">No amount is too small.</strong>
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-cream/10 border border-cream/20 px-4 py-2 rounded-full text-xs">
              <Award size={14} className="text-coral"/> 80G tax exempt (India) for donations above ₹500
            </div>
          </motion.div>
          <motion.img
            initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} transition={{duration:0.7,delay:0.2}}
            src={donate}
            alt="Pad donation drive"
            className="rounded-3xl aspect-[4/5] object-cover w-full border-4 border-coral/30"
          />
        </div>
      </section>

      {/* TIERS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-coral">Pick your impact</span>
            <h2 className="font-display text-5xl lg:text-6xl uppercase mt-3">Where your money goes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <motion.div
                key={t.amount}
                initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                className={`rounded-3xl p-8 transition-all hover:-translate-y-2 ${t.featured ? "bg-coral text-primary-foreground shadow-2xl shadow-coral/40" : "border-2 border-border hover:border-coral"}`}
              >
                <t.icon size={36} />
                <div className="font-display text-5xl mt-4">{t.amount}</div>
                <h3 className="font-display text-2xl uppercase mt-2">{t.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${t.featured ? "opacity-90" : "text-muted-foreground"}`}>{t.desc}</p>
                <a href="#bank-details" className={`mt-6 block text-center py-3 rounded-full font-semibold transition ${t.featured ? "bg-plum-deep text-cream hover:scale-105" : "bg-coral text-primary-foreground hover:scale-105"}`}>
                  Donate {t.amount}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BANK DETAILS */}
      <section id="bank-details" className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-coral">Bank transfer</span>
            <h2 className="font-display text-4xl lg:text-5xl uppercase mt-3">Donate directly</h2>
            <p className="mt-4 text-muted-foreground">Make a contribution via bank transfer or UPI. We'll email your 80G receipt within 5–7 working days.</p>

            <div className="mt-8 bg-background rounded-3xl p-6 border border-border space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <Building2 className="text-coral" />
                <h3 className="font-display text-xl uppercase">Bank Details</h3>
              </div>
              {[
                ["Account Name", "Amodini Foundation"],
                ["Account Number", "920010063708622"],
                ["Bank", "Axis Bank"],
                ["Branch", "CBD Belapur"],
                ["Type", "Savings"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm">
                  <span className="text-muted-foreground uppercase tracking-wider text-xs">{k}</span>
                  <span className="font-semibold font-mono">{v}</span>
                </div>
              ))}
            </div>

            <a href="https://forms.gle/eUzbparVzZrq4KEz8" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 bg-coral text-primary-foreground px-7 py-4 rounded-full font-semibold hover:scale-105 transition">
              Submit donation details <ArrowRight size={16}/>
            </a>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-coral">UPI / Google Pay</span>
            <h2 className="font-display text-4xl lg:text-5xl uppercase mt-3">Scan & pay</h2>
            <p className="mt-4 text-muted-foreground">Scan the QR code with any UPI app, or upload it directly via 'Scan QR from Gallery'.</p>
            <div className="mt-8 bg-background rounded-3xl p-8 border border-border text-center">
              <div className="aspect-square max-w-xs mx-auto rounded-2xl bg-gradient-to-br from-pink/30 to-coral/20 flex flex-col items-center justify-center p-8 border-2 border-dashed border-coral/40">
                <CreditCard className="text-coral" size={48} />
                <p className="mt-4 text-sm text-muted-foreground">UPI QR available on request</p>
                <a href="mailto:hello@safenhappyperiods.org" className="mt-4 text-coral font-semibold text-sm">Email us for QR →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAD DONATIONS + COLLAB */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="bg-plum text-cream rounded-3xl p-10">
            <h3 className="font-display text-3xl uppercase">Want to donate pads?</h3>
            <p className="mt-4 text-cream/80">If you'd like to donate sanitary or reusable cloth pads, share your details below. We'll reach out to coordinate.</p>
            <a href="https://forms.gle/wgQb1ZsKqNG3cRp9A" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 bg-coral text-primary-foreground px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Pad donation form <ArrowRight size={16}/>
            </a>
          </div>
          <div className="bg-coral text-primary-foreground rounded-3xl p-10">
            <h3 className="font-display text-3xl uppercase">Collaborate with us</h3>
            <p className="mt-4 opacity-90">CSR teams, NGOs, community leaders — let's join hands for greater impact.</p>
            <a href="mailto:connect@safenhappyperiods.org" className="mt-6 inline-flex items-center gap-2 bg-plum-deep text-cream px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Email us <ArrowRight size={16}/>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-plum-deep text-cream py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-4xl lg:text-5xl uppercase">Prefer to give your time?</h2>
          <p className="mt-4 text-lg text-cream/80">Volunteer with us — across workshops, content, outreach and operations.</p>
          <Link to="/contact" className="inline-block mt-6 bg-coral text-primary-foreground px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Get in touch
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
