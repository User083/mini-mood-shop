import { logo, girls, girls2 } from "@/assets";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-start items-center py-5 mb-10 px-10 md:px-0">
      <div className="py-5 border-b mb-10 border-tertiary border-opacity-50 flex items-center justify-between w-full max-w-[1000px] gap-20">
        <h1 className="font-title text-5xl font-medium text-primary">
          All About...
        </h1>
        <Image src={logo} alt="Logo" className="max-w-[100px]" />
      </div>

      <div className="flex flex-col ">
        <section className="flex gap-10 md:flex-row flex-col items-center">
          <div className="flex flex-col items-center justify-center bg-[#ffffff] shadow-md max-w-[300px] hover:rotate-3 hover:scale-105 group transition-all">
            <Image
              src={girls2}
              alt="Stock Photo"
              className="aspect-h-1 aspect-w-1 max-h-[500px] p-4"
            />
            <h1 className="font-medium text-4xl font-title pb-5 text-black">
              Two{" "}
              <span className="font-title group-hover:text-highlight transition-all">
                moody
              </span>{" "}
              sisters...
            </h1>
          </div>
          <div className="flex flex-col justify-around items-end">
            <div className="flex flex-col gap-5 max-w-[500px] text-primary text-lg justify-center">
              <p>
                Once upon a time in the vibrant city of Pashionville, there were
                two fiercely independent and fashion-forward sisters, Aria and
                Luna. Born with an innate sense of style and an unwavering
                passion for all things fashion, they dreamt of creating a unique
                space that reflected their distinct personalities and moody
                aesthetics.
              </p>
              <p>
                Fuelled by their shared vision, Aria and Luna scoured the globe
                in search of hidden treasures. They traveled to far-flung
                corners, immersing themselves in the eclectic cultures and
                unconventional styles that awaited them. Their journeys were
                filled with serendipitous encounters and chance discoveries,
                each adding a new layer to their artistic vision.
              </p>
              <p>
                With their suitcases brimming with unique finds and their minds
                teeming with possibilities, Aria and Luna returned home to
                Pashionville, where MiniMood emerged, a sanctuary that
                seamlessly blended their moody and eclectic aesthetics.
              </p>
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center">
          <section className="flex gap-10 md:flex-row flex-col items-center ">
            <div className="flex flex-col justify-around items-end  ">
              <div className="flex flex-col gap-5 max-w-[500px] text-primary text-lg justify-center">
                <p>
                  MiniMood's collection is an ever-evolving tapestry of striking
                  designs, ranging from bold and edgy to ethereal and romantic.
                  Each piece is carefully selected to ignite the spark of
                  self-confidence and to inspire wearers to embrace their own
                  moody beauty.{" "}
                </p>
                <p>
                  MiniMood is not just a clothing store; it's a haven for all
                  the enigmatic souls longing to make their mark on the world
                  through their unique sense of style. Aria and Luna have
                  created a sanctuary where the realms of fashion, mystery, and
                  self-discovery converge, inviting each visitor to find their
                  essence and wear it proudly.
                </p>
                <p className="text-primary text-lg">
                  Welcome to MiniMood, where fashion is an art, and you are the
                  masterpiece. Unleash your inner mystery, embrace your moody
                  elegance, and let your enigmatic soul soar.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#ffffff] shadow-md max-w-[300px] hover:-rotate-3 hover:scale-105 group transition-all ">
              <Image
                src={girls}
                alt="Stock Photo"
                className="aspect-h-1 aspect-w-1 max-h-[500px] p-4"
              />
              <h1 className="font-medium text-4xl font-title pb-5 text-black ">
                ...who love{" "}
                <span className="font-title group-hover:text-highlight transition-all">
                  fashion
                </span>
              </h1>
            </div>
          </section>
          <div className="md:mt-[-20px]">
            <p className="font-title text-3xl text-primary">xoxo</p>
            <p className="font-title text-5xl text-black">Aria & Luna</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
