import DashboardIcon from "./DashboardIcon";

function DashboardHeader() {
  return (
    <header className="flex lg:min-h-[96px] items-center justify-between gap-5 border-b border-slate-200 bg-white px-7 max-md:flex-col max-md:items-stretch max-md:px-5 max-md:py-5">
      <div>
        <h1 className="lg:mb-2 text-[24px] font-bold leading-none text-black">
          Regional Farms Dashboard
        </h1>
        <p className="hidden lg:flex m-0 text-[0.78rem] font-bold text-[#6B7280]">
          Check your farm status
        </p>
      </div>

      <div className="hidden lg:flex items-center gap-4 max-md:w-full">
        <label className="flex h-[34px] w-[230px] items-center gap-2.5 rounded-md border border-slate-300 bg-white px-[11px] max-md:w-full">
          <DashboardIcon className="h-4 w-4 text-slate-400" name="search" />
          <input
            className="min-w-0 flex-1 border-0 bg-transparent text-[0.78rem] font-bold text-slate-950 outline-none placeholder:text-slate-400"
            placeholder="Search farms, tasks, alerts..."
            type="search"
          />
        </label>
        <button
          className="flex items-center gap-2.5 border-0 bg-transparent"
          type="button"
          aria-label="Open profile menu"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-black text-[0.72rem] font-black text-white">
            RD
          </span>
          <DashboardIcon
            className="h-3.5 w-3.5 rotate-90 text-slate-500"
            name="chevron"
          />
        </button>
      </div>
    </header>
  );
}

export default DashboardHeader;
