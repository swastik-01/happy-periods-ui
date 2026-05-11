import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Lock, AlertCircle } from "lucide-react";
import { loginAdmin } from "@/lib/admin-auth";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [{ title: "Admin Login — Safe n' Happy Periods" }, { name: "robots", content: "noindex" }],
  }),
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (loginAdmin(username, password)) {
      navigate({ to: "/admin/dashboard" });
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-plum-deep flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-cream rounded-3xl p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-coral rounded-xl text-primary-foreground">
            <Lock size={20} />
          </div>
          <h1 className="font-display text-3xl uppercase">Admin Access</h1>
        </div>
        <p className="text-muted-foreground text-sm mb-6">
          Sign in to monitor site activity.
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-coral focus:outline-none"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-coral focus:outline-none"
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-sm text-destructive">
              <AlertCircle size={16} /> {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-coral text-primary-foreground py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 p-3 bg-pink/30 rounded-xl text-xs text-plum-deep">
          <strong>Demo credentials:</strong> admin / shp2026
        </div>
      </div>
    </div>
  );
}
