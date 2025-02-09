import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { LogoWhite } from "../UI/Logo";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="min-h-screen bg-white w-full lg:w-[1200px] mx-auto">
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between">
          <h1 className="text-[#1E2B4D] text-5xl font-[400] max-w-2xl">
            TELL US ABOUT YOUR IDEA
          </h1>
          <div className="flex items-center">
            <div className="w-14 h-14 rounded-full bg-[#52E052] shadow-sm"></div>
            <button className="relative left-[-20px] bg-[#0286F1] rounded-full p-8">
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      <footer className=" py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="flex flex-col lg:gap-[6rem] space-y-6 bg-[#0286F1] p-6 w-full lg:w-[256px]">
              <LogoWhite />
              <p className="text-[18px]  text-[#fff]">You + Us = Awesome.</p>
            </div>

            <div className="bg-[#F8F8F8] p-3 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="bg-[#F8F8F8] p-3 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Support</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="hover:text-blue-500">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-500 inline-flex items-center"
                    >
                      Tutorial
                      <span className="ml-2 text-xs bg-orange-100 text-orange-500 px-2 py-1 rounded-full">
                        Soon!
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-500 inline-flex items-center"
                    >
                      Buy Course
                      <span className="ml-2 text-xs bg-orange-100 text-orange-500 px-2 py-1 rounded-full">
                        Soon!
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-12 bg-[#F8F8F8] p-3 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="hover:text-blue-500">
                      Term of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-500">
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col lg:gap-[7rem] space-y-4 bg-[#F8F8F8] p-5 rounded-lg">
              <div className="flex flex-col items-start space-x-4 gap-[1rem]">
                <div>
                  <p className="text-sm">211B Bode Thort</p>
                  <p className="text-sm">Ikoyi, Lagos, Nigeria</p>
                </div>
                <div>
                  <a
                    href="mailto:hello@dolapo.ayeni.com"
                    className="text-sm hover:text-blue-500"
                  >
                    hello@dolapo.ayeni.com
                  </a>
                  <p className="text-sm mt-1">+234 703 939 6881</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mt-8">
                <a href="#" className="hover:text-blue-500">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center text-sm text-gray-500">
            © {year} dolapo.ayeni, All Rights Reserved.™
          </div>
        </div>
      </footer>
    </div>
  );
}
