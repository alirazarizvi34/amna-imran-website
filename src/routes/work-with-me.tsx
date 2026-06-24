import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Container,
  Eyebrow,
  Hairline,
  Reveal,
} from "@/components/site/primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/work-with-me")({
  head: () => ({
    meta: [
      { title: "Work With Me — Strategic Coaching for High-Potential Women | Amna Imran" },
      {
        name: "description",
        content:
          "Private executive coaching for women preparing for promotion, navigating complex organizational dynamics, or protecting leadership trajectory through transitions.",
      },
      { property: "og:title", content: "Work With Me — Strategic Coaching for High-Potential Women" },
      {
        property: "og:description",
        content:
          "Evidence-informed advancement strategy for women operating within real organizational systems.",
      },
      { property: "og:url", content: "/work-with-me" },
    ],
    links: [{ rel: "canonical", href: "/work-with-me" }],
  }),
  component: WorkWithMe,
});

const FOR_YOU = [
  "Deliver consistent results but sense progression has slowed",
  "Are preparing for promotion or stepping into a senior leadership role",
  "Want greater visibility, influence, and executive presence",
  "Feel capable but unclear about the unwritten rules of advancement",
  "Are navigating complex organizational dynamics and want a clearer strategy",
  "Are transitioning into or returning from parenthood and want to protect long-term career trajectory",
  "Value evidence-based insight over motivational rhetoric",
];

const ELEVATE_TIMELINE = [
  {
    m: "Month 1",
    t: "Evidence & Direction",
    d: "An honest diagnosis of your advancement reality and a personalised Leadership Advancement Roadmap.",
  },
  {
    m: "Month 2",
    t: "Leadership Presence",
    d: "The specific, coachable behaviours that signal readiness to decision-makers.",
  },
  {
    m: "Month 3",
    t: "Executive Visibility & Voice",
    d: "Ensuring your work is seen, understood, and championed by the right people. Includes your Stakeholder Influence Plan.",
  },
  {
    m: "Month 4",
    t: "Advancement Strategy",
    d: "Promotion readiness, career narrative, and the political fluency to walk into any senior conversation prepared.",
  },
  {
    m: "Month 5",
    t: "Thriving Sustainability",
    d: "The dimension most programs miss. Redesigning how you invest your energy so ambition doesn't cost you your wellbeing.",
  },
  {
    m: "Month 6",
    t: "Empowered Leadership",
    d: "Your leadership identity, 12–24 month career roadmap, and Strategic Career Progression Plan.",
  },
];

const DELIVERABLES = [
  "Leadership Advancement Roadmap",
  "Stakeholder Influence Plan",
  "Strategic Career Progression Plan",
];

const PARTICIPANT_EXPERIENCE = [
  {
    t: "Increased confidence and authority in senior settings",
    d: "Participants commonly report feeling steadier in board-level, executive, and high-stakes conversations — recognised, heard, and taken seriously.",
  },
  {
    t: "Greater strategic visibility with decision-makers",
    d: "Work becomes visible to the people who shape promotion conversations, not only those who experience it day-to-day.",
  },
  {
    t: "A clear, actionable path to their next role or level",
    d: "Ambiguity gives way to a defined trajectory — with the language, narrative, and behaviours to support it.",
  },
  {
    t: "Deeper, more intentional sponsorship relationships",
    d: "Stakeholder strategy becomes deliberate rather than incidental: who, why, how, and what they advocate for on your behalf.",
  },
  {
    t: "Readiness for promotion — with the evidence and narrative to back it",
    d: "Promotion conversations stop feeling like a hopeful ask and start feeling like a logical next step.",
  },
  {
    t: "Reduced burnout, sustained ambition, and boundaries that protect both",
    d: "A sustainable model of high performance — ambition without self-erasure or overcompensation.",
  },
];

const LT_DESIGNED_FOR = [
  "Women preparing for maternity leave",
  "Women currently on leave planning re-entry",
  "Professionals returning to leadership roles",
  "Organizations committed to retaining high-potential women",
];

const LT_OUTCOMES = [
  "A strategic transition plan",
  "Clear stakeholder alignment",
  "Re-entry visibility strategy",
  "Sustainable performance framework",
  "Reduced self-doubt and increased clarity",
];

