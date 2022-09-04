import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import "./navbar.css"
const Navbar = () => {
   const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
  
        
           <div className='navbar'>
                <div className='nav-logo'>
                <Link to="/" className='logo'><img src={logo}/></Link>
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
                    <li><a >Categories</a>
                    <ul>
                        <li onClick={handleClick}><Link to="/category/fashion">Fashion</Link></li>
                        <li onClick={handleClick}><Link to="/category/electronics">Electronics</Link></li>
                        <li onClick={handleClick}><Link to="/category/home">Home Appliances</Link></li>
                        <li onClick={handleClick}><Link to="/category/books">Books</Link></li>
                        <li onClick={handleClick}><Link to="/category/sports">Sports</Link></li>
                        <li onClick={handleClick}><Link to="/category/mobiles">Mobiles</Link></li>
                        <li onClick={handleClick}><Link to="/category/kitchen">Kitchen</Link></li>
                        <li onClick={handleClick}><Link to="/category/kids">Kids</Link></li>
                        <li onClick={handleClick}><Link to="/category/grocery">Grocery</Link></li>
                        <li onClick={handleClick}><Link to="/category/other">Others</Link></li>
                    </ul>
                    </li>
                <li onClick={handleClick}><Link to="/hotdeals">Hot Deals</Link></li>
            </ul>
        </div>
  
  )
}

export default Navbar