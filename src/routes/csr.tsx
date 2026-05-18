import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage } from "@/components/site/ProgrammePage";
import stage from "@/assets/home/stage.jpg";
import field from "@/assets/home/field.jpg";
import outreach from "@/assets/home/outreach.jpg";

export const Route = createFileRoute("/csr")({
  head: () => ({
    meta: [
      { title: "CSR - Safe n' Happy Periods" },
      {
        name: "description",
        content:
          "CSR menstrual health initiatives combining education, awareness, access, and community engagement.",
      },
    ],
  }),
  component: () => (
    <ProgrammePage
      data={{
        slug: "csr",
        eyebrow: "CSR",
        title: "CSR.",
        intro:
          "Impactful menstrual health initiatives for measurable social change and inclusive community support.",
        hero: stage,
        showHeroRegister: true,
        showApply: false,
        whatWeDo: {
          heading: "CSR initiatives built around dignity and access.",
          paragraphs: [
            "At Safe n Happy Periods, we design impactful menstrual health initiatives that combine education, awareness, accessibility, and community engagement. Our programs are created to address real challenges faced by menstruators across different social and economic backgrounds while ensuring dignity and inclusivity remain at the center of every intervention.",
            "We collaborate with schools, colleges, corporates, NGOs, and grassroots communities to create safe spaces for open conversations around menstruation. Through workshops, awareness drives, community outreach, pad distribution initiatives, and advocacy campaigns, we work towards normalizing menstrual health and breaking long-standing taboos.",
            "Every initiative is designed to create sustainable awareness, encourage behavioral change, and improve access to menstrual health resources for communities that are often overlooked.",
          ],
          bullets: [
            "Menstrual health awareness sessions",
            "Community engagement programs",
            "Employee sensitization workshops",
            "Rural and underprivileged community outreach",
            "Hygiene resource distribution drives",
            "Youth-led advocacy and education initiatives",
          ],
        },
        impact: {
          heading: "Inclusive, informed, and empowered communities.",
          paragraphs: [
            "Over the years, Safe n Happy Periods has worked with diverse communities, organizations, and institutions to drive meaningful menstrual health conversations and on-ground change.",
            "In collaboration with PepsiCo in Ghana, SNHP successfully conducted a large-scale menstrual health awareness initiative reaching more than 1,000 participants through three impactful sessions. The program focused on menstrual education, hygiene awareness, stigma reduction, and creating safe spaces for dialogue, empowering participants with accurate information and confidence.",
            "Through the Oasis CSR initiative, SNHP conducted menstrual health awareness sessions for sex workers in Kamathipura and Grant Road. These sessions focused on menstrual hygiene, reproductive health awareness, access to safe practices, and breaking the stigma surrounding periods within marginalized communities.",
            "The initiative aimed to provide education, support, and dignity to individuals who are often excluded from mainstream healthcare conversations. Through every project, SNHP continues to build inclusive, informed, and empowered communities, one conversation at a time.",
          ],
          stats: [
            { num: "1K+", label: "Ghana participants" },
            { num: "3", label: "PepsiCo sessions" },
            { num: "2", label: "Oasis outreach areas" },
            { num: "CSR", label: "Measurable impact" },
          ],
          images: [field, outreach],
        },
      }}
    />
  ),
});
