import React, { Suspense } from 'react'

const CoursePage = () => {

  const loadRemote = () =>
    import("courses/courses")
      .then((module) => module)
      .catch(() => ({
        default: () => <div>Course module unavailable</div>
      }));

  const Course = React.lazy(loadRemote)

  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <Course />
      </Suspense>
    </>
  )
}

export default CoursePage