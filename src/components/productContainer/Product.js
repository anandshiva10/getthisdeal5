import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "./productContainer.css"

const Product = ({data,id}) => {
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
        var time2= getTimeData(data.created_timeStamp)
       setTime(time2)
    }, [data])
  return (
        <div className='product'>
            <div className="times"><i class="fa-solid fa-clock"></i><p>{time}</p></div>
            <Link to={`/p/${id}`} >
                <div className='product-image'>
                    <img src={data.product_main_image_url}  />
                </div>
            </Link>
                <div className='product-info'>
                    <div className='product-title'>
                    <p class="mnoti-text">{data.product_title}</p>
                    </div>
                    <hr className="line"/>
                    <div className='product-price'>
                        <div className='product-actualPrice'>
                            <p><span className="product-discount">MRP:</span> <span className='price'>₹{data.original_price}</span> ₹{data.app_sale_price}</p>                       
                           
                        </div>
                        <div className='product-discount'>
                            <p>You Save: ₹{data.discount} ({data.discount_percentage}%)</p>
                        </div>
                    </div>
                    <div className="link-img">
                        <a href={data.product_url} className="button-link">
                        Shop Now
                        </a>
                        <img src={process.env.PUBLIC_URL +`/icons/${data.site}.png`} />
                    </div>
                    

                </div>
            </div>

  )
}

export default Product