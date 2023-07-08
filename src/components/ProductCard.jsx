import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const ProductCard = (props) => {
  function UpdateCart(array, item) {
    let newCart = array;
    if (!array.includes(item)) {
      newCart.push(item);
    }

    return newCart;
  }

  return (
    <div
      id={props.product.id}
      className="bg-secondary rounded my-5 md:max-w-[300px]"
    >
      <div className="aspect-h-1 aspect-w-1 h-[350px] overflow-hidden rounded-t py-5 flex items-center ">
        <img
          src={props.product.image}
          alt={props.product.title}
          className="bg-white hover:opacity-75"
        />
      </div>
      <div className="px-5 py-3 flex flex-col justify-between h-[100px] overflow-hidden">
        <div>
          <h3 className="text-sm font-bold text-primary">
            {props.product.title}
          </h3>
          <p className="text-sm text-tertiary">in: {props.product.category}</p>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-lg font-medium text-white">
            £{props.product.price}
          </p>
          <button
            onClick={() => {
              props.setCart(UpdateCart(props.cart, props.product));
              props.setCounter(props.cart.length);
            }}
          >
            <ShoppingBagIcon
              className="h-6 w-6 flex-shrink-0 text-tertiary hover:text-highlight active:animate-bounce"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
