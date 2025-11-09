import { handleMobileSidebar } from "@/redux/features/business/DashSidebarSlice";
import { useEffect, useState } from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GrSchedule } from "react-icons/gr";
import { LuTicket, LuUserPlus } from "react-icons/lu";
import { MdOutlineContactEmergency } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";
import { RiSettingsLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { TbUsersGroup } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import LogoPrimary from "../../../assets/logo/logo-primary.svg";
const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [selectedMenuType, setSelectedMenuType] = useState("mainMenu");

  const isMobileSidebarActive = useSelector(
    (state) => state.sidebarSlice.mobileSidebarActive
  );

  const stuffId = 1;

  const menusLists = [
    {
      id: 1,
      name: "dashboard",
      path: "/for-business/dashboard",
      icon: <RxDashboard />,
    },
    {
      id: 2,
      name: "bookings",
      path: "/for-business/dashboard/bookings",
      icon: <SlCalender />,
    },
    {
      id: 3,
      name: "Staffs/Employees",
      path: "/for-business/dashboard/staffs-employees/team-members",
      icon: <FiUsers />,
    },
    {
      id: 4,
      name: "Services",
      path: "/for-business/dashboard/services",
      icon: <LuTicket />,
    },
    {
      id: 5,
      name: "clients",
      path: "/for-business/dashboard/clients",
      icon: <TbUsersGroup />,
    },
  ];

  const staffEmployeeMenuLists = [
    {
      id: 1,
      name: "Team members",
      path: "/for-business/dashboard/staffs-employees/team-members",
      icon: <FiUsers />,
    },
    {
      id: 2,
      name: "Scheduled shifts",
      path: "/for-business/dashboard/staffs-employees/scheduled-shifts",
      icon: <GrSchedule />,
    },
    {
      id: 3,
      name: "add new members",
      path: "/for-business/dashboard/staffs-employees/add/profile",
      icon: <LuUserPlus size={22} />,
    },
  ];
  const staffEmployeeAddMembersMenuLists = [
    {
      id: 1,
      name: "profile",
      path: "/for-business/dashboard/staffs-employees/add/profile",
      icon: <FiUsers />,
    },
    {
      id: 2,
      name: "address",
      path: `/for-business/dashboard/staffs-employees/add-edit/${stuffId}/address`,
      icon: <FaRegAddressCard />,
    },
    {
      id: 3,
      name: "emergency contact",
      path: `/for-business/dashboard/staffs-employees/add-edit/${stuffId}/emergency-contact`,
      icon: <MdOutlineContactEmergency />,
    },
    {
      id: 4,
      name: "services",
      path: `/for-business/dashboard/staffs-employees/add-edit/${stuffId}/services`,
      icon: <LuTicket />,
    },
  ];

  const finalRenderedMenu =
    selectedMenuType === "mainMenu"
      ? menusLists
      : selectedMenuType === "staffEmployeeMenu"
      ? staffEmployeeMenuLists
      : selectedMenuType === "staffAddMenu"
      ? staffEmployeeAddMembersMenuLists
      : null;

  useEffect(() => {
    if (
      location.pathname.includes("dashboard") &&
      location.pathname.includes("staffs-employees") &&
      !location.pathname.includes("add") &&
      !location.pathname.includes("profile")
    ) {
      setSelectedMenuType("staffEmployeeMenu");
    } else if (
      (location.pathname.includes("add") ||
        location.pathname.includes("profile") ||
        location.pathname.includes("address") ||
        location.pathname.includes("emergency-contact")) &&
      !location.pathname.includes("add-new-service")
    ) {
      setSelectedMenuType("staffAddMenu");
    } else {
      setSelectedMenuType("mainMenu");
    }
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`pb-6 c-xxxl:w-[240px] c-xl:w-[216px] c-md:w-[216px] c-xsm:w-[204px] rounded-[16px] fixed top-3 c-xl:left-3 bg-dash-gray z-[50] duration-300 ease-in-out ${
          isMobileSidebarActive ? "left-0" : "left-[-100%]"
        }`}
      >
        {/* header  */}
        <div className="c-md:px-5 c-xsm:px-4 pt-6 pb-8">
          <Link
            to={"/for-business"}
            className="c-xxxl:logo-width c-xl:w-[170px] c-xsm:w-[140px] block"
          >
            <img className="w-full h-full" src={LogoPrimary} alt="logo" />
          </Link>
        </div>
        {/* menus  */}
        <ul className="h-[calc(100vh-234px)] default-scrollbar pb-5 overflow-y-auto">
          {finalRenderedMenu?.map((menu) => (
            <li
              key={menu?.id}
              onClick={() => dispatch(handleMobileSidebar(false))}
            >
              <Link
                to={menu?.path}
                className={`relative w-full flex items-center c-md:gap-3 c-xsm:gap-2 c-xxxl:px-8 c-md:px-5 c-xsm:px-4 py-[10px] capitalize text-heading duration-200 ease-in-out hover:text-primary menu-link ${
                  menu?.path === location.pathname ? "active-menu-link" : ""
                }`}
              >
                <span
                  className={`text-[20px] ${
                    menu?.name === "clients" ? "text-[24px]" : ""
                  }`}
                >
                  {menu?.icon}
                </span>
                <span className="text-base font-medium">{menu?.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* settings button  */}
        <Link
          to={"/for-business/dashboard/settings"}
          className={`flex items-center gap-3 justify-center py-[10px] px-[32px] hover:text-primary duration-200 ease-in-out mb-4 ${
            location.pathname === "/for-business/dashboard/settings"
              ? "text-primary"
              : ""
          }`}
        >
          <span className="text-[20px]">
            <RiSettingsLine />
          </span>
          <span>Settings</span>
        </Link>
        {/* signout button  */}
        <div className="px-5">
          <button className="flex items-center w-full py-[10px] px-8 bg-primary text-heading gap-3 cursor-pointer rounded-[12px] font-medium">
            <span className="text-[20px]">
              <PiSignOut />
            </span>
            <span>Sign Out</span>
          </button>
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[rgba(255,255,255,0.3)] z-[30] backdrop-blur-[4px] duration-200 ease-in-out ${
          isMobileSidebarActive ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => dispatch(handleMobileSidebar(false))}
      ></div>
    </>
  );
};

export default Sidebar;
