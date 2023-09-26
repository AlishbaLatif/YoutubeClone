import React from 'react'
import "./style.scss"
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
  MdHistory
}from "react-icons/md"
const Sidebar = (props) => {
  
  return (
    <nav className={`${props.togglebar?"sidebar": ""}`}
    onClick={()=>props.handleToggleSidebar(false)}
    >

      <li>
        <MdHome  size={23}/>
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions  size={23}/>
        <span>Subscriptions</span>
      </li>
      <li>
        <MdThumbUp  size={23}/>
        <span>Liked</span>
      </li>
      <li>
        <MdHistory  size={23}/>
        <span>History</span>
      </li>
      <hr />
      <li>
        <MdExitToApp  size={23}/>
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  )
}

export default Sidebar