import { Collections, Promo } from "../components";

const Home = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white min-h-[700px] snap-mandatory snap-y">
      <div className="w-full snap-start lg:min-h-[900px] flex items-center justify-center">
        <Promo {...props} />
      </div>
      <div className="snap-start w-full">
        <Collections {...props} />
      </div>
    </div>
  );
};

export default Home;
