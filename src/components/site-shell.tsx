import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { NAV, SITE } from "@/lib/site";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="border-b border-line">
      <div className="page flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center gap-2.5 text-sm font-medium tracking-tight"
        >
          <img
            src="/icon.png"
            alt=""
            width={28}
            height={28}
            className="size-7 shrink-0 object-contain"
            decoding="async"
          />
          {SITE.name}
        </Link>
        <nav aria-label="Primary" className="-mx-3 flex flex-wrap items-center">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className="nav-link"
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={SITE.xUrl}
            className="nav-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            X
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="page flex flex-col gap-4 py-8 sm:flex-row sm:items-start sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-muted">{SITE.footerNote}</p>
        <p className="meta flex flex-col gap-2 sm:items-end">
          <a href={`mailto:${SITE.email}`} className="text-fg hover:text-cyan">
            {SITE.email}
          </a>
          <a
            href={SITE.xUrl}
            className="text-fg hover:text-cyan"
            rel="noopener noreferrer"
            target="_blank"
          >
            {SITE.xHandle}
          </a>
        </p>
      </div>
    </footer>
  );
}
