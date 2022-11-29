
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import './Navbar3.css'

function Navbar3() {
    const [showbutton,setShowButoon]=useState(false);
  return (
    <div className="Navbarbody">
    <h1>Logo</h1>
    <input type="text" placeholder="Search"/>
    <div className="icons">
   <AiOutlineClose onClick={()=>{setShowButoon(false)}} className={`closeicon ${showbutton? 'show' : 'hide'}`}/>
            <AiOutlineMenu  onClick={()=>{setShowButoon(true)}} className={`closeicon ${showbutton? 'hide' : 'show'}`}/>
      
   </div>
   
    <ul className={`Navbarlinks ${showbutton ? "active":null}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
 
    
</div>

  )
}

export default Navbar3