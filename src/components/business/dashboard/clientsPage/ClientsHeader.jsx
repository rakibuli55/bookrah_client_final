import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const ClientsHeader = () => {
  const [selectedValue, setSelectedValue] = useState("currentMonth");
  return (
    <div className="flex c-md:flex-row c-xsm:flex-col c-md:items-center justify-between">
      {/* left  */}
      <div>
        <div className="flex items-center gap-[6px]">
          <h1 className="title--sm font-satoshi !font-bold capitalize">
            client list
          </h1>
          <p className="py-1 px-[10px] rounded-[24px] font-medium border border-input w-fit text-sm text-paragraph">
            132
          </p>
        </div>
        <p className="text-paragraph">
          View, add, edit and delete your services.{" "}
        </p>
      </div>
      {/* right  */}
      <div className="flex items-center c-md:gap-4 c-xsm:gap-3 c-md:mt-0 c-xsm:mt-4">
        {/* search bar  */}
        <div className="common--search-bar">
          <input type="text" placeholder="Search clients" />
          <p className="icon">
            <IoSearchOutline />
          </p>
        </div>
        {/* select  */}
        <div>
          <Select value={selectedValue} onValueChange={setSelectedValue}>
            <SelectTrigger className="w-[120px] rounded-[40px] cursor-pointer !h-[43px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="currentMonth">This month</SelectItem>
              <SelectItem value="lastMonth">Last month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ClientsHeader;
