import { CREDIT, HERTZFLOW, SURF } from "@/lib/site";

export function MethodStack({ title = "Method stack" }: { title?: string }) {
  return (
    <aside className="panel flex h-full flex-col p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <p className="meta">{title}</p>
        <span className="chip chip-live">Desk 01</span>
      </div>
      <h2 className="mt-3 text-2xl tracking-tight">HertzFlow + Surf</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Desk 01 only. {CREDIT}
      </p>
      <ul className="mt-6 space-y-5">
        <li className="border-t border-line pt-4">
          <p className="font-medium">{HERTZFLOW.name}</p>
          <p className="mt-1 text-sm text-muted">{HERTZFLOW.role}</p>
          <p className="meta mt-2 flex flex-wrap gap-x-3 gap-y-1">
            <a
              href={HERTZFLOW.url}
              className="text-cyan hover:text-fg"
              rel="noopener noreferrer"
              target="_blank"
            >
              skill.hertzflow.xyz
            </a>
            <a
              href={HERTZFLOW.handleUrl}
              className="text-cyan hover:text-fg"
              rel="noopener noreferrer"
              target="_blank"
            >
              {HERTZFLOW.handle}
            </a>
          </p>
        </li>
        <li className="border-t border-line pt-4">
          <p className="font-medium">{SURF.name}</p>
          <p className="mt-1 text-sm text-muted">{SURF.role}</p>
          <p className="meta mt-2">
            <a
              href={SURF.handleUrl}
              className="text-cyan hover:text-fg"
              rel="noopener noreferrer"
              target="_blank"
            >
              {SURF.handle}
            </a>
          </p>
        </li>
      </ul>
    </aside>
  );
}
