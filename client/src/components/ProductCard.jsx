import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { AddToCart } from "../utils/APICalls";

const ProductCard = (props) => {
  const convertedImage = btoa(
    String.fromCharCode(...new Uint8Array(props.product.image.data.data))
  );

  return (
    <article
      id={props.product._id}
      className="bg-secondary rounded my-5 md:max-w-[300px]"
    >
      <span className="aspect-h-1 aspect-w-1 h-[350px] overflow-hidden rounded-t py-5 flex items-center ">
        <img
          src={`data:image/png;base64,${convertedImage}`}
          alt={props.product.title}
          className="bg-white hover:opacity-75"
        />
      </span>
      <section className="px-5 py-3 flex flex-col justify-between h-[100px] overflow-hidden">
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
            aria-label="Add to cart"
            type="button"
            onClick={() => {
              AddToCart(props.product);
              props.setCounter(props.cart.length);
            }}
          >
            <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-tertiary hover:text-highlight active:animate-bounce" />
          </button>
        </div>
      </section>
    </article>
  );
};

export default ProductCard;
