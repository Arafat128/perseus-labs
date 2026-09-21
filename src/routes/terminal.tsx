import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { AIRDROP_TERMINAL, SITE } from "@/lib/site";

export const Route = createFileRoute("/terminal")({
  head: () => ({
    meta: [
      { title: "Airdrop Alpha Terminal — Perseus Labs" },
      {
        name: "description",
        content:
          "Request a project brief from Airdrop Alpha Terminal. If accepted, you get text by email. Not financial advice.",
      },
    ],
  }),
  component: TerminalPage,
});

function TerminalPage() {
  return (
    <>
      <section className="page border-b border-line py-14 sm:py-20">
        <div className="flex flex-wrap items-center gap-3">
          <p className="kicker">Desk 02</p>
          <span className="chip chip-open">{AIRDROP_TERMINAL.status}</span>
        </div>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">{AIRDROP_TERMINAL.name}</h1>
        <p className="lede mt-5">
          Request a project brief. If we accept, you get text by email. No farm steps. No
          “you are eligible.”
        </p>
      </section>

      <section className="page grid gap-4 py-10 lg:grid-cols-5">
        <div className="panel p-5 sm:p-6 lg:col-span-3">
          <h2 className="text-2xl tracking-tight">Request a brief</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Opens mail to {SITE.email}. Subject is locked. Queued. We may decline.
          </p>
          <TerminalForm />
        </div>
        <aside className="panel p-5 sm:p-6 lg:col-span-2">
          <p className="meta">What a site request is</p>
          <ul className="mt-4 space-y-4 text-sm leading-relaxed text-muted">
            <li className="border-l border-line pl-3">{AIRDROP_TERMINAL.detail}</li>
            <li className="border-l border-line pl-3">{AIRDROP_TERMINAL.notIncluded}</li>
            <li className="border-l border-line pl-3">{AIRDROP_TERMINAL.extras}</li>
            <li className="border-l border-line pl-3">{AIRDROP_TERMINAL.limits}</li>
          </ul>
        </aside>
      </section>
    </>
  );
}

function TerminalForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [web, setWeb] = useState("");
  const [chainCa, setChainCa] = useState("");
  const [question, setQuestion] = useState("");
  const [accepted, setAccepted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!accepted) return;
    const clean = (value: string) => value.replace(/[\r\n]+/g, " ").trim();
    const body = [
      `Name: ${clean(name)}`,
      `Email: ${clean(email)}`,
      `Project: ${clean(project)}`,
      `Website / X: ${clean(web) || "—"}`,
      `Chain / CA: ${clean(chainCa) || "—"}`,
      "",
      "Question:",
      question.trim() || "—",
      "",
      "Ack: Not financial advice. This is not an eligibility guarantee.",
    ].join("\n");
    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(AIRDROP_TERMINAL.mailtoSubject)}&body=${encodeURIComponent(body)}`;
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
        <span className="meta">Email</span>
        <input
          className="field mt-2"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="block">
        <span className="meta">Project name</span>
        <input
          className="field mt-2"
          name="project"
          required
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />
      </label>
      <label className="block">
        <span className="meta">Website / X</span>
        <input
          className="field mt-2"
          name="web"
          placeholder="https:// or @handle"
          value={web}
          onChange={(e) => setWeb(e.target.value)}
        />
      </label>
      <label className="block">
        <span className="meta">Chain / CA</span>
        <input
          className="field mt-2 font-mono text-sm"
          name="chainCa"
          placeholder="optional"
          value={chainCa}
          onChange={(e) => setChainCa(e.target.value)}
        />
      </label>
      <label className="block">
        <span className="meta">Question</span>
        <textarea
          className="field mt-2"
          name="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </label>
      <label className="check">
        <input
          type="checkbox"
          name="ack"
          required
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        <span>Not financial advice. This is not an eligibility guarantee.</span>
      </label>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Open email
      </button>
    </form>
  );
}
