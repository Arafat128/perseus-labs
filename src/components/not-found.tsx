import { Link } from "@tanstack/react-router";

export function NotFoundPage() {
  return (
    <section className="page py-20 sm:py-28">
      <p className="kicker">404</p>
      <h1 className="mt-4 max-w-xl text-4xl sm:text-5xl">No page at this path.</h1>
      <p className="lede mt-5">The desk you asked for is not on the floor.</p>
      <div className="mt-8">
        <Link to="/" className="btn btn-primary">
          Back to the studio
        </Link>
      </div>
    </section>
  );
}
