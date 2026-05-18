export type NavChild = { to: string; label: string; desc?: string };
export type NavItem = { label: string; to?: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    children: [
      { to: "/about", label: "The Story", desc: "Who we are" },
      { to: "/about#mission", label: "Mission & Vision", desc: "What drives us" },
      { to: "/about#amodini", label: "Amodini Foundation", desc: "Our parent org" },
      { to: "/about#team", label: "Our Team", desc: "The humans behind it" },
      { to: "/about#milestones", label: "Milestones", desc: "A decade of action" },
    ],
  },
  {
    label: "Programmes",
    children: [
      { to: "/programmes", label: "All Programmes", desc: "Overview" },
      { to: "/programmes/schools", label: "Schools", desc: "Workshops and seminars" },
      { to: "/programmes/workplace", label: "Workplaces", desc: "Wellness seminars" },
      {
        to: "/programmes/impact-partner",
        label: "Corporate Partnerships",
        desc: "Long-term support",
      },
      {
        to: "/programmes/train-the-trainer",
        label: "Train the Trainer",
        desc: "Build facilitators",
      },
      { to: "/programmes/yoga", label: "Yoga Sessions", desc: "Periods and menopause" },
      { to: "/programmes/csr", label: "Colleges", desc: "Campus awareness" },
    ],
  },
  {
    label: "Impacts",
    children: [
      { to: "/events", label: "All Impacts", desc: "Impact stories" },
      { to: "/events#stories", label: "Impact Stories", desc: "Events and outreach" },
      { to: "/events#reports", label: "Reports", desc: "Project PDFs" },
    ],
  },
  {
    label: "Why Us",
    children: [
      { to: "/why-us", label: "Overview", desc: "Why people choose us" },
      { to: "/why-us#partners", label: "Our Partners", desc: "Logos & collaborators" },
      { to: "/why-us#appraises", label: "Appraises", desc: "Letters & articles" },
      { to: "/why-us#volunteers", label: "Our Volunteers", desc: "People behind the work" },
    ],
  },
  {
    label: "CSR",
    children: [
      { to: "/csr", label: "CSR Overview", desc: "Measurable impact" },
      { to: "/events/csr", label: "CSR Initiatives", desc: "Events and outreach" },
      { to: "/programmes/impact-partner", label: "Corporate Partnerships", desc: "Long-term support" },
    ],
  },
  {
    label: "Media",
    children: [
      { to: "/gallery", label: "Overview", desc: "Pics, video, stories" },
      { to: "/gallery#pics", label: "Pictures", desc: "Field moments" },
      { to: "/gallery#video", label: "Videos", desc: "Stories in motion" },
      { to: "/gallery#testimonies", label: "Testimonies", desc: "Articles & voices" },
    ],
  },
  {
    label: "Get Involved",
    children: [
      { to: "/get-involved", label: "Overview", desc: "All the ways" },
      { to: "/donate", label: "Donate", desc: "One-time and monthly support" },
      { to: "/get-involved#volunteer", label: "Volunteer / Intern", desc: "Join the team" },
      { to: "/get-involved#register", label: "Register", desc: "Seminars, CSR, events" },
    ],
  },
];
