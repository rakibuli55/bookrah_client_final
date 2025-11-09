import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ResponsiveBar } from "@nivo/bar";
import { useState } from "react";
const data = [
  { month: "Jan", appointments: 35000, sales: 15000 },
  { month: "Feb", appointments: 28000, sales: 8000 },
  { month: "Mar", appointments: 42000, sales: 12000 },
  { month: "Apr", appointments: 52000, sales: 28000 },
  { month: "May", appointments: 38000, sales: 18000 },
  { month: "Jun", appointments: 35000, sales: 14000 },
];
const RecentSalesShowcase = () => {
  const [selectedTime, setSelectedTime] = useState("this-week");
  return (
    <div className="common-dash-box-layout mt-3">
      {/* title  */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base font-bold">Recent sales</h2>
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
      {/* total revenue  */}
      <div className="flex items-center justify-between c-md:mb-2 c-xsm:mb-4">
        <div>
          <p className="text-[12px] text-paragraph">Total Revenue</p>
          <p className="c-md:text-[18px] font-bold text-heading mt-1">$348,805</p>
        </div>
        <ul className="flex items-center c-md:gap-5 c-xsm:gap-3">
          <li className="flex items-center c-md:text-base c-xsm:text-sm c-md:gap-[10px] c-xsm:gap-[6px]">
            <span className="inline-block h-2 w-2 rounded-full bg-heading"></span>
            Appointments
          </li>
          <li className="flex items-center c-md:text-base c-xsm:text-sm c-md:gap-[10px] c-xsm:gap-[6px]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#e2e4e8]"></span>
            Sales
          </li>
        </ul>
      </div>
      {/* chart  */}
      <div className="h-[200px] w-full">
        <ResponsiveBar
          data={data}
          keys={["appointments", "sales"]}
          indexBy="month"
          margin={{ top: 10, right: 0, bottom: 25, left: 30 }}
          padding={0.45}
          groupMode="grouped"
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={["#E5E7EB", "#1F2937"]}
          borderRadius={8}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 0,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 0,
            format: (value) => `${value / 1000}K`,
          }}
          enableLabel={false}
          enableGridY={true}
          gridYValues={5}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: "transparent",
                },
              },
              ticks: {
                text: {
                  fill: "#6B7280",
                  fontSize: 12,
                },
              },
            },
            grid: {
              line: {
                stroke: "#F3F4F6",
                strokeWidth: 1,
              },
            },
          }}
          tooltip={({ id, value, indexValue }) => (
            <div className="bg-white px-3 py-2 shadow-lg rounded-lg border border-gray-200">
              <strong className="text-sm">{indexValue}</strong>
              <div className="text-sm">
                {id}: ${value.toLocaleString()}
              </div>
            </div>
          )}
          onMouseEnter={(data) => {
            // Show tooltip on hover
          }}
        />
      </div>
    </div>
  );
};

export default RecentSalesShowcase;
