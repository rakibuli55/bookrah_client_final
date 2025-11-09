import { GoPlus } from "react-icons/go";
import TimeSelect from "./TimeSelect";

const ShiftRow = ({ dayName, shift, onTimeChange, onAddShift }) => {
  return (
    <div className="flex items-center c-md:gap-4 c-xsm:gap-2 py-[12px] border-b border-input first:border-t last:border-none">
      <p className="c-md:w-24 c-xsm:w-19 text-sm font-medium text-heading">{dayName}</p>
      {shift ? (
        <>
          <TimeSelect
            value={shift.start || "10:00"}
            onChange={(value) => onTimeChange(dayName, "start", value)}
          />
          <span className="text-gray-500">to</span>
          <TimeSelect
            value={shift.end || "18:00"}
            onChange={(value) => onTimeChange(dayName, "end", value)}
          />
        </>
      ) : (
        <button
          onClick={() => onAddShift(dayName)}
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 border border-input rounded-lg hover:bg-dash-gray cursor-pointer duration-200 ease-in-out"
        >
          <GoPlus />
          Add shift
        </button>
      )}
    </div>
  );
};

export default ShiftRow;
