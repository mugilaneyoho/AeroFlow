// import { Suspense, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoute from './approute/AppRoute'
import { Provider } from 'react-redux'
import { store } from "./store/store"
import { AuthProvider } from './contexts/AuthProvider'

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <AuthProvider>
            <AppRoute />
          </AuthProvider>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
