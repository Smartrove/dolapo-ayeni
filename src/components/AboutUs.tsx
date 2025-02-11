/* eslint-disable no-irregular-whitespace */
import heroImg from "/assets/about-us-hero.jpg";
import arrowRightBlue from "/assets/arrow-right-blue.svg";
import arrowRightWhite from "/assets/arrow-right-white.svg";
import arrowRightUp from "/assets/Arrow-right-up.svg";
import starIcon from "/assets/star-icon.svg";
import learnwithpridelogo from "/assets/learnwithpride-logo.svg";
import safeandhealthlogo from "/assets/safeandhealth-logo.svg";
import speerheadlogo from "/assets/speerhead-code-logo.svg";
import theiconicbrandlogo from "/assets/theiconicbrand-logo.svg";
import mailchimpLogo from "/assets/mailchimp-logo.svg";
import airtableLogo from "/assets/airtable-logo.svg";
import gumroadLogo from "/assets/gumroad-logo.svg";
import linkedInIcon from "/assets/linkedin-icon.svg";
import notionLogo from "/assets/notion-logo.svg";
import missionIcon from "/assets/mission-icon.png";
import laptopimage from "/assets/laptop-image.jpg";
import laptopimageSmall from "/assets/laptop-image-small.jpg";
import DA from "/assets/DA.png";
import eben from "/assets/eben.png";
import emma from "/assets/emma.png";
import Partners from "./Partners";

