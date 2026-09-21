import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CallCard } from "@/components/call-card";
import { AIRDROP_TERMINAL, ALPHA_SKILL_CALLS } from "@/lib/site";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Perseus Labs" },
      {
        name: "description",
        content:
          "Archive of what Perseus Labs chooses to publish. Alpha Skill Calls and Airdrop Alpha Terminal.",
      },
    ],
  }),
  component: ResearchPage,
});

type Filter = "calls" | "terminal";

function ResearchPage() {
  const [filter, setFilter] = useState<Filter>("calls");

  return (
    <>
      <section className="page border-b border-line py-14 sm:py-20">
        <p className="kicker">Research</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">What we choose to publish</h1>
        <p className="lede mt-5">
          Public files only. Terminal briefs stay private unless this desk puts them here.
        </p>
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Desk filter">
          <FilterButton
            active={filter === "calls"}
            onClick={() => setFilter("calls")}
            label={ALPHA_SKILL_CALLS.name}
          />
          <FilterButton
            active={filter === "terminal"}
            onClick={() => setFilter("terminal")}
            label={AIRDROP_TERMINAL.name}
          />
        </div>
      </section>

      <section className="page py-10">
        {filter === "calls" ? (
          <div className="grid gap-4 md:grid-cols-2">
            <CallCard />
          </div>
        ) : (
          <article className="panel-dashed p-5 sm:p-6">
            <p className="meta">Desk 02</p>
            <h2 className="mt-3 text-2xl tracking-tight text-muted">{AIRDROP_TERMINAL.name}</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              Terminal briefs are emailed privately. Public files appear here only when we
              publish them.
            </p>
          </article>
        )}
      </section>
    </>
  );
}

function FilterButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={active ? "btn btn-primary" : "btn"}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
