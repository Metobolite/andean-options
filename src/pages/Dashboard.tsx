import {
  DashboardHeader,
  DashboardSidebar,
  FarmCard,
  PriorityPanel,
  TrendCard,
} from "../components/dashboard";
import {
  attentionItems,
  criticalIssues,
  farms,
  trendingStats,
} from "../data/dashboard";
import type { DashboardProps, NavItem } from "../types/dashboard";

const navItems: NavItem[] = [
  { label: "Overview", href: "#overview", icon: "home", active: true },
  { label: "Farms", href: "#farm-status-heading", icon: "farms" },
  { label: "Alerts", href: "#priority-items", icon: "bell" },
  { label: "Reports", href: "#trending-heading", icon: "reports" },
  { label: "Settings", href: "#overview", icon: "settings" },
];

function Dashboard({ onBackHome }: DashboardProps) {
  const provinceCount = new Set(farms.map((farm) => farm.province)).size;

  return (
    <main className="grid min-h-svh bg-[#fbfcfd] text-slate-800 xl:grid-cols-[240px_minmax(0,1fr)]">
      <DashboardSidebar
        farmCount={farms.length}
        navItems={navItems}
        onBackHome={onBackHome}
        provinceCount={provinceCount}
      />

      <section className="min-w-0" id="overview">
        <DashboardHeader />

        <section className="grid gap-4 px-8 py-4 max-md:px-5">
          <section
            className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-14"
            id="priority-items"
            aria-label="Priority items"
          >
            <PriorityPanel
              actionLabel="View all alerts"
              count={criticalIssues.length}
              items={criticalIssues}
              subtitle="Requires immediate action"
              title="Critical Issues"
              variant="critical"
            />
            <PriorityPanel
              actionLabel="View all to-dos"
              count={attentionItems.length}
              items={attentionItems}
              subtitle="Needs your review today"
              title="Today's Attention"
              variant="attention"
            />
          </section>

          <section
            className="rounded-lg border border-slate-200 bg-white p-2.5"
            aria-labelledby="trending-heading"
          >
            <h2
              className="mb-4 text-[0.95rem] font-bold uppercase leading-tight text-black"
              id="trending-heading"
            >
              Trending
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trendingStats.map((stat) => (
                <TrendCard key={stat.label} stat={stat} />
              ))}
            </div>
          </section>

          <section
            className="rounded-lg border border-slate-200 bg-white p-2.5"
            aria-labelledby="farm-status-heading"
          >
            <h2
              className="mb-3.5 text-[0.95rem] font-bold uppercase leading-tight text-slate-800"
              id="farm-status-heading"
            >
              Farm Status Overview
            </h2>
            <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-4">
              {farms.map((farm) => (
                <FarmCard farm={farm} key={farm.name} />
              ))}
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Dashboard;
