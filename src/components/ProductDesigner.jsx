import arrowRightBlue from "/assets/arrow-right-blue.svg";
const ProductDesigner = () => {
  return (
    <div>
      {/* Product designer section */}
      <section className='mt-20 mb-10'>
        <div className="px-[6%] tab:px-[15%] laptop:px-[16.50%]">
          <div className="flex flex-col gap-[50px] md:gap-[75px] laptop:gap-[100px]">
            <p className='flex mt-auto items-center gap-2.5 text-pry-blue font-manrope text-sm md:text-base laptop:text-lg font-semibold'><img src={arrowRightBlue} alt=""  className='transform rotate-180'/><span>Go back</span></p>
            <div className="py-[50px] md:py-[75px] laptop:py-[100px] px-[20px] md:px-[75px] laptop:px-[100px] border border-[#EBEBEB] rounded-xl shadow-sm bg-white">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                  <h1 className='font-inter text-2xl sm:text-3xl text-[#01021D] tracking-tight'>Product Designer</h1>
                  <div className="flex flex-col gap-6">
                    <p className='text-[#4D4D60] leading-[180%] text-sm sm:text-base'>We are looking for a Designer who obsesses over everything. You want to work with an amazing team and create work others are envious of. The role will involve working on a number of high impact projects for massive global brands. <br /> <br />This is an opportunity to invent within the digital space, and a passion for doing that is crucial.</p>
                    <h1 className='text-[#4D4D60] font-bold text-sm sm:text-base'>Responsibilities:</h1>
                    <ul className='list-disc pl-5  space-y-1'>
                      <li className='text-[#4D4D60] leading-[180%] marker:text-[#4D4D60] text-sm sm:text-base'>You’ll drive all stages of the design process, from sketching to implementation, across rich product areas: from internal operational tools to our user-facing experiences.</li>
                      <li className='text-[#4D4D60] leading-[180%] marker:text-[#4D4D60] text-sm sm:text-base'>You’ll work in tandem with engineering to produce flows that are simple, intuitive, and elegant.</li>
                      <li className='text-[#4D4D60] leading-[180%] marker:text-[#4D4D60] text-sm sm:text-base'>You’ll solve user problems that matter with great empathy and pragmatism, quickly testing ideas to arrive at realistic solutions.</li>
                      <li className='text-[#4D4D60] leading-[180%] marker:text-[#4D4D60] text-sm sm:text-base'>You’ll take on bringing product ideas to life. You’ll lead in the collaborative development of user journey maps and wireframes that get us ahead, quickly and efficiently.</li>
                      <li className='text-[#4D4D60] leading-[180%] marker:text-[#4D4D60] text-sm sm:text-base'>You’ll own the product design system. You’ll work with engineering to maintain and iterate atoms, components, and templates that speed up development.</li>
                      <li className='text-[#4D4D60] leading-[180%] marker:text-[#4D4D60] text-sm sm:text-base'>You’ll shape product strategy, vision, and roadmap together with product managers. You’ll look to align your design output against the planned roadmaps, rigorously prioritising work against them.</li>
                    </ul>
                    <h1 className='text-[#4D4D60] font-bold text-sm sm:text-base'>About you:</h1>
                    <ul className='list-disc pl-5 text-[#4D4D60] space-y-1'>
                      <li className='text-[#4D4D60] leading-[180%] marker:text-[#4D4D60] text-sm sm:text-base'>You’ll drive all stages of the design process, from sketching to implementation, across rich product areas: from internal operational tools to our user-facing experiences.</li>
                      <li className='text-[#4D4D60] leading-[180%] marker:text-[#4D4D60] text-sm sm:text-base'>You’ll work in tandem with engineering to produce flows that are simple, intuitive, and elegant.</li>
                      <li className='text-[#4D4D60] leading-[180%] marker:text-[#4D4D60] text-sm sm:text-base'>You’ll solve user problems that matter with great empathy and pragmatism, quickly testing ideas to arrive at realistic solutions.</li>
                      <li className='text-[#4D4D60] leading-[180%] marker:text-[#4D4D60] text-sm sm:text-base'>You’ll take on bringing product ideas to life. You’ll lead in the collaborative development of user journey maps and wireframes that get us ahead, quickly and efficiently.</li>
                    </ul>
                  </div>
                </div>
                <button className='bg-pry-blue text-white w-[200px] md:w-[266px] rounded-full py-4 font-poppins font-semibold text-xs sm:text-sm'>Apply now</button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default ProductDesigner
