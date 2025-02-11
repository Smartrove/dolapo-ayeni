import { BsArrowRightShort } from "react-icons/bs";
import ClientButton from "./ClientButton";

type BannerProps = {
  firstbtnLink?: string;
  secondbtnLink?: string;
  firstBtnTitle?: string;
  secondBtnTitle?: string;
  paragraph?: string;
  heading?: string;
};
export type itemsProps = {
  items: BannerProps[];
};

const MainPageBanner = () => {
  return (
    <div
      className={` relative  flex flex-col justify-end items-end md:mb-0 py-2 sm:py-20 font-bold w-full lg:w-[1400px] lg:mx-auto px-4 mt-20 lg:mt-[0] sm:px-10 `}
    >
      <div className="container lg:mx-auto">
        <div
          className={`flex flex-col lg:flex-row justify-center gap-[2rem] sm:gap-12 md:pt-[3rem] items-start`}
          style={{ overflowX: "hidden" }}
        >
          <div
            className="flex flex-col md:justify-left items-left gap-[1.5rem] w-[100%] "
            style={{
              fontFamily: "Poppins",
            }}
          >
            <h1
              className={`hidden md:block md:leading-[6rem] break-words leading-[1.2] font-[600] w-[100%] text-[#070B1C] md:text-left md:text-[76px] text-4xl `}
            >
              Lets create{" "}
              <span
                className="text-[#0286F1] italic"
                style={{
                  fontFamily: "STIX Two Text",
                }}
              >
                magic
              </span>{" "}
              <br /> together!
            </h1>
            <h1
              className={`md:hidden block md:leading-[6rem] break-words leading-[1.2] font-[600] w-[100%] text-[#070B1C] text-center md:text-left md:text-[76px] text-4xl `}
            >
              Lets create <br />
              <span
                className="text-[#0286F1] italic"
                style={{
                  fontFamily: "STIX Two Text",
                }}
              >
                magic
              </span>{" "}
              together!
            </h1>

            <p
              className="hidden md:block break-words text-left font-[300] md:leading-[25px] text-[#070B1C] text-md md:text-[1.1rem] "
              style={{ fontFamily: "Poppins" }}
            >
              Turn your ideas into digital experiences that grab <br />{" "}
              attention and grow your brand.
            </p>
            <p
              className="block md:hidden break-words text-center font-[300] md:leading-[25px] text-[#070B1C] text-md md:text-[1.1rem] "
              style={{ fontFamily: "Poppins" }}
            >
              Turn your ideas into digital experiences that grab attention and
              grow your brand.
            </p>
            <div className="flex gap-[.3rem] justify-center md:justify-start items-center">
              <div className="flex gap-[.3rem] items-center justify-center border border-[#0286F1] rounded-full w-[250px] p-3">
                <p className="font-[400]">Send us a message</p>
                <BsArrowRightShort className="inline" />
              </div>
              <p className="text-[#0286F1] font-[400]">Free Consultation</p>
            </div>
          </div>

          <div className="flex flex-col gap-[1rem] justify-center md:justify-start w-full lg:w-[256px] overflow-hidden lg:mt-[7rem]">
            <p className="font-[400] text-sm">
              We are your partner in Business growth. Build strategies, build
              confidence, build your business.
            </p>
            <img
              src="/assets/arrow.svg"
              width={9}
              height={52}
              className="animate-bounce block mx-auto md:inline md:mx-0"
            />
            <ClientButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPageBanner;
