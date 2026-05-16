import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage } from "@/components/site/ProgrammePage";
import field from "@/assets/home/field.jpg";
import padDonation from "@/assets/donate.jpg";

export const Route = createFileRoute("/programmes/yoga")({
  head: () => ({
    meta: [
      { title: "Yoga Sessions - Safe n' Happy Periods" },
      {
        name: "description",
        content: "Yoga and wellness workshops for menstrual health, body awareness, and self-care.",
      },
    ],
  }),
  component: () => (
    <ProgrammePage
      data={{
        slug: "yoga",
        eyebrow: "Programme",
        title: "Yoga Sessions.",
        intro:
          "Beginner-friendly movement, breathing, and relaxation practices that support menstrual wellness.",
        hero: field,
        showHeroRegister: true,
        showApply: false,
        whatWeDo: {
          heading: "Movement and body awareness for menstrual wellness.",
          paragraphs: [
            "At Safe n Happy Periods (SNHP), we conduct yoga and wellness workshops designed to help girls and women better understand and manage their menstrual health through movement, breathing practices, and body awareness.",
            "Our sessions focus on simple beginner-friendly yoga asanas and relaxation techniques that support menstrual wellness by helping relieve common concerns such as cramps, discomfort, stress, fatigue, and irregular flow patterns.",
            "These workshops aim to create a holistic and positive approach towards periods while encouraging young girls to connect with their bodies confidently and without stigma.",
          ],
        },
        impact: {
          heading: "Yoga-based menstrual wellness.",
          paragraphs: [
            "Through our long-standing collaboration with Mijwan Welfare Society, SNHP has conducted yoga-based menstrual wellness sessions for school girls where students were taught period pain and flow-relieving yoga asanas along with healthy self-care practices during menstruation.",
            "These workshops helped young girls better understand their menstrual experiences while introducing accessible wellness tools they could continue practicing independently for comfort, confidence, and improved menstrual well-being.",
          ],
          images: [padDonation],
        },
      }}
    />
  ),
});
