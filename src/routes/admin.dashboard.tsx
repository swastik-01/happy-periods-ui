import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LogOut, Eye, MessageSquare, Heart, TrendingUp, Mail } from "lucide-react";
import { isAdminAuthed, logoutAdmin } from "@/lib/admin-auth";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({
    meta: [{ title: "Admin Dashboard — Safe n' Happy Periods" }, { name: "robots", content: "noindex" }],
  }),
  component: AdminDashboard,
});

const pages = [
  { name: "Home", path: "/", views: 12480, updated: "2 days ago" },
  { name: "About", path: "/about", views: 3210, updated: "5 days ago" },
  { name: "What We Do", path: "/what-we-do", views: 4890, updated: "1 week ago" },
  { name: "Donate", path: "/donate", views: 2150, updated: "3 days ago" },
  { name: "Impact", path: "/impact", views: 1980, updated: "2 weeks ago" },
  { name: "FAQ", path: "/faq", views: 920, updated: "1 month ago" },
  { name: "News", path: "/news", views: 1140, updated: "4 days ago" },
];

type InboxMsg = { name: string; email: string; message: string; date: string; unread: boolean };

const seedMessages: InboxMsg[] = [
  { name: "Priya Sharma", email: "priya@example.com", message: "I'd love to host a workshop at our school in Pune. When are you available?", date: "2h ago", unread: true },
  { name: "Rohan Mehta", email: "rohan@example.com", message: "Our company would like to fund 50 awareness kits for rural schools.", date: "1d ago", unread: true },
  { name: "Anita Iyer", email: "anita@example.com", message: "Can I volunteer remotely for content / social media?", date: "3d ago", unread: false },
  { name: "Vikram Patel", email: "vikram@example.com", message: "Booking a POSH session for our NGO team of 25 people.", date: "5d ago", unread: false },
  { name: "Meera Nair", email: "meera@example.com", message: "Where can I read more about Project RED training timelines?", date: "1w ago", unread: false },
];

function AdminDashboard() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);

  const [messages, setMessages] = useState<InboxMsg[]>(seedMessages);

  useEffect(() => {
    if (!isAdminAuthed()) {
      navigate({ to: "/admin/login" });
      return;
    }
    setReady(true);
    try {
      const stored = JSON.parse(localStorage.getItem("shp_messages") || "[]");
      if (Array.isArray(stored) && stored.length) {
        const mapped: InboxMsg[] = stored.map((s: { name: string; email: string; message: string; date: string; unread?: boolean }) => ({
          name: s.name, email: s.email, message: s.message,
          date: new Date(s.date).toLocaleDateString(),
          unread: s.unread !== false,
        }));
        setMessages([...mapped, ...seedMessages]);
      }
    } catch {}
  }, [navigate]);

  if (!ready) return null;

  const totalViews = pages.reduce((s, p) => s + p.views, 0);
  const unread = messages.filter((m) => m.unread).length;

  const stats = [
    { icon: Eye, label: "Total Views", value: totalViews.toLocaleString(), tint: "bg-coral text-primary-foreground" },
    { icon: MessageSquare, label: "Unread Messages", value: unread, tint: "bg-plum text-cream" },
    { icon: Heart, label: "Donations (Mo)", value: "₹84,500", tint: "bg-pink text-plum-deep" },
    { icon: TrendingUp, label: "Growth", value: "+12.4%", tint: "bg-cream text-plum-deep border border-border" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-plum-deep text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl uppercase">Admin Dashboard</h1>
            <p className="text-xs text-cream/60">Safe n' Happy Periods · Mock data</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm text-cream/80 hover:text-coral">View site →</Link>
            <button
              onClick={() => { logoutAdmin(); navigate({ to: "/admin/login" }); }}
              className="inline-flex items-center gap-2 bg-coral text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* STATS */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className={`rounded-2xl p-5 ${s.tint}`}>
              <s.icon size={20} className="opacity-80" />
              <div className="font-display text-3xl mt-3">{s.value}</div>
              <div className="text-xs uppercase tracking-wider opacity-80 mt-1">{s.label}</div>
            </div>
          ))}
        </section>

        {/* PAGES TABLE */}
        <section className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-display text-xl uppercase">Pages</h2>
            <span className="text-xs text-muted-foreground">Last 30 days</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="px-6 py-3">Page</th>
                  <th className="px-6 py-3">Path</th>
                  <th className="px-6 py-3 text-right">Views</th>
                  <th className="px-6 py-3">Last updated</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((p) => (
                  <tr key={p.path} className="border-t border-border">
                    <td className="px-6 py-4 font-medium">{p.name}</td>
                    <td className="px-6 py-4 text-muted-foreground font-mono text-xs">{p.path}</td>
                    <td className="px-6 py-4 text-right font-semibold">{p.views.toLocaleString()}</td>
                    <td className="px-6 py-4 text-muted-foreground">{p.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* MESSAGES */}
        <section className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-display text-xl uppercase flex items-center gap-2">
              <Mail size={18} /> Inbox
            </h2>
            <span className="text-xs text-muted-foreground">{unread} unread</span>
          </div>
          <ul className="divide-y divide-border">
            {messages.map((m, i) => (
              <li key={i} className="px-6 py-4 hover:bg-muted/30 transition">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      {m.unread && <span className="w-2 h-2 rounded-full bg-coral" />}
                      <span className="font-semibold">{m.name}</span>
                      <span className="text-xs text-muted-foreground">· {m.email}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground truncate">{m.message}</p>
                  </div>
                  <span className="text-xs text-muted-foreground flex-shrink-0">{m.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
