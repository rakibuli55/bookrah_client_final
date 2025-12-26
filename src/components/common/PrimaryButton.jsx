import SpinnerIcon from "../../assets/loaders/spinner.svg"

const PrimaryButton = ({ className, text, type, isLoading = false }) => {
  return (
    <button
      type={type}
      className={`cursor-pointer c-xxl:py-[15px] c-md:py-3 c-xsm:py-[10px] rounded-[8px] c-md:text-base c-xsm:text-sm capitalize text-[18px] font-bold text-heading px-5 text-center bg-primary border-[2px] border-primary duration-200 ease-in-out hover:bg-transparent hover:text-primary flex items-center justify-center ${className}`}
    >
      {
        isLoading ? (
          <div className="h-6 w-6">
            <img className="w-full h-full" src={SpinnerIcon} alt="SpinnerIcon" />
          </div>
        ) : text
      }
    </button>
  );
};

export default PrimaryButton;
