import React from 'react'
import {ScaleLoader} from 'react-spinners'
import Product from './Product'
import "./productContainer.css"
const ProductContainer = ({data,dataFound}) => {
    console.log(data)
  return (
    <div className=''>
        {dataFound ? (data.length=== 0 ? <div className='title'>
                <p>Oops.. No deals are available right now.</p>
                <p>Please come back later</p>
                </div> : 
            <div className='product-container'>{
            Object.keys(data).map((id)=>{
                return(
                    <Product data={data[id].data} key={data[id].id} id={data[id].id} />
                )
            })}
            </div>
    ):<div className='spinner'><ScaleLoader />
    <p>Please wait while we fetch you a best deals.</p>
    </div>
    }
    </div>
  )
}

export default ProductContainer