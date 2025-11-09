const BookingShowcaseCard = ({ item }) => {
  return (
    <div>
      <div className="flex items-center gap-3 w-full mt-[18px]">
        {/* indicator  */}
        <div
          className="h-[42px] c-md:w-[10px] c-xsm:w-2 rounded-[20px] bg-red-100"
          style={{
            backgroundColor: item?.bgColor,
          }}
        ></div>
        <div className="flex items-center justify-between w-[93%]">
          <div>
            <p className="text-[12px] text-paragraph">{item?.name}</p>
            <p className="text-[18px] font-bold text-heading mt-1">
              {item?.number}
            </p>
          </div>
          <div className="w-12 h-[42px] rounded-[8px] bg-[#EDEDED] font-bold text-sm text-heading flex items-center justify-center">
            {item?.percent}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingShowcaseCard;
