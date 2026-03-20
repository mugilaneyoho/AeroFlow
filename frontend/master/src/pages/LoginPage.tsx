import React, { useRef } from 'react'
import { IoMdLock } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/logo1.png"
import { useAuth } from '../contexts/AuthUseContext';
import { LoginService } from '../features/auth/service';

const LoginPage:React.FC = () => {

  const emailRef = useRef<HTMLInputElement | null>(null)
  const passRef  = useRef<HTMLInputElement | null>(null)
  const {login} = useAuth()

  const handlesubmit = async(e:SubmitEvent)=>{
    e.preventDefault()
    const email = emailRef.current?.value as string;
    const password = passRef.current?.value as string;
    const res = await LoginService({email,password})

    if (res?.success) {
      login(res?.data)
    }
  }

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen flex items-center justify-center overflow-hidden relative">
      
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-150 h-150 bg-[#4a151b]/5 rounded-full blur-3xl"></div>

        {/* Replaced asymmetric-bg with inline clip-path */}
        <div
          className="absolute bottom-0 right-0 w-full h-2/3 bg-[#f3f4f5] opacity-50"
          style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
        ></div>

        <div className="absolute top-1/2 right-10 w-64 h-64 border-40 border-[#fed65b]/10 rounded-full"></div>
      </div>

      {/* Main */}
      <main className="relative z-10 w-full max-w-md px-6">
        <div className="bg-white rounded-xl shadow-[0_24px_40px_rgba(74,21,27,0.06)] overflow-hidden border border-[#d8c1c1]/15">
          
          {/* Header */}
          <div className="px-10 pt-12 pb-8 flex flex-col items-center text-center">
            
            {/* Gradient inline */}
            <div className="w-28 h-28 mb-6 rounded-xl flex items-center justify-center shadow-lg">
              <img src={logo} alt="" />
            </div>

            <h1 className="font-extrabold text-2xl tracking-tight text-[#2e0208]">
              AeroFlow
            </h1>

            <p className="mt-2 text-[#534343] text-xs uppercase tracking-widest font-medium">
              Master Admin Panel
            </p>
          </div>

          {/* Form */}
          <form className="px-10 pb-12 space-y-6" onSubmit={handlesubmit}>
            
            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#534343]">
                Email Address
              </label>

              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400">
                  <MdAlternateEmail />
                </span>

                <input
                  type="email"
                  ref={emailRef}
                  defaultValue='master@aeroflow.com'
                  placeholder="admin@institute.edu"
                  className="w-full pl-10 pr-4 py-3 bg-[#f3f4f5] border border-[#d8c1c1]/30 rounded-lg text-sm focus:ring-2 focus:ring-[#2e0208]/20 focus:border-[#2e0208] outline-none"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#534343]">
                  Password
                </label>

                <a href="#" className="text-[11px] font-semibold text-[#4a151b] hover:underline">
                  Forgot Password?
                </a>
              </div>

              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400">
                  <IoMdLock />
                </span>

                <input
                  type="password"
                  ref={passRef}
                  defaultValue='master'
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-[#f3f4f5] border border-[#d8c1c1]/30 rounded-lg text-sm focus:ring-2 focus:ring-[#2e0208]/20 focus:border-[#2e0208] outline-none"
                  required
                />
              </div>
            </div>

            {/* Remember */}
            {/* <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4" />
              <label className="ml-2 text-xs text-[#534343]">
                Remember session for 30 days
              </label>
            </div> */}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#fed65b] hover:bg-[#735c00] hover:text-white cursor-pointer text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition"
            >
              Login to Dashboard
              <span className="material-symbols-outlined"><FaArrowRight /></span>
            </button>
          </form>

          {/* Footer */}
          <div className="bg-[#f3f4f5]/50 px-10 py-5 text-center border-t border-[#d8c1c1]/10">
            <p className="text-[11px] text-[#534343]/70">
              Access restricted to authorized personnel only.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="mt-8 flex justify-center gap-6 text-xs text-gray-500">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
      </main>
    </div>
  )
}

export default LoginPage