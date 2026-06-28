import {
  attentionItems,
  criticalIssues,
  farms,
  trendingStats,
} from '../data/dashboard'

type DashboardProps = {
  onBackHome: () => void
}

type DashboardIcon =
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

const navItems: Array<{
  label: string
  href: string
  icon: DashboardIcon
  active?: boolean
}> = [
  { label: 'Overview', href: '#overview', icon: 'home', active: true },
  { label: 'Farms', href: '#farm-status-heading', icon: 'farms' },
  { label: 'Alerts', href: '#priority-items', icon: 'bell' },
  { label: 'Reports', href: '#trending-heading', icon: 'reports' },
  { label: 'Settings', href: '#overview', icon: 'settings' },
]

function Dashboard({ onBackHome }: DashboardProps) {
  return (
    <main className="farm-dashboard">
      <aside className="farm-sidebar" aria-label="Primary navigation">
        <div className="farm-brand">
          <DashboardIcon name="sprout" />
          <strong>Andean Options</strong>
        </div>

        <nav className="farm-nav">
          {navItems.map((item) => (
            <a className={item.active ? 'active' : undefined} href={item.href} key={item.label}>
              <DashboardIcon name={item.icon} />
              <span>{item.label}</span>
              {item.label === 'Alerts' && <strong className="nav-badge">5</strong>}
            </a>
          ))}
        </nav>

        <div className="sidebar-spacer" />

        <div className="farm-counts" aria-label="Farm totals">
          <div>
            <strong>8</strong>
            <span>Farms</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Provinces</span>
          </div>
        </div>

        <button className="logout-button" type="button" onClick={onBackHome}>
          <DashboardIcon name="logout" />
          <span>Logout</span>
        </button>
      </aside>

      <section className="farm-workspace" id="overview">
        <header className="farm-header">
          <div>
            <h1>Regional Farms Dashboard</h1>
            <p>Check your farm status</p>
          </div>

          <div className="header-actions">
            <label className="search-field">
              <DashboardIcon name="search" />
              <input placeholder="Search farms, tasks, alerts..." type="search" />
            </label>
            <button className="profile-button" type="button" aria-label="Open profile menu">
              <span>RD</span>
              <DashboardIcon name="chevron" />
            </button>
          </div>
        </header>

        <section className="dashboard-content">
          <section className="priority-grid" id="priority-items" aria-label="Priority items">
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

          <section className="dashboard-section" aria-labelledby="trending-heading">
            <h2 id="trending-heading">Trending</h2>
            <div className="trend-grid">
              {trendingStats.map((stat) => (
                <article className="trend-card" key={stat.label}>
                  <DashboardIcon name="image" />
                  <div>
                    <h3>{stat.label}</h3>
                    <div className="trend-value">
                      <strong>{stat.value}</strong>
                      <span className={stat.trend}>{stat.change}</span>
                    </div>
                    <p>{stat.helper}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="dashboard-section" aria-labelledby="farm-status-heading">
            <h2 id="farm-status-heading">Farm Status Overview</h2>
            <div className="farm-grid">
              {farms.map((farm) => (
                <article className="farm-card" key={farm.name}>
                  <DashboardIcon name="image" />
                  <div className="farm-card-body">
                    <div className="farm-card-header">
                      <div>
                        <h3>{farm.name}</h3>
                        <p>{farm.province}</p>
                      </div>
                      <span className={`status-pill ${farm.status.toLowerCase()}`}>
                        {farm.status}
                      </span>
                    </div>

                    <dl className="farm-details">
                      <div>
                        <dt>Health Score</dt>
                        <dd>{farm.healthScore}</dd>
                      </div>
                      <div>
                        <dt>Production (MT)</dt>
                        <dd>{farm.production}</dd>
                      </div>
                      <div>
                        <dt>Water Status</dt>
                        <dd>{farm.waterStatus}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>
      </section>
    </main>
  )
}

type PriorityPanelProps = {
  actionLabel: string
  count: number
  items: typeof criticalIssues
  subtitle: string
  title: string
  variant: 'attention' | 'critical'
}

function PriorityPanel({
  actionLabel,
  count,
  items,
  subtitle,
  title,
  variant,
}: PriorityPanelProps) {
  return (
    <article className={`priority-panel ${variant}`}>
      <div className="priority-header">
        <div className="priority-title">
          <DashboardIcon name={variant === 'critical' ? 'alert' : 'bell'} />
          <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
        <span>{count}</span>
      </div>

      <div className="priority-list">
        {items.map((item) => (
          <a className="priority-item" href="#farm-status-heading" key={`${item.farm}-${item.title}`}>
            <DashboardIcon name="image" />
            <div>
              <h3>
                {item.farm} - {item.title}
              </h3>
              <p>{item.description}</p>
            </div>
            <time>{item.time}</time>
            <DashboardIcon name="chevron" />
          </a>
        ))}
      </div>

      <button className="panel-link-button" type="button">
        {actionLabel}
      </button>
    </article>
  )
}

function DashboardIcon({ name }: { name: DashboardIcon }) {
  return (
    <svg className={`dashboard-icon ${name}-icon`} viewBox="0 0 24 24" aria-hidden="true">
      {name === 'alert' && (
        <>
          <path d="M12 3 2.9 19h18.2L12 3Z" />
          <path d="M12 8v5" />
          <path d="M12 17h.01" />
        </>
      )}
      {name === 'bell' && (
        <>
          <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" />
          <path d="M10 21h4" />
        </>
      )}
      {name === 'chevron' && <path d="m9 18 6-6-6-6" />}
      {name === 'farms' && (
        <>
          <path d="M4 20V9l8-5 8 5v11" />
          <path d="M9 20v-6h6v6" />
          <path d="M4 12h16" />
        </>
      )}
      {name === 'home' && (
        <>
          <path d="M3 11 12 4l9 7" />
          <path d="M6 10v10h12V10" />
          <path d="M10 20v-6h4v6" />
        </>
      )}
      {name === 'image' && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="m8 14 2.5-3 3 4 2-2.5L20 18" />
          <path d="M8.5 8.5h.01" />
        </>
      )}
      {name === 'logout' && (
        <>
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <path d="M16 17l5-5-5-5" />
          <path d="M21 12H9" />
        </>
      )}
      {name === 'reports' && (
        <>
          <path d="M5 4h14v16H5z" />
          <path d="M8 9h8" />
          <path d="M8 13h8" />
          <path d="M8 17h5" />
        </>
      )}
      {name === 'search' && (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </>
      )}
      {name === 'settings' && (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M19 12a7.2 7.2 0 0 0-.1-1l2-1.5-2-3.5-2.4 1a7 7 0 0 0-1.8-1L14.4 3h-4.8L9.3 6a7 7 0 0 0-1.8 1L5.1 6l-2 3.5 2 1.5a7.2 7.2 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a7 7 0 0 0 1.8 1l.3 3h4.8l.3-3a7 7 0 0 0 1.8-1l2.4 1 2-3.5-2-1.5c.1-.3.1-.7.1-1Z" />
        </>
      )}
      {name === 'sprout' && (
        <>
          <path d="M5 19c7.5-.5 12-5 13-13-8 .8-12.5 5-13 13Z" />
          <path d="M5 19c2.5-4.5 6-7.7 10.5-9.5" />
          <path d="M10 5c-3.7.2-6.2 2.2-7 6 3.4-.1 5.8-1.5 7-4.2" />
        </>
      )}
    </svg>
  )
}

export default Dashboard
