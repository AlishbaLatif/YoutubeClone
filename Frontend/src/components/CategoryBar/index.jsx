import React, { useState } from 'react'
import "./style.scss"

const keywords=[
  'All',
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Coding",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
]
const CategoryBar = () => {
  const[activeelement,setActiveElement]=useState('All');
  const handleClick=(value)=>{
    setActiveElement(value)
  }
  return (
  <div className='CategoryBar'>
{keywords.map((value,index)=>( 
      <span 
      onClick={()=>handleClick(value)}
      key={index}
      className={activeelement===value?"active":" "}
      >
        {value}
      </span>
      
      ))
}
    </div>
  )
}

export default CategoryBar