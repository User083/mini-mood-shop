import { useState } from "react"
import { Construction, } from "../components"

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '£90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '£32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 3,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '£32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
]

const Cart = () => {
  const [price, setPrice] = useState("0.00");
 
    return(
        <div className="bg-white flex w-full min-h-screen justify-center">
          <div className="flex w-4/6 gap-10 justify-center items-center my-12 h-full flex-col lg:flex-row lg:w-full lg:items-start">
 {/* products */}
                      <div className="mt-8 w-full max-w-[500px] ">
                        <div className="flow-root border-b border-secondary pb-5">
                          <ul role="list" className="-my-6 divide-y divide-tertiary">
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded border border-white">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-primary">
                                      <h3>
                                        <a href={product.href}>{product.name}</a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-secondary">{product.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-secondary">Qty {product.quantity}</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-highlight hover:text-tertiary"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                   

          {/* price and checkout */}
          <div className="rounded px-4 py-6 sm:px-6 border-[20px] shadow-md border-secondary min-w-[250px] max-w-[500px] w-full flex flex-col gap-2 mx-10 mt-0 lg:mt-10">
            <div className="border-b py-2 border-secondary">
              <h1 className="font-bold text-lg">Order Summary</h1>
            </div>
                      <div className="flex justify-between text-base font-medium text-primary">
                        <p>Subtotal</p>
                        <p>£{price}</p>
                      </div>
                      <div className="flex justify-between text-base text-secondary">
                        <p>Shipping</p>
                        <p>£5.00</p>
                      </div>
                      <div className="flex justify-between text-base text-secondary">
                        <p>Taxes</p>
                        <p>£11.00</p>
                      </div>
                      <div className="flex justify-between text-base font-medium text-primary border-t border-secondary">
                        <p>Total</p>
                        <p>£16.00</p>
                      </div>
                      <div className="mt-6 flex justify-center">
                        <a
                          href="/cart/checkout"
                          className="flex items-center justify-center rounded-md border border-transparent bg-highlight px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-tertiary"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-primary">
                        <p>
                          or &nbsp;
                          <a
                            href="/store"
                            className="font-medium text-highlight hover:text-black"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </a>
                        </p>
                      </div>
                    </div>
          </div>
         
                  
      </div>
    )
}

export default Cart