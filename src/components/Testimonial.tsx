import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Olagunju",
    role: "CEO Plethora Financials",
    image: "/assets/michael.svg",
    content:
      "We couldn't be happier with the results! The team was professional, responsive, and genuinely invested in our success. They took the time to understand our needs and delivered a product that exceeded our expectations. The attention to detail, creative approach and seamless communication made the entire process stress-free and enjoyable.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "CTO TechVision",
    image: "/assets/michael.svg",
    content:
      "The level of expertise and dedication shown by the team is truly remarkable. They didn't just meet our requirements - they anticipated our needs and provided innovative solutions that transformed our business processes.",
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Director of Operations",
    image: "/assets/michael.svg",
    content:
      "Outstanding experience from start to finish. The team's attention to detail and commitment to excellence is evident in every aspect of their work. They've set a new standard for what we expect from our partners.",
  },
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center p-8 w-full lg:w-[1550px] mx-auto rounded-lg">
      <div className="max-w-6xl w-full">
        <div className="mb-12">
          <p className="text-blue-500 font-medium mb-4">
            Testimonial
            <FaArrowRightLong className="inline ml-3" />
          </p>
          <h2 className="text-4xl font-bold mb-4">
            Don't Just Take Our Word for it.
          </h2>
          <p className="text-gray-400">
            Our Satisfied customers rave about their experience
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center gap-4 mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                onClick={() => goToSlide(index)}
                className={`relative flex items-center cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? "scale-110"
                    : "opacity-50 hover:opacity-75"
                }`}
              >
                {index === currentIndex ? (
                  <div className="flex items-center bg-blue-900 text-white px-4 py-2 rounded-full">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover border border-white"
                    />
                    <div className="ml-2 text-xs">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-300">{testimonial.role}</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-white"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="bg-[#1e293b] border border-[#0286F1] rounded-2xl p-8 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center w-full ">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-32 h-[100%] rounded-xl object-cover"
              />
              <div className="w-full lg:w-[680px]">
                <h1 className="text-start text-2xl">
                  ⭐️⭐️⭐️⭐️⭐️ Outstanding Service!
                </h1>
                <p className="text-[14px] leading-relaxed text-gray-300 mb-6">
                  {testimonials[currentIndex].content}
                </p>
                <div>
                  <h4 className="text-xl font-semibold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-white text-[14px]">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-16 right-0 flex gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
