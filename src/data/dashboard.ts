import type {
  Farm,
  NavItem,
  PriorityItem,
  PriorityStyles,
  PriorityVariant,
  TrendingStat,
} from '../types/dashboard'

export const priorityStyles: Record<PriorityVariant, PriorityStyles> = {
  critical: {
    badge: "bg-[#FDD8D3] text-black",
    icon: "bg-[#FDD1CF] text-red-600",
    panel: "border-[#FCDAD8] bg-[#FEF6F4]",
  },
  attention: {
    badge: "bg-[#FEDC9C] text-black",
    icon: "bg-[#FEF4E0] text-amber-600",
    panel: "border-[#F8E8CC] bg-[#FEFAF0]",
  },
}

export const navItems: NavItem[] = [
  { label: "Overview", href: "#overview", icon: "home", active: true },
  { label: "Farms", href: "#farm-status-heading", icon: "farms" },
  { label: "Alerts", href: "#priority-items", icon: "bell" },
  { label: "Reports", href: "#trending-heading", icon: "reports" },
  { label: "Settings", href: "#overview", icon: "settings" },
];

export const criticalIssues = [
  {
    variant: 'critical',
    farm: 'Farm 3',
    title: 'Irrigation Failure',
    description: 'Affects 90 MT production - Water status low',
    time: 'Today, 6:15 AM',
  },
  {
    variant: 'critical',
    farm: 'Farm 7',
    title: 'Disease Risk Detected',
    description: 'High disease risk - Health score dropped to 55%',
    time: 'Today, 5:40 AM',
  },
] satisfies PriorityItem[]

export const attentionItems = [
  {
    variant: 'attention',
    farm: 'Farm 2',
    title: 'Feed Inventory Low',
    description: 'Feed will last 2 days - order today',
    time: 'Today, 6:15 AM',
  },
  {
    variant: 'attention',
    farm: 'Farm 5',
    title: 'Maintenance Due',
    description: 'Tractor maintenance overdue - assign technician',
    time: 'Today, 5:40 AM',
  },
  {
    variant: 'attention',
    farm: 'Farm 8',
    title: 'Production Below Target',
    description: '15% below monthly target - review cause',
    time: 'Today, 5:40 AM',
  },
] satisfies PriorityItem[]

export const trendingStats = [
  {
    label: 'Farm Health Score',
    value: '78%',
    change: '4%',
    trend: 'positive',
    helper: 'vs last 7 days',
    target: '85%',
  },
  {
    label: 'Production (MT)',
    value: '1,243',
    change: '12%',
    trend: 'positive',
    helper: 'vs last 7 days',
    target: '1,300 MT',
  },
  {
    label: 'Revenue (EUR)',
    value: 'EUR 75,250',
    change: '8%',
    trend: 'positive',
    helper: 'vs last 7 days',
    target: 'EUR 80,000',
  },
  {
    label: 'Water Usage',
    value: '-12%',
    change: '10%',
    trend: 'positive',
    helper: 'vs last 7 days',
    target: '-15%',
  },
] satisfies TrendingStat[]

export const farms = [
  {
    name: 'Farm 1',
    province: 'Province 1',
    status: 'Healthy',
    crop: 'Corn',
    lastUpdate: '10 min ago',
    details: [
      { label: 'Health Score', value: '95%' },
      { label: 'Production (MT)', value: '156' },
      { label: 'Water Status', value: 'Normal' },
    ],
  },
  {
    name: 'Farm 2',
    province: 'Province 1',
    status: 'Attention',
    crop: 'Wheat',
    lastUpdate: '18 min ago',
    details: [
      { label: 'Health Score', value: '82%' },
      { label: 'Production (MT)', value: '120' },
      { label: 'Water Status', value: 'Normal' },
    ],
  },
  {
    name: 'Farm 3',
    province: 'Province 1',
    status: 'Critical',
    crop: 'Soybeans',
    lastUpdate: '15 min ago',
    details: [
      { label: 'Health Score', value: '62%' },
      { label: 'Production (MT)', value: '90' },
      { label: 'Water Status', value: 'Low' },
    ],
  },
  {
    name: 'Farm 4',
    province: 'Province 1',
    status: 'Healthy',
    crop: 'Corn',
    lastUpdate: '12 min ago',
    details: [
      { label: 'Health Score', value: '91%' },
      { label: 'Production (MT)', value: '140' },
      { label: 'Water Status', value: 'Normal' },
    ],
  },
  {
    name: 'Farm 5',
    province: 'Province 2',
    status: 'Attention',
    crop: 'Wheat',
    lastUpdate: '22 min ago',
    details: [
      { label: 'Health Score', value: '75%' },
      { label: 'Production (MT)', value: '110' },
      { label: 'Water Status', value: 'Normal' },
    ],
  },
  {
    name: 'Farm 6',
    province: 'Province 2',
    status: 'Healthy',
    crop: 'Soybeans',
    lastUpdate: '8 min ago',
    details: [
      { label: 'Health Score', value: '93%' },
      { label: 'Production (MT)', value: '145' },
      { label: 'Water Status', value: 'Normal' },
    ],
  },
  {
    name: 'Farm 7',
    province: 'Province 2',
    status: 'Critical',
    crop: 'Corn',
    lastUpdate: '20 min ago',
    details: [
      { label: 'Health Score', value: '55%' },
      { label: 'Production (MT)', value: '80' },
      { label: 'Water Status', value: 'Low' },
    ],
  },
  {
    name: 'Farm 8',
    province: 'Province 2',
    status: 'Attention',
    crop: 'Wheat',
    lastUpdate: '16 min ago',
    details: [
      { label: 'Health Score', value: '70%' },
      { label: 'Production (MT)', value: '100' },
      { label: 'Water Status', value: 'Normal' },
    ],
  },
] satisfies Farm[]
