import { useState } from "react";
import { ProductCard } from "../components"
import axios from "axios";
import useAxios from "../utils/useAxios";
import { loader } from "../assets";



const ProductDisplay = ({url, name}) => {
 

  const [result, error, loading, refetch] = useAxios({
    axiosInstance: axios.create({
      baseURL: "https://fakestoreapi.com/"
  }),
    method: 'GET',
    url: url,
    requestConfig: {
      // timeout : 2000
    }
  });


 console.log(result, error, loading)
    return(

        <div className="w-4/6 bg-tertiary my-10 flex flex-col lg:px-10 md:px-4 rounded min-h-[700px]">
          <h2 className="text-primary font-bold mx-5 mt-5 text-2xl">{name}</h2>
          <div className="w-full flex items-center justify-center min-h-[400px]">
          {loading && <img src={loader} className="animate-spin h-[50px]"/>}
          {!loading && error && <p className='text-secondary text-center font-medium'>{error}</p>}
          {!loading && !error && result &&  <div className="flex flex-wrap items-center justify-evenly">
                {result.map((product)=>(
                  <ProductCard key={product.id} {...product}/>
                 ))}
          </div>}                
          </div>
      </div>
    )
}

export default ProductDisplay