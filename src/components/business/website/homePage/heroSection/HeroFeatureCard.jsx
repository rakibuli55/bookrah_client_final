const HeroFeatureCard = ({ service }) => {
  return (
    <div className="c-xxl:p-8 c-xl:p-6 c-sm:p-4 c-xsm:p-3 bg-business-hero-feature-card c-sm:rounded-[24px] c-xsm:rounded-[12px] text-center duration-200 ease-in-out border border-business-hero-feature-card hover:border-primary">
      {/* icon  */}
      <div className="c-lg:w-12 c-lg:h-12 c-sm:h-10 c-sm:w-10 c-xsm:h-10 c-xsm:w-10 rounded-full flex items-center justify-center bg-primary mx-auto">
        <img className="c-lg:w-6 c-lg:h-6 c-xsm:w-5 c-xsm:h-5" src={service?.icon} alt={service?.title} />
      </div>
      {/* title  */}
      <h3 className="title--sm mt-3">{service?.title}</h3>
      {/* sub title  */}
      <p className="text-paragraph mt-2 c-lg:text-base c-xsm:text-sm">{service?.subTitle}</p>
    </div>
  );
};

export default HeroFeatureCard;
