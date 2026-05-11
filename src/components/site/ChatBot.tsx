import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Heart } from "lucide-react";
import girlAvatar from "@/assets/chatbot-girl.png";

type Msg = { from: "bot" | "user"; text: string; cta?: boolean };

const QUICK = [
  "How can I donate?",
  "Book a workshop",
  "How do I volunteer?",
  "About SNHP",
];

function botReply(input: string): Msg[] {
  const t = input.toLowerCase();
  if (t.includes("donat") || t.includes("give") || t.includes("money") || t.includes("fund")) {
    return [
      { from: "bot", text: "Amazing! Every contribution funds workshops, pad drives & education. Tap below to make a donation 💖" },
      { from: "bot", text: "Donate now", cta: true },
    ];
  }
  if (t.includes("workshop") || t.includes("school") || t.includes("session")) {
    return [
      { from: "bot", text: "We host menstrual health workshops across schools, colleges & workplaces. You can schedule one or learn more on 'What We Do'." },
      { from: "bot", text: "Want to support? You can also donate to fund a workshop:" },
      { from: "bot", text: "Donate now", cta: true },
    ];
  }
  if (t.includes("volunteer") || t.includes("join") || t.includes("help")) {
    return [
      { from: "bot", text: "We'd love your help! Volunteers join us in workshops, content, outreach and ops. Even a small donation keeps us running:" },
      { from: "bot", text: "Donate now", cta: true },
    ];
  }
  if (t.includes("about") || t.includes("who")) {
    return [
      { from: "bot", text: "Safe n' Happy Periods is a Mumbai-based nonprofit (since 2016) on a mission for shame-free, pain-free periods. Want to help us scale?" },
      { from: "bot", text: "Donate now", cta: true },
    ];
  }
  return [
    { from: "bot", text: "I'm here to help! The best way to support our mission is a small donation — even ₹500 sponsors a kit." },
    { from: "bot", text: "Donate now", cta: true },
  ];
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: "Hi! I'm Aanya 💕 from Safe n' Happy Periods. How can I help?" },
  ]);

  function send(text: string) {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { from: "user", text }, ...botReply(text)]);
    setInput("");
  }

  return (
    <>
      {/* FAB */}
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
            Hi! Need help? 💕
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
            className="fixed bottom-5 right-5 z-50 w-[calc(100vw-2.5rem)] sm:w-96 max-h-[80vh] flex flex-col rounded-3xl overflow-hidden bg-cream shadow-2xl border border-border"
          >
            {/* Header */}
            <div className="bg-plum-deep text-cream p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-coral overflow-hidden ring-2 ring-pink/40">
                <img src={girlAvatar} alt="Aanya" width={48} height={48} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display text-lg uppercase">Aanya</div>
                <div className="text-xs text-cream/70 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400" /> Online · SNHP Helper
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="p-2 hover:bg-white/10 rounded-full">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-cream to-pink/20">
              {msgs.map((m, i) =>
                m.cta ? (
                  <Link
                    key={i}
                    to="/donate"
                    onClick={() => setOpen(false)}
                    className="block w-fit bg-coral text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition shadow-lg shadow-coral/30"
                  >
                    <Heart size={14} className="inline mr-1" /> {m.text}
                  </Link>
                ) : (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
                      m.from === "bot"
                        ? "bg-white text-plum-deep rounded-bl-sm shadow-sm"
                        : "bg-plum-deep text-cream ml-auto rounded-br-sm"
                    }`}
                  >
                    {m.text}
                  </motion.div>
                )
              )}
            </div>

            {/* Quick replies */}
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {QUICK.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-xs bg-white border border-border px-3 py-1.5 rounded-full hover:border-coral hover:text-coral transition"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); send(input); }}
              className="p-3 border-t border-border bg-white flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-full bg-muted text-sm focus:outline-none focus:ring-2 focus:ring-coral"
              />
              <button type="submit" className="bg-coral text-primary-foreground p-2.5 rounded-full hover:scale-105 transition" aria-label="Send">
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
