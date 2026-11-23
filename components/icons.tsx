import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const WhatsAppIcon = (props: IconProps) => (
  <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M16.02 4C9.4 4 4.03 9.37 4.03 15.99c0 2.11.55 4.17 1.6 5.99L4 28l6.18-1.6a12 12 0 0 0 5.83 1.49h.01c6.62 0 12-5.37 12-11.99C28.02 9.37 22.64 4 16.02 4Zm0 21.79h-.01c-1.78 0-3.53-.48-5.06-1.39l-.36-.21-3.67.95.98-3.58-.24-.37a9.9 9.9 0 0 1-1.52-5.3c0-5.48 4.46-9.94 9.94-9.94a9.87 9.87 0 0 1 9.87 9.95c0 5.48-4.46 9.94-9.94 9.94Zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.66-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
  </svg>
);

export const StoreIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3.5 8.5 5 3.5h14l1.5 5" />
    <path d="M4 8.5h16v11H4z" />
    <path d="M9.25 19.5v-6h5.5v6" />
    <path d="M3.5 8.5a2.6 2.6 0 0 0 4.25 2.1 2.6 2.6 0 0 0 4.25.02 2.6 2.6 0 0 0 4.25-.02A2.6 2.6 0 0 0 20.5 8.5" />
  </svg>
);

export const LandingIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="M3 9h18" />
    <path d="M7 13h6M7 16h3.5" />
    <path d="m15.5 12.5 1.6 3.1 3.1 1.4-3.1 1.4-1.6 3.1-1.4-3.1-3.1-1.4 3.1-1.4Z" />
  </svg>
);

export const BotIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="3.5" y="7" width="17" height="12" rx="3.5" />
    <path d="M12 3v4" />
    <circle cx="12" cy="3" r="1.2" />
    <path d="M8.5 12v1.5M15.5 12v1.5" />
    <path d="M9.5 16h5" />
    <path d="M1.8 11v3.5M22.2 11v3.5" />
  </svg>
);

export const ArrowUpRight = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M7 17 17 7" />
    <path d="M8.5 7H17v8.5" />
  </svg>
);

export const ArrowDown = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 4v16" />
    <path d="m6 14 6 6 6-6" />
  </svg>
);

export const Check = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m4.5 12.5 4.5 4.5L19.5 6.5" />
  </svg>
);

export const Sparkle = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 2.5c.6 4.7 2.8 6.9 7.5 7.5-4.7.6-6.9 2.8-7.5 7.5-.6-4.7-2.8-6.9-7.5-7.5C9.2 9.4 11.4 7.2 12 2.5Z" />
    <path d="M19 16.5c.25 1.95 1.05 2.75 3 3-1.95.25-2.75 1.05-3 3-.25-1.95-1.05-2.75-3-3 1.95-.25 2.75-1.05 3-3Z" />
  </svg>
);

export const Clock = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const Compass = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" />
  </svg>
);

export const Shield = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3 4.5 6v5.5c0 4.3 3 7.7 7.5 9.5 4.5-1.8 7.5-5.2 7.5-9.5V6L12 3Z" />
    <path d="m8.8 12 2.2 2.2 4.4-4.5" />
  </svg>
);

export const Plus = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Menu = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Send = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m4.5 12 15-7-4 15-3.5-6.5-7.5-1.5Z" />
    <path d="m12 13.5 7.5-8.5" />
  </svg>
);

export const Bag = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5.5 8h13l1 12h-15l1-12Z" />
    <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
  </svg>
);

export const Search = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4 4" />
  </svg>
);

export const ChevronDown = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Star = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="m12 2.6 2.95 5.98 6.6.96-4.78 4.65 1.13 6.57L12 17.66l-5.9 3.1 1.13-6.57L2.45 9.54l6.6-.96L12 2.6Z" />
  </svg>
);

export const ServiceIcon = ({ name, ...props }: IconProps & { name: "store" | "landing" | "bot" }) => {
  if (name === "store") return <StoreIcon {...props} />;
  if (name === "landing") return <LandingIcon {...props} />;
  return <BotIcon {...props} />;
};
