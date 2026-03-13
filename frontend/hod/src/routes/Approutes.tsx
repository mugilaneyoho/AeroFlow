
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Dashboard from '../pages/dashboard/Dashboard'
import Course from '../pages/course/Course'
import Student from '../pages/student/Student'
import Staff from '../pages/staff/Staff'
import Batchmanagement from '../pages/batches/BatchManagement'
import ClassesManagement from '../pages/classes/ClassesManagement'
import LoginPage from '../pages/login/LoginPage'
import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'

const Approutes:React.FC = () => {
  return (
   <>
   <Routes>

  <Route element={<PublicRoute />}>
    <Route path="/login" element={<LoginPage />} />
  </Route>

  <Route element={<ProtectedRoute />}>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="/course" element={<Course />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/student" element={<Student />} />
      <Route path="/batches" element={<Batchmanagement />} />
      <Route path="/classes" element={<ClassesManagement />} />
    </Route>
  </Route>

</Routes>
    </>
  )
}

export default Approutes