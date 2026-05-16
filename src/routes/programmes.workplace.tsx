import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage } from "@/components/site/ProgrammePage";
import field from "@/assets/home/field.jpg";
import outreach from "@/assets/home/outreach.jpg";
import padDonation from "@/assets/donate.jpg";

export const Route = createFileRoute("/programmes/workplace")({
  head: () => ({
    meta: [
      { title: "Workplaces - Safe n' Happy Periods" },
      {
        name: "description",
        content: "Workplace wellness seminars on menstrual health, menopause, and holistic care.",
      },
    ],
  }),
  component: () => (
    <ProgrammePage
      data={{
        slug: "workplace",
        eyebrow: "Programme",
        title: "Workplaces.",
        intro:
          "Wellness seminars that help professional spaces become healthier, more informed, and more inclusive.",
        hero: field,
        whatWeDo: {
          heading: "Support women at every stage of work and life.",
          paragraphs: [
            "At Safe N Happy Periods (SNHP), we conduct workplace wellness seminars designed to create healthier, more informed, and more inclusive professional environments for women. Our sessions focus on menstrual health, menopause awareness, holistic wellness, and sustainable lifestyle practices that support physical, emotional, and mental well-being at work.",
            "Our workplace programs include sessions on leading a healthy lifestyle through nutrition, movement, stress management, and preventive wellness practices, along with Ayurvedic approaches to menstrual health and menopause care. We help employees better understand hormonal changes, menstrual cycles, perimenopause, and menopause while also encouraging open conversations that reduce stigma in professional spaces.",
            "Menopause awareness is especially important in workplaces because many women experience symptoms that can affect their physical, emotional, and social well-being, including their professional lives. Research also shows that severe menopausal symptoms can contribute to reduced productivity, increased sick leave, and early retirement if adequate support is not available.",
            "Through interactive discussions, wellness-based practices, and evidence-backed education, SNHP aims to help workplaces build supportive cultures where women feel informed, valued, and empowered at every stage of life.",
          ],
        },
        impact: {
          heading: "Workplace and community reach.",
          stats: [
            { num: "15+", label: "NMMC ward sessions" },
            { num: "2016-19", label: "Community seminars" },
          ],
          paragraphs: [
            "Safe N Happy Periods (SNHP) has consistently worked towards bringing menstrual health awareness into both community and professional spaces through impactful seminars and wellness sessions.",
            "Between 2016 and 2019, SNHP conducted more than 15 menstrual health and hygiene sessions across various NMMC ward offices, reaching women and young girls through grassroots community engagement and creating safe spaces for open conversations around menstruation.",
            "Through these initiatives, SNHP continues to bridge gaps in awareness, education, and support while normalizing conversations around women's health across diverse communities and workplaces.",
          ],
          images: [outreach, padDonation],
        },
      }}
    />
  ),
});
