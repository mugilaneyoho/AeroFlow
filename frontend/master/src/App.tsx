import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)
  const TeleCaller = React.lazy(()=>import("telecaller/telecallers"))

  return (
    <>  
     <Suspense fallback={<div style={{color:'white'}}>loading..</div>}>
        <TeleCaller/>
     </Suspense>
    </>
  )
}

export default App
