/* eslint-disable no-unused-vars */
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';

const PickDate = ({ bookingInfo, handleBookingInfoChange }) => {
    const [open, setOpen] = useState(false);
    const [month, setMonth] = useState(null);
    // main render
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div className="size-10 rounded-full border border-[#D3D3D3] flex justify-center items-center bg-white cursor-pointer">
                    <CalendarIcon className="text-heading size-5" />
                </div>
            </PopoverTrigger>
            <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="end"
                alignOffset={-8}
                sideOffset={10}
            >
                <Calendar
                    mode="single"
                    selected={bookingInfo?.date}
                    captionLayout="dropdown"
                    month={month}
                    onMonthChange={setMonth}
                    onSelect={() => {
                        setOpen(false);
                    }}
                    className="[--cell-size:--spacing(10)]"
                />
            </PopoverContent>
        </Popover>
    )
}

export default PickDate