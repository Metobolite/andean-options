import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

type AppPage = 'home' | 'dashboard'

function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('home')

  return (
    <div className="app">
      {currentPage === 'home' ? (
        <Home onOpenDashboard={() => setCurrentPage('dashboard')} />
      ) : (
        <Dashboard onBackHome={() => setCurrentPage('home')} />
      )}
    </div>
  )
}

export default App
