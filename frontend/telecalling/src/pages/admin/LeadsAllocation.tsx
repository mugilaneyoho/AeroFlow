import React, { useRef, useState } from 'react'
import Dropdown from '../../components/ui/DropDown'
import search from '../../assets/search-normal.png'
import LeadsTabel from '../../features/leads/LeadsTabel'
import upload from '../../assets/upload.png'
import addlead from '../../assets/addlead.png'
import { useAssignLeadsMutation, useGetEmployeeStatusQuery, useUploadLeadsMutation } from '../../services/api'
import ArrayDropDown from '../../components/ui/ArrayDropDown'
import TeleCallerStatsCard from '../../components/ui/TeleCallerStatsCard'


const LeadsAllocation:React.FC = () => {

  const [Tabs, setTabs] = useState<string>('tele');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const countInput = useRef<HTMLInputElement | null>(null);
  const [selectTele, setselectTele] = useState<string[] | never[]>([]);
  const [assignLeads,{isLoading}] = useAssignLeadsMutation()

  const {data} = useGetEmployeeStatusQuery('')

  console.log(data,'employee')


  const [uploadLeads] = useUploadLeadsMutation()

  const handelDivClick=()=>{
    fileInputRef?.current?.click();
  };

  const handelFileChange=async(event:React.ChangeEvent<HTMLInputElement>)=>{
    const file = event?.target?.files?.[0];

    if (!file) return;

    const formData = new FormData()

    formData.append("file",file)

    if (file) {
      console.log('file selected')
    }

    await uploadLeads(formData);

  }

  const TabSwitch = (tab:string)=>{
    setTabs(tab)
  }

  const AssignLeads = () =>{
    assignLeads({userid: selectTele, count: countInput?.current?.value })
    console.log(isLoading)
  }

  return (
    <div className='flex flex-col gap-5'>
      <div>
        <p className='font-semibold text-2xl'>Lead Allocation</p>
        <p className='text-xl text-[#595555]'>Allocate leads to tele-callers</p>
      </div>

      <div className='w-full flex flex-col shadow-[0px_4px_14px_0px_#00000040] rounded-lg p-4 gap-2'>
        <p className='font-semibold text-xl'>Allocate Leads</p>
        <div className='grid grid-cols-2 w-full gap-5'>
          <div> 
            <p className='font-medium'>Select Tele-Caller</p>
          <ArrayDropDown setSelectedProps={setselectTele} />
          </div>
          <div>
            <p className='font-medium'>Number Of Leads</p>
            <input type="number"
              ref={countInput}
             className='border border-[#79747E] bg-[#F5F5F5] w-full text-lg p-1 px-2 rounded-lg placeholder:font-medium' placeholder='Enter Number'/>
          </div>
        </div>
        <div className='grid grid-cols-2 w-full gap-5'>
          <div onClick={AssignLeads} className='flex justify-center gap-3 items-center p-2 rounded-lg border border-[#79747E] bg-[#1F338C] text-white cursor-pointer'>
            <img src={addlead} alt="" />
            <p>Allocate Leads</p>
          </div>
          <div className='flex justify-center gap-3 items-center p-2 rounded-lg border border-[#79747E] cursor-pointer' onClick={handelDivClick}>
            <img src={upload} alt="" />
            <p className='text-[#1F338C]'>Upload Leads</p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handelFileChange}
              accept=".csv"
              className="hidden"
            />
          </div>
        </div>
      </div>

      <div className='w-1/2 grid grid-cols-2 gap-5'>
        <div onClick={()=>TabSwitch('tele')} className='flex justify-center text-[#1F338C] py-2 rounded-lg border border-solid border-[#79747E]'>
          <p>Tele-Callers</p>
        </div>
        <div onClick={()=>TabSwitch('leads')} className='flex justify-center bg-[#1F338C] py-2 rounded-lg border border-solid border-[#79747E] text-white'>
          <p>All Leads</p>
        </div>
      </div>

      <div className='w-full flex flex-row  gap-10'>
        <div className='flex flex-row gap-2 items-center border border-solid border-[#716F6F] rounded-lg w-1/2 px-2'>
          <img src={search} alt="" className='w-6 h-6'/>
          <input 
            type="text" 
            className='text-xl p-2 w-full focus:outline-none'
            placeholder='Search..'
          />
        </div>
        <div>
          <Dropdown/>
        </div>
      </div>

      <div>
        {
          Tabs === 'tele' ? <div className='flex flex-col gap-5'>
            <p className='font-semibold text-2xl'>Tele-Callers</p>
            <div className='flex flex-col h-[90vh] gap-5 w-full overflow-y-scroll' style={{scrollbarWidth:'none'}}>
              {
                data?.data?.map((tele:any,index:number)=>(<div key={index}>
                  <TeleCallerStatsCard data={tele}/>
                </div>))
              }
            </div>
          </div> :
           <LeadsTabel/>
        }
      </div>
    </div>
  )
}

export default LeadsAllocation