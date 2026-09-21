import { Link, createFileRoute } from "@tanstack/react-router";
import { CallCard } from "@/components/call-card";
import { DeskGrid } from "@/components/desk-cards";
import { MethodStack } from "@/components/method-stack";
import { AIRDROP_TERMINAL, LATEST_CALL, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE.title },
      { name: "description", content: SITE.description },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="page border-b border-line py-14 sm:py-20">
        <p className="kicker">Perseus Labs</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          A research studio. Alpha Skill Calls is the first desk.
        </h1>
        <p className="lede mt-5">
          We ship on-chain forensic products. Live now: Alpha Skill Calls. Open for
          requests: Airdrop Alpha Terminal. More desks are in the lab.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={LATEST_CALL.url}
            className="btn btn-primary"
            rel="noopener noreferrer"
            target="_blank"
          >
            Latest call
          </a>
          <Link to="/products" className="btn">
            All products
          </Link>
          <Link to="/method" className="btn">
            Method
          </Link>
        </div>
      </section>

      <section className="page grid gap-4 py-10 md:grid-cols-2">
        <CallCard featured />
        <MethodStack />
      </section>

      <section className="page border-t border-line py-12 sm:py-16">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="kicker">Products</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">Two desks on the floor. One in the lab.</h2>
          </div>
          <Link to="/products" className="nav-link px-0 text-cyan">
            Full list
          </Link>
        </div>
        <DeskGrid />
      </section>

      <section className="page border-t border-line py-12 sm:py-16">
        <article className="panel flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="max-w-xl">
            <p className="kicker">Desk 02</p>
            <h2 className="mt-3 text-2xl tracking-tight">{AIRDROP_TERMINAL.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{AIRDROP_TERMINAL.summary}</p>
          </div>
          <Link to="/terminal" className="btn btn-primary shrink-0">
            Request a brief
          </Link>
        </article>
      </section>
    </>
  );
}
