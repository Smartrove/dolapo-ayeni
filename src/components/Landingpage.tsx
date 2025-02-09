import AboutSection from "./AboutSection";
import AnimatedButtonsWithOverlay from "./AminatedButtons";
import Footer from "./Footer/Footer";
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
      <Footer />
    </div>
  );
};

export default Landingpage;
