import DashCommonWrapper from "@/components/business/dashboard/common/DashCommonWrapper";
import ShiftHeader from "@/components/business/dashboard/staffsEmployees/scheduledShifts/ShiftHeader";
import ShiftScheduler from "@/components/business/dashboard/staffsEmployees/scheduledShifts/ShiftScheduler";

const ScheduledShiftsPage = () => {
  return (
    <div>
      <DashCommonWrapper>
        <ShiftHeader />
        <ShiftScheduler />
      </DashCommonWrapper>
    </div>
  );
};

export default ScheduledShiftsPage;
