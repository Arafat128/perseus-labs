import { Link, createFileRoute } from "@tanstack/react-router";
import { MethodStack } from "@/components/method-stack";
import { ALPHA_SKILL_CALLS, CREDIT, HERTZFLOW, SURF, UPCOMING_DESKS } from "@/lib/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Perseus Labs" },
      {
        name: "description",
        content:
          "Perseus Labs products. Alpha Skill Calls is live. More research desks are incoming.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section className="page border-b border-line py-14 sm:py-20">
        <p className="kicker">Products</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          One live desk. More incoming.
        </h1>
        <p className="lede mt-5">
          Perseus Labs is the studio. Alpha Skill Calls is the first product on the floor.
          Other desks stay unnamed until they ship.
        </p>
      </section>

      <section className="page grid gap-4 py-10 lg:grid-cols-3">
        <article className="panel p-5 sm:p-6 lg:col-span-2">
          <div className="flex flex-wrap items-center gap-3">
            <p className="meta">Desk 01</p>
            <span className="chip chip-live">{ALPHA_SKILL_CALLS.status}</span>
          </div>
          <h2 className="mt-3 text-3xl tracking-tight">{ALPHA_SKILL_CALLS.name}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Binance Alpha forensic threads. Input {ALPHA_SKILL_CALLS.input}. Output:{" "}
            {ALPHA_SKILL_CALLS.outputs.join(", ")}. {ALPHA_SKILL_CALLS.rules}
          </p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="border-t border-line pt-4">
              <dt className="meta">Input</dt>
              <dd className="mt-2 font-mono text-sm">{ALPHA_SKILL_CALLS.input}</dd>
            </div>
            <div className="border-t border-line pt-4">
              <dt className="meta">Chains</dt>
              <dd className="mt-2 font-mono text-sm">
                {ALPHA_SKILL_CALLS.chains.join(" · ")}
              </dd>
            </div>
            <div className="border-t border-line pt-4 sm:col-span-2">
              <dt className="meta">Output</dt>
              <dd className="mt-2 text-sm leading-relaxed">
                {ALPHA_SKILL_CALLS.outputs.join(" · ")}
              </dd>
            </div>
            <div className="border-t border-line pt-4 sm:col-span-2">
              <dt className="meta">House rules</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                No price target. No buy or sell. Missing data is UNKNOWN. {CREDIT}
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/calls" className="btn btn-primary">
              Call archive
            </Link>
            <Link to="/method" className="btn">
              Method
            </Link>
          </div>
        </article>
        <MethodStack title="Data providers" />
      </section>

      <section className="page border-t border-line py-12 sm:py-16">
        <p className="kicker">Next desks</p>
        <h2 className="mt-3 text-2xl sm:text-3xl">Coming soon. Unnamed.</h2>
        <p className="lede mt-4">
          Same house rules when they open: forensic copy, no price targets, editorial
          control stays here.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {UPCOMING_DESKS.map((desk) => (
            <article key={desk.name} className="panel-dashed p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl tracking-tight">{desk.name}</h3>
                <span className="chip chip-soon">{desk.status}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                No name until launch. Not a placeholder ticker. Not a fake product.
              </p>
            </article>
          ))}
        </div>
        <p className="meta mt-8">
          Method references for the live desk:{" "}
          <a
            href={HERTZFLOW.url}
            className="text-cyan"
            rel="noopener noreferrer"
            target="_blank"
          >
            HertzFlow Alpha Skill
          </a>
          {" · "}
          <a
            href={HERTZFLOW.handleUrl}
            className="text-cyan"
            rel="noopener noreferrer"
            target="_blank"
          >
            {HERTZFLOW.handle}
          </a>
          {" · "}
          <a
            href={SURF.handleUrl}
            className="text-cyan"
            rel="noopener noreferrer"
            target="_blank"
          >
            {SURF.handle}
          </a>
        </p>
      </section>
    </>
  );
}
