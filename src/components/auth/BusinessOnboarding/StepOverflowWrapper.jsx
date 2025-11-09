const StepOverflowWrapper = ({ className, children }) => {
  return (
    <div
      className={`${className} c-lg:max-h-[calc(100vh-470px)] overflow-y-auto mx-auto default-scrollbar`}
    >
      {children}
    </div>
  );
};

export default StepOverflowWrapper;
