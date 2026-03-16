
import { ToastContainer } from "react-toastify"
import { AuthProvider } from "./contexts/AuthProvider"
import AppRoute from "./routes/AppRoute"

function App() {

  return (
    <>
      <AuthProvider>
      <AppRoute/>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
      </AuthProvider>
    </>
  )
}

export default App
