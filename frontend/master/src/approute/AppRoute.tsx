import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
// import Department from '../pages/Department'
import Admission from '../pages/Admission'
import UsersAndFaculty from '../pages/UsersAndFaculty'
import MeetingManagement from '../pages/MeetingManagement'
import TeleCaling from '../pages/TeleCaling'
import TrainingManagement from '../pages/TrainingManagement'
import StudentManagement from '../pages/StudentManagement'
import FinanceAndFees from '../pages/FinanceAndFees'
// import Placement from '../pages/Placement'
// import ReportAndAnalytics from '../pages/ReportAndAnalytics'
// import TicketManagement from '../pages/TicketManagement'
// import Notification from '../pages/Notification'
import MainLayout from '../layout/MainLayout'
import CoursePage from '../pages/CoursePage'
import BatchPage from '../pages/BatchPage'
import ClassPage from '../pages/ClassPage'
import { useAuth } from '../contexts/AuthUseContext'
import LoginPage from '../pages/LoginPage'

const AppRoute = () => {
  const { isAuthenticated } = useAuth()
  return (
    <div>
      <Routes>
        {
          isAuthenticated ?
            <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/admission" element={<Admission />} />
              {/* <Route path="/department" element={<Department />} /> */}
              <Route path="/usersandfaculty" element={<UsersAndFaculty />} />
              <Route path="/meetingmanagement" element={<MeetingManagement />} />
              <Route path="/telecalling" element={<TeleCaling />} />
              <Route path="/trainingmanagement" element={<TrainingManagement />} />
              <Route path="/course" element={<CoursePage />} />
              <Route path="/batch" element={<BatchPage />} />
              <Route path="/class" element={<ClassPage />} />
              <Route path="/studentmanagement" element={<StudentManagement />} />
              <Route path="/financeandfees" element={<FinanceAndFees />} />
              {/* <Route path="/placement" element={<Placement/>}/>
              <Route path="/reportsandanalytics" element={<ReportAndAnalytics/>}/>
              <Route path="/ticketmanagement" element={<TicketManagement/>}/>
              <Route path="/notification" element={<Notification/>}/> */}
            </Route>
            :
            <Route path='/' element={<LoginPage />} />
          }
          <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default AppRoute
