import type { FarmCardProps, FarmStatus } from "../../types/dashboard";
import DashboardIcon from "./DashboardIcon";
import FarmDetail from "./FarmDetail";

const statusDotStyles: Record<FarmStatus, string> = {
  Healthy: "bg-emerald-700",
  Attention: "bg-amber-400",
  Critical: "bg-red-700",
};

function FarmCard({ farm }: FarmCardProps) {
  return (
    <article className="grid min-h-[126px] grid-cols-[34px_minmax(0,1fr)] gap-4 rounded-lg border border-slate-200 bg-white p-[16px] hover:shadow-md transition-shadow">
      <DashboardIcon className="h-8 w-8 text-slate-800" name="image" />
      <div className="min-w-0">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="m-0 text-[0.88rem] font-bold leading-tight text-slate-800">
              {farm.name}
            </h3>
            <p className="mt-1 text-[0.66rem] font-bold text-slate-400">
              {farm.province}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[0.68rem] font-bold text-slate-700">
            <span
              className={`h-2.5 w-2.5 rounded-full ${statusDotStyles[farm.status]}`}
            />
            {farm.status}
          </span>
        </div>

        <dl className="m-0 grid gap-1">
          <FarmDetail label="Health Score" value={farm.healthScore} />
          <FarmDetail label="Production (MT)" value={farm.production} />
          <FarmDetail label="Water Status" value={farm.waterStatus} />
        </dl>
      </div>
    </article>
  );
}

export default FarmCard;
