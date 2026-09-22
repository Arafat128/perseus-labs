import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Perseus Labs" },
      {
        name: "description",
        content: `Contact Perseus Labs. Inbox: ${SITE.email}.`,
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
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">Write the studio.</h1>
        <p className="lede mt-5">
          General contact only. Opens mail to {SITE.email}.
        </p>
      </section>

      <section className="page grid gap-4 py-10 lg:grid-cols-5">
        <div className="panel p-5 sm:p-6 lg:col-span-3">
          <h2 className="text-2xl tracking-tight">Message</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Name, how to reach you, and the note. No ticker form here.
          </p>
          <ContactForm />
        </div>
        <aside className="panel p-5 sm:p-6 lg:col-span-2">
          <p className="meta">Inbox</p>
          <ul className="mt-4 space-y-4 text-sm leading-relaxed">
            <li className="border-l border-line pl-3">
              <a href={`mailto:${SITE.email}`} className="text-fg hover:text-cyan">
                {SITE.email}
              </a>
            </li>
            <li className="border-l border-line pl-3">
              <a
                href={SITE.xUrl}
                className="text-fg hover:text-cyan"
                rel="noopener noreferrer"
                target="_blank"
              >
                {SITE.xHandle}
              </a>
            </li>
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-muted">
            Desk 02 briefs go through Terminal, not this page.
          </p>
        </aside>
      </section>
    </>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [note, setNote] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clean = (value: string) => value.replace(/[\r\n]+/g, " ").trim();
    const subject = "Contact — Perseus Labs";
    const body = [
      `Name: ${clean(name)}`,
      `Email: ${clean(email)}`,
      `X handle: ${clean(handle) || "—"}`,
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
        <span className="meta">Message</span>
        <textarea
          className="field mt-2"
          name="note"
          required
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
