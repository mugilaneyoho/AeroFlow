import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/loginPage'
import DashBoard from '../pages/dashboard'
import Classes from '../pages/classes'
import Syllabus from '../pages/syllabus'
import Attendace from '../components/Attendance'
import Fees from '../components/Fees'
import { useAuth } from '../contexts/AuthUseContext'
import MainLayout from '../layout/MainLayout'
import CallerWindow from '../pages/CallerWindow'

const AppRoute: React.FC = () => {

    const { isAuthenticated } = useAuth()

    return (
        <>
            {/* {
                isAuthenticated ? */}
                    <Routes>
                        <Route path='/' element={<MainLayout />}>
                            <Route index element={<DashBoard />} />
                            <Route path='/classes' element={<Classes />} />
                            <Route path='/syllabus' element={<Syllabus />} />
                            <Route path='/attendace' element={<Attendace />} />
                            <Route path='/fees' element={<Fees />} />
                            <Route path='*' element={<Navigate to='/' />} />
                        </Route>
                        <Route path='/confrence' element={<CallerWindow />} />
                    </Routes>
                    {/* :
                    <Routes>
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='*' element={<Navigate to='/login' />} />
                    </Routes> */}
            {/* } */}
        </>
    )
}

export default AppRoute