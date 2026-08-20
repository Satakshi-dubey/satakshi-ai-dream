import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent, type MouseEvent } from "react";
import aiGraphic from "@/assets/ai-graphic.jpg";
import profilePhoto from "@/assets/ai-graphic.jpg";
import resumeFile from "@/assets/resume.pdf.asset.json";
import quizCertificate from "@/assets/quiz-certificate.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Satakshi Dubey — B.Tech IT Student | Aspiring AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Satakshi Dubey, second-year B.Tech Information Technology student at AITD Kanpur (AKTU), learning Python, AI tools and prompt engineering on the way to becoming an AI Engineer.",
      },
      { property: "og:title", content: "Satakshi Dubey — Aspiring AI Engineer" },
      {
        property: "og:description",
        content:
          "Second-year B.Tech IT student passionate about Artificial Intelligence, AI tools, programming and creative technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Education", "#education"],
  ["Skills", "#skills"],
  ["Goal", "#goal"],
  ["Projects", "#projects"],
  ["Certificates", "#certificates"],
  ["Contact", "#contact"],
] as const;

const skillGroups = [
  {
    category: "Programming",
    skills: [
      { name: "C", status: "Foundation" },
      { name: "Python", status: "Currently Learning" },
    ],
  },
  {
    category: "Artificial Intelligence",
    skills: [
      { name: "AI Tools", status: "Currently Learning" },
      { name: "AI Prompting / Prompt Engineering", status: "Currently Developing" },
    ],
  },
  {
    category: "Creative Skills",
    skills: [{ name: "Video Editing", status: "Foundation" }],
  },
] as const;

const goalSteps = ["Learn", "Experiment", "Build", "Grow", "AI Engineer"];

const upcomingProjects = [
  { title: "AI Project", note: "Exploring how AI models and tools can solve everyday problems." },
  { title: "Python Project", note: "A first hands-on build once my Python fundamentals are solid." },
  { title: "Creative / AI Tool Project", note: "Combining video editing and AI tools into something original." },
];

const exploring = [
  { title: "AI Tools & Experimentation", note: "Trying out new AI platforms and understanding what they can do." },
  { title: "Prompting", note: "Learning how to write prompts that produce reliable, useful results." },
  { title: "Basic Programming", note: "Strengthening logic and problem solving with C." },
  { title: "Python Development", note: "Learning — syntax, scripts and small programs." },
  { title: "Video Editing", note: "Creative editing as a complement to my technical skills." },
];

const achievements = [
  {
    title: "Online Quiz Certificate",
    description:
      "I earned a certificate by participating in Quiz Starts of QuestUp 2026: India's Biggest AI Quiz, organised by Falcon Sphere.",
    link: quizCertificate.url,
    linkText: "View certificate",
    downloadName: "Satakshi-Dubey-Quiz-Certificate.jpg",
    fileDetails: {
      name: quizCertificate.original_filename,
      size: `${(quizCertificate.size / 1024).toFixed(1)} KB`,
      type: quizCertificate.content_type,
      date: new Date(quizCertificate.created_at).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    },
  },
  {
    title: "Adobe University Hackathon 2026",
    description:
      "I am a participant of Adobe University Hackathon 2026. My team name was Vertex.",
    details: ["Event: Adobe University Hackathon 2026", "Team: Vertex", "Role: Participant"],
  },
];


function StatusBadge({ status }: { status: string }) {
  const learning = status !== "Foundation";
  return (
    <span
      className={
        learning
          ? "rounded-full border border-primary/50 bg-primary/10 px-2.5 py-1 text-[11px] font-medium tracking-wide text-primary"
          : "rounded-full border border-border bg-secondary px-2.5 py-1 text-[11px] font-medium tracking-wide text-muted-foreground"
      }
    >
      {status}
    </span>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="font-display text-xs tracking-[0.24em] text-primary uppercase">{label}</p>
      <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-4xl">{title}</h2>
    </div>
  );
}

