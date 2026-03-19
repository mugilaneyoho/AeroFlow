import logo from "../assets/ims-logo.png"
import navimage from "../assets/navbar-image.png"

const Navbar = () => {

    const name = "Alice";
    const attendance = 85;

    return (
        <div className="w-full bg-[#1A7B9D] rounded-xl flex flex-row justify-between gap-6 relative h-20 p-2">
            <div className="flex flex-row gap-10 items-center justify-center">
            <div className="flex flex-col justify-around ml-4">
                <img src={logo} alt="logo" className="w-15 h-15" />
            </div>

            <div className="flex flex-col justify-center">
                <h1 className="font-medium text-white text-2xl">Welcome back, {name}!</h1>
                <h3 className="text-white text-xl">Ready to continue your learning journey?</h3>
            </div>
            </div>

            <div className="right-4 bg-white rounded-2xl flex items-center gap-2 p-2">
                <div className="text-[#1A7B9D] flex flex-col text-center">
                    <span className="font-bold text-xl">{attendance}%</span>
                    <h3 className="font-medium text-xl">Attendance</h3>
                </div>
                <div className="h-13 w-px bg-[#1A7B9D]"></div>
                <img src={navimage} alt="image" className="border border-[#1A7B9D] rounded-full h-10 w-10 " />
            </div>
        </div>
    )
}

export default Navbar;