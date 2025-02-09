import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { FaArrowUpLong } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <div
      className={`   flex flex-col md:mb-0  sm:py-20 font-bold w-full px-4 mt-20 lg:mt-[0] sm:px-10 rounded-lg w-full md:w-[1550px] md:mx-auto`}
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.5), 
            rgba(0, 0, 0, 0.5)
          ),
          url('/assets/bg-black.jpg')
        `,
        backgroundPosition: "center top",
        backgroundSize: "cover",
        minHeight: "80vh",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:w-[1200px] mx-auto pt-[4rem]">
        <div className="flex flex-col gap-[3rem]">
          <p className="text-[#fff] text-[14px] font-[400]">
            About us{" "}
            <BsArrowRightShort className="inline " color="#fff" fontSize={14} />
          </p>
          <p className="w-full md:w-[451px] font-[400] text-white text-[18px]">
            We empower SMEs, start-ups, individuals, and large businesses to
            thrive digitally, using our words to amplify your brand and drive
            action from your target audience.
          </p>
          <p className="text-[#fff] text-[14px] font-[400] w-full md:w-[451px]">
            Dolapo Ayeni Media Agency began with a passion for creative writing
            and storytelling, evolving into a leading digital marketing agency
            dedicated to helping businesses connect with their audiences through
            the power of words.
          </p>
        </div>
        <div className="hidden md:block flex flex-col gap-[6rem]">
          <div className="rounded-full bg-[#0286F1] p-10">
            <FaArrowUpLong color="#fff" className="" />
          </div>
          <img
            src="/assets/white-logo.svg"
            width={98}
            height={65}
            alt="img"
            className="mt-[6rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
