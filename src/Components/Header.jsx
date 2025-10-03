import React from 'react'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <div style={{backgroundColor:"#1A0B2E"}} className='d-flex justify-content-around align-items-center w-100 p-3'>
        <div className='logo'>
            <img style={{width:"100%"}} src={logo} alt="logo" />
        </div>
        <div className='navigation'>
            <ul className='d-flex justify-content-center align-items-center w-100 mb-0' style={{listStyle:"none",gap:"100px",color:"white"}}>
                <li><a style={{textDecoration:"none",color:"white"}} href=''>Home</a></li>
                <li><a style={{textDecoration:"none",color:"white"}} href=''>About</a></li>
                <li><a style={{textDecoration:"none",color:"white"}} href=''>Works</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header