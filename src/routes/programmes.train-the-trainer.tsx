import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage } from "@/components/site/ProgrammePage";
import outreach from "@/assets/home/outreach.jpg";
import padDonation from "@/assets/home/pad-donation.jpg";
import field from "@/assets/home/field.jpg";

export const Route = createFileRoute("/programmes/train-the-trainer")({
  head: () => ({ meta: [{ title: "Train the Trainer — Safe n' Happy Periods" }, { name: "description", content: "Build a network of menstrual health facilitators in your community." }] }),
  component: () => (
    <ProgrammePage data={{
      slug: "train-the-trainer",
      eyebrow: "Programme · Project RED",
      title: "Train the",
      highlight: "Trainer.",
      intro: "Project RED equips teachers, community leaders and youth to lead stigma-free menstrual conversations — and pass it on.",
      hero: outreach,
      whatWeDo: {
        heading: "A multiplier model for menstrual literacy.",
        body: "Each trained facilitator reaches an average of 200 people in their first year — making this our highest-leverage programme.",
        bullets: [
          "3-day immersive certification programme.",
          "Curriculum, slides, and activity kit included.",
          "Ongoing community of practice with monthly clinics.",
          "Quarterly refresher and advanced modules.",
          "Co-branded certification on completion.",
        ],
      },
      impact: {
        stats: [
          { num: "450+", label: "Trainers certified" },
          { num: "90K", label: "Downstream reach" },
          { num: "15", label: "States" },
          { num: "94%", label: "Retention" },
        ],
        images: [
          padDonation,
          field,
        ],
      },
    }} />
  ),
});
