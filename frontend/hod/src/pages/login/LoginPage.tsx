import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import loginimg from "../../assets/images/loginImage.png";
import computerimg from "../../assets/images/computer_login.png";
import { COLORS, FONTS } from "../../constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { adminloginThunk } from "../../features/login/reducer/thunk";
import type { AppDispatch } from "../../store/store";


const LoginPage = () => {
 const dispatch = useDispatch<AppDispatch>();
const navigate = useNavigate();
const { isAuthenticated } = useSelector((state: any) => state.login);


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);
const [role, setRole] = useState("Head of the Department");


useEffect(()=>{
  if (isAuthenticated) 
    navigate("/")
},[isAuthenticated, navigate])

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(email);

const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
  e.preventDefault();
  let newErrors = { email: "", password: "" };
    

    if (!isValidEmail(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }
    try {
      const result = await dispatch(
        adminloginThunk({ email, password,role })
      ) as any; 

   
console.log("Dispatch result:", result);

    const userRole = result.user.role ;

if (role === "Head of the Department" && userRole !== "Head of the Department") 
  {
      toast.error("You are not allowed to login as HOD");
      return;
    }

      toast.success("Login Successful");
      navigate("/");
    } catch (err: any) {
      toast.error(err?.message || "Invalid credentials!", {
        style: { backgroundColor: "#DC2626", color: "white" },
      });
    }
  };


  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 bg-[#F4F4F4] px-8">

      
      <img src={loginimg} alt="login" className="max-w-105 w-full h-auto "/>

      <form onSubmit={handleLogin}
      className="shadow-[0px_0px_14px_0px_#2D216140] p-8 rounded-[10px] w-full max-w-md bg-white ">
        <div className="flex flex-col items-center justify-center ">
          <h1 style={FONTS.tittle}>
            Welcome to{" "}
            <strong style={{ color: COLORS.primary_blue }}>IIMS</strong>
          </h1>
          <img src={computerimg} alt="computer" />
          <h2 className="font-medium">Training Department</h2>
          <p className="text-sm">Management System</p>
        </div>

        <div className="mt-3 ">
            <label>Select</label>
          <select 
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="p-2 w-full text-center shadow-[0px_0px_14px_0px_#2D216140]" style={{backgroundColor:COLORS.primary_blue,color:COLORS.secondary_white}}>
            <option>Head of the Department</option>
            <option>Staff</option>
          </select>
        </div>

        
        <div className="mt-3">
          <label>Faculty ID</label>
          <input
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
            className="p-2 w-full shadow-[0px_0px_14px_0px_#2D216140] focus:ring-2 focus:ring-[#2D2161]"
            placeholder="Enter your faculty ID"
          />
        </div>

        
        <div className="mt-3">
          <label>Password</label>

          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              className="p-2 w-full pr-10 shadow-[0px_0px_14px_0px_#2D216140] focus:ring-2 focus:ring-[#2D2161]"
              placeholder="Enter your password"
            />

            
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer focus:ring-2 focus:ring-[#2D2161]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

         <div className="flex justify-between text-sm mt-1">
  <label className="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" className="accent-blue-600" />
    Remember me
  </label>

  <p className="cursor-pointer">Forgot Password</p>
</div>

<div className="p-2 mt-3 text-center shadow-[0px_0px_14px_0px_#2D216140] rounded-[5px]"  style={{backgroundColor:COLORS.primary_blue,color:COLORS.secondary_white}}>
    <button type="submit">Login</button>
</div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
