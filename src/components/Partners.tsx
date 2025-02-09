import Marquee from "react-fast-marquee";
import { FaArrowRightLong } from "react-icons/fa6";
import { SponsorsData } from "../data/Sponsors";

const Partners = () => {
  return (
    <div className="flex  flex-col gap-3 justify-start items-start mt-[2rem] w-full lg:w-[1200px] mx-auto p-3">
      <h1 className=" text-center font-[400] text-[#0286F1]">
        partners <FaArrowRightLong className="inline ml-3" color="#0286F1" />
      </h1>
      <h1 className="text-xl  text-[#15265E] text-center font-bold">
        Brands that trust us
      </h1>
      <Marquee>
        <div className="flex  flex-row gap-[1.5rem]  lg:gap-[3rem] justify-center items-center">
          {SponsorsData.map((i: any, index: any) => (
            <div key={index}>
              <img alt="" width={i.width} height={10} src={i.logo} />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
export default Partners;
