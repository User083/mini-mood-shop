import { loader } from "@/assets";
import Image from "next/image";

const Loader = () => {
  return (
    <>
      <Image
        src={loader}
        alt="Loading icon"
        width={20}
        height={20}
        className="animate:spin"
      />
    </>
  );
};

export default Loader;
