import type { Farm, PriorityItem, TrendingStat } from '../types/dashboard'

export const criticalIssues = [
  {
    farm: 'Farm 3',
    title: 'Irrigation Failure',
    description: 'Affects 90 MT production - Water status low',
    time: 'Today, 6:15 AM',
  },
  {
    farm: 'Farm 7',
    title: 'Disease Risk Detected',
    description: 'High disease risk - Health score dropped to 55%',
    time: 'Today, 5:40 AM',
  },
] satisfies PriorityItem[]

export const attentionItems = [
  {
    farm: 'Farm 2',
    title: 'Feed Inventory Low',
    description: 'Feed will last 2 days - order today',
    time: 'Today, 6:15 AM',
  },
  {
    farm: 'Farm 5',
    title: 'Maintenance Due',
    description: 'Tractor maintenance overdue - assign technician',
    time: 'Today, 5:40 AM',
  },
  {
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
] satisfies Farm[]
