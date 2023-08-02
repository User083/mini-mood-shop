import { Link } from "react-router-dom";
import { cardigans } from "../constants";

const Promo = (props) => {
  return (
    <article className="relative overflow-hidden w-full lg:py-10 pointer-events-none">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 ">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8  ">
          <section className="sm:max-w-lg ">
            <h1 className="text-4xl font-bold text-primary font-title sm:text-6xl ">
              Something special for the ladies...
            </h1>
            <p className="mt-4 text-xl text-black">
              Our brand new designer cardigans are here just in time for winter!
              Whether you're in the{" "}
              <span className="text-highlight tracking-wide">mood</span> to
              brave the cold or curl up by the fire, our cardigans will keep you
              cozy and stylish.
            </p>
          </section>
          <div>
            <section className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <section className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 ">
                      <div className="h-64 w-44 overflow-hidden rounded sm:opacity-0 lg:opacity-100 shadow-lg hover:scale-110 transition-all pointer-events-auto">
                        <img
                          src={cardigans[1]}
                          alt="Cardigan"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded shadow-lg hover:scale-110 transition-all pointer-events-auto">
                        <img
                          src={cardigans[2]}
                          alt="Cardigan"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </section>
                    <section className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded shadow-lg hover:scale-110 transition-all pointer-events-auto">
                        <img
                          src={cardigans[3]}
                          alt="Cardigan"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded shadow-lg hover:scale-110 transition-all pointer-events-auto">
                        <img
                          src={cardigans[4]}
                          alt="Cardigan"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded shadow-lg hover:scale-110 transition-all pointer-events-auto">
                        <img
                          src={cardigans[5]}
                          alt="Cardigan"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </section>
                    <section className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded shadow-lg hover:scale-110 transition-all pointer-events-auto">
                        <img
                          src={cardigans[6]}
                          alt="Cardigan"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded shadow-lg hover:scale-110 transition-all pointer-events-auto">
                        <img
                          src={cardigans[7]}
                          alt="Cardigan"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </section>
                  </div>
                </div>
              </div>

              <Link
                to={"/store/clothing--cardigans"}
                aria-label="Shop collection"
                className="inline-block rounded-md border border-transparent bg-secondary px-8 py-3 text-center font-medium text-white hover:bg-highlight pointer-events-auto"
              >
                Shop Collection
              </Link>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Promo;
