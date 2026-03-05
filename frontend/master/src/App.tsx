// import { Suspense, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import React from 'react'
import AppRoute from './approute/AppRoute'

function App() {
  return (
    <>  
     <BrowserRouter>
     <AppRoute/>
     </BrowserRouter>
    </>
  )
}

export default App
