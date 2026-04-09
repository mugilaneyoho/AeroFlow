import { useState } from 'react'
import Navbar from "./components/Navbar"
import CreateTicketPage from "./pages/CreateTicketPage"
import AllTicketsPage from "./pages/AllTicketsPage"
import ResolvedTicketsPage from "./pages/ResolvedTicketsPage"

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [previousTab, setPreviousTab] = useState('all'); 

  const openCreateTicket = () => {
    setPreviousTab(activeTab); 
    setActiveTab('created'); 
  };

  return (
    <div>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openCreateTicket={openCreateTicket}
      />

      <main className="mx-5 py-4">
        {activeTab === 'all' && <AllTicketsPage />}
        {activeTab === 'created' && (
          <CreateTicketPage
            setActiveTab={setActiveTab}
            previousTab={previousTab}
          />
        )}
        {activeTab === 'resolved' && <ResolvedTicketsPage />}
      </main>
    </div>
  );
}


export default App 
