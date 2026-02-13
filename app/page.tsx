export default function Home() {
  return (
    <div className="min-h-screen text-[var(--ink)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-28 left-[5%] h-64 w-64 rounded-full bg-[#f25c2b]/20 blur-3xl" />

        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Thisaivi logo"
              className="h-11 object-contain"
            />
          </div>
          <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
            <a
              className="transition-colors hover:text-[var(--ink)]"
              href="#agents"
            >
              Agents
            </a>
            <a
              className="transition-colors hover:text-[var(--ink)]"
              href="#workflow"
            >
              Workflow
            </a>
            <a
              className="transition-colors hover:text-[var(--ink)]"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="transition-colors hover:text-[var(--ink)]"
              href="#about"
            >
              About
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--ink)] transition hover:border-[var(--ink)] sm:inline-flex">
              Log in
            </button>
            <button className="rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-[var(--canvas)] transition hover:translate-y-[-1px]">
              Get started
            </button>
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10">
          <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Lightspeed MVP delivery
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Ship your startup MVP in 15 days.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)]">
                Thisaivi partners with early-stage teams to design, build, and
                launch production-ready MVPs fast. Clear scope, rapid sprints,
                and a 15-day delivery window.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]">
                  Book a kickoff call
                </button>
                <button className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--ink)]">
                  See the process
                </button>
              </div>
              <div className="mt-10 flex flex-wrap gap-3 text-xs text-[var(--muted)]">
                <span className="rounded-full border border-[var(--line)] px-3 py-1">
                  Delivery in 15 days
                </span>
                <span className="rounded-full border border-[var(--line)] px-3 py-1">
                  Startup-first scope
                </span>
                <span className="rounded-full border border-[var(--line)] px-3 py-1">
                  Design + build included
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_20px_80px_rgba(15,29,27,0.08)]">
              <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                <span>Live run</span>
                <span>07:42 AM</span>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  "Synthesizing ICP from CRM notes",
                  "Ranking 120 accounts by intent",
                  "Drafting tailored email sequence",
                  "Queueing LinkedIn touchpoints",
                  "Waiting on approval for launch",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--line)] bg-white/70 px-4 py-3"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent-2)]" />
                    <div>
                      <p className="text-sm font-medium">Step {index + 1}</p>
                      <p className="text-xs text-[var(--muted)]">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-[var(--ink)] px-4 py-3 text-xs text-[var(--canvas)]">
                Next check-in in 2h. Approval pending.
              </div>
            </div>
          </section>

          <section className="mt-20 border-y border-[var(--line)] py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <h2 className="text-2xl font-semibold">
                Built for founders who need speed.
              </h2>
              <div className="flex flex-wrap gap-3 text-xs text-[var(--muted)]">
                <span className="rounded-full border border-[var(--line)] px-3 py-1">
                  Product strategy
                </span>
                <span className="rounded-full border border-[var(--line)] px-3 py-1">
                  UX + UI design
                </span>
                <span className="rounded-full border border-[var(--line)] px-3 py-1">
                  Engineering sprint
                </span>
                <span className="rounded-full border border-[var(--line)] px-3 py-1">
                  Launch support
                </span>
              </div>
            </div>
          </section>

          <section id="agents" className="mt-20">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Services
                </p>
                <h2 className="mt-3 text-3xl font-semibold">
                  Everything you need to launch fast.
                </h2>
              </div>
              <p className="max-w-lg text-sm text-[var(--muted)]">
                Thisaivi is a full-stack partner for early-stage teams. We ship
                focused, validated MVPs on a fixed 15-day timeline.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "App development",
                  text: "Build web and mobile MVPs with scalable architecture and clean UX.",
                },
                {
                  title: "E-commerce sites",
                  text: "Launch conversion-ready stores with payment, catalog, and ops flows.",
                },
                {
                  title: "Branding",
                  text: "Define identity, voice, and visual system that feel credible on day one.",
                },
                {
                  title: "Landing site development",
                  text: "Ship high-converting marketing sites with analytics and fast iteration.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-semibold">
                    {card.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-sm text-[var(--muted)]">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="workflow" className="mt-24">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Process
                </p>
                <h2 className="mt-3 text-3xl font-semibold">
                  From kickoff to launch in 15 days.
                </h2>
              </div>
              <p className="max-w-lg text-sm text-[var(--muted)]">
                Tight scope, daily updates, and fast build cycles keep your MVP
                on track and ready to ship.
              </p>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-5">
              {[
                "Discovery + scope",
                "UX/UI sprint",
                "Engineering build",
                "QA + polish",
                "Launch handoff",
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-[var(--line)] bg-white/70 p-4"
                >
                  <p className="text-xs text-[var(--muted)]">
                    Step {index + 1}
                  </p>
                  <p className="mt-2 text-sm font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="pricing" className="mt-24">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
              <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Deliverables
                </p>
                <h2 className="mt-4 text-3xl font-semibold">
                  A complete MVP package, ready to launch.
                </h2>
                <p className="mt-4 text-sm text-[var(--muted)]">
                  We handle product, design, and engineering so you can focus on
                  validation and growth.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Product strategy",
                    "UX/UI design",
                    "Full-stack build",
                    "Analytics setup",
                    "Launch checklist",
                    "Handoff docs",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <span className="h-2 w-2 rounded-full bg-[var(--accent-2)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-[var(--line)] bg-[var(--ink)] p-8 text-[var(--canvas)]">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--canvas)]/70">
                  Book your sprint
                </p>
                <h3 className="mt-4 text-3xl font-semibold">
                  Get a shipped MVP in 15 days.
                </h3>
                <p className="mt-4 text-sm text-[var(--canvas)]/70">
                  Fixed timeline, focused scope, and weekly demos.
                </p>
                <button className="mt-6 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]">
                  Start your MVP sprint
                </button>
                <div className="mt-8 border-t border-white/20 pt-6 text-xs text-[var(--canvas)]/70">
                  Delivery in 15 days. Flexible add-ons available.
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer id="about" className="border-t border-[var(--line)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold">Thisaivi</p>
            <p className="mt-2 text-xs text-[var(--muted)]">
              Lightspeed MVPs for startups. Delivered in 15 days.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-[var(--muted)]">
            <a
              className="transition-colors hover:text-[var(--ink)]"
              href="#agents"
            >
              Agents
            </a>
            <a
              className="transition-colors hover:text-[var(--ink)]"
              href="#workflow"
            >
              Workflow
            </a>
            <a
              className="transition-colors hover:text-[var(--ink)]"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="transition-colors hover:text-[var(--ink)]"
              href="#about"
            >
              About
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
