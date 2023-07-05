import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import axios from "axios";
import useAxios from "../utils/useAxios";
import { useEffect, useState } from 'react';

const ProductCard = ({id, title, price, image, category}) => {

  async function addItem(id)
  {
    await axios({
      method: 'POST',
      url: `https://burgundy-millipede-cuff.cyclic.app/cart/`,
      headers : {
        "Content-Type": "application/json",
      },
      data: {
          "id": id,
    "title": title,
    "price": price,
    "image": image,
    "category": category
      }
    })
    .then((r) => {
      
    });
  }


    return (
        <div id={id} className="bg-secondary rounded my-5 md:max-w-[300px]">
        <div className="aspect-h-1 aspect-w-1 h-[350px] overflow-hidden rounded-t py-5 flex items-center ">
          <img src={image} alt={title} className="bg-white hover:opacity-75"/>          
        </div>
        <div className="px-5 py-3 flex flex-col justify-between h-[100px] overflow-hidden">
          <div>
            <h3 className="text-sm font-bold text-primary">{title}</h3>
            <p className="text-sm text-tertiary">in: {category}</p> 
          </div>
        <div className="flex justify-between items-end">

          <p className="text-lg font-medium text-white">£{price}</p>
          <button
          onClick={()=>{
            
            addItem(id)
          }}>
          <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 text-tertiary hover:text-highlight"
          aria-hidden="true"
         />
          </button>

          </div>                      
          </div>
        </div>
    )
}

export default ProductCard