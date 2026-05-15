import { Link } from "@tanstack/react-router";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/logo-main.svg";

const LOGO = logo;

export function Footer() {
  return (
    <footer className="mt-0 bg-secondary text-secondary-foreground dark:bg-plum-deep dark:text-cream/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-4">
          <Link to="/" className="inline-flex">
            <img
              src={LOGO}
              alt="Safe n' Happy Periods"
              width={320}
              height={94}
              className="h-24 w-64 object-contain sm:h-28 sm:w-80"
            />
          </Link>
          <p className="mt-5 font-display text-3xl uppercase leading-tight text-primary">
            Creating joyful, empowered lives.
          </p>
        </div>

        <div className="md:col-span-5">
          <h4 className="font-display text-2xl uppercase text-coral">
            Amodini Foundation
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground dark:text-cream/75">
            A registered trust under Mumbai Public Trust.
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground dark:text-cream/80">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 shrink-0 text-coral" />
              <span>
                Regd. Address: Kukreja Centre, 11th Floor, B Wing, Plot No. 13,
                Sector 11, CBD Belapur, Navi Mumbai - 400614
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-1 shrink-0 text-coral" />
              <span>
                <a href="tel:+918425063301" className="hover:text-coral">
                  +91-84250-63301
                </a>
                {" / "}
                <a href="tel:+919322525977" className="hover:text-coral">
                  9322525977
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Globe size={16} className="mt-1 shrink-0 text-coral" />
              <a href="https://www.safenhappyperiods.org" className="hover:text-coral">
                www.safenhappyperiods.org
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-1 shrink-0 text-coral" />
              <a href="mailto:hello@safenhappyperiods.org" className="hover:text-coral">
                hello@safenhappyperiods.org
              </a>
            </li>
          </ul>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground dark:text-cream/75">
            80G & 12A certified | MCA empanelled | NGO Darpan (NITI Aayog)
            Registered.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display text-2xl uppercase text-coral">Legal</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground dark:text-cream/80">
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
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-muted-foreground dark:text-cream/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Safe n' Happy Periods. All rights reserved.</p>
          <Link to="/donate" className="hover:text-coral">
            Support the mission
          </Link>
        </div>
      </div>
    </footer>
  );
}
