import { useParams, useSearchParams } from "react-router-dom";
import { ProductDisplay } from "../components";

const Store = (props) => {
  let params = useParams();

  return (
    <div className="bg-white flex w-full h-full flex-col items-center">
      <ProductDisplay
        query={params.collection.split("--")[0]}
        filter={params.collection.split("--").pop()}
        setCounter={props.setCounter}
      />
    </div>
  );
};

export default Store;
