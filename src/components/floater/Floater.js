import React from 'react'
import "./floater.css"
const Floater = () => {
  return (
    <div>
        <a href="https://t.me/getthisdeal" class="float">
        <img src={process.env.PUBLIC_URL +`/icons/telegram.png`}/>
         </a>
    </div>
  )
}

export default Floater