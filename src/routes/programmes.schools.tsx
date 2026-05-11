import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage } from "@/components/site/ProgrammePage";
import workshop from "@/assets/home/workshop.jpg";
import field from "@/assets/home/field.jpg";
import padDonation from "@/assets/home/pad-donation.jpg";
import outreach from "@/assets/home/outreach.jpg";

export const Route = createFileRoute("/programmes/schools")({
  head: () => ({ meta: [{ title: "For Schools — Safe n' Happy Periods" }, { name: "description", content: "Menstrual health workshops, seminars and FAQ sessions for schools and colleges." }] }),
  component: () => (
    <ProgrammePage data={{
      slug: "schools",
      eyebrow: "Programme · Schools",
      title: "For",
      highlight: "Schools.",
      intro: "Age-appropriate, gender-neutral menstrual health education that turns the most awkward classroom hour into the most empowering.",
      hero: workshop,
      whatWeDo: {
        heading: "Workshops, seminars & ongoing support.",
        body: "We work with schools across India — from urban international campuses to rural government schools — adapting curriculum to age, language and context.",
        bullets: [
          "Menstrual biology, hygiene and product literacy sessions (Grades 5–12).",
          "Boys-inclusive seminars to break stigma at the source.",
          "Teacher capacity-building workshops.",
          "Q&A safe-space sessions with anonymous question boxes.",
          "Take-home resource kits in regional languages.",
        ],
      },
      impact: {
        stats: [
          { num: "120+", label: "Schools" },
          { num: "30K+", label: "Students reached" },
          { num: "98%", label: "Felt more confident" },
          { num: "12", label: "Languages" },
        ],
        images: [
          outreach,
          padDonation,
          field,
        ],
        story: "From a single workshop in 2014 to a curriculum reaching 30,000+ students — we've seen first-hand how one honest conversation can change the way a generation experiences their bodies.",
      },
      formFields: [
        { name: "schoolName", label: "School / College Name", required: true },
        { name: "contactName", label: "Contact Person", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "phone", label: "Phone" },
        { name: "city", label: "City" },
        { name: "students", label: "Approx. number of students" },
        { name: "interest", label: "Interested in", rows: 3 },
      ],
    }} />
  ),
});
