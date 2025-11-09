import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { formatDate } from 'date-fns/format';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';

const DateFilter = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [month, setMonth] = useState(null);
  const value = date ? formatDate(date, 'PPP') : undefined;

  // Helper function to compare dates (only date part, no time)
  const isSameDate = (date1, date2) => {
    if (!date1 || !date2) return false;
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  // Helper functions to determine active state

  const isTodayActive = () => {
    if (!date) return false;
    const today = new Date();
    return isSameDate(date, today);
  };

  const isTomorrowActive = () => {
    if (!date) return false;
    const tomorrow = new Date(Date.now() + 86400000);
    return isSameDate(date, tomorrow);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="hidden c-xsm:flex items-center gap-3 c-lg:px-4 c-lg:py-3 cursor-pointer c-lg:hover:bg-gray-50 c-lg:rounded-full flex-1 c-xsm:py-[10px] c-xsm:px-3 c-lg:bg-transparent c-xsm:bg-theme-bg c-xsm:rounded-[10px]">
          <CalendarIcon className="text-heading size-5" />
          <span className="text-gray-600">{value || 'Any date'}</span>
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto overflow-hidden p-0"
        align="end"
        alignOffset={-8}
        sideOffset={10}
      >
        <div className="flex gap-2 items-center px-4 py-3">
          <div
            onClick={() => {
              setDate(null);
              setOpen(false);
            }}
            className={`font-satoshi px-3 py-1 text-sm border border-[#D3D3D3] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 ${
              !date
                ? 'bg-primary text-heading hover:bg-primary hover:text-heading'
                : ''
            }`}
          >
            Any date
          </div>
          <div
            onClick={() => {
              setDate(new Date());
              setOpen(false);
            }}
            className={`font-satoshi px-3 py-1 text-sm border border-[#D3D3D3] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 ${
              isTodayActive()
                ? 'bg-primary text-heading hover:bg-primary hover:text-heading'
                : ''
            }`}
          >
            Today
          </div>
          <div
            onClick={() => {
              setDate(new Date(Date.now() + 86400000));
              setOpen(false);
            }}
            className={`font-satoshi px-3 py-1 text-sm border border-[#D3D3D3] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 ${
              isTomorrowActive()
                ? 'bg-primary text-heading hover:bg-primary hover:text-heading'
                : ''
            }`}
          >
            Tomorrow
          </div>
        </div>
        <Calendar
          mode="single"
          selected={date}
          captionLayout="dropdown"
          month={month}
          onMonthChange={setMonth}
          onSelect={(date) => {
            setDate(date);
            setOpen(false);
          }}
          className="[--cell-size:--spacing(10)]"
        />
      </PopoverContent>
    </Popover>
  );
};

export default DateFilter;
