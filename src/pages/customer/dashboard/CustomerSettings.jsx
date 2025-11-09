import { Switch } from "antd";
import { useState } from "react";
import { FaTrash } from "react-icons/fa6";

const CustomerSettings = () => {
    const notificationSettings = [
        {
            id: 'appointment_text',
            title: 'Appointment notifications',
            subtitle: 'Text message',
            initialState: true, // Example initial state
        },
        {
            id: 'marketing_email',
            title: 'Marketing notifications',
            subtitle: 'Email',
            initialState: true, // Example initial state
        },
        {
            id: 'marketing_text',
            title: 'Marketing notifications',
            subtitle: 'Text message',
            initialState: false, // Example initial state
        },
    ];
    // State to manage all switches based on their IDs
    const [switchStates, setSwitchStates] = useState(
        notificationSettings.reduce((acc, setting) => {
            acc[setting.id] = setting.initialState;
            return acc;
        }, {})
    );

    // Handler to update the state when a switch is toggled
    const handleSwitchChange = (id, checked) => {
        setSwitchStates(prevStates => ({
            ...prevStates,
            [id]: checked,
        }));
    };
    const SwitchRow = ({ id, title, subtitle, isLast }) => (
        <div className={`w-full flex justify-between items-center py-3 ${!isLast ? 'border-b border-gray-100' : ''}`}>
            <div className="flex flex-col justify-start items-start">
                <p className="text-base font-normal text-heading">{title}</p>
                <p className="text-paragraph text-xs">{subtitle}</p>
            </div>
            {/* Ant Design Switch component */}
            <Switch
                checked={switchStates[id]}
                onChange={(checked) => handleSwitchChange(id, checked)}
                // Use custom colors to match the image's aesthetic (optional)
                // The style attribute can be used for simple color changes
                style={{ backgroundColor: switchStates[id] ? '#C7B58B' : 'rgba(0, 0, 0, 0.25)' }}
            />
        </div>
    );
    // main render
    return (
        <div className="w-full flex flex-col justify-start gap-3 md:gap-8">
            {/* heading */}
            <div className="w-full flex flex-col rounded-2xl md:p-6 p-4 justify-center items-start gap-2 bg-white shadow-primary">
                <p className=" text-xl sm:text-2xl font-bold text-heading">Settings</p>
                <p className="text-paragraph text-sm">Manage your account, preferences, and system configuration</p>
            </div>
            {/* Notification settings */}
            <div className="w-full flex flex-col rounded-2xl relative md:p-6 p-4 justify-start items-start gap-2 bg-white shadow-primary">
                <div className="flex flex-col justify-center items-start gap-2">
                    <p className=" text-xl sm:text-2xl font-bold text-heading">Notification Preferences</p>
                    <p className="text-paragraph text-sm">We will send you updates about your appointments, news and offers.</p>
                </div>
                {/* switch list */}
                <div className="w-full mt-2 sm:mt-4">
                    {notificationSettings.map((setting, index) => (
                        <SwitchRow
                            key={setting.id}
                            id={setting.id}
                            title={setting.title}
                            subtitle={setting.subtitle}
                            isLast={index === notificationSettings.length - 1}
                        />
                    ))}
                </div>
                <p className="sm:text-sm text-xs text-paragraph">If you previously opted out to text messages by texting STOP, please reply with START to opt back in.</p>
            </div>
            {/* delete account */}
            <div className="w-full flex flex-col rounded-2xl relative md:p-6 p-4 justify-center items-start gap-2 bg-white shadow-primary">
                <p className=" text-xl sm:text-2xl font-bold text-heading">Delete account</p>
                <p className="text-paragraph text-sm">Are you sure you want to leave Bookrah?</p>
                <button className="absolute sm:right-6 sm:top-6 top-1 right-3 flex justify-center items-center p-3 sm:px-10 font-bold sm:py-2  bg-red-50 text-red-500   rounded-full  cursor-pointer">
                    <span className="hidden sm:block">Delete my Account</span>
                    <FaTrash className="sm:hidden" />
                </button>
            </div>
        </div>
    )
}

export default CustomerSettings