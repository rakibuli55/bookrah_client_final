import useIsMobile from "@/hooks/useIsMobile";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

const ShiftHeader = () => {
  const isMobileDevice = useIsMobile(481);
  return (
    <div className="flex items-center justify-between">
      {/* left  */}
      <div>
        <div className="flex items-center gap-[6px]">
          <h1 className="title--sm font-satoshi !font-bold capitalize">
            Members Shifts
          </h1>
        </div>
        <p className="text-paragraph c-md:text-base c-xsm:text-sm">
          Edit your employes shifts.
        </p>
      </div>
      {/* right  */}
      <div className="flex items-center gap-4">
        {/* add button  */}
        <Link
          to={"/for-business/dashboard/services/add-new-service"}
          className="flex items-center gap-2 capitalize w-fit text-white bg-heading c-md:py-[10px] c-md:px-[14px] c-xsm:py-[10px] c-xsm:px-4 c-md:w-fit rounded-[40px] font-medium text-sm cursor-pointer hover:bg-primary duration-200 ease-in-out"
        >
          <p>
            <GoPlus size={20} />
          </p>
          {isMobileDevice ? "Add New" : "Add New Member"}
        </Link>
      </div>
    </div>
  );
};

export default ShiftHeader;
