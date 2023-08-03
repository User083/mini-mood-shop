import { useEffect, useState, Fragment } from "react";
import { Loader, ProductCard } from "../components";

import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon, MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { categories, filters, sortOptions } from "../constants";
import {
  GetAllProducts,
  GetProductsByCategory,
  GetProductsByCategoryFiltered,
} from "../utils/APICalls";

function SortByPrice(array, direction) {
  let newArray = [];
  array.forEach((item) => {
    newArray.push(item);
  });
  direction === "price-high"
    ? newArray.sort((a, b) => b.price - a.price)
    : newArray.sort((a, b) => a.price - b.price);
  return newArray;
}

const ProductDisplay = (props) => {
  const [category, setCategory] = useState(props.query);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filtering, setFiltering] = useState(false);
  const [filter, setFilter] = useState(props.filter);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      switch (category) {
        case "products":
          GetAllProducts().then((res) => {
            setCurrentItems(res);
            setFilter("");
          });
          break;
        case "clothing":
          if (filter == "") {
            GetProductsByCategory(category).then((res) => {
              setCurrentItems(res);
            });
          } else {
            GetProductsByCategoryFiltered(category, props.filter).then(
              (res) => {
                setCurrentItems(res);
                setFilter("");
              }
            );
          }

          break;

        case "accessories":
          GetProductsByCategory(category).then((res) => {
            setCurrentItems(res);
            setFilter("");
          });

          break;
        default:
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }

    return;
  }, [category]);

  useEffect(() => {
    setFiltering(true);

    GetProductsByCategoryFiltered(category, filter)
      .then((res) => {
        setCurrentItems(res);
      })

      .catch((error) => console.log(error))
      .finally(setFiltering(false));
  }, [trigger, category]);

  return (
    <article className="bg-white flex flex-col lg:px-10 md:px-4 min-h-screen w-full">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-primary">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-secondary"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    {categories.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-secondary hover:text-gray-500">
                                <span className="font-medium text-primary">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.label}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="radio"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-tertiary text-highlight focus:ring-highlight"
                                      onChange={() => {
                                        setCategory(option.value);
                                      }}
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-600"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                            <h3 className="sr-only">Sort</h3>
                            {sortOptions.map((section) => (
                              <Disclosure
                                as="div"
                                key={section.id}
                                className="border-b border- py-6"
                              >
                                {({ open }) => (
                                  <>
                                    <h3 className="-my-3 flow-root">
                                      <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-secondary hover:text-gray-500">
                                        <span className="font-medium text-primary">
                                          {section.name}
                                        </span>
                                        <span className="ml-6 flex items-center">
                                          {open ? (
                                            <MinusIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          ) : (
                                            <PlusIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          )}
                                        </span>
                                      </Disclosure.Button>
                                    </h3>
                                    <Disclosure.Panel className="pt-6">
                                      <div className="space-y-4">
                                        {section.options.map(
                                          (option, optionIdx) => (
                                            <div
                                              key={option.value}
                                              className="flex items-center"
                                            >
                                              <input
                                                id={`filter-${section.id}-${optionIdx}`}
                                                name={`${section.id}[]`}
                                                defaultValue={option.value}
                                                type="radio"
                                                defaultChecked={false}
                                                className="h-4 w-4 rounded border-tertiary text-highlight focus:ring-highlight"
                                                onChange={() => {
                                                  setCurrentItems(
                                                    SortByPrice(
                                                      currentItems,
                                                      option.value
                                                    )
                                                  );
                                                }}
                                              />
                                              <label
                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                className="ml-3 text-sm text-gray-600"
                                              >
                                                {option.label}
                                              </label>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            ))}
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
            <h1 className="text-4xl font-bold tracking-tight text-primary">
              Products
            </h1>

            <div className="flex items-center">
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-secondary hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </section>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <section>
                  <h3 className="sr-only">Categories</h3>
                  {categories.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-secondary hover:text-gray-500">
                              <span className="font-medium text-primary">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.label}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="radio"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-tertiary text-highlight focus:ring-highlight"
                                    onChange={() => {
                                      setCategory(option.value);
                                    }}
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </section>

                <section>
                  <h3 className="sr-only">Filters</h3>
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-secondary hover:text-gray-500">
                              <span className="font-medium text-primary">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="radio"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-tertiary text-highlight focus:ring-highlight"
                                    onChange={() => {
                                      setFilter(`${option.value}`);
                                      setTrigger((prev) => !prev);
                                    }}
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </section>

                <h3 className="sr-only">Sort</h3>
                {sortOptions.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border- py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-secondary hover:text-gray-500">
                            <span className="font-medium text-primary">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="radio"
                                  defaultChecked={false}
                                  className="h-4 w-4 rounded border-tertiary text-highlight focus:ring-highlight"
                                  onChange={() => {
                                    setCurrentItems(
                                      SortByPrice(currentItems, option.value)
                                    );
                                  }}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="w-full flex items-center justify-center min-h-[400px]">
                  {loading || filtering ? (
                    <Loader />
                  ) : (
                    <>
                      {" "}
                      {currentItems.length > 0 && (
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 sm:grid-cols-1 gap-1">
                          {currentItems.map((product) => (
                            <ProductCard key={product._id} product={product} />
                          ))}
                        </div>
                      )}
                      {currentItems.length < 1 && <p>No results</p>}
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </article>
  );
};

export default ProductDisplay;
