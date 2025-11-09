import BusinessOnboarding from "@/components/auth/BusinessOnboarding/BusinessOnboarding";
import { Outlet, ScrollRestoration } from "react-router-dom";
import authBanner from "../../assets/images/auth-banner.png";

const BusinessAccountSetupLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <div
        className="c-lg:py-[70px] c-md:py-[50px] c-xsm:py-10 c-xxl:px-[105px] c-xl:px-20 c-md:px-7 c-xsm:px-5 bg-cover bg-no-repeat c-lg:h-screen account-setup"
        style={{ backgroundImage: `url(${authBanner})` }}
      >
        <BusinessOnboarding />
        {/* outlet  */}
        <Outlet />
      </div>
    </>
  );
};

export default BusinessAccountSetupLayout;
