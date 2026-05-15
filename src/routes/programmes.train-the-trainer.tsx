import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage } from "@/components/site/ProgrammePage";
import outreach from "@/assets/home/outreach.jpg";
import padDonation from "@/assets/donate.jpg";
import field from "@/assets/home/field.jpg";

export const Route = createFileRoute("/programmes/train-the-trainer")({
  head: () => ({
    meta: [
      { title: "Train the Trainer - Safe n' Happy Periods" },
      {
        name: "description",
        content: "A peer-led menstrual health education program for educators and advocates.",
      },
    ],
  }),
  component: () => (
    <ProgrammePage
      data={{
        slug: "train-the-trainer",
        eyebrow: "Programme",
        title: "Train the Trainer.",
        intro:
          "A multiplier program that equips educators and advocates to lead confident menstrual health conversations.",
        hero: outreach,
        whatWeDo: {
          heading: "Build confident menstrual health educators.",
          paragraphs: [
            "The Train the Trainer Program by Safe N Happy Periods (SNHP) is designed to empower individuals with accurate menstrual health knowledge and effective teaching skills so they can become educators and advocates within their own communities.",
            "The program focuses on building confidence in conducting menstrual health conversations, workshops, and awareness sessions while breaking stigma and misinformation around periods.",
            "By creating a network of trained educators, SNHP aims to ensure that menstrual health education reaches more schools, colleges, workplaces, and communities through sustainable peer-led awareness and grassroots impact.",
          ],
        },
        impact: {
          heading: "Sustainable peer-led reach.",
          paragraphs: [
            "Train the Trainer strengthens menstrual health education by creating local facilitators who can continue the conversation beyond a single workshop.",
            "Each trained educator becomes a trusted resource in their own school, workplace, college, or community, helping period education reach more people through repeated, locally led engagement.",
          ],
          images: [padDonation, field],
        },
      }}
    />
  ),
});
