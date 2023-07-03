import { Construction, ProductDisplay } from "../components"


const filter = {url: "products", name: "Products"}
const women = {url: "products/category/women's clothing", name: "Women's Clothing"}
const men = {url: "products/category/men's clothing", name: "Men's Clothing"}

const Store = () => {
 
 
    return(
        <div className="bg-white flex w-full h-full flex-col items-center">
          <ProductDisplay {...filter}/>
      </div>
    )
}

export default Store