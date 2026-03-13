import React from 'react'
import { Provider } from 'react-redux'
import Course from '../pages/course/Course'
import store from '../store/store'

const CoursePage:React.FC = () => {
  return (
    <>
        <Provider store={store}>
            <Course/>
        </Provider>
    </>
  )
}

export default CoursePage