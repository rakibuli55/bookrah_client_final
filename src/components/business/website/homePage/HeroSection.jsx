import PrimaryButtonRounded from "@/components/common/PrimaryButtonRounded";
import Container from "@/components/container/Container";
import customerIcon from "../../../../assets/icon/customer-centric.svg";
import bookingIcon from "../../../../assets/icon/service-24.svg";
import IntegrityIcon from "../../../../assets/icon/service-integrity.svg";
import BannerPattern from "../../../../assets/images/business-home-hero-pattern.png";
import ServiceCard from "./heroSection/HeroFeatureCard";
import useIsMobile from "@/hooks/useIsMobile";

const HeroSection = () => {
  const services = [
    {
      id: 1,
      icon: bookingIcon,
      title: "Book anytime",
      subTitle: "Effortless Organization Instant Notification.",
    },
    {
      id: 2,
      icon: IntegrityIcon,
      title: "Integrity",
      subTitle: "Easily organize appointments from one place",
    },
    {
      id: 3,
      icon: customerIcon,
      title: "Instant Notification",
      subTitle: "Receive instant SMS and email notifications",
    },
  ];

  const isMobile = useIsMobile(991)

  return (
    <section
      className="c-xxl:pt-[173px] c-lg:pt-[155px] c-md:pt-[140px] c-sm:pt-[120px] c-xsm:pt-[100px] c-xxl:pb-[128px] c-xl:pb-[100px] c-sm:pb-20 c-xsm:pb-[60px] business-hero-gradient bg-cover bg-no-repeat bg-center relative z-[1]"
      style={{
        backgroundImage: `url(${!isMobile ? BannerPattern : null})`,
      }}
    >
      <Container>
        <div>
          {/* content  */}
          <div className="text-center">
            <h1 className="title--xl leading-[115%] c-xxl:w-[1104px] c-xl:w-[980px] c-lg:w-[800px] c-md:w-[600px] c-xsm:w-full mx-auto">
              The #1 platform for your Beauty & Wellness business in the Middle
              East and worldwide
            </h1>
            <h2 className="text-[18px] c-sm:text-base c-xsm:text-[15px] mt-4 w-[600px] c-md:w-[70%] c-xsm:w-[90%] mx-auto font-satoshi">
              A flexible, powerful, and all-in-one booking platform to support
              the growth of your business — wherever you are
            </h2>
            <PrimaryButtonRounded
              className={"c-sm:mt-8 c-xsm:mt-6"}
              path={"/auth/business-signup"}
              text={"Join Us"}
            />
          </div>
          {/* services  */}
          <div className="grid c-md:grid-cols-3 c-xsm:gap-3 c-xxl:gap-6 c-xl:gap-4 c-md:gap-4 c-xxl:mt-[94px] c-xl:mt-[68px] c-md:mt-[50px]  c-xsm:mt-10">
            {services?.map((service) => (
              <ServiceCard key={service?.id} service={service} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
