import React from 'react'
import FilteredCards from '../../components/ui/FilteredCards'
import { useParams } from 'react-router-dom'
import { GoDownload } from "react-icons/go";
import { useGetEmployeeLeadsQuery } from '../../services/RTKQuery/CallerQueryApi';

const FilteredLeads:React.FC = () => {
  const {status} = useParams()

  const {data,isLoading,isSuccess} = useGetEmployeeLeadsQuery({uuid:'4026c9ac-40e8-4d72-ae38-14a9cf28eaac',status},{refetchOnMountOrArgChange:true})

  console.log(data)

  return (
    <div className='flex flex-col gap-8'>
      <div className='bg-[#A9F5A080] flex flex-row items-center justify-between w-full shadow-[0px_0px_14px_0px_#0AB61E_inset] py-4 px-4 rounded-2xl'>
        <div className='flex flex-row items-center gap-2'>
          <div className='bg-[#1AAA28] w-3 h-3 rounded-[50%]'></div>
          <p className='font-semibold text-2xl'>{status} Leads (20)</p>
        </div>

        <div className='border-2 border-[#716F6F] rounded-2xl p-2 text-2xl'>
           <GoDownload/>
        </div>
      </div>
      {
        data?.map((item:any)=>(
          <FilteredCards data={item}/>
        ))
      }
    </div>
  )
}

export default FilteredLeads