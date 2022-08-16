import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'
import "./productContainer.css"
import ProductData from './ProductData'

const ProductInformation = ({data,dataFound}) => {
    let id=useParams().id
    const [product,setProduct] = useState({data:{ product_main_image_url:"https://www.chanchao.com.tw/images/default.jpg"}})
    const [fdata, setFdata]= useState([])

 useEffect(() => {
   const d=data.find(o => o.id === id)
   console.log(d)
   setProduct(d)
   console.log(product)
 }, [data])
 
 useEffect(() => {
  console.log("Changed products: ", product)
}, [product])


useEffect(() => {
    const filtered= data.filter((item)=>
      item.data.hot_deal
    );
    setFdata(filtered);
    console.log(fdata)
  }, [data])
  
  useEffect(() => {
    console.log("Changed products: ", fdata)
 }, [fdata])

    return (
        <div className='page'>
            {
                dataFound ?   (<>
                <ProductData product={product}/>
                </>) : (<div className='spinner'><ScaleLoader/><p>Please wait while we fetch you this product.</p></div>) 
            }
    </div>
  )
}

export default ProductInformation