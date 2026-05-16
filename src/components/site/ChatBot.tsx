import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart } from "lucide-react";
import girlAvatar from "@/assets/chatbot-girl.png";
import { PROGRAMME_REGISTER_FORM_URL, VOLUNTEER_INTERN_FORM_URL } from "@/lib/forms";

const actions = [
  { label: "Donate now", href: "/donate" },
  { label: "Book a workshop", href: PROGRAMME_REGISTER_FORM_URL, external: true },
  { label: "Volunteer / intern", href: VOLUNTEER_INTERN_FORM_URL, external: true },
  { label: "Amodini Foundation", href: "https://amodinifoundation.org/", external: true },
  { label: "Contact us", href: "/contact" },
];

export function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-5 right-5 z-40 group"
        aria-label="Open chat"
        style={{ display: open ? "none" : "block" }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="relative"
        >
          <div className="absolute -top-12 right-0 bg-cream text-plum-deep px-3 py-2 rounded-2xl rounded-br-none text-xs font-semibold shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
            Hi! Need help?
          </div>
          <div className="w-16 h-16 rounded-full bg-coral shadow-xl shadow-coral/40 ring-4 ring-pink/40 overflow-hidden flex items-center justify-center">
            <img src={girlAvatar} alt="Aanya" width={64} height={64} className="w-full h-full object-cover" />
          </div>
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-coral border-2 border-cream animate-pulse" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-5 right-5 z-50 flex max-h-[80vh] w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-3xl border border-border bg-cream shadow-2xl sm:w-96"
          >
            <div className="flex items-center gap-3 bg-plum-deep p-4 text-cream">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-coral ring-2 ring-pink/40">
                <img src={girlAvatar} alt="Aanya" width={48} height={48} className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-display text-lg uppercase">Aanya</div>
                <div className="flex items-center gap-1 text-xs text-cream/70">
                  <span className="h-2 w-2 rounded-full bg-green-400" /> Online - SNHP Helper
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-full p-2 hover:bg-white/10">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-gradient-to-b from-cream to-pink/20 p-4">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-[90%] rounded-2xl rounded-bl-sm bg-white px-4 py-3 text-sm leading-6 text-plum-deep shadow-sm"
              >
                Hi, I am Aanya from Safe n Happy Periods. Choose an option below and I will take you to the right place.
              </motion.div>

              <div className="mt-4 grid gap-2">
                {actions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between gap-3 rounded-full border border-border bg-white px-4 py-3 text-sm font-semibold text-plum-deep transition hover:border-coral hover:text-coral"
                  >
                    <span>{action.label}</span>
                    <Heart size={14} className="text-coral" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
