import CTASection from "@/components/business/website/CTASection";
import FaqSection from "@/components/common/FaqSection";
import HeroSection from "@/components/customer/website/landingPage/HeroSection";
import ServicesSection from "@/components/customer/website/landingPage/ServicesSection";
import StatsSection from "@/components/customer/website/landingPage/StatsSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <FaqSection />
      <CTASection className={'c-lg:pb-[121px] c-md:pb-20 c-xsm:pb-[60px] c-xsm:!pt-0'} />
    </div>
  );
};

export default LandingPage;
