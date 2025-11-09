import PrimaryButtonRounded from "./PrimaryButtonRounded";

const SectionTitle = ({
  subTitle,
  title,
  desc,
  btnText,
  btnPath,
  className,
  isCenterDesc,
  descWidth,
}) => {
  return (
    <div className={`${className}`}>
      {subTitle && (
        <p className="text-sm text-heading font-black capitalize">{subTitle}</p>
      )}
      <h3 className="title--lg leading-[120%] pt-2 pb-4">{title}</h3>
      <p
        style={{
          width: descWidth,
        }}
        className={`w-[744px] c-xsm:w-[90%] text-paragraph leading-[170%] c-xsm:leading-normal c-xsm:text-sm ${
          isCenterDesc ? "mx-auto" : ""
        } `}
      >
        {desc}
      </p>
      {btnText && (
        <PrimaryButtonRounded
          className={"c-md:mt-6 c-sm:mt-8 c-xsm:mt-6"}
          path={btnPath}
          text={btnText}
        />
      )}
    </div>
  );
};

export default SectionTitle;
