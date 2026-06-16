import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "outline" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  /** accent color for the primary variant */
  color?: string;
  full?: boolean;
}

interface ButtonAsButton extends BaseProps {
  onClick: () => void;
  disabled?: boolean;
  to?: never;
}

interface ButtonAsLink extends BaseProps {
  to: string;
  onClick?: never;
  disabled?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-base font-semibold transition active:scale-[0.98] disabled:opacity-40 disabled:active:scale-100";

const VARIANTS: Record<Variant, string> = {
  primary: "text-white shadow-lg",
  outline: "border border-[var(--color-line)] text-[var(--color-ink)]",
  ghost: "text-[var(--color-muted)]",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", color = "#ef4444", full } = props;
  const className = `${BASE} ${VARIANTS[variant]} ${full ? "w-full" : ""}`;
  const style =
    variant === "primary" ? { backgroundColor: color } : undefined;

  if ("to" in props && props.to !== undefined) {
    return (
      <Link to={props.to} className={className} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
