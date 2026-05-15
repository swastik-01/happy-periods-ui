import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Heart, ChevronDown, Users } from "lucide-react";
import { NAV } from "./nav-config";
import logo from "@/assets/logo-main.svg";
import { ThemeToggle } from "../theme-toggle";

const LOGO = logo;

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileExpand, setMobileExpand] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-3 px-4 sm:h-28 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-foreground group shrink-0">
          <img src={LOGO} alt="Safe n' Happy Periods" width={320} height={94} className="h-16 w-44 object-contain transition group-hover:scale-105 sm:h-[5.5rem] sm:w-64 lg:h-24 lg:w-72" />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {NAV.filter((item) => item.label !== "Get Involved").map((item) => (
            <NavTrigger key={item.label} item={item} />
          ))}
        </nav>

        <div className="hidden xl:flex shrink-0 items-center gap-3">
          <ThemeToggle />
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:scale-105"
          >
            <Users size={14}/> Get Involved
          </Link>
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:scale-105"
          >
            <Heart size={14}/> Donate
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-1 xl:hidden">
          <ThemeToggle />
          <button className="text-foreground p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {NAV.filter((item) => item.label !== "Get Involved").map((item) => (
              <div key={item.label} className="border-b border-border/50">
                {item.children ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between whitespace-nowrap py-3 text-sm uppercase tracking-wider text-foreground"
                      onClick={() => setMobileExpand(mobileExpand === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition ${mobileExpand === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {mobileExpand === item.label && (
                      <div className="pb-3 pl-3 space-y-1">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to.split("#")[0]}
                            hash={c.to.split("#")[1]}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-foreground/70 hover:text-primary"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.to!}
                    onClick={() => setOpen(false)}
                    className="block whitespace-nowrap py-3 text-sm uppercase tracking-wider text-foreground"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="block text-center bg-primary text-primary-foreground py-3 rounded-full font-semibold mt-4"
            >
              <Heart size={14} className="inline mr-1"/> Donate
            </Link>
            <Link
              to="/get-involved"
              onClick={() => setOpen(false)}
              className="block text-center bg-primary text-primary-foreground py-3 rounded-full font-semibold mt-3"
            >
              <Users size={14} className="inline mr-1"/> Get Involved
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavTrigger({ item }: { item: typeof NAV[number] }) {
  const [hover, setHover] = useState(false);

  if (!item.children) {
    return (
      <Link
        to={item.to!}
        className="whitespace-nowrap px-2.5 py-2 text-xs uppercase tracking-wider text-foreground/80 transition hover:text-primary"
        activeProps={{ className: "whitespace-nowrap px-2.5 py-2 text-xs uppercase tracking-wider text-primary" }}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button className="flex items-center gap-1 whitespace-nowrap px-2.5 py-2 text-xs uppercase tracking-wider text-foreground/80 transition hover:text-primary">
        {item.label}
        <ChevronDown size={12} className={`transition ${hover ? "rotate-180" : ""}`} />
      </button>
      {hover && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72">
          <div className="bg-popover border border-border rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden p-2 animate-in fade-in slide-in-from-top-2 duration-150">
            {item.children.map((c) => {
              const [path, hash] = c.to.split("#");
              return (
                <Link
                  key={c.to}
                  to={path}
                  hash={hash}
                  className="block px-4 py-3 rounded-xl hover:bg-muted group transition"
                >
                  <div className="text-foreground text-sm font-semibold group-hover:text-primary">{c.label}</div>
                  {c.desc && <div className="text-muted-foreground text-xs mt-0.5">{c.desc}</div>}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
