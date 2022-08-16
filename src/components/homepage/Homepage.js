import React from 'react'
import ProductContainer from '../productContainer/ProductContainer'
import "./homepage.css"
const Homepage = ({data,dataFound}) => {

  return (
    <div className='homepage'>
      <div className='title'>
                <p>Enjoy best online Deals, Discounts and Cashbacks!!</p>
                
      </div>
      <hr className='title-line'/>
      <ProductContainer data={data} dataFound={dataFound}/>
    </div>
  )
}

export default Homepage