import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const topTeamMembers = [
  {
    id: 1,
    name: "Windy",
    percentage: 70,
    totalEvents: "20,000",
    bg: "#D1B67A",
  },
  {
    id: 2,
    name: "Joe",
    percentage: 35,
    totalEvents: "20,000",
    bg: "#E6E4E2",
  },
  {
    id: 3,
    name: "Sheri",
    percentage: 15,
    totalEvents: "20,000",
    bg: "#2F2F2F",
  },
  {
    id: 4,
    name: "Altaj",
    percentage: 10,
    totalEvents: "20,000",
    bg: "#2F2F2F",
  },
];

const TopTeamMembers = () => {
  const [selectedTime, setSelectedTime] = useState("this-week");
  return (
    <div className="mt-3 common-dash-box-layout c-lg:h-[210px] overflow-y-auto default-scrollbar">
      {/* title  */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold">Top team members</h2>
        <Select value={selectedTime} onValueChange={setSelectedTime}>
          <SelectTrigger className="c-md:w-[120px] c-xsm:w-[100px] c-xsm:text-[12px] rounded-[30px] bg-gray-100 font-medium">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="last-week">Last Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {/* top team members  */}
      <div>
        {topTeamMembers?.map((member) => (
          <div key={member.id} className="c-md:flex items-center justify-between c-md:mt-4 c-xsm:mt-3 first:mt-0">
            <p className="font-medium c-md:text-base c-xsm:text-sm">{member?.name} <span className="text-[12px]">({member.totalEvents} events)</span></p>
            <div className="c-md:h-6 c-xsm:h-[14px] relative c-md:w-[70%] rounded-[4px] overflow-hidden c-md:mt-0 c-xsm:mt-[10px]">
              <div
                className="current-progress rounded-[4px] absolute top-0 left-0 bottom-0 duration-100 ease-in-out"
                style={{
                  width: `${member?.percentage}%`,
                  backgroundColor:member?.bg
                }}
              ></div>
              <div className="progress-container w-full h-full bg-[#f6f6f6]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTeamMembers;
