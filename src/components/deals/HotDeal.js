import React, { useEffect, useState } from 'react'
import ProductContainer from '../productContainer/ProductContainer';

const HotDeal = ({data,dataFound}) => {
    const [fdata, setFdata]= useState([])
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
    <div>
        <div className='page'>
      <div className='title'>
                <p>🔥Hot Deals🔥 </p>
                
      </div>
      <hr className='title-line'/>
      <ProductContainer data={fdata} dataFound={dataFound} />
    </div>
    </div>
  )
}

export default HotDeal