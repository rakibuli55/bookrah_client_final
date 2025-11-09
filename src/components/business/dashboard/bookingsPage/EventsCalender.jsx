import { onUpdateEvent } from "@/redux/features/business/EventCalenderSlice";
import getEventStatusColor from "@/utils/getEventStatusColor";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useDispatch } from "react-redux";

const events = [
  {
    id: "1",
    title: "Team Brainstorming for Marketing",
    start: "2025-11-01T15:00:00",
    end: "2025-11-01T16:00:00",
    description:
      "Our marketing and creative team will gather to brainstorm fresh and innovative ideas for the upcoming product launch campaign. We’ll focus on digital outreach strategies",
    image: "https://images.pexels.com/photos/1647919/pexels-photo-1647919.jpeg",
    status: "Setup and Rehearsal",
  },
  {
    id: "2",
    title: "Vendor Feedback Collection",
    start: "2025-11-07T15:00:00",
    end: "2025-11-07T16:00:00",
    description:
      "This meeting is focused on gathering feedback from our partner vendors regarding their recent experiences with our logistics and communication process.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    status: "Meeting",
  },
  {
    id: "3",
    title: "Task Deadlines",
    start: "2025-10-07T18:00:00",
    end: "2025-10-07T19:00:00",
    description:
      "A crucial checkpoint meeting to review the progress of all ongoing tasks and ensure that everyone is aligned with upcoming deadlines. Each department will provide a quick update",
    image: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg",
    status: "Task Deadlines",
  },
  {
    id: "4",
    title: "Final Event Report",
    start: "2025-10-09T10:00:00",
    end: "2025-10-09T11:00:00",
    description:
      "In this session, the event coordination team will compile and review the final report summarizing all aspects of the recent corporate event. The report will include",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
    status: "Event",
  },
];

const EventsCalender = () => {
  const dispatch = useDispatch();

  const handleEventClick = (info) => {
    const { id, title, start, end, extendedProps } = info.event;
    const eventData = {
      id,
      title,
      startDate: start?.toString(),
      endDate: end?.toString(),
      status: extendedProps.status,
      description: extendedProps.description,
      extendedProps,
    };
    dispatch(onUpdateEvent(eventData));
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      eventColor="#d1b67a"
      height="100%"
      headerToolbar={{
        start: "today,prev,next",
        center: "title",
        end: "dayGridMonth, timeGridWeek, timeGridDay",
      }}
      eventClick={handleEventClick}
      eventContent={(eventInfo) => {
        return (
          <div
            className="p-2 w-full rounded-[4px] hover:opacity-90 cursor-pointer overflow-hidden"
            style={{
              backgroundColor: getEventStatusColor(
                eventInfo.event.extendedProps.status
              ),
            }}
          >
            <div>{eventInfo.event.title}</div>
            <div>
              {new Date(eventInfo.event.start).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        );
      }}
    />
  );
};

export default EventsCalender;
