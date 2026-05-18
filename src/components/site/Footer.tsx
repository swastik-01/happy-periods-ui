import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/logo-main.svg";

const AMODINI_URL = "https://amodinifoundation.org/";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Safeandhappyperiods?mibextid=wwXIfr&rdid=fTtf3BskrVbhfMVr&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HYQ2LwkLD%2F%3Fmibextid%3DwwXIfr#",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/safenhappy-periods/posts/?feedView=all",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/safenhappyperiods?igsh=bHdvMjR4cGluc3B6&utm_source=qr",
    icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="mt-0 bg-secondary text-secondary-foreground dark:bg-plum-deep dark:text-cream/90">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-7 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-3">
          <Link to="/" className="inline-flex">
            <img
              src={logo}
              alt="Safe n' Happy Periods"
              width={320}
              height={94}
              className="h-16 w-48 object-contain sm:h-20 sm:w-60"
            />
          </Link>
          <div className="mt-2 flex w-48 items-center justify-center gap-2 pl-3 sm:w-60">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary-foreground transition hover:border-coral hover:bg-coral hover:text-primary-foreground dark:border-white/15 dark:text-cream"
              >
                <social.icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-5">
          <h4 className="font-display text-lg uppercase text-coral">
            <a href={AMODINI_URL} target="_blank" rel="noreferrer" className="hover:underline">
              Amodini Foundation
            </a>
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground dark:text-cream/75">
            Safe n Happy Periods is the flagship project of{" "}
            <a href={AMODINI_URL} target="_blank" rel="noreferrer" className="font-semibold hover:text-coral">
              Amodini Foundation
            </a>
            , a registered charitable trust under Mumbai Public Trust.
          </p>
          <ul className="mt-3 space-y-1 text-xs leading-snug text-muted-foreground dark:text-cream/80">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0 text-coral" />
              <span>Kukreja Centre, CBD Belapur, Navi Mumbai - 400614</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-0.5 shrink-0 text-coral" />
              <a href="tel:+918425063301" className="hover:text-coral">
                +91-84250-63301
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-0.5 shrink-0 text-coral" />
              <a href="mailto:connect@safenhappyperiods.org" className="hover:text-coral">
                connect@safenhappyperiods.org
              </a>
            </li>
          </ul>
          <p className="mt-3 text-[11px] leading-snug text-muted-foreground dark:text-cream/70">
            80G & 12A certified | MCA empanelled | NGO Darpan (NITI Aayog) Registered.
          </p>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-display text-lg uppercase text-coral">Newsletter</h4>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground dark:text-cream/75">
            Get updates on workshops, campaigns, and community action.
          </p>
          <div className="mt-3 flex overflow-hidden rounded-full border border-border bg-background dark:border-white/15">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              className="min-w-0 flex-1 bg-transparent px-4 py-2 text-xs outline-none placeholder:text-muted-foreground"
            />
            <button
              type="button"
              className="bg-coral px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-coral/90"
            >
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-border dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-4 gap-y-1 px-4 py-3 text-[11px] text-muted-foreground dark:text-cream/60 sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Safe n' Happy Periods. All rights reserved.</p>
          <a
            href="https://amodinifoundation.org/privacy.html"
            className="hover:text-coral"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
          <a
            href="https://amodinifoundation.org/terms.html"
            className="hover:text-coral"
            target="_blank"
            rel="noreferrer"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
