import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type Variant = "ink" | "wa" | "lime" | "outline" | "paper";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  icon?: ReactNode;
  ariaLabel?: string;
};

const variants: Record<Variant, string> = {
  ink: "bg-ink text-cream hover:bg-moss shadow-[0_10px_24px_-16px_rgba(20,22,15,0.9)]",
  wa: "bg-wa text-white hover:bg-wa-dark shadow-[0_10px_24px_-14px_rgba(15,129,72,0.8)]",
  lime: "bg-lime text-ink hover:bg-[#cdf25c] shadow-[0_10px_24px_-16px_rgba(20,22,15,0.6)]",
  outline: "border border-line-strong text-ink hover:border-ink hover:bg-paper",
  paper: "bg-paper text-ink border border-line hover:bg-white shadow-[0_1px_0_#fff_inset]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2.5 text-[13px] gap-2",
  md: "px-5 py-3.5 text-sm gap-2.5",
  lg: "px-6 py-4 text-[15px] gap-2.5",
};

export function Button({
  href,
  children,
  variant = "ink",
  size = "md",
  className,
  external,
  icon,
  ariaLabel,
}: ButtonProps) {
  const isExternal = external ?? /^https?:/.test(href);
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {icon && <span className="flex shrink-0 items-center">{icon}</span>}
      <span className="inline-flex items-center gap-1.5">{children}</span>
    </a>
  );
}
