import getStatusStyles from "@/utils/getStatusStyles";
import { CiClock2 } from "react-icons/ci";
function AppointmentsCard({appointment, indicatorbgColor, type="appointment", appointmentStatus}) {
  return (
    <div className='p-3 bg-dash-gray rounded-[12px] flex items-center gap-[10px] mt-4 first:mt-0 relative'>
      <div className='w-[42px] h-[55px] flex flex-col items-center justify-center rounded-[8px] text-white' style={{backgroundColor:indicatorbgColor}}>
        <p className='text-[18px] font-bold'>{appointment?.date}</p>
        <p className='text-[10px] mt-[-3px]'>{appointment?.day}</p>
      </div>
      <div>
        <div className='flex items-center gap-2 text-[12px]'>
            <CiClock2 />
            <p>{appointment?.timeSlot}</p>
        </div>
        <h3 className="text-sm font-bold text-heading">{appointment?.service}</h3>
        <p className="text-[12px] font-semibold text-heading mt-1">{appointment?.details}</p>
      </div>
      {
        type === 'appointmentActivity' && (
          <p
            className={` text-[12px] absolute top-3 right-3 rounded-[20px] py-1 px-2 ${getStatusStyles(appointmentStatus)} ${
              appointmentStatus === 'completed'
                ? 'bg-[rgba(72,189,89,0.16)]'
                : appointmentStatus === 'cancel'
                ? 'bg-red-100'
                : ''
            }`}

          >
            {appointmentStatus}
          </p>
        )
      }
    </div>
  )
}

export default AppointmentsCard
