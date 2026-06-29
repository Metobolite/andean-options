export type DashboardIconName =
  | 'alert'
  | 'barChart'
  | 'bell'
  | 'chevron'
  | 'clock'
  | 'close'
  | 'droplet'
  | 'farms'
  | 'heart'
  | 'home'
  | 'image'
  | 'logout'
  | 'reports'
  | 'search'
  | 'settings'
  | 'sprout'

export type NavItem = {
  label: string
  href: string
  icon: DashboardIconName
  active?: boolean
}

export type DashboardIconProps = {
  className?: string
  name: DashboardIconName
}

export type DashboardSidebarProps = {
  farmCount: number
  navItems: NavItem[]
  provinceCount: number
}

export type PriorityVariant = 'attention' | 'critical'

export type PriorityStyles = {
  badge: string
  icon: string
  panel: string
}

export type PriorityItem = {
  variant: PriorityVariant
  farm: string
  title: string
  description: string
  time: string
}

export type PriorityPanelProps = {
  actionLabel: string
  count: number
  items: PriorityItem[]
  subtitle: string
  title: string
  variant: PriorityVariant
}

export type TrendDirection = 'negative' | 'positive'

export type TrendingStat = {
  label: string
  value: string
  change: string
  trend: TrendDirection
  helper: string
  target: string
}

export type TrendCardProps = {
  stat: TrendingStat
}

export type FarmStatus = 'Attention' | 'Critical' | 'Healthy'

export type FarmDetail = {
  label: string
  value: string
}

export type Farm = {
  name: string
  province: string
  status: FarmStatus
  details: FarmDetail[]
  crop: string
  lastUpdate: string
}

export type FarmCardProps = {
  farm: Farm
  isSelected?: boolean
  onSelect: (farm: Farm) => void
}

export type FarmDetailPanelProps = {
  activeAlerts: PriorityItem[]
  farm: Farm
  onClose: () => void
}
