import useClickOutside from '@/hooks/useClickOutside';
import { useRef, useState } from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import DateFilter from './DateFilter';
import LocationSearch from './LocationSearch';
import TreatmentSearch from './TreatmentSearch';

const SearchBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [searchData, setSearchData] = useState({
    treatment: 'All treatments and venues',
    location: 'Current location',
    date: 'Any date',
    time: 'Any time',
  });

  const dropdownRef = useRef();
  useClickOutside(dropdownRef, () => setActiveDropdown(null));

  const handleDropdownToggle = (type) => {
    setActiveDropdown(activeDropdown === type ? null : type);
  };

  const handleSelect = (type, value) => {
    setSearchData((prev) => ({ ...prev, [type]: value }));
    setActiveDropdown(null);
  };

  const renderDropdown = () => {
    if (!activeDropdown) return null;

    return (
      <div className="absolute c-md:top-full c-xsm:top-[75%] left-0 w-full bg-white rounded-lg shadow-lg mt-2 z-50">
        {activeDropdown === 'time' && (
          <div className="p-4">
            <div className="flex c-lg:flex-row c-xsm:flex-col gap-2 mb-4">
              <button
                className={`px-4 py-2 rounded ${
                  searchData.time === 'Any time'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100'
                }`}
                onClick={() => handleSelect('time', 'Any time')}
              >
                Any time
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  searchData.time === 'Morning'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100'
                }`}
                onClick={() => handleSelect('time', 'Morning')}
              >
                Morning
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  searchData.time === 'Afternoon'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100'
                }`}
                onClick={() => handleSelect('time', 'Afternoon')}
              >
                Afternoon
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  searchData.time === 'Evening'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100'
                }`}
                onClick={() => handleSelect('time', 'Evening')}
              >
                Evening
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">From</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>Select time</option>
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">To</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>Select time</option>
                  <option>5:00 PM</option>
                  <option>6:00 PM</option>
                  <option>7:00 PM</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative font-satoshi" ref={dropdownRef}>
      <div className="bg-theme-bg c-lg:rounded-full c-xsm:rounded-[16px] p-2 shadow-lg">
        <div className="bg-white c-lg:flex items-center c-lg:p-1.5 c-lg:pl-[18px] c-xsm:p-4 c-lg:rounded-full c-xsm:rounded-[16px] c-lg:space-y-0 c-xsm:space-y-3">
          <TreatmentSearch />
          <div className="w-px h-8 bg-gray-200 c-lg:block c-xsm:hidden"></div>
          <LocationSearch />
          <div className="w-px h-8 bg-gray-200 c-lg:block c-xsm:hidden"></div>
          <DateFilter />
          <div className="w-px h-8 bg-gray-200 c-lg:block c-xsm:hidden"></div>

          {/* Time */}
          <div
            className="hidden c-xsm:flex items-center gap-3 c-lg:px-4 c-lg:py-3 cursor-pointer c-lg:hover:bg-gray-50 c-lg:rounded-xl flex-1 c-lg:bg-transparent c-xsm:bg-theme-bg c-xsm:py-[10px] c-xsm:px-3 c-lg:rounded-0 c-xsm:rounded-[10px]"
            onClick={() => handleDropdownToggle('time')}
          >
            <IoTimeOutline className="text-gray-400 text-lg" />
            <span className="text-gray-600">{searchData.time}</span>
          </div>

          {/* Search Button */}
          <Link to="/search">
            <button className="bg-primary text-heading px-8 py-3 c-lg:rounded-full font-semibold hover:bg-primary/90 transition-colors cursor-pointer c-lg:w-fit c-xsm:w-full c-xsm:rounded-[10px]">
              Search
            </button>
          </Link>
        </div>

        {/* Dropdown */}
        {renderDropdown()}
      </div>
    </div>
  );
};

export default SearchBar;
