
const Container = ({ children, className }) => {
  return (
    <div
      className={`c-4xl:w-[1520px] c-xxxl:w-[1440px] c-xl:w-[1140px] c-lg:w-[992px] mx-auto c-sm:px-6 c-xsm:px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
