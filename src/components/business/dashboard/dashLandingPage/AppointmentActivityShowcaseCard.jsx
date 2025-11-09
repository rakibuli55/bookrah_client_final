import AppointmentsCard from "./AppointmentsCard";


const schedule = [
  {
    id:1,
    day: "Sat",
    date: 3,
    timeSlot: "10:00 AM - 12:00 PM",
    service: "Blow Dry",
    details: "Jack Doe, 60 min with Windy",
    status:'Completed'
  },
  {
    id:2,
    day: "Sat", 
    date: 3,
    timeSlot: "10:00 AM - 12:00 PM",
    service: "Blow Dry", 
    details: "Jack Doe, 60 min with Windy",
    status:'Cancel'
  },
];
function AppointmentActivityShowcaseCard() {
    
  return (
    <div className="common-dash-box-layout mt-3">
      {/* title  */}
      <div className="mb-4">
        <h3 className="text-base font-bold">Appointments activity</h3>
      </div>
      {/* appointments  */}
      <div className="c-lg:h-[184px] overflow-auto default-scrollbar c-lg:pr-2">
        {
        schedule?.map((appointment) => (
          <AppointmentsCard key={appointment?.id} appointment={appointment}  indicatorbgColor={appointment.id % 2 === 0 ? '#D1B67A' : '#2F2F2F'} type="appointmentActivity" appointmentStatus={appointment?.status}/>
        ))
      }
    </div>
    </div>
  )
}

export default AppointmentActivityShowcaseCard
