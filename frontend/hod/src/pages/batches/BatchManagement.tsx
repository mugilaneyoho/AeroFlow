import React, { useEffect, useState } from 'react'
import { COLORS, FONTS } from '../../constant'
import plusicon from '../../assets/Dashboard/plus.png'
import bookicon from '../../assets/icons/bookicon.png'
import timeicon from '../../assets/icons/clockicon.png'
import duration from '../../assets/icons/attendanceicon.png'
import designarrow from '../../assets/batchs/designarrow.png'
import editicon from '../../assets/course/edit.png'
import deleteicon from '../../assets/course/delete.png'
import CreateBatch from '../../components/batchManagement/CreateBatch'
import EditBatch from '../../components/batchManagement/EditBatch'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteBatchThunk, GetAllBatchThunk } from '../../features/batchpage/reducer/thunk'
import type { AppDispatch } from '../../store/store'
import { GetAllBatch } from '../../features/batchpage/reducer/selector'


// const stat = [
//     {
//         available:"Online",
//         status:"In Active",
//         topic:"FSWD-JAN-2026",
//         job:"Full Stack Web Development",
//         id:"BTH001",
//         time:"10:00 AM - 1:00PM",
//         duration:"6 months",
//         startDate:"1/5/2026",
//         EndDate:"1/6/2026",
//         studentRnroll:"25/30",
//         percentage:"83"
//     },
//     {
//         available:"Offline",
//         status:"Active",
//         topic:"DSML-FEB-2026",
//         job:"Data Science & Machine Learning",
//         id:"BTH002",
//         time:"2:00 AM - 5:00PM",
//         duration:"8 months",
//         startDate:"2/1/2026",
//         EndDate:"9/30/2026",
//         studentRnroll:"15/30",
//         percentage:"38"
//     },
//     {
//         available:"Online",
//         status:"Active",
//         topic:"DSML-FEB-2026",
//         job:"Data Science & Machine Learning",
//         id:"BTH002",
//         time:"2:00 AM - 5:00PM",
//         duration:"8 months",
//         startDate:"2/1/2026",
//         EndDate:"9/30/2026",
//         studentRnroll:"15/30",
//         percentage:"38"
//     }
// ]




