import { useState } from "react";
import searchIcon from "../assets/searchBar.png";
import DatePicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css"; 
import calendar from "../assets/Calendar.png"

const Search = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());

    return (
        <div className="flex w-full justify-between border border-[#76153C]/40 p-2 my-5 rounded-xl">

            <div className="relative w-300">
                <input
                    type="text"
                    placeholder="Search status..."
                    className="w-full pl-4 pr-14 py-2 rounded-3xl outline-none shadow-[0px_0px_14px_0px_#76153C_inset] border border-[#76153C]/20 placeholder-black"
                />

                <div className="absolute inset-y-0 right-0 items-center">
                    <img src={searchIcon} alt="search" className="h-10 w-17" />
                </div>
            </div>

            <button className="shadow-[0px_0px_14px_0px_#76153C_inset] rounded-2xl ml-25 flex">
                <img src={calendar} alt="calendar" className="w-5 h-5 mt-2.5 ml-5"/>
                <DatePicker
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date)}
                    className="w-40 p-2 rounded-xl text-[#76153C] outline-none"
                    dateFormat="dd-MMM-yyyy"
                />
            </button>
        </div>
    );
}

export default Search;