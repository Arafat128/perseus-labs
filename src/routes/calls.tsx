import { createFileRoute } from "@tanstack/react-router";
import { CallCard, NextSlotCard } from "@/components/call-card";
import { CALLS } from "@/lib/site";

export const Route = createFileRoute("/calls")({
  head: () => ({
    meta: [
      { title: "Calls — Perseus Labs" },
      {
        name: "description",
        content: "Archive of Alpha Skill Calls. Forensic threads, no price targets.",
      },
    ],
  }),
  component: CallsPage,
});

function CallsPage() {
  return (
    <>
      <section className="page border-b border-line py-14 sm:py-20">
        <p className="kicker">Alpha Skill Calls</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">Archive</h1>
        <p className="lede mt-5">
          Published threads from this desk only. Other products will keep their own
          books.
        </p>
      </section>
      <section className="page grid gap-4 py-10 md:grid-cols-2">
        {CALLS.map((call, index) => (
          <CallCard key={call.url} call={call} featured={index === 0} />
        ))}
        <NextSlotCard />
      </section>
    </>
  );
}