function CertificateModal({
  isOpen,
  onClose,
  item,
}: {
  isOpen: boolean;
  onClose: () => void;
  item: (typeof achievements)[number] | null;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleDownload = async () => {
    if (!item?.link || !item.downloadName) return;
    try {
      const response = await fetch(item.link);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = item.downloadName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      window.open(item.link, "_blank", "noopener,noreferrer");
    }
  };

  if (!isOpen || !item) return null;

  const hasCertificate = !!item.link;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-background p-6 shadow-2xl sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          aria-label="Close certificate details"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <h3 className="font-display pr-10 text-xl font-semibold sm:text-2xl">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>

        {hasCertificate && (
          <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card/50">
            <img
              src={item.link}
              alt={`${item.title} preview`}
              className="max-h-[55vh] w-full object-contain"
            />
          </div>
        )}

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {item.fileDetails && (
            <>
              <div className="glass-card p-4">
                <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">File name</dt>
                <dd className="mt-1 text-sm font-medium break-all">{item.fileDetails.name}</dd>
              </div>
              <div className="glass-card p-4">
                <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Size</dt>
                <dd className="mt-1 text-sm font-medium">{item.fileDetails.size}</dd>
              </div>
              <div className="glass-card p-4">
                <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Type</dt>
                <dd className="mt-1 text-sm font-medium">{item.fileDetails.type}</dd>
              </div>
              <div className="glass-card p-4">
                <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Uploaded</dt>
                <dd className="mt-1 text-sm font-medium">{item.fileDetails.date}</dd>
              </div>
            </>
          )}
          {item.details && (
            <div className="glass-card p-4 sm:col-span-2">
              <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Details</dt>
              <dd className="mt-2 space-y-1">
                {item.details.map((detail) => (
                  <p key={detail} className="text-sm font-medium">
                    {detail}
                  </p>
                ))}
              </dd>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {hasCertificate && (
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Download certificate
            </button>
          )}
          <button
            onClick={onClose}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof achievements)[number] | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim().slice(0, 100);
    const email = String(data.get("email") ?? "").trim().slice(0, 255);
    const message = String(data.get("message") ?? "").trim().slice(0, 2000);
    if (!name || !email || !message) return;

    setFormStatus("sending");
    try {
      const payload = new FormData();
      payload.append("name", name);
      payload.append("email", email);
      payload.append("message", message);
      payload.append("_subject", `Portfolio message from ${name}`);
      payload.append("_template", "table");
      payload.append("_captcha", "false");

      const response = await fetch("https://formsubmit.co/ajax/dubsatakshi5@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });
      if (!response.ok) throw new Error("Message delivery failed");

      form.reset();
      setFormStatus("sent");
    } catch {
      setFormStatus("error");
    }
  };


  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <a href="#home" className="font-display truncate text-sm font-semibold tracking-[0.2em] uppercase">
              Satakshi <span className="text-primary">Dubey</span>
            </a>
            <a
              href="#skills"
              title="View my skills"
              aria-label="View my skills"
              className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-full border border-primary/40 px-2.5 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
              </svg>
              <span>Skills</span>
            </a>
          </div>

          <ul className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
            {navItems.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="transition-colors hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="shrink-0 rounded-full border border-primary/50 px-4 py-1.5 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-glow)]"
          >
            Contact
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 glow-bg animate-pulse-glow" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-32 pb-24 md:grid-cols-[1.1fr_0.9fr] md:pt-40 md:pb-28">
            <div className="animate-rise">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                <span className="size-1.5 rounded-full bg-primary" />
                Available to learn & collaborate
              </p>
              <h1 className="font-display text-5xl leading-[0.95] font-bold sm:text-6xl lg:text-7xl">
                Satakshi
                <br />
                <span className="text-gradient">Dubey</span>
              </h1>
              <p className="mt-5 text-base font-medium text-muted-foreground sm:text-lg">
                B.Tech Information Technology Student{" "}
                <span className="text-primary">| Aspiring AI Engineer</span>
              </p>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                Second-year Information Technology student passionate about{" "}
                <span className="text-primary">Artificial Intelligence</span>, emerging AI tools,
                programming, and creative technology. Currently developing my skills in{" "}
                <span className="text-primary">Python</span>, AI prompting, and modern AI
                technologies with the goal of becoming an <span className="text-primary">AI Engineer</span>.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={resumeFile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  type="application/pdf"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
                >
                  View My Resume
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="animate-fade justify-self-center">
              <div className="relative">
                <div
                  className="absolute -inset-6 rounded-full blur-3xl"
                  style={{ background: "var(--gradient-glow)" }}
                  aria-hidden="true"
                />
                <div className="relative size-64 overflow-hidden rounded-full border border-primary/40 sm:size-80">
                  <img
                    src={profilePhoto}
                    alt="Satakshi Dubey, B.Tech Information Technology student"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <SectionHeading label="About" title="A student building toward AI engineering." />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="space-y-5 text-muted-foreground">
                <p>
                  I'm a second-year B.Tech{" "}
                  <span className="text-foreground">Information Technology</span> student at{" "}
                  <span className="text-foreground">AITD Kanpur</span>, affiliated with Dr. A.P.J.
                  Abdul Kalam Technical University (AKTU), graduating in{" "}
                  <span className="text-foreground">2029</span>.
                </p>
                <p>
                  My strongest interest is <span className="text-primary">Artificial Intelligence</span>,
                  and my aspiration is to become an <span className="text-primary">AI Engineer</span>.
                  Right now I'm learning AI tools and technologies, building on my programming
                  background in <span className="text-foreground">C</span>, and actively learning{" "}
                  <span className="text-primary">Python</span>.
                </p>
                <p>
                  I'm also interested in <span className="text-foreground">AI prompting</span> and{" "}
                  <span className="text-foreground">video editing</span> — a mix of technical and
                  creative work that keeps me curious. My motivation is simple: keep developing
                  both sides, consistently.
                </p>
              </div>
              <div className="glass-card overflow-hidden p-2">
                <img
                  src={aiGraphic}
                  alt="Glowing blue wireframe sphere representing artificial intelligence networks"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="border-t border-border bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <SectionHeading label="Education" title="Where I'm studying." />
            <div className="glass-card max-w-3xl p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  2nd Year — Currently Studying
                </span>
                <span className="text-xs tracking-wide text-muted-foreground uppercase">
                  Expected Graduation: 2029
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">
                B.Tech — Information Technology
              </h3>
              <p className="mt-2 text-muted-foreground">AITD Kanpur</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU)
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <SectionHeading label="Skills" title="What I know, and what I'm learning." />
            <div className="grid gap-6 md:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.category} className="glass-card p-7">
                  <h3 className="font-display text-lg font-semibold text-primary">{group.category}</h3>
                  <ul className="mt-6 space-y-4">
                    {group.skills.map((skill) => (
                      <li key={skill.name} className="border-t border-border pt-4 first:border-0 first:pt-0">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-medium">{skill.name}</span>
                          <StatusBadge status={skill.status} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Goal */}
        <section id="goal" className="relative overflow-hidden border-t border-border bg-card/30">
          <div className="pointer-events-none absolute inset-0 glow-bg" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5 py-24">
            <SectionHeading label="Career Goal" title="My Goal: AI Engineer" />
            <p className="max-w-3xl leading-relaxed text-muted-foreground">
              I'm currently exploring AI tools and developing my programming and prompting
              abilities, one step at a time. I'm not an experienced professional yet — I'm a
              student who is genuinely curious about how intelligent systems work, and I'm building
              the foundations now so that I can grow into a career as an{" "}
              <span className="text-primary">AI Engineer</span>.
            </p>
            <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {goalSteps.map((step, i) => (
                <li
                  key={step}
                  className={
                    i === goalSteps.length - 1
                      ? "rounded-xl border border-primary/60 bg-primary/10 p-5 text-center shadow-[var(--shadow-glow)]"
                      : "glass-card p-5 text-center"
                  }
                >
                  <p className="font-display text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    Step {i + 1}
                  </p>
                  <p
                    className={
                      i === goalSteps.length - 1
                        ? "mt-2 font-display text-lg font-semibold text-primary"
                        : "mt-2 font-display text-lg font-semibold"
                    }
                  >
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <SectionHeading label="Projects" title="Projects — Coming Soon" />
            <p className="max-w-2xl text-muted-foreground">
              I'm currently learning, experimenting, and preparing to build my first AI-focused
              projects. This space is reserved for real work — it will fill up as I go.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {upcomingProjects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-xl border border-dashed border-border p-7 transition-colors hover:border-primary/50"
                >
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] tracking-wide text-muted-foreground uppercase">
                    Coming Soon
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-muted-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section id="certificates" className="border-t border-border bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <SectionHeading label="Certificates" title="Certificates & Achievements" />
            <div className="grid gap-6 md:grid-cols-2">
              {achievements.map((item) => (
                <article
                  key={item.title}
                  className="glass-card cursor-pointer p-7 transition-all hover:border-primary/50"
                  onClick={() => setSelectedCertificate(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setSelectedCertificate(item);
                  }}
                  aria-label={`View details for ${item.title}`}
                >
                  <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z" />
                      </svg>
                      View details
                    </span>
                    {item.link && (
                      <span
                        className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
                        Download available
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CertificateModal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          item={selectedCertificate}
        />

        {/* Exploring */}
        <section className="border-t border-border bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <SectionHeading label="What I'm Exploring" title="Areas I'm actively developing." />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {exploring.map((item) => (
                <div key={item.title} className="glass-card p-6">
                  <h3 className="font-display text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden border-t border-border">
          <div className="pointer-events-none absolute inset-0 glow-bg" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5 py-24">
            <SectionHeading label="Contact" title="Let's connect." />
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="max-w-md leading-relaxed text-muted-foreground">
                  Recruiters, collaborators, fellow learners — I'd be glad to hear from you,
                  whether it's an opportunity, a project idea, or just a conversation about AI.
                </p>
                <dl className="mt-8 space-y-4">
                  <div className="glass-card p-5">
                    <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Email</dt>
                    <dd className="mt-1">
                      <a href="mailto:dubsatakshi5@gmail.com" className="font-medium hover:text-primary">
                        dubsatakshi5@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div className="glass-card p-5">
                    <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Based in</dt>
                    <dd className="mt-1 font-medium">Kanpur, India</dd>
                  </div>
                  <div className="glass-card p-5">
                    <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Profiles</dt>
                    <dd className="mt-3 flex flex-wrap gap-3">
                      <a
                        href="https://www.linkedin.com/in/satakshi-dubey-791056376"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                      <a
href="https://github.com/Satakshi-dubey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.898-.015 3.293 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        GitHub
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <form onSubmit={handleSubmit} className="glass-card space-y-4 p-7">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-lg border border-input bg-background/60 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-lg border border-input bg-background/60 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 w-full resize-none rounded-lg border border-input bg-background/60 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] disabled:cursor-wait disabled:opacity-60"
                >
                  {formStatus === "sending" ? "Sending…" : "Send Message"}
                </button>
                {formStatus === "sent" && (
                  <p role="status" className="text-center text-sm text-primary">
                    Message sent successfully. Thank you for getting in touch.
                  </p>
                )}
                {formStatus === "error" && (
                  <p role="alert" className="text-center text-sm text-destructive">
                    The message could not be sent. Please email me directly at dubsatakshi5@gmail.com.
                  </p>
                )}

              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Satakshi Dubey</p>
          <p>B.Tech IT · AITD Kanpur · Aspiring AI Engineer</p>
        </div>
      </footer>
    </div>
  );
}
