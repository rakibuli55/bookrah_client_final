import { Link } from "react-router-dom";

const AddNewServiceHeader = () => {
  return (
    <div className="font-satoshi flex items-center justify-between">
      {/* title  */}
      <h1 className="title--sm !font-bold text-heading">Add a service</h1>
      {/* buttons  */}
      <div className="flex items-center gap-3">
        <Link
          to={"/for-business/dashboard/services"}
          className="capitalize c-md:py-3 c-md:px-[14px] c-xsm:py-2 c-xsm:px-[14px] rounded-[50px] text-white bg-heading cursor-pointer duration-200 ease-in-out hover:bg-primary font-medium c-md:text-base c-xsm:text-sm"
        >
          close
        </Link>
        <button
          type="submit"
          className="capitalize c-md:py-3 c-md:px-[14px] c-xsm:py-2 c-xsm:px-[14px] rounded-[50px] text-white bg-primary cursor-pointer duration-200 ease-in-out hover:bg-heading font-medium c-md:text-base c-xsm:text-sm"
        >
          save
        </button>
      </div>
    </div>
  );
};

export default AddNewServiceHeader;
