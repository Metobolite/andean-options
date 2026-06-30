import { priorityStyles } from "../../data/dashboard";
import type { PriorityPanelProps } from "../../types/dashboard";
import DashboardIcon from "./DashboardIcon";

function PriorityPanel({
  actionLabel,
  count,
  items,
  onSelectFarm,
  subtitle,
  title,
  variant,
}: PriorityPanelProps) {
  const styles = priorityStyles[variant];

  return (
    <article
      className={`flex flex-col lg:min-h-[320px] p-5 overflow-hidden rounded-lg border ${styles.panel}`}
    >
      <div className="flex items-center justify-between pb-2.5 lg:pb-5 gap-4 border-b border-slate-200">
        <div className="flex items-center gap-3.5">
          <DashboardIcon
            className={`h-9 w-9 rounded-lg p-1.5 ${styles.icon}`}
            name={variant === "critical" ? "alert" : "bell"}
          />
          <div>
            <h2 className="m-0 text-[1rem] font-bold uppercase leading-tight text-slate-800">
              {title}
            </h2>
            <p className="mt-1 text-[0.72rem] font-bold text-[#6B7280]">
              {subtitle}
            </p>
          </div>
        </div>
        <span
          className={`grid h-5 min-w-7 place-items-center rounded-full text-[0.72rem] font-black ${styles.badge}`}
        >
          {count}
        </span>
      </div>

      <div className="grid flex-1 content-start gap-5 pt-5 pb-4">
        {items.map((item) => (
          <button
            className="grid w-full grid-cols-[32px_minmax(0,1fr)_auto_18px] items-center gap-3 rounded-lg border-0 bg-transparent p-2 text-left text-inherit transition hover:bg-slate-200/50 max-sm:grid-cols-[32px_minmax(0,1fr)_18px]"
            key={`${item.farm}-${item.title}`}
            type="button"
            onClick={() => onSelectFarm(item.farm)}
          >
            <DashboardIcon
              className="h-[31px] w-[31px] text-slate-800"
              name="image"
            />
            <div>
              <h3 className="mb-1 text-[0.78rem] font-bold leading-tight text-black">
                {item.farm} - {item.title}
              </h3>
              <p className="text-[0.66rem] font-bold text-slate-600">
                {item.description}
              </p>
            </div>
            <time className="whitespace-nowrap text-[0.65rem] font-bold text-slate-500 max-sm:hidden">
              {item.time}
            </time>
            <DashboardIcon
              className="h-3.5 w-3.5 text-slate-950"
              name="chevron"
            />
          </button>
        ))}
      </div>

      <button
        className="lg:py-2.5 pt-2.5 w-full border-0 border-t border-slate-200 bg-white/30 text-[0.9rem] font-semibold! text-black transition hover:bg-slate-200 rounded-b-lg"
        type="button"
      >
        {actionLabel}
      </button>
    </article>
  );
}

export default PriorityPanel;
