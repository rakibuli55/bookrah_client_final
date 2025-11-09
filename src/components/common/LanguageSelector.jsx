import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import arabFlag from '../../assets/icon/arab.svg';
import iceFlag from '../../assets/icon/us.svg';
import useClickOutside from '../../hooks/useClickOutside';

const LanguageSelector = ({ className, triggerClassName }) => {
  const language = [
    {
      name: 'en',
      flag: iceFlag,
    },
    {
      name: 'ar',
      flag: arabFlag,
    },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsDropdownOpen(false);
  };

  const dropdownRef = useRef();
  useClickOutside(dropdownRef, () => setIsDropdownOpen(false));

  return (
    <div className={`${className} relative flex`} ref={dropdownRef}>
      {/* trigger */}
      <div
        className={cn(
          'flex items-center gap-3 cursor-pointer text-paragraph ',
          triggerClassName
        )}
        onClick={handleDropdown}
      >
        {/* flag image  */}
        <div className="h-7 w-7 rounded-full overflow-hidden">
          <img
            className="h-full w-full scale-[1.3]"
            src={selectedLanguage === 'en' ? iceFlag : arabFlag}
            alt="flag"
          />
        </div>
        {/* name  */}
        <span className="uppercase font-satoshi text-sm font-medium text-[#cacaca]">
          {selectedLanguage}
        </span>
        {/* icon  */}
        <span className='text-[#cacaca]'>
          <IoIosArrowDown />
        </span>
      </div>
      <ul
        className={`absolute z-50 left-0 w-full bg-white rounded-[10px] py-2 duration-200 ease-in-out  ${
          isDropdownOpen
            ? 'opaci-100 visible top-15'
            : 'opacity-0 invisible top-17'
        }`}
      >
        {language?.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 px-5 py-2 cursor-pointer hover:bg-primary duration-200 ease-in-out"
            onClick={() => handleSelectLanguage(item?.name)}
          >
            <div className="h-6 w-6 rounded-full overflow-hidden">
              <img
                className="h-full w-full scale-[1.3]"
                src={item?.name === 'en' ? iceFlag : arabFlag}
                alt="flag"
              />
            </div>
            <span className="uppercase font-satoshi text-sm text-paragraph font-medium">
              {item?.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
