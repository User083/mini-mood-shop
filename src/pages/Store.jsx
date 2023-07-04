import { Construction, ProductDisplay } from "../components"
import { collections } from "../constants"



const Store = () => {
 
 
    return(
        <div className="bg-white flex w-full h-full flex-col items-center">
          <ProductDisplay {...collections[0]}/>
      </div>
    )
}

export default Store