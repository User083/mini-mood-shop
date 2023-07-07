import {ProductDisplay } from "../components"




const Store = (props) => {
 

    return(
        <div className="bg-white flex w-full h-full flex-col items-center">
          <ProductDisplay setCart={props.setCart} cart={props.cart} query={props.query} setCounter={props.setCounter}/>
      </div>
    )
}

export default Store