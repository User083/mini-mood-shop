
const ProductCard = ({id, title, price, image, category}) => {

    return (
        <div className="bg-secondary rounded my-5 max-w-[300px]">
        <div className="aspect-h-1 aspect-w-1 h-[350px] overflow-hidden rounded-t bg-[#ffffff] px-5 py-5 flex items-center">
          <img src={image} alt={title} className="bg-white hover:opacity-75"/>          
        </div>
        <div className="px-5 py-3 flex flex-row justify-between h-[100px]">
          <div>
            <h3 className="text-sm font-bold text-primary">{title}</h3>
            <p className="text-sm text-tertiary">in: {category}</p> 
          </div>
        <div className="flex justify-end items-end">
          <p className="text-lg font-medium text-white">£{price}</p>
        </div>                      
        </div>
        </div>
    )
}

export default ProductCard