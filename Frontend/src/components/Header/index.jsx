import React, { useState } from 'react'
import "./style.scss"
import {FaBars} from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";
import {MdNotifications,MdApps} from "react-icons/md";
import Sidebar from '../Sidebar';


const Header= (props) => {

  return (
    <div className='border border-dark header'>
        <FaBars className='mobileMenu' onClick={()=>props.handleToggleSidebar()} size={26}/>
        <img className='headerLogo' src="/public/youtube.png" alt="" />
        <form>
    <input type="text" placeholder='search' />
    <button type='submit'>
        <AiOutlineSearch  size={22}/>
    </button>
        </form>

        <div className='headerIcons'>
        <MdNotifications  size={28}/>
        <MdApps  size={28}/>
        <img className='headerLogo user' src="/public/user.png" alt="" />
        </div>
    </div>
  )
}

export default Header