import { createFileRoute } from "@tanstack/react-router";
import heroMesh from "@/assets/hero-mesh.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Satakshi Dubey — Aspiring AI Engineer & IT Student" },
      {
        name: "description",
        content:
          "Portfolio of Satakshi Dubey, second-year B.Tech IT student building skills in programming, AI tools, prompt engineering and creative technology.",
      },
      { property: "og:title", content: "Satakshi Dubey — Aspiring AI Engineer" },
      {
        property: "og:description",
        content:
          "Second-year B.Tech Information Technology student learning to build with AI, code and design.",
      },
    ],
  }),
  component: Portfolio,
});

const skills = [
  {
    title: "Programming",
    items: ["Python", "C / C++", "Java basics", "HTML & CSS", "SQL fundamentals"],
  },
  {
    title: "AI & Tools",
    items: ["ChatGPT & Gemini", "Prompt engineering", "AI image tools", "No-code builders", "Automation workflows"],
  },
  {
    title: "Creative",
    items: ["Canva design", "Presentation craft", "Content writing", "Poster & UI mockups", "Storytelling"],
  },
  {
    title: "Foundations",
    items: ["Data structures", "DBMS", "Operating systems", "Computer networks", "Problem solving"],
  },
];

const projects = [
  {
    tag: "AI",
    name: "Prompt Playbook",
    blurb:
      "A growing library of tested prompts for study, research and content — organised by task, with notes on what changes the output quality.",
    stack: ["Prompt design", "LLMs", "Documentation"],
  },
  {
    tag: "Python",
    name: "Student Utility Scripts",
    blurb:
      "Small command-line tools for attendance tracking, marks calculation and file organisation, written to practise clean, readable Python.",
    stack: ["Python", "File I/O", "Logic"],
  },
  {
    tag: "Web",
    name: "Campus Event Page",
    blurb:
      "A responsive event landing page built from scratch to learn layout, typography and accessible markup without a framework.",
    stack: ["HTML", "CSS", "Responsive"],
  },
];

const timeline = [
  {
    year: "2024",
    title: "Started B.Tech in Information Technology",
    text: "Began the engineering journey with a focus on programming fundamentals and mathematics.",
  },
  {
    year: "2025",
    title: "Fell in love with AI",
    text: "Started exploring generative AI tools, prompt engineering and how models are actually built and used.",
  },
  {
    year: "2026",
    title: "Second year — building in public",
    text: "Practising Python and DSA daily, shipping small projects, and documenting everything I learn.",
  },
  {
    year: "Next",
    title: "Toward AI Engineering",
    text: "Machine learning foundations, real datasets, and an internship where I can contribute to production AI work.",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-sm font-semibold tracking-[0.2em] uppercase">
            S. Dubey
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-primary" href="#about">About</a>
            <a className="transition-colors hover:text-primary" href="#skills">Skills</a>
            <a className="transition-colors hover:text-primary" href="#work">Work</a>
            <a className="transition-colors hover:text-primary" href="#journey">Journey</a>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-primary/50 px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Get in touch
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 glow-bg" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pt-36 pb-24 md:grid-cols-[1.15fr_0.85fr] md:pt-44 md:pb-32">
            <div>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                <span className="size-1.5 rounded-full bg-primary" />
                B.Tech IT · Second Year
              </p>
              <h1 className="font-display text-5xl leading-[0.95] font-semibold sm:text-6xl lg:text-7xl">
                Satakshi
                <br />
                <span className="text-gradient">Dubey</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                An Information Technology student learning to build with artificial intelligence —
                writing code, engineering prompts, and turning curiosity into projects that work.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  style={{ boxShadow: "var(--shadow-elegant)" }}
                >
                  See what I'm building
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  Contact
                </a>
              </div>
              <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  ["2nd", "Year of B.Tech"],
                  ["AI", "Career focus"],
                  ["Daily", "Practice habit"],
                ].map(([k, v]) => (
                  <div key={v}>
                    <dt className="font-display text-2xl font-semibold text-primary">{k}</dt>
                    <dd className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={heroMesh}
                  alt="Abstract glowing neural network mesh representing artificial intelligence"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[0.4fr_0.6fr]">
            <h2 className="font-display text-sm tracking-[0.2em] text-muted-foreground uppercase">About</h2>
            <div>
              <p className="text-2xl leading-snug sm:text-3xl">
                I'm in the middle of the part nobody posts about — the learning.
              </p>
              <div className="mt-8 space-y-5 text-muted-foreground">
                <p>
                  I'm a second-year B.Tech Information Technology student with one clear goal: to
                  become an AI Engineer. Right now that means getting genuinely good at the
                  fundamentals — Python, data structures, databases — while staying close to the
                  tools that are reshaping how software gets built.
                </p>
                <p>
                  I spend my time writing small programs, testing how far a well-written prompt can
                  go, and designing things that look as considered as they function. Every project
                  here is something I built to learn, not to decorate a resume.
                </p>
                <p className="text-foreground">
                  Looking for internships and collaborations where I can contribute, ask good
                  questions and grow fast.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-t border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="font-display text-sm tracking-[0.2em] text-muted-foreground uppercase">Skills</h2>
            <p className="mt-4 max-w-2xl text-2xl leading-snug sm:text-3xl">
              A toolkit under active construction.
            </p>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((group) => (
                <div key={group.title} className="bg-card p-7">
                  <h3 className="font-display text-lg font-semibold text-primary">{group.title}</h3>
                  <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="font-display text-sm tracking-[0.2em] text-muted-foreground uppercase">Work</h2>
            <p className="mt-4 max-w-2xl text-2xl leading-snug sm:text-3xl">
              Projects built while learning.
            </p>
            <div className="mt-12 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="group grid gap-6 bg-card p-8 transition-colors hover:bg-secondary md:grid-cols-[auto_1fr_auto] md:items-start"
                >
                  <span className="rounded-full border border-primary/40 px-3 py-1 text-xs font-medium tracking-wide text-primary uppercase justify-self-start">
                    {project.tag}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{project.name}</h3>
                    <p className="mt-3 max-w-2xl text-muted-foreground">{project.blurb}</p>
                  </div>
                  <ul className="flex flex-wrap gap-2 md:justify-end">
                    {project.stack.map((s) => (
                      <li key={s} className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="border-t border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="font-display text-sm tracking-[0.2em] text-muted-foreground uppercase">Journey</h2>
            <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {timeline.map((step) => (
                <li key={step.year} className="border-t border-primary/40 pt-6">
                  <p className="font-display text-sm font-semibold tracking-widest text-primary uppercase">
                    {step.year}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden border-t border-border">
          <div className="pointer-events-none absolute inset-0 glow-bg" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
            <h2 className="font-display text-4xl leading-tight font-semibold sm:text-5xl">
              Let's build something.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Open to internships, student collaborations and any conversation about AI, code or
              design.
            </p>
            <a
              href="mailto:satakshi.dubey@example.com"
              className="mt-10 inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              satakshi.dubey@example.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Satakshi Dubey</p>
          <p>Built and maintained by hand.</p>
        </div>
      </footer>
    </div>
  );
}
