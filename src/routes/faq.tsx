import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Safe n' Happy Periods" },
      { name: "description", content: "Answers to the most common questions about menstrual health, our work, and how to get involved." },
      { property: "og:title", content: "FAQ — Safe n' Happy Periods" },
      { property: "og:description", content: "Answers to the most common questions." },
    ],
  }),
  component: FAQ,
});

const faqs = [
  { q: "What does Safe n' Happy Periods do?", a: "We run menstrual health workshops, train-the-trainer programs (Project RED), POSH workplace sessions, and pad donation drives across India." },
  { q: "Who can attend a workshop?", a: "Anyone — from school children to corporate teams. We tailor sessions for the audience and hold them in English, Hindi, and several regional languages." },
  { q: "How can I donate?", a: "Visit our Donate page. Contributions of any size fund workshops, kits, and outreach. We're transparent about where every rupee goes." },
  { q: "Are your sessions inclusive?", a: "Yes. All our content is gender-neutral and inclusive of trans, non-binary, and intersex menstruators." },
  { q: "How can I volunteer?", a: "We welcome volunteers in workshop facilitation, content, outreach, and operations. Visit the Donate page or contact us directly." },
  { q: "Do you partner with companies and schools?", a: "Absolutely — we collaborate with schools, NGOs, government bodies, and corporates. Reach out to start a conversation." },
];

function FAQ() {
  return (
    <SiteLayout>
      <section className="bg-plum-deep text-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">FAQ</span>
          <h1 className="font-display text-6xl lg:text-9xl uppercase mt-4 leading-[0.9]">
            Things people<br /><span className="text-coral">often ask.</span>
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="font-display text-xl lg:text-2xl uppercase text-left hover:text-coral hover:no-underline py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </SiteLayout>
  );
}
