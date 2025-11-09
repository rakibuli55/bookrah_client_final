import { BsClock } from "react-icons/bs";

const ServiceCard = ({ service }) => {
  return (
    <div className="py-[14px] px-4 rounded-[8px] border border-auth-input-border relative duration-200 ease-in-out hover:border-primary cursor-pointer">
      <div className="flex items-start justify-between">
        {/* name and duration  */}
        <div>
          <h3 className="text-[18px] font-bold">{service?.name}</h3>
          <p className="flex items-center gap-2 text-sm text-paragraph mt-[10px]">
            <span>
              <BsClock />
            </span>
            {service?.time}
          </p>
        </div>
      </div>
      <div className="mt-4 c-md:flex items-center justify-between">
        <p className="c-lg:w-[694px] c-md:w-[500px] text-sm text-paragraph">
          {service?.description}
        </p>
        <ul className="flex items-center gap-2 font-satoshi c-md:mt-0 c-xsm:mt-3">
          <li className="text-sm font-bold text-heading capitalize">
            {service?.price}
          </li>
          <li className="w-[6px] h-[6px] rounded-full bg-heading"></li>
          <li className="text-sm font-bold text-heading capitalize">
            {service?.items} item
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
