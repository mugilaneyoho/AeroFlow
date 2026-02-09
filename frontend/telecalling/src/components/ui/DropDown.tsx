import { useState } from "react";
import arrrow from '../../assets/Vector.svg'

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All Status");

  const options = ["All Status","Active", "In-active"];

  return (
    <div className="relative inline-block w-48">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row justify-between w-full bg-white border-2 border-[#79747E] rounded-md px-4 py-2 text-left shadow-sm hover:bg-gray-50 focus:outline-none"
      >
        <p>{selected}</p>
        <img src={arrrow} alt="" className={isOpen ? 'rotate-180' : ''}/>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
