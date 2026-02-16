import { FiCode, FiGlobe, FiImage, FiShoppingCart } from "react-icons/fi";
import RecentWorksMarquee from "./components/RecentWorksMarquee";
import ScrollReveal from "./components/ScrollReveal";

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
          <section className="text-center">
            <ScrollReveal>
              <div className="mx-auto flex max-w-3xl flex-col items-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-1 text-xs font-semibold text-[var(--muted)]">
                  New
                  <span className="text-[var(--ink)]">
                    15-day MVP sprints for startups
                  </span>
                </span>
                <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Lightspeed MVPs that get to market fast.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
                  Thisaivi designs, builds, and ships production-ready MVPs in
                  15 days. Focused scope, rapid delivery, and a launch plan that
                  keeps momentum high.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <button className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]">
                    Book a kickoff call
                  </button>
                  <button className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--ink)]">
                    See the process
                  </button>
                </div>
                <p className="mt-4 text-xs text-[var(--muted)]">
                  Delivery in 15 days. Design, build, and launch included.
                </p>
              </div>
            </ScrollReveal>
          </section>

          <section className="mt-16">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-3xl border border-[var(--line)] px-6 py-10 md:px-10">
                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                  <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                      Built for founders and teams
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                      Thisaivi helps you ship MVPs faster and grow your launch
                      momentum.
                    </h2>
                    <p className="mt-4 text-sm text-[var(--muted)]">
                      Whether you are validating a new idea or accelerating a
                      roadmap, we keep delivery tight with a 15-day timeline and
                      weekly demos.
                    </p>
                  </div>
                  <div className="hidden md:flex md:justify-end">
                    <img
                      src="/hero.png"
                      alt="Thisaivi MVP process"
                      className="rounded-2xl object-cover"
                    />
                  </div>
                </div>
                <div className="mt-10 grid gap-8 md:grid-cols-3">
                  <div className="border-l border-[var(--line)] pl-6">
                    <p className="text-2xl font-semibold">15 days</p>
                    <p className="mt-2 text-xs text-[var(--muted)]">
                      MVP delivery window
                    </p>
                  </div>
                  <div className="border-l border-[var(--line)] pl-6">
                    <p className="text-2xl font-semibold">4 core</p>
                    <p className="mt-2 text-xs text-[var(--muted)]">
                      Services included
                    </p>
                  </div>
                  <div className="border-l border-[var(--line)] pl-6">
                    <p className="text-2xl font-semibold">Weekly</p>
                    <p className="mt-2 text-xs text-[var(--muted)]">
                      Demo + feedback loop
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          <section id="agents" className="mt-20">
            <ScrollReveal>
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
                  Thisaivi is a full-stack partner for early-stage teams. We
                  ship focused, validated MVPs on a fixed 15-day timeline.
                </p>
              </div>
            </ScrollReveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "App development",
                  text: "Build web and mobile MVPs with scalable architecture and clean UX.",
                  icon: FiCode,
                },
                {
                  title: "E-commerce sites",
                  text: "Launch conversion-ready stores with payment, catalog, and ops flows.",
                  icon: FiShoppingCart,
                },
                {
                  title: "Branding",
                  text: "Define identity, voice, and visual system that feel credible on day one.",
                  icon: FiImage,
                },
                {
                  title: "Landing site development",
                  text: "Ship high-converting marketing sites with analytics and fast iteration.",
                  icon: FiGlobe,
                },
              ].map((card, index) => (
                <ScrollReveal key={card.title} delay={index * 0.05}>
                  <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-[var(--ink)]">
                      <card.icon size={24} />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
                    <p className="mt-3 text-sm text-[var(--muted)]">
                      {card.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <ScrollReveal>
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    Recent work
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold">
                    Fresh MVPs shipped in 15 days.
                  </h2>
                </div>
                <p className="max-w-lg text-sm text-[var(--muted)]">
                  A snapshot of the latest launches, gliding by with a
                  continuous scroll.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <RecentWorksMarquee />
            </ScrollReveal>
          </section>

          <section id="workflow" className="mt-24">
            <ScrollReveal>
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
                  Tight scope, daily updates, and fast build cycles keep your
                  MVP on track and ready to ship.
                </p>
              </div>
            </ScrollReveal>
            <div className="relative mt-12">
              <div className="absolute left-2 top-0 h-full w-px bg-[var(--line)] md:hidden" />
              <div className="absolute left-0 right-0 top-2 hidden h-px bg-[var(--line)] md:block" />
              <div className="grid gap-6 text-sm text-[var(--muted)] md:grid-cols-4 md:gap-10">
                {[
                  {
                    title: "Research",
                    items: [
                      "Business goals",
                      "Stakeholder interviews",
                      "Competitive scan",
                      "User insights",
                    ],
                  },
                  {
                    title: "Design",
                    items: [
                      "Information architecture",
                      "Wireframes",
                      "Prototype",
                      "UI system",
                    ],
                  },
                  {
                    title: "Build",
                    items: [
                      "Sprint planning",
                      "Engineering build",
                      "QA + polish",
                      "Launch prep",
                    ],
                  },
                  {
                    title: "Deliver",
                    items: [
                      "Handoff docs",
                      "Deployment",
                      "QA feedback",
                      "Growth check-ins",
                    ],
                  },
                ].map((phase, index) => (
                  <ScrollReveal key={phase.title} delay={index * 0.05}>
                    <div className="relative">
                      <div className="relative z-10 mb-4 flex  gap-3 md:mb-6">
                        <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--canvas)]">
                          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                        </span>
                        <div className="flex flex-col gap-4 sm:my-0 my-4">
                          <h3 className="text-lg font-semibold text-[var(--ink)]">
                            {phase.title}
                          </h3>
                          <ul className="space-y-2">
                            {phase.items.map((item) => (
                              <li key={item} className="text-sm">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
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

          <section id="faq" className="mt-24">
            <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] px-6 py-10 md:px-10">
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                  FAQ
                </span>
                <h2 className="mt-4 text-3xl font-semibold">
                  Common questions
                </h2>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  The essentials you need before starting a 15-day sprint.
                </p>
              </div>
              <div className="mt-8 divide-y divide-[var(--line)]">
                {[
                  {
                    q: "What do you need to start?",
                    a: "A clear goal, target users, and any existing assets. We handle the rest in the kickoff call.",
                  },
                  {
                    q: "Is 15 days realistic for an MVP?",
                    a: "Yes, with a focused scope. We define must-have features on day one and ship quickly.",
                  },
                  {
                    q: "Do you handle branding and landing pages?",
                    a: "Yes. Branding, landing site development, and product UI are included in our sprints.",
                  },
                  {
                    q: "What tech stack do you use?",
                    a: "We tailor the stack to your product, typically modern web frameworks and scalable backends.",
                  },
                  {
                    q: "How do revisions work?",
                    a: "We review progress weekly and apply feedback immediately to keep launch on track.",
                  },
                  {
                    q: "Can you build e-commerce MVPs?",
                    a: "Absolutely. We can deliver storefronts, checkout, and ops-ready flows in the sprint.",
                  },
                ].map((item) => (
                  <details key={item.q} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
                      {item.q}
                      <span className="text-lg text-[var(--muted)] transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-[var(--muted)]">{item.a}</p>
                  </details>
                ))}
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
