import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage } from "@/components/site/ProgrammePage";
import schoolHero from "@/assets/GallerySchools/school-hero.jpeg";
import schoolSessionOne from "@/assets/GallerySchools/school-session.jpeg";
import schoolSessionTwo from "@/assets/GallerySchools/school-1.jpeg";
import schoolSessionThree from "@/assets/GallerySchools/school-2.jpeg";
import schoolSessionFour from "@/assets/GallerySchools/school-3.jpeg";

export const Route = createFileRoute("/programmes/csr")({
  head: () => ({
    meta: [
      { title: "Colleges - Safe n' Happy Periods" },
      {
        name: "description",
        content:
          "Menstrual health education, awareness, wellness, and youth-led conversations for colleges.",
      },
    ],
  }),
  component: () => (
    <ProgrammePage
      data={{
        slug: "colleges",
        eyebrow: "Programme",
        title: "Colleges.",
        intro:
          "Campus conversations that help young adults build informed, stigma-free, and supportive menstrual health spaces.",
        hero: schoolHero,
        showHeroRegister: true,
        showApply: false,
        whatWeDo: {
          heading: "College programs for open, informed conversations.",
          paragraphs: [
            "SNHP works with colleges to create safe spaces where students can discuss menstruation, health, hygiene, body literacy, and emotional well-being without shame or hesitation.",
            "Our college sessions combine menstrual health education, product awareness, wellness practices, interactive dialogue, and youth-led advocacy. The aim is to build empathy, confidence, and inclusive campus cultures where periods are understood and normalized.",
          ],
          bullets: [
            "Menstrual health and hygiene seminars",
            "Period stigma and myth-breaking conversations",
            "Product awareness and safe practices",
            "Yoga and wellness support",
            "Student-led awareness and advocacy",
          ],
        },
        impact: {
          heading: "Youth-led change across campuses.",
          stats: [
            { num: "60+", label: "Schools & colleges reached" },
            { num: "13K+", label: "Students reached" },
            { num: "IIT", label: "Campus invitation" },
            { num: "SNHP", label: "Youth awareness" },
          ],
          paragraphs: [
            "Across colleges and youth communities, SNHP has helped students move from silence and discomfort to informed, open conversations around menstrual health.",
            "College programs also create opportunities for young volunteers, peer advocates, and student groups to carry menstrual awareness forward within their own communities.",
          ],
          images: [schoolSessionOne, schoolSessionTwo, schoolSessionThree, schoolSessionFour],
        },
      }}
    />
  ),
});
