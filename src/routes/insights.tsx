import { createFileRoute } from "@tanstack/react-router";
import { Container, Eyebrow, Reveal } from "@/components/site/primitives";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights | Leadership Strategy, Gender Equity & Career Advancement" },
      { name: "description", content: "Articles on women's advancement, sponsorship, organizational strategy, and the architecture of senior progression." },
      { property: "og:title", content: "Insights — Writing on Advancement & Strategy" },
      { property: "og:description", content: "Essays on advancement, sponsorship, and the systems women navigate." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Insights,
});

const ARTICLES = [
  { cat: "Leadership Advancement", date: "Coming soon", t: "The Unwritten Rules of Advancement" },
  { cat: "Gender & Systems", date: "Coming soon", t: "The Leadership Double Bind" },
  { cat: "Sponsorship & Visibility", date: "Coming soon", t: "Visibility Without Overexposure" },
  { cat: "Motherhood & Career Continuity", date: "Coming soon", t: "Motherhood Is a Leadership Transition" },
  { cat: "Strengths-Based Leadership", date: "Coming soon", t: "Strengths-Led Leadership Is Not Soft" },
  { cat: "Organizations & Inclusion", date: "Coming soon", t: "Progression, Not Just Representation" },
];

function Insights() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <Reveal><Eyebrow>Insights</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] text-foreground max-w-3xl">
              Insights
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-xl text-[15px] md:text-[16px] text-foreground/70 leading-relaxed">
              Research-informed perspectives on leadership advancement, gender, and organizational systems.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a, i) => (
              <Reveal key={a.t} delay={i * 50} as="article" className="group">
                <a href="#" className="block">
                  <div className="aspect-[4/3] relative overflow-hidden bg-[var(--cream)] border border-[var(--hairline)]/70">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_30%,_rgba(184,154,106,0.25),_transparent_70%)]" />
                    <div className="absolute inset-3 border border-[var(--hairline)]" />
                    <div className="absolute left-4 top-4 eyebrow text-foreground/45">Thumbnail</div>
                  </div>
                  <div className="mt-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-foreground/55">
                    <span className="text-[var(--gold)]">{a.cat}</span>
                    <span aria-hidden>·</span>
                    <span>{a.date}</span>
                  </div>
                  <h2 className="mt-3 font-serif text-[20px] md:text-[22px] text-foreground leading-snug group-hover:text-[var(--gold)] transition-colors">
                    {a.t}
                  </h2>
                </a>
              </Reveal>
            ))}
          </div>

          <p className="mt-12 text-[11px] text-foreground/45">Article thumbnails and content to be supplied.</p>
        </Container>
      </section>
    </>
  );
}
