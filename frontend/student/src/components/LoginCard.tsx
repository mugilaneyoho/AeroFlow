import loginImage from "../assets/login-image-2.png"
import StudentLogin from "./StudentLogin";

const LoginCard = () => {

    return (
        <div className="shadow-[0px_0px_15px_0px_#00000040] bg-white my-20 p-5 rounded-lg">
            <div className="text-center">
                <h2 className="font-medium text-xl">Welcome to  <span className="font-extrabold text-[#008BBF] text-2xl">IIMS</span></h2>
                <img src={loginImage} alt="image" className="h-30 w-30 block mx-auto" />
                <h2 className="font-bold text-xl text-[#008BBF]">Student Portal</h2>
            </div>
            <StudentLogin />
        </div>
    )
}

export default LoginCard;