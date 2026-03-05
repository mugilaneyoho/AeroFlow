import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import ClassesManagement from '../pages/classes/ClassesManagement'

const ClassPage:React.FC = () => {
  return (
    <>
        <Provider store={store}>
            <ClassesManagement/>
        </Provider>
    </>
  )
}

export default ClassPage