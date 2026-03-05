
import { COLORS } from "../../constant"
import closeicon from "../../assets/course/closeedit.png"
import { useDispatch } from "react-redux"
import { UpdateBatchThunk } from "../../features/batchpage/reducer/thunk"
import { useEffect, useState } from "react"


const  EditBatch = (props: any) => {
    const {open,setOpen,batch} = props
  if (!open) return null

  const dispatch = useDispatch<any>();

 const [formData , setFormData] = useState<any>({
         course_id:"",
         batch_name:"",
         total_seats:"",
         start_date:"",
         end_date:"",
         class_start_time:"",
         class_end_time:"",
         duration:3,
         duration_type:"months",
         batch_mode:"ONLINE",
        
       })

useEffect(()=> {
  if(batch){
    setFormData({
      course_id: batch.course_id,
      batch_name: batch.batch_name,
      batch_mode: batch.batch_mode || "ONLINE",
      total_seats: batch.total_seats || 0,
      start_date: batch.start_date ? batch.start_date.split("T")[0] : "",
      end_date: batch.end_date ? batch.end_date.split("T")[0] : "",
      class_start_time: batch.class_start_time ? batch.class_start_time.split("T")[1].slice(0,5) : "",
      class_end_time: batch.class_end_time ? batch.class_end_time.split("T")[1].slice(0,5) : "",
      duration: batch.duration || 3,
      duration_type: batch.duration_type || "months",
    })
  }

},[batch])

 const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
 }
  const handleUpdate = async () => {
  const payload = {
    ...formData,
    total_seats:Number(formData.total_seats),
  };

  await dispatch(UpdateBatchThunk(batch.uuid, payload));
  setOpen(false);
};



  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[60%] h-[90%] rounded-lg shadow-lg p-6 relative overflow-y-auto">

       
        <div className="flex justify-between items-center pb-3">
          <div>
            <h2 className="text-xl font-semibold">Edit Batch</h2>
            <p>Update batch details</p>
          </div>
          <button onClick={() => setOpen(false)}>
            <img src={closeicon} alt="close" className="w-4 h-4" />
          </button>
        </div>

     
        <div className="p-2 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="flex flex-col gap-1">
              <label className="text-sm text-black">Select Course*</label> 
              <input name="course_id" value={formData.course_id} onChange={handleChange}
              className="input border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]" placeholder="select course" defaultValue={batch?.topic} /> 
        </div>
        
        <div className="flex flex-col gap-1">
                 <label className="text-sm text-black">Batch Name*</label> 
                 <input name="batch_name" value={formData.batch_name} onChange={handleChange}
                 className="input border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]" placeholder="eg.FSWD-JAN-2026" defaultValue={batch?.job} /> 
            </div>

            <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Batch Id*</label> 
                <input value={batch?.id} disabled
                className="input border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]" placeholder="eg.FSWD-JAN-2026" defaultValue={batch?.id}/>
             </div>
            
             <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Batch Mode</label> 
                <select name="batch_mode" value={formData.batch_mode} onChange={handleChange}
                className="input border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]" >
                     <option value="ONLINE">Online</option> 
                     <option value="OFFLINE">Offline</option> 
                     </select> 
                     </div>

              <div className="flex flex-col gap-1"> 
            <label className="text-sm text-black">Mode*</label> 

            <input name="mode" value={formData.mode} onChange={handleChange}
            className="input border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]" placeholder="Online"  defaultValue={batch?.available}/>
             </div>

             <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Max Students*</label> 
                <input 
                name="total_seats" value={formData.total_seats} onChange={handleChange}
                type="number" min="1" className=" border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]" placeholder="max students"  /> 
            </div>

                        <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Start Date*</label>
                <div className="relative"> 
                    <input name="start_date" value={formData.start_date} onChange={handleChange}
                    type="date" className="w-full border border-[#B4B3B3] rounded-[5px] p-2 pr-2 text-[#6E6E6E]" /> 
                </div>
                 </div>

             <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">End Date*</label> 
                <div className="relative"> 
                    <input name="end_date" value={formData.end_date} onChange={handleChange}
                    type="date" className="w-full border border-[#B4B3B3] rounded-[5px] p-2 pr-2 text-[#6E6E6E]" /> 
              </div> 
              </div>  
             <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Start Timing*</label>
                 <div className="relative"> 
                    <input name="class_start_time" value={formData.class_start_time} onChange={handleChange}
                    type="time" className="w-full border border-[#B4B3B3] rounded-[5px] p-2 pr-2 text-[#6E6E6E]" /> 
                </div> 
            </div>

             <div className="flex flex-col gap-1"> 
                        <label className="text-sm text-black">End Timing*</label> 
                        <div className="relative"> 
                        <input type="time" name="class_end_time" value={formData.class_end_time} onChange={handleChange}
                        className="w-full border border-[#B4B3B3] rounded-[5px] p-2 pr-2 text-[#6E6E6E]" /> 
                       </div>
             </div>

          </div>
        </div>

       
        <div className="flex justify-end gap-3 mt-6">
          <button onClick={handleUpdate}
            className="px-4 py-2 text-white rounded"
            style={{ background: COLORS.bg_light_green }}
          >
            Update
          </button>

          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-white rounded"
            style={{ background: COLORS.bg_red }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default  EditBatch
