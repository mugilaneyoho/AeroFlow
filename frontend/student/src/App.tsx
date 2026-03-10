
import { AuthProvider } from "./contexts/AuthProvider"
import AppRoute from "./routes/AppRoute"

function App() {

  return (
    <>
      <AuthProvider>
      <AppRoute/>
      </AuthProvider>
    </>
  )
}

export default App
