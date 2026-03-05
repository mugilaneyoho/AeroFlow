import { BrowserRouter } from "react-router-dom"
import AppRoute from "./router/Approute"
import { AuthProvider } from "./contexts/AuthProvider"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <div className="fonts">
      <BrowserRouter>
        <AuthProvider>
          <AppRoute />
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
      </BrowserRouter>
    </div>
  )
}

export default App
