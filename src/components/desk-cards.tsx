import { Link } from "@tanstack/react-router";
import { ALPHA_SKILL_CALLS, UPCOMING_DESKS } from "@/lib/site";

export function DeskGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <article className="panel flex h-full flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="meta">Desk 01</p>
          <span className="chip chip-live">{ALPHA_SKILL_CALLS.status}</span>
        </div>
        <h3 className="mt-3 text-xl tracking-tight">{ALPHA_SKILL_CALLS.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {ALPHA_SKILL_CALLS.summary} Input {ALPHA_SKILL_CALLS.input}. Output:{" "}
          {ALPHA_SKILL_CALLS.outputs.join(", ")}. {ALPHA_SKILL_CALLS.rules}
        </p>
        <p className="mt-auto pt-6">
          <Link to="/products" className="btn">
            Product notes
          </Link>
        </p>
      </article>
      {UPCOMING_DESKS.map((desk, i) => (
        <article key={desk.name} className="panel-dashed flex h-full flex-col p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="meta">{`Desk 0${i + 2}`}</p>
            <span className="chip chip-soon">{desk.status}</span>
          </div>
          <h3 className="mt-3 text-xl tracking-tight text-muted">{desk.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Unnamed until it ships. Same house rules: forensic copy, no price targets.
          </p>
        </article>
      ))}
    </div>
  );
}
