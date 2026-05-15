import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Award, Building2, CalendarHeart, CreditCard, Gift, Heart, Sparkles, type LucideIcon } from "lucide-react";
import donate from "@/assets/donate.jpg";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate - Safe n' Happy Periods" },
      {
        name: "description",
        content: "Donate to Safe n' Happy Periods to support menstrual products and education for orphanages, shelter homes, and underserved communities.",
      },
      { property: "og:title", content: "Donate - Safe n' Happy Periods" },
      {
        property: "og:description",
        content: "Providing menstrual products and education to orphanages, shelter homes, and underserved communities.",
      },
      { property: "og:image", content: donate },
    ],
  }),
  component: Donate,
});

const oneTimeImpact = [
  { amount: "Rs. 500", text: "Menstrual products for one person for 6 months" },
  { amount: "Rs. 1,000", text: "Educational materials for a workshop" },
  { amount: "Rs. 2,500", text: "Support an entire donation drive" },
];

const monthlyImpact = [
  { amount: "Rs. 300/month", text: "Provides products for one person annually" },
  { amount: "Rs. 500/month", text: "Supports educational workshops" },
  { amount: "Rs. 1,000/month", text: "Sponsors a monthly donation drive" },
];

function Donate() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-plum-deep py-12 text-cream md:py-16 lg:py-20">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-coral/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <motion.div className="min-w-0 lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.3em] text-coral">Donate</span>
            <h1 className="mt-4 font-display text-4xl uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
              Support dignity.
              <span className="block text-coral">Support access.</span>
            </h1>
            <p className="mt-7 max-w-[20rem] text-lg leading-8 text-cream/82 sm:max-w-2xl">
              Providing menstrual products and education to orphanages, shelter homes, and underserved communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#donate-options"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-4 font-semibold text-primary-foreground transition hover:scale-105"
              >
                Donate now <ArrowRight size={18} />
              </a>
              <a
                href="#bank-details"
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 font-semibold text-cream transition hover:bg-cream/10"
              >
                Bank details
              </a>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-4 py-2 text-xs">
              <Award size={14} className="text-coral" /> 80G tax exempt for eligible donations
            </div>
          </motion.div>
          <motion.div className="min-w-0 lg:col-span-6">
            <img
              src={donate}
              alt="Pad donation drive"
              className="aspect-[5/4] w-full rounded-[8px] border border-cream/15 object-cover shadow-2xl shadow-black/20"
            />
          </motion.div>
        </div>
      </section>

      <section id="donate-options" className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-coral">Choose your support</span>
            <h2 className="mt-3 font-display text-4xl uppercase lg:text-5xl">Every donation moves the work forward.</h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <DonationCard
              icon={Gift}
              title="One-Time Donation"
              body="Make a single donation to support our ongoing pad distribution drives to orphanages and shelter homes."
              heading="What your donation provides:"
              items={oneTimeImpact}
            />
            <DonationCard
              icon={CalendarHeart}
              title="Monthly Support"
              body="Become a monthly donor and provide sustainable support for our ongoing programs with orphanages and shelter homes."
              heading="Monthly impact:"
              items={monthlyImpact}
            />
          </div>
        </div>
      </section>

      <section id="bank-details" className="bg-cream py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-coral">Bank transfer</span>
            <h2 className="mt-3 font-display text-4xl uppercase lg:text-5xl">Donate directly</h2>
            <p className="mt-4 text-muted-foreground">
              Make a contribution via bank transfer or UPI. Submit your donation details after payment so we can issue your receipt.
            </p>

            <div className="mt-8 space-y-4 rounded-[8px] border border-border bg-background p-6">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <Building2 className="text-coral" />
                <h3 className="font-display text-xl uppercase">Bank Details</h3>
              </div>
              {[
                ["Account Name", "Amodini Foundation"],
                ["Account Number", "920010063708622"],
                ["Bank", "Axis Bank"],
                ["Branch", "CBD Belapur"],
                ["Type", "Savings"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
                  <span className="font-mono font-semibold">{value}</span>
                </div>
              ))}
            </div>

            <a
              href="https://forms.gle/eUzbparVzZrq4KEz8"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-4 font-semibold text-primary-foreground transition hover:scale-105"
            >
              Submit donation details <ArrowRight size={16} />
            </a>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-coral">UPI / Google Pay</span>
            <h2 className="mt-3 font-display text-4xl uppercase lg:text-5xl">Scan & pay</h2>
            <p className="mt-4 text-muted-foreground">
              Scan the QR code with any UPI app, or upload it directly via "Scan QR from Gallery".
            </p>
            <div className="mt-8 rounded-[8px] border border-border bg-background p-8 text-center">
              <div className="mx-auto flex aspect-square max-w-xs flex-col items-center justify-center rounded-[8px] border-2 border-dashed border-coral/40 bg-coral/10 p-8">
                <CreditCard className="text-coral" size={48} />
                <p className="mt-4 text-sm text-muted-foreground">UPI QR available on request</p>
                <a href="mailto:hello@safenhappyperiods.org" className="mt-4 text-sm font-semibold text-coral">
                  Email us for QR <ArrowRight size={14} className="inline" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-[8px] bg-plum p-8 text-cream lg:p-10">
            <Heart className="text-coral" size={30} />
            <h3 className="mt-5 font-display text-3xl uppercase">Want to donate pads?</h3>
            <p className="mt-4 text-cream/80">
              Share your details if you would like to donate sanitary or reusable cloth pads. We will reach out to coordinate.
            </p>
            <a
              href="https://forms.gle/wgQb1ZsKqNG3cRp9A"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-semibold text-primary-foreground transition hover:scale-105"
            >
              Pad donation form <ArrowRight size={16} />
            </a>
          </div>
          <div className="rounded-[8px] bg-coral p-8 text-primary-foreground lg:p-10">
            <Sparkles className="text-primary-foreground" size={30} />
            <h3 className="mt-5 font-display text-3xl uppercase">Prefer to give your time?</h3>
            <p className="mt-4 opacity-90">
              Volunteer with us across workshops, content, outreach, logistics, and community programs.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-plum-deep px-6 py-3 font-semibold text-cream transition hover:scale-105"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function DonationCard({
  icon: Icon,
  title,
  body,
  heading,
  items,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  heading: string;
  items: Array<{ amount: string; text: string }>;
}) {
  return (
    <div className="flex h-full flex-col rounded-[8px] border border-border bg-background p-7 shadow-sm lg:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-coral text-primary-foreground">
          <Icon size={24} />
        </span>
        <h3 className="font-display text-3xl uppercase">{title}</h3>
      </div>
      <p className="mt-5 leading-8 text-muted-foreground">{body}</p>
      <div className="mt-7">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">{heading}</p>
        <div className="mt-4 space-y-3">
          {items.map((item) => (
            <div key={item.amount} className="rounded-[8px] bg-muted px-4 py-3">
              <div className="font-display text-2xl text-foreground">{item.amount}</div>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <a
        href="#bank-details"
        className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-coral px-6 py-3 font-semibold text-primary-foreground transition hover:scale-105"
      >
        Donate now <ArrowRight size={16} />
      </a>
    </div>
  );
}
