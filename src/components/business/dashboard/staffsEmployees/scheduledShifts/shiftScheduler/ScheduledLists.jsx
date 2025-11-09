import MemberRow from "./MemberRow";

const ScheduledLists = ({ teamMembers, onAddShift }) => {
  const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="c-lg:overflow-hidden c-xsm:overflow-x-auto default-scrollbar">
      <div className="c-md:mt-10 c-xsm:mt-6 c-lg:w-full c-xsm:w-[1000px]">
        {/* heading  */}
        <div className="grid grid-cols-9 py-[14px]">
          <div className="col-span-2 text-base font-medium text-heading">
            Team Members
          </div>
          {DAYS.map((day) => (
            <div
              key={day}
              className="text-center text-base font-medium text-heading"
            >
              {day}
            </div>
          ))}
        </div>
        {/* members row  */}
        <div>
          {teamMembers?.map((member) => (
            <MemberRow
              key={member?.id}
              member={member}
              onAddShift={onAddShift}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduledLists;
