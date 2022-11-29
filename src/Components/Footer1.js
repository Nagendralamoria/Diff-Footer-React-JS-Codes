import React from 'react'
import './Footer1.css'
import {BsInstagram,BsFacebook,BsTwitter,BsLinkedin} from 'react-icons/bs'
function Footer1() {
  return (
    <footer className="footer">
    <h1>Logo</h1>
    <ul className="footermenu">
        <li> Home </li>
        <li> Blogs </li>
        <li> About </li>
        <li> Contact </li>
    </ul>
    <div className="footerbottom">

    <ul className="footericons">
      {/* In order to use these icons install React Icons in your project by   npm install react-icons --save   command  */}
        <li> <BsInstagram className='color-white'/> </li>
        <li> <BsFacebook className='color-white'/> </li>
        <li> <BsTwitter className='color-white'/></li>
        <li> <BsLinkedin className='color-white'/></li>
        
    </ul>
    
    <p>© All rights reserved</p>

</div>
</footer>
  )
}

export default Footer1