import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage } from "@/components/site/ProgrammePage";
import field from "@/assets/home/field.jpg";
import outreach from "@/assets/home/outreach.jpg";
import padDonation from "@/assets/home/pad-donation.jpg";

export const Route = createFileRoute("/programmes/workplace")({
  head: () => ({ meta: [{ title: "For Workplace — Safe n' Happy Periods" }, { name: "description", content: "Period-friendly workplace programmes, PMS yoga, and POSH literacy sessions." }] }),
  component: () => (
    <ProgrammePage data={{
      slug: "workplace",
      eyebrow: "Programme · Workplace",
      title: "Period-friendly",
      highlight: "workplaces.",
      intro: "Help your team show up fully — even on the hardest days. We bring conversation, policy and care into your office.",
      hero: field,
      whatWeDo: {
        heading: "Build a workplace where periods aren't a productivity problem.",
        body: "From C-suite sensitisation to ground-floor product access — we help organisations design and roll out menstrual-aware policies that actually work.",
        bullets: [
          "Period-friendly workplace audit & policy design.",
          "Yoga workshops for PMS, cramps and menopause.",
          "POSH (Prevention of Sexual Harassment) literacy that simplifies the law.",
          "Manager sensitisation sessions.",
          "Period product access programmes for restrooms.",
        ],
      },
      impact: {
        stats: [
          { num: "60+", label: "Companies" },
          { num: "8K+", label: "Employees trained" },
          { num: "92%", label: "Reported policy uplift" },
          { num: "15", label: "Cities" },
        ],
        images: [
          outreach,
          padDonation,
        ],
      },
      formFields: [
        { name: "companyName", label: "Company Name", required: true },
        { name: "contactName", label: "Contact Person", required: true },
        { name: "designation", label: "Designation" },
        { name: "email", label: "Work Email", type: "email", required: true },
        { name: "phone", label: "Phone" },
        { name: "employees", label: "Number of employees" },
        { name: "interest", label: "What are you looking for?", rows: 3 },
      ],
    }} />
  ),
});
