/* eslint-disable no-unused-vars */
import StepTitle from './StepTitle'
import { MdPayments } from "react-icons/md";
const Confirm = ({ bookingInfo, handleBookingInfoChange }) => {
    return (
        <div className="w-full flex flex-col justify-start items-start gap-8">
            <StepTitle title="Confirm" />
            <div className="w-full flex flex-col p-6 rounded-primary bg-white gap-6">
                <div className='w-full flex flex-col gap-3'>
                    <p className='text-xl font-semibold'>Payment method</p>
                    <div className='w-full rounded-sm px-5 py-3 flex justify-start items-center gap-2 border border-[#CFCFCF]'>
                        <MdPayments size={20} />
                        <span>Pay at venue</span>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <p className='text-xl font-semibold'>Important info</p>
                    <p className='text-sm text-paragraph font-medium'>If you arrive later than your appointment time, the next person on the waiting list will have to wait.
                        Please be sure to keep your appointment time</p>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <p className='text-xl font-semibold'>Booking notes</p>
                    <textarea onChange={(e) => handleBookingInfoChange("booking_note", e.target.value)} className='w-full border border-[#CFCFCF] p-3 rounded-sm outline-none h-52 resize-none' placeholder='Include comments or requests about your booking' name="notes" id="notes">

                    </textarea>
                </div>
            </div>
        </div>
    )
}

export default Confirm