import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/container/Container";
import useIsMobile from "@/hooks/useIsMobile";
import AboutHeroImage from "../../../../assets/images/about-hero.png";
import bannerLeft from "../../../../assets/images/pricing-section-grid-banner-left.png";
import bannerRight from "../../../../assets/images/pricing-section-grid-banner-right.png";

const AboutUsSection = () => {
  const mobileActive = useIsMobile();

  return (
    <section className="c-lg:pt-[173px] c-sm:pt-[130px] c-xsm:pt-[100px] c-lg:pb-20 c-md:pb-10 c-sm:pb-6 c-xsm:pb-7 relative">
      <Container>
        {/* title  */}
        <SectionTitle
          title={"About Us"}
          desc={
            "Beauty & Wellness booking platform in the Middle East — trusted by clients, loved by professionals, growing worldwide."
          }
          className={
            "text-center c-xxl:mb-[94px] c-xl:mb-[60px] c-lg:mb-[50px] c-sm:mb-10 c-xsm:mb-7"
          }
          isCenterDesc={true}
          descWidth={mobileActive ? "100%" : 500}
        />
        <div>
          {/* content  */}
          <div className="grid c-lg:grid-cols-2 items-center c-xxl:gap-[100px] c-xl:gap-[50px] c-lg:gap-10 font-satoshi">
            <div className="c-md:rounded-[24px] c-xsm:rounded-[12px] overflow-hidden">
              <img
                className="w-full c-xxl:h-[598px] c-xl:h-[500px] c-md:h-[500px] c-sm:h-[300px] c-xsm:h-[280px] c-lg:h-[470px] object-cover"
                src={AboutHeroImage}
                alt="AboutHeroImage"
              />
            </div>
            <div>
              <h1 className="c-xxl:text-[40px] c-xl:text-[32px] c-lg:text-[28px] c-xsm:text-[20px] c-xsm:leading-normal c-sm:text-[26px] font-semibold text-heading c-lg:mb-6 c-sm:mt-8 c-xsm:mt-5 c-xsm:mb-4">
                At Bookrah, we’re on a mission to digitally transform how people
                discover and book services
              </h1>
              <p className="text-base text-paragraph c-xl:pb-[96px] c-lg:pb-[50px] c-sm:pb-10 border-b border-dashed border-[rgba(82,82,90,0.2)] c-xsm:pb-6">
                We connect customers with service providers through a reliable
                online booking platform — anytime, anywhere. From beauty to
                specialized local services, Bookrah makes booking effortless.
                Many providers still use outdated methods despite the demand for
                online bookings. We aim to change that by offering smart tools
                and a seamless experience, helping them thrive in the digital
                age. Bookrah is on a journey to become the most trusted service
                platform, connecting providers and clients harmoniously. Our
                dedicated team supports service providers and clients every step
                of the way. Whether you’re a provider simplifying scheduling or
                a customer seeking the perfect service, Bookrah is here for you.
              </p>
            </div>
          </div>
          {/* band text  */}
          <h2 className="text-center c-lg:w-[808px] c-xsm:w-full mx-auto title--sm font-satoshi c-xl:mt-[106px] c-lg:mt-20 c-sm:mt-4 c-xsm:pt-6">
            The #1 Beauty & Wellness booking platform in the Middle East —
            trusted by clients, loved by professionals, growing worldwide.
          </h2>
          {/* banners  */}
          <div>
            <img
              className="absolute top-[193px] right-0 opacity-20"
              src={bannerRight}
              alt="bannerRight"
            />
            <img
              className="absolute top-[150px] left-0 opacity-20"
              src={bannerLeft}
              alt="bannerLeft"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsSection;
