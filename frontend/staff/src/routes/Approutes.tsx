
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Dashboard from '../pages/dashboard/Dashboard'
import Classes from '../pages/classes/Classes'
// import MarkAttendance from '../component/classes/ongoing&upcoming/MarkAttendance'
import ViewAttendance from '../component/classes/completeclasses/ViewAttendance'
import Attendance from '../pages/attendance/Attendance'
import Syllabus from '../pages/syllabus/Syllabus'
import LoginPage from '../pages/login/LoginPage'
// import PublicRoute from './PublicRoutes'
// import ProtectedRoute from './Protectedroutes'
import ClassWindow from '../pages/classes/ClassWindow'
import TicketSystem from '../pages/ticket/TicketSystem'
import { useAuth } from '../context/AuthUseContext'


const Approutes: React.FC = () => {
   const { isAuthenticated } = useAuth();

  return (
   
      <Routes>

      {isAuthenticated ? (
        <>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="classes" element={<Classes />} />
            <Route path="markattendance" element={<Attendance />} />
            <Route path="viewattendance" element={<ViewAttendance />} />
            <Route path="syllabus" element={<Syllabus />} />
            <Route path="ticket" element={<TicketSystem />} />
          </Route>

          <Route path="/onlineclass" element={<ClassWindow />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}

    </Routes>
  );
}

export default Approutes