const Batchmanagement:React.FC = () => {
        const [openCreate,setOpenCreate] =useState(false)
        const [openEdit,setOpenEdit] = useState(false)
        const [selectBatch , setSelectBatch] = useState<any>(null)
        
        const dispatch = useDispatch<AppDispatch>()

        const batches= useSelector(GetAllBatch)
       const [page, setPage] = useState(1);
       const limit = 6;
      const [lastBatchCount, setLastBatchCount] = useState(0);
      const totalPage = lastBatchCount < limit ? page : page + 1;

        useEffect(() => {
  const fetchData = async () => {
    const batches = await dispatch(GetAllBatchThunk(page, limit));
    setLastBatchCount(batches.length);
  };
  fetchData();
}, [dispatch, page]);
 
    
        
  return (
    <div className=''>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
        <div>
          <h1 style={{ ...FONTS.tittle, color: COLORS.primary_blue }}>
            Batch Management
          </h1>
          <p style={{ color: COLORS.primary_blue }}>
            Create batches and allocate students
          </p>
        </div>
        <button onClick={()=>setOpenCreate(true)}
          className="flex gap-1 items-center px-3 py-2 rounded-[10px] hover:opacity-90 transition"
          
          style={{ backgroundColor: COLORS.primary_blue, color: COLORS.secondary_white }}
        >
          <img src={plusicon} alt="plus" className="w-5 h-5" />
          Create Batches
        </button>
      </div>
      
        <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4  rounded-[10px] shadow-sm bg-white text-sm">
             {batches?.map((data:any,index:any)=>(
                <div key={index}>
                      <div className='shadow-[0px_0px_14px_0px_#2D216140] p-2 rounded-[10px]'>
                          <div>
                             <p className='p-1 inline rounded-[5px]' 
                             style={{
                                    background: data.batch_mode === "ONLINE" ?  COLORS.bg_light_green:COLORS.bg_red ,
                                    color:  COLORS.secondary_white, 
                                  }}
                                  >
                                    {data.batch_mode}
                                </p>
                          </div> 
                          <div>
                             <div className='flex justify-between pt-2 pb-2'>
                                <h1 style={{color:COLORS.bg_blue,...FONTS.header}}>{data.batch_name}</h1>
                                <p className='bg-[#D9D9D9] px-1 py-2 rounded-[5px] '
                                style={{
                                      background:
                                            data.status === "Active" ? COLORS.bg_light_green :
                                            data.status === "In Active" ? COLORS.bg_gray : "#fff",
                                      color:
                                            data.status === "Active" ? COLORS.secondary_white :
                                            data.status === "In Active" ? COLORS.bg_black : COLORS.bg_black,
                                    }}
                                      > 
                                        {data.status}
                                        </p>
                             </div>
                             <div>
                                <p className='flex gap-2 pb-2'><img src={bookicon} alt='bookicon' />{data.batch_name}</p> 
                                 <p>{data.id}</p>
                             </div>
                          </div>

                          <div className='flex gap-2 pt-2 pb-2 '>
                               <div className='shadow-[0px_0px_14px_0px_#2D216140] p-2 rounded-[5px] w-full'>
                                    <p className='flex flex-col sm:flex-row gap-2 text-sm'><img src={timeicon} alt='time' className='w-5 ' />Timing</p>
                                    <p>{data.classStartTime  ? new Date(data.classStartTime).toLocaleTimeString() : "-"}</p>
                               </div>
                                <div className='shadow-[0px_0px_14px_0px_#2D216140] p-2 rounded-[5px] w-full'>
                                    <p className='flex flex-col sm:flex-row gap-2 text-sm'><img src={duration} alt='time' className='w-5 ' />Duration</p>
                                    <p>{data.classEndTime  ? new Date(data.classEndTime).toLocaleTimeString() : "-"}</p>
                                </div>
                          </div>

                          <div className='grid items-center justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 shadow-[0px_0px_14px_0px_#2D216140] p-2 rounded-[5px] mb-2'>
                            <div>
                                <p className='text-sm'>Start Date</p>
                                <p>{data.startDate ? new Date(data.startDate).toLocaleDateString() : "-"}</p>
                            </div>
                              <img src={designarrow} alt='designarrow' />
                               <div>
                                <p className='text-sm'>End Date</p>
                                <p>{data.endDate ? new Date(data.endDate).toLocaleDateString() : "-"}</p>
                            </div>
                          </div>

                           <div className='pt-2'>
                               <div className='flex justify-between'>
                                   <p>Students Enrolled</p>
                                   <p>{data.total_seats}</p>
                               </div>
                        <div>
                          <div className="rounded w-full h-2 bg-[#D9D9D9] relative">
                          <div className="h-2 rounded " style={{ width: `${data.total_seats}%`,
                              background: "linear-gradient(90deg, #5F6BBA 0%, #791B5A 100%)"
                          }}/>
                          </div>
                       </div> 
                    <div>{data.total_seats}%</div>
                           </div>
            <div className="flex gap-2 mt-auto pt-3">
                <button
                   onClick={()=>{
                    setSelectBatch(data)
                     setOpenEdit(true)
                    }}
                    className="flex-1 flex items-center justify-center gap-1 text-white rounded text-sm p-1" style={{background:COLORS.bg_light_green}}
                 >
            <img src={editicon} alt='edit' />
          Edit
        </button>
        <button onClick={()=>dispatch(DeleteBatchThunk(data.uuid, page, limit))}
        className="flex-1 flex items-center justify-center gap-1 text-white rounded text-sm p-1" style={{background:COLORS.bg_red}}>
         <img src={deleteicon} alt='delete' /> Delete
        </button>
      </div>

                      </div>
                     
                </div>
             ))}
             
             
            
        </div> 
        <div className="w-full p-4 flex justify-end gap-2">

  <button
    disabled={page === 1}
    onClick={() => setPage(prev => prev - 1)}
    className="px-3 py-1 border rounded disabled:opacity-50"
  >
    Prev
  </button>

  <span className="px-2">{page} / {totalPage}</span>

  <button
    disabled={lastBatchCount < limit} 
    onClick={() => setPage(prev => prev + 1)}
    className="px-3 py-1 border rounded disabled:opacity-50"
  >
    Next
  </button>
</div> 
         
        <CreateBatch open={openCreate} setOpen={setOpenCreate} page={page} limit={limit}/>
        <EditBatch open={openEdit} setOpen={setOpenEdit} batch={selectBatch} />

      </div>
  )
}

export default Batchmanagement