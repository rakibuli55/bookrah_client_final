

const FeatureCard = ({feature}) => {
  return (
    <div className="c-xxl:py-[54px] c-xxl:px-8 c-lg:p-6 c-sm:p-5 c-xsm:p-4 bg-white c-sm:rounded-[24px] c-xsm:rounded-[12px] duration-300 ease-in-out hover:bg-business-hero-feature-card">
      <h4 className="title--sm ">{feature?.title}</h4>
      <p className="text-paragraph mt-2 c-lg:text-base c-xsm:text-sm">{feature?.desc}</p>
    </div>
  );
};

export default FeatureCard;