import React from 'react'
import { AuthProvider } from '../../contexts/AuthProvider'
import Telecaller from '../admin/Telecallers'
import { Provider } from 'react-redux'
import AdminStore from '../../store/adminStore'
import { ToastContainer } from 'react-toastify'

const TeleCallers:React.FC = () => {
  return (
    <>
        <Provider store={AdminStore}>
        <AuthProvider>
            <Telecaller/>
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
        </Provider>
    </>
  )
}

export default TeleCallers