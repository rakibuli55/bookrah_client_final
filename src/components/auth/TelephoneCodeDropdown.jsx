import { useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";
import useClickOutside from "../../hooks/useClickOutside";
import useGetTelephoneCode from "../../hooks/useGetTelephoneCode";

const TelephoneCodeDropdown = ({ control, name }) => {
  const { telephoneCode, telephoneCodeLoading } = useGetTelephoneCode();
  const [selectedCode, setSelectedCode] = useState("+966");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const handleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useClickOutside(dropdownRef, () => {
    setDropdownOpen(false);
  });

  const handleSetCode = (code) => {
    setSelectedCode(code);
    setDropdownOpen(false);
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={selectedCode}
      render={({ field }) => (
        <div className="relative w-full" ref={dropdownRef}>
          {/* trigger  */}
          <div
            className="flex items-center gap-1 c-md:py-[13px] c-xsm:py-[10px] c-md:px-6 c-xsm:px-3 border border-primary c-md:rounded-[10px] c-xsm:rounded-[8px] w-full cursor-pointer c-md:text-base c-xsm:text-sm"
            onClick={handleDropdown}
          >
            <p className="text-heading w-[50px]">{selectedCode}</p>
            <span>
              <IoIosArrowDown />
            </span>
          </div>
          {/* dropdown  */}
          <ul
            className={`py-2 bg-white rounded-[10px] absolute left-0 z-1 max-h-[300px] overflow-y-auto max-w-[280px] duration-200 ease-in-out ${
              dropdownOpen
                ? "top-14 opacity-100 visible"
                : "top-16 opacity-0 invisible"
            }`}
          >
            {telephoneCode?.map((country, index) => (
              <li
                key={country?.dial_code + index}
                className="flex items-center gap-4 px-5 py-3 cursor-pointer duration-200 ease-in-out hover:bg-primary hover:text-white"
                onClick={() => handleSetCode(country?.dial_code)}
              >
                <p className="w-[47px]">{country?.dial_code}</p>
                <p>{country?.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    />
  );
};

export default TelephoneCodeDropdown;
