import { createFileRoute } from "@tanstack/react-router";
import { ProgrammePage } from "@/components/site/ProgrammePage";
import padDonation from "@/assets/donate.jpg";
import field from "@/assets/home/field.jpg";
import outreach from "@/assets/home/outreach.jpg";

export const Route = createFileRoute("/programmes/impact-partner")({
  head: () => ({
    meta: [
      { title: "Corporate Partnerships - Safe n' Happy Periods" },
      {
        name: "description",
        content:
          "Long-term partnerships, sponsorships, and community engagement for menstrual health.",
      },
    ],
  }),
  component: () => (
    <ProgrammePage
      data={{
        slug: "impact-partner",
        eyebrow: "Programme",
        title: "Corporate Partnerships.",
        intro:
          "Partnerships that sustain menstrual health education, pad donation drives, and grassroots outreach.",
        hero: padDonation,
        whatWeDo: {
          heading: "Partner with us for long-term impact.",
          paragraphs: [
            "At Safe N Happy Periods (SNHP), our Impact Partners are the individuals, organizations, and collaborators who support our mission through long-term partnerships, sponsorships, and consistent community engagement.",
            "Whether through small recurring contributions, collaborative initiatives, or continued advocacy, their support helps us sustain menstrual health education, awareness programs, pad donation drives, and grassroots outreach efforts.",
            "Impact Partners play an important role in helping SNHP expand its reach and create lasting change by enabling us to continue working with schools, communities, workplaces, and underserved groups over the years. Together, we are building a stronger, more informed, and stigma-free future around menstrual health.",
          ],
        },
        impact: {
          heading: "Mijwan and long-term partner impact.",
          sections: [
            {
              title: "Mijwan",
              paragraphs: [
                "One of our key long-term Impact Partners has been Mijwan Welfare Society, with whom SNHP has collaborated for over 7 years.",
                "Together, we have conducted menstrual health awareness programs across schools and sewing centers, reaching young girls and women through education, hygiene awareness, and community-based engagement initiatives.",
                "Through the continued support of our Impact Partners, SNHP is able to expand its reach and create lasting grassroots impact while working towards a more informed, empowered, and stigma-free future around menstrual health.",
              ],
            },
          ],
          images: [field, outreach],
        },
      }}
    />
  ),
});
