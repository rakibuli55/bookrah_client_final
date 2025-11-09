import CTASection from "@/components/business/website/CTASection";
import ComparePlansSection from "@/components/business/website/pricingPage/ComparePlansSection";
import PricingPlanSection from "@/components/business/website/pricingPage/PricingPlanSection";
import TaskManagmentSection from "@/components/business/website/TaskManagmentSection";
import TestimonialSection from "@/components/business/website/TestimonialSection";
import FaqSection from "@/components/common/FaqSection";

const PricingPage = () => {
  return (
    <div>
      <PricingPlanSection />
      <ComparePlansSection />
      <TestimonialSection />
      <CTASection />
      <FaqSection />
      <TaskManagmentSection />
    </div>
  );
};

export default PricingPage;
