import React from "react";

interface ClassCardProps {
  topic: string;
  batch: string;
  time: string;
  name: string;
  student: string;
  status?: string;
  COLORS: any; 
  icons: { cap: string; clock: string; name: string; student: string };
}

const ClassCard: React.FC<ClassCardProps> = ({ topic, batch, time, name, student, status, COLORS, icons }) => {
  const getStatusColor = () => {
    if (status === "Ongoing") return COLORS.bg_ongoing_green;
    if (status === "Upcoming") return COLORS.primary_blue;
    return "gray";
  };



  return (
    <div className="border p-2 pb-4 mb-2 rounded shadow-[0px_0px_10px_0px_#00000040,0px_0px_14px_0px_#2D2161_inset]">
      <div className="flex justify-between items-center mb-3">
        <p className="font-medium">{topic}</p>
        <p className="p-2 rounded-[10px] text-sm" style={{ backgroundColor: getStatusColor(), color: "#fff" }}>
          {status}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-y-2 gap-x-3 text-sm">
        <div className="flex gap-1 items-center">
          <img src={icons.cap} alt="cap" /> 
          <p style={{ color: COLORS.primary_blue }}>{batch}</p>
        </div>
        <div className="flex gap-1 items-center">
          <img src={icons.clock} alt="clock" /> 
          <p style={{ color: COLORS.primary_blue }}>{time}</p>
        </div>
        <div className="flex gap-1 items-center">
          <img src={icons.name} alt="name" /> 
          <p style={{ color: COLORS.primary_blue }}>{name}</p>
        </div>
        <div className="flex gap-1 items-center">
          <img src={icons.student} alt="student" /> 
          <p style={{ color: COLORS.primary_blue }}>{student}</p>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
