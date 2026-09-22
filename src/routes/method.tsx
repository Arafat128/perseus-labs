import { createFileRoute } from "@tanstack/react-router";
import { ALPHA_SKILL_CALLS, CREDIT, HERTZFLOW, SITE, SURF } from "@/lib/site";

export const Route = createFileRoute("/method")({
  head: () => ({
    meta: [
      { title: "Method — Perseus Labs" },
      {
        name: "description",
        content:
          "How Alpha Skill Calls runs: HertzFlow forensic, Surf index, Perseus Labs writes and publishes.",
      },
    ],
  }),
  component: MethodPage,
});

function MethodPage() {
  return (
    <>
      <section className="page border-b border-line py-14 sm:py-20">
        <div className="flex flex-wrap items-center gap-3">
          <p className="kicker">Desk 01</p>
          <span className="chip chip-live">{ALPHA_SKILL_CALLS.status}</span>
        </div>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">Method</h1>
        <p className="lede mt-5">
          This page is for Desk 01: Alpha Skill Calls. HertzFlow Alpha Skill does the
          forensic. Surf is the index. Perseus Labs writes and publishes.
        </p>
      </section>

      <section className="page grid gap-4 py-10 lg:grid-cols-2">
        <article className="panel p-5 sm:p-6">
          <p className="meta">What we run</p>
          <h2 className="mt-3 text-2xl tracking-tight">Binance Alpha, Surf-covered EVM</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Tokens on {ALPHA_SKILL_CALLS.chains.join(", ")}. If the index does not cover
            it, the field is UNKNOWN.
          </p>
        </article>
        <article className="panel p-5 sm:p-6">
          <p className="meta">Who does what</p>
          <h2 className="mt-3 text-2xl tracking-tight">Skill. Index. Desk.</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed">
            <li>
              <span className="text-fg">HertzFlow Alpha Skill</span>
              <span className="text-muted"> — does the forensic.</span>
            </li>
            <li>
              <span className="text-fg">Surf</span>
              <span className="text-muted"> — is the index.</span>
            </li>
            <li>
              <span className="text-fg">Perseus Labs</span>
              <span className="text-muted"> — writes and publishes.</span>
            </li>
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted">{CREDIT}</p>
        </article>
      </section>

      <section className="page pb-4">
        <article className="panel p-5 sm:p-6">
          <p className="meta">Brief</p>
          <h2 className="mt-3 text-2xl tracking-tight">State, facts, chips</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-muted sm:grid-cols-3">
            <li className="border-l border-line pl-3">State tier</li>
            <li className="border-l border-line pl-3">3 facts + 1 risk</li>
            <li className="border-l border-line pl-3">Chip snapshot</li>
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Also reported when present: 72h transfers, realization, volume quality, LP /
            5% depth. No price target. Missing data stays UNKNOWN.
          </p>
        </article>
      </section>

      <section className="page border-t border-line py-12 sm:py-16">
        <p className="kicker">Links</p>
        <h2 className="mt-3 text-2xl">Data and method providers</h2>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          <li className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="font-medium">{HERTZFLOW.name}</span>
            <a
              href={HERTZFLOW.url}
              className="meta text-cyan"
              rel="noopener noreferrer"
              target="_blank"
            >
              skill.hertzflow.xyz
            </a>
          </li>
          <li className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="font-medium">{HERTZFLOW.handle}</span>
            <a
              href={HERTZFLOW.handleUrl}
              className="meta text-cyan"
              rel="noopener noreferrer"
              target="_blank"
            >
              X profile
            </a>
          </li>
          <li className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="font-medium">{SURF.name}</span>
            <a
              href={SURF.handleUrl}
              className="meta text-cyan"
              rel="noopener noreferrer"
              target="_blank"
            >
              {SURF.handle}
            </a>
          </li>
          <li className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="font-medium">Publish desk</span>
            <a
              href={SITE.xUrl}
              className="meta text-cyan"
              rel="noopener noreferrer"
              target="_blank"
            >
              {SITE.xHandle}
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
