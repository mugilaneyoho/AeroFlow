
import { COLORS } from "../../constant"
import closeicon from "../../assets/course/closeedit.png"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { CreateBatchThunk, GetAllBatchThunk } from "../../features/batchpage/reducer/thunk"



const CreateBatch= (props: any) => {
    const{open,setOpen,page,limit} = props
     if (!open) return null


      const dispatch = useDispatch<any>();
     
       useEffect(()=>{
          dispatch(GetAllBatchThunk(page, limit));
       },[dispatch, page, limit])
       
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
     const handleChange = (e: any) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };
     
     const handleSubmit = async () => {
      const formatDateTime = (date: string, time?: string) => {
  if(!date) return ""
  const d= new Date(time? `${date}T${time}` : date);
  return d.toISOString();
};

  const payload = {
    institute_id: "e2068432-dd73-4632-8163-72226e517eaa",
    branch_id: "8f66b864-fc9a-4390-9687-5518bd62bddc",
    course_id: "c6cf70ad-e8f2-428d-ad6f-2e5a4096c1ec",
    batch_name: formData.batch_name,
    total_seats: Number(formData.total_seats),
    duration: 3,
    duration_type: "month",
    start_date: formatDateTime(formData.start_date),
    end_date: formatDateTime(formData.end_date),
    class_start_time: formatDateTime(formData.start_date, formData.class_start_time),
    class_end_time: formatDateTime(formData.start_date, formData.class_end_time),
     batch_mode: formData.batch_mode,    
  };

  await dispatch(CreateBatchThunk(payload, page, limit));
  setOpen(false);
};


  return (
     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[60%] h-[90%] rounded-lg shadow-lg p-6 relative overflow-y-auto">   
        <div className="flex justify-between items-center pb-3">
          <div>
            <h2 className="text-xl font-semibold">Create New Batch</h2>
            <p>Add a new batch to your institute training program</p>
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
              className="input border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]" placeholder="select course"  /> 
            </div>
            
            <div className="flex flex-col gap-1">
                 <label className="text-sm text-black">Batch Name*</label> 
                 <input name="batch_name" value={formData.batch_name} onChange={handleChange}
                 className="input border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]" placeholder="eg.FSWD-JAN-2026"  /> 
            </div>


            <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Batch Id*</label> 
                <input name="course_id"
                className="input border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]" placeholder="eg.FSWD-JAN-2026"/>
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

            <input name="mode"  onChange={handleChange}
            className="input border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]" placeholder="Online"  />
             </div>
            
            <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Max Students*</label> 
                <input name="total_seats" value={formData.total_seats} onChange={handleChange}
                type="number" min="1" className=" border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]" placeholder="max students"  /> 
            </div>

            <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Start Date*</label>
                <div className="relative"> 
                    <input type="date" name="start_date" value={formData.start_date}  onChange={handleChange}
                    className="w-full border border-[#B4B3B3] rounded-[5px] p-2 pr-2 text-[#6E6E6E]" /> 
                </div>
                 </div>

              <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">End Date*</label> 
                <div className="relative"> 
                    <input type="date" name="end_date" value={formData.end_date} onChange={handleChange}
                    className="w-full border border-[#B4B3B3] rounded-[5px] p-2 pr-2 text-[#6E6E6E]" /> 
              </div> 
              </div>   

            <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Start Timing*</label>
                 <div className="relative"> 
                    <input type="time" name="class_start_time" value={formData.class_start_time} onChange={handleChange}
                    className="w-full border border-[#B4B3B3] rounded-[5px] p-2 pr-2 text-[#6E6E6E]" /> 
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
          <button
          onClick={handleSubmit}
            className="px-4 py-2 text-white rounded"
            style={{ background: COLORS.bg_light_green }}
          >
            Create
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

export default CreateBatch