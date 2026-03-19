import { useEffect, useState } from "react";
import Today from './Today';
import Upcoming from "./Upcoming";
import Completed from "./Completed";
import { GetAllClassThunks } from "../feature/classes/redux/thunks";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";

const ViewMyClasses = () => {

    const [activeTab, setActiveTab] = useState<string>("Today");
    const dispatch = useDispatch<AppDispatch>()

    const getButtonClass = (tabName: string) => {

        const baseStyles = "flex-1 px-6 py-2 mx-2 rounded-xl transition-all duration-200 min-w-[140px]";
        const activeStyles = "text-white bg-[#1A7B9D]";
        const inactiveStyles = "text-black bg-white";

        return `${baseStyles} ${activeTab === tabName ? activeStyles : inactiveStyles}`;
    }

    useEffect(() => {
        dispatch(GetAllClassThunks(activeTab))
    }, [activeTab, dispatch]);


    return (
        <div className="w-full">
            <div className="m-5">
                <div className="my-5">
                    <h1 className="text-2xl font-medium">My Classes</h1>
                    <p className="text-[#7C7979]">View and join your scheduled classes</p>
                </div>
                <div className="flex justify-around shadow-[0px_0px_15px_0px_#00000040,0px_0px_15px_0px_#0000001A_inset] text-xl font-bold gap-85 p-3">
                    <button onClick={() => setActiveTab('Today')}
                        className={getButtonClass('Today')}>
                        Today
                    </button>
                    <button onClick={() => setActiveTab('Upcoming')}
                        className={getButtonClass('Upcoming')}>
                        Upcoming
                    </button>
                    <button onClick={() => setActiveTab('Completed')}
                        className={getButtonClass('Completed')}>
                        Completed
                    </button>
                </div>

                <div className="mt-5">
                    {activeTab === "Today" && <Today />}
                    {activeTab === "Upcoming" && <Upcoming />}
                    {activeTab === "Completed" && <Completed />}
                </div>
            </div>
        </div>
    )
}

export default ViewMyClasses;