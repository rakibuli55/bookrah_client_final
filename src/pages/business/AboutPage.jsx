import AboutUsSection from "@/components/business/website/aboutPage/AboutUsSection";
import CTASection from "@/components/business/website/CTASection";
import TestimonialSection from "@/components/business/website/TestimonialSection";
import WhyChooseUsSection from "@/components/business/website/WhyChooseUsSection";
import FaqSection from "@/components/common/FaqSection";

const AboutPage = () => {
  return (
    <div>
      <AboutUsSection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <CTASection />
      <FaqSection />
    </div>
  );
};

export default AboutPage;
