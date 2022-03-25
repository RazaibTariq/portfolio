/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./nav.css"
import {BiHome,BiUser,BiBook,BiMessageAltDetail} from "react-icons/bi"
import {MdDesignServices} from "react-icons/md"
import {useState} from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href ="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome/></a>
      <a href ="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <BiUser /></a>  
      <a href ="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiBook /></a>      
      <a href ="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> <MdDesignServices /></a>      
      <a href ="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageAltDetail /></a>
    </nav>
  )
}

export default Nav