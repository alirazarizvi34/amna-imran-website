import { Link } from "@tanstack/react-router";
import { Container, Hairline } from "./primitives";
import icfLogo from "@/assets/cred-icf.png.asset.json";
import gallupLogo from "@/assets/cred-gallup.png.asset.json";
import cdpLogo from "@/assets/cred-cdp.png.asset.json";
import inseadLogo from "@/assets/cred-insead.png.asset.json";

const CREDENTIALS = [
  { logo: icfLogo.url, label: "ICF ACC Certified" },
  { logo: gallupLogo.url, label: "Gallup Certified CliftonStrengths Coach" },
  { logo: cdpLogo.url, label: "Certified Diversity Professional (CDP®)" },
  { logo: inseadLogo.url, label: "Gender Specialist trained at INSEAD" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[var(--cream)] text-foreground border-t border-[var(--hairline)]/60">
      <Container className="py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl tracking-tight">Amna Imran</span>
              <span className="mt-1.5 text-[10px] uppercase tracking-[0.28em] text-foreground/55">
                Coaching · Consulting
              </span>
            </div>
            <p className="mt-6 max-w-sm text-foreground/70 text-[15px] leading-relaxed">
              Executive coaching and organizational consulting for high-potential women
              navigating advancement in complex environments.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-foreground/50">Navigate</div>
            <ul className="mt-5 space-y-3 text-[14px]">
              {[
                ["/work-with-me", "Work With Me"],
                ["/organizations", "Organizations"],
                ["/about", "About"],
                ["/insights", "Insights"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-foreground/75 hover:text-foreground transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow text-foreground/50">Credentials</div>
            <ul className="mt-5 space-y-4 text-[14px] text-foreground/75">
              {CREDENTIALS.map((c) => (
                <li key={c.label} className="flex items-center gap-3">
                  <div className="h-10 w-16 shrink-0 flex items-center justify-center">
                    <img
                      src={c.logo}
                      alt={c.label}
                      loading="lazy"
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  <span>{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Hairline className="my-12" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-[12px] text-foreground/55">
          <div>© {new Date().getFullYear()} Amna Imran. All rights reserved.</div>
          <div className="eyebrow">Strategy · Coaching · Advancement</div>
        </div>
      </Container>
    </footer>
  );
}
