import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reception" element={<Home />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="*" element={<div className="p-10">Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;