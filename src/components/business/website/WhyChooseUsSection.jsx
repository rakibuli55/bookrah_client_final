import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/container/Container";
import FeatureCard from "./homePage/whyChooseSection/FeatureCard";

const WhyChooseUsSection = () => {
  const features = [
    {
      id: 1,
      title: "Manage",
      desc: "Manage bookings, sales, clients, locations, team members. Analyze your business with advanced reporting and analytics.",
    },
    {
      id: 2,
      title: "Grow",
      desc: "Win new clients on the world’s largest beauty and wellness marketplace. Keep them coming back with marketing features.",
    },
    {
      id: 3,
      title: "Get paid",
      desc: "Get paid fast with seamless payment processing. Reduce no-shows with upfront payments and simplify checkout.",
    },
  ];
  return (
    <section className="c-lg:py-[96px] c-md:py-20 c-xsm:py-[60px] bg-primary">
      <Container>
        {/* title  */}
        <SectionTitle
          subTitle={"why choose us"}
          title={"Everything you need to run your businesses"}
          desc={
            "Bookrah offers innovative features that bring convenience, efficiency, and an improved experience for both your team members and clients."
          }
        />
        {/* features  */}
        <div className="grid c-md:grid-cols-3 gap-6 c-sm:gap-3 mt-[56px] c-xsm:gap-3 c-sm:mt-[30px] c-xsm:mt-7">
          {features?.map((feature) => (
            <FeatureCard key={feature?.id} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
