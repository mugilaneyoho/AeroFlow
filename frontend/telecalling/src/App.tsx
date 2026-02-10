import { BrowserRouter } from "react-router-dom"
import AppRoute from "./router/Approute"
import { AuthProvider } from "./contexts/AuthProvider"

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
         <AppRoute />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
