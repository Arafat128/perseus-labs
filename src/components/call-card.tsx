import { ArrowUpRight } from "lucide-react";
import { LATEST_CALL } from "@/lib/site";

export function CallCard({ featured = false }: { featured?: boolean }) {
  return (
    <article className="panel flex h-full flex-col p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <p className="meta">{featured ? "Latest call" : "Published thread"}</p>
        <span className="chip chip-risk">Risk</span>
      </div>
      <h2 className="mt-3 font-mono text-2xl tracking-tight">{LATEST_CALL.ticker}</h2>
      <p className="meta mt-2">
        {LATEST_CALL.chain} · {LATEST_CALL.kind}
      </p>
      <p className="ca mt-4" title={LATEST_CALL.ca}>
        {LATEST_CALL.ca}
      </p>
      <ul className="mt-5 space-y-2 text-sm leading-relaxed">
        {LATEST_CALL.facts.map((fact) => (
          <li key={fact} className="border-l border-line pl-3 text-fg">
            {fact}
          </li>
        ))}
      </ul>
      <p className="mt-auto pt-6">
        <a
          href={LATEST_CALL.url}
          className="btn"
          rel="noopener noreferrer"
          target="_blank"
        >
          Read the X thread
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </p>
    </article>
  );
}

export function NextSlotCard() {
  return (
    <article className="panel-dashed flex h-full flex-col p-5 sm:p-6">
      <p className="meta">Next slot</p>
      <h2 className="mt-3 text-2xl tracking-tight text-muted">Empty</h2>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
        No thread queued. This desk publishes when the work is done. No placeholder
        tickers.
      </p>
    </article>
  );
}
