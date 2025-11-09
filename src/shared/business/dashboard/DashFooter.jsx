import SocialMedia from "@/components/common/footer/SocialMedia";
import { Link } from "react-router-dom";

const DashFooter = () => {
  const menuLists = [
    {
      id: 1,
      name: "privacy policy",
      path: "/privacy-policy",
    },
    {
      id: 2,
      name: "Term and conditions",
      path: "/terms-condition",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <footer className="py-4 px-6 c-md:fixed c-md:bottom-3 right-3 bg-dash-gray c-xxxl:w-[calc(100vw-276px)] c-xl:w-[calc(100vw-254px)] c-xsm:w-[calc(100vw-24px)] c-xsm:rounded-[16px] flex c-md:flex-row c-xsm:flex-col items-center justify-between c-md:mt-0 c-xsm:mt-3">
      {/* copy right - menus  */}
      <div className="flex c-md:flex-row c-xsm:flex-col items-center c-md:gap-6">
        <p className="text-sm font-bold text-paragraph c-md:mb-0 c-xsm:mb-1">
          Copyright © 2025 Bookrah
        </p>
        {/* menu  */}
        <ul className="flex items-center c-md:gap-4 c-xsm:gap-3 c-md:mb-0 c-xsm:mb-2">
          {menuLists?.map((menu) => (
            <li key={menu?.id}>
              <Link
                to={menu?.path}
                className="inline-block c-md:text-sm c-xsm:text-[12px] text-paragraph opacity-70 capitalize duration-200 ease-in-out hover:text-primary"
              >
                {menu?.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* social icons  */}
      <SocialMedia
        className={"c-md:text-[24px] c-xsm:text-[18px] text-paragraph"}
      />
    </footer>
  );
};

export default DashFooter;
