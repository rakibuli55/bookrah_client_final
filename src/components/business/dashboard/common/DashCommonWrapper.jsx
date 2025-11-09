const DashCommonWrapper = ({ children }) => {
  return (
    <div className="c-4xl:p-6 c-xxxl:p-4 c-md:p-4 c-xsm:p-3 c-md:rounded-[16px] c-xsm:rounded-[12px] bg-dash-gray c-md:h-[calc(100vh-195px)] c-md:max-h-[calc(100vh-195px)] c-md:overflow-y-auto default-scrollbar dash-common-wrapper">
      {children}
    </div>
  );
};

export default DashCommonWrapper;
