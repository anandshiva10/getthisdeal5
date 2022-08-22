import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductContainer from '../productContainer/ProductContainer'
const Categories = ({data,dataFound}) => {
    const category= useParams().name
    const [fdata, setFdata]= useState([])
  
    useEffect(() => {
      const filtered= data.filter((item)=>
        item.data.cat.includes(category)
      );
      setFdata(filtered);
      console.log(fdata)
    }, [category,data])
    
    useEffect(() => {
  
      console.log("Changed products: ", fdata)
   
   }, [fdata])
    return (
      <div className='page'>
        <div className='title'>
                  <p>Best Online Deals from {category.includes('other') ? "other catgeories": category}</p>
                  
        </div>
        <hr className='title-line'/>
        <ProductContainer data={fdata} dataFound={dataFound} />
      </div>
      
    )
}

export default Categories