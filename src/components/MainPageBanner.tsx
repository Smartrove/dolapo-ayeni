"use client";

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
      className={` relative  flex flex-col justify-center items-center md:mb-0 py-2 sm:py-20 font-bold w-full lg:w-[1400px] lg:mx-auto px-4 mt-20 lg:mt-[0] sm:px-10 `}
    >
      <div className="container lg:mx-auto">
        <div
          className={`flex flex-col lg:flex-row justify-center gap-10 sm:gap-12 md:pt-[3rem] items-start`}
          style={{ overflowX: "hidden" }}
        >
          <div
            className="flex flex-col md:justify-left items-left gap-[1.5rem] w-[100%] "
            style={{
              fontFamily: "Poppins",
            }}
          >
            <h1
              className={`md:leading-[5rem] break-words leading-[1.2] font-[700] w-[100%] text-[#070B1C] text-left md:text-6xl text-4xl `}
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

            <p
              className="break-words text-left font-[300] md:leading-[25px] text-[#070B1C] text-md md:text-[1.1rem] "
              style={{ fontFamily: "Poppins" }}
            >
              Turn your ideas into digital experiences that grab <br />{" "}
              attention and grow your brand.
            </p>
            <div className="pt-[0.5rem] md:mx-[0] flex flex-col md:flex-row md:justify-start justify-center md:items-left items-center gap-[1rem]"></div>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <p>
              We are your partner in Business growth. Build strategies, build
              confidence, build your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPageBanner;
