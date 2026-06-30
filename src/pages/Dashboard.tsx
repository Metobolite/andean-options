import { useState } from "react";
import {
  DashboardHeader,
  DashboardSidebar,
  FarmCard,
  FarmDetailPanel,
  PriorityPanel,
  TrendCard,
} from "../components/dashboard";
import {
  attentionItems,
  criticalIssues,
  farms,
  trendingStats,
  navItems,
} from "../data/dashboard";
import type { Farm } from "../types/dashboard";

function Dashboard() {
  const [selectedFarm, setSelectedFarm] = useState<Farm | null>(null);
  const alertItems = [...criticalIssues, ...attentionItems];
  const provinceCount = new Set(farms.map((farm) => farm.province)).size;
  const handleFarmSelect = (farmName: string) => {
    const farm = farms.find((currentFarm) => currentFarm.name === farmName);

    if (farm) {
      setSelectedFarm(farm);
    }
  };

  return (
    <main className="grid min-h-svh bg-[#fbfcfd] text-slate-800 xl:grid-cols-[240px_minmax(0,1fr)]">
      <DashboardSidebar
        farmCount={farms.length}
        navItems={navItems}
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
              onSelectFarm={handleFarmSelect}
              subtitle="Requires immediate action"
              title="Critical Issues"
              variant="critical"
            />
            <PriorityPanel
              actionLabel="View all to-dos"
              count={attentionItems.length}
              items={attentionItems}
              onSelectFarm={handleFarmSelect}
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
                <FarmCard
                  farm={farm}
                  isSelected={selectedFarm?.name === farm.name}
                  key={farm.name}
                  onSelectFarm={handleFarmSelect}
                />
              ))}
            </div>
          </section>
        </section>
      </section>

      {selectedFarm && (
        <FarmDetailPanel
          activeAlerts={alertItems.filter(
            (item) => item.farm === selectedFarm.name,
          )}
          farm={selectedFarm}
          onClose={() => setSelectedFarm(null)}
        />
      )}
    </main>
  );
}

export default Dashboard;
