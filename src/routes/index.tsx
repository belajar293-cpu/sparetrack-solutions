import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  MapPin,
  Package,
  ArrowRight,
  Check,
  X,
  AlertTriangle,
  Activity,
  Boxes,
  Layers,
  Truck,
  Wrench,
  ClipboardList,
  BarChart3,
  Bell,
  FileText,
  ShieldCheck,
  Settings,
  Users,
  Briefcase,
  Building2,
  GitBranch,
  Cpu,
  Cog,
  Gauge,
  Zap,
  Database,
  ChevronRight,
  Circle,
  ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SpareTrack — Enterprise Spare Parts Visibility & Lifecycle Management" },
      {
        name: "description",
        content:
          "Track inventory, serialized components, warehouse transfers, installations and lifecycle across every site in one centralized enterprise platform.",
      },
      { property: "og:title", content: "SpareTrack — Enterprise Spare Parts Visibility" },
      {
        property: "og:description",
        content:
          "One system for complete spare parts visibility across sites, warehouses and equipment.",
      },
    ],
  }),
  component: Landing,
});

// ─────────────────────────────────────────────────────────────────────────────
// Primitives

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-steel)]">
    <span className="h-px w-8 bg-[var(--color-steel)]" />
    {children}
  </div>
);

const Pill = ({
  tone = "neutral",
  children,
}: {
  tone?: "success" | "warn" | "danger" | "neutral" | "accent";
  children: React.ReactNode;
}) => {
  const map = {
    success: "bg-[color-mix(in_oklab,var(--color-success)_12%,white)] text-[var(--color-success)]",
    warn: "bg-[color-mix(in_oklab,var(--color-warn)_14%,white)] text-[var(--color-warn)]",
    danger: "bg-[color-mix(in_oklab,var(--color-danger)_12%,white)] text-[var(--color-danger)]",
    accent: "bg-[color-mix(in_oklab,var(--color-accent)_12%,white)] text-[var(--color-accent)]",
    neutral: "bg-[var(--color-canvas)] text-[var(--color-ink-muted)]",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${map[tone]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
};

const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`mx-auto w-full max-w-[1200px] px-6 lg:px-8 ${className}`}>{children}</div>;

// ─────────────────────────────────────────────────────────────────────────────
// Nav

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-rule)] bg-white/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="grid h-7 w-7 grid-cols-2 grid-rows-2 gap-[2px]">
            <div className="rounded-[2px] bg-[var(--color-navy)]" />
            <div className="rounded-[2px] bg-[var(--color-accent)]" />
            <div className="rounded-[2px] bg-[var(--color-steel)]" />
            <div className="rounded-[2px] bg-[var(--color-navy-2)]" />
          </div>
          <span className="text-[15px] font-bold tracking-tight text-[var(--color-ink)]">
            SpareTrack
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[var(--color-ink-muted)] md:flex">
          <a href="#problems" className="hover:text-[var(--color-ink)]">
            Product
          </a>
          <a href="#features" className="hover:text-[var(--color-ink)]">
            Features
          </a>
          <a href="#dashboard" className="hover:text-[var(--color-ink)]">
            Dashboard
          </a>
          <a href="#roadmap" className="hover:text-[var(--color-ink)]">
            Roadmap
          </a>
          <a href="#contact" className="hover:text-[var(--color-ink)]">
            Docs
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] sm:inline"
          >
            Sign in
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-md bg-[var(--color-navy)] px-3.5 py-2 text-sm font-medium text-white hover:bg-[var(--color-navy-2)]"
          >
            Request demo <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
          </a>
        </div>
      </Container>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Hero with embedded dashboard mock

