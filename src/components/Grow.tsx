import React from "react";
import { ArrowRight } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  width: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  width,
}) => (
  <div className="bg-white p-6 flex flex-col lg:flex-row items-start gap-6">
    <div className="w-[80px] h-[80px] bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
      <img
        src={icon}
        className="max-w-full max-h-full object-contain"
        width={width}
        alt=""
      />
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="flex items-center hover:text-blue-700 transition-colors">
        See more <ArrowRight className="ml-2 w-4 h-4" />
      </button>
    </div>
  </div>
);

function Grow() {
  const services = [
    {
      icon: "/assets/trapezium.svg",
      title: "Strategy & Branding",
      description:
        "A service that helps businesses define their unique identity, craft compelling messaging, and position themselves for long-term business success.",
      width: "98",
    },
    {
      icon: "/assets/circles.svg",
      title: "Product Design",
      description:
        "We take your vision from concept to reality through a seamless process of research, prototyping, user experience (UX) design, and iterative refinement.",
      width: "98",
    },
    {
      icon: "/assets/gone.svg",
      title: "Web Development",
      description:
        "We believe that your website is more than just an online presence. We create solutions that drive engagement and optimize user experience.",
      width: "120",
    },
    {
      icon: "/assets/cones.svg",
      title: "Social Media Marketing",
      description:
        "Our Social Media Marketing & Management services are designed to elevate your brand’s presence across platforms, from Facebook and Instagram to LinkedIn and Twitter and more.",
      width: "120",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-start w-full lg:w-[1200px] mx-auto">
      <div className="relative bg-white overflow-hidden w-full lg:w-[800px]">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-3xl">
                  <span className="block tracking-wide">
                    Grow your business
                  </span>
                  <span className="block tracking-wide">with our services</span>
                </h1>
                <p className="mt-3 text-sm text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-sm lg:mx-0">
                  We specialize in high-performance solutions, offering <br />
                  digitally-focused, innovative solutions.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="">
                    Explore Our Services
                    <FaArrowRight className="inline ml-3" />
                  </div>
                </div>
              </div>
            </main>
          </div>
          <ClientButton />
        </div>
      </div>

      <div
        id="services"
        className="w-full lg:w-[700px] mx-auto px-4 sm:px-6 lg:px-8 lg:mt-[5rem]"
      >
        <div className="flex flex-col gap-[2rem] lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              width={service.width}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grow;

const ClientButton = () => {
  return (
    <div>
      <div className="flex items-center gap-2 border border-[#0286F1] rounded-full px-4 py-2 shadow-lg w-full md:w-[223px] lg:mt-[6rem]">
        <div className="relative w-8 h-8 z-40 ">
          <img
            src="/assets/img.svg"
            alt="User Icon"
            className="rounded-full border-2 border-white"
          />
        </div>
        <div className="relative w-8 h-8 -ml-8 z-30">
          <img
            src="/assets/circle-one.svg"
            alt="User Icon"
            className="rounded-full border-2 border-white"
          />
        </div>
        <div className="relative w-8 h-8 -ml-8 z-20">
          <img
            src="/assets/circle-two.svg"
            alt="User Icon"
            className="rounded-full border-2 border-white"
          />
        </div>
        <span className="ml-2 text-[10px] font-300">24+ satisfied clients</span>
      </div>
    </div>
  );
};
