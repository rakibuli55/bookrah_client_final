import CTASection from "@/components/business/website/CTASection";
import HeroSection from "@/components/business/website/homePage/HeroSection";
import ServicesSection from "@/components/business/website/homePage/ServicesSection";
import TaskManagmentSection from "@/components/business/website/TaskManagmentSection";
import TestimonialSection from "@/components/business/website/TestimonialSection";
import WhyChooseUsSection from "@/components/business/website/WhyChooseUsSection";
import FaqSection from "@/components/common/FaqSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  useEffect(() => {
    const scrollToServicesFlag = sessionStorage.getItem("scrollToServices");

    if (scrollToServicesFlag === "true" && location.state?.scrollToServices) {
      const servicesSection = document.querySelector(".all-services-section");

      if (servicesSection) {
        servicesSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      // Clear the flag after scrolling
      sessionStorage.removeItem("scrollToServices");
    }
  }, [location.state?.scrollToServices]);
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <CTASection />
      <FaqSection />
      <TaskManagmentSection />
    </div>
  );
};

export default HomePage;
