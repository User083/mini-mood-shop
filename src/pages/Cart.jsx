import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartProduct } from "../components";

function CalcTotal(subtotal, tax, shipping) {
  let x = subtotal + tax + shipping;
  return x;
}

const Cart = (props) => {
  const [subtotal, setSubtotal] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  const [shipping, setShipping] = useState(0.0);
  const [taxes, setTaxes] = useState(0.0);
  const [products, setProducts] = useState(props.cart);

  useEffect(() => {
    props.setCart(products);
    let productTotal = 0.0;
    let totalPrice = 0.0;
    let totalTax = 0.0;
    let totalShipping = 0.0;

    products.forEach((item) => {
      productTotal = productTotal + parseFloat(item.price);
    });
    setSubtotal(productTotal);
    if (products.length > 0 && productTotal < 50.0) {
      totalShipping = 5.0;
    }
    totalTax = productTotal * 0.2;
    setTaxes(totalTax);
    setShipping(totalShipping);
    totalPrice = CalcTotal(productTotal, totalTax, totalShipping);
    setTotal(totalPrice);
  });

  return (
    <div className="bg-white flex w-full min-h-screen justify-center">
      <div className="flex w-4/6 gap-10 justify-center items-center my-12 h-full flex-col lg:flex-row lg:w-full lg:items-start">
        {/* products */}
        <div className="mt-8 w-full max-w-[500px] ">
          <div className="flow-root border-b border-secondary pb-5">
            <ul role="list" className="-my-6 divide-y divide-tertiary">
              {products.map((product, index) => (
                <CartProduct
                  product={product}
                  index={index}
                  setProducts={setProducts}
                  products={products}
                  key={product.id}
                  setCounter={props.setCounter}
                  cart={props.cart}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* price and checkout */}
        <div className="rounded px-4 py-6 sm:px-6 border-[20px] shadow-md border-secondary min-w-[250px] max-w-[500px] w-full flex flex-col gap-2 mx-10 mt-0 lg:mt-10 h-full">
          <div className="border-b py-2 border-secondary">
            <h1 className="font-bold text-lg">Order Summary</h1>
          </div>
          {/* <div className="sm:col-span-3">
            <label htmlFor="country" className="text-sm font-medium leading-6 text-primary">
              Country
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-tertiary focus:ring-2 focus:ring-inset focus:ring-highlight sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>United Kingdom</option>
                <option>Ireland</option>
                <option>France</option>
              </select>
            </div>
              </div>           */}
          <div className="flex justify-between text-base font-medium text-primary">
            <p>Subtotal</p>
            <p>£{subtotal}</p>
          </div>
          <div className="flex justify-between text-base text-secondary">
            <p>Shipping</p>
            <p>£{shipping}</p>
          </div>
          <p className="text-tertiary text-sm italic">*UK only</p>
          <div className="flex justify-between text-base text-secondary">
            <p>Taxes</p>
            <p>£{taxes}</p>
          </div>
          <div className="flex justify-between text-base font-medium text-primary border-t border-secondary">
            <p>Total</p>
            <p>£{total}</p>
          </div>
          <div className="mt-6 flex justify-center">
            <Link
              to={products.length > 0 ? "/cart/checkout" : "/cart"}
              className={
                products.length > 0
                  ? "bg-highlight hover:bg-tertiary flex items-center justify-center rounded py-4 px-4 text-white shadow-md"
                  : "bg-tertiary flex items-center justify-center rounded py-4 px-4 text-white cursor-default"
              }
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-primary">
            <p>
              or &nbsp;
              <Link
                to="/store"
                className="font-medium text-highlight hover:text-black"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
