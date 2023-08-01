"use-client";
import Link from "next/link";
import { collections } from "@/utils/constants";
import Image, { StaticImageData } from "next/image";

interface IProps {
  link: string;
  image: StaticImageData;
  title: string;
  query: string;
  index: number;
}

const CollectionCard = ({ image, title, link }: IProps) => {
  return (
    <section className="group relative">
      <div className=" shadow-md bg-[#ffffff] p-4 flex flex-col justify-center hover:rotate-3 hover:scale-105 transition-all">
        <Link href={link} aria-label="View collection">
          <div
            // onClick={() => {
            //   props.setQuery(query);
            // }}
            className="relative h-80 w-full overflow-hidden sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
          >
            <Image
              src={image}
              alt={title}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-6 text-3xl text-primary font-title text-center font-bold">
            {title}
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
              <CollectionCard key={item.id} index={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};

export default CollectionsBanner;