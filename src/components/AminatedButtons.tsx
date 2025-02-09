import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Fragment, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const skills = [
  {
    category: "Marketing",
    skills: [
      "SEO",
      "Digital Marketing",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Affiliate Marketing",
      "Google Ads",
      "Facebook Ads",
      "Brand Strategy",
      "Public Relations",
      "Market Research",
    ],
  },
  {
    category: "Programming",
    skills: [
      "Web Development",
      "React.js",
      "Node.js",
      "TypeScript",
      "Python",
      "Django",
      "Flask",
      "C++",
      "Java",
      "Rust",
      "GoLang",
    ],
  },
  {
    category: "Design",
    skills: [
      "Graphic Design",
      "UI/UX Design",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "Sketch",
      "Motion Graphics",
      "3D Modeling",
      "Typography",
      "Brand Identity",
      "Animation",
    ],
  },
  {
    category: "Business",
    skills: [
      "Project Management",
      "Sales & Lead Generation",
      "E-commerce",
      "Business Analysis",
      "Entrepreneurship",
      "Negotiation",
      "Business Strategy",
      "Customer Relationship Management",
      "Accounting",
      "Finance",
      "Supply Chain Management",
    ],
  },
  {
    category: "Technology",
    skills: [
      "Cloud Computing",
      "Cybersecurity",
      "Blockchain",
      "Machine Learning",
      "Artificial Intelligence",
      "Data Science",
      "Big Data",
      "IoT",
      "Augmented Reality",
      "Quantum Computing",
      "DevOps",
    ],
  },
  {
    category: "Marketing",
    skills: [
      "SEO",
      "Digital Marketing",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Affiliate Marketing",
      "Google Ads",
      "Facebook Ads",
      "Brand Strategy",
      "Public Relations",
      "Market Research",
    ],
  },
  {
    category: "Programming",
    skills: [
      "Web Development",
      "React.js",
      "Node.js",
      "TypeScript",
      "Python",
      "Django",
      "Flask",
      "C++",
      "Java",
      "Rust",
      "GoLang",
    ],
  },
  {
    category: "Design",
    skills: [
      "Graphic Design",
      "UI/UX Design",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "Sketch",
      "Motion Graphics",
      "3D Modeling",
      "Typography",
      "Brand Identity",
      "Animation",
    ],
  },
  {
    category: "Business",
    skills: [
      "Project Management",
      "Sales & Lead Generation",
      "E-commerce",
      "Business Analysis",
      "Entrepreneurship",
      "Negotiation",
      "Business Strategy",
      "Customer Relationship Management",
      "Accounting",
      "Finance",
      "Supply Chain Management",
    ],
  },
  {
    category: "Technology",
    skills: [
      "Cloud Computing",
      "Cybersecurity",
      "Blockchain",
      "Machine Learning",
      "Artificial Intelligence",
      "Data Science",
      "Big Data",
      "IoT",
      "Augmented Reality",
      "Quantum Computing",
      "DevOps",
    ],
  },
];

export default function AnimatedButtonsWithOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6 overflow-hidden w-full lg:w-[1550px] mx-auto rounded-lg mt-[2rem]">
      {/* Video Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                  <div className="relative">
                    <button
                      onClick={closeModal}
                      className="absolute -right-2 -top-2 rounded-full bg-white p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    <div className="mt-4">
                      <iframe
                        className="w-full aspect-video rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/lx3YJj0nJVk?autoplay=1&mute=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Animated Skills */}
      <div className="relative space-y-8 w-full max-w-4xl z-0">
        {skills.map((category, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex space-x-4 overflow-hidden whitespace-nowrap"
            initial={{ x: rowIndex % 2 === 0 ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 2,
              delay: rowIndex * 0.5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            {category.skills.map((skill, btnIndex) => (
              <span
                key={btnIndex}
                className="px-6 py-2 border border-[#0286F1] text-[#374160] rounded-full shadow-md text-sm transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-50 border border-8 border-[#0286F1] right-50 flex items-center justify-center w-full lg:w-[948px] h-[505px] bg-[#1B2335]">
        <button
          onClick={openModal}
          className="bg-[#0286F1] flex items-center justify-center hover:bg-blue-700 text-white w-16 h-16 rounded-full shadow-lg"
        >
          <FaArrowUpLong />
        </button>
      </div>
    </div>
  );
}
