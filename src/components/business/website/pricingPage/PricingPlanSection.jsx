import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/container/Container";
import bannerLeft from "../../../../assets/images/pricing-section-grid-banner-left.png";
import bannerRight from "../../../../assets/images/pricing-section-grid-banner-right.png";
import PricingCard from "./pricingSection/PricingCard";
import useIsMobile from "@/hooks/useIsMobile";

const PricingPlanSection = () => {
  const pricingPlans = [
    {
      id: "plan_1",
      card: {
        name: "Essence plan",
        description: "Lorem ipsum lorem sum",
        price: {
          current: 69,
          original: 129,
          currency: "SAR",
        },
        billingCycle: "/per month",
        cta: "Get Now",
        features: [
          "Lorem ipsum",
          "Lorem ipsum",
          "Lorem ipsum",
          "Lorem ipsum",
          "Lorem ipsum",
        ],
      },
    },
    {
      id: "plan_2",
      card: {
        name: "Advanced plan",
        description: "Lorem ipsum lorem sum",
        price: {
          current: 99,
          original: 179,
          currency: "SAR",
        },
        billingCycle: "/per month",
        cta: "Get Now",
        features: [
          "Lorem ipsum",
          "Lorem ipsum",
          "Lorem ipsum",
          "Lorem ipsum",
          "Lorem ipsum",
        ],
      },
    },
    {
      id: "plan_3",
      card: {
        name: "Exclusive plan",
        description: "Lorem ipsum lorem sum",
        price: {
          current: 149,
          original: 249,
          currency: "SAR",
        },
        billingCycle: "/per month",
        cta: "Get Now",
        features: [
          "Lorem ipsum",
          "Lorem ipsum",
          "Lorem ipsum",
          "Lorem ipsum",
          "Lorem ipsum",
        ],
      },
    },
  ];
  const isMobileActive = useIsMobile()
  const middleCard = Math.floor(pricingPlans?.length / 2);
  return (
    <section className="relative z-[1] c-xl:pt-[173px] c-sm:pt-[110px] c-lg:pt-[160px] c-xsm:pt-[90px] c-xl:pb-[104px] c-lg:pb-20 c-md:pb-20 c-xsm:pb-[60px]">
      <Container>
        {/* title  */}
        <SectionTitle
          title={"Pricing & Plan"}
          desc={
            "Stay organized, prioritize with ease, and get things done faster. Our all-in-one task management tool keeps your team aligned and on track."
          }
          btnText={"Join Us"}
          btnPath={"/auth/sign-in"}
          className={"text-center"}
          isCenterDesc={true}
          descWidth={isMobileActive ? "100%" : "500px"}
        />
        {/* pricing plans  */}
        <div className="grid c-lg:grid-cols-3 c-md:grid-cols-2 c-xl:gap-6 c-lg:gap-4 c-sm:gap-4 c-xxl:mt-[94px] c-xl:mt-[70px] c-lg:mt-[50px] c-sm:mt-[50px] c-xsm:mt-10 c-xsm:gap-4">
          {pricingPlans?.map((plan, index) => (
            <PricingCard
              key={plan?.id}
              plan={plan}
              halfIndex={middleCard}
              index={index}
            />
          ))}
        </div>
      </Container>
      {/* banners  */}
      <img className="absolute top-[193px] right-0 opacity-20" src={bannerRight} alt="bannerRight" />
      <img className="absolute top-[150px] left-0 opacity-20" src={bannerLeft} alt="bannerLeft" />
    </section>
  );
};

export default PricingPlanSection;
