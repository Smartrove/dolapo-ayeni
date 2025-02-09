import React from "react";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const brands = [
    {
      title: "Strategy & Branding",
      description:
        "We help businesses define their unique identity, craft compelling messaging, and position themselves for long-term success.",
    },
    {
      title: "Product Design",
      description:
        "We take your vision from concept to reality through a seamless process of research, prototyping, and UX design.",
    },
    {
      title: "Content Creation",
      description:
        "We specialize in transforming ideas into compelling visual experiences and engaging storytelling.",
    },
    {
      title: "Social Media Marketing & Management",
      description:
        "Our social media services elevate your brand’s presence across platforms like Facebook, Instagram, LinkedIn, and more.",
    },
    {
      title: "Website Design & Development",
      description:
        "We ensure that your website is more than just an online presence—it's fast, secure, and optimized for user experience.",
    },
    {
      title: "Media Planning",
      description:
        "We craft result-driven media strategies to maximize audience engagement and brand growth.",
    },
  ];

  return (
    <section className="py-16 px-8 bg-gradient-to-b from-white to-green-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Our <span className="">Portfolio</span>
        </h2>
        <p className="mt-2 text-gray-600 text-center">
          Turn your ideas into digital experiences that grab <br /> attention
          and grow your brand.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">
          Brands we have worked with
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[4rem]">
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col gap-[1rem]">
              <div className=" bg-black rounded-lg w-[288px] h-[200px] flex justify-center items-center"></div>
              <span className="text-[#28334D] text-lg font-semibold pt-[1rem]">
                {brand.title}
              </span>
              <p className="mt-3 text-[#52596A]">{brand.description}</p>

              <button className="flex items-center mt-3 hover:text-blue-800 transition">
                Get started <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
