export type DashboardProps = {
  onBackHome: () => void
}

export type DashboardIconName =
  | 'alert'
  | 'bell'
  | 'chevron'
  | 'farms'
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
  onBackHome: () => void
  provinceCount: number
}

export type PriorityVariant = 'attention' | 'critical'

export type PriorityItem = {
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
}

export type TrendCardProps = {
  stat: TrendingStat
}

export type FarmStatus = 'Attention' | 'Critical' | 'Healthy'

export type Farm = {
  name: string
  province: string
  status: FarmStatus
  healthScore: string
  production: string
  waterStatus: string
}

export type FarmCardProps = {
  farm: Farm
}

export type FarmDetailProps = {
  label: string
  value: string
}
