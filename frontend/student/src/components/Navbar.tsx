import logo from "../assets/ims-logo.png"
import navimage from "../assets/navbar-image.png"

const Navbar = () => {

    const name = "Alice";
    const attendance = 85;

    return (
        <div className="w-full bg-[#1A7B9D] rounded-xl flex gap-6 relative h-30">
            <div className="flex flex-col justify-around ml-4">
                <img src={logo} alt="logo" className="w-17 h-17" />
                <h1 className="text-white text-center text-2xl font-bold ml-1">IMS</h1>
            </div>

            <div className="flex flex-col justify-center">
                <h1 className="font-medium text-white text-2xl">Welcome back, {name}!</h1>
                <h3 className="text-white text-xl">Ready to continue your learning journey?</h3>
            </div>

            <div className="absolute top-5 right-4 bg-white rounded-2xl flex h-20">
                <div className="text-[#1A7B9D] flex flex-col text-center p-2">
                    <span className="font-bold text-3xl">{attendance}%</span>
                    <h3 className="font-medium text-xl">Attendance</h3>
                </div>
                <div className="h-13 w-px bg-[#1A7B9D] mt-4"></div>
                <img src={navimage} alt="image" className="border border-[#1A7B9D] m-2 rounded-full h-17 w-17 " />
            </div>
        </div>
    )
}

export default Navbar;