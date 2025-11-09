import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import AppointmentsCard from "./AppointmentsCard";

function UpcomingEventsCalender() {
    const [events, setEvents] = useState([
        { id: 1, date: '2025-10-14', title: 'Team Meeting' },
        { id: 2, date: '2025-10-23', title: 'Project Deadline' },
        { id: 3, date: '2025-10-05', title: 'Client Call' },
        { id: 4, date: '2025-11-28', title: 'Review Session' }
    ]);
    const [selectedDate, setSelectedDate] = useState();
    // Convert event dates to Date objects
    const eventDates = events.map(event => new Date(event.date));

    const getEventsForDate = (date) => {
        if (!date) return [];
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateStr = `${year}-${month}-${day}`;
        return events.filter(event => event.date === dateStr);
    }

    const selectedDateEvents = getEventsForDate(selectedDate);

      const schedule = [
        {
            id:1,
            day: "Sat",
            date: 3,
            timeSlot: "10:00 AM - 12:00 PM",
            service: "Blow Dry",
            details: "Jack Doe, 60 min with Windy"
        },
        {
            id:2,
            day: "Sat", 
            date: 3,
            timeSlot: "10:00 AM - 12:00 PM",
            service: "Blow Dry", 
            details: "Jack Doe, 60 min with Windy"
        },
      ]

  return (
    <div className="common-dash-box-layout mt-3 upcoming-events-calender">
      <div className="w-full">
        <DayPicker
        animate
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        modifiers={{
            event:eventDates
        }}
        modifiersClassNames={{
            event: 'event-day'
        }}
        />
      </div>
      {/* appointment cards  */}
      <div className="h-[184px] overflow-auto default-scrollbar pr-2 mt-4">
        {
        schedule?.map((appointment) => (
          <AppointmentsCard key={appointment?.id} appointment={appointment}  indicatorbgColor={appointment.id % 2 === 0 ? '#D1B67A' : '#2F2F2F'}/>
        ))
      }
      </div>
    </div>
  )
}

export default UpcomingEventsCalender
