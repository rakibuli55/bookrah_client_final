import AppointmentCard from '@/components/customer/dashboard/ApointmentCard'
import House from '@/components/icons/House';
import Send from '@/components/icons/Send';
import { mockAppointments } from '@/data/mockServices'
import { Empty } from 'antd';
import React, { useState } from 'react'
import { BsFillSendFill } from "react-icons/bs";
const CustomerAppointments = () => {

    const [selected, setSelected] = useState(null);
    const handleSelect = (appointment) => {
        setSelected(appointment);
    };

    // main render 
    return (
        <div className='w-full flex justify-between lg:flex-row flex-col-reverse items-start gap-4 c-base:gap-8'>
            {/* upcomming and previous appointments */}
            <div className='w-full lg:w-[60%] xl:w-[65%] 2xl:w-1/2   c-base:p-6 p-4 bg-white rounded-2xl shadow-2xs flex flex-col justify-start gap-4 '>
                {/* upcomming appointments */}
                <div className='w-full flex flex-col gap-3'>
                    <p className='text-xl font-semibold'>Appointments</p>
                    <div className='w-full flex flex-col lg:h-auto h-96 overflow-y-auto justify-start gap-4'>
                        {
                            mockAppointments?.slice(4, 8).map((appointment) => (
                                <AppointmentCard
                                    isSelected={selected?.id === appointment.id}
                                    onClick={() => handleSelect(appointment)}
                                    appointment={appointment}
                                    showDetails={false}
                                    key={appointment.id}
                                />
                            ))
                        }
                    </div>
                </div>
                {/* previous appointments */}
                <div className='w-full flex flex-col gap-3'>
                    <p className='text-xl font-semibold'>Past Appointments</p>
                    <div className='w-full flex flex-col justify-start lg:h-auto h-96 overflow-y-auto gap-4'>
                        {
                            mockAppointments?.slice(0, 3).map((appointment) => (
                                <AppointmentCard
                                    isSelected={selected?.id === appointment.id}
                                    onClick={() => handleSelect(appointment)}
                                    appointment={appointment}
                                    isPast={true}
                                    showDetails={false}
                                    key={appointment.id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* appointment details */}
            <div className='w-full lg:w-[40%] xl:w-[35%] 2xl:w-1/2  c-base:p-6 p-4  bg-[#F9F9F9] rounded-2xl shadow-2xs flex flex-col justify-start gap-4'>
                {/* no appointment selected */}
                {
                    !selected && (
                        <div className='w-full h-96 flex flex-col gap-4 justify-center items-center'>
                            <Empty description='No appointment selected' />
                            <p className='text-xl font-semibold'>Select an appointment</p>
                        </div>
                    )
                }
                {/* appointment details */}
                {
                    selected && (
                        <div className='w-full flex  flex-col justify-start gap-4 lg:gap-6'>
                            {/* appointment cover */}
                            <div className='w-full c-xxxl:h-96 h-48 md:h-56 lg:h-72 overflow-hidden rounded-2xl relative'>
                                <img src={selected.image} alt={selected.name} className='w-full hover:scale-110 ease-in-out transition-all duration-300 hover:opacity-90 h-full object-cover' />
                                <p className='lg:bottom-8 lg:left-8 bottom-3 left-3 text-xl md:text-3xl absolute z-10 text-white font-bold'>{selected.name}</p>
                            </div>
                            {/* time */}
                            <div className='w-full flex flex-col justify-start gap-1'>
                                <div className='w-full flex md:flex-row flex-col justify-between items-center gap-2'>
                                    <p className=' text-base md:text-lg font-semibold line-clamp-1'>{selected.date} {selected.time}</p>
                                    <p className='text-green-600 shrink-0 text-sm md:text-base self-end font-semibold'>Venue Payment</p>
                                </div>
                                <p className='text-paragraph text-sm'>{selected.duration}</p>
                            </div>
                            {/* services */}
                            <div className='w-full flex flex-col gap-4 py-4'>
                                <div className='w-full flex justify-start items-center gap-3'>
                                    <div className='sm:size-12 size-8 rounded-full flex justify-center items-center p-2 bg-primary'>
                                        <Send />
                                    </div>
                                    <div>
                                        <p className=' text-sm sm:text-base font-bold text-heading'>Getting there</p>
                                        <p className='text-paragraph text-sm'>13-1, Persiaran Eserina, Shah Alam, Dhaka</p>
                                    </div>
                                </div>
                                {/** separator */}
                                <hr className='w-full border border-[#D7CBBF]' />
                                <div className='w-full flex justify-start items-center gap-3'>
                                    <div className='sm:size-12 size-8 rounded-full flex justify-center items-center p-2 bg-primary'>
                                        <House />
                                    </div>
                                    <div>
                                        <p className=' text-sm sm:text-base font-bold text-heading'>Service details</p>
                                        <p className='text-paragraph text-sm'>13-1, Persiaran Eserina, Shah Alam, Dhaka</p>
                                    </div>
                                </div>
                            </div>
                            {/** Overview */}
                            <div className='flex flex-col c-xxxl:gap-6'>
                                <p className='md:text-xl text-lg text-heading font-bold '>Overview</p>
                                <div className='flex flex-col'>
                                    <div className='flex md:text-base text-sm justify-between font-bold items-center gap-1'>
                                        <span className=''>Premium Head Spa</span>
                                        <span className='text-xs'>₱4,000</span>
                                    </div>
                                    <p>5 mins with any professional</p>
                                </div>
                                <hr className='w-full border my-3 border-[#EAEAE7]' />
                                <div className='flex text-sm md:text-base justify-between items-center gap-2'>
                                    <span>Total</span>
                                    <span className='font-bold'>₱4,000</span>
                                </div>
                            </div>
                            {/* Cancellation policy */}
                            <div className='w-full c-xxxl:mt-14 flex flex-col gap-4 c-xxxl:gap-10'>
                                <div className='w-full p-4 flex flex-col gap-1 rounded-2xl bg-white'>
                                    <p className='md:text-2xl text-base sm:text-xl text-heading font-bold'>Cancellation policy</p>
                                    <p className='text-paragraph lg:text-base text-sm'>Please avoid canceling within <b>3 hours</b>of your appointment time</p>
                                </div>
                                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 c-xxl:grid-cols-2 gap-4 c-xxxl:gap-6'>
                                    <button className='w-full c-base:px-8 py-3 px-2 bg-red-100 text-red-600 font-bold capitalize rounded-lg cursor-pointer'>
                                        Cancel Appointment
                                    </button>
                                    <button className='w-full c-base:px-8 py-3 px-2 bg-primary text-heading font-bold capitalize rounded-lg cursor-pointer'>
                                        Reschedule Appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default CustomerAppointments