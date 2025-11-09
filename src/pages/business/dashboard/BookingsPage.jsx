import EventPreview from "@/components/business/dashboard/bookingsPage/EventPreview";
import EventsCalender from "@/components/business/dashboard/bookingsPage/EventsCalender";
import DashCommonWrapper from "@/components/business/dashboard/common/DashCommonWrapper";

const BookingsPage = () => {
  return (
    <div>
      <DashCommonWrapper>
        <div className="font-satoshi c-lg:flex items-start">
          <div className="c-xxl:w-[78%] c-lg:w-[70%] p-3 bg-white rounded-[16px] c-xxl:h-[calc(100vh-244px)] c-lg:h-[calc(100vh-220px)] c-md:h-[500px] c-xsm:h-[450px]">
            {/* event calender  */}
            <EventsCalender />
          </div>
          <div className="c-xxl:w-[22%] c-lg:w-[30%] p-3 bg-white rounded-[16px] c-lg:ml-3 c-lg:mt-0 c-xsm:mt-4">
            <EventPreview />
          </div>
        </div>
      </DashCommonWrapper>
    </div>
  );
};

export default BookingsPage;
