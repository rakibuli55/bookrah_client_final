import PrimaryButtonRounded from "@/components/common/PrimaryButtonRounded";
import Container from "@/components/container/Container";

const CTASection = ({className}) => {
  const ctaImage =
    "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <section className={`pt-[50px] c-xsm:pt-10 ${className}`}>
      <Container>
        <div
          className="bg-cover bg-no-repeat bg-center c-xxl:py-[153px] c-xl:py-[120px] c-md:py-[100px] c-sm:py-20 c-xsm:py-[60px] c-sm:rounded-[24px] c-xsm:rounded-[14px] overflow-hidden relative z-[1]"
          style={{ backgroundImage: `url(${ctaImage})` }}
        >
          <div className="text-center">
            <h3 className="title--lg !text-white">What are you waiting for?</h3>
            <PrimaryButtonRounded
              className={"mt-6"}
              path={"/auth/sign-in"}
              text={"Book Now"}
            />
          </div>
          <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.7)] z-[-1]"></div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
