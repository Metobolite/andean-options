import type { FarmDetailProps } from "../../types/dashboard";

function FarmDetail({ label, value }: FarmDetailProps) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 text-[0.72rem] font-bold leading-tight text-slate-700">
      <dt>{label}</dt>
      <dd className="m-0 text-right">{value}</dd>
    </div>
  );
}

export default FarmDetail;
