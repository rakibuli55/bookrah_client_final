import React from "react";
import logo from "@/assets/images/logo.png";
import sidebar_icon from "@/assets/images/sidebar_icon.png";
import { NavLink } from "react-router-dom";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaCalendarAlt, FaSignOutAlt, FaRegUser, FaRegHeart } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = ({ open, toggle }) => {
    const General = [
        { name: "Dashboard", link: "/dashboard", end: true, icon: <TbLayoutDashboardFilled /> },
        { name: "Appointments", link: "/dashboard/appointments", end: false, icon: <FaCalendarAlt /> },
        { name: "Profile", link: "/dashboard/profile", end: false, icon: <FaRegUser /> },
        { name: "Favorites", link: "/dashboard/favorites", end: false, icon: <FaRegHeart /> },
    ];

    const Help = [
        { name: "Help & Center", link: "/dashboard/help", end: false, icon: <GoCommentDiscussion /> },
        { name: "Settings", link: "/dashboard/settings", end: false, icon: <IoSettingsOutline /> },
    ];

    return (
        <>
            {/* Overlay */}
            <div
                onClick={toggle}
                className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-30 transition-opacity duration-300 xl:hidden ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            ></div>

            {/* Sidebar */}
            <aside
                className={`fixed xl:static top-0 left-0 z-40 h-screen bg-[#F9F9F9] border-r border-[#E5E5E5] 
                flex flex-col justify-start items-center transition-transform duration-300 ease-in-out
                sm:w-72 w-full font-sans shrink-0 
                ${open ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0`}
            >
                {/* Sidebar Header */}
                <div className="w-full h-20 flex justify-center items-center p-4 border-b border-[#E5E5E5]">
                    <img src={logo} alt="Logo" className="w-44 h-14 object-contain" />
                </div>

                {/* Sidebar Content */}
                <nav className="w-full h-full p-4 flex flex-col gap-3 justify-start overflow-y-auto">
                    {/* General */}
                    <div className="w-full flex flex-col justify-start">
                        <h2 className="text-xs font-extrabold mb-3">GENERAL</h2>
                        <div className="flex flex-col gap-1">
                            {General.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.link}
                                    end={item.end}
                                    className={({ isActive }) =>
                                        `${isActive
                                            ? "bg-primary text-heading font-semibold"
                                            : "bg-transparent text-[#637381] font-normal"
                                        } flex justify-start items-center gap-4 px-4 py-3 w-full rounded-lg transition-all hover:bg-primary hover:text-heading`
                                    }
                                    onClick={() => toggle && toggle()}
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Help & Support */}
                    <div className="w-full flex flex-col justify-start">
                        <h2 className="text-xs font-extrabold mb-3">HELP & SUPPORT</h2>
                        <div className="flex flex-col gap-1">
                            {Help.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.link}
                                    end={item.end}
                                    className={({ isActive }) =>
                                        `${isActive
                                            ? "bg-primary text-heading font-semibold"
                                            : "bg-transparent text-[#637381] font-normal"
                                        } flex justify-start items-center gap-4 px-4 py-3 w-full rounded-lg transition-all hover:bg-primary hover:text-heading`
                                    }
                                    onClick={() => toggle && toggle()}
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </nav>

                {/* Illustration */}
                <div className="w-full pointer-events-none max-w-[200px] h-[150px] absolute bottom-32 block">
                    <img src={sidebar_icon} alt="Sidebar Icon" className="w-full h-full object-contain" />
                </div>

                {/* Footer */}
                <div className="pb-10 px-4 w-full shrink-0">
                    <button className="flex text-red-500 w-full text-base hover:text-heading cursor-pointer hover:bg-red-50 p-4 transition-all rounded-lg gap-4 justify-start items-center">
                        <FaSignOutAlt />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
