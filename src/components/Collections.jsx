import { collections } from "../constants"
import {CollectionCard} from "./index"

const Collections = () => {

    return (
        <div className="bg-highlight">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-12 lg:max-w-none">
            <h2 className="text-2xl font-bold text-primary">Collections</h2>      
                <div className="mt-6 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">      
                
                    {collections.map((item, index) => (
                <CollectionCard key={item.id} id={item.id} index={index} {...item}/>
            ))}
        
                </div>           
            </div>
          </div>
        </div>
    )
}

export default Collections