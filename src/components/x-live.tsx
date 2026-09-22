import { useEffect } from "react";
import { SITE } from "@/lib/site";

export function XLive() {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://platform.twitter.com/widgets.js"]',
    );
    if (existing) {
      const w = window as Window & { twttr?: { widgets?: { load?: () => void } } };
      w.twttr?.widgets?.load?.();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <aside className="panel overflow-hidden p-5 sm:p-6">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="meta">Live on X</p>
          <h2 className="mt-2 text-2xl tracking-tight">Published threads</h2>
        </div>
        <a
          href={SITE.xUrl}
          className="meta text-cyan"
          rel="noopener noreferrer"
          target="_blank"
        >
          {SITE.xHandle}
        </a>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-muted">
        Fresh posts load from X. Forensic cards below are the archive we keep on this
        site.
      </p>
      <div className="max-h-[28rem] overflow-auto border border-line bg-bg">
        <a
          className="twitter-timeline"
          data-theme="dark"
          data-chrome="noheader nofooter noborders transparent"
          data-tweet-limit="4"
          href="https://twitter.com/labs_perseus"
        >
          Posts from {SITE.xHandle}
        </a>
      </div>
    </aside>
  );
}
