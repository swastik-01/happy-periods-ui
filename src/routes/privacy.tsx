import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Safe n' Happy Periods" },
      { name: "description", content: "How Safe n' Happy Periods collects, uses and protects your information." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <SiteLayout>
      <section className="bg-plum-deep text-cream py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">Legal</span>
          <h1 className="font-display text-5xl lg:text-7xl uppercase mt-3 leading-[0.9]">Privacy Policy</h1>
          <p className="mt-4 text-cream/70 text-sm">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-2xl uppercase text-foreground mb-3">1. Who we are</h2>
            <p>Safe n' Happy Periods (SNHP) is a flagship project of the Amodini Foundation, a registered non-profit based in Mumbai, India. This policy applies to <strong>safenhappyperiods.org</strong>.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase text-foreground mb-3">2. Information we collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Contact form:</strong> Name, email, message you voluntarily submit.</li>
              <li><strong>Donations:</strong> We do not store payment details. Transactions happen directly with your bank or payment app.</li>
              <li><strong>Analytics:</strong> Anonymous device, browser and traffic data to improve the site.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase text-foreground mb-3">3. How we use it</h2>
            <p>To respond to your messages, send updates if you opt in, issue 80G receipts for eligible donations, and improve our programs. We never sell your data.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase text-foreground mb-3">4. Cookies</h2>
            <p>We use minimal essential cookies and privacy-respecting analytics. You can disable cookies in your browser at any time.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase text-foreground mb-3">5. Your rights</h2>
            <p>You can ask us to access, correct or delete your data at any time. Email <a className="text-coral" href="mailto:hello@safenhappyperiods.org">hello@safenhappyperiods.org</a>.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase text-foreground mb-3">6. Contact</h2>
            <p>Questions? Write to <a className="text-coral" href="mailto:hello@safenhappyperiods.org">hello@safenhappyperiods.org</a>.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
