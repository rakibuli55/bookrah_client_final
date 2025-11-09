import useIsMobile from "@/hooks/useIsMobile";
import DashFooter from "@/shared/business/dashboard/DashFooter";
import DashNavbar from "@/shared/business/dashboard/DashNavbar";
import Sidebar from "@/shared/business/dashboard/Sidebar";
import { useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const BusinessDashboardLayout = () => {
  const isMobileDeviceActive = useIsMobile(481);

  useEffect(() => {
    if (
      !isMobileDeviceActive &&
      window.location.pathname.includes("for-business") &&
      window.location.pathname.includes("dashboard")
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileDeviceActive]);
  return (
    <>
      <ScrollRestoration />
      <div className="business-dashboard-wrapper p-3 bg-white c-md:h-screen">
        {/* navbar  */}
        <DashNavbar />
        {/* sidebar  */}
        <Sidebar />
        <main>
          <div className="c-xl:mt-[100px] c-md:mt-[94px] c-xsm:mt-[73px] c-xxxl:ml-[252px] c-xl:ml-[230px]">
            <Outlet />
          </div>
        </main>
        {/* footer  */}
        <DashFooter />
      </div>
    </>
  );
};

export default BusinessDashboardLayout;
