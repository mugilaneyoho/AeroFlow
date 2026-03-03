import bell from "../assets/sidebar/bell.png"
import profile from "../assets/sidebar/profile.png"

const Navbar = () => {
  return (
    <div className='rounded-xl p-4 mb-4 bg-[#EDBF5C] shadow-md'>
      <div className='flex justify-between py-2'>
        <div >
            <h1 className='font-bold text-[#54191D]'>Welcome, super Admin</h1>
            <p className='text-[#54191D]'>Here's what's happening with your institute today.</p>
        </div>
        <div className='flex gap-2'>
            <div>
                <img src={bell} className='w-12 h-12'/>
            </div>
            <div>
                <img src={profile} className='w-12 h-12'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
