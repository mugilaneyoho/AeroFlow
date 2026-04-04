import { useState } from 'react'
import Navbar from "./components/Navbar"
import CreateTicketPage from "./pages/CreateTicketPage"
import AllTicketsPage from "./pages/AllTicketsPage"
import ResolvedTicketsPage from "./pages/ResolvedTicketsPage"

function App() {

  const [activeTab, setActiveTab] = useState('all');

  return (
    <div>
      <div className="min-h-screen bg-white rounded-xl">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="mx-5 py-4">
          {activeTab === 'all' && <AllTicketsPage />}
          {activeTab === 'created' && <CreateTicketPage />}
          {activeTab === 'resolved' && <ResolvedTicketsPage />}
        </main>
      </div>

    </div>
  )
}

export default App
