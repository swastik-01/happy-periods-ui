import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage } from "@/components/site/ProgrammePage";
import schoolHero from "@/assets/GallerySchools/school-hero.jpeg";
import schoolSessionOne from "@/assets/GallerySchools/school-session.jpeg";
import schoolSessionTwo from "@/assets/GallerySchools/school-1.jpeg";
import schoolSessionThree from "@/assets/GallerySchools/school-2.jpeg";
import schoolSessionFour from "@/assets/GallerySchools/school-3.jpeg";

export const Route = createFileRoute("/programmes/schools")({
  head: () => ({
    meta: [
      { title: "Schools - Safe n' Happy Periods" },
      {
        name: "description",
        content:
          "Menstrual health education seminars, product awareness, yoga, and wellness support for schools.",
      },
    ],
  }),
  component: () => (
    <ProgrammePage
      data={{
        slug: "schools",
        eyebrow: "Programme",
        title: "Schools & Colleges.",
        intro:
          "Safe, informed, and stigma-free menstrual health education for adolescent girls and early menstruators.",
        hero: schoolHero,
        showHeroRegister: true,
        showApply: false,
        whatWeDo: {
          heading: "Safe, informed, and supportive school spaces.",
          paragraphs: [
            "SNHP works with schools to create safe, informed, and supportive spaces for adolescent girls and early menstruators.",
            "Our sessions cover puberty, periods, body changes, menstrual hygiene, product awareness, and healthy practices in an age-appropriate way.",
            "We also include simple yoga and wellness tools to help students manage discomfort, stress, and emotional changes.",
            "Every session is designed to build confidence, reduce fear, and make menstrual health stigma-free from an early age.",
          ],
        },
        impact: {
          heading: "School impact since 2016.",
          stats: [
            { num: "60+", label: "Schools reached" },
            { num: "13K+", label: "Girls reached" },
            { num: "24", label: "NMMC schools at launch" },
            { num: "7yr", label: "Mijwan collaboration" },
          ],
          paragraphs: [
            "Since 2016, SNHP has built stigma-free menstrual health education spaces across schools and communities.",
            "The journey began with NMMC outreach across 24 schools, opening conversations around menstruation, hygiene, and adolescent health.",
            "Today, SNHP has reached 60+ schools and over 13,000 girls through seminars, awareness drives, and wellness programs.",
            "A 7-year collaboration with Mijwan Welfare Society continues to support young girls with accurate knowledge, confidence, and dignity.",
          ],
          images: [schoolSessionOne, schoolSessionTwo, schoolSessionThree, schoolSessionFour],
        },
      }}
    />
  ),
});
