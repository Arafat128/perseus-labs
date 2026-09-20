import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Perseus Labs" },
      {
        name: "description",
        content:
          "Sponsored research slot for Perseus Labs. Not a buy rating. Editorial control stays with the studio.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="page border-b border-line py-14 sm:py-20">
        <p className="kicker">Contact</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">Sponsored research slot</h1>
        <p className="lede mt-5">
          Not a buy rating. Editorial control stays with Perseus Labs. The same inbox
          will serve future desks.
        </p>
      </section>
      <section className="page grid gap-4 py-10 lg:grid-cols-5">
        <div className="panel p-5 sm:p-6 lg:col-span-3">
          <h2 className="text-2xl tracking-tight">Request a slot</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Opens your email client to {SITE.email}. We do not promise coverage.
          </p>
          <ContactForm />
        </div>
        <aside className="panel p-5 sm:p-6 lg:col-span-2">
          <p className="meta">Terms</p>
          <ul className="mt-4 space-y-4 text-sm leading-relaxed text-muted">
            <li className="border-l border-line pl-3">Sponsored research is not a rating.</li>
            <li className="border-l border-line pl-3">
              Perseus Labs keeps the pen. FAIL reviews do not ship.
            </li>
            <li className="border-l border-line pl-3">
              No price targets. Missing facts stay UNKNOWN.
            </li>
            <li className="border-l border-line pl-3">
              HertzFlow and Surf are data providers, not this studio.
            </li>
          </ul>
        </aside>
      </section>
    </>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [tickerCa, setTickerCa] = useState("");
  const [note, setNote] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clean = (value: string) => value.replace(/[\r\n]+/g, " ").trim();
    const subject = `Sponsored research slot${tickerCa ? ` — ${clean(tickerCa)}` : ""}`;
    const body = [
      `Name: ${clean(name)}`,
      `X handle: ${clean(handle)}`,
      `Ticker + CA: ${clean(tickerCa)}`,
      "",
      note.trim(),
    ].join("\n");
    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={onSubmit}>
      <label className="block">
        <span className="meta">Name</span>
        <input
          className="field mt-2"
          name="name"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="block">
        <span className="meta">X handle</span>
        <input
          className="field mt-2"
          name="handle"
          autoComplete="username"
          placeholder="@handle"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
        />
      </label>
      <label className="block">
        <span className="meta">Ticker + CA</span>
        <input
          className="field mt-2 font-mono text-sm"
          name="tickerCa"
          required
          placeholder="$TICKER  0x…"
          value={tickerCa}
          onChange={(e) => setTickerCa(e.target.value)}
        />
      </label>
      <label className="block">
        <span className="meta">Note</span>
        <textarea
          className="field mt-2"
          name="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </label>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Open email
      </button>
    </form>
  );
}
