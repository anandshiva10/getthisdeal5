import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import Store from "./components/store/Store";
import { firestore } from "./utils/firebase";
import {collection, getDocs} from "firebase/firestore"
import HotDeal from "./components/deals/HotDeal";
import ProductInformation from "./components/productContainer/ProductInformation";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Floater from "./components/floater/Floater";

function App() {
  const [data,setData] = useState([])
  const [dataFound, setDataFound]=useState(false)
  useEffect(() => {
      const productListRef= collection(firestore,'products')
      
      getDocs(productListRef).then(response  => {
          const products=response.docs.map(doc=>({
              data: doc.data(),
              id: doc.id,
          }))
          // console.log(products)
          setData(products)
          
          console.log(data)
      }).catch(error =>console.log(error));

      return()=>{
          setData({})
      }
      
  
  }, [])

  useEffect(() => {

    console.log("Changed products: ", data)
    // console.log(data.length)
 }, [data])

useEffect(()=>{
 
  setTimeout(()=>{
    setDataFound(true)
  },5000)
},[])
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path ="/" element={<Homepage data={data} dataFound={dataFound}/>} />
      <Route path="/store/:name" element={<Store data={data} dataFound={dataFound}/>}/>
      <Route path="/hotdeals" element={<HotDeal data={data} dataFound={dataFound}/>}/>
      <Route path="/p/:id" element={<ProductInformation data={data} dataFound={dataFound}/>}/>
      </Routes>
      <Floater/>
      <Footer/>
    </div>
  );
}

export default App;
