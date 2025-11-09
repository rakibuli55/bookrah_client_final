const BasicFeaturesLabels = ({ features }) => {
  return (
    <div className="w-[45.5%] c-xxl:mt-[95px] c-xl:mt-[59px] c-lg:mt-[48px] c-lg:block c-xsm:hidden">
      <h1 className="title--sm pb-4 mb-[9px] border-b border-dashed border-[rgba(82,82,90,0.2)] font-bold">
        Basic Features
      </h1>
      {/* features  */}
      <ul>
        {features?.map((feature, index) => (
          <li
            key={index}
            className="font-satoshi py-4 text-base text-heading font-medium"
          >
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasicFeaturesLabels;
