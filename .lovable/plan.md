## Goal

Restructure the site to match the roadmap PDF: multi-level dropdown navigation, new pages for each section, and an animated rotating hero image on the home page.

## 1. Navigation (Header dropdowns)

Replace the flat nav with mega-menu style dropdowns (desktop hover/click, mobile accordion). Top-level items + children:

- **Home** → `/`
- **About** ▾ → The Start, Mission & Vision, Amodini Foundation, Our Team, Milestones
- **Our Programmes** ▾ → For Schools, For Workplace, Impact Partner, Train the Trainer, Yoga Session
  - Each programme page has tabs: What We Do/Offer · Impact · Apply Now (form)
- **Our Events** ▾ → Flagship Event, Other Events
- **Why Us** ▾ → Our Partners, Appraises, Testimony
- **Resources** ▾ → Reports, Guides, Open Resources, Research Paper
- **Gallery** ▾ → Pics, Videos, Testimonies/Articles
- **Get Involved** ▾ → Donate (Pad Drive / Seminar / Hygiene Kits / Rural Outreach), Sponsor (1 Girl / 1 Workshop / 1 Community Drive / 1 Underprivileged Area), Volunteer/Intern, Register (Seminar / Workshop / Event / CSR)
- **Donate** (CTA button, stays visible)

Implementation: use Radix `NavigationMenu` (already installed) for desktop dropdowns, themed in plum/coral. Mobile = collapsible accordion sections in the existing slide-down panel.

## 2. New / restructured routes

Using TanStack flat dot-routing under `src/routes/`:

```
about.tsx                       (overview + links to subpages)
about.start.tsx
about.mission.tsx
about.amodini.tsx
about.team.tsx
about.milestones.tsx

programmes.tsx                  (overview grid)
programmes.schools.tsx
programmes.workplace.tsx
programmes.impact-partner.tsx
programmes.train-the-trainer.tsx
programmes.yoga.tsx
  → each has 3 sections on one page: What We Do · Impact · Apply Now form

events.tsx
events.flagship.tsx

why-us.tsx                      (Partners + Appraises + Testimony tabs)
resources.tsx                   (Reports/Guides/Open/Research)
gallery.tsx                     (Pics/Videos/Testimonies tabs)

get-involved.tsx                (hub)
get-involved.donate.tsx
get-involved.sponsor.tsx
get-involved.volunteer.tsx
get-involved.register.tsx
```

Existing `donate.tsx`, `impact.tsx`, `news.tsx`, `faq.tsx`, `contact.tsx`, `what-we-do.tsx` are kept; `what-we-do` redirects to `/programmes`, `news` linked from Resources, `faq` linked from each programme page.

Forms (Apply Now / Register / Volunteer) persist to `localStorage` so the admin dashboard inbox shows them, matching the existing contact-form pattern.

## 3. Home page animated hero

Replace the single hero image with a slow auto-rotating image stack:

- 3–4 images from the existing site (workshop, donation drive, school session, community).
- Framer Motion crossfade + slow Ken-Burns scale (8s per slide, infinite loop).
- Pause on hover, swipe/tap on mobile to advance.
- Keeps the "71%" floating badge and coral border frame.

Optional: subtle parallax on scroll for the hero section.

## 4. Admin dashboard

Add new submission types (programme applications, sponsor requests, volunteer signups, registrations) to the dashboard inbox with a type filter.

## Out of scope

- No backend/auth beyond the existing hardcoded admin login.
- No new branding/color changes — keep the bold activist plum/coral system.
- Real images for new sub-pages reuse existing site assets; placeholders only where the live site has none.

## Technical notes

- Dropdowns: Radix `NavigationMenu` styled to match plum theme; ensure keyboard accessibility.
- All new routes get unique `head()` meta (title + description) per TanStack SEO guidance.
- Forms validated with `react-hook-form` + `zod` (already in deps).
- Hero carousel uses `framer-motion` `AnimatePresence` (already installed).
