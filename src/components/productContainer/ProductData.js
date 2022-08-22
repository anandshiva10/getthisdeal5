import React, { useEffect, useState } from 'react'
import "./productData.css"
const ProductData = ({product}) => {
   const [time, setTime] = useState()
function getTimeData(date1){

    var date2 = new Date().getTime();
    var diff = date2 - date1;
    var msec = diff;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    var time=""
    if(hh<1){
        if(mm<1){
            time=ss+" seconds ago"
        }
        else{
            if(mm===1)
            time=mm +" minute ago"
            else
            time=mm +" minutes ago"
        }
    }
    else{
        if(hh===1)
        time=hh + " hour ago"
        else
        time=hh + " hours ago"
    }
    return(time);
}

useEffect(() => {
    console.log(product)
    var time2= getTimeData(product.data.created_timeStamp)
   setTime(time2)
}, [product])

  return (
    <>
    <div className='p-info'>
        <div className='row'>
            <div className='row-image'>
            <img  src={product.data.product_main_image_url}/>
            </div>
            <div className='row-info'>
                <div className='p-title'>
                {
                    product.data.product_title
                }
                </div>
                <div className='product-subtitle'>
                <div className='price-info'> 
                <p>Offer Price: <span>₹{product.data.app_sale_price}</span></p>
                <p className='mrp'>MRP: ₹{product.data.original_price}</p>
                <p>Discount: ₹{product.data.discount} ({product.data.discount_percentage})%</p>
                </div>
                <div className='img-link'>
                <div>                            
                        <img src={process.env.PUBLIC_URL +`/icons/${product.data.site}.png`}/>
                </div>
                <div> 
                <a href={product.data.product_url} className="btn-link">Get this Deal</a>                        </div>
                </div>
                </div>
            </div>
        </div>
        <div className='row-2'>
            <div className='col-21'>
                <p className='col-title'>How to avail this offer?</p>
                <p className='col-point'>1. <a href={product.data.product_url}>Click Here</a> to go to <span className='capitalize'>{product.data.site} </span> Page</p>
                <p className='col-point'>2. You can see the product which you just selected.</p>
                <p className='col-point'>3. Then add this product into your cart</p>
                <p className='col-point'>4. Login / Signup in Your Account(if you didn't)</p>
                <p className='col-point'>5. Apply Coupon Code (If any available) to get discount on {product.data.site}</p>
                <p className='col-point'>6. Enter Your Address and choose payment mode.</p>
                <p className='col-point'>7. Make the Payment if it is not COD.</p>
                <p className='col-point'>8. Hurraayyy!! You'll get the {product.data.product_title}.</p>
            </div>
            <div className='col-22'>
                <div className='side-headings'>
                    <p className='col-title'><i class="fa-solid fa-store"></i> Merchant</p>
                    <p className='capitalize col-data'>{product.data.site}</p>
                </div>
                <div className='side-headings'>
                    <p className='col-title'><i class="fa-solid fa-calendar-check"></i>  Posted</p>
                    <p className='capitalize col-data'>{time}</p>
                </div>
                {
                    product.data.comment && (<div className='coupon'><i class="fa-solid fa-ticket"></i> {product.data.comment}</div>)
                }
            </div>
        </div>
    </div>
    
    </>
  )
}

export default ProductData