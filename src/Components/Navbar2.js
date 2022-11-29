import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import './Navbar2.css'
function Navbar2() {
  const [showbutton,setShowButoon]=useState(false);
  return (
    <div className="Navbarbody">
    <h1>Logo</h1>
    <div className="icons">
   <AiOutlineClose onClick={()=>{setShowButoon(false)}} className={`closeicon ${showbutton? 'show' : 'hide'}`}/>
            <AiOutlineMenu  onClick={()=>{setShowButoon(true)}} className={`closeicon ${showbutton? 'hide' : 'show'}`}/>
      
   </div>
    <ul className={`Navbarlinks ${showbutton ? "active":"inactive"}`} >
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">About</a></li>
    </ul>
  
  <button className={`Navbarlinkbutton ${showbutton ? "show":"hide"}`}  >Contact US</button>
    
</div>
  )
}

export default Navbar2