import logo from "../assets/logo.png";
import mail from "../assets/mail.png";
import lock from "../assets/lock.png";
import eye from "../assets/EyeOutline.png";
import background from "../assets/loginbackground.png";
import { useState } from "react";
import { useLoginMutation } from "../services/globalApi";
import { useAuth } from "../contexts/AuthUseContext";

const Login = () => {

    const [email, setEmail] = useState("admin@reception.com");
    const [password, setPassword] = useState("123456");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [Login,{isLoading}] = useLoginMutation();
    const {login} = useAuth()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const {data} = await Login({email,password})
        if (data.success) {
            login(data?.data)
        }else{
            alert('check email and password')
        }
        setError("");
    }

    return (
        <div className="h-screen w-screen flex flex-col overflow-hidden bg-slate-50 bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${background})` }}>
            <div className="flex flex-col items-center mt-15">
                <div className="flex flex-col my-5">
                    <img src={logo} alt="logo" className="h-37.5 w-45" />
                    <h1 className="text-white text-3xl my-1 ml-5">Reception</h1>
                </div>
                <form onSubmit={handleLogin} className="flex flex-col gap-1">
                    {error && <div className="text-red-500 text-sm mb-3">{error}</div>}

                    <div className="relative bg-white text-white font-medium py-3 rounded-3xl flex mt-3">
                        <img src={mail} alt="mail" className="w-5 h-5 mt-1 ml-6 absolute" />
                        <input
                            type="email"
                            placeholder="youremail@mail.com"
                            className="ml-17 text-[#6C6C6C] bg-transparent outline-none w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="relative bg-white text-white font-medium py-2 rounded-3xl flex mt-3">
                        <img src={lock} alt="lock" className="w-5 h-5 mt-1 ml-6 absolute" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="*********"
                            className="ml-17 mt-1 text-[#6C6C6C] bg-transparent outline-none w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-5 mt-1"
                        >
                            <img src={eye} alt="toggle-eye" className="w-5 h-5" />
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="bg-[#76153C] text-white font-medium px-30 py-3 mt-7 rounded-3xl disabled:opacity-50"
                        disabled={isLoading}
                    >
                        {isLoading ? "LOGGING IN..." : "LOGIN NOW"}
                    </button>
                </form>
                <button className="text-black text-xs font-medium ml-50">Forgot Password</button>
            </div>
        </div>

    )
}

export default Login;