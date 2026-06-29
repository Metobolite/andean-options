import { Link } from "react-router-dom";
import andeanIcon from "../../assets/andean.svg";
import type { DashboardSidebarProps } from "../../types/dashboard";
import DashboardIcon from "./DashboardIcon";

function DashboardSidebar({
  farmCount,
  navItems,
  provinceCount,
}: DashboardSidebarProps) {
  return (
    <aside
      className="hidden xl:flex min-h-svh  min-w-60 flex-col border-r border-slate-200 bg-white max-lg:min-h-0 max-lg:border-r-0 max-lg:border-b"
      aria-label="Primary navigation"
    >
      <div className="flex min-h-[82px] items-center gap-2.5 px-5 text-[0.98rem] font-extrabold text-slate-950 max-lg:min-h-16">
        <img src={andeanIcon} alt="Andean Options" className="h-6 w-6" />
        <strong className="text-lg font-bold">Andean Options</strong>
      </div>

      <nav className="grid gap-2.5 px-3 py-[20px] max-lg:grid-cols-2 max-sm:grid-cols-1">
        {navItems.map((item) => (
          <a
            className={`grid min-h-[38px] grid-cols-[20px_minmax(0,1fr)_auto] items-center gap-3 rounded-[5px] px-[12px] text-[0.9rem] font-semibold no-underline transition-colors ${
              item.active
                ? "bg-sky-100 text-slate-950"
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-950"
            }`}
            href={item.href}
            key={item.label}
          >
            <DashboardIcon className="h-4 w-4" name={item.icon} />
            <span>{item.label}</span>
            {item.label === "Alerts" && (
              <strong className="grid h-[22px] min-w-[22px] place-items-center rounded-full bg-red-600 text-[0.76rem] text-white">
                5
              </strong>
            )}
          </a>
        ))}
      </nav>

      <div className="mx-3 mb-3.5 mt-auto rounded-lg bg-slate-50 px-3.5 py-4 max-lg:hidden">
        <div className="flex justify-between gap-3 text-[0.78rem] text-slate-500">
          <p className="text-[0.9rem] font-normal text-slate-900">
            {farmCount}
          </p>
          <p className="text-[0.9rem] font-normal text-[#6B7280]">Farms</p>
        </div>
        <div className="mt-2 flex justify-between gap-3 text-[0.78rem] text-slate-500">
          <p className="text-[0.9rem] font-normal text-slate-900">
            {provinceCount}
          </p>
          <p className="text-[0.9rem] font-normal text-[#6B7280]">Provinces</p>
        </div>
      </div>

      <Link
        className="mx-2.5 mb-[18px] flex min-h-[42px] items-center gap-2.5 rounded-[5px] border-0 bg-transparent px-[13px] text-[0.9rem] font-extrabold text-slate-500 no-underline hover:bg-slate-100 hover:text-slate-950"
        to="/home"
      >
        <DashboardIcon className="h-[18px] w-[18px]" name="logout" />
        <p className="text-[0.9rem] font-semibold">Logout</p>
      </Link>
    </aside>
  );
}

export default DashboardSidebar;
