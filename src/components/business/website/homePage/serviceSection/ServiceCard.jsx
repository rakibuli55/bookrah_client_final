import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="relative z-[1] c-xxl:h-[380px] c-lg:h-[300px] c-xsm:h-[230px] rounded-[18px] overflow-hidden card-linear-overlay service-card">
      <img
        className="w-full h-full object-cover duration-300 ease-in-out"
        src={service?.image}
        alt={service?.title}
      />
      <div className="absolute c-xxl:bottom-8 c-lg:bottom-4 c-xsm:bottom-3 left-0 c-xxl:px-8 c-lg:px-6 c-xsm:px-4 flex items-center justify-between w-full z-[2]">
        <p className="title--sm !text-white w-full">{service?.name}</p>
        <Link
          to={service?.path}
          className="service-link h-12 w-12 c-xsm:h-8 c-xsm:min-w-8 bg-white text-heading rounded-full flex items-center justify-center opacity-0 invisible scale-[0] duration-300 ease-in-out c-lg:text-[22px] c-xsm:text-[18px]"
        >
          <IoArrowForwardOutline />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
