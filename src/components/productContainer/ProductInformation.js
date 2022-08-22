import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'
// import "./productContainer.css"
import ProductData from './ProductData'

const ProductInformation = ({data,dataFound}) => {
    let id=useParams().id
    const [product,setProduct] = useState({data:{ product_main_image_url:"https://www.chanchao.com.tw/images/default.jpg"}})

 useEffect(() => {
  var d={}
  d=data.find(o => o.id === id)
   console.log(d)
   setProduct(d)
  //  console.log("product length =>"+Object.keys(d[0]).length)
 }, [data])
 
 useEffect(() => {
  console.log("Changed products: ", product)
}, [product])


    return (
        <div className='page'>
            {
                dataFound ?  product==null ?  (<div className='title'>
                <p>Oops.. Product not found</p>
                <p>Please enter the correct link</p>
                </div>): (<>
                <ProductData product={product}/>
                </>)  : (<div className='spinner height' ><ScaleLoader/><p>Please wait while we fetch you this product.</p></div>) 
            }
    </div>
  )
}

export default ProductInformation