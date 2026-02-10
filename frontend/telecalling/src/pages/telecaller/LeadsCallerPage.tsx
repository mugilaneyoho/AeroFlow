import React, { useState } from 'react'
import arrrow from '../../assets/Vector.svg'
import TeleLeadsTable from '../../features/telecaller/TeleLeadsTable'
import CallerWindow from '../../features/telecaller/CallerWindow'
import logo from '../../assets/logo1.png'
import { IoCallOutline } from "react-icons/io5";

const LeadsCallerPage: React.FC = () => {
  const [calls, setcalls] = useState(false);
  return (
    <div className='w-full grid grid-cols-4 gap-5'>
      <div className='col-span-3 flex flex-col gap-5'>
        <div className='grid grid-cols-4 gap-5 h-[70vh]'>
          <div className='col-span-1 h-[70vh] flex flex-col p-4 shadow-[0px_0px_14px_0px_#2516F8_inset] rounded-2xl'>
            <p className='font-bold text-2xl' >Leads</p>
            <div className='flex flex-col gap-5 mt-5 h-[70vh] overflow-scroll' style={{scrollbarWidth:'none'}}>
              {
                Array(12).fill(null).map(() => (
                  <div className='flex items-center justify-center rounded-xl border border-solid border-[#2516F8] px-4 py-2 shadow-[0px_0px_14px_0px_#2516F8_inset]'>
                    <p>98765432135</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='col-span-3 h-ful w-full shadow-[0px_0px_14px_0px_#2516F8_inset] rounded-2xl'>
            {
              calls ? 
              <CallerWindow/>
              :
              <div className='flex flex-col justify-center items-center gap-5'>
                  <div className='shadow-[0px_0px_14px_0px_#2516F8_inset] bg-white rounded-[50%] p-5 mt-10'>
                    <img src={logo} alt="" className='w-52'/>
                  </div>

                  <p className='text-2xl font-semibold text-[#2516F8]'>Ready To Call</p>

                  <div onClick={()=>setcalls(true)} className='flex flex-row gap-2 font-medium items-center shadow-[0px_0px_14px_0px_#2516F8_inset] bg-white text-[#2516F8] cursor-pointer border border-[#FFFFFF] hover:shadow-[0px_4px_4px_0px_#1E2DFA80] hover:bg-[#2516F8] hover:border-[#2516F8] hover:text-white px-6 py-2 rounded-2xl'>
                    <IoCallOutline/>
                    <p>Start Call</p>
                  </div>
              </div>
            }
          </div>
        </div>
        <div className='shadow-[0px_0px_14px_0px_#2516F899_inset] rounded-2xl'>
          <TeleLeadsTable/>
        </div>
      </div>
      <div className='flex flex-col gap-5'>

        {/* <div className='shadow-[0px_0px_14px_0px_#76153C_inset] bg-[#FFD9E8] p-4 rounded-2xl'>
          <div className='flex flex-col gap-5 p-2'>
            <div className='flex flex-row gap-2'>
              <div className='w-5 h-5 rounded-[50%] bg-[#76153C] mt-2'></div>
              <div className='flex flex-col gap-5'>
                <p className='font-medium text-2xl text-[#76153C]'>Total Calls</p>
                <p className='font-medium text-2xl text-[#76153C]'>10</p>
              </div>
            </div>
            <p className='font-medium text-lg text-[#00000099]'>Completed</p>
          </div>
          <div className='flex flex-row justify-between border border-[#BDC2C7BF] bg-white p-2 rounded-xl'>
            <p className='text-[#76153C] font-light'>View All Leads</p>
            <img src={arrrow} alt="" className='w-5 h-5 rotate-270' />
          </div>
        </div> */}

        <div className='shadow-[0px_0px_14px_0px_#2516F8_inset] bg-[#C0BCFF] p-4 rounded-2xl'>
          <div className='flex flex-col gap-5 p-2'>
            <div className='flex flex-row gap-2'>
              <div className='w-5 h-5 rounded-[50%] bg-[#170D9A] mt-2'></div>
              <div className='flex flex-col gap-5'>
                <p className='font-medium text-2xl text-[#170D9A]'>Interested</p>
                <p className='font-medium text-2xl text-[#170D9A]'>10</p>
              </div>
            </div>
            <p className='font-medium text-lg text-[#00000099]'>Ready For Admission</p>
          </div>
          <div className='flex flex-row justify-between border border-[#BDC2C7BF] bg-white p-2 rounded-xl'>
            <p className='text-[#170D9A] font-light'>View All Leads</p>
            <img src={arrrow} alt="" className='w-5 h-5 rotate-270' />
          </div>
        </div>

        <div className='shadow-[0px_0px_14px_0px_#A613B9_inset] bg-[#D9A7EF80] p-4 rounded-2xl'>
          <div className='flex flex-col gap-5 p-2'>
            <div className='flex flex-row gap-2'>
              <div className='w-5 h-5 rounded-[50%] bg-[#8D1AAA] mt-2'></div>
              <div className='flex flex-col gap-5'>
                <p className='font-medium text-2xl text-[#76153C]'>Pending Calls</p>
                <p className='font-medium text-2xl text-[#76153C]'>10</p>
              </div>
            </div>
            <p className='font-medium text-lg text-[#00000099]'>In Queue</p>
          </div>
          <div className='flex flex-row justify-between border border-[#BDC2C7BF] bg-white p-2 rounded-xl'>
            <p className='text-[#8D1AAA] font-light'>View All Leads</p>
            <img src={arrrow} alt="" className='w-5 h-5 rotate-270' />
          </div>
        </div>

        <div className='shadow-[0px_0px_14px_0px_#C5890C_inset] bg-[#FCD688] p-4 rounded-2xl'>
          <div className='flex flex-col gap-5 p-2'>
            <div className='flex flex-row gap-2'>
              <div className='w-5 h-5 rounded-[50%] bg-[#BA820F] mt-2'></div>
              <div className='flex flex-col gap-5'>
                <p className='font-medium text-2xl text-[#A4730F]'>Waiting</p>
                <p className='font-medium text-2xl text-[#A4730F]'>10</p>
              </div>
            </div>
            <p className='font-medium text-lg text-[#00000099]'>Callback Required</p>
          </div>
          <div className='flex flex-row justify-between border border-[#BDC2C7BF] bg-white p-2 rounded-xl'>
            <p className='text-[#BA820F] font-light'>View All Leads</p>
            <img src={arrrow} alt="" className='w-5 h-5 rotate-270' />
          </div>
        </div>

        <div className='shadow-[0px_0px_14px_0px_#B91313_inset] bg-[#FEA29A80] p-4 rounded-2xl'>
          <div className='flex flex-col gap-5 p-2'>
            <div className='flex flex-row gap-2'>
              <div className='w-5 h-5 rounded-[50%] bg-[#D20F0F] mt-2'></div>
              <div className='flex flex-col gap-5'>
                <p className='font-medium text-2xl text-[#D20F0F]'>Not Interested</p>
                <p className='font-medium text-2xl text-[#D20F0F]'>10</p>
              </div>
            </div>
            <p className='font-medium text-lg text-[#00000099]'>Rejected</p>
          </div>
          <div className='flex flex-row justify-between border border-[#BDC2C7BF] bg-white p-2 rounded-xl'>
            <p className='text-[#D20F0F] font-light'>View All Leads</p>
            <img src={arrrow} alt="" className='w-5 h-5 rotate-270' />
          </div>
        </div>

        <div className='shadow-[0px_0px_14px_0px_#1AAA28_inset] bg-[#D3F9D7] p-4 rounded-2xl'>
          <div className='flex flex-col gap-5 p-2'>
            <div className='flex flex-row gap-2'>
              <div className='w-5 h-5 rounded-[50%] bg-[#1AAA28] mt-2'></div>
              <div className='flex flex-col gap-5'>
                <p className='font-medium text-2xl text-[#1AAA28]'>Admitted</p>
                <p className='font-medium text-2xl text-[#1AAA28]'>10</p>
              </div>
            </div>
            <p className='font-medium text-lg text-[#00000099]'>Joined</p>
          </div>
          <div className='flex flex-row justify-between border border-[#BDC2C7BF] bg-white p-2 rounded-xl'>
            <p className='text-[#1AAA28] font-light'>View All Leads</p>
            <img src={arrrow} alt="" className='w-5 h-5 rotate-270' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeadsCallerPage