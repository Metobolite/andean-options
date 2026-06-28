import type { DashboardIconProps } from "../../types/dashboard";

function DashboardIcon({ className, name }: DashboardIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
    >
      {name === "alert" && (
        <>
          <path d="M12 3 2.9 19h18.2L12 3Z" />
          <path d="M12 8v5" />
          <path d="M12 17h.01" />
        </>
      )}
      {name === "bell" && (
        <>
          <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" />
          <path d="M10 21h4" />
        </>
      )}
      {name === "chevron" && <path d="m9 18 6-6-6-6" />}
      {name === "farms" && (
        <>
          <path d="M4 20V9l8-5 8 5v11" />
          <path d="M9 20v-6h6v6" />
          <path d="M4 12h16" />
        </>
      )}
      {name === "home" && (
        <>
          <path d="M3 11 12 4l9 7" />
          <path d="M6 10v10h12V10" />
          <path d="M10 20v-6h4v6" />
        </>
      )}
      {name === "image" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="m8 14 2.5-3 3 4 2-2.5L20 18" />
          <path d="M8.5 8.5h.01" />
        </>
      )}
      {name === "logout" && (
        <>
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <path d="M16 17l5-5-5-5" />
          <path d="M21 12H9" />
        </>
      )}
      {name === "reports" && (
        <>
          <path d="M5 4h14v16H5z" />
          <path d="M8 9h8" />
          <path d="M8 13h8" />
          <path d="M8 17h5" />
        </>
      )}
      {name === "search" && (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </>
      )}
      {name === "settings" && (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M19 12a7.2 7.2 0 0 0-.1-1l2-1.5-2-3.5-2.4 1a7 7 0 0 0-1.8-1L14.4 3h-4.8L9.3 6a7 7 0 0 0-1.8 1L5.1 6l-2 3.5 2 1.5a7.2 7.2 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a7 7 0 0 0 1.8 1l.3 3h4.8l.3-3a7 7 0 0 0 1.8-1l2.4 1 2-3.5-2-1.5c.1-.3.1-.7.1-1Z" />
        </>
      )}
      {name === "sprout" && (
        <>
          <path d="M5 19c7.5-.5 12-5 13-13-8 .8-12.5 5-13 13Z" />
          <path d="M5 19c2.5-4.5 6-7.7 10.5-9.5" />
          <path d="M10 5c-3.7.2-6.2 2.2-7 6 3.4-.1 5.8-1.5 7-4.2" />
        </>
      )}
    </svg>
  );
}

export default DashboardIcon;
