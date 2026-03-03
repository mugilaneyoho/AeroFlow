// import { Suspense, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import React from 'react'
import AppRoute from './approute/AppRoute'

function App() {
  // const [count, setCount] = useState(0)
  // const TeleCaller = React.lazy(()=>import("telecaller/telecallers"))

  return (
    <>  
     {/* <Suspense fallback={<div style={{color:'white'}}>loading..</div>}>
        <TeleCaller/>
     </Suspense> */}

     <BrowserRouter>
     <AppRoute/>
     </BrowserRouter>
    </>
  )
}

export default App
