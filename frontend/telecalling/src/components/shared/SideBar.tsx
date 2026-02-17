/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import NavbarIcon from '../../assets/navbar/index'
import { Link, useLocation } from 'react-router-dom'

const SideBar:React.FC = () => {
  return (
    <div className='w-16'>
      <div className='w-full h-[90vh] bg-[#1F338C]' style={{clipPath:'polygon(0 0, 100% 19%, 100% 80%, 0% 100%)'}}>
        <div className='pt-40 ml-4 flex flex-col gap-10'>
          <SideBarLink
            to='/'
            icon={[
              <img src={NavbarIcon.normal.home} alt="" className=' absolute'/>,
              <img src={NavbarIcon.clickable.home} alt="" className=' absolute'/>
            ]}
          />
          <SideBarLink
            to='/telecallers'
            icon={[
              <img src={NavbarIcon.normal.lead} alt="" className=' absolute'/>,
              <img src={NavbarIcon.clickable.lead} alt="" className=' absolute'/>
            ]}
          />
          <SideBarLink
            to='/leads'
            icon={[
              <img src={NavbarIcon.normal.tele} alt="" className=' absolute'/>,
              <img src={NavbarIcon.clickable.tele} alt="" className=' absolute'/>
            ]}
          />
          <SideBarLink
            to='/registerfee'
            icon={[
              <img src={NavbarIcon.normal.fees} alt="" className=' absolute'/>,
              <img src={NavbarIcon.clickable.fees} alt="" className=' absolute'/>
            ]}
          />
          {/* <SideBarLink
            to='/report'
            icon={[
              <img src={NavbarIcon.normal.report} alt="" className=' absolute'/>,
              <img src={NavbarIcon.clickable.report} alt="" className=' absolute'/>
            ]}
          />
          <SideBarLink
            to='/ticket'
            icon={[
              <img src={NavbarIcon.normal.ticket} alt="" className=' absolute'/>,
              <img src={NavbarIcon.clickable.ticket} alt="" className=' absolute'/>
            ]}
          /> */}
        </div>
      </div>
    </div>
  )
}

const SideBarLink =({
  to,
  icon,
}:{
  to:string;
  icon:any;
})=>{
  const [isClick, setisClick] = useState();
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isActive = location.pathname == to;

  return (
    <Link
      to={to}
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}
    >
      <div className='mt-10'>
      {isHovered || isActive  ? icon[1] : icon[0]}
      </div>
    </Link>
  )
}

export default SideBar