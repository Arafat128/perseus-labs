import { createFileRoute } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/not-found";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Not found — Perseus Labs" },
      { name: "description", content: "No page at this path." },
    ],
  }),
  component: NotFoundPage,
});
