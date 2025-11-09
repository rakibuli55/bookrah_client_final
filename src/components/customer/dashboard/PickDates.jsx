import dayjs from 'dayjs';
import React, { useState } from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { Calendar } from 'antd'

const PickDates = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const onSelect = (value) => {
        setSelectedDate(value);
    };
    return (
        <div className='shadow-2xs  w-full lg:w-[400px] c-xxxl:w-[450px] h-fit shrink-0 p-3 xl:p-6 bg-white border rounded-2xl flex flex-col justify-start gap-4 border-pricing-card-bg '>
            <p className='text-xl font-semibold'>Upcoming Appointments</p>
            {/* in calendar */}
            <div className="rounded-xl overflow-hidden border border-gray-100">
                <Calendar
                    fullscreen={false}
                    value={selectedDate}
                    onSelect={onSelect}
                    className="custom-calendar"
                    // 1. Custom header (your original code – unchanged)
                    headerRender={({ value, onChange }) => {
                        const month = value.format("MMMM");
                        const year = value.year();
                        const prevMonth = () => onChange(value.clone().subtract(1, "month"));
                        const nextMonth = () => onChange(value.clone().add(1, "month"));

                        return (
                            <div className="flex justify-between items-center px-3 py-2">
                                <h3 className="text-gray-700 font-semibold">
                                    {month} {year}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={prevMonth}
                                        className="px-2 text-gray-500 hover:text-gray-700"
                                    >
                                        ‹
                                    </button>
                                    <button
                                        onClick={nextMonth}
                                        className="px-2 text-gray-500 hover:text-gray-700"
                                    >
                                        ›
                                    </button>
                                </div>
                            </div>
                        );
                    }}
                />
            </div>
            {/* in list */}
            <div className='w-full flex flex-col justify-start gap-4'>
                {
                    Array(2).fill(0).map((_, index) => (
                        <div className='w-full p-3 border border-[#E5E5E5] rounded-sm shadow flex justify-start items-center gap-4  bg-white' key={index}>
                            <div className='w-16 h-full p-3 rounded-lg bg-primary shrink-0 flex flex-col justify-center items-center'>
                                <span className='text-lg font-bold'>{index + 1}</span>
                                <span className='text-xs'>Sat</span>
                            </div>
                            <div className='text-xs'>
                                <div className='flex items-center gap-2'>
                                    <IoTimeOutline />
                                    <span>10:00 AM - 12:00 PM</span>
                                </div>
                                <p className='font-semibold'>Blow Dry</p>
                                <p className='font-semibold'>Jack Doe, 60 min with Windy</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PickDates