const AboutUs = () => {
  return (
    <div>
      <div className="">
        {/* Hero section */}
        <section>
          <div className="">
            <div className="px-[6%] tab:px-[13%] laptop:px-[16.50%] pt-[60px] md:py-16">
              <div className="flex flex-col gap-9 sm:gap-12 tab:gap-16">
                <div className="flex flex-col gap-4 items-center">
                  <p className=" hidden md:block w-max font-medium text-pry-black py-3 px-7 rounded-full border-pry-blue border text-sm">
                    About Us
                  </p>
                  <h1 className="text-pry-black font-poppins font-semibold text-balance text-center tracking-tighter leading-[120%]  text-3xl md:text-5xl tab:text-6xl">
                    Setting the New Standard <br className="hidden sm:block" />
                    in Media and Creativity{" "}
                  </h1>
                  <p className="text-sm laptop:text-base text-center text-black/70 text-balance leading-[150%]">
                    Keep your business account and all your finance needs safely
                    organized under one roof. Manage money quickly, easily &
                    efficiently. Whether you’re alone or leading a team.
                  </p>
                </div>
                <div className="w-full aspect-[327/148] md:aspect-[1034/463.5] rounded-xl overflow-hidden">
                  <img
                    src={heroImg}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-y-6 md:flex-row md:justify-between px-[6%] tab:px-[9%] laptop:px-[11.11%] items-center py-8 md:py-11 ">
              <p className="text-sm text-black/70 leading-[160%] md:w-[190px]">
                Trusted by thousand companies in the world
              </p>
              <div className="flex-1 grid grid-cols-4 gap-8 ">
                <div className="flex justify-end">
                  <img src={mailchimpLogo} alt="" />
                </div>
                <div className="flex justify-end">
                  <img src={airtableLogo} alt="" />
                </div>
                <div className="flex justify-end">
                  <img src={gumroadLogo} alt="" />
                </div>
                <div className="flex justify-end">
                  <img src={notionLogo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Mission Section 1 */}
        <section className="bg-[#FAFAFA]">
          <div className="py-[50px] md:py-[75px] lg:py-[100px] px-[6%] tab:px-[15%] laptop:px-[16.50%]">
            <div className="flex flex-col gap-8 sm:gap-10 md:gap-20 ">
              <div className="flex flex-col gap-4 ">
                <p className="text-[#737373] text-sm tab-text-base laptop:text-lg">
                  Mission + Values
                </p>
                <h1 className="font-poppins text-black text-2xl sm:text-3xl lg:text-4xl laptop:text-5xl leading-[144%] tracking-tight">
                  We empower SMEs, start-ups, individuals, and large businesses
                  to thrive digitally,{" "}
                  <span className="text-[#A3A3A3]">
                    using our words to amplify your brand and drive action from
                    your target audience.
                  </span>
                </h1>
              </div>
              <div className="grid md:grid-cols-2 items-center gap-y-8 gap-x-10">
                <div className="flex flex-col sm_tab:flex-row md:flex-col gap-8 md:gap-0">
                  <div className="flex flex-col gap-6 md:py-8">
                    <img
                      src={missionIcon}
                      alt=""
                      className="w-8 sm:w-10 laptop:w-12"
                    />
                    <div className="flex flex-col gap-3">
                      <h3 className="text-[#0A0A0A] font-semibold font-poppins text-base sm:text-lg lg:xl laptop:text-2xl">
                        Our Mission
                      </h3>
                      <p className="text-[#737373] font-poppins text-xs sm:text-sm lg:text-base laptop:text-lg tracking-tight leading-[160%]">
                        Dolapo Ayeni Media Agency began with a passion for
                        creative writing and storytelling, evolving into a
                        leading digital marketing agency dedicated to helping
                        businesses connect with their audiences through the
                        power of words.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 md:py-8">
                    <img
                      src={missionIcon}
                      alt=""
                      className="w-8 sm:w-10 laptop::w-12"
                    />
                    <div className="flex flex-col gap-3">
                      <h3 className="text-[#0A0A0A] font-semibold font-poppins text-base sm:text-lg lg:xl laptop:text-2xl">
                        Our Values
                      </h3>
                      <p className="text-[#737373] font-poppins text-xs sm:text-sm lg:text-base laptop:text-lg tracking-tight leading-[160%]">
                        Dolapo Ayeni Media Agency began with a passion for
                        creative writing and storytelling, evolving into a
                        leading digital marketing agency dedicated to helping
                        businesses connect with their audiences through the
                        power of words.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <img
                    src={laptopimageSmall}
                    alt=""
                    className="md:hidden w-full h-full object-cover max-h-[300px] border-y border-pry-blue"
                  />
                  <img
                    src={laptopimage}
                    alt=""
                    className="hidden md:block w-full aspect-[46/65.2] max-h-[650px] object-cover border-y border-pry-blue "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Mission Section 2 */}
        <section className="bg-white">
          <div className="py-[50px] md:py-[75px] lg:py-[100px] px-[6%] tab:px-[15%] laptop:px-[16.50%]">
            <div className="flex flex-col gap-12 md:gap-[60px]">
              <div className="flex flex-col gap-4 ">
                <p className="text-[#737373] text-sm tab-text-base laptop:text-lg">
                  Mission + Values
                </p>
                <h1 className="font-poppins text-black text-2xl sm:text-3xl lg:text-4xl laptop:text-5xl leading-[144%] tracking-tight text-balance">
                  Meet the Team behind the{" "}
                  <br className="hidden sm_tab:block" /> amazing work we do.
                </h1>
              </div>
              <div className="grid sm:grid-cols-2  tab:grid-cols-4 gap-6">
                <div className="flex flex-col gap-6 max-w-[240px] sm_tab:max-w-full w-full mx-auto">
                  <div className="bg-[#CEE9FF] aspect-[22/20] max-h-[220px] rounded-lg overflow-hidden">
                    <img
                      src={DA}
                      alt=""
                      className="w-full h-full object-cover transition duration-300 cursor-pointer hover:grayscale"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="">
                      <p className="text-[#18211D] leading-[180%] font-poppins font-semibold">
                        Dolapo <span className="font-normal">Ayeni</span>
                      </p>
                      <p className="text-[#5C6077] text-xs">
                        Creative Director
                      </p>
                    </div>
                    <p className="flex items-center gap-1">
                      <img src={linkedInIcon} alt="" />{" "}
                      <span className="text-[#5C6077] font-poppins text-xs">
                        Connect with me
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 max-w-[240px] sm_tab:max-w-full w-full mx-auto">
                  <div className="bg-[#CEE9FF] aspect-[22/20] max-h-[220px] rounded-lg overflow-hidden">
                    <img
                      src={emma}
                      alt=""
                      className="w-full h-full object-cover transition duration-300 cursor-pointer hover:grayscale"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="">
                      <p className="text-[#18211D] leading-[180%] font-poppins font-semibold">
                        Emmanuel <span className="font-normal">Fayomi</span>
                      </p>
                      <p className="text-[#5C6077] text-xs">Brand Designer</p>
                    </div>
                    <p className="flex items-center gap-1">
                      <img src={linkedInIcon} alt="" />{" "}
                      <span className="text-[#5C6077] font-poppins text-xs">
                        Connect with me
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 max-w-[240px] sm_tab:max-w-full w-full mx-auto">
                  <div className="bg-[#CEE9FF] aspect-[22/20] max-h-[220px] rounded-lg overflow-hidden">
                    <img
                      src={eben}
                      alt=""
                      className="w-full h-full object-cover transition duration-300 cursor-pointer hover:grayscale"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="">
                      <p className="text-[#18211D] leading-[180%] font-poppins font-semibold">
                        Placeholder <span className="font-normal">Name</span>
                      </p>
                      <p className="text-[#5C6077] text-xs">
                        Software Developer
                      </p>
                    </div>
                    <p className="flex items-center gap-1">
                      <img src={linkedInIcon} alt="" />{" "}
                      <span className="text-[#5C6077] font-poppins text-xs">
                        Connect with me
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 max-w-[240px] sm_tab:max-w-full w-full mx-auto">
                  <div className="bg-[#CEE9FF] aspect-[22/20] max-h-[220px] rounded-lg overflow-hidden">
                    <img
                      src={eben}
                      alt=""
                      className="w-full h-full object-cover transition duration-300 cursor-pointer hover:grayscale"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="">
                      <p className="text-[#18211D] leading-[180%] font-poppins font-semibold">
                        Ebenezer <span className="font-normal">Akin</span>
                      </p>
                      <p className="text-[#5C6077] text-xs">Product Designer</p>
                    </div>
                    <p className="flex items-center gap-1">
                      <img src={linkedInIcon} alt="" />{" "}
                      <span className="text-[#5C6077] font-poppins text-xs">
                        Connect with me
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recognitions and Awards  */}
        <section className="mx-1.5 mb-1.5">
          <div className="bg-pry-black rounded-lg sm:rounded-3xl py-8 md:py-16 tab:py-[100px] ">
            <div className="flex flex-col gap-8 md:gap-12 laptop:gap-14 px-[6%] tab:px-[13%] laptop:px-[16.50%]">
              <div className="flex flex-col gap-7">
                <p className="flex mt-auto items-center gap-2.5 text-pry-blue font-manrope text-[10px] md:text-xs laptop:text-sm font-semibold">
                  <span>Award</span>
                  <img src={arrowRightBlue} alt="" />
                </p>
                <div className="flex flex-col gap-3">
                  <h1 className="text-white font-poppins font-semibold text-2xl md:text-3xl laptop:text-4xl text-balance">
                    Recognitions and Awards.
                  </h1>
                  <p className="text-white font-poppins text-sm md:text-base laptop:text-lg text-balance">
                    Our accolades are a testament to our passion for{" "}
                    <br className="hidden sm:block" /> exceeding client
                    expectations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 md:gap-10">
                <div className="flex items-center gap-14 justify-between pb-8 md:pb-10 border-b border-pry-blue">
                  <div className="flex items-center gap-3">
                    <img src={starIcon} alt="" className="w-7 sm:w-12" />
                    <p className="text-white font-medium max-w-[440px] text-balance font-poppins text-sm md:text-base laptop:text-lg leading-[144%]">
                      Content Writer of the Year 2024{" "}
                    </p>
                  </div>
                  <div className="flex w-24 sm:w-44 justify-start">
                    <img src={learnwithpridelogo} alt="" className="" />
                  </div>
                </div>
                <div className="flex items-center gap-14 justify-between pb-8 md:pb-10 border-b border-pry-blue">
                  <div className="flex items-center gap-3">
                    <img src={starIcon} alt="" className="w-7 sm:w-12" />
                    <p className="text-white font-medium max-w-[440px] text-balance font-poppins text-sm md:text-base laptop:text-lg leading-[144%]">
                      An Excellence Award for spearheading the 1000 Lines of
                      Code initiative{" "}
                    </p>
                  </div>
                  <div className="flex w-24 sm:w-44 justify-start">
                    <img src={speerheadlogo} alt="" className="" />
                  </div>
                </div>
                <div className="flex items-center gap-14 justify-between pb-8 md:pb-10 border-b border-pry-blue">
                  <div className="flex items-center gap-3">
                    <img src={starIcon} alt="" className="w-7 sm:w-12" />
                    <p className="text-white font-medium max-w-[440px] text-balance font-poppins text-sm md:text-base laptop:text-lg leading-[144%]">
                      Top 10 professionals in branding and communications 2024{" "}
                    </p>
                  </div>
                  <div className="flex w-24 sm:w-44 justify-start">
                    <img src={theiconicbrandlogo} alt="" className="" />
                  </div>
                </div>
                <div className="flex items-center gap-14 justify-between pb-8 md:pb-10 border-b border-pry-blue">
                  <div className="flex items-center gap-3">
                    <img src={starIcon} alt="" className="w-7 sm:w-12" />
                    <p className="text-white font-medium max-w-[440px] text-balance font-poppins text-sm md:text-base laptop:text-lg leading-[144%]">
                      Nominated for the She Global Awards as Techpreneur of the
                      year 2024.{" "}
                    </p>
                  </div>
                  <div className="flex w-24 sm:w-44 justify-start">
                    <img src={safeandhealthlogo} alt="" className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Recognitions and Awards  */}
        <section className="mx-1.5 mb-1.5">
          <div className="bg-pry-blue rounded-lg sm:rounded-3xl py-8 md:py-16 tab:py-[100px] ">
            <div className="flex flex-col gap-8 md:gap-12 laptop:gap-14 px-[6%] tab:px-[13%] laptop:px-[16.50%]">
              <div className="flex flex-col gap-7">
                <p className="flex mt-auto items-center gap-2.5 text-white font-manrope text-[10px] md:text-xs laptop:text-sm font-semibold">
                  <span>Career</span>
                  <img src={arrowRightWhite} alt="" />
                </p>
                <div className="flex flex-col gap-3">
                  <h1 className="text-white font-poppins font-semibold text-2xl md:text-3xl laptop:text-4xl text-balance">
                    Join Our Team: Make an Impact.
                  </h1>
                  <p className="text-white font-poppins text-sm md:text-base laptop:text-lg text-balance">
                    Work with a team that values your skills and{" "}
                    <br className="hidden sm:block" /> supports your growth.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 md:gap-10">
                <div className="flex  gap-14 justify-between pb-8 md:pb-10 border-b border-white">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-white text-xs">Product</p>
                      <p className="font-extrabold text-white text-base">
                        Product Designer
                      </p>
                    </div>
                    <div className="flex items-center text-white text-xs gap-2">
                      <p>Full-time</p>
                      <span className="w-1.5 h-1.5 bg-[#E5E5E5] rounded-full"></span>
                      <p>Remote</p>
                    </div>
                  </div>
                  <img src={arrowRightUp} alt="" />
                </div>
                <div className="flex  gap-14 justify-between pb-8 md:pb-10 border-b border-white">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-white text-xs">Engineer</p>
                      <p className="font-extrabold text-white text-base">
                        Senior Backend Engineer
                      </p>
                    </div>
                    <div className="flex items-center text-white text-xs gap-2">
                      <p>Full-time</p>
                      <span className="w-1.5 h-1.5 bg-[#E5E5E5] rounded-full"></span>
                      <p>Remote</p>
                    </div>
                  </div>
                  <img src={arrowRightUp} alt="" />
                </div>
                <div className="flex  gap-14 justify-between pb-8 md:pb-10 border-b border-white">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-white text-xs">Marketing</p>
                      <p className="font-extrabold text-white text-base">
                        Product Marketing Associate
                      </p>
                    </div>
                    <div className="flex items-center text-white text-xs gap-2">
                      <p>Full-time</p>
                      <span className="w-1.5 h-1.5 bg-[#E5E5E5] rounded-full"></span>
                      <p>Remote</p>
                    </div>
                  </div>
                  <img src={arrowRightUp} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Partners />
      </div>
    </div>
  );
};

export default AboutUs;
