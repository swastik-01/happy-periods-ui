import { Link } from "@tanstack/react-router";
import { Facebook, Globe, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/logo-main.svg";

const LOGO = logo;

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
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-4 py-9 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-3">
          <Link to="/" className="inline-flex">
            <img
              src={LOGO}
              alt="Safe n' Happy Periods"
              width={320}
              height={94}
              className="h-20 w-56 object-contain sm:h-24 sm:w-72"
            />
          </Link>
          <p className="mt-4 font-display text-2xl uppercase leading-tight text-primary">
            Creating joyful, empowered lives.
          </p>
          <div className="mt-4 flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary-foreground transition hover:border-coral hover:bg-coral hover:text-primary-foreground dark:border-white/15 dark:text-cream"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-display text-xl uppercase text-coral">
            Amodini Foundation
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground dark:text-cream/75">
            A registered trust under Mumbai Public Trust.
          </p>
          <ul className="mt-4 space-y-2 text-xs leading-relaxed text-muted-foreground dark:text-cream/80">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 shrink-0 text-coral" />
              <span>
                Kukreja Centre, CBD Belapur, Navi Mumbai - 400614
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-1 shrink-0 text-coral" />
              <span>
                <a href="tel:+918425063301" className="hover:text-coral">
                  +91-84250-63301
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Globe size={14} className="mt-1 shrink-0 text-coral" />
              <a href="https://www.safenhappyperiods.org" className="hover:text-coral">
                www.safenhappyperiods.org
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-1 shrink-0 text-coral" />
              <a href="mailto:connect@safenhappyperiods.org" className="hover:text-coral">
                connect@safenhappyperiods.org
              </a>
            </li>
          </ul>
          <p className="mt-4 max-w-xl text-xs leading-relaxed text-muted-foreground dark:text-cream/75">
            80G & 12A certified | MCA empanelled | NGO Darpan (NITI Aayog)
            Registered.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display text-xl uppercase text-coral">Newsletter</h4>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground dark:text-cream/75">
            Get updates on workshops, campaigns, and community action.
          </p>
          <div className="mt-4 flex overflow-hidden rounded-full border border-border bg-background dark:border-white/15">
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

        <div className="md:col-span-2">
          <h4 className="font-display text-xl uppercase text-coral">Legal</h4>
          <ul className="mt-3 space-y-2 text-xs text-muted-foreground dark:text-cream/80">
            <li>
              <a
                href="https://amodinifoundation.org/privacy.html"
                className="hover:text-coral"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://amodinifoundation.org/terms.html"
                className="hover:text-coral"
                target="_blank"
                rel="noreferrer"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="https://amodinifoundation.org/refunds.html"
                className="hover:text-coral"
                target="_blank"
                rel="noreferrer"
              >
                Cancellation & Refunds
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-muted-foreground dark:text-cream/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Safe n' Happy Periods. All rights reserved.</p>
          <Link to="/donate" className="hover:text-coral">
            Support the mission
          </Link>
        </div>
      </div>
    </footer>
  );
}
