import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage } from "@/components/site/ProgrammePage";
import field from "@/assets/home/field.jpg";
import padDonation from "@/assets/home/pad-donation.jpg";

export const Route = createFileRoute("/programmes/yoga")({
  head: () => ({ meta: [{ title: "Yoga Sessions — Safe n' Happy Periods" }, { name: "description", content: "Yoga sessions for periods, PMS and menopause." }] }),
  component: () => (
    <ProgrammePage data={{
      slug: "yoga",
      eyebrow: "Programme · Yoga",
      title: "Yoga for",
      highlight: "every cycle.",
      intro: "Gentle, evidence-based yoga sessions designed around the menstrual cycle — and the MIJWAN community programme for rural women.",
      hero: field,
      whatWeDo: {
        heading: "Movement that meets the body where it is.",
        bullets: [
          "PMS & cramp-relief sequences (45 min).",
          "Menopause-supportive flows for all stages.",
          "MIJWAN community programme for rural women.",
          "Online + in-person formats.",
          "Designed by certified RYT-500 facilitators.",
        ],
      },
      impact: {
        stats: [
          { num: "2K+", label: "Participants" },
          { num: "MIJWAN", label: "Community" },
          { num: "4.9★", label: "Average rating" },
          { num: "8", label: "Cities" },
        ],
        images: [
          padDonation,
        ],
      },
    }} />
  ),
});
