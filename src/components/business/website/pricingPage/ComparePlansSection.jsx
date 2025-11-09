import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/container/Container";
import BasicFeaturesLabels from "./comparePlanSection/BasicFeaturesLabels";
import ComparePricingCard from "./comparePlanSection/ComparePricingCard";

const ComparePlansSection = () => {
  const pricingPlans = [
    {
      id: "essence_plan",
      name: "Essence plan",
      price: { value: 69, currency: "SAR", cycle: "/per month" },
      features: {
        businessProfileListing: true,
        onlineBooking: true,
        emailSmsToClients: true,
        priorityExposure: false,
        employeeProfiles: "3",
        support: "Standard",
      },
    },
    {
      id: "advanced_plan",
      name: "Advanced planG",
      price: { value: 99, currency: "SAR", cycle: "/per month" },
      features: {
        businessProfileListing: true,
        onlineBooking: true,
        emailSmsToClients: true,
        priorityExposure: false,
        employeeProfiles: "10",
        support: "Standard",
      },
    },
    {
      id: "enterprise_plan",
      name: "Enterprise Plan",
      price: { value: 149, currency: "SAR", cycle: "/per month" },
      features: {
        businessProfileListing: true,
        onlineBooking: true,
        emailSmsToClients: true,
        priorityExposure: true,
        employeeProfiles: "11-30",
        support: "Priority",
      },
    },
  ];
  const featureLabels = [
    "Business Profile Listing",
    "Online Booking",
    "Email & SMS to Clients",
    "Priority Exposure on Homepage Category “New”",
    "Employee Profiles",
    "Support",
  ];
  return (
    <section className="c-md:py-20 c-xsm:pt-[60px] c-xsm:pb-[50px] bg-pricing-card-bg">
      <Container>
        {/* title  */}
        <SectionTitle
          subTitle={"Pricing Compare with 3 Pricing Offer"}
          title={"Compare between plans"}
          className={"text-center"}
        />
        <div className="flex c-md:mt-[56px] c-xsm:mt-8">
          {/* basic features labels  */}
          <BasicFeaturesLabels features={featureLabels} />
          {/* compare pricing cards  */}
          <div className="grid c-lg:grid-cols-3 c-lg:gap-0 c-md:grid-cols-2 c-sm:gap-6  c-xsm:gap-5 c-lg:w-[54.5%] c-xsm:w-full">
            {pricingPlans?.map((plan) => {
              const featureValue = Object.values(plan?.features);
              return <ComparePricingCard key={plan?.id} plan={plan} featureValue={featureValue} featureLabels={featureLabels} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ComparePlansSection;
