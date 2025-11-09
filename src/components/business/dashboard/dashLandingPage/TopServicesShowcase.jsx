import { ResponsivePie } from "@nivo/pie";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import BookingShowcaseCard from "./topSercieShowcase/BookingShowcaseCard";

const TopServicesShowcase = () => {
  const [selectedTime, setSelectedTime] = useState("this-week");

  const data = [
    {
      id: "Hair & Styling",
      label: "Hair & Styling",
      value: 1251,
      color: "#B89E66",
    },
    {
      id: "Barbering",
      label: "Barbering",
      value: 834,
      color: "#2F2F2F",
    },
    {
      id: "Nails",
      label: "Nails",
      value: 695,
      color: "#E6E4E2",
    },
    {
      id: "Eyebrows & Lashes",
      label: "Eyebrows & Lashes",
      value: 695,
      color: "#F9F9F9",
    },
  ];

  const bookingData = [
    {
      id: 1,
      name: "Hair & style",
      number: 1251,
      percent: 45,
      bgColor: "#B89E66",
    },
    {
      id: 2,
      name: "Barbering",
      number: 834,
      percent: 30,
      bgColor: "#2F2F2F",
    },
    {
      id: 3,
      name: "Nails",
      number: 695,
      percent: 25,
      bgColor: "#B89E66",
    },
    {
      id: 4,
      name: "Eyebrows & Lashes",
      number: 695,
      percent: 15,
      bgColor: "#F9F9F9",
    },
  ];

  return (
    <div className="common-dash-box-layout c-lg:w-[32.5%] mt-3">
      {/* title  */}
      <div className="flex items-center justify-between">
        <h1 className="text-base font-bold text-heading">Top services</h1>
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
      <div className="c-lg:h-[220px] c-lg:w-[220px] c-md:h-[270px] c-md:w-[270px] c-xsm:h-[180px] c-xsm:w-[180px] mx-auto pt-4">
        <ResponsivePie
          data={data}
          colors={{ datum: "data.color" }}
          innerRadius={0.45}
          padAngle={4}
          cornerRadius={5}
          enableArcLinkLabels={false}
        />
      </div>
      {/* booking data  */}
      <div>
        {bookingData?.map((item) => (
          <BookingShowcaseCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TopServicesShowcase;
