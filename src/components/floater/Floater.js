import React, { useState } from 'react'
import "./floater.css"
const Floater = () => {
  const [show, setShow] = useState(true)
  return (
    <div className={show ?'float' : 'none'}>
      <div className='close' onClick={()=>setShow(false)}><i class="fa-solid fa-xmark"></i></div>
      <a href="https://t.me/getthisdeal" >
      <div className="float-data">
      
        <img src={process.env.PUBLIC_URL +`/icons/telegram.png`}/>
       
        Join us on telegram
        
      </div>
      </a> 
         
    </div>
  )
}

export default Floater