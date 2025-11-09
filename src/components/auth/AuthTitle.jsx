const AuthTitle = ({ title, subTitle, className }) => {
  return (
    <div className={`${className} c-md:my-[50px] c-xsm:mt-10 c-xsm:mb-8`}>
      <h1 className="c-xxxl:text-[40px] c-lg:text-[36px] c-sm:text-[30px]  c-xsm:text-[24px] font-semibold text-heading">{title}</h1>
      <h2 className="c-lg:text-[18px] c-sm:text-base c-xsm:text-sm font-medium c-md:mt-4 c-xsm:mt-3 font-satoshi c-xsm:w-[80%] c-xsm:mx-auto c-md:font-medium c-xsm:font-normal">{subTitle}</h2>
    </div>
  );
};

export default AuthTitle;
