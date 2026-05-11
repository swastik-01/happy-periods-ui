import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Safe n' Happy Periods" },
      { name: "description", content: "Get in touch with Safe n' Happy Periods. Workshops, partnerships, donations and more." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Persist locally so admin dashboard could reflect it
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const item = {
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        message: String(data.get("message") || ""),
        date: new Date().toISOString(),
        unread: true,
      };
      const list = JSON.parse(localStorage.getItem("shp_messages") || "[]");
      list.unshift(item);
      localStorage.setItem("shp_messages", JSON.stringify(list.slice(0, 50)));
      form.reset();
    } catch {}
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="bg-plum-deep text-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-coral">Let's connect</span>
          <h1 className="font-display text-6xl lg:text-8xl uppercase mt-4 leading-[0.9]">
            Got questions or<br /><span className="text-coral">ideas?</span>
          </h1>
          <p className="mt-6 max-w-xl text-cream/80">We're just a message away.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl uppercase">Reach us directly</h2>
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <div className="bg-coral text-primary-foreground p-3 rounded-2xl"><Mail size={18}/></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <a href="mailto:hello@safenhappyperiods.org" className="font-semibold hover:text-coral">hello@safenhappyperiods.org</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-coral text-primary-foreground p-3 rounded-2xl"><Phone size={18}/></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                  <a href="tel:+919322525977" className="font-semibold hover:text-coral">+91 93225 25977</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-coral text-primary-foreground p-3 rounded-2xl"><MapPin size={18}/></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Based in</div>
                  <div className="font-semibold">Mumbai, India · Working across 15 states</div>
                </div>
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="bg-cream rounded-3xl p-8 space-y-4">
            {sent ? (
              <div className="text-center py-10">
                <CheckCircle2 className="mx-auto text-coral" size={48} />
                <h3 className="font-display text-3xl uppercase mt-4">Thank you!</h3>
                <p className="text-muted-foreground mt-2">We'll get back to you within 2 working days.</p>
                <button type="button" onClick={() => setSent(false)} className="mt-6 text-coral font-semibold">Send another</button>
              </div>
            ) : (
              <>
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold">Name</label>
                  <input name="name" required className="mt-1 w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-coral focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold">Email</label>
                  <input name="email" type="email" required className="mt-1 w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-coral focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold">Message</label>
                  <textarea name="message" required rows={5} className="mt-1 w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-coral focus:outline-none resize-none" />
                </div>
                <button type="submit" className="w-full bg-coral text-primary-foreground py-3 rounded-xl font-semibold hover:scale-[1.02] transition inline-flex items-center justify-center gap-2">
                  Send message <Send size={16} />
                </button>
                <p className="text-xs text-muted-foreground text-center">We won't share your email address.</p>
              </>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
