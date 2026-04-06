import React, { useEffect, useState } from 'react'
import plusicon from '../../assets/Dashboard/plus.png'
import { COLORS, FONTS } from '../../constant'

import close from '../../assets/course/closeedit.png'
import upload from '../../assets/course/upload.png'
import CourseCard from '../../components/courses/CourseCard'
// import { course } from '../../data/Coursedata'
import { CreateCourseThunk, DeleteCourseThunk, GetAllCourseThunk, UpdateCourseThunk } from '../../features/coursespage/reducer/thunk'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCourse } from '../../features/coursespage/reducer/selector'
import type { AppDispatch } from '../../store/store'
import courseimage from '../../assets/course/course1.png'

const Course:React.FC = () => {
   const dispatch = useDispatch<AppDispatch>();
  const courses = useSelector(GetAllCourse);

  const [create, setCreate] = useState(false);
  const [active, setActive] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [price, setPrice] = useState<number>(0);

  
  // const location = window.location;
  
  // const values = new URLSearchParams(location.search)
  // const token: string = values.get('tkn') as string;

  
  useEffect(() => {
    dispatch(GetAllCourseThunk());
  }, [dispatch]);

    const handleCreate =async () => {
  
  const newCourse = {
  course_name: title,
  description: desc,
  is_active: active,
  thumbnail: courseimage,
  price:price,
  branch_id: "a174a521-e7a0-4015-bf9b-e1c95c6cbb58",
   institute_id: "4f93f601-2e2d-4912-b9b7-ef2831e1b27d"

};

 const created = await dispatch(CreateCourseThunk(newCourse));
  console.log("created course:", created)

  
  setCreate(false);
  setTitle("");
  setDesc("");
  setPrice(0);
};

const handleUpdate = async () => {
  if (!selectedCourse) return;

  const updatedCourse = {
    course_name: title,
    description: desc,
    is_active: active,
    price: price,
    thumbnail: image ? image : selectedCourse.thumbnail, 
    branch_id: selectedCourse.branch_id, 
    institute_id: selectedCourse.institute_id, 
  };

  try {
    await dispatch(UpdateCourseThunk(selectedCourse.uuid, updatedCourse));
    dispatch(GetAllCourseThunk());
    setSelectedCourse(null);
  } catch (error) {
    console.error("Update failed:", error);
  }
};



 const handleDelete = async (uuid: string) => {
  try {
    await dispatch(DeleteCourseThunk(uuid));
    console.log("Deleted course with UUID:", uuid);
  } catch (err) {
    console.error("Delete failed:", err);
  }
};

  return (
    <div className='p-2'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4'>
           <div>
            <h1 style={{...FONTS.tittle,color:COLORS.primary_blue}}>Course Management</h1>
            <p style={{color:COLORS.primary_blue}}>Create and manage training courses</p>
            </div>
           <button className='flex gap-1 items-center px-2 py-1 rounded-[10px]' onClick={()=>setCreate(true)} style={{backgroundColor:COLORS.primary_blue,color:COLORS.secondary_white}}>
            <img src={plusicon}  alt='plus' className='w-5 h-5'/>
            create course 
            </button> 
        </div>

       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
   {Array.isArray(courses) && courses.map((item:any) => {
     console.log("Course UUID" , item.uuid)
    return (
    <CourseCard
      key={item.uuid}
      course={item}
      onEdit={() => {
        setSelectedCourse(item)
        setTitle(item.course_name)
        setDesc(item.description)
        setActive(item.is_active)
        setPrice(item.price || 0);
        
      }}
      onDelete={() => handleDelete(item.uuid) }
    />
    )
})}
</div>


        {create && (
            
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
          
 
 <div className="bg-white rounded-xl w-full max-w-xl p-6 shadow-[0px_0px_10px_0px_#00000040] relative max-h-[90vh] overflow-y-auto ">
<div className='p-1 '>
<div className='flex justify-between p-2'>
                  <div>
                        <h1 className='font-medium text-[#4B4646]'>create a new course</h1>
                        <p className='text-[#8B8A8A]'>Add a new course to your institute training program</p>
                    </div>
                   <button onClick={()=>setCreate(false)}>
                    <img src={close} alt='close' />
                    </button> 
</div>
                    <div className='space-y-4'>
                        <label className='block text-sm font-medium mb-1'>
                            Upload Course Image
                        </label>
                       <label htmlFor='courseImage' className='border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-[#2D2161]' style={{backgroundColor:COLORS.bg_gray}}>
                         <p className='text-sm'>Choose from files</p>
                        <img src={upload} alt='upload' className='mb-2' />
                       
                       </label>
                       <input id="courseImage" type="file" onChange={(e)=>setImage(e.target.files?.[0] || null)} />
                    </div>

                     <label className='block text-sm font-medium mb-1 mt-3'>
                            Course name
                        
                        </label>
                        <input placeholder='Enter course name' className='border border-[#B4B3B3] text-sm p-2 ' value={title} onChange={(e) => setTitle(e.target.value)}/>
                     <label className='block text-sm font-medium mb-1 mt-3'>
                            Course Description
                        
                        </label>
                        <textarea className='border-[#B4B3B3] border w-full' value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>

                        <label className='block text-sm font-medium mb-1 mt-3'>
  Course Price
</label>
<input
  type="number"
  placeholder="Enter price"
  className="border border-[#B4B3B3] text-sm p-2 w-full"
  value={price}
  onChange={(e) => setPrice(Number(e.target.value))}
/>

                        <label className='block text-sm font-medium mb-1 mt-3'>
                            Course Status
                        </label>

                        <button type='button' onClick={()=>setActive(!active)}
                       className='w-14 h-7 rounded-full p-1 flex items-center'
                       style={{
                        backgroundColor:active ? COLORS.bg_light_green : COLORS.bg_gray
                       }}>
                            <div className={`w-5 h-5 bg-white rounded-full shadow  ${active ? "translate-x-7" : "translate-x-0"}`} />

                        </button>

                       

                        <div className='flex justify-end gap-2'>
                            <button className='p-2 rounded-[5px]' onClick={handleCreate}
                            style={{background:COLORS.bg_light_green,color:COLORS.secondary_white}} >Create</button>
                            <button  className='p-2 rounded-[5px]' style={{background:COLORS.bg_red,color:COLORS.secondary_white}} onClick={()=>setCreate(false)}>cancel</button>
                        </div>

                 </div>
           </div>
            </div>
            
        )}

        {selectedCourse && (
             <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
          
 
 <div className="bg-white rounded-xl w-full max-w-xl p-6 shadow-[0px_0px_10px_0px_#00000040] relative max-h-[90vh] overflow-y-auto ">
<div className='p-1 '>
<div className='flex justify-between p-2'>
                  <div>
                        <h1 className='font-medium text-[#4B4646]'>Edit Course</h1>
                        <p className='text-[#8B8A8A]'>Edit a existing course to your institute training program</p>
                    </div>
                   <button onClick={()=>setSelectedCourse(false)}>
                    <img src={close} alt='close' />
                    </button> 
</div>
                    <div className='mt-3'>
                        <label className='block text-sm font-medium mb-1'>
                            Edit Course Image 
                        </label>
                       <label htmlFor='courseImage' className='w-full rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer'>
                         <img src={selectedCourse.thumbnail} alt='image' />
                       
                       </label>
                       
                    </div>

                     <label className='block text-sm font-medium mb-1 mt-3'>
                            Course name
                        
                        </label>
                       <input
  className="border border-[#B4B3B3] text-sm p-2 rounded" value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
                 
                     <label className='block text-sm font-medium mb-1 mt-3'>
                            Course Description
                        
                        </label>
                        <textarea className='border-[#B4B3B3] border w-full' value={desc} onChange={(e) => setDesc(e.target.value)}>
                           
                        </textarea>
                        <label className='block text-sm font-medium mb-1 mt-3'>
  Course Price
</label>
<input
  type="number"
  placeholder="Enter price"
  className="border border-[#B4B3B3] text-sm p-2 w-full"
  value={price}
  onChange={(e) => setPrice(Number(e.target.value))}
/>
                        <label className='block text-sm font-medium mb-1 mt-3'>
                            Course Status
                        </label>

                        <button type='button' onClick={()=>setActive(!active)}
                       className='w-14 h-7 rounded-full p-1 flex items-center'
                       style={{
                        backgroundColor:active ? COLORS.bg_light_green : COLORS.bg_gray
                       }}>
                            <div className={`w-5 h-5 bg-white rounded-full shadow  ${active ? "translate-x-7" : "translate-x-0"}`} />

                        </button>

                       

                        <div className='flex justify-end gap-2'>
                            <button className='p-2 rounded-[5px]' style={{background:COLORS.bg_light_green,color:COLORS.secondary_white}} onClick={handleUpdate}>Update</button>
                            <button  className='p-2 rounded-[5px]' style={{background:COLORS.bg_red,color:COLORS.secondary_white}} onClick={()=>setSelectedCourse(null)}>cancel</button>
                        </div>

                 </div>
           </div>
            </div>
        )}

        

    </div>
  )
}

export default Course