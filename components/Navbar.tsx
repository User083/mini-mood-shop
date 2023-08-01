"use client";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { logo } from "@/assets";
import { navigation } from "@/utils/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
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
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-primary"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-primary text-primary"
                                : "border-transparent text-highlight",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div key={category.name}>
                          <ul
                            role="list"
                            aria-labelledby={`${category.name}-heading`}
                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                          >
                            {category.items.map((item) => (
                              <li key={item.name} className="flex">
                                <Link
                                  href={item.href}
                                  aria-label="Close menu"
                                  className="hover:text-highlight"
                                  onClick={() => {
                                    // props.setQuery(item.query);
                                    setOpen(false);
                                  }}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-secondary px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-secondary"
                        aria-label="To page"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="border-t border-secondary px-4 py-6">
                  <div className="-m-2 flex items-center p-2">
                    <Image
                      src="https://tailwindui.com/img/flags/flag-united-kingdom.svg"
                      alt="flag"
                      height={10}
                      width={10}
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-primary">
                      GBP
                    </span>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <section
        aria-label="Top"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="border-b border-tertiary">
          <div className="flex h-16 items-center">
            <button
              type="button"
              className="rounded-md bg-white p-2 text-secondary lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link href="/" aria-aria-label="Home">
                <span className="sr-only">MiniMood</span>
                <Image className="h-8 w-auto" src={logo} alt="logo" />
              </Link>
            </div>

            {/* Flyout menus */}
            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                {navigation.categories.map((category) => (
                  <Popover key={category.name} className="flex">
                    {({ open }) => (
                      <>
                        <div className="relative flex">
                          <Popover.Button
                            onClick={() => {
                              // setOpenNav((prev) => !prev);
                              router.push("/shop");
                            }}
                            className={classNames(
                              open
                                ? "bg-highlight text-primary"
                                : "text-highlight hover:text-black hover:animate-pulse",
                              "relative z-10 -mb-px flex items-center pt-px text-sm font-medium transition-colors duration-200 ease-out px-2"
                            )}
                            aria-label="Shop now"
                          >
                            Shop Now
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          show={openNav}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute inset-x-0 top-full text-sm text-secondary">
                            <div
                              className="absolute inset-0 top-1/2 bg-white shadow"
                              aria-hidden="true"
                            />

                            <div className="relative bg-white">
                              <div className="mx-auto max-w-7xl px-8">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                  <div className="col-start-2 grid grid-cols-2 gap-x-8"></div>
                                  <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                    <div key={category.name}>
                                      <p
                                        id={`${category.name}-heading`}
                                        className="font-medium text-primary"
                                      >
                                        {category.name}
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby={`${category.name}-heading`}
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {category.items.map((item) => (
                                          <li key={item.name} className="flex">
                                            <Link href={item.href}>
                                              <button
                                                onClick={() => {
                                                  // props.setQuery(item.query);
                                                  setOpenNav(false);
                                                }}
                                                className="hover:text-highlight"
                                                aria-label="Toggle navbar"
                                              >
                                                {item.name}
                                              </button>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ))}

                {navigation.pages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className="flex items-center text-sm font-medium text-primary hover:text-highlight"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </Popover.Group>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:ml-8 lg:flex">
                <Image
                  src="https://tailwindui.com/img/flags/flag-united-kingdom.svg"
                  alt="Currency flag"
                  height={10}
                  width={10}
                  className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-sm font-medium text-primary">
                  GBP
                </span>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6 lg:flex gap-2 items-center">
                <div className="border-r border-secondary pr-2">
                  <span className="ml-3 block text-sm font-medium text-primary">
                    Cart
                  </span>
                </div>
                <Link href="/cart" className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-tertiary group-hover:text-highlight"
                    aria-hidden="true"
                  />
                  {/* <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {props.counter}
                  </span> */}
                  <span className="sr-only">items in cart, view cart</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
