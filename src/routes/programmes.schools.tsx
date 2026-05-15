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
        whatWeDo: {
          heading: "Safe, informed, and supportive school spaces.",
          paragraphs: [
            "At Safe N Happy Periods (SNHP), we work with schools to create a safe, informed, and supportive environment around menstrual health for adolescent girls and early menstruators. Our sessions are designed especially for premenarchal girls and girls who have recently started menstruating, helping them understand their bodies with confidence and without fear or stigma.",
            "Our school programs include interactive menstrual health education seminars focused on understanding puberty, periods, and body changes, along with the importance of menstrual hygiene and healthy practices. We also conduct product awareness sessions, introducing students to different menstrual products and how to use them safely and comfortably. In addition, we incorporate simple yoga and wellness practices that help young girls manage discomfort, stress, and emotional changes associated with menstruation.",
            "Through age-appropriate conversations and engaging activities, SNHP aims to make menstrual health education accessible, empowering, and stigma-free from an early age.",
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
            "Since 2016, Safe N Happy Periods (SNHP) has been working towards creating safe, informed, and stigma-free spaces for menstrual health education in schools. Our journey began with our first outreach initiative through NMMC, where we connected with 24 schools to start conversations around menstruation, hygiene, and adolescent health at a time when these topics were rarely discussed openly.",
            "Over the years, SNHP has expanded its impact to more than 60 schools and has reached over 13,000 girls through interactive seminars, awareness drives, and wellness programs focused on menstrual health and hygiene. A significant part of this journey has been our 7-year collaboration with Mijwan Welfare Society, where we have actively conducted targeted school programs to educate and empower young girls with accurate knowledge, confidence, and support around menstruation.",
            "Through continuous grassroots engagement, SNHP remains committed to ensuring that every girl grows up informed, empowered, and unashamed of her body and health.",
          ],
          images: [schoolSessionOne, schoolSessionTwo, schoolSessionThree, schoolSessionFour],
        },
      }}
    />
  ),
});
