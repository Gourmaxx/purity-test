import type { ReactNode } from "react";

/** Centered, mobile-first column with consistent padding. */
export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-md flex-col px-5 py-6">
      {children}
    </div>
  );
}
