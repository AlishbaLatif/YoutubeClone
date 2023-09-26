import { Children, useState } from "react";
import {Container} from "react-bootstrap"
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";



const Layout=()=>{
    const[togglebar,setTogglebar]=useState(false);
  
    const handleToggleSidebar=()=>{
      setTogglebar(!togglebar)
    }
    return(
      <>
     <Header  handleToggleSidebar={handleToggleSidebar} />
      <div className="app-container ">
        <Sidebar  togglebar={togglebar} handleToggleSidebar={handleToggleSidebar} />
       <Container fluid >
      <Outlet/>
       </Container>
      </div> 
      </>
      )
  }
  
  export default Layout;