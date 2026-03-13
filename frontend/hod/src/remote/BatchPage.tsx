import React from 'react'
import { Provider } from 'react-redux'
import Batchmanagement from '../pages/batches/BatchManagement'
import store from '../store/store'

const BatchPage:React.FC = () => {
  return (
    <>
        <Provider store={store}>
            <Batchmanagement/>
        </Provider>
    </>
  )
}

export default BatchPage