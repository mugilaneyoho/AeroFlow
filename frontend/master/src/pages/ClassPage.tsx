import React, { Suspense } from 'react'

const ClassPage = () => {
  const loadRemote = () =>
    import("classes/classes")
      .then((module) => module)
      .catch(() => ({
        default: () => <div>class module unavailable</div>
      }));

  const Classes = React.lazy(loadRemote)

  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <Classes />
      </Suspense>
    </>
  )
}

export default ClassPage