import { GoPlus } from "react-icons/go";

const MemberRow = ({ member, onAddShift }) => {
  const DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="grid grid-cols-9 py-[14px] items-center border-b border-input first:border-t last:border-none">
      {/* team member name */}
      <div className="col-span-2 flex items-center gap-3">
        {/* avatar  */}
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={member?.avatar}
            alt={member?.name}
          />
        </div>
        {/* name  */}
        <div>
          <h3 className="text-sm font-bold text-heading mb-[2px]">
            {member.name}
          </h3>
          <p className="text-[12px] text-paragraph">{member.role}</p>
        </div>
      </div>
      {/* shifts days  */}
      {DAYS.map((day) => (
        <div key={day} className="text-center flex items-center justify-center">
          {member?.shifts[day] ? (
            <button
              onClick={() => onAddShift(member)}
              type="button"
              className="text-xs hover:bg-gray-100 px-2 py-1 rounded transition-colors"
            >
              <div className="font-medium text-gray-900">
                {member.shifts[day].start} - {member.shifts[day].end}
              </div>
            </button>
          ) : (
            <button
              onClick={() => onAddShift(member)}
              type="button"
              className="w-8 h-8 rounded-[10px] border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-gray-400 hover:bg-gray-50 cursor-pointer"
            >
              <GoPlus />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default MemberRow;
