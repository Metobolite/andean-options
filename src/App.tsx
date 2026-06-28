import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import type { AppPage } from './types/app'

function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('home')

  return (
    <div className="min-h-svh">
      {currentPage === 'home' ? (
        <Home onOpenDashboard={() => setCurrentPage('dashboard')} />
      ) : (
        <Dashboard onBackHome={() => setCurrentPage('home')} />
      )}
    </div>
  )
}

export default App
