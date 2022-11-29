import React from 'react'
import './Footer2.css'
import {BsInstagram,BsFacebook,BsTwitter,BsLinkedin} from 'react-icons/bs'
import {IoCall} from 'react-icons/io5';
import {MdEmail} from 'react-icons/md';
function Footer2() {
  return (
    <footer class="footer">
    <div class="footerContent">
        <div class="footerAboutCompany">
            <h1>Logo</h1>
            <div class="footerAboutCompany-details">
                <h2>About Company</h2>
                <p>
                    In publishing and graphic design, Lorem ipsum is
                     a placeholder text commonly used to demonstrate the visual form of a 
                     document or a typeface without relying on meaningful content.
                </p>
            </div>
        </div>
       <div class="footerLinks">
        <h1>Links</h1>
        <ul class="footerMenu">
            <li> <a href="#">Home</a> </li>
            <li> <a href="#">Blogs</a> </li>
            <li> <a href="#">About</a> </li>
            <li> <a href="#">Contact</a> </li>
        </ul>
    </div>
     
            <div class="footerContact">

            <div>
                <div class="footerContactdetails">
                    <IoCall className='contact-icons'/>
                    <h2>Call Us</h2>
                </div> 
                <h3>+91 XXXXXXXXX</h3>
            </div>
            
            <div>
                <div class="footerContactdetails">
                <MdEmail className='contact-icons'/>
                    <h2>Mail Us</h2>
                </div> 
                <h3>example@gmail.com</h3>
            </div>
           
            
    
        
            
            </div>
        <ul class="footerIcons">
               {/* In order to use these icons install React Icons in your project by   npm install react-icons --save   command  */}
        <li> <BsInstagram className='color-white'/> </li>
        <li> <BsFacebook className='color-white'/> </li>
        <li> <BsTwitter className='color-white'/></li>
        <li> <BsLinkedin className='color-white'/></li>
            
        </ul>

    </div> 
    <p>© All rights reserved</p>


</footer>
  )
}

export default Footer2