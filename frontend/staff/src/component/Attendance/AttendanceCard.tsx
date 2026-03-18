/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { COLORS } from '../../constant'
import markselect from '../../assets/classesimg/markcorrecticon.png'
import markwrong from '../../assets/classesimg/markwrongicon.png'

type props = {
    handleSubmit: (classId:string,class_mode:string) => void;
    classData: any;
    batchData: any;
    handleCheckboxChange: (data: any) => void;
}


const AttendanceCard: React.FC<props> = ({ handleSubmit, batchData, classData, handleCheckboxChange }) => {

    const [mark, setmark] = useState<any>({});
    const [present, setpresent] = useState(0);

    function markAttendace(uuid:string){
        if (mark[uuid]) {
            setmark((prev:any)=>({...prev,[uuid]:false}))
            setpresent(present - 1)
        }else{
            setmark((prev:any)=>({...prev,[uuid]:true}))
            setpresent(present + 1)
        }
    }

    return (
        <div className="rounded-lg p-4 space-y-4 " style={{ boxShadow: COLORS.shadow_white }}>


            <div className="flex justify-between items-start flex-wrap gap-3">
                <div>
                    <p className="font-medium">{classData?.subject}</p>
                    <p className="text-sm text-gray-500">{batchData?.batchName}</p>
                </div>

                <span className="px-3 py-1 text-xs rounded-full bg-green-500 text-white">
                    Online
                </span>

                <div className="flex flex-wrap gap-2">
                    <button className="px-3  py-1 text-sm border rounded-md flex items-center gap-1" style={{ color: COLORS.primary_violet }}>
                        <img src={markselect} /> Mark All Present
                    </button>
                    <button className="px-3 py-1 text-sm border rounded-md flex items-center gap-1" style={{ color: COLORS.primary_violet }}>
                        <img src={markwrong} /> Mark All Absent
                    </button>
                </div>

            </div>


            <div className='space-y-2'>
                <div className='flex justify-between flex-col sm:flex-row items-start sm:items-center gap-4'>
                    <div>
                        <h1>Attendance Summary</h1>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 text-xs">
                        <span className="px-2 py-1 rounded" style={{ background: COLORS.bg_light_green, color: COLORS.secondary_white }}>
                            {present} Present
                        </span>
                        <span className="px-2 py-1 rounded" style={{ background: COLORS.bg_red, color: COLORS.secondary_white }}>
                            {batchData.students.length - present} Absent
                        </span>
                        <span className="px-2 py-1 rounded" style={{ background: COLORS.primary_violet, color: COLORS.secondary_white }}>
                            {batchData.students.length} Total
                        </span>
                    </div>

                </div>


                <div className="w-full h-2 rounded" style={{ background: COLORS.bg_gray }}>
                    <div
                        className="h-2 rounded"
                        style={{
                            width: `${batchData.students.length ? (present / batchData.students.length) * 100 : 0}%`,
                            background: COLORS.gradient_color,
                        }}
                    />

                </div>

            </div>


            <div className="grid grid-cols-3 gap-4">
                {batchData?.students?.map((student) => (
                    <div
                        key={student.uuid}
                        className="flex justify-between items-center py-3"
                    >
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={mark[student.uuid]}
                                onChange={() => {handleCheckboxChange(student.uuid); markAttendace(student.uuid)}}
                            />
                            <div>
                                <p className="text-sm font-medium">{student.studentName}</p>
                                <p className="text-xs text-gray-500">{student.studentId}</p>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="text-xs text-gray-500">
                                Overall: {student.overall}
                            </p>
                            <span className="text-xs px-2 py-0 rounded"
                                style={{
                                    background: mark[student.uuid] ? COLORS.bg_light_green : COLORS.bg_red,
                                    color: COLORS.secondary_white
                                }}>
                                {mark[student.uuid] ? "Present" : "Absent"}
                            </span>
                        </div>
                    </div>
                ))}
            </div>


            <button onClick={()=>handleSubmit(classData?.uuid,classData?.class_mode)}
                className="w-full py-2 rounded-md text-sm mt-4" style={{ background: COLORS.primary_violet, color: COLORS.secondary_white }}>
                Submit Attendance for Jan 22, 2026
            </button>

        </div>
    )
}

export default AttendanceCard