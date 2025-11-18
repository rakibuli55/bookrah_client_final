/* eslint-disable no-unused-vars */
import { useState } from "react";
import ChangeProfessional from "./ChangeProfessional";
import PickDate from "./PickDate";
import StepTitle from "./StepTitle";

const Time = ({ bookingInfo, handleBookingInfoChange }) => {
  const saloneBookingData = [
    {
      id: 0,
      month: "September",
      year: 2025,
      isEventMonth: false,
      dates: [
        {
          date: 19,
          day: "Friday",
          dayShort: "Fri",
        },
        {
          date: 20,
          day: "Saturday",
          dayShort: "Sat",
        },
        {
          date: 21,
          day: "Sunday",
          dayShort: "Sun",
        },
        {
          date: 22,
          day: "Monday",
          dayShort: "Mon",
        },
        {
          date: 23,
          day: "Tuesday",
          dayShort: "Tue",
        },
        {
          date: 24,
          day: "Wednesday",
          dayShort: "Wed",
        },
        {
          date: 25,
          day: "Thursday",
          dayShort: "Thu",
        },
      ],
    },
    {
      id: 1,
      month: "November",
      year: 2025,
      isEventMonth: true,
      dates: [
        {
          date: 26,
          day: "Wednesday",
          dayShort: "Wed",
        },
        {
          date: 27,
          day: "Thursday",
          dayShort: "Thu",
        },
        {
          date: 28,
          day: "Friday",
          dayShort: "Fri",
        },
      ],
    },
  ];
  const [currentDate, setCurrentDate] = useState(saloneBookingData[0]);
  // main render
  return (
    <div className="w-full flex flex-col justify-start gap-4 md:gap-8">
      {/* header */}
      <div className="w-full c-md:flex justify-between items-center gap-3">
        <StepTitle title={"Select Date and Time"} />
        {/* change date and professional */}
        <div className="flex gap-4 c-md:justify-end c-lg:mt-0 c-xsm:mt-3 items-center">
          <ChangeProfessional
            bookingInfo={bookingInfo}
            handleBookingInfoChange={handleBookingInfoChange}
          />
          <PickDate
            bookingInfo={bookingInfo}
            handleBookingInfoChange={handleBookingInfoChange}
          />
        </div>
      </div>
      {/* available dates and select time */}
      <div className="w-full flex gap-4 relative rounded-primary flex-col bg-white p-4 justify-center items-center">
        <div className="w-full flex gap-4 justify-between items-center">
          <p className="font-semibold text-xl capitalize">
            {currentDate?.month} {currentDate?.year}
          </p>
        </div>
        {/** dates */}
        <div className="w-full grid grid-cols-4  md:grid-cols-7 gap-4 xl:gap-10 my-3">
          {currentDate?.dates?.map((item) => (
            <div className="w-full flex flex-col gap-1 justify-start items-center">
              <span className="xl:size-14 size-10 flex rounded-full tex-xs xl:text-base font-bold justify-center items-center border border-[#EAE3E3] hover:bg-primary hover:text-white cursor-pointer">
                {item.date}
              </span>
              <span className="text-sm text-black  font-bold">
                {item.dayShort}
              </span>
            </div>
          ))}
        </div>
        {/* select time */}
        <div className="w-full flex flex-col gap-2 justify-between ">
          <p className="font-semibold text-xl capitalize">Select Time</p>
          <select
            name="time"
            className="w-full p-2 border border-[#CFCFCF] rounded-sm outline-none"
            onChange={(e) => handleBookingInfoChange("time", e.target.value)}
            id="time"
          >
            <option value="9am-10am">9am-10am</option>
            <option value="10am-11am">10am-11am</option>
            <option value="11am-12am">11am-12am</option>
            <option value="12am-1pm">12am-1pm</option>
            <option value="1pm-2pm">1pm-2pm</option>
            <option value="2pm-3pm">2pm-3pm</option>
            <option value="3pm-4pm">3pm-4pm</option>
            <option value="4pm-5pm">4pm-5pm</option>
            <option value="5pm-6pm">5pm-6pm</option>
            <option value="6pm-7pm">6pm-7pm</option>
            <option value="7pm-8pm">7pm-8pm</option>
            <option value="8pm-9pm">8pm-9pm</option>
            <option value="9pm-10pm">9pm-10pm</option>
          </select>
        </div>
      </div>
      {/** status */}
      <div className="w-full flex rounded-primary flex-col bg-white c-xl:py-14 c-xsm:py-4 justify-center items-center">
        <div className="max-w-[480px] px-4 mx-auto flex flex-col gap-4 justify-center items-center">
          <img
            src={bookingInfo?.professional?.image}
            className="md:size-16 size-10 rounded-full object-cover"
            alt="image"
          />
          <h3 className="md:text-3xl text-lg sm:text-xl text-center text-heading font-bold">
            {bookingInfo?.professional?.name} is fully booked this date
          </h3>
          <p className="text-base text-center text-paragraph font-medium">
            Available from Sat, Sep 20 at 10:00 AM
          </p>
          <div className="c-md:flex justify-center items-center gap-3">
            <button className="border cursor-pointer border-[#D3D3D3] px-4 py-2 c-md:w-fit c-xsm:w-full rounded-full text-paragraph">
              Go to next available date
            </button>
            <button className="border cursor-pointer border-[#D3D3D3] px-4 py-2 rounded-full text-paragraph c-md:w-fit c-xsm:w-full c-md:mt-0 c-xsm:mt-4">
              Join waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
