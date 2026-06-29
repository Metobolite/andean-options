import type { DashboardIconProps } from "../../types/dashboard";
import alertIcon from "../../assets/alert.svg";
import barChartIcon from "../../assets/bar-chart.svg";
import bellIcon from "../../assets/bell.svg";
import chevronIcon from "../../assets/chevron.svg";
import clockIcon from "../../assets/clock.svg";
import closeIcon from "../../assets/close.svg";
import dropletIcon from "../../assets/droplet.svg";
import farmsIcon from "../../assets/farms.svg";
import heartIcon from "../../assets/heart.svg";
import homeIcon from "../../assets/home.svg";
import imageIcon from "../../assets/Image.svg";
import logoutIcon from "../../assets/logout.svg";
import reportsIcon from "../../assets/reports.svg";
import searchIcon from "../../assets/search.svg";
import settingsIcon from "../../assets/settings.svg";
import sproutIcon from "../../assets/sprout.svg";

const iconAssets: Record<DashboardIconProps["name"], string> = {
  alert: alertIcon,
  barChart: barChartIcon,
  bell: bellIcon,
  chevron: chevronIcon,
  clock: clockIcon,
  close: closeIcon,
  droplet: dropletIcon,
  farms: farmsIcon,
  heart: heartIcon,
  home: homeIcon,
  image: imageIcon,
  logout: logoutIcon,
  reports: reportsIcon,
  search: searchIcon,
  settings: settingsIcon,
  sprout: sproutIcon,
};

function DashboardIcon({ className, name }: DashboardIconProps) {
  const iconUrl = iconAssets[name];

  return (
    <span
      className={`inline-grid shrink-0 place-items-center align-middle ${className ?? ""}`}
      aria-hidden="true"
    >
      <span
        className="block h-full w-full bg-current"
        style={{
          maskImage: `url("${iconUrl}")`,
          maskPosition: "center",
          maskRepeat: "no-repeat",
          maskSize: "contain",
          WebkitMaskImage: `url("${iconUrl}")`,
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
        }}
      />
    </span>
  );
}

export default DashboardIcon;
