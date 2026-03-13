import React, { Suspense } from 'react'

const TeleCaling = () => {

  const loadRemote = () =>
    import("telecaller/telecallers")
      .then((module) => module)
      .catch(() => ({
        default: () => <div>Course module unavailable</div>
      }));

  const TeleCaller = React.lazy(loadRemote)

  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <TeleCaller />
      </Suspense>
    </>
  )
}

export default TeleCaling
