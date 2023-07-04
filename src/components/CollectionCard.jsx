const CollectionCard = ({id, title, description, image, link}) => {

    return (

        <div className="group relative">
          <div className=" shadow-md bg-[#ffffff] p-4 flex flex-col justify-center hover:rotate-3 hover:scale-105 transition-all">
       <a href={link}>
        <div className="relative h-80 w-full overflow-hidden sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          <img src={image} alt={title} className="h-full w-full object-cover object-center"/>
          
        </div>
        <h3 className="mt-6 text-3xl text-primary font-title text-center font-bold">
               {title}
        </h3>
        </a> 
          </div>  
            </div>
     

    )
}

export default CollectionCard