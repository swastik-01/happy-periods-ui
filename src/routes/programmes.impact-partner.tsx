import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage } from "@/components/site/ProgrammePage";
import padDonation from "@/assets/home/pad-donation.jpg";
import field from "@/assets/home/field.jpg";
import outreach from "@/assets/home/outreach.jpg";

export const Route = createFileRoute("/programmes/impact-partner")({
  head: () => ({ meta: [{ title: "Impact Partner — Safe n' Happy Periods" }, { name: "description", content: "Long-term partnerships for sustained menstrual health change." }] }),
  component: () => (
    <ProgrammePage data={{
      slug: "impact-partner",
      eyebrow: "Programme · Impact Partner",
      title: "Long-term",
      highlight: "partnerships.",
      intro: "One workshop changes a day. A multi-year partnership changes a community. Become an Impact Partner and walk this distance with us.",
      hero: padDonation,
      whatWeDo: {
        heading: "Embed sustainable menstrual health into a community.",
        body: "Impact Partners commit to multi-year engagements — funding, infrastructure, or co-design — enabling deep, measurable change.",
        bullets: [
          "Co-designed 3+ year community programme.",
          "Quarterly impact reports with verified data.",
          "On-ground volunteer + staff embedment.",
          "Joint storytelling, branding and PR rights.",
          "End-of-cycle independent impact audit.",
        ],
      },
      impact: {
        stats: [
          { num: "12", label: "Active partners" },
          { num: "5yr", label: "Avg. partnership" },
          { num: "8", label: "Communities served" },
          { num: "100%", label: "Reported retention" },
        ],
        images: [
          field,
          outreach,
        ],
      },
    }} />
  ),
});
