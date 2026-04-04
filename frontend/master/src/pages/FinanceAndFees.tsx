import { useState, useEffect } from 'react'
import TopStatsGallery from '../components/common/TopStats'
import card1 from '../../src/assets/fees/Container (8).png'
import card2 from '../../src/assets/fees/Container (9).png'
import card3 from '../../src/assets/fees/Container (10).png'
import card4 from '../../src/assets/fees/Container (11).png'
import FeesStatus from '../components/financeAndFees/FeesStatus'
import { useDispatch, useSelector } from 'react-redux'
import { getFeesThunk } from '../features/fees/reducer/thunk'
import type { AppDispatch } from '../store/store'
import { Search } from 'lucide-react'

const FinanceAndFees = () => {
  const [searchText, setSearchText] = useState("")
  const [selectCourse, setSelectCourse] = useState("ALL COURSES")
  const [selectStatus, setSelectStatus] = useState("ALL STATUS")

  const payments = useSelector((state: any) => state.fees.payments || [])
  const stats = useSelector((state: any) => state.fees.stats)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getFeesThunk())
  }, [dispatch])

  const filteredFees = payments.filter((item:{name:string; course:string; status:string; studentID: string;})=>{
    const matchSearch = item.name.toLowerCase().includes(searchText.toLowerCase()) || 
    item.course.toLowerCase().includes(searchText.toLowerCase()) || 
    item.status.toLowerCase().includes(searchText.toLowerCase()) || 
    item.studentID.toLowerCase().includes(searchText.toLowerCase())
    const matchCourse = selectCourse === "ALL COURSES" || item.course.toLowerCase() === selectCourse.toLowerCase()
    const matchStatus = selectStatus === "ALL STATUS" || item.status.toLowerCase() === selectStatus.toLowerCase()
    return matchSearch && matchCourse && matchStatus
  })

  return (
    <div>
      <div>
        <h1 className='font-bold text-black text-xl'>Finance and Fees</h1>
        <h4 className='font-normal text-[#605E5E]'>Comprehensive control and monitoring of all institute operations</h4>
      </div>
      <TopStatsGallery data={[
        {id: 1, icon: card1, title: "Today's Collection", value: stats?.todayCollection?.toString() },
        {id: 2, icon: card2, title: "Total Collected", value: stats?.totalCollected?.toString() },
        {id: 3, icon: card3, title: "Total Pending", value: stats?.totalPending?.toString() },
        {id: 4, icon: card4, title: "Overdue Students", value: stats?.overdueStudents?.toString()}
      ]} />

      <div className="flex flex-1 gap-4 shadow-[0px_0px_15px_0px_#0000001A] rounded-md p-2 my-3">
        <div className="flex-5 relative">
          <h1 className="font-bold text-black">Search</h1>
          <div className="absolute mt-4 mx-2">
            <Search className="text-gray-400" />
          </div>
          <input type="text" placeholder="Search by Student ID, name, status, course etc..."
            value={searchText} onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 border border-black rounded-lg py-2 px-4 focus:outline-none w-80 my-2" />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-black">Course</h1>
          <select value={selectCourse} onChange={(e) => setSelectCourse(e.target.value)}
            className="border border-black rounded-lg py-2 px-4 focus:outline-none my-2 cursor-pointer">
            <option value="ALL COURSES">All Courses</option>
            <option value="FULL STACK DEVELOPMENT">Full Stack Development</option>
          </select>
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-black">Status</h1>
          <select value={selectStatus} onChange={(e) => setSelectStatus(e.target.value)}
            className="border border-black rounded-lg py-2 px-4 focus:outline-none my-2 cursor-pointer">
            <option value="ALL STATUS">All Status</option>
            <option value="PAID">Paid</option>
            <option value="OVERDUE">Overdue</option>
          </select>
        </div>
      </div>

      <FeesStatus payments={filteredFees} />
    </div>
  )
}

export default FinanceAndFees