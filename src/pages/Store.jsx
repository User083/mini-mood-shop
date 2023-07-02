import { useState } from "react";
import { Construction, ProductCard } from "../components"


const Store = () => {
 const [products, setProducts] = useState([]);
 fetch('https://fakestoreapi.com/products')
 .then(res=>res.json())
 .then(json=> setProducts(json))


    return(
        <div className="bg-white">
          <Construction/> 
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">   
                 {products.map((product)=>(
                  <ProductCard {...product}/>
                 ))}
          </div>
        </div>
      </div>
    )
}

export default Store