function HeroDashboard() {
  return (
    <div className="relative">
      {/* Frame */}
      <div className="overflow-hidden rounded-xl border border-[var(--color-rule)] bg-white shadow-[0_30px_80px_-30px_rgba(13,27,42,0.25)]">
        {/* App chrome */}
        <div className="flex items-center justify-between border-b border-[var(--color-rule)] bg-[var(--color-canvas)] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-rule)]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-rule)]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-rule)]" />
          </div>
          <div className="font-mono text-[11px] text-[var(--color-ink-muted)]">
            app.sparetrack.io / inventory
          </div>
          <div className="w-12" />
        </div>

        <div className="grid grid-cols-12 gap-4 p-5">
          {/* KPI strip */}
          {[
            { l: "On-hand parts", v: "184,302", d: "+2.1%", tone: "success" as const },
            { l: "Open transfers", v: "47", d: "12 in transit", tone: "accent" as const },
            { l: "Critical low", v: "9", d: "Action required", tone: "warn" as const },
            { l: "Serialized", v: "1,284", d: "Tracked units", tone: "neutral" as const },
          ].map((k) => (
            <div
              key={k.l}
              className="col-span-3 rounded-lg border border-[var(--color-rule)] bg-white p-3"
            >
              <div className="text-[10px] font-medium uppercase tracking-wider text-[var(--color-ink-muted)]">
                {k.l}
              </div>
              <div className="mt-1 text-xl font-bold tracking-tight text-[var(--color-ink)]">
                {k.v}
              </div>
              <div className="mt-1">
                <Pill tone={k.tone}>{k.d}</Pill>
              </div>
            </div>
          ))}

          {/* Search bar */}
          <div className="col-span-12 flex items-center gap-2 rounded-lg border border-[var(--color-rule)] bg-[var(--color-canvas)] px-3 py-2.5">
            <Search className="h-4 w-4 text-[var(--color-ink-muted)]" />
            <span className="font-mono text-[13px] text-[var(--color-ink)]">145-1408</span>
            <span className="ml-auto rounded border border-[var(--color-rule)] bg-white px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-ink-muted)]">
              ⌘K
            </span>
          </div>

          {/* Result row */}
          <div className="col-span-7 rounded-lg border border-[var(--color-rule)] bg-white">
            <div className="border-b border-[var(--color-rule)] px-4 py-2.5 text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-muted)]">
              Search results · 3 matches
            </div>
            <div className="divide-y divide-[var(--color-rule)]">
              {[
                {
                  pn: "145-1408",
                  loc: "Site A › Main WH › B-02",
                  qty: "14",
                  status: "available" as const,
                },
                {
                  pn: "145-1408-R",
                  loc: "Site B › Overflow › R-11",
                  qty: "6",
                  status: "reserved" as const,
                },
                {
                  pn: "145-1408",
                  loc: "Site C › Field Box 04",
                  qty: "2",
                  status: "transit" as const,
                },
              ].map((r) => (
                <div
                  key={r.loc}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-3 px-4 py-3"
                >
                  <div className="min-w-0">
                    <div className="font-mono text-[13px] font-medium text-[var(--color-ink)]">
                      {r.pn}
                    </div>
                    <div className="flex items-center gap-1.5 text-[12px] text-[var(--color-ink-muted)]">
                      <MapPin className="h-3 w-3" /> {r.loc}
                    </div>
                  </div>
                  <div className="font-mono text-sm text-[var(--color-ink)]">{r.qty}</div>
                  <Pill
                    tone={
                      r.status === "available"
                        ? "success"
                        : r.status === "reserved"
                          ? "warn"
                          : "accent"
                    }
                  >
                    {r.status}
                  </Pill>
                </div>
              ))}
            </div>
          </div>

          {/* Warehouse map */}
          <div className="col-span-5 rounded-lg border border-[var(--color-rule)] bg-white p-3">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-muted)]">
                Warehouse map · WH-A
              </div>
              <span className="font-mono text-[10px] text-[var(--color-ink-muted)]">Rack B</span>
            </div>
            <div className="grid grid-cols-8 gap-1">
              {Array.from({ length: 40 }).map((_, i) => {
                const fill = [3, 7, 11, 12, 19, 22, 27, 33, 34].includes(i);
                const hot = i === 11;
                return (
                  <div
                    key={i}
                    className={`aspect-square rounded-[2px] ${
                      hot
                        ? "bg-[var(--color-accent)]"
                        : fill
                          ? "bg-[var(--color-navy)]"
                          : "bg-[var(--color-canvas)] border border-[var(--color-rule)]"
                    }`}
                  />
                );
              })}
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-[var(--color-ink-muted)]">
              <span>40 bins</span>
              <span>74% utilized</span>
            </div>
          </div>

          {/* Lifecycle timeline */}
          <div className="col-span-12 rounded-lg border border-[var(--color-rule)] bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-muted)]">
                Component lifecycle · ENG-SN-2241
              </div>
              <Pill tone="success">Installed</Pill>
            </div>
            <div className="relative">
              <div className="absolute left-0 right-0 top-3 h-px bg-[var(--color-rule)]" />
              <div className="relative grid grid-cols-5 gap-2">
                {["Received", "Stored", "Installed", "Removed", "Rebuilt"].map((s, i) => (
                  <div key={s} className="flex flex-col items-start">
                    <div
                      className={`mb-2 h-2.5 w-2.5 rounded-full ${i < 3 ? "bg-[var(--color-navy)]" : "border border-[var(--color-rule)] bg-white"}`}
                    />
                    <div className="text-[12px] font-medium text-[var(--color-ink)]">{s}</div>
                    <div className="font-mono text-[10px] text-[var(--color-ink-muted)]">
                      2024-{String(i + 3).padStart(2, "0")}-12
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating KPI chips */}
      <div className="absolute -left-4 top-32 hidden rounded-lg border border-[var(--color-rule)] bg-white p-3 shadow-lg lg:block">
        <div className="text-[10px] uppercase tracking-wider text-[var(--color-ink-muted)]">
          Visibility
        </div>
        <div className="text-2xl font-bold tracking-tight text-[var(--color-ink)]">98%</div>
      </div>
      <div className="absolute -right-4 bottom-24 hidden rounded-lg border border-[var(--color-rule)] bg-[var(--color-navy)] p-3 text-white shadow-lg lg:block">
        <div className="text-[10px] uppercase tracking-wider text-white/60">Faster search</div>
        <div className="text-2xl font-bold tracking-tight">80%</div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative border-b border-[var(--color-rule)] bg-white">
      <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-5">
          <Eyebrow>Enterprise Spare Parts Platform</Eyebrow>
          <h1 className="mt-6 text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)] sm:text-[56px]">
            Know exactly where every spare part is.
          </h1>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[var(--color-ink-muted)]">
            Track inventory, serialized components, warehouse transfers, installation history and
            lifecycle status across every site — in one centralized platform.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-md bg-[var(--color-navy)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--color-navy-2)]"
            >
              Request demo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#dashboard"
              className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-rule)] bg-white px-5 py-3 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-canvas)]"
            >
              View product tour
            </a>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 text-sm text-[var(--color-ink)]">
            {[
              "Multi-warehouse",
              "Serialized tracking",
              "Component lifecycle",
              "Advanced search",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[var(--color-success)]" strokeWidth={2.5} />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <HeroDashboard />
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section header

function SectionHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)] sm:text-[44px]">
          {title}
        </h2>
      </div>
      {lead && (
        <p className="text-[15px] leading-relaxed text-[var(--color-ink-muted)] lg:col-span-6 lg:col-start-7 lg:pt-10">
          {lead}
        </p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Problems

function Problems() {
  const items = [
    {
      icon: Search,
      t: "Parts cannot be found quickly",
      d: "Hours lost searching across racks, warehouses and sites without a single source of truth.",
      m: "Avg 4.2h per search",
    },
    {
      icon: Boxes,
      t: "Inventory exists but is invisible",
      d: "Stock sits unused while teams reorder the same parts they already own.",
      m: "12% inventory invisible",
    },
    {
      icon: Cpu,
      t: "Serialized components untraceable",
      d: "No record of where an engine, pump or ECM has been installed or rebuilt.",
      m: "0 lifecycle visibility",
    },
    {
      icon: AlertTriangle,
      t: "Emergency purchases increase cost",
      d: "Last-minute orders at premium prices because availability is unknown.",
      m: "+35% unit cost",
    },
    {
      icon: Activity,
      t: "Unit downtime becomes longer",
      d: "Equipment waits because the right part can't be located in time.",
      m: "+18h MTTR",
    },
    {
      icon: Database,
      t: "Warehouse data is fragmented",
      d: "Spreadsheets, WhatsApp and emails scattered across sites and teams.",
      m: "7+ systems",
    },
  ];
  return (
    <section
      id="problems"
      className="border-b border-[var(--color-rule)] bg-[var(--color-canvas)] py-24"
    >
      <Container>
        <SectionHeader
          eyebrow="The problem"
          title="The Chaos and Hidden Costs of Blind Inventory"
          lead="Most operations run on tribal knowledge, spreadsheets and phone calls. The result is invisible inventory, slow searches and avoidable downtime."
        />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-[var(--color-rule)] bg-[var(--color-rule)] sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d, m }) => (
            <div key={t} className="bg-white p-6">
              <Icon className="h-5 w-5 text-[var(--color-steel)]" strokeWidth={1.75} />
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-[var(--color-ink)]">
                {t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{d}</p>
              <div className="mt-5 font-mono text-[12px] text-[var(--color-accent)]">{m}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Solution + workflow

function Solution() {
  const steps = [
    "Receiving",
    "Warehouse",
    "Transfer",
    "Transit",
    "Installation",
    "Removal",
    "Rebuild",
    "Reinstall",
  ];
  const benefits = [
    "Real-time multi-site visibility",
    "Cross-site inventory search",
    "Serialized component tracking",
    "Installation history per unit",
    "Compatibility management",
    "Full lifecycle monitoring",
    "Tamper-proof audit trail",
  ];
  return (
    <section className="border-b border-[var(--color-rule)] bg-white py-24">
      <Container>
        <SectionHeader
          eyebrow="The solution"
          title="One system for complete spare parts visibility."
          lead="Every movement, installation and rebuild captured against a single record — from the moment a part is received to the day it's retired."
        />
        {/* Workflow */}
        <div className="rounded-xl border border-[var(--color-rule)] bg-[var(--color-canvas)] p-6">
          <div className="relative grid grid-cols-2 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
            {steps.map((s, i) => (
              <div key={s} className="relative flex flex-col items-center text-center">
                <div className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-rule)] bg-white font-mono text-[11px] font-medium text-[var(--color-navy)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 text-[12px] font-medium text-[var(--color-ink)]">{s}</div>
                {i < steps.length - 1 && (
                  <ChevronRight className="absolute -right-2 top-2 hidden h-5 w-5 text-[var(--color-rule)] lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Benefits */}
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b}
              className="flex items-center gap-3 border-b border-[var(--color-rule)] py-3 text-[15px] text-[var(--color-ink)]"
            >
              <Check className="h-4 w-4 shrink-0 text-[var(--color-accent)]" strokeWidth={2.5} />
              {b}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Search demo

function SearchDemo() {
  return (
    <section className="border-b border-[var(--color-rule)] bg-[var(--color-canvas)] py-24">
      <Container>
        <SectionHeader
          eyebrow="Universal search"
          title="Find any part in seconds."
          lead="Search by part number, alternative number, serial number, equipment number or engine number. Results return ranked by location, availability and compatibility."
        />
        <div className="overflow-hidden rounded-xl border border-[var(--color-rule)] bg-white shadow-sm">
          <div className="border-b border-[var(--color-rule)] p-5">
            <div className="flex items-center gap-3 rounded-lg border border-[var(--color-rule)] bg-[var(--color-canvas)] px-4 py-3">
              <Search className="h-4 w-4 text-[var(--color-ink-muted)]" />
              <span className="font-mono text-[14px] text-[var(--color-ink)]">LF9009</span>
              <span className="ml-1 inline-block h-4 w-px animate-pulse bg-[var(--color-ink)]" />
              <span className="ml-auto font-mono text-[11px] text-[var(--color-ink-muted)]">
                enter ↵
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["145-1408", "LF9009", "Engine SN", "Equipment #", "Alternative P/N"].map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-[var(--color-rule)] bg-white px-2.5 py-1 font-mono text-[11px] text-[var(--color-ink-muted)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px]">
            <div className="divide-y divide-[var(--color-rule)]">
              {[
                {
                  pn: "LF9009",
                  desc: "Fleetguard lube filter · OEM equiv 1R-0750",
                  loc: "Site A › Main WH › Rack B › Bin B02",
                  qty: 14,
                  eq: "CAT 793F · 785D",
                  status: "available" as const,
                  move: "2h ago",
                },
                {
                  pn: "LF9009-A",
                  desc: "Alternative cross — Donaldson P551670",
                  loc: "Site B › Receiving › Pallet 09",
                  qty: 22,
                  eq: "CAT 793F",
                  status: "available" as const,
                  move: "Yesterday",
                },
                {
                  pn: "LF9009",
                  desc: "Reserved for WO-44128",
                  loc: "Site C › Staging › Cage 02",
                  qty: 4,
                  eq: "CAT 785D",
                  status: "reserved" as const,
                  move: "4d ago",
                },
              ].map((r) => (
                <div key={r.loc} className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="font-mono text-[14px] font-semibold text-[var(--color-ink)]">
                          {r.pn}
                        </div>
                        <Pill tone={r.status === "available" ? "success" : "warn"}>{r.status}</Pill>
                      </div>
                      <div className="mt-1 text-[13px] text-[var(--color-ink-muted)]">{r.desc}</div>
                      <div className="mt-2 flex items-center gap-1.5 text-[12px] text-[var(--color-steel)]">
                        <MapPin className="h-3.5 w-3.5" /> {r.loc}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-2xl font-bold text-[var(--color-ink)]">
                        {r.qty}
                      </div>
                      <div className="text-[11px] uppercase tracking-wider text-[var(--color-ink-muted)]">
                        in stock
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-[12px] text-[var(--color-ink-muted)]">
                    <span>
                      <span className="text-[var(--color-ink)]">Equip:</span> {r.eq}
                    </span>
                    <span>
                      <span className="text-[var(--color-ink)]">Last move:</span> {r.move}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <aside className="border-t border-[var(--color-rule)] bg-[var(--color-canvas)] p-5 lg:border-l lg:border-t-0">
              <div className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-muted)]">
                Compatibility
              </div>
              <div className="mt-3 space-y-2 text-[13px]">
                <div className="flex justify-between border-b border-[var(--color-rule)] py-2">
                  <span>Equipment</span>
                  <span className="font-mono">CAT 793F</span>
                </div>
                <div className="flex justify-between border-b border-[var(--color-rule)] py-2">
                  <span>Engine</span>
                  <span className="font-mono">3512B</span>
                </div>
                <div className="flex justify-between border-b border-[var(--color-rule)] py-2">
                  <span>OEM</span>
                  <span className="font-mono">1R-0750</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Alt P/N</span>
                  <span className="font-mono">P551670</span>
                </div>
              </div>
              <div className="mt-5 text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-muted)]">
                Aggregate
              </div>
              <div className="mt-2 font-mono text-3xl font-bold text-[var(--color-ink)]">
                40<span className="text-[var(--color-ink-muted)]"> units</span>
              </div>
              <div className="text-[12px] text-[var(--color-ink-muted)]">across 3 sites</div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Serialized components

function Serialized() {
  const items = [
    {
      icon: Cog,
      name: "Engine",
      pn: "3512B-OH",
      sn: "ENG-2241",
      loc: "Site A · Truck #44",
      inst: 3,
      rb: 2,
      status: "Installed",
      tone: "success" as const,
    },
    {
      icon: Settings,
      name: "Transmission",
      pn: "TX-771",
      sn: "TX-0918",
      loc: "Site B · Rebuild bay",
      inst: 4,
      rb: 3,
      status: "In rebuild",
      tone: "warn" as const,
    },
    {
      icon: Gauge,
      name: "Final drive",
      pn: "FD-9931",
      sn: "FD-3340",
      loc: "Site A · Truck #28",
      inst: 2,
      rb: 1,
      status: "Installed",
      tone: "success" as const,
    },
    {
      icon: Zap,
      name: "Hydraulic pump",
      pn: "HP-225",
      sn: "HP-7712",
      loc: "Site C · Warehouse",
      inst: 1,
      rb: 0,
      status: "Available",
      tone: "neutral" as const,
    },
    {
      icon: Activity,
      name: "Turbocharger",
      pn: "TC-540",
      sn: "TC-1180",
      loc: "In transit · A→B",
      inst: 5,
      rb: 4,
      status: "Transit",
      tone: "accent" as const,
    },
    {
      icon: Cpu,
      name: "ECM",
      pn: "ECM-77",
      sn: "ECM-0421",
      loc: "Site A · Truck #44",
      inst: 2,
      rb: 0,
      status: "Installed",
      tone: "success" as const,
    },
  ];
  return (
    <section className="border-b border-[var(--color-rule)] bg-white py-24">
      <Container>
        <SectionHeader
          eyebrow="Serialized tracking"
          title="Track high-value components individually."
          lead="Every serialized component carries its own record — installs, removals, rebuilds and accumulated hours follow it across every equipment and site."
        />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-[var(--color-rule)] bg-[var(--color-rule)] sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, ...c }) => (
            <div key={c.sn} className="bg-white p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-9 w-9 place-items-center rounded-md bg-[var(--color-canvas)]">
                    <Icon className="h-4 w-4 text-[var(--color-navy)]" strokeWidth={1.75} />
                  </div>
                  <div className="text-[15px] font-semibold tracking-tight text-[var(--color-ink)]">
                    {c.name}
                  </div>
                </div>
                <Pill tone={c.tone}>{c.status}</Pill>
              </div>
              <div className="mt-4 space-y-1.5 text-[12px]">
                <div className="flex justify-between">
                  <span className="text-[var(--color-ink-muted)]">Part #</span>
                  <span className="font-mono text-[var(--color-ink)]">{c.pn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-ink-muted)]">Serial</span>
                  <span className="font-mono text-[var(--color-ink)]">{c.sn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-ink-muted)]">Location</span>
                  <span className="text-[var(--color-ink)]">{c.loc}</span>
                </div>
                <div className="flex justify-between border-t border-[var(--color-rule)] pt-2">
                  <span className="text-[var(--color-ink-muted)]">Installs / Rebuilds</span>
                  <span className="font-mono text-[var(--color-ink)]">
                    {c.inst} / {c.rb}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded lifecycle */}
        <div className="mt-10 rounded-xl border border-[var(--color-rule)] bg-[var(--color-canvas)] p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-muted)]">
                Lifecycle · ENG-2241
              </div>
              <div className="mt-1 font-mono text-[14px] text-[var(--color-ink)]">
                3512B-OH · 14,220h accumulated
              </div>
            </div>
            <Pill tone="success">Active</Pill>
          </div>
          <div className="relative mt-6">
            <div className="absolute left-0 right-0 top-3 h-px bg-[var(--color-rule)]" />
            <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-5">
              {[
                { l: "Received", d: "2022-03-04", e: "Vendor PO-1182" },
                { l: "Installed", d: "2022-04-19", e: "Truck #12" },
                { l: "Removed", d: "2023-08-02", e: "12,400h" },
                { l: "Rebuilt", d: "2023-09-14", e: "WO-7821" },
                { l: "Reinstalled", d: "2023-10-01", e: "Truck #44" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="mb-3 h-2.5 w-2.5 rounded-full bg-[var(--color-navy)]" />
                  <div className="text-[13px] font-medium text-[var(--color-ink)]">{s.l}</div>
                  <div className="font-mono text-[11px] text-[var(--color-ink-muted)]">{s.d}</div>
                  <div className="mt-0.5 text-[11px] text-[var(--color-steel)]">{s.e}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Features

function Features() {
  const feats = [
    { i: Boxes, t: "Inventory visibility", d: "Real-time stock across every site and warehouse." },
    {
      i: Building2,
      t: "Multi-warehouse tracking",
      d: "Manage unlimited locations under one tenant.",
    },
    { i: Cpu, t: "Serialized components", d: "Every serial number tracked individually." },
    { i: GitBranch, t: "Lifecycle tracking", d: "Install, remove, rebuild, reinstall history." },
    { i: Search, t: "Advanced search", d: "Search by part, serial, equipment or engine." },
    { i: Layers, t: "Alternative P/N mapping", d: "Cross-reference OEM and aftermarket parts." },
    {
      i: ShieldCheck,
      t: "Compatibility management",
      d: "Validated fitment by equipment and engine.",
    },
    { i: Truck, t: "Transfer monitoring", d: "Track movements in transit between sites." },
    { i: ClipboardList, t: "Audit trail", d: "Tamper-proof history of every movement." },
    { i: BarChart3, t: "Dashboard & analytics", d: "KPIs, trends and consumption analytics." },
    { i: Bell, t: "Notifications", d: "Alerts for low stock, transit and exceptions." },
    { i: FileText, t: "Reporting", d: "Exportable reports for ops, finance and audit." },
  ];
  return (
    <section
      id="features"
      className="border-b border-[var(--color-rule)] bg-[var(--color-canvas)] py-24"
    >
      <Container>
        <SectionHeader
          eyebrow="Capabilities"
          title="Built for enterprise logistics and maintenance teams."
        />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-[var(--color-rule)] bg-[var(--color-rule)] sm:grid-cols-2 lg:grid-cols-4">
          {feats.map(({ i: Icon, t, d }) => (
            <div key={t} className="bg-white p-5">
              <Icon className="h-4.5 w-4.5 text-[var(--color-navy)]" strokeWidth={1.75} />
              <div className="mt-4 text-[14px] font-semibold tracking-tight text-[var(--color-ink)]">
                {t}
              </div>
              <div className="mt-1.5 text-[12.5px] leading-relaxed text-[var(--color-ink-muted)]">
                {d}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Impact

function Impact() {
  const m = [
    { v: "98%", l: "Inventory visibility accuracy" },
    { v: "80%", l: "Faster part search" },
    { v: "30%", l: "Reduction in emergency purchases" },
    { v: "50%", l: "Reduction in downtime" },
    { v: "95%", l: "Location accuracy" },
  ];
  return (
    <section className="bg-[var(--color-navy)] py-24 text-white">
      <Container>
        <div className="mb-12">
          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
            <span className="h-px w-8 bg-white/40" /> Measured impact
          </div>
          <h2 className="mt-4 max-w-2xl text-[36px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[44px]">
            Measurable operational impact.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-white/10 lg:grid-cols-5">
          {m.map((x) => (
            <div key={x.l} className="bg-[var(--color-navy)] p-6 lg:p-8">
              <div className="text-[48px] font-bold tracking-[-0.03em] sm:text-[60px]">{x.v}</div>
              <div className="mt-2 text-[12px] uppercase tracking-wider text-white/60">{x.l}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Roles

function Roles() {
  const roles = [
    {
      i: ShieldCheck,
      t: "System Administrator",
      d: ["User & permissions", "Tenant configuration", "Integration management"],
    },
    {
      i: Building2,
      t: "Warehouse Admin",
      d: ["Bin & rack layout", "Receiving & putaway", "Cycle counts"],
    },
    {
      i: Truck,
      t: "Logistics Officer",
      d: ["Transfers between sites", "Transit monitoring", "Carrier coordination"],
    },
    {
      i: ClipboardList,
      t: "Maintenance Planner",
      d: ["Parts allocation", "Work order kitting", "Forecasting"],
    },
    {
      i: Wrench,
      t: "Maintenance Supervisor",
      d: ["Install & remove", "Rebuild dispatch", "Lifecycle updates"],
    },
    {
      i: Briefcase,
      t: "Purchasing",
      d: ["Min/max management", "PO generation", "Vendor analytics"],
    },
    { i: Users, t: "Management", d: ["KPI dashboards", "Cost visibility", "Audit reporting"] },
  ];
  return (
    <section className="border-b border-[var(--color-rule)] bg-white py-24">
      <Container>
        <SectionHeader eyebrow="Roles" title="Designed for every stakeholder." />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-[var(--color-rule)] bg-[var(--color-rule)] sm:grid-cols-2 lg:grid-cols-4">
          {roles.map(({ i: Icon, t, d }) => (
            <div key={t} className="bg-white p-5">
              <Icon className="h-4.5 w-4.5 text-[var(--color-steel)]" strokeWidth={1.75} />
              <div className="mt-4 text-[14px] font-semibold tracking-tight text-[var(--color-ink)]">
                {t}
              </div>
              <ul className="mt-3 space-y-1.5 text-[12.5px] text-[var(--color-ink-muted)]">
                {d.map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <Circle className="h-1.5 w-1.5 fill-[var(--color-steel)] text-[var(--color-steel)]" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Comparison

function Comparison() {
  const rows: [string, string][] = [
    ["Spreadsheets", "Centralized database"],
    ["Phone calls & WhatsApp", "Real-time platform"],
    ["Email approvals", "Auditable workflow"],
    ["No lifecycle tracking", "Full serialized lifecycle"],
    ["Unknown stock levels", "Live visibility across sites"],
    ["Slow manual search", "Sub-second universal search"],
    ["Fragmented sources", "Single source of truth"],
  ];
  return (
    <section className="border-b border-[var(--color-rule)] bg-[var(--color-canvas)] py-24">
      <Container>
        <SectionHeader
          eyebrow="Before / after"
          title="From spreadsheet chaos to full visibility."
        />
        <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-[var(--color-rule)] bg-white lg:grid-cols-2">
          <div className="border-b border-[var(--color-rule)] p-6 lg:border-b-0 lg:border-r">
            <div className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-muted)]">
              Manual process
            </div>
            <ul className="mt-4 divide-y divide-[var(--color-rule)]">
              {rows.map(([a]) => (
                <li
                  key={a}
                  className="flex items-center gap-3 py-3.5 text-[14px] text-[var(--color-ink-muted)]"
                >
                  <X className="h-4 w-4 shrink-0 text-[var(--color-danger)]" strokeWidth={2.5} />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--color-navy)] p-6 text-white">
            <div className="text-[11px] font-medium uppercase tracking-wider text-white/60">
              SpareTrack
            </div>
            <ul className="mt-4 divide-y divide-white/10">
              {rows.map(([, b]) => (
                <li key={b} className="flex items-center gap-3 py-3.5 text-[14px]">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--color-success)]"
                    strokeWidth={2.5}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Dashboard preview (large bento)

function DashboardPreview() {
  return (
    <section id="dashboard" className="border-b border-[var(--color-rule)] bg-white py-24">
      <Container>
        <SectionHeader
          eyebrow="Inside the platform"
          title="Everything in one dashboard."
          lead="Operations, planning and management all share the same live data — no more reconciling spreadsheets between sites."
        />
        <div className="overflow-hidden rounded-xl border border-[var(--color-rule)] bg-[var(--color-canvas)] p-4 shadow-sm">
          <div className="grid grid-cols-12 gap-3">
            {/* Inventory overview */}
            <div className="col-span-12 rounded-lg border border-[var(--color-rule)] bg-white p-5 lg:col-span-6">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-muted)]">
                  Inventory overview
                </div>
                <span className="font-mono text-[11px] text-[var(--color-ink-muted)]">30d</span>
              </div>
              <div className="mt-2 flex items-end gap-6">
                <div>
                  <div className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">
                    184,302
                  </div>
                  <div className="text-[12px] text-[var(--color-ink-muted)]">parts on hand</div>
                </div>
                <Pill tone="success">+2.1%</Pill>
              </div>
              <div className="mt-5 flex h-24 items-end gap-1">
                {[40, 52, 48, 60, 55, 70, 65, 72, 68, 80, 76, 84, 90, 86, 92].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-[var(--color-navy)]"
                    style={{ height: `${h}%`, opacity: 0.3 + i / 20 }}
                  />
                ))}
              </div>
            </div>

            {/* Transfer status */}
            <div className="col-span-12 rounded-lg border border-[var(--color-rule)] bg-white p-5 lg:col-span-6">
              <div className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-muted)]">
                Transfer status
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {[
                  { l: "In transit", v: 12, t: "accent" as const },
                  { l: "Pending", v: 23, t: "warn" as const },
                  { l: "Delivered", v: 89, t: "success" as const },
                ].map((x) => (
                  <div key={x.l} className="rounded-md border border-[var(--color-rule)] p-3">
                    <div className="text-2xl font-bold text-[var(--color-ink)]">{x.v}</div>
                    <div className="mt-1">
                      <Pill tone={x.t}>{x.l}</Pill>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                {[
                  ["TR-3318", "Site A → Site C", 78],
                  ["TR-3319", "Site B → Site A", 42],
                  ["TR-3320", "Site C → Site B", 18],
                ].map(([id, route, p]) => (
                  <div key={id as string} className="flex items-center gap-3 text-[12px]">
                    <span className="font-mono text-[var(--color-ink)]">{id}</span>
                    <span className="text-[var(--color-ink-muted)]">{route}</span>
                    <div className="ml-auto h-1.5 w-28 overflow-hidden rounded-full bg-[var(--color-canvas)]">
                      <div className="h-full bg-[var(--color-accent)]" style={{ width: `${p}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Low stock */}
            <div className="col-span-12 rounded-lg border border-[var(--color-rule)] bg-white p-5 sm:col-span-6 lg:col-span-4">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-muted)]">
                  Low stock alerts
                </div>
                <Pill tone="warn">9</Pill>
              </div>
              <ul className="mt-3 divide-y divide-[var(--color-rule)] text-[12.5px]">
                {[
                  ["1R-0750", 2],
                  ["LF9009", 4],
                  ["7N-0858", 1],
                  ["6I-2509", 3],
                ].map(([p, q]) => (
                  <li key={p as string} className="flex items-center justify-between py-2">
                    <span className="font-mono text-[var(--color-ink)]">{p}</span>
                    <span className="font-mono text-[var(--color-danger)]">{q} left</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lifecycle health */}
            <div className="col-span-12 rounded-lg border border-[var(--color-rule)] bg-white p-5 sm:col-span-6 lg:col-span-4">
              <div className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-muted)]">
                Lifecycle health
              </div>
              <div className="mt-4 space-y-3">
                {[
                  ["Engines", 82, "success"],
                  ["Transmissions", 64, "warn"],
                  ["Final drives", 91, "success"],
                  ["Pumps", 48, "danger"],
                ].map(([l, v, t]) => (
                  <div key={l as string}>
                    <div className="mb-1 flex justify-between text-[12px]">
                      <span className="text-[var(--color-ink)]">{l}</span>
                      <span className="font-mono text-[var(--color-ink-muted)]">{v}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[var(--color-canvas)]">
                      <div
                        className="h-full"
                        style={{
                          width: `${v}%`,
                          background:
                            t === "success"
                              ? "var(--color-success)"
                              : t === "warn"
                                ? "var(--color-warn)"
                                : "var(--color-danger)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Warehouse distribution */}
            <div className="col-span-12 rounded-lg border border-[var(--color-rule)] bg-white p-5 lg:col-span-4">
              <div className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-muted)]">
                Warehouse distribution
              </div>
              <div className="mt-4 space-y-3">
                {[
                  ["Site A · Main", 62],
                  ["Site B · Hub", 41],
                  ["Site C · Field", 28],
                  ["Site D · Reserve", 14],
                ].map(([l, v]) => (
                  <div key={l as string} className="flex items-center gap-3">
                    <span className="w-28 shrink-0 text-[12px] text-[var(--color-ink)]">{l}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--color-canvas)]">
                      <div className="h-full bg-[var(--color-navy)]" style={{ width: `${v}%` }} />
                    </div>
                    <span className="font-mono text-[11px] text-[var(--color-ink-muted)]">
                      {v}k
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent movements */}
            <div className="col-span-12 rounded-lg border border-[var(--color-rule)] bg-white p-5">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-muted)]">
                  Recent movements
                </div>
                <a
                  className="inline-flex items-center gap-1 text-[12px] text-[var(--color-accent)]"
                  href="#"
                >
                  View all <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
              <table className="mt-3 w-full text-[12.5px]">
                <thead className="text-[11px] uppercase tracking-wider text-[var(--color-ink-muted)]">
                  <tr className="border-b border-[var(--color-rule)]">
                    <th className="py-2 text-left font-medium">Time</th>
                    <th className="py-2 text-left font-medium">Part</th>
                    <th className="py-2 text-left font-medium">From</th>
                    <th className="py-2 text-left font-medium">To</th>
                    <th className="py-2 text-left font-medium">Qty</th>
                    <th className="py-2 text-left font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-rule)]">
                  {[
                    ["10:42", "145-1408", "WH-A·B02", "Truck #44", "1", "installed", "success"],
                    ["10:18", "LF9009", "WH-B·R11", "WH-A·B02", "12", "received", "success"],
                    ["09:55", "ENG-2241", "Rebuild", "WH-A", "1", "ready", "accent"],
                    ["09:31", "TC-540", "WH-A", "WH-B", "1", "transit", "accent"],
                    ["08:14", "HP-225", "Vendor", "WH-C", "4", "received", "success"],
                  ].map((r) => (
                    <tr key={r[0] + r[1]} className="text-[var(--color-ink)]">
                      <td className="py-2.5 font-mono text-[var(--color-ink-muted)]">{r[0]}</td>
                      <td className="py-2.5 font-mono">{r[1]}</td>
                      <td className="py-2.5 text-[var(--color-ink-muted)]">{r[2]}</td>
                      <td className="py-2.5">{r[3]}</td>
                      <td className="py-2.5 font-mono">{r[4]}</td>
                      <td className="py-2.5">
                        <Pill tone={r[6] as "success" | "accent"}>{r[5]}</Pill>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Roadmap

function Roadmap() {
  const phases = [
    { p: "Phase 1", t: "Core inventory tracking", d: "Multi-site stock, locations, transfers." },
    { p: "Phase 2", t: "Serialized components", d: "Lifecycle, rebuilds, install history." },
    { p: "Phase 3", t: "Mobile application", d: "Field-ready iOS and Android." },
    { p: "Phase 4", t: "QR & barcode", d: "Scan-driven receiving and movement." },
    { p: "Phase 5", t: "Predictive maintenance", d: "Forecast failures from lifecycle data." },
    { p: "Phase 6", t: "ERP integration", d: "SAP, Oracle and Maximo connectors." },
  ];
  return (
    <section
      id="roadmap"
      className="border-b border-[var(--color-rule)] bg-[var(--color-canvas)] py-24"
    >
      <Container>
        <SectionHeader eyebrow="Roadmap" title="Platform evolution." />
        <div className="relative">
          <div className="absolute left-0 right-0 top-4 hidden h-px bg-[var(--color-rule)] lg:block" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {phases.map((p, i) => (
              <div key={p.p} className="relative">
                <div
                  className={`h-3 w-3 rounded-full ${i < 2 ? "bg-[var(--color-navy)]" : "border border-[var(--color-rule)] bg-white"}`}
                />
                <div className="mt-3 font-mono text-[11px] uppercase tracking-wider text-[var(--color-ink-muted)]">
                  {p.p}
                </div>
                <div className="mt-1 text-[15px] font-semibold tracking-tight text-[var(--color-ink)]">
                  {p.t}
                </div>
                <div className="mt-1 text-[12.5px] leading-relaxed text-[var(--color-ink-muted)]">
                  {p.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Final CTA

function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--color-navy)] py-24 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 0%, color-mix(in oklab, var(--color-accent) 25%, transparent), transparent 50%)",
        }}
      />
      <Container className="relative">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>
              <span className="text-white/60">Get started</span>
            </Eyebrow>
            <h2 className="mt-5 text-[36px] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[52px]">
              Gain complete visibility across your spare parts network.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
              Reduce downtime, eliminate unnecessary purchases and track every component lifecycle
              from warehouse to equipment.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:col-span-5 lg:justify-end">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 rounded-md bg-white px-5 py-3 text-sm font-medium text-[var(--color-navy)] hover:bg-white/90"
            >
              Request demo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              Contact sales
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Footer

function Footer() {
  return (
    <footer className="bg-white py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 border-b border-[var(--color-rule)] pb-10 sm:grid-cols-4">
          {[
            { h: "Product", l: ["Inventory", "Serialized", "Transfers", "Lifecycle"] },
            { h: "Solutions", l: ["Mining", "Heavy equipment", "Construction", "Fleet"] },
            { h: "Resources", l: ["Documentation", "API", "Changelog", "Security"] },
            { h: "Company", l: ["About", "Customers", "Careers", "Contact"] },
          ].map((c) => (
            <div key={c.h}>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-ink)]">
                {c.h}
              </div>
              <ul className="mt-4 space-y-2 text-[13px] text-[var(--color-ink-muted)]">
                {c.l.map((x) => (
                  <li key={x}>
                    <a href="#" className="hover:text-[var(--color-ink)]">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-[12px] text-[var(--color-ink-muted)]">
          <div className="flex items-center gap-2">
            <Package className="h-3.5 w-3.5" />
            <span>© {new Date().getFullYear()} SpareTrack. All rights reserved.</span>
          </div>
          <div className="font-mono">v1.0 · Enterprise edition</div>
        </div>
      </Container>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

function Landing() {
  return (
    <div
      className="min-h-screen bg-white font-sans text-[var(--color-ink)] antialiased"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      <Nav />
      <Hero />
      <Problems />
      <Solution />
      <SearchDemo />
      <Serialized />
      <Features />
      <Impact />
      <Roles />
      <Comparison />
      <DashboardPreview />
      <Roadmap />
      <FinalCTA />
      <Footer />
    </div>
  );
}
