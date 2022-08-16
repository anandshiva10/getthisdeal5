import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.jpeg'
import "./navbar.css"
const Navbar = () => {
   const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
  
        
           <div className='navbar'>
                <div className='nav-logo'>
             <a href="#" className='logo'><img src={logo}/></a>
             </div>
             <div className='hamburger' onClick={handleClick}>
             {click ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}
             </div>
             <ul className={click? 'nav-menu active' : 'nav-menu'}>
                <li onClick={handleClick}><Link to="/">Home</Link></li>
                <li><a >Store</a>
                    <ul>
                        <li onClick={handleClick}><Link to="/store/amazon">Amazon</Link></li>
                        <li onClick={handleClick}><Link to="/store/flipkart">Flipkart</Link></li>
                        <li onClick={handleClick}><Link to="/store/myntra">Myntra</Link></li>
                        <li onClick={handleClick}><Link to="/store/ajio">Ajio</Link></li>
                        <li onClick={handleClick}><Link to="/store/other">Other</Link></li>
                    </ul>
                    </li>
                <li onClick={handleClick}><Link to="/hotdeals">Hot Deals</Link></li>
            </ul>
        </div>
  
  )
}

export default Navbar