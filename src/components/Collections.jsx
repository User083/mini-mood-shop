import { collections } from "../constants"
import {CollectionCard} from "./index"

const Collections = (props) => {

    return (
        <div className="bg-highlight rounded xs:px-10 px-6">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-5 xs:px-1">
          <div className="mx-auto max-w-2xl py-12 lg:max-w-none sm:max-w-[400px]">
            <h2 className="text-2xl font-bold text-primary border-b border-secondary pb-5">Categories</h2>      
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 mt-6" >      
                
                    {collections.map((item, index) => (
                <CollectionCard key={item.id} id={item.id} index={index} {...props} collection={item} />
            ))}
        
                </div>           
            </div>
          </div>
        </div>
    )
}

export default Collections