import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';

const locations = [
  { name: 'Dhaka', address: 'Bangladesh' },
  {
    name: 'Dhaka Medical College Hospital',
    address: 'Secretariat Road, Dhaka, Bangladesh',
  },
  {
    name: 'Dhaka University',
    address: 'Secretariat Road, Dhaka, Bangladesh',
  },
  { name: 'Dhaka College', address: 'Secretariat Road, Dhaka, Bangladesh' },
];

const LocationSearch = () => {
  const [open, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 0);
    }
  }, [open]);

  const filteredLocations = locations.filter(
    (location) =>
      location.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      location.address.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger onClick={(e) => e.preventDefault()} asChild>
        <div
          className="hidden c-xsm:flex items-center gap-3 c-lg:rounded-full flex-1 c-lg:pr-4 c-xsm:p-[10px] c-xsm:px-4 c-lg:bg-transparent c-xsm:bg-theme-bg c-xsm:rounded-[10px]"
          onClick={() => setOpen(true)}
        >
          <MapPin className="text-heading size-5" />
          <input
            type="text"
            ref={inputRef}
            placeholder="Current location"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-heading placeholder:text-heading"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="p-4 max-h-[50svh] overflow-y-scroll"
        sideOffset={22}
      >
        <div className="mb-4">
          <h3 className="font-bold text-lg mb-2 font-playfair">Suggested</h3>
          <ul className="space-y-2">
            {filteredLocations.map((location, index) => (
              <li
                key={index}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer font-satoshi"
                onClick={() => {
                  setSearchInput(location.name);
                  setOpen(false);
                }}
              >
                <IoLocationOutline className="text-gray-400" />
                <div>
                  <div className="font-medium">{location.name}</div>
                  {location.address && (
                    <div className="text-sm text-gray-500">
                      {location.address}
                    </div>
                  )}
                  {location.country && (
                    <div className="text-sm text-gray-500">
                      {location.country}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg font-playfair">Saved</h3>
            <button className="text-primary text-sm font-satoshi">
              Manage
            </button>
          </div>
          <ul className="space-y-2 font-satoshi">
            <li
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
              onClick={() => {
                setOpen(false);
              }}
            >
              <IoLocationOutline className="text-gray-400" />
              <span>Add Home</span>
            </li>
            <li
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
              onClick={() => {
                setOpen(false);
              }}
            >
              <IoLocationOutline className="text-gray-400" />
              <span>Add Work</span>
            </li>
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LocationSearch;
