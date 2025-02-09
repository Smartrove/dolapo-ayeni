import AboutSection from "./AboutSection";
import AnimatedButtonsWithOverlay from "./AminatedButtons";
import Grow from "./Grow";
import MainPageBanner from "./MainPageBanner";
import Partners from "./Partners";
import Testimonial from "./Testimonial";
import WhatWeAre from "./WhatWeAre";

const Landingpage = () => {
  return (
    <div>
      <MainPageBanner />
      <AboutSection />
      <WhatWeAre />
      <Grow />
      <Testimonial />
      <AnimatedButtonsWithOverlay />
      <Partners />
    </div>
  );
};

export default Landingpage;
