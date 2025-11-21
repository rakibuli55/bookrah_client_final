import Notifications from "@/components/business/dashboard/navbar/Notifications";
import UserProfile from "@/components/business/dashboard/navbar/UserProfile";
import BreadcrumbCustom from "@/components/common/BreadcrumbCustom";
import useIsMobile from "@/hooks/useIsMobile";
import { handleMobileSidebar } from "@/redux/features/business/DashSidebarSlice";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const DashNavbar = () => {
  const location = useLocation();
  const currentLocation = location.pathname
  .split("/")
  .filter(Boolean)
  .pop()
  .replace(/-/g, " ");

  const isMobileSidebarActive = useSelector(
    (state) => state.sidebarSlice.mobileSidebarActive
  );
  const isMobileDeviceActive = useIsMobile(1199.99);
  const dispatch = useDispatch();

  return (
    <header className="c-md:py-4 c-xsm:py-2 c-xsm:rounded-[10px] c-xl:px-8 c-xsm:px-4 fixed top-3 c-xl:right-3 c-xl:left-auto c-xsm:right-3 c-xsm:left-3 bg-dash-gray c-xxxl:w-[calc(100vw-276px)] c-xl:w-[calc(100vw-254px)] c-xsm:w-[calc(100vw-24px)] c-md:rounded-[16px] z-[50]">
      <div className="flex items-center justify-between">
        {/* title and breadcrumb  */}
        <div>
          <BreadcrumbCustom />
          <h1 className="title--sm font-satoshi capitalize !font-bold">
            {currentLocation}
          </h1>
        </div>
        {/* profile and notification  */}
        <div className="flex items-center c-md:gap-3 c-xsm:gap-2">
          {isMobileDeviceActive && (
            <div
              className="c-md:h-10 c-md:w-10 c-xsm:h-9 c-xsm:w-9 flex items-center justify-center bg-heading text-white rounded-full cursor-pointer"
              onClick={() => dispatch(handleMobileSidebar(!isMobileSidebarActive))}
            >
              {isMobileSidebarActive ? (
                <AiOutlineClose size={23} />
              ) : (
                <CgMenu size={23} />
              )}
            </div>
          )}

          {/* notification  */}
          <Notifications />
          {/* profile  */}
          <UserProfile />
        </div>
      </div>
    </header>
  );
};

export default DashNavbar;
