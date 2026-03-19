import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Login from './pages/Login';
import { useAuth } from './contexts/AuthUseContext';

const App = () => {
  const {isAuthenticated} = useAuth()
  return (
    <Router>
        {
          isAuthenticated ? 
        <Routes>
          <Route path="/reception" element={<Home />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<Navigate to='/reception'/>} />
        </Routes>
        :
         <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate to='/'/>} />
        </Routes>
        }
    </Router>
  );
};

export default App;