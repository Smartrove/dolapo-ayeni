import Marquee from "react-fast-marquee";

const data = [
  {
    content: "MEASURABLE RESULTS",
  },
  {
    content: "TARGETED CAMPAIGNS",
  },
  {
    content: "CONVERSION OPTIMIZATION",
  },
  {
    content: "SCALABLE SOLUTIONS",
  },
  {
    content: "DATA DRIVEN INSIGHTS",
  },
  {
    content: "BRAND VISIBILITY ACCELERATION",
  },
  {
    content: "SEAMLESS DIGITAL PRESENCE",
  },
  {
    content: "STRATEGIC MARKETING EXECUTION",
  },
  {
    content: "INCREASED ONLINE FOOTPRINT",
  },
  {
    content: "OPTIMIZED AND SPEND",
  },
  {
    content: "AUDIENCE GROWTH",
  },
  {
    content: "CONTINUOUS PERFORMANCE MONITORING",
  },
  {
    content: "EXCEPTIONAL DIGITAL EXPERIENCES",
  },
  {
    content: "USER CENTRIC STRATEGIES",
  },
  {
    content: "FLEXIBLE MARKETING PLANS",
  },
  {
    content: "EFFECTIVE SEO STRATEGIES",
  },
];

const WhatWeAre = () => {
  return (
    <div className="flex  flex-col gap-8 justify-center items-center bg-[#070B1C] mt-[.5rem] w-full lg:w-[1550px] mx-auto rounded-lg p-8">
      <Marquee>
        <div className="flex  flex-row gap-[1.5rem]  lg:gap-[3rem] justify-center items-center">
          {data.map((i: any, index: any) => (
            <div key={index}>
              <p className="text-[24px] text-[#0286F1]">{i.content}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
export default WhatWeAre;
