import explore1 from "/assets/explore1.jpg";
import explore2 from "/assets/explore2.jpg";
import explore3 from "/assets/explore3.jpg";
import explore4 from "/assets/explore4.jpg";
import arrowRightBlack from "/assets/arrow-right-black.svg";
import arrowRightWhite from "/assets/arrow-right-white.svg";

const GrowBusiness = () => {
  return (
    <div className=''>
      <div className="landing-page">
        {/* Hero Section */}
        <section className='py-[60px] md:py-20 tab:py-[100px]'>
          <div className="px-[6%] tab:px-[9%] laptop:px-[11.11%]">
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col gap-6 md:gap-7">
                <h1 className='text-pry-black font-poppins font-semibold text-balance text-center tracking-tighter leading-[110%]  text-3xl md:text-5xl tab:text-6xl'>Grow your Business <br className='hidden sm:block' /> with our services</h1>
                <p className='text-xs md:text-sm laptop:text-base text-center text-pry-black text-balance'>Turn your ideas into digital experiences that grab <br /> attention and grow your brand.</p>
              </div>
              <div className="flex items-center gap-4">
                <p className='p-4 md:px-7 py-4 border border-pry-blue bg-pry-black rounded-full font-medium text-white text-xs md:text-sm w-max'>Send us a message</p>
                <p className='text-pry-blue font-poppins text-xs md:text-sm laptop:text-base tracking-tight'>Free Consultation</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Explore Our Service Section */}
      <section className='py-[60px] md:py-20 tab:py-[100px]'>
        <div className="px-[6%] tab:px-[13%] laptop:px-[16.50%]">
          <div className="flex flex-col gap-10">
            <h1 className='text-pry-black  font-semibold text-2xl md:text-3xl laptop:text-4xl'>Explore our services </h1>
            <div className="w-full grid sm:grid-cols-2 tab:grid-cols-3 gap-6 md:gap-12">
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="w-full overflow-hidden aspect-[32.7/11.7] sm:aspect-[28.8/20] rounded-lg"><img src={explore1} alt=""  className='w-full h-full object-cover'/></div>
                <div className="flex flex-1 flex-col gap-7 font-poppins">
                  <div className="flex flex-col gap-3">
                    <h3 className='text-[#28334D] text-sm md:text-base laptop:text-tab font-semibold'>Strategy & Branding</h3>
                    <p className='text-[10px] md:text-xs laptop:text-sm text-[#52596A]'>We specialize in transforming ideas into impact digital and brand experiences and deliver measurable results.</p>
                  </div>
                  <p className='flex mt-auto items-center gap-2.5 font-manrope text-[10px] md:text-xs laptop:text-sm font-semibold text-[#28334D] '><span>Get started</span><img src={arrowRightBlack} alt="" /></p>
                </div>

              </div>
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="w-full overflow-hidden aspect-[32.7/11.7] sm:aspect-[28.8/20] rounded-lg"><img src={explore2} alt=""  className='w-full h-full object-cover'/></div>
                <div className="flex flex-1 flex-col gap-7 font-poppins">
                  <div className="flex flex-col gap-3">
                    <h3 className='text-[#28334D] text-sm md:text-base laptop:text-tab font-semibold'>Strategy & Branding</h3>
                    <p className='text-[10px] md:text-xs laptop:text-sm text-[#52596A]'>We specialize in transforming ideas into impact digital and brand experiences and deliver measurable results. lorem20</p>
                  </div>
                  <p className='flex mt-auto items-center gap-2.5 font-manrope text-[10px] md:text-xs laptop:text-sm font-semibold text-[#28334D] '><span>Get started</span><img src={arrowRightBlack} alt="" /></p>
                </div>

              </div>
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="w-full overflow-hidden aspect-[32.7/11.7] sm:aspect-[28.8/20] rounded-lg"><img src={explore1} alt=""  className='w-full h-full object-cover'/></div>
                <div className="flex flex-1 flex-col gap-7 font-poppins">
                  <div className="flex flex-col gap-3">
                    <h3 className='text-[#28334D] text-sm md:text-base laptop:text-tab font-semibold'>Strategy & Branding</h3>
                    <p className='text-[10px] md:text-xs laptop:text-sm text-[#52596A]'>We specialize in transforming ideas into impact digital and brand experiences and deliver measurable results.</p>
                  </div>
                  <p className='flex mt-auto items-center gap-2.5 font-manrope text-[10px] md:text-xs laptop:text-sm font-semibold text-[#28334D] '><span>Get started</span><img src={arrowRightBlack} alt="" /></p>
                </div>

              </div>
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="w-full overflow-hidden aspect-[32.7/11.7] sm:aspect-[28.8/20] rounded-lg"><img src={explore3} alt=""  className='w-full h-full object-cover'/></div>
                <div className="flex flex-1 flex-col gap-7 font-poppins">
                  <div className="flex flex-col gap-3">
                    <h3 className='text-[#28334D] text-sm md:text-base laptop:text-tab font-semibold'>Strategy & Branding</h3>
                    <p className='text-[10px] md:text-xs laptop:text-sm text-[#52596A]'>We specialize in transforming ideas into impact digital and brand experiences and deliver measurable results.</p>
                  </div>
                  <p className='flex mt-auto items-center gap-2.5 font-manrope text-[10px] md:text-xs laptop:text-sm font-semibold text-[#28334D] '><span>Get started</span><img src={arrowRightBlack} alt="" /></p>
                </div>

              </div>
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="w-full overflow-hidden aspect-[32.7/11.7] sm:aspect-[28.8/20] rounded-lg"><img src={explore3} alt=""  className='w-full h-full object-cover'/></div>
                <div className="flex flex-1 flex-col gap-7 font-poppins">
                  <div className="flex flex-col gap-3">
                    <h3 className='text-[#28334D] text-sm md:text-base laptop:text-tab font-semibold'>Strategy & Branding</h3>
                    <p className='text-[10px] md:text-xs laptop:text-sm text-[#52596A]'>We specialize in transforming ideas into impact digital and brand experiences and deliver measurable results.</p>
                  </div>
                  <p className='flex mt-auto items-center gap-2.5 font-manrope text-[10px] md:text-xs laptop:text-sm font-semibold text-[#28334D] '><span>Get started</span><img src={arrowRightBlack} alt="" /></p>
                </div>

              </div>
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="w-full overflow-hidden aspect-[32.7/11.7] sm:aspect-[28.8/20] rounded-lg"><img src={explore4} alt=""  className='w-full h-full object-cover'/></div>
                <div className="flex flex-1 flex-col gap-7 font-poppins">
                  <div className="flex flex-col gap-3">
                    <h3 className='text-[#28334D] text-sm md:text-base laptop:text-tab font-semibold'>Strategy & Branding</h3>
                    <p className='text-[10px] md:text-xs laptop:text-sm text-[#52596A]'>We specialize in transforming ideas into impact digital and brand experiences and deliver measurable results.</p>
                  </div>
                  <p className='flex mt-auto items-center gap-2.5 font-manrope text-[10px] md:text-xs laptop:text-sm font-semibold text-[#28334D] '><span>Get started</span><img src={arrowRightBlack} alt="" /></p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's build something great  */}
      <section className='mx-1.5 '>
        <div className="bg-pry-blue rounded-lg sm:rounded-3xl py-8 md:py-16 tab:py-[100px] ">
          <div className="flex flex-col gap-8 md:gap-12 laptop:gap-14 px-[6%] tab:px-[13%] laptop:px-[16.50%]">
            <div className="flex flex-col gap-7">
              <p className='flex mt-auto items-center gap-2.5 text-white font-manrope text-[10px] md:text-xs laptop:text-sm font-semibold'><span>Get started</span><img src={arrowRightWhite} alt="" /></p>
              <div className="flex flex-col gap-3">
                <h1 className='text-white font-poppins font-semibold text-2xl md:text-3xl laptop:text-4xl text-balance'>Let’s Build Something Great <br className='hidden sm:block' /> Together.</h1>
                <p className='text-white font-poppins text-sm md:text-base laptop:text-lg text-balance'>Don't hesitate to contact us. We look forward <br className='hidden sm:block'/> to growing your business.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
                <p className='p-4 md:px-7 py-4 border border-white rounded-full font-medium text-white text-xs md:text-sm w-max'>Send us a message</p>
                <p className='text-white font-poppins text-xs md:text-sm laptop:text-base tracking-tight'>Free Consultation</p>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GrowBusiness
