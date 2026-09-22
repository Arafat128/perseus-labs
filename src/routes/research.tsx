import { createFileRoute } from "@tanstack/react-router";
import { BriefCard, CallCard } from "@/components/call-card";
import { XLive } from "@/components/x-live";
import { AIRDROP_TERMINAL, CALLS, TERMINAL_BRIEFS } from "@/lib/site";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Perseus Labs" },
      {
        name: "description",
        content:
          "Public research from Perseus Labs. Desk 01 Alpha Skill Calls and Desk 02 Airdrop Alpha Terminal.",
      },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  return (
    <>
      <section className="page border-b border-line py-14 sm:py-20">
        <p className="kicker">Research</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">Public files from both desks</h1>
        <p className="lede mt-5">
          Desk 01 threads and Desk 02 briefs we choose to publish. Private Terminal
          mail is not listed here.
        </p>
      </section>

      <section className="page py-10">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <p className="kicker">Desk 01</p>
          <span className="chip chip-live">Alpha Skill Calls</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {CALLS.map((call, index) => (
            <CallCard key={call.url} call={call} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="page border-t border-line py-10">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <p className="kicker">Desk 02</p>
          <span className="chip chip-open">{AIRDROP_TERMINAL.name}</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {TERMINAL_BRIEFS.map((brief) => (
            <BriefCard key={brief.url} brief={brief} />
          ))}
        </div>
      </section>

      <section className="page border-t border-line py-10 sm:py-14">
        <XLive />
      </section>
    </>
  );
}
