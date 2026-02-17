"use client";

import Marquee from "react-fast-marquee";

type WorkItem = {
  title: string;
  role: string;
  summary: string;
  tag: string;
  hue: string;
};

const works: WorkItem[] = [
  {
    title: "EmsXperience",
    role: "Booking platform",
    summary:
      "Gym booking management with admin panel, trainer portal, and user app",
    tag: "SaaS",
    hue: "from-emerald-400/80 to-emerald-200/80",
  },
  {
    title: "SriOrganics",
    role: "E-commerce + brand",
    summary: "Organic food store with logo, branding, and full visual system",
    tag: "E-Commerce",
    hue: "from-amber-400/80 to-amber-200/80",
  },
  {
    title: "HomeRadius",
    role: "Service marketplace",
    summary: "Home services booking with user, partner, and admin apps",
    tag: "Marketplace",
    hue: "from-indigo-400/80 to-indigo-200/80",
  },
  {
    title: "Accented",
    role: "Android app",
    summary: "Microblogging app with petition and outreach flows",
    tag: "Mobile",
    hue: "from-pink-400/80 to-pink-200/80",
  },
  {
    title: "Wisdom Education",
    role: "LMS platform",
    summary: "Student, trainer, and management portals in one LMS",
    tag: "EdTech",
    hue: "from-sky-400/80 to-sky-200/80",
  },
  {
    title: "SourcersBiz",
    role: "Landing page",
    summary: "Logistics-focused landing page with conversion-ready layout",
    tag: "Logistics",
    hue: "from-orange-400/80 to-orange-200/80",
  },
];

export default function RecentWorksMarquee() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[var(--canvas)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[var(--canvas)] to-transparent" />
      <Marquee gradient={false} speed={35} pauseOnHover className="py-16">
        {works.map((work) => (
          <article
            key={work.title}
            className="mx-3 flex h-64 w-64 shrink-0 flex-col rounded-3xl border border-[var(--line)] bg-[var(--card)] p-5"
          >
            <div className="flex items-center justify-between">
              <div
                className={`h-10 w-16 rounded-full bg-gradient-to-br ${work.hue}`}
              />
              <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                {work.tag}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold">{work.title}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent-2)]">
              {work.role}
            </p>
            <p className="mt-3 text-sm text-[var(--muted)]">{work.summary}</p>
            <button className="mt-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-sm font-semibold">
              +
            </button>
          </article>
        ))}
      </Marquee>
    </div>
  );
}
