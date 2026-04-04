import React, { Suspense } from 'react'

const CallerWindow = () => {

    const loadRemote =()=>import('onlineclass/callservice')
    .then((module)=>(module))
    .catch(()=>({
        default:()=><div>Video Confrence module unavailable</div>
    }))

    const OnlineClass = React.lazy(loadRemote)

  return (
    <>
        <Suspense fallback={<div>loading..</div>}>
            <OnlineClass/>
        </Suspense>
    </>
  )
}

export default CallerWindow