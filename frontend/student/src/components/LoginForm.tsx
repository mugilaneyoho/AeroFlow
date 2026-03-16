import { useState } from "react";
import { Eye, EyeOff, Square, SquareCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LoginService } from "../feature/auth/service";
import { useAuth } from "../contexts/AuthUseContext";
import { toast } from "react-toastify";

const LoginForm = () => {

    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)
    const [remember, setRemember] = useState(true);
    const {login} = useAuth()

    const handleLogin = async(e: React.FormEvent) => {
        e.preventDefault();

        const res = await LoginService({email:userName,password})

        console.log(res)

        if (res.success) {
            login(res.data)
        }else{
            toast.warn("email or password is incorrect")
        }
    };

    return (
        <div>
            <form className="flex flex-col gap-5 my-4 " onSubmit={handleLogin}>
                <div className="flex flex-col gap-2">
                    <label className="font-medium">User name/Roll No</label>
                    <input
                        type="email"
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter your name or roll no"
                        className="shadow-[0px_0px_15px_0px_#0000001A] p-2 w-full  outline-none"
                        value={userName}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-medium">Password</label>
                    <div className="relative w-full">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            placeholder="Enter your password"
                            onChange={(e) => { setPassword(e.target.value) }}
                            className="shadow-[0px_0px_15px_0px_#0000001A] p-2 relative w-full  outline-none"
                        />
                        <button type="button" className="absolute right-3 top-2" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                        </button>
                    </div>
                </div>

                <button type="submit" className="w-full text-xl text-white cursor-pointer font-semibold bg-[#008BBF] p-2 rounded-md">
                    Login
                </button>
            </form>
            {/* <div className="flex justify-between mb-5">
                <div className="flex gap-2">
                    <button onClick={() => setRemember(!remember)}>
                        {remember ? <SquareCheck /> : <Square />}
                    </button>
                    <h2 className="text-[#626262]">Remember me</h2>
                </div>
                <button>
                    <h2 className="text-[#2099C7]">Forgot Password</h2>
                </button>
            </div> */}
        </div>
    )
}

export default LoginForm;