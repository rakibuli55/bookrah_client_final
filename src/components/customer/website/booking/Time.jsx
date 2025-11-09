import React from 'react'
import StepTitle from './StepTitle'
import { DatePicker } from 'antd'
import ChangeProfessional from './ChangeProfessional'

const Time = ({ bookingInfo, handleBookingInfoChange }) => {

    // main render
    return (
        <div className='w-full flex flex-col justify-start gap-8'>
            {/* header */}
            <div className='w-full flex justify-between items-center gap-3'>
                <StepTitle title={'Select Date and Time'} />
                {/* change date and professional */}
                <div className='flex gap-4 justify-end items-center'>
                    <ChangeProfessional bookingInfo={bookingInfo} handleBookingInfoChange={handleBookingInfoChange} />
                    <button>

                    </button>
                </div>
            </div>
            {/* available dates and select time */}
            <div></div>
            {/** status */}
            <div className='w-full flex rounded-primary flex-col bg-white py-14 justify-center items-center '>
                <div className='max-w-[480px] mx-auto flex flex-col gap-4 justify-center items-center'>
                    <img src={bookingInfo?.professional?.image} className='size-16 rounded-full object-cover' alt="image" />
                    <h3 className='text-3xl text-center text-heading font-bold'>{bookingInfo?.professional?.name} is fully booked this date</h3>
                    <p className='text-base text-center text-paragraph font-medium'>Available from Sat, Sep 20 at 10:00 AM</p>
                    <div className='flex justify-center items-center gap-3'>
                        <button className='border cursor-pointer border-[#D3D3D3] px-4 py-2 rounded-full text-paragraph'>Go to next available date</button>
                        <button className='border cursor-pointer border-[#D3D3D3] px-4 py-2 rounded-full text-paragraph'>Join waitlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Time