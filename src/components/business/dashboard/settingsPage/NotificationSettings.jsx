import { useState } from "react";
import SettingsTabTitle from "../common/SettingsTabTitle";
const notifications = [
  { id: "mentioned", label: "I'm mentioned in a message", enabled: true },
  { id: "replies", label: "Someone replies to any message", enabled: true },
  { id: "overdue", label: "A task is overdue", enabled: false },
  { id: "assigned", label: "I'm Assign a task", enabled: true },
  { id: "statusUpdated", label: "A task status is updated", enabled: true },
  {
    id: "statusUpdatedDuplicate",
    label: "A task status is updated",
    enabled: false,
  },
];
const NotificationSettings = () => {
  const [settings, setSettings] = useState(
    notifications.reduce(
      (acc, notification) => ({
        ...acc,
        [notification.id]: notification.enabled,
      }),
      {}
    )
  );

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div>
      {/* title  */}
      <SettingsTabTitle
        title="Notifications"
        desc="Select when and how you'll be notified."
      />
      <div>
        <div className="business-settings-common-input-box">
          {/* label-box  */}
          <div className="label-box">
            <p>General notifications</p>
            <p className="text-sm text-paragraph mt-[6px]">
              Select when you'll be notified when the following changes occur.
            </p>
          </div>
          {/* input-box  */}
          <div className="input-box">
            {notifications?.map((notification) => (
              <div
                key={notification.id}
                className="flex items-center justify-between c-md:py-6 c-xsm:py-4 border-b border-input last:border-none"
              >
                <span className="text-paragraph c-lg:text-sm c-xsm:text-[15px] font-medium">
                  {notification.label}
                </span>
                <button
                  onClick={() => toggleSetting(notification.id)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none cursor-pointer ${
                    settings[notification.id] ? "bg-primary" : "bg-gray-300"
                  }`}
                  role="switch"
                  aria-checked={settings[notification.id]}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                      settings[notification.id]
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
