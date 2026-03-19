
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Approutes from './routes/Approutes'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ClearLocalStorage, GetLocalStorage } from './utils/helpers';
import { logout, signin } from './features/login/reducer/authSlice';
import { jwtDecode } from 'jwt-decode';
import { ToastContainer } from 'react-toastify/unstyled';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
const dispatch = useDispatch();

  useEffect(() => {
    const token = GetLocalStorage("AuthToken");
    if (!token) return;
    try 
    {
      const decoded: any = jwtDecode(token);
      const now = Date.now() / 1000; 
      if (decoded.exp < now) 
        {
        ClearLocalStorage()
        dispatch(logout());
        return;
      }
     const userData = GetLocalStorage("user");
      if (userData) 
        {
        dispatch(signin({ token, user: JSON.parse(userData) }));
      }
    } 
    catch (err)
     {
      ClearLocalStorage();
      dispatch(logout());
    }

  }, [dispatch]);

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
     <Approutes />
    </BrowserRouter>
      </> 
  )
}

export default App
