import useIsMobile from "@/hooks/useIsMobile";
import { GoPlus } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ServicesHeader = () => {
  const isMobileDevice = useIsMobile(481)
  return (
    <div className="flex c-md:flex-row c-xsm:flex-col c-md:items-center justify-between">
      {/* left  */}
      <div>
        <div className="flex items-center gap-[6px]">
          <h1 className="title--sm font-satoshi !font-bold capitalize">
            Services list
          </h1>
          <p className="py-1 px-[10px] rounded-[24px] font-medium border border-input w-fit text-sm text-paragraph">
            132
          </p>
        </div>
        <p className="text-paragraph">
          View, add, edit and delete your services.{" "}
        </p>
      </div>
      {/* right  */}
      <div className="flex items-center c-md:gap-4 c-xsm:gap-3 c-md:mt-0 c-xsm:mt-4">
        {/* search bar  */}
        <div className="common--search-bar">
          <input type="text" placeholder="Search services" />
          <p className="icon">
            <IoSearchOutline />
          </p>
        </div>
        {/* add button  */}
        <Link
          to={"/for-business/dashboard/services/add-new-service"}
          className="flex items-center gap-2 capitalize w-fit text-white bg-heading c-md:py-[10px] c-md:px-[14px] c-xsm:py-[10px] c-xsm:px-4 c-md:w-fit rounded-[40px] font-medium text-sm cursor-pointer hover:bg-primary duration-200 ease-in-out"
        >
          <p>
            <GoPlus size={20} />
          </p>
          {
            isMobileDevice ? "Add New" : "Add New Service"
          }
          
        </Link>
      </div>
    </div>
  );
};

export default ServicesHeader;
