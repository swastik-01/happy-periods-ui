import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin, Heart } from "lucide-react";

import logo from "@/assets/logo.png";

const LOGO = logo;

export function Footer() {
  return (
    <footer className="bg-plum-deep text-cream/90 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="Safe n' Happy Periods" width={56} height={56} className="w-14 h-14 rounded-full bg-cream p-1 object-contain" />
            <h3 className="font-display text-2xl text-cream uppercase leading-tight">
              Safe <span className="text-coral">N'</span> Happy<br />Periods
            </h3>
          </div>
          <p className="mt-5 max-w-md text-cream/70 text-sm leading-relaxed">
            Periods without pain, shame, or silence — powered by action and gender-neutral conversations. A flagship project of the Amodini Foundation, Mumbai.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="https://www.instagram.com/safenhappyperiods/" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white/10 hover:bg-coral transition" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="https://www.facebook.com/safenhappyperiods" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white/10 hover:bg-coral transition" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="mailto:hello@safenhappyperiods.org" className="p-2.5 rounded-full bg-white/10 hover:bg-coral transition" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display text-lg text-coral mb-4 uppercase tracking-wide">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-coral">About</Link></li>
            <li><Link to="/programmes" className="hover:text-coral">Programmes</Link></li>
            <li><Link to="/events" className="hover:text-coral">Events</Link></li>
            <li><Link to="/why-us" className="hover:text-coral">Why Us</Link></li>
            <li><Link to="/resources" className="hover:text-coral">Resources</Link></li>
            <li><Link to="/gallery" className="hover:text-coral">Gallery</Link></li>
            <li><Link to="/get-involved" className="hover:text-coral">Get Involved</Link></li>
            <li><Link to="/contact" className="hover:text-coral">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-display text-lg text-coral mb-4 uppercase tracking-wide">Reach us</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2"><Mail size={14} className="mt-1"/> <a href="mailto:hello@safenhappyperiods.org" className="hover:text-coral">hello@safenhappyperiods.org</a></li>
            <li className="flex items-start gap-2"><Phone size={14} className="mt-1"/> <a href="tel:+919322525977" className="hover:text-coral">+91 93225 25977</a></li>
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-1"/> Mumbai, India</li>
          </ul>
          <Link to="/donate" className="mt-5 inline-flex items-center gap-2 bg-coral text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition">
            <Heart size={14}/> Donate
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} Safe n' Happy Periods · Amodini Foundation. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-coral">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-coral">Terms & Conditions</Link>
            <Link to="/admin/login" className="hover:text-coral">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
