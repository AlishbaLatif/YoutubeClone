import React from 'react'
import "./style.scss"
import {AiFillEye}from "react-icons/ai"
const Video = () => {
  return (

      <div className="video">
        <div className="videoTop">
          <img src="https://i.ytimg.com/vi/WQdqgrWvy6g/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBPr1ArhpZSsYlRI6TrIRHInn3Sow" alt="" />
          <span>05:43</span>
        </div>
        <div className="videoTitle">
        Super11 Asia Cup 2023 | Super 4 | Pakistan vs India | Full Match Highlights
        </div>
        <div className="videoChannel">
          <img src="https://yt3.ggpht.com/6aLGUKNgK97FyqShBOoJwUd1kUtIJfDbx8Pvt31ceLmboNWMADnDSX7KsDxWrGWkLuPUO5vYpA=s68-c-k-c0x00ffffff-no-rj" alt="" />
          <p>Musa Syed</p>
        </div>
        <div className="videoDetails">
          <span>
<AiFillEye /> 5m views •
          </span>
          <span>5 days ago</span>
        </div>
      </div>
  )
}

export default Video