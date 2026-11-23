import { cn } from "@/utils/cn";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  imgClassName?: string;
};

export function Logo({ variant = "dark", className, imgClassName }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src={variant === "dark" ? logoDark : logoLight}
        alt="Vortex Studio"
        width={1000}
        height={250}
        className={cn("h-9 w-auto select-none", imgClassName)}
        draggable={false}
      />
    </span>
  );
}
