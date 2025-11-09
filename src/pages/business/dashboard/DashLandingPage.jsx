import DashCommonWrapper from "@/components/business/dashboard/common/DashCommonWrapper";
import AppointmentActivityShowcaseCard from "@/components/business/dashboard/dashLandingPage/AppointmentActivityShowcaseCard";
import QuickInfoCard from "@/components/business/dashboard/dashLandingPage/QuickInfoCard";
import RecentBookingTable from "@/components/business/dashboard/dashLandingPage/RecentBookingTable";
import RecentSalesShowcase from "@/components/business/dashboard/dashLandingPage/RecentSalesShowcase";
import TopServicesShowcase from "@/components/business/dashboard/dashLandingPage/TopServicesShowcase";
import TopTeamMembers from "@/components/business/dashboard/dashLandingPage/TopTeamMembers";
import UpcomingEventsCalender from "@/components/business/dashboard/dashLandingPage/UpcomingEventsCalender";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GrSchedule } from "react-icons/gr";
import TodaysAppoinmentShowcaseCard from "../../../components/business/dashboard/dashLandingPage/TodaysAppoinmentShowcaseCard";

const quickInfoLists = [
  {
    id: 1,
    icon: <GrSchedule size={20} />,
    title: "Upcoming Booking",
    number: "345",
  },
  {
    id: 2,
    icon: <FaRegCalendarCheck size={20} />,
    title: "Total Bookings",
    number: "1798",
  },
  {
    id: 3,
    icon: <FiUsers size={20} />,
    title: "Total Staffs/Employee",
    number: "1250",
  },
];

const DashLandingPage = () => {
  return (
    <div className="font-satoshi">
      <DashCommonWrapper>
        <div className="c-xxl:flex items-start">
          {/* dash column large  */}
          <div className="c-xxl:w-[70%]">
            {/* quick info lists  */}
            <div className="grid c-md:grid-cols-3 gap-3">
              {quickInfoLists?.map((item) => (
                <QuickInfoCard
                  key={item?.id}
                  icon={item?.icon}
                  title={item?.title}
                  number={item?.number}
                />
              ))}
            </div>
            {/* top services & recent sale & top team member  */}
            <div className="c-lg:flex items-start gap-3 ">
              <TopServicesShowcase />
              <div className="c-lg:w-[67.5%]">
                <RecentSalesShowcase />
                <TopTeamMembers />
              </div>
            </div>
            {/* recent booking table  */}
            <RecentBookingTable />
          </div>
          {/* dash column small  */}
          <div className="c-xxl:w-[30%] c-xxxl:ml-6 c-xxl:ml-3 c-xxl:mt-0 c-xsm:mt-3">
            <TodaysAppoinmentShowcaseCard />
            <UpcomingEventsCalender />
            <AppointmentActivityShowcaseCard />
          </div>
        </div>
      </DashCommonWrapper>
    </div>
  );
};

export default DashLandingPage;
