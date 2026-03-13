import React, { Suspense } from 'react'

const BatchPage = () => {

  const loadRemote = () =>
    import("batches/batches")
      .then((module) => module)
      .catch(() => ({
        default: () => <div>class module unavailable</div>
      }));

  const Batches = React.lazy(loadRemote)

  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <Batches />
      </Suspense>
    </>
  )
}

export default BatchPage