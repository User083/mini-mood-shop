import { useParams, useSearchParams } from "react-router-dom";
import { ProductDisplay } from "../components";

const Store = () => {
  let params = useParams();
  function setFilter() {
    if (
      params.collection.split("--").pop() == params.collection.split("--")[0]
    ) {
      return "";
    }
    return params.collection.split("--").pop();
  }
  return (
    <div className="bg-white flex w-full h-full flex-col items-center">
      <ProductDisplay
        query={params.collection.split("--")[0]}
        filter={setFilter}
      />
    </div>
  );
};

export default Store;
