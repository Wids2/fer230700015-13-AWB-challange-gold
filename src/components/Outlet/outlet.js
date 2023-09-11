import React from "react";
import { Outlet } from "react-router-dom";

import OurServices from "../SectionServices/index";
import WhyUs from "../SectionProducts/index";
import Testimony from "../SectionTestimonial/index";
import Banner from "../SectionSewa/index";
import Faq from "../SectionFaq/index";
import HeroSection from "../HeroSection/index";

function MainOutlet() {
  return (
    <div>
      <div>
        <HeroSection />
        <OurServices />
        <WhyUs />
        <Testimony />
        <Banner />
        <Faq />
        <Outlet />
      </div>
    </div>
  );
}

export default MainOutlet;
