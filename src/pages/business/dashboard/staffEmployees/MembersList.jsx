import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";

const members = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Hair Stylist",
    mobile: "1246780-0990",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Barber",
    mobile: "1246780-0991",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Nail Technician",
    mobile: "1246780-0992",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "James Rodriguez",
    role: "Massage Therapist",
    mobile: "1246780-0993",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    id: 5,
    name: "Olivia Martinez",
    role: "Esthetician",
    mobile: "1246780-0994",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  },
  {
    id: 6,
    name: "David Lee",
    role: "Barber",
    mobile: "1246780-0995",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
  },
  {
    id: 7,
    name: "Sophia Patel",
    role: "Hair Colorist",
    mobile: "1246785768767",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  },
  {
    id: 8,
    name: "Daniel Kim",
    role: "Makeup Artist",
    mobile: "1246780-0996",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop",
  },
  {
    id: 9,
    name: "Ava Thompson",
    role: "Hair Stylist",
    mobile: "1246780-0997",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
  },
];
const filters = ["All", "Top performer", "New member", "De-active member"];
const MembersList = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openMenuId, setOpenMenuId] = useState(null);
  const [timePeriod, setTimePeriod] = useState("this-month");
  //   tableHeads
  const tableHeads = ["name", "mobile number", "review", "action"];
  // toggleMenu
  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };
  return (
    <div className="c-md:mt-[42px] c-xsm:mt-4">
      {/* table filter options  */}
      <div className="mb-[30px] flex c-md:flex-row c-xsm:flex-col c-md:items-center justify-between">
        <div className="flex c-md:flex-row c-xsm:flex-col c-md:items-center gap-2">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeFilter === filter
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        {/* select  */}
        <Select value={timePeriod} onValueChange={setTimePeriod}>
          <SelectTrigger className="c-md:w-[150px] c-xsm:w-full c-md:mt-0 c-xsm:mt-2 rounded-[50px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-month">This Month</SelectItem>
            <SelectItem value="last-month">Last Month</SelectItem>
            <SelectItem value="this-year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* table  */}
      <div className="c-md:overflow-hidden c-xsm:overflow-x-auto default-scrollbar">
        <table className="c-md:w-full c-xsm:w-[500px] font-satoshi">
          {/* table head  */}
          <thead>
            <tr>
              {tableHeads?.map((head, index) => (
                <th
                  key={index}
                  className="text-base py-[14px] text-left font-medium text-heading capitalize"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* table row  */}
            {members?.map((member) => (
              <tr
                key={member?.id}
                className="border-b border-auth-input-border first:border-t last:border-none"
              >
                <td className="py-4 text-sm text-gray-900">
                  <div className="flex items-center gap-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-900">
                        {member.name}
                      </div>
                      <div className="text-sm text-gray-500">{member.role}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-sm text-gray-900">{member.mobile}</td>
                <td className="py-4">
                  <div className="flex items-center gap-[6px]">
                    {Array.from({ length: member?.rating }).map((_, index) => (
                      <span key={index}>
                        <GoStarFill size={14} />
                      </span>
                    ))}
                  </div>
                </td>
                <td className="text-left relative">
                  {" "}
                  <button
                    type="button"
                    onClick={() => toggleMenu(member.id)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <FiMoreHorizontal size={20} />
                  </button>
                  {openMenuId === member.id && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setOpenMenuId(null)}
                      />
                      <div className="absolute right-[85%] top-12 bg-white rounded-lg shadow-lg py-2 z-20 w-48">
                        <button
                          type="button"
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                        >
                          Edit team member
                        </button>
                        <button
                          type="button"
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 cursor-pointer"
                        >
                          Delete all shifts
                        </button>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MembersList;
