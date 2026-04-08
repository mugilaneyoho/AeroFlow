
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Approutes from './routes/Approutes'
import { ToastContainer } from 'react-toastify/unstyled';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthProvider';

function App() {
 
  return (
  <>
     <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="light"
        />
    <BrowserRouter>
     <AuthProvider>
          <Approutes />
     </AuthProvider>
    
    </BrowserRouter>
      </> 
  )
}

export default App
