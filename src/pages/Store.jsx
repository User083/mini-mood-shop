import { Construction, ProductDisplay } from "../components"
import { collections } from "../constants"



const Store = (props) => {
 
 
    return(
        <div className="bg-white flex w-full h-full flex-col items-center">
          <ProductDisplay {...props}/>
      </div>
    )
}

export default Store