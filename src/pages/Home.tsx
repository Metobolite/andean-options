type HomeProps = {
  onOpenDashboard: () => void
}

function Home({ onOpenDashboard }: HomeProps) {
  return (
    <main className="home-page">
      <section className="home-panel">
        <p className="eyebrow">AndeanOptions</p>
        <h1>Regional farms workspace</h1>
        <p className="home-copy">
          Track farm health, urgent issues, production, revenue, and water status
          from one focused dashboard.
        </p>
        <button className="primary-button" type="button" onClick={onOpenDashboard}>
          Go to Dashboard
        </button>
      </section>
    </main>
  )
}

export default Home
