"use-client";
import Link from "next/link";

const CollectionCard = (props) => {
  return (
    <section className="group relative">
      <div className=" shadow-md bg-[#ffffff] p-4 flex flex-col justify-center hover:rotate-3 hover:scale-105 transition-all">
        <Link href={props.collection.link} aria-label="View collection">
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
    </section>
  );
};

const CollectionsBanner = () => {
  return (
    <article className="bg-highlight rounded xs:px-10 px-6">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-5 xs:px-1">
        <section className="mx-auto max-w-2xl py-12 lg:max-w-none sm:max-w-[400px]">
          <h2 className="text-2xl font-bold text-primary border-b border-secondary pb-5">
            Categories
          </h2>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 mt-6">
            {collections.map((item, index) => (
              <CollectionCard
                key={item.id}
                id={item.id}
                index={index}
                {...props}
                collection={item}
              />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};

export default CollectionsBanner;
