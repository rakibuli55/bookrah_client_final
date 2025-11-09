import moment from "moment";
import { SlCalender } from "react-icons/sl";
import { useSelector } from "react-redux";
import reminderIcon from "../../../../assets/icon/undraw_reminder_ustg.svg";

const EventPreview = () => {
  const selectedEvent = useSelector(
    (state) => state.calenderEvent.selectedEvent
  );
  const formattedStartDate = selectedEvent?.startDate
    ? moment(selectedEvent.startDate).format("MMM DD, YYYY - hh:mm A")
    : "";
  return (
    <div className="c-xxl:min-h-[calc(100vh-267px)] c-xxl:max-h-[calc(100vh-267px)] c-xsm:min-h-[300px] c-xsm:max-h-auto c-md:overflow-y-auto  no-scrollbar relative">
      <h3 className="text-base font-bold text-heading mb-6">
        Schedule Details
      </h3>
      {selectedEvent ? (
        <div>
          <div>
            <img
              className="w-full c-xxl:h-[200px] c-lg:h-[170px] c-sm:h-[300px] object-cover rounded-[8px]"
              src={selectedEvent?.extendedProps?.image}
              alt=""
            />
            <h3 className="text-base font-medium text-heading mt-4">
              {selectedEvent?.title}
            </h3>
            <p className="text-sm mt-2">
              {selectedEvent?.extendedProps?.description}
            </p>
            {/* date  */}
            <div className="flex items-center gap-2 mt-4 text-medium text-heading text-sm">
              <span className="text-base">
                <SlCalender />
              </span>
              <p>{formattedStartDate}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <img src={reminderIcon} className="w-[162px] h-[112px]" alt="" />
          <p className="text-base font-semibold mt-3 text-heading capitalize">
            select an event to view details
          </p>
        </div>
      )}
    </div>
  );
};

export default EventPreview;
