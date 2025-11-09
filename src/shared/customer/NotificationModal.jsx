"use client";
import { useState } from "react";
import Tick from "@/components/icons/Tick";
import { Badge, Popover } from "antd";
import { FaBell } from "react-icons/fa";

// ✅ Fake notifications
const notifications = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Notification ${i + 1}`,
    description: `This is the description for notification ${i + 1}.`,
    time: `${Math.floor(Math.random() * 59) + 1} min ago`,
}));

const NotificationModal = () => {
    const [showAll, setShowAll] = useState(false);

    const visibleNotifications = showAll ? notifications : notifications.slice(0, 6);

    const content = (
        <div className="w-80 relative p-0 flex flex-col">
            {/* header */}
            <div className="px-4 py-3 relative border-b border-[#E5E5E5]">
                <div>
                    <h3 className="text-sm font-bold text-heading">Notifications</h3>
                    <p className="text-xs text-paragraph">
                        You have {notifications.length} new notifications
                    </p>
                </div>
                <Tick className="absolute right-4 top-4 cursor-pointer" />
            </div>

            {/* body notifications list */}
            <div className="px-4 py-3 flex flex-col gap-3 justify-start h-80 overflow-y-auto">
                {visibleNotifications.map((n) => (
                    <div
                        key={n.id}
                        className="w-full py-2 flex flex-col gap-1 cursor-pointer hover:bg-gray-50 transition-all rounded-lg px-2"
                    >
                        <p className="text-sm font-semibold text-heading">{n.title}</p>
                        <p className="text-xs text-gray-500">{n.description}</p>
                        <span className="text-[11px] text-gray-400">{n.time}</span>
                    </div>
                ))}
            </div>

            {/* footer */}
            <div
                className="px-4 py-3 border-t flex justify-center items-center text-primary font-bold border-[#E5E5E5] cursor-pointer hover:text-primary/80 transition-all"
                onClick={() => setShowAll(!showAll)}
            >
                {showAll ? "Show Less" : "View All"}
            </div>
        </div>
    );

    return (
        <Popover placement="bottom" trigger="click" className="mr-1" content={content}>
            <Badge count={notifications.length} size="small">
                <FaBell size={22} className="cursor-pointer text-heading" />
            </Badge>
        </Popover>
    );
};

export default NotificationModal;
