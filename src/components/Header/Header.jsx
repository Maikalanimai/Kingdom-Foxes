import React from 'react'
import banner from '../../assets/banner-forever-or-nothing.png'
import "./header.css"

function Header() {
  return(
    <div className='header'>
      <img src={banner} alt='banner' className='banner'/>     
    </div>
  )
}

export default Header;