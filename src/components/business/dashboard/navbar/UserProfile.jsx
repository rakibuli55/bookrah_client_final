import useLogout from "@/hooks/auth/useLogout";
import useClickOutside from "@/hooks/useClickOutside";
import { clearUser } from "@/redux/features/auth/UserInfoSlice";
import TextTruncate from "@/utils/TextTruncate";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const UserProfile = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const { mutate: logoutUser, isPending } = useLogout();

  const handleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const dropdownRef = useRef();
  useClickOutside(dropdownRef, () => setIsDropdownOpen(false));

  const handleUserLogout = () => {
    logoutUser(undefined, {
      onSuccess: (data) => {
        dispatch(clearUser());
        console.log(data)
        toast.success(data?.message);
      },
      onError: (error) => {
        toast.error(error?.data?.data.message || "Something went wrong");
        console.log(error)
      },
    });
  };

  return (
    <div className="relative font-satoshi" ref={dropdownRef}>
      {/* trigger  */}
      <div
        className="flex items-center c-md:gap-3 cursor-pointer"
        onClick={handleDropdown}
      >
        <div className="c-md:min-w-10 c-md:min-h-10 c-md:max-w-10 c-md:max-h-10 c-xsm:min-w-10 c-xsm:min-h-10 c-xsm:max-w-10 c-xsm:max-h-10 rounded-full object-cover bg-primary-light flex items-center justify-center duration-200 ease-in-out hover:bg-[rgba(209,182,122,0.30)]">
          {user?.avatar === null ? (
            <p className="font-bold uppercase text-[15px] text-primary">
              {user?.name
                ?.split(" ")
                ?.map((word) => word[0])
                .join("")}
            </p>
          ) : (
            <img
              className="w-full h-full object-cover"
              src={user?.avatar}
              alt={user?.name}
            />
          )}
        </div>

        <div className="c-md:block c-xsm:hidden">
          <p className="text-base text-heading font-bold capitalize">
            {TextTruncate(user?.name, 2)}
          </p>
        </div>
      </div>
      {/* dropdown  */}
      <div
        className={`bg-white rounded-[12px] py-5 absolute c-md:right-0 c-xsm:right-[-50px] c-md:w-[300px] c-xsm:w-[290px] shadow duration-200 ease-in-out  ${
          isDropdownOpen
            ? "top-12 opacity-100 visible"
            : "top-13 opacity-0 invisible"
        }`}
      >
        {/* complete profile  */}
        <div className="flex items-center gap-4 border-b border-input pb-4 mx-5">
          {/* image  */}
          <div
            className={`h-12 w-12 rounded-full flex items-center justify-center bg-primary-light`}
          >
            {user?.avatar === null ? (
              <p className="font-bold uppercase text-[15px] text-primary">
                {user?.name
                  ?.split(" ")
                  ?.map((word) => word[0])
                  .join("")}
              </p>
            ) : (
              <img
                className="w-full h-full object-cover"
                src={user?.avatar}
                alt={user?.name}
              />
            )}
          </div>
          {/* name  */}
          <p className="text-[20px] font-semibold capitalize">{user?.name}</p>
        </div>

        {/* menu  */}
        <ul className="pt-3 px-2">
          <li>
            <Link
              to={"/"}
              className="block w-full py-2 px-3 rounded-[8px] font-medium duration-200 ease-in-out hover:bg-primary-light"
            >
              My profile
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="block w-full py-2 px-3 rounded-[8px] font-medium duration-200 ease-in-out hover:bg-primary-light"
            >
              Personal settings
            </Link>
          </li>
          <li>
            <Link
              to={"/for-business/dashboard"}
              className="block w-full py-2 px-3 rounded-[8px] font-medium duration-200 ease-in-out hover:bg-primary-light"
            >
              Dashboard
            </Link>
          </li>
          <li
            className="flex items-center justify-between w-full py-2 px-3 rounded-[8px] font-medium duration-200 ease-in-out hover:bg-primary-light"
            onClick={handleUserLogout}
          >
            Log out
            {isPending && "Loading"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
