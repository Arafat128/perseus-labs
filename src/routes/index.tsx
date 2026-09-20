import { Link, createFileRoute } from "@tanstack/react-router";
import { CallCard } from "@/components/call-card";
import { DeskGrid } from "@/components/desk-cards";
import { MethodStack } from "@/components/method-stack";
import { LATEST_CALL, SITE } from "@/lib/site";

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
          We ship on-chain forensic products. Live now: Alpha Skill Calls. More desks are
          in the lab.
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
            <h2 className="mt-3 text-2xl sm:text-3xl">One live desk. Two in the lab.</h2>
          </div>
          <Link to="/products" className="nav-link px-0 text-cyan">
            Full list
          </Link>
        </div>
        <DeskGrid />
      </section>
    </>
  );
}