function WorkWithMe() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <Container className="pt-16 md:pt-28 pb-16 md:pb-24">
          <div className="max-w-4xl">
            <Reveal>
              <Eyebrow>For Individuals</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-7 font-serif text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4.4rem] leading-[1.03] text-foreground">
                Strategic coaching for women ready to advance with{" "}
                <em className="text-[var(--gold)] not-italic font-light">
                  clarity, visibility, and influence.
                </em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-2xl text-[17px] text-foreground/80 leading-relaxed font-light">
                For high-performing professionals preparing for promotion, navigating complex
                organizational dynamics, or protecting leadership trajectory through major career
                transitions.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-2xl font-serif italic text-xl md:text-2xl leading-snug text-foreground/85">
                This is not generic confidence coaching. It is{" "}
                <span className="text-[var(--gold)] not-italic font-normal">
                  evidence-informed advancement strategy
                </span>{" "}
                for women operating within real organizational systems.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-foreground/90 transition-colors"
                >
                  Book a Strategic Clarity Call <span aria-hidden>→</span>
                </Link>
                <Link
                  to="/organizations"
                  className="inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-[11px] uppercase tracking-[0.22em] hover:border-foreground"
                >
                  Exploring corporate support? Visit Organizations <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* WHO THIS IS FOR — orbit/staggered cluster */}
      <section className="bg-[var(--cream)]/70 border-y border-[var(--hairline)]/60 py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow>Who This Is For</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.04] text-foreground">
                Designed for high-performing women approaching advancement{" "}
                <em className="text-[var(--gold)] not-italic font-light">intentionally.</em>
              </h2>
            </div>
          </Reveal>

          {/* Cluster grid with staggered offsets */}
          <div className="mt-16 grid gap-x-6 gap-y-6 md:grid-cols-12">
            {FOR_YOU.map((f, i) => {
              // Cluster placement for editorial feel
              const layout = [
                "md:col-span-5",
                "md:col-span-7",
                "md:col-span-6",
                "md:col-span-6",
                "md:col-span-7",
                "md:col-span-5",
                "md:col-span-8",
              ][i];
              return (
                <Reveal key={f} delay={i * 60} as="article" className={`${layout} bg-background border border-[var(--hairline)] px-7 py-6 flex items-baseline gap-5`}>
                  <span className="font-serif italic text-[var(--gold)] text-xl md:text-2xl shrink-0 w-9">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] md:text-[16px] text-foreground/85 leading-relaxed">{f}</p>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <p className="mt-20 max-w-3xl font-serif text-2xl md:text-[1.85rem] leading-snug text-foreground/90">
              You may be self-funding your development — or sponsored by your organization. Either
              way, the work is{" "}
              <em className="text-[var(--gold)] not-italic">
                structured, strategic, and advancement-focused.
              </em>
            </p>
          </Reveal>
        </Container>
      </section>

      {/* PROGRAM OVERVIEW */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>Programs</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.04] text-foreground max-w-3xl">
              Two Programs. One{" "}
              <em className="text-[var(--gold)] not-italic font-light">Strategic Foundation.</em>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal as="article" className="relative bg-background border border-[var(--hairline)] p-8 md:p-10 flex flex-col">
              <div className="absolute top-0 left-0 h-1 w-24 bg-[var(--gold)]" />
              <div className="eyebrow text-[var(--gold)]">Signature Program</div>
              <h3 className="mt-5 font-serif text-[1.85rem] md:text-[2.1rem] leading-tight text-foreground">
                ELEVATE<span className="text-[var(--gold)]">™</span> Strategic Advancement Program
              </h3>
              <p className="mt-4 text-[15px] text-foreground/75 leading-relaxed font-light">
                A six-month, evidence-based coaching program to translate capability into recognised
                progression.
              </p>
              <a
                href="#elevate"
                className="mt-8 self-start inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-[11px] uppercase tracking-[0.22em] hover:border-foreground"
              >
                Explore ELEVATE <span aria-hidden>↓</span>
              </a>
            </Reveal>
            <Reveal delay={100} as="article" className="relative bg-foreground text-background p-8 md:p-10 flex flex-col">
              <div className="absolute top-0 left-0 h-1 w-24 bg-[var(--gold)]" />
              <div className="eyebrow text-[var(--gold)]">Career Continuity</div>
              <h3 className="mt-5 font-serif text-[1.85rem] md:text-[2.1rem] leading-tight text-background">
                Lead &amp; Thrive Through Motherhood<span className="text-[var(--gold)]">™</span>
              </h3>
              <p className="mt-4 text-[15px] text-background/80 leading-relaxed font-light">
                Strategic career continuity for high-potential women through maternity leave,
                re-entry, and identity transition.
              </p>
              <a
                href="#lead-thrive"
                className="mt-8 self-start inline-flex items-center gap-2 border-b border-background/50 pb-1 text-[11px] uppercase tracking-[0.22em] text-background hover:border-background"
              >
                Explore Lead &amp; Thrive <span aria-hidden>↓</span>
              </a>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ELEVATE DETAILED — timeline */}
      <section id="elevate" className="bg-foreground text-background py-20 md:py-32 scroll-mt-24">
        <Container>
          <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-end">
            <div className="md:col-span-8">
              <Reveal>
                <Eyebrow className="text-[var(--gold)]">ELEVATE™ · Six Months</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-[3.6rem] leading-[1.03] text-background">
                  You are already performing. So why isn't that{" "}
                  <em className="text-[var(--gold)] not-italic font-light">translating?</em>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-8 max-w-2xl text-[15px] md:text-[16px] text-background/80 leading-relaxed">
                  High-performing women are passed over every day — not because they lack capability,
                  but because advancement is shaped by visibility, perception, and sponsorship as
                  much as it is by results. ELEVATE is a six-month, evidence-based coaching program
                  designed to change that.
                </p>
              </Reveal>
            </div>
            <Reveal delay={180} className="md:col-span-4 md:text-right">
              <div className="eyebrow text-background/55">Format</div>
              <div className="mt-2 font-serif text-2xl md:text-[1.6rem] text-background leading-snug">
                6 months · up to 12 private sessions
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-16 max-w-3xl">
              <p className="font-serif italic text-2xl md:text-[1.85rem] leading-snug text-[var(--gold)]">
                A system, not just sessions.
              </p>
              <p className="mt-5 text-[15px] md:text-[16px] text-background/80 leading-relaxed">
                Grounded in research from HBR, INSEAD, McKinsey, and Gallup, ELEVATE gives you the
                strategy, tools, and clarity to move from high performer to recognised leader. Over
                six months and up to twelve private sessions, you will build a complete advancement
                strategy — and leave with three formal deliverables you own, keep, and return to long
                after the program ends.
              </p>
            </div>
          </Reveal>

          {/* Vertical timeline */}
          <div className="mt-20 relative">
            <div
              aria-hidden
              className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-background/20"
            />
            <ol className="space-y-12 md:space-y-16">
              {ELEVATE_TIMELINE.map((step, i) => (
                <Reveal key={step.m} delay={i * 60} as="li" className="relative">
                  <div className={`grid md:grid-cols-2 gap-6 md:gap-16 items-start ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                    {/* timeline dot */}
                    <div
                      aria-hidden
                      className="absolute left-3 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--gold)] ring-4 ring-foreground"
                    />
                    <div className={`pl-12 md:pl-0 md:pr-12 md:[direction:ltr] ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      <div className="eyebrow text-[var(--gold)]">{step.m}</div>
                      <h3 className="mt-3 font-serif text-[1.65rem] md:text-[1.85rem] leading-tight text-background">
                        {step.t}
                      </h3>
                      <p className="mt-4 text-[14.5px] md:text-[15px] text-background/75 leading-relaxed">
                        {step.d}
                      </p>
                    </div>
                    <div className="hidden md:block md:[direction:ltr]" />
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Deliverables */}
          <div className="mt-20">
            <Reveal>
              <div className="eyebrow text-[var(--gold)]">What you leave with</div>
              <Hairline className="mt-4 bg-background/20" />
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {DELIVERABLES.map((d, i) => (
                <Reveal key={d} delay={i * 70} as="div" className="border border-background/25 p-7">
                  <div className="font-serif italic text-[var(--gold)] text-xl md:text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 font-serif text-[20px] text-background leading-snug">{d}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PARTICIPANT EXPERIENCE — accordion reveal */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>ELEVATE Experience</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.04] text-foreground max-w-3xl">
              What Participants Typically{" "}
              <em className="text-[var(--gold)] not-italic font-light">Experience.</em>
            </h2>
            <p className="mt-6 max-w-2xl text-[14px] text-foreground/60 leading-relaxed italic">
              Results vary by individual. These reflect what participants commonly report — not
              guarantees.
            </p>
          </Reveal>

          <Reveal>
            <Accordion type="single" collapsible className="mt-12 border-t border-[var(--hairline)] max-w-4xl">
              {PARTICIPANT_EXPERIENCE.map((p, i) => (
                <AccordionItem key={p.t} value={`p-${i}`} className="border-b border-[var(--hairline)]">
                  <AccordionTrigger className="py-6 text-left hover:no-underline group">
                    <div className="flex items-baseline gap-5 pr-4">
                      <span className="font-serif italic text-[var(--gold)] text-xl md:text-2xl shrink-0 w-10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-[18px] md:text-[20px] text-foreground leading-snug">
                        {p.t}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-[3.25rem]">
                    <p className="text-[15px] text-foreground/75 leading-relaxed max-w-xl">{p.d}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </Container>
      </section>

      {/* LEAD & THRIVE THROUGH MOTHERHOOD */}
      <section id="lead-thrive" className="bg-[var(--cream)]/70 border-y border-[var(--hairline)]/60 py-20 md:py-32 scroll-mt-24">
        <Container>
          <Reveal>
            <Eyebrow>Career Continuity</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-[3.6rem] leading-[1.03] text-foreground max-w-3xl">
              Lead &amp; Thrive Through{" "}
              <em className="text-[var(--gold)] not-italic font-light">Motherhood.</em>
            </h2>
            <p className="mt-4 font-serif italic text-[var(--gold)] text-xl md:text-2xl">
              Strategic Career Continuity for High-Potential Women
            </p>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-10 max-w-3xl font-serif text-2xl md:text-[1.85rem] leading-snug text-foreground">
              Becoming a working parent is not simply a logistical shift. It is a{" "}
              <em className="text-[var(--gold)] not-italic font-light">profound identity transition.</em>
            </p>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-[16px] text-foreground/75 leading-relaxed font-light">
              Research consistently shows that while most expecting mothers intend to re-engage
              fully with their careers, a significant portion leave the workforce within a year of
              having a child. The gap between intention and outcome is not about ambition. It is
              about structure, support, and strategic navigation.
            </p>
          </Reveal>

          {/* Large stat callouts */}
          <div className="mt-14 grid gap-px bg-[var(--hairline)] border border-[var(--hairline)] md:grid-cols-3">
            <Reveal as="div" className="bg-background p-8 md:p-10">
              <div className="font-serif text-[3.5rem] md:text-[4.5rem] text-[var(--gold)] leading-none">
                75%
              </div>
              <p className="mt-4 text-[14px] md:text-[15px] text-foreground/80 leading-relaxed">
                of expecting mothers intend to re-engage fully with their careers.
              </p>
              <p className="mt-3 text-[11px] text-foreground/45">Source label to confirm</p>
            </Reveal>
            <Reveal delay={80} as="div" className="bg-background p-8 md:p-10">
              <div className="font-serif text-[3.5rem] md:text-[4.5rem] text-[var(--gold)] leading-none">
                43%
              </div>
              <p className="mt-4 text-[14px] md:text-[15px] text-foreground/80 leading-relaxed">
                leave the workforce within a year of having a child.
              </p>
              <p className="mt-3 text-[11px] text-foreground/45">Source label to confirm</p>
            </Reveal>
            <Reveal delay={160} as="div" className="bg-background p-8 md:p-10">
              <div className="font-serif text-[2rem] md:text-[2.4rem] text-foreground leading-snug">
                How a return is managed often matters more than the length of leave.
              </div>
              <p className="mt-4 text-[11px] text-foreground/45">Harvard Business Review</p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="mt-12 max-w-2xl border-l-2 border-[var(--gold)] pl-6 space-y-3">
              <p className="text-[15px] text-foreground/80 leading-relaxed">
                Mothers report significantly higher stress levels than other employees — and stress
                increases further for those with more than one child.
              </p>
              <p className="text-[15px] text-foreground/80 leading-relaxed">
                Without deliberate preparation and repositioning, this transition can quietly disrupt
                leadership trajectory.
              </p>
            </div>
          </Reveal>

          {/* A Different Approach */}
          <div className="mt-24 grid gap-12 md:gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.06] text-foreground">
                  A Different Approach to{" "}
                  <em className="text-[var(--gold)] not-italic font-light">Working Parenthood.</em>
                </h3>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-6 text-[15px] md:text-[16px] text-foreground/75 leading-relaxed">
                  Most return-to-work support focuses on emotional adjustment or work-life balance
                  alone. This program approaches the transition strategically.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal>
                <ul className="divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
                  {[
                    "Protect your leadership positioning before leave",
                    "Maintain visibility and influence during absence",
                    "Re-establish executive presence upon return",
                    "Navigate perception shifts proactively",
                    "Build a sustainable model of ambition that integrates caregiving",
                  ].map((it, i) => (
                    <li key={it} className="flex items-baseline gap-6 py-4">
                      <span className="font-serif italic text-[var(--gold)] text-xl md:text-2xl shrink-0 w-10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-[18px] md:text-[20px] text-foreground leading-snug">
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          <Reveal>
            <div className="mt-16 max-w-3xl space-y-4">
              <p className="font-serif text-2xl md:text-[1.85rem] leading-snug text-foreground">
                Motherhood should not require professional self-erasure.
              </p>
              <p className="font-serif italic text-2xl md:text-[1.85rem] leading-snug text-[var(--gold)]">
                Nor should it demand overcompensation through exhaustion.
              </p>
              <p className="text-[15px] md:text-[16px] text-foreground/75 leading-relaxed">
                With evidence-based tools and structured preparation, this transition can become an
                integrated chapter of leadership growth — not a derailment.
              </p>
            </div>
          </Reveal>

          {/* Designed For + Outcomes */}
          <div className="mt-20 grid gap-10 md:grid-cols-2">
            <Reveal as="div" className="bg-background border border-[var(--hairline)] p-8 md:p-10">
              <div className="eyebrow text-[var(--gold)]">Designed For</div>
              <Hairline className="my-5" />
              <ul className="space-y-3.5">
                {LT_DESIGNED_FOR.map((d) => (
                  <li key={d} className="flex gap-4 text-foreground/85">
                    <span aria-hidden className="mt-2.5 h-px w-5 bg-[var(--gold)] shrink-0" />
                    <span className="text-[15px] leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100} as="div" className="bg-foreground text-background p-8 md:p-10">
              <div className="eyebrow text-[var(--gold)]">The Outcome — Clients leave with</div>
              <Hairline className="my-5 bg-background/20" />
              <ul className="space-y-3.5">
                {LT_OUTCOMES.map((o) => (
                  <li key={o} className="flex gap-4 text-background/90">
                    <span aria-hidden className="mt-2.5 h-px w-5 bg-[var(--gold)] shrink-0" />
                    <span className="text-[15px] leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal>
            <p className="mt-16 max-w-3xl font-serif text-xl md:text-[1.65rem] leading-snug text-foreground">
              When transition is handled intentionally,{" "}
              <em className="text-[var(--gold)] not-italic">retention improves, satisfaction increases, and leadership continuity is preserved.</em>
            </p>
          </Reveal>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-foreground text-background">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow className="text-[var(--gold)]">Begin</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] text-background">
                Ready to Advance With{" "}
                <em className="text-[var(--gold)] not-italic font-light">Intention?</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-background text-foreground px-7 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-[var(--cream)] transition-colors"
                >
                  Book a Strategic Clarity Call <span aria-hidden>→</span>
                </Link>
                <Link
                  to="/organizations"
                  className="inline-flex items-center gap-2 border-b border-background/50 pb-1 text-[11px] uppercase tracking-[0.22em] text-background hover:border-background"
                >
                  Exploring organizational support? <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}