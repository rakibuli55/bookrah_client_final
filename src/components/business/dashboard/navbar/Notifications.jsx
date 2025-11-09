import useClickOutside from "@/hooks/useClickOutside";
import TextTruncate from "@/utils/TextTruncate";
import { useRef, useState } from "react";
import { PiBell } from "react-icons/pi";
import { Link } from "react-router-dom";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "New Message from John Doe",
      message:
        "You have a new message from John Doe regarding your recent order.",
      time: "21h ago",
    },
    {
      id: 2,
      title: "Subscription Renewal",
      message:
        "Your subscription has been successfully renewed. Thank you for staying with us!",
      time: "3d ago",
    },
    {
      id: 3,
      title: "App Update Available",
      message:
        "New updates are available for your app. Please check the latest version.",
      time: "2h ago",
    },
    {
      id: 4,
      title: "Appointment Reminder",
      message:
        "Reminder: Your appointment with Dr. Smith is tomorrow at 10 AM.",
      time: "5d ago",
    },
    {
      id: 5,
      title: "Payment Confirmation",
      message: "Your payment of $100 has been successfully processed.",
      time: "1d ago",
    },
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const dropdownRef = useRef();
  useClickOutside(dropdownRef, () => setIsDropdownOpen(false));

  return (
    <div className="relative" ref={dropdownRef}>
      {/* trigger  */}
      <div
        className="relative c-md:h-10 c-md:w-10 c-xsm:h-9 c-xsm:w-9 flex items-center justify-center rounded-full bg-heading text-white text-[20px] cursor-pointer"
        onClick={handleDropdown}
      >
        <PiBell />
        <span className="w-2 h-2 bg-primary rounded-full absolute top-3 right-[10px] inline-block"></span>
      </div>
      {/* notifications dropdown  */}
      <ul
        className={`bg-white rounded-[12px] py-3 absolute right-0 w-[350px] shadow duration-200 ease-in-out  ${
          isDropdownOpen ? "top-12 opacity-100 visible" : "top-13 opacity-0 invisible"
        }`}
      >
        {notifications?.map((noti) => (
          <li key={noti?.id}>
            <Link
              to={"/"}
              className="flex items-start gap-3 py-3 px-6 hover:bg-primary duration-200 ease-in-out"
            >
              <p className="min-h-8 min-w-8 bg-[#fffaee] rounded-full flex items-center justify-center">
                <PiBell />
              </p>
              <div>
                <h4 className="text-[15px] font-medium font-satoshi">
                  {TextTruncate(noti?.title, 10)}
                </h4>
                <p className="text-sm">{TextTruncate(noti?.message, 7)}</p>
                <span className="text-[12px]">{noti?.time}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
