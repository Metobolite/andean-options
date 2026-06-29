import type {
  DashboardIconName,
  Farm,
  FarmDetailPanelProps,
  FarmStatus,
} from "../../types/dashboard";
import { priorityStyles } from "../../data/dashboard";
import DashboardIcon from "./DashboardIcon";

const statusBadgeStyles: Record<FarmStatus, string> = {
  Healthy: "bg-emerald-50 text-emerald-600",
  Attention: "bg-amber-50 text-amber-700",
  Critical: "bg-red-50 text-red-700",
};

const farmIconStyles: Record<FarmStatus, string> = {
  Healthy: "bg-emerald-600",
  Attention: "bg-amber-500",
  Critical: "bg-red-600",
};

const detailIcons: Record<string, DashboardIconName> = {
  "Health Score": "heart",
  "Production (MT)": "barChart",
  "Water Status": "droplet",
};

function getValueTone(farm: Farm, label: string, value: string) {
  if (farm.status === "Critical" && label === "Health Score") {
    return "text-red-600";
  }

  if (label === "Water Status" && value === "Low") {
    return "text-red-600";
  }

  return "text-slate-800";
}

function FarmDetailPanel({
  activeAlerts,
  farm,
  onClose,
}: FarmDetailPanelProps) {
  const overviewItems = [
    ...farm.details.map((detail) => ({
      ...detail,
      icon: detailIcons[detail.label] ?? "image",
    })),
    {
      label: "Last Update",
      value: farm.lastUpdate,
      icon: "clock" as const,
    },
    {
      label: "Crop",
      value: farm.crop,
      icon: "sprout" as const,
    },
  ];

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-slate-950/55"
        aria-hidden="true"
        onClick={onClose}
      />
      <aside
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[380px] flex-col bg-white px-6 py-7 shadow-2xl"
        aria-label={`${farm.name} details`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-3">
            <span
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-full text-white ${farmIconStyles[farm.status]}`}
            >
              <DashboardIcon className="h-6 w-6" name="farms" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="m-0 text-lg font-extrabold leading-tight text-slate-900">
                  {farm.name}
                </h2>
                <span
                  className={`rounded-full px-2 py-1 text-[0.64rem] font-extrabold ${statusBadgeStyles[farm.status]}`}
                >
                  {farm.status}
                </span>
              </div>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                {farm.province}
              </p>
            </div>
          </div>

          <button
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-0 bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            type="button"
            onClick={onClose}
            aria-label="Close farm details"
          >
            <DashboardIcon className="h-5 w-5" name="close" />
          </button>
        </div>

        <section className="mt-8" aria-labelledby="farm-overview-heading">
          <h3
            className="mb-4 text-sm font-extrabold text-slate-900"
            id="farm-overview-heading"
          >
            Overview
          </h3>
          <dl className="m-0 overflow-hidden rounded-lg border border-slate-200">
            {overviewItems.map((item) => (
              <div
                className="grid min-h-[50px] grid-cols-[24px_minmax(0,1fr)_auto] items-center gap-3 border-b border-slate-100 px-4 last:border-b-0"
                key={item.label}
              >
                <DashboardIcon
                  className="h-4 w-4 text-slate-500"
                  name={item.icon}
                />
                <dt className="text-xs font-bold text-slate-500">
                  {item.label}
                </dt>
                <dd
                  className={`m-0 text-right text-xs font-extrabold ${getValueTone(
                    farm,
                    item.label,
                    item.value,
                  )}`}
                >
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          className="mt-8 border-t border-slate-200 pt-6"
          aria-labelledby="farm-alerts-heading"
        >
          <h3
            className="mb-4 text-sm font-extrabold text-slate-900"
            id="farm-alerts-heading"
          >
            Active Alerts ({activeAlerts.length})
          </h3>

          {activeAlerts.length > 0 ? (
            <div className="grid gap-3">
              {activeAlerts.map((alert) => {
                const styles = priorityStyles[alert.variant];

                return (
                  <article
                    className={`grid grid-cols-[22px_minmax(0,1fr)_auto] gap-3 rounded-lg border px-3 py-3 ${styles.panel}`}
                    key={`${alert.farm}-${alert.title}`}
                  >
                    <DashboardIcon
                      className={`mt-0.5 h-4 w-4 rounded p-0.5 ${styles.icon}`}
                      name={alert.variant === "critical" ? "alert" : "bell"}
                    />
                    <div className="min-w-0">
                      <h4 className="m-0 text-xs font-extrabold text-slate-900">
                        {alert.title}
                      </h4>
                      <p className="mt-1 text-[0.68rem] font-semibold text-slate-500">
                        {alert.description}
                      </p>
                    </div>
                    <time className="whitespace-nowrap text-[0.66rem] font-bold text-slate-500">
                      {alert.time}
                    </time>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="rounded-lg bg-slate-50 px-3 py-4 text-sm font-semibold text-slate-500">
              No active alerts.
            </p>
          )}
        </section>

        <button
          className="mt-auto min-h-[52px] rounded-lg border-0 bg-red-600 px-5 text-sm font-extrabold text-white transition hover:bg-red-700"
          type="button"
        >
          View full details
        </button>
      </aside>
    </>
  );
}

export default FarmDetailPanel;
