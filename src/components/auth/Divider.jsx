const Divider = ({ text }) => {
  return (
    <div className="relative c-md:w-[471px] mx-auto c-md:mt-[46px] c-xsm:mt-8">
      <p className="w-full h-[1px] bg-heading"></p>
      <p className="py-[6px] px-[10px] bg-theme-bg text-heading absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">{text}</p>
    </div>
  );
};

export default Divider;
