import { Routes, Route, } from "react-router-dom"
import Classes from "./pages/classes"
import Syllabus from "./pages/syllabus"
import Attendace from "./pages/attendance"
import Fees from "./pages/fees"
import LoginPage from "./pages/loginPage"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (

    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route >
        <Route path="/classes" element={<Classes />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/attendance" element={<Attendace />} />
        <Route path="/fees" element={<Fees />} />
      </Route>
    </Routes>

  )
}

export default App
