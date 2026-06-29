import type { TrendCardProps, TrendDirection } from "../../types/dashboard";
import DashboardIcon from "./DashboardIcon";

const trendStyles: Record<TrendDirection, { arrow: string; badge: string }> = {
  positive: {
    arrow:
      "border-x-[4px] border-b-[6px] border-x-transparent border-b-emerald-600",
    badge: "bg-[#EEF9F1] text-[#009951]",
  },
  negative: {
    arrow:
      "border-x-[4px] border-t-[6px] border-x-transparent border-t-red-600",
    badge: "bg-[#FEF6F4] text-[#C00F0C]",
  },
};

function TrendCard({ stat }: TrendCardProps) {
  return (
    <article className="grid min-h-[130px] grid-cols-[36px_minmax(0,1fr)] items-start gap-4 rounded-lg border border-slate-200 bg-white p-4 hover:shadow-md transition-shadow">
      <DashboardIcon className="h-8 w-8 text-slate-800" name="image" />
      <div>
        <h3 className="mb-2 text-[0.82rem] font-bold text-slate-700">
          {stat.label}
        </h3>
        <div className="flex items-center gap-2">
          <strong className="text-xl font-bold leading-none text-slate-950">
            {stat.value}
          </strong>
          <span
            className={`inline-flex min-h-5 items-center rounded-full px-1.5 text-[0.7rem] font-bold ${trendStyles[stat.trend].badge}`}
          >
            <span
              className={`mr-0.5 h-0 w-0 ${trendStyles[stat.trend].arrow}`}
            />
            {stat.change}
          </span>
        </div>
        <p className="mt-2.5 text-[0.66rem] font-bold text-slate-400">
          {stat.helper}
        </p>
        <p className="mt-1 text-[0.9rem] font-bold text-black">
          Target: {stat.target}
        </p>
      </div>
    </article>
  );
}

export default TrendCard;
