import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Safe n' Happy Periods" },
      { name: "description", content: "Terms governing use of safenhappyperiods.org." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <SiteLayout>
      <section className="bg-plum-deep text-cream py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">Legal</span>
          <h1 className="font-display text-5xl lg:text-7xl uppercase mt-3 leading-[0.9]">Terms & Conditions</h1>
          <p className="mt-4 text-cream/70 text-sm">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-2xl uppercase text-foreground mb-3">1. Acceptance</h2>
            <p>By using safenhappyperiods.org you agree to these terms. If you don't agree, please do not use the site.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl uppercase text-foreground mb-3">2. Use of content</h2>
            <p>All content — words, images, branding — belongs to Amodini Foundation / Safe n' Happy Periods unless credited. You may share with attribution; commercial reuse requires permission.</p>
          </div>
          <div id="cancellation-refunds">
            <h2 className="font-display text-2xl uppercase text-foreground mb-3">3. Donations</h2>
            <p>Donations made to SNHP are voluntary and non-refundable except in cases of duplicate or fraudulent transactions. Donations above ₹500 are eligible for 80G tax exemption (India). You will receive your certificate by email within 5–7 working days.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl uppercase text-foreground mb-3">4. Workshops & programs</h2>
            <p>All workshops, Project RED, and POSH sessions are educational. Booking is subject to availability and confirmation by our team.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl uppercase text-foreground mb-3">5. External links</h2>
            <p>The site may link to third-party sites. We are not responsible for their content or policies.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl uppercase text-foreground mb-3">6. Limitation of liability</h2>
            <p>The site is provided "as is". SNHP / Amodini Foundation is not liable for any loss arising from use of the site or its content.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl uppercase text-foreground mb-3">7. Governing law</h2>
            <p>These terms are governed by the laws of India. Disputes are subject to courts in Mumbai.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
