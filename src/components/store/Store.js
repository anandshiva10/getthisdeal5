import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductContainer from '../productContainer/ProductContainer'
import "./store.css"
const Store = ({data,dataFound}) => {
  const store= useParams().name
  const [fdata, setFdata]= useState([])

  useEffect(() => {
    const filtered= data.filter((item)=>
      item.data.site.includes(store)
    );
    setFdata(filtered);
    console.log(fdata)
  }, [store,data])
  
  useEffect(() => {

    console.log("Changed products: ", fdata)
 
 }, [fdata])
  return (
    <div className='page'>
      <div className='title'>
                <p>Best Online Deals from {store.includes('other') ? "other websites": store}</p>
                
      </div>
      <hr className='title-line'/>
      <ProductContainer data={fdata} dataFound={dataFound} />
    </div>
    
  )
}

export default Store