import { collections } from "../constants"
import {CollectionCard} from "./index"

const Collections = (props) => {

    return (
        <div className="bg-highlight rounded px-10">
        <div className="mx-auto max-w-7xl px-10 sm:px-6 lg:px-8 py-5">
          <div className="mx-auto max-w-2xl py-12 lg:max-w-none">
            <h2 className="text-2xl font-bold text-primary border-b border-secondary pb-5">Categories</h2>      
                <div className="mt-6 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">      
                
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