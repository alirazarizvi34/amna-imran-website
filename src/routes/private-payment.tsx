/*
 * PRIVATE PAYMENT PAGE — DEVELOPER NOTE
 * -------------------------------------------------
 * This page is intentionally hidden:
 *  - Not linked from public navigation, footer, or any other page.
 *  - Marked noindex/nofollow via head() meta below.
 *  - Header/footer chrome is suppressed in src/routes/__root.tsx
 *    (matches.some(m => m.routeId === "/private-payment")).
 *
 * Intended use: direct-link only. Share the URL privately with confirmed
 * clients. Replace placeholder copy and wire the payment provider when ready.
 */

import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Eyebrow, Hairline } from "@/components/site/primitives";

export const Route = createFileRoute("/private-payment")({
  head: () => ({
    meta: [
      { title: "Private Payment | Amna Imran" },
      { name: "robots", content: "noindex, nofollow, noarchive" },
      { name: "googlebot", content: "noindex, nofollow" },
      { name: "description", content: "Private payment page for confirmed clients. Direct-link access only." },
    ],
  }),
  component: PrivatePayment,
});

const PAYMENT_OPTIONS = [
  { t: "Card Payment", d: "Details to be added." },
  { t: "Bank Transfer", d: "Details to be added." },
  { t: "Invoice Payment", d: "Details to be added." },
];

function PrivatePayment() {
  return (
    <div className="min-h-screen bg-[var(--cream)]/40 flex flex-col">
      {/* MINIMAL PRIVATE HEADER */}
      <header className="border-b border-[var(--hairline)]/60 bg-background">
        <Container className="h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="font-serif text-lg md:text-xl tracking-tight text-foreground">
            Amna Imran
          </Link>
          <div className="eyebrow text-foreground/55">Private Payment</div>
        </Container>
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section className="border-b border-[var(--hairline)]/60">
          <Container className="pt-14 md:pt-20 pb-12 md:pb-16">
            <div className="max-w-3xl">
              <Eyebrow>Private Payment</Eyebrow>
              <h1 className="mt-7 font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground">
                Secure payment link for{" "}
                <em className="text-[var(--gold)] not-italic font-light">confirmed clients.</em>
              </h1>
              <p className="mt-6 text-[15px] md:text-[16px] text-foreground/70 leading-relaxed font-light">
                This page is intended for clients who have received a direct payment link following a confirmed coaching or consulting engagement.
              </p>
              <p className="mt-5 text-[13px] text-foreground/55 leading-relaxed">
                If you reached this page in error, please return to the main website or contact{" "}
                <span className="text-foreground">[Email Address to be added]</span>.
              </p>
            </div>
          </Container>
        </section>

        {/* PAYMENT DETAILS CARD */}
        <section className="py-14 md:py-20">
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>Payment Details</Eyebrow>
              <div className="mt-8 border border-[var(--hairline)] bg-background p-7 md:p-10">
                <dl className="space-y-5 text-[15px]">
                  <div className="flex justify-between gap-6">
                    <dt className="text-foreground/60">Client Name</dt>
                    <dd className="font-serif text-foreground text-right">[To be added]</dd>
                  </div>
                  <Hairline />
                  <div className="flex justify-between gap-6">
                    <dt className="text-foreground/60">Engagement</dt>
                    <dd className="font-serif text-foreground text-right">[To be added]</dd>
                  </div>
                  <Hairline />
                  <div className="flex justify-between gap-6">
                    <dt className="text-foreground/60">Amount</dt>
                    <dd className="font-serif text-foreground text-right">[To be added]</dd>
                  </div>
                  <Hairline />
                  <div className="flex justify-between gap-6">
                    <dt className="text-foreground/60">Due Date</dt>
                    <dd className="font-serif text-foreground text-right">[To be added]</dd>
                  </div>
                </dl>

                <button
                  type="button"
                  className="mt-9 w-full inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-4 uppercase text-xs tracking-[0.18em] hover:bg-foreground/90 transition-colors"
                >
                  Proceed to Secure Payment <span aria-hidden>→</span>
                </button>
                <p className="mt-3 text-center text-[11px] text-foreground/45">
                  Payment provider link to be added.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* PAYMENT OPTIONS */}
        <section className="py-14 md:py-20 bg-[var(--cream)] border-y border-[var(--hairline)]/60">
          <Container>
            <Eyebrow>Payment Options</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground">
              Available payment methods.
            </h2>
            <div className="mt-10 grid gap-px bg-[var(--hairline)] border border-[var(--hairline)] md:grid-cols-3">
              {PAYMENT_OPTIONS.map((p) => (
                <div key={p.t} className="bg-background p-7 md:p-9">
                  <div className="eyebrow text-[var(--gold)]">Option</div>
                  <h3 className="mt-4 font-serif text-xl md:text-2xl text-foreground">{p.t}</h3>
                  <p className="mt-3 text-foreground/65 leading-relaxed text-[14px]">{p.d}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SUPPORT */}
        <section className="py-14 md:py-20">
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>Need Support?</Eyebrow>
              <p className="mt-6 text-[15px] md:text-[16px] text-foreground/75 leading-relaxed font-light">
                If you have questions about your payment link or engagement details, please contact{" "}
                <span className="text-foreground">[Email Address to be added]</span>.
              </p>
            </div>
          </Container>
        </section>
      </main>

      {/* MINIMAL PRIVATE FOOTER */}
      <footer className="border-t border-[var(--hairline)]/60 bg-background">
        <Container className="py-6 md:py-7 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-[12px] text-foreground/55">
          <div>© 2026 Amna Imran. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
