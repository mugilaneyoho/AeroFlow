// import { Suspense, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import React from 'react'
import AppRoute from './approute/AppRoute'
import { Provider } from 'react-redux'
import {store} from "./store/store"

function App() {
  return (
    <>  
     <BrowserRouter>
     <Provider store={store}>
     <AppRoute/>
     </Provider>
     </BrowserRouter>
    </>
  )
}

export default App
