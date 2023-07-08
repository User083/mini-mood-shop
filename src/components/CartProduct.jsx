import { useState } from "react";

function RemoveItem(array, index) {
  let newCart = array;
  if (index > -1) {
    newCart.splice(index, 1);
  }
  return newCart;
}

function Decrease(a) {
  let b = a;

  if (b > 1) {
    b--;
  }

  return b;
}

const CartProduct = (props) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <li className="flex py-6" index={props.index}>
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded border border-white">
          <img
            src={props.product.image}
            alt={props.product.title}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-primary">
              <h3>
                <a href={props.product.href}>{props.product.title}</a>
              </h3>
              <p className="ml-4">£{props.product.price}</p>
            </div>
            {/* <p className="mt-1 text-sm text-secondary">{product.colors[0]}</p> */}
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <button
              type="button"
              className="font-medium text-white hover:bg-tertiary w-[20px] h-[20px] rounded bg-highlight"
              onClick={() => {
                setQuantity(Decrease(quantity));
              }}
            >
              -
            </button>
            <div className="flex gap-2 items-center">
              <p className="text-secondary">{quantity}</p>
              <button
                type="button"
                className="font-medium text-white hover:bg-tertiary w-[20px] h-[20px] rounded bg-highlight"
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                +
              </button>
            </div>

            <div className="flex">
              <button
                type="button"
                className="font-medium text-highlight hover:text-tertiary"
                onClick={() => {
                  props.setProducts(RemoveItem(props.products, props.index));
                  props.setCounter(props.cart.length);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartProduct;
