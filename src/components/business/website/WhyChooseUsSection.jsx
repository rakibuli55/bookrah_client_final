import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/container/Container";
import FeatureCard from "./homePage/whyChooseSection/FeatureCard";

const WhyChooseUsSection = () => {
  const features = [
    {
      id: 1,
      title: "Manage",
      desc: "Run your entire business with clarity and precision.Effortlessly organize bookings, clients, team members, services, and locations — supported by insightful reports and real-time analytics to help you make smarter decisions.",
    },
    {
      id: 2,
      title: "Grow",
      desc: "Increase your visibility and attract more clients with Bookrah’s built-in marketing tools.Keep your clients engaged with automated reminders, a beautiful online presence, and a seamless customer journey from discovery to booking.",
    },
    {
      id: 3,
      title: "Stay in Full Control",
      desc: "Bookrah enhances your workflow while keeping your revenue entirely in your hands.Clients book online with ease, and all payments are handled directly at your salon — giving you full flexibility, simplicity, and complete ownership of your business.",
    },
  ];
  return (
    <section className="c-lg:py-[96px] c-md:py-20 c-xsm:py-[60px] bg-primary">
      <Container>
        {/* title  */}
        <SectionTitle
          subTitle={"why choose us"}
          title={"Everything you need to power your beauty business - with simplicity and elegance"}
          desc={
            "Bookrah brings together the essential tools your salon needs to operate smoothly, elevate the client experience, and grow with confidence.All in one refined, intuitive platform."
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
