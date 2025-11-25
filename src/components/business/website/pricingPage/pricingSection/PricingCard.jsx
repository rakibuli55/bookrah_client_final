import checkbadge from "../../../../../assets/icon/checkmark-badge-01.svg";

const PricingCard = ({ plan, halfIndex, index }) => {
  return (
    <div
      className={`p-6 bg-pricing-card-bg rounded-[16px] pricing-card duration-300 ease-in-out ${
        halfIndex === index ? "active-pricing-card" : ""
      }`}
    >
      <h4 className="text-[20px] duration-300 ease-in-out font-satoshi text-heading font-medium">
        {plan?.card?.name}
      </h4>
      {/* price  */}
      <div className="font-satoshi c-sm:my-6 c-xsm:py-5">
        <div className="flex items-center gap-2">
          <h3 className="c-xxl:text-[40px] c-xl:text-[36px] c-lg:text-[32px] c-sm:text-[28px] c-xsm:text-[22px] duration-300 ease-in-out font-bold text-heading leading-[130%]">
            {plan?.card?.price?.current} {plan?.card?.price?.currency}
          </h3>
          <del className="c-sm:text-[20px] c-xsm:text-base duration-300 ease-in-out font-bold text-[#828282] c-sm:mt-3">
            {plan?.card?.price?.original} {plan?.card?.price?.currency}
          </del>
        </div>
        <p className="text-base duration-300 ease-in-out text-paragraph">
          {plan?.card?.billingCycle}
        </p>
      </div>
      {/* get now  */}
      <button
        type="button"
        className="block w-full bg-heading text-white c-sm:py-3 c-xsm:py-2 px-6 capitalize font-medium rounded-[54px] border border-heading cursor-pointer duration-300 ease-in-out c-sm:text-base c-xsm:text-sm"
      >
        get now
      </button>
      {/* fetures  */}
      <div>
        <p className="text-base font-medium text-heading pb-3 mt-6 border-b border-dashed border-[rgba(82,82,90,0.2)] duration-300 ease-in-out divider">
          Included Features
        </p>
        <ul className="mt-[10px]">
          {plan?.card?.features?.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-base text-heading duration-300 ease-in-out font-medium font-satoshi py-[6px]"
            >
              <img className="w-5 h-5" src={checkbadge} alt="check" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
