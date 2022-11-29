import React, { useState } from 'react'
import './Navbar4.css'
import {MdOutlineDashboard,MdMenu,MdOutlineHome,MdViewInAr,MdShowChart,MdHistory,MdAttachMoney,MdOutlineSettings,MdLogout,MdOutlineChat,MdOutlineNotificationsActive} from 'react-icons/md'
function Navbar4() {
    const [showbutton,setShowButoon]=useState(false);
  return (
    <div className={`Navbar ${showbutton ? "active":"hidetext"}`} >
       
    <ul className="links">
        <li className="navlogo">
            <MdMenu onClick={()=>{setShowButoon(!showbutton)}} className='icons'/>
           
            <h1>Web</h1>
        </li>
        <li>
      <MdOutlineHome className='icons'/>
        <p>Home</p>
    </li>
    <li>
       <MdOutlineDashboard className='icons'/>
        <p>Dashboard</p>
    </li>
    <li>
       <MdViewInAr className='icons'/>
       <p>Products</p>
    </li>
    <li>
      <MdShowChart className='icons'/>
       <p>Analytics</p>
    </li>

    <li>
       <MdHistory className='icons'/>
       <p> History</p>
    </li>
    <li>
       <MdAttachMoney className='icons'/>
        <p>Sales</p>
    </li>

    <li>
       <MdOutlineChat className='icons'/>
        <p>Messages</p>
    </li>
    <li>
        <MdOutlineNotificationsActive className='icons'/>
        <p>Notifications</p>
    </li>
    <li>
       <MdOutlineSettings className='icons'/>
        <p>Settings</p>
    </li>
    <li>
        <MdLogout className='icons'/>
        <p>Logout</p>
    </li>
</ul>
    
</div>
  )
}

export default Navbar4