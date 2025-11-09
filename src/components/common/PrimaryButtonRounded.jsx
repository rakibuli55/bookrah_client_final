import { Link } from "react-router-dom";

const PrimaryButtonRounded = ({ className, text, path }) => {
  return (
    <Link
      to={path}
      className={`cursor-pointer c-xxl:py-[12px] c-lg:py-[10px] c-lg:text-base c-xsm:py-[7px] c-xsm:text-sm rounded-[40px] capitalize text-base font-bold text-heading px-5 text-center bg-primary border-[2px] border-primary duration-200 ease-in-out hover:bg-transparent hover:text-primary ${className} inline-block`}
    >
      {text}
    </Link>
  );
};

export default PrimaryButtonRounded;
