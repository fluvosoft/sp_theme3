import type { ReactNode } from "react";
import { THEME } from "../../lib/constants";

type CtaButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export default function CtaButton({ children, href = "#order", className = "" }: CtaButtonProps) {
  return (
    <a
      href={href}
      className={`font-heading inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white shadow-[var(--shadow)] transition-all hover:opacity-95 hover:shadow-[var(--shadow-lg)] active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
      style={{ backgroundColor: THEME.pinkBright }}
    >
      {children}
    </a>
  );
}
