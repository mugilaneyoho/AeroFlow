import React from 'react'
import TopStatsGallery from '../components/common/TopStats'
import { statData } from '../dummyData/financeAndFees'
import StudentSearch from '../components/common/StudentSearch'
import FeesStatus from '../components/financeAndFees/FeesStatus'

const FinanceAndFees = () => {
  return (
    <div>
      <div>
        <h1 className='font-bold text-black text-xl'>Finance and Fees</h1>
        <h4 className='font-normal text-[#605E5E]'>Comprehensive control and monitoring of all institute operations</h4>
      </div>
      <TopStatsGallery data={statData} />
      <StudentSearch />
      <FeesStatus />
    </div>
  )
}

export default FinanceAndFees