import { useState } from "react";
import EditShifts from "./shiftScheduler/EditShifts";
import ScheduledLists from "./shiftScheduler/ScheduledLists";

const ShiftScheduler = () => {
  const [isEditShiftsOpen, setIsEditShiftsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [tempShifts, setTempShifts] = useState({});
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Al Hassan",
      role: "52H",
      avatar:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80",
      shifts: {},
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      role: "40H",
      avatar:
        "https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Rachel-Montan%CC%83ez.jpeg",
      shifts: {},
    },
    {
      id: 3,
      name: "John Doe",
      role: "48H",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      shifts: {},
    },
    {
      id: 4,
      name: "Alice Brown",
      role: "35H",
      avatar: "https://randomuser.me/api/portraits/women/31.jpg",
      shifts: {},
    },
    {
      id: 5,
      name: "Ethan James",
      role: "45H",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      shifts: {},
    },
    {
      id: 6,
      name: "Lily Grace",
      role: "50H",
      avatar: "https://randomuser.me/api/portraits/women/25.jpg",
      shifts: {},
    },
  ]);

  // handleAddShift
  const handleAddShift = (member) => {
    setSelectedMember(member);
    setTempShifts({ ...member.shifts });
    setIsEditShiftsOpen(true);
  };

  //   handleTimeChange
  const handleTimeChange = (day, field, value) => {
    setTempShifts((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }));
  };
  // handle add shift today
  const handleAddShiftToDay = (day) => {
    setTempShifts((prev) => ({
      ...prev,
      [day]: { start: "10:00", end: "18:00" },
    }));
  };
  // handleSaveShifts
  const handleSaveShifts = () => {
    setTeamMembers((prev) =>
      prev.map((member) =>
        member.id === selectedMember.id
          ? { ...member, shifts: { ...tempShifts } }
          : member
      )
    );

    setIsEditShiftsOpen(false);
    setSelectedMember(null);
    setTempShifts({});
  };
  // handleCancelSaveShifts
  const handleCancelSaveShifts = () => {
    setIsEditShiftsOpen(false);
    setSelectedMember(null);
    setTempShifts({});
  };

  return (
    <div className="font-satoshi">
      <ScheduledLists teamMembers={teamMembers} onAddShift={handleAddShift} />
      <EditShifts
        isOpen={isEditShiftsOpen}
        setIsOpen={setIsEditShiftsOpen}
        member={selectedMember}
        tempShifts={tempShifts}
        onTimeChange={handleTimeChange}
        onAddShift={handleAddShiftToDay}
        onSave={handleSaveShifts}
        onCancel={handleCancelSaveShifts}
      />
    </div>
  );
};

export default ShiftScheduler;
