import useIsMobile from "@/hooks/useIsMobile";
import { GoCheck } from "react-icons/go";
import { RiCloseCircleFill } from "react-icons/ri";

const ComparePricingCard = ({ plan, featureValue, featureLabels }) => {
  const isMobileActive = useIsMobile(991);
  return (
    <div className="font-satoshi">
      {/* price header  */}
      <div className="c-xxl:pb-[67px] c-xl:pb-10 c-lg:pb-8 c-sm:pb-6 c-xsm:pb-5 border-b border-dashed border-[rgba(82,82,90,0.2)] mb-[9px]">
        <h3 className="c-xxl:text-[20px] c-lg:text-base font-medium text-heading c-sm:mb-2 c-xsm:mb-1">
          {plan?.name}
        </h3>
        <div className="flex items-center gap-2">
          <p className="c-xxl:text-[28px] c-xl:text-[24px] c-sm:text-[20px] font-bold text-heading">
            {plan?.price?.currency}
            {plan?.price?.value}
          </p>
          <p className="c-xl:text-base c-xsm:text-sm text-paragraph">
            {plan?.price?.cycle}
          </p>
        </div>
      </div>
      {/* features  */}
      <ul>
        {featureValue?.map((feature, index) => (
          <li key={index} className="text-[20px] c-lg:pl-4 c-lg:py-4 c-xsm:py-3 c-xsm:flex c-xsm:gap-2">
            {isMobileActive && (
              <span className="text-sm c-sm:text-[15px] text-heading">
                {featureLabels[index]}
              </span>
            )}
            {typeof feature === "boolean" ? (
              feature ? (
                <span className="text-[#60d184]">
                  <GoCheck />
                </span>
              ) : (
                <span className="text-[#f93c3f]">
                  <RiCloseCircleFill />
                </span>
              )
            ) : (
              <span className="c-lg:text-base c-xsm:text-[15px] text-heading">{feature}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComparePricingCard;
