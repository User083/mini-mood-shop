import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  GetCart,
  RemoveFromCart,
  UpdateProduct,
  GetProduct,
} from "../utils/APICalls";
import { Loader } from "../components";

function CalcTotal(subtotal, tax, shipping) {
  let x = subtotal + tax + shipping;
  return x;
}
function CheckQuantity(quantity) {
  if (quantity - 1 < 1) {
    return 1;
  }

  return quantity - 1;
}
function convertImage(imageData) {
  let binary = "";
  let bytes = new Uint8Array(imageData);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

const CartProduct = ({ index, quantity, item, _id, setProducts }) => {
  //Add a 'get by id' for each item
  const [product, setProduct] = useState({});
  const [convertedImage, setConvertedImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [qty, setQty] = useState(quantity);
  useEffect(() => {
    setLoading(true);
    try {
      GetProduct(item)
        .then((res) => {
          setProduct(res);
        })
        .then(() => convertImage(product.image.data.data))
        .then((res) => {
          setConvertedImage(res);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    return;
  }, []);
  //
  return (
    <article>
      {loading && <Loader />}
      {!loading && (
        <li className="flex py-6" index={index}>
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded border border-white">
            <img
              src={`data:image/png;base64,${convertedImage}`}
              alt={product.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="ml-4 flex flex-1 flex-col">
            <div>
              <div className="flex justify-between text-base font-medium text-primary">
                <h3>
                  <a
                    href={`/products/product/${product._id}`}
                    aria-label="Product info"
                  >
                    {product.title}
                  </a>
                </h3>
                <p className="ml-4">£{product.price}</p>
              </div>
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
              <div className="flex gap-2 items-center">
                <button
                  type="button"
                  aria-label="Reduce quantity"
                  className="font-medium text-white hover:bg-tertiary w-[20px] h-[20px] rounded bg-highlight"
                  onClick={() => {
                    UpdateProduct(_id, CheckQuantity(qty)).then((res) =>
                      setQty(res.quantity)
                    );
                  }}
                >
                  -
                </button>

                <p className="text-secondary">{qty}</p>
                <button
                  type="button"
                  aria-label="Add more"
                  className="font-medium text-white hover:bg-tertiary w-[20px] h-[20px] rounded bg-highlight"
                  onClick={() => {
                    UpdateProduct(_id, qty + 1).then((res) =>
                      setQty(res.quantity)
                    );
                  }}
                >
                  +
                </button>
              </div>

              <div className="flex">
                <button
                  type="button"
                  className="font-medium text-highlight hover:text-tertiary"
                  aria-label="Remove Item"
                  onClick={() => {
                    RemoveFromCart(_id).then(() => {
                      GetCart().then((res) => setProducts(res));
                    });
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </li>
      )}
    </article>
  );
};

const Cart = (props) => {
  const [subtotal, setSubtotal] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  const [shipping, setShipping] = useState(0.0);
  const [taxes, setTaxes] = useState(0.0);
  const [products, setProducts] = useState([]);
  function CalculatePrices() {
    let productTotal = 0.0;
    let totalPrice = 0.0;
    let totalTax = 0.0;
    let totalShipping = 0.0;

    products.forEach((item) => {
      productTotal = productTotal + parseFloat(item.price) * item.quantity;
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
  }
  useEffect(() => {
    GetCart()
      .then((res) => setProducts(res))
      .then(() => {
        CalculatePrices();
      });
  }, []);

  useEffect(() => {
    CalculatePrices();
  }, [products]);

  return (
    <div className="bg-white flex w-full min-h-screen justify-center">
      <div className="flex w-4/6 gap-10 justify-center items-center my-12 h-full flex-col lg:flex-row lg:w-full lg:items-start">
        {/* products */}
        <div className="mt-8 w-full max-w-[500px] ">
          <div className="flow-root border-b border-secondary pb-5">
            <ul role="list" className="-my-6 divide-y divide-tertiary">
              {products.map((product, index) => (
                <CartProduct
                  index={index}
                  key={product._id}
                  {...product}
                  setProducts={setProducts}
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
                to="/store/products"
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
