import React, { useEffect, useState } from 'react'
import "./style.scss"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/Actions/authAction';


const LoginScreen = () => {
  const[navigate,setNavigate]=useState("")
  
  
  
  const dispatch = useDispatch()

  const accessToken = useSelector(state => state.auth.accessToken)

  const handleLogin = () => {
     dispatch(login())
  }
console.log(login())
useEffect(()=>{
    if(accessToken){
      navigate("/")
    }
},[accessToken])


  return (
    <div className='login'>
        <div className='loginContainer'>
    <img src="/public/youtube.png" alt="" />
    <button onClick={handleLogin} >Login With Google</button>
    <p>Project Made with Youtube API</p>
        </div>
    </div>
  )
}

export default LoginScreen