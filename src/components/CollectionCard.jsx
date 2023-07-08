import { Link } from "react-router-dom";

const CollectionCard = (props) => {
  return (
    <div className="group relative">
      <div className=" shadow-md bg-[#ffffff] p-4 flex flex-col justify-center hover:rotate-3 hover:scale-105 transition-all">
        <Link to={props.collection.link}>
          <div
            onClick={() => {
              props.setQuery(props.collection.query);
            }}
            className="relative h-80 w-full overflow-hidden sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
          >
            <img
              src={props.collection.image}
              alt={props.collection.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-6 text-3xl text-primary font-title text-center font-bold">
            {props.collection.title}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default CollectionCard;
