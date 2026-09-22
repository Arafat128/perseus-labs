import { Link, createFileRoute } from "@tanstack/react-router";
import { AIRDROP_TERMINAL, ALPHA_SKILL_CALLS, CREDIT, HERTZFLOW, SITE, SURF } from "@/lib/site";

export const Route = createFileRoute("/method")({
  head: () => ({
    meta: [
      { title: "Method — Perseus Labs" },
      {
        name: "description",
        content:
          "How Perseus Labs desks run. Alpha Skill Calls: HertzFlow + Surf. Airdrop Alpha Terminal: Surf-based email brief.",
      },
    ],
  }),
  component: MethodPage,
});

function MethodPage() {
  return (
    <>
      <section className="page border-b border-line py-14 sm:py-20">
        <p className="kicker">Method</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">How the desks run</h1>
        <p className="lede mt-5">
          Two public methods. Desk 03 publishes its own when it ships.
        </p>
      </section>

      <section className="page border-b border-line py-12 sm:py-16">
        <div className="flex flex-wrap items-center gap-3">
          <p className="kicker">Desk 01</p>
          <span className="chip chip-live">{ALPHA_SKILL_CALLS.status}</span>
        </div>
        <h2 className="mt-4 text-3xl tracking-tight">{ALPHA_SKILL_CALLS.name}</h2>
        <p className="lede mt-4">
          HertzFlow Alpha Skill does the forensic. Surf is the index. Perseus Labs writes
          and publishes the X thread.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="panel p-5 sm:p-6">
            <p className="meta">What we run</p>
            <h3 className="mt-3 text-2xl tracking-tight">Binance Alpha, Surf-covered EVM</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Tokens on {ALPHA_SKILL_CALLS.chains.join(", ")}. If the index does not cover
              it, the field is UNKNOWN.
            </p>
          </article>
          <article className="panel p-5 sm:p-6">
            <p className="meta">Who does what</p>
            <h3 className="mt-3 text-2xl tracking-tight">Skill. Index. Desk.</h3>
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
        </div>

        <article className="panel mt-4 p-5 sm:p-6">
          <p className="meta">Brief</p>
          <h3 className="mt-3 text-2xl tracking-tight">State, facts, chips</h3>
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

        <ul className="mt-8 divide-y divide-line border-y border-line">
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

      <section className="page py-12 sm:py-16">
        <div className="flex flex-wrap items-center gap-3">
          <p className="kicker">Desk 02</p>
          <span className="chip chip-open">{AIRDROP_TERMINAL.status}</span>
        </div>
        <h2 className="mt-4 text-3xl tracking-tight">{AIRDROP_TERMINAL.name}</h2>
        <p className="lede mt-4">
          Surf-based project brief, delivered by email. No HertzFlow Alpha Skill unless
          stated later. Public files, if we publish them, sit on Research.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="panel p-5 sm:p-6">
            <p className="meta">What you get</p>
            <h3 className="mt-3 text-2xl tracking-tight">Text brief, if accepted</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {AIRDROP_TERMINAL.detail} {AIRDROP_TERMINAL.notIncluded}{" "}
              {AIRDROP_TERMINAL.extras}
            </p>
          </article>
          <article className="panel p-5 sm:p-6">
            <p className="meta">What it is not</p>
            <h3 className="mt-3 text-2xl tracking-tight">No farm. No guarantee.</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{AIRDROP_TERMINAL.limits}</p>
          </article>
        </div>
        <div className="mt-8">
          <Link to="/terminal" className="btn btn-primary">
            Request a brief
          </Link>
        </div>
      </section>
    </>
  );
}
