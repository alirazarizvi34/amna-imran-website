import { Link } from "@tanstack/react-router";
import { Container, Hairline } from "./primitives";
import icfLogo from "@/assets/icf-acc.png";
import gallupLogo from "@/assets/gallup-strengths.png";
import cdpLogo from "@/assets/cdp.png";
import inseadLogo from "@/assets/insead.png";
import logoSrc from "@/assets/logo.png";

const CREDENTIALS = [
  { logo: icfLogo, label: "ICF ACC Certified", scale: 1.76 },
  { logo: gallupLogo, label: "Gallup Certified CliftonStrengths Coach", scale: 1.5 },
  { logo: cdpLogo, label: "Certified Diversity Professional (CDP®)", scale: 1.62 },
  { logo: inseadLogo, label: "Gender Specialist trained at INSEAD", scale: 1, markOnly: true },
];

export function SiteFooter() {
  return (
    <footer className="bg-[var(--cream)] text-foreground border-t border-[var(--hairline)]/60">
      <Container className="py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" aria-label="Amna Imran home" className="flex items-center gap-3">
              <img
                src={logoSrc}
                alt=""
                aria-hidden
                className="h-11 w-auto shrink-0"
                draggable={false}
              />
              <span className="flex flex-col leading-none">
              <span className="font-serif text-2xl tracking-tight">Amna Imran</span>
              <span className="mt-1.5 text-[10px] uppercase tracking-[0.28em] text-foreground/55">
                Coaching · Consulting
                </span>
              </span>
            </Link>
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
            <ul className="mt-3 space-y-2">
              {CREDENTIALS.map((c) => (
                <li key={c.label} className="flex items-center gap-3.5 text-[14px] text-foreground/70">
                  <span className="h-9 w-12 shrink-0 flex items-center justify-center">
                    {c.markOnly ? (
                      <span className="block h-8 w-8 overflow-hidden rounded-full">
                        <img
                          src={c.logo}
                          alt=""
                          aria-hidden
                          loading="lazy"
                          className="h-8 w-auto max-w-none object-left"
                        />
                      </span>
                    ) : (
                      <img
                        src={c.logo}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        className="h-8 w-8 object-contain"
                      />
                    )}
                  </span>
                  <span className="leading-snug">{c.label}</span>
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
