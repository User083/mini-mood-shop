import { useState } from "react";
import { ProductCard } from "../components"
import axios from "axios";
import useAxios from "../utils/useAxios";
import { loader } from "../assets";
import { collections } from "../constants";



const ProductDisplay = ({query, title}) => {
 
  const [category, setCategory] = useState("products");
  const [result, error, loading, refetch] = useAxios({
    axiosInstance: axios.create({
      baseURL: "https://burgundy-millipede-cuff.cyclic.app/"
  }),
    method: 'GET',
    url: category,
    requestConfig: {
      // timeout : 2000
    }
  });
  console.log(result)
    return(

        <div className="w-4/6 my-10 flex flex-col lg:px-10 md:px-4 min-h-screen">
          <div className="flex justify-between my-2">
            <h2 className="text-primary font-bold mx-5 text-2xl">Products</h2>
            <div className="flex gap-5 flex-wrap sm:gap-2">
              <button onClick={()=>{
              setCategory("women"); 
              refetch()}}
            className="bg-secondary rounded px-2 text-white hover:bg-tertiary w-[100px] focus:bg-highlight">Women's</button>
              <button onClick={()=>{
              setCategory("men"); 
              refetch()}}
            className="bg-secondary rounded px-2 text-white hover:bg-tertiary w-[100px] focus:bg-highlight">Men's</button>
            <button onClick={()=>{
              setCategory("accessories"); 
              refetch()}}
            className="bg-secondary rounded px-2 text-white hover:bg-tertiary w-[100px] focus:bg-highlight">Jewellery</button>
          </div>
            </div>
            
          <div className="w-full flex items-center justify-center min-h-[400px]">
          {loading && <img src={loader} className="animate-spin h-[50px]"/>}
          {!loading && error && <p className='text-secondary text-center font-medium'>{error}</p>}
          {!loading && !error && result &&  <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 sm:grid-cols-1 gap-1">
                {result.map((product)=>(
                  <ProductCard key={product.id} {...product}/>
                 ))}
          </div>}                
          </div>
      </div>
    )
}

export default ProductDisplay