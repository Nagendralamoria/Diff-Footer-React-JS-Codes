import React, { useState } from 'react'
import '../App.css'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai' //  npm install react-icons --save
function Navbar() {
  const [showbutton,setShowButoon]=useState(false);
  return (
    <div className='navbarbody'>
         <div className='linksparentbody'>
             <h1>Logo</h1>
            <div className='closeicon'>
            <AiOutlineClose style={{display : showbutton? 'block' : 'none' }} onClick={()=>{setShowButoon(false)}} className='closeicon'/>
            <AiOutlineMenu style={{display : showbutton? 'none' : 'block' }} onClick={()=>{setShowButoon(true)}} className='closeicon'/>
      
            </div>
               </div>
            <div className={showbutton ? "showclass":"hideclass"}>
            <div className='navbarlinks'>
              <h4>Home</h4>
              <h4>About Us</h4>
              <h4>Contact Us</h4>
              <button>Sign Up</button>
            </div>
         
              
            </div>
          
   
    </div>
  )
}

export default Navbar