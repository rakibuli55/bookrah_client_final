import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import getStatusStyles from "@/utils/getStatusStyles";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const bookings = [
  {
    id: "B110011",
    date: "2029/02/15",
    time: "10:30 AM",
    name: "Jackson Moore",
    service: "Skin Care",
    serviceSubtitle: "Facials & Skincare",
    serviceQty: 2,
    amount: 100,
    status: "Confirmed",
  },
  {
    id: "B110011",
    date: "2029/02/15",
    time: "10:30 AM",
    name: "Jackson Moore",
    service: "Symphony Under the Stars",
    serviceSubtitle: "Facials & Skincare",
    serviceQty: 2,
    amount: 120,
    status: "Pending",
  },
  {
    id: "B110011",
    date: "2029/02/15",
    time: "10:30 AM",
    name: "Jackson Moore",
    service: "Symphony Under the Stars",
    serviceSubtitle: "Facials & Skincare",
    serviceQty: 2,
    amount: 240,
    status: "Confirmed",
  },
  {
    id: "B110011",
    date: "2029/02/15",
    time: "10:30 AM",
    name: "Jackson Moore",
    service: "Symphony Under the Stars",
    serviceSubtitle: "Facials & Skincare",
    serviceQty: 2,
    amount: 120,
    status: "Cancel",
  },
  {
    id: "B110011",
    date: "2029/02/15",
    time: "10:30 AM",
    name: "Jackson Moore",
    service: "Symphony Under the Stars",
    serviceSubtitle: "Facials & Skincare",
    serviceQty: 2,
    amount: 120,
    status: "Cancel",
  },
  {
    id: "B110011",
    date: "2029/02/15",
    time: "10:30 AM",
    name: "Jackson Moore",
    service: "Symphony Under the Stars",
    serviceSubtitle: "Facials & Skincare",
    serviceQty: 2,
    amount: 50,
    status: "Cancel",
  },
];

const tableHeadings = [
  { id: "bookingId", label: "Booking ID" },
  { id: "date", label: "Date" },
  { id: "name", label: "Name" },
  { id: "service", label: "Service" },
  { id: "serviceQty", label: "Service Qty" },
  { id: "amount", label: "Amount" },
  { id: "status", label: "Status" },
];

const RecentBookingTable = () => {
  const [selectedTime, setSelectedTime] = useState("this-week");
  return (
    <div className="common-dash-box-layout mt-3">
      {/* title  */}
      <div className="c-md:flex items-center justify-between mb-4">
        <h2 className="text-base font-bold">Recent Bookings</h2>
        <div className="flex items-center c-md:gap-3 c-xsm:gap-2 c-md:mt-0 c-xsm:mt-3">
          {/* search bar  */}
          <div className="common--search-bar">
            <input
              type="text"
              placeholder="Search name"
              className="!py-[7px]"
            />
            <p className="icon">
              <IoSearchOutline />
            </p>
          </div>
          {/* select  */}
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
      </div>
      {/* table  */}
      <div className="c-md:h-[400px] c-xsm:h-[300px] overflow-y-auto default-scrollbar">
        <table className="c-4xl:w-full c-md:w-[1000px] c-xsm:w-[800px]">
          <thead>
            <tr className="border-b border-gray-200">
              {tableHeadings.map((heading) => (
                <th
                  key={heading.id}
                  className="c-md:px-6 c-xsm:px-0 c-md:py-4 c-xsm:py-3 text-left text-sm font-normal text-gray-500"
                >
                  {heading.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="c-md:px-6 c-xsm:px-0 c-md:py-4 c-xsm:py-3 text-sm text-gray-900">
                  {booking.id}
                </td>
                <td className="c-md:px-6 c-xsm:px-0 c-md:py-4 c-xsm:py-3">
                  <div className="text-sm text-gray-900">{booking.date}</div>
                  <div className="text-sm text-gray-500">{booking.time}</div>
                </td>
                <td className="c-md:px-6 c-xsm:px-0 c-md:py-4 c-xsm:py-3 text-sm text-gray-900">
                  {booking.name}
                </td>
                <td className="c-md:px-6 c-xsm:px-0 c-md:py-4 c-xsm:py-3">
                  <div className="text-sm text-gray-900">{booking.service}</div>
                  <div className="text-sm text-gray-500">
                    {booking.serviceSubtitle}
                  </div>
                </td>
                <td className="c-md:px-6 c-xsm:px-0 c-md:py-4 c-xsm:py-3 text-sm text-gray-900 text-center">
                  {booking.serviceQty}
                </td>
                <td className="c-md:px-6 c-xsm:px-0 c-md:py-4 c-xsm:py-3 text-sm font-medium text-gray-900">
                  ${booking.amount}
                </td>
                <td className="c-md:px-6 c-xsm:px-0 c-md:py-4 c-xsm:py-3">
                  <span
                    className={`inline-block c-md:px-4 c-xsm:px-3 c-md:text-sm py-1 rounded-full text-sm font-medium ${getStatusStyles(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentBookingTable;
