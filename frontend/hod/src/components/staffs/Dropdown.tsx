import { useState } from "react";
import dropdownimg from "../../assets/staff/downarrow.png";

const Dropdown = ({ options, selected, onChange }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative w-full sm:w-40"
      tabIndex={0}              
      onBlur={() => setOpen(false)} 
    >
     
      <div
        className="border rounded-[10px] p-2 cursor-pointer flex justify-between items-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-sm text-[#797979]">{selected}</span>
        <img src={dropdownimg} alt="dropdown" className="w-4 h-4" />
      </div>

      
      {open && (
        <ul className="absolute w-full mt-1 bg-white rounded-[5px] shadow-md z-50 p-2 space-y-2">
          {options.map((opt: string) => (
            <li
              key={opt}
              className="px-3 py-2 text-sm text-[#797979] hover:bg-gray-100 cursor-pointer rounded-[5px]"
              onMouseDown={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
