export const criticalIssues = [
  {
    farm: 'Farm 3',
    title: 'Irrigation Failure',
    description: 'Irrigation system stopped working',
    time: 'Today, 6:15 AM',
  },
  {
    farm: 'Farm 7',
    title: 'Disease Risk Detected',
    description: 'High risk of disease',
    time: 'Today, 5:40 AM',
  },
]

export const attentionItems = [
  {
    farm: 'Farm 2',
    title: 'Feed Inventory Low',
    description: 'Feed will last 2 days',
    time: 'Today, 6:15 AM',
  },
  {
    farm: 'Farm 5',
    title: 'Maintenance Due',
    description: 'Tractor maintenance overdue',
    time: 'Today, 5:40 AM',
  },
  {
    farm: 'Farm 8',
    title: 'Production Below Target',
    description: '15% below monthly target',
    time: 'Today, 5:40 AM',
  },
]

export const trendingStats = [
  {
    label: 'Farm Health Score',
    value: '78%',
    change: '+4%',
    trend: 'positive',
    helper: 'vs last 7 days',
  },
  {
    label: 'Production (MT)',
    value: '1,243',
    change: '+12%',
    trend: 'positive',
    helper: 'vs last 7 days',
  },
  {
    label: 'Revenue (EUR)',
    value: 'EUR 75,250',
    change: '+8%',
    trend: 'positive',
    helper: 'vs last 7 days',
  },
  {
    label: 'Water Usage',
    value: '-12%',
    change: '-10%',
    trend: 'negative',
    helper: 'vs last 7 days',
  },
]

export const farms = [
  {
    name: 'Farm 1',
    province: 'Province 1',
    status: 'Healthy',
    healthScore: '95%',
    production: '156',
    waterStatus: 'Normal',
  },
  {
    name: 'Farm 2',
    province: 'Province 1',
    status: 'Attention',
    healthScore: '82%',
    production: '120',
    waterStatus: 'Normal',
  },
  {
    name: 'Farm 3',
    province: 'Province 1',
    status: 'Critical',
    healthScore: '62%',
    production: '90',
    waterStatus: 'Low',
  },
  {
    name: 'Farm 4',
    province: 'Province 1',
    status: 'Healthy',
    healthScore: '91%',
    production: '140',
    waterStatus: 'Normal',
  },
  {
    name: 'Farm 5',
    province: 'Province 2',
    status: 'Attention',
    healthScore: '75%',
    production: '110',
    waterStatus: 'Normal',
  },
  {
    name: 'Farm 6',
    province: 'Province 2',
    status: 'Healthy',
    healthScore: '93%',
    production: '145',
    waterStatus: 'Normal',
  },
  {
    name: 'Farm 7',
    province: 'Province 2',
    status: 'Critical',
    healthScore: '55%',
    production: '80',
    waterStatus: 'Low',
  },
  {
    name: 'Farm 8',
    province: 'Province 2',
    status: 'Attention',
    healthScore: '70%',
    production: '100',
    waterStatus: 'Normal',
  },
]
