import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { SearchIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { IoSearch } from 'react-icons/io5';

const treatments = [
  'Hair & styling',
  'Hair styling',
  'Asian Haircut',
  "Children's Haircut",
  'Curly Haircut',
];

const venues = [
  { name: 'Hair Paint', address: 'Secretariat Road, Dhaka, Bangladesh' },
  {
    name: 'Peaches Gairidhara',
    address: 'Secretariat Road, Dhaka, Bangladesh',
  },
  {
    name: 'Pinkies Hair Paint',
    address: 'Secretariat Road, Dhaka, Bangladesh',
  },
  { name: 'Hair Fair Salon', address: 'Secretariat Road, Dhaka, Bangladesh' },
];

const TreatmentSearch = () => {
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

  // Filter treatments and venues based on search input
  const filteredTreatments = treatments.filter((treatment) =>
    treatment.toLowerCase().includes(searchInput.toLowerCase())
  );

  const filteredVenues = venues.filter(
    (venue) =>
      venue.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      venue.address.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger onClick={(e) => e.preventDefault()} asChild>
        <div
          className="hidden c-xsm:flex items-center gap-3 c-lg:rounded-full flex-1 c-lg:pr-4 c-xsm:p-[10px] c-xsm:px-4 c-lg:bg-transparent c-xsm:bg-theme-bg c-xsm:rounded-[10px]"
          onClick={() => setOpen(true)}
        >
          <SearchIcon className="text-heading size-5" />
          <input
            type="text"
            ref={inputRef}
            placeholder="All treatments and venues"
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
        {filteredTreatments.length > 0 && (
          <div className="mb-4">
            <h3 className="font-bold text-lg mb-2 font-playfair">Treatment</h3>
            <ul className="space-y-2">
              {filteredTreatments.map((treatment, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer font-satoshi"
                  onClick={() => {
                    setSearchInput(treatment);
                    setOpen(false);
                  }}
                >
                  <IoSearch className="text-gray-400" />
                  <span>{treatment}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {filteredVenues.length > 0 && (
          <div>
            <h3 className="font-bold text-lg mb-2 font-playfair">Venues</h3>
            <ul className="space-y-2">
              {filteredVenues.map((venue, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer font-satoshi"
                  onClick={() => {
                    setSearchInput(venue.name);
                    setOpen(false);
                  }}
                >
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">{venue.name}</div>
                    <div className="text-sm text-gray-500">{venue.address}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {searchInput &&
          filteredTreatments.length === 0 &&
          filteredVenues.length === 0 && (
            <div className="text-center py-4 text-gray-500">
              No results found for "{searchInput}"
            </div>
          )}
      </PopoverContent>
    </Popover>
  );
};

export default TreatmentSearch;
