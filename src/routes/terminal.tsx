import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { AIRDROP_TERMINAL, ALPHA_SKILL_CALLS, SITE } from "@/lib/site";

export const Route = createFileRoute("/terminal")({
  head: () => ({
    meta: [
      { title: "Terminal — Perseus Labs" },
      {
        name: "description",
        content:
          "Request Desk 01 Alpha Skill Calls or Desk 02 Airdrop Alpha Terminal. If accepted, you get text by email.",
      },
    ],
  }),
  component: TerminalPage,
});

type DeskId = "calls" | "terminal";

function TerminalPage() {
  return (
    <>
      <section className="page border-b border-line py-14 sm:py-20">
        <p className="kicker">Terminal</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">Request a desk</h1>
        <p className="lede mt-5">
          Choose Desk 01 or Desk 02. If we accept, you get text by email. Queued. We may
          decline. No farm steps. No “you are eligible.”
        </p>
      </section>

      <section className="page grid gap-4 py-10 lg:grid-cols-5">
        <div className="panel p-5 sm:p-6 lg:col-span-3">
          <h2 className="text-2xl tracking-tight">Request</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Opens mail to {SITE.email}. Subject follows the desk you pick.
          </p>
          <TerminalForm />
        </div>
        <aside className="panel p-5 sm:p-6 lg:col-span-2">
          <p className="meta">Desks</p>
          <ul className="mt-4 space-y-4 text-sm leading-relaxed text-muted">
            <li className="border-l border-line pl-3">
              Desk 01 {ALPHA_SKILL_CALLS.name}: ticker + CA forensic thread. No price
              target.
            </li>
            <li className="border-l border-line pl-3">{AIRDROP_TERMINAL.detail}</li>
            <li className="border-l border-line pl-3">{AIRDROP_TERMINAL.notIncluded}</li>
            <li className="border-l border-line pl-3">{AIRDROP_TERMINAL.limits}</li>
          </ul>
        </aside>
      </section>
    </>
  );
}

function TerminalForm() {
  const [desk, setDesk] = useState<DeskId>("calls");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [web, setWeb] = useState("");
  const [chainCa, setChainCa] = useState("");
  const [question, setQuestion] = useState("");
  const [accepted, setAccepted] = useState(false);

  const isCalls = desk === "calls";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!accepted) return;
    const clean = (value: string) => value.replace(/[\r\n]+/g, " ").trim();
    const subject = isCalls ? ALPHA_SKILL_CALLS.mailtoSubject : AIRDROP_TERMINAL.mailtoSubject;
    const body = [
      `Desk: ${isCalls ? `01 ${ALPHA_SKILL_CALLS.name}` : `02 ${AIRDROP_TERMINAL.name}`}`,
      `Name: ${clean(name)}`,
      `Email: ${clean(email)}`,
      `${isCalls ? "Ticker" : "Project"}: ${clean(project)}`,
      `Website / X: ${clean(web) || "—"}`,
      `Chain / CA: ${clean(chainCa) || "—"}`,
      "",
      "Question:",
      question.trim() || "—",
      "",
      "Ack: Not financial advice. This is not an eligibility guarantee.",
    ].join("\n");
    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={onSubmit}>
      <fieldset>
        <legend className="meta">Desk</legend>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <DeskChoice
            active={isCalls}
            onClick={() => setDesk("calls")}
            label={`01 ${ALPHA_SKILL_CALLS.name}`}
          />
          <DeskChoice
            active={!isCalls}
            onClick={() => setDesk("terminal")}
            label={`02 ${AIRDROP_TERMINAL.name}`}
          />
        </div>
      </fieldset>
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
        <span className="meta">{isCalls ? "Ticker" : "Project name"}</span>
        <input
          className="field mt-2"
          name="project"
          required
          placeholder={isCalls ? "$TICKER" : undefined}
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
          required={isCalls}
          placeholder={isCalls ? "BSC  0x…" : "optional"}
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

function DeskChoice({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button type="button" className={active ? "btn btn-primary" : "btn"} onClick={onClick}>
      {label}
    </button>
  );
}
