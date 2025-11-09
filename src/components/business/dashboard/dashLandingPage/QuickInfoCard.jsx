const QuickInfoCard = ({ icon, title, number }) => {
  return (
    <div className="p-4 bg-white c-md:rounded-[16px] c-xsm:rounded-[12px] flex items-center c-md:gap-4 c-xsm:gap-3">
      <div className="c-md:w-[44px] c-md:h-[44px] c-xsm:w-10 c-xsm:h-10 rounded-full flex items-center justify-center text-white bg-heading">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-paragraph c-md:mb-[6px] c-xsm:mb-1">{title}</p>
        <p className="c-md:text-[20px] c-xsm:text-[18px] font-semibold text-heading">{number}</p>
      </div>
    </div>
  );
};

export default QuickInfoCard;
