import { cn } from "@/lib/utils";
import { FaCalendarAlt, FaEye } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
const AppointmentCard = ({ appointment = {}, showDetails = true, isPast = false, isSelected = false, className = "", onClick }) => {

    const { image, name, date, time, price, items, duration } = appointment;

    return (
        <div onClick={onClick} className={cn("w-full flex c-xxxl:items-center  relative justify-between gap-4 px-4 py-3 border rounded-xl", isSelected ? "border-primary" : "border-[#D3D3D3]", className)}>
            {/* Left side */}
            <div className="relative c-xxl:size-28 sm:size-24 c-sm::w-24 w-20 c-sm:h-28 h-20 shrink-0 rounded-xl overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex w-full c-xxxl:items-center c-xxxl:flex-row flex-col c-xxxl:gap-4 gap-1">
                <div className="w-full flex flex-col gap-1">
                    <h3 className="c-xxxl:text-lg c-xsm:text-base text-sm line-clamp-1 font-semibold text-heading">
                        {name}
                    </h3>
                    <div className="c-xxxl:text-sm sm:flex-row flex-col text-xs flex sm:items-center gap-1 text-[#767676] font-medium">
                        <div className="flex justify-start items-center gap-1">
                            <FaCalendarAlt />
                            <span>{date}</span>
                        </div>
                        <span className="mx-1 sm:block hidden">|</span>
                        <div className="flex justify-start items-center gap-1">
                            <MdAccessTime />
                            <span>{time}</span>
                        </div>
                        <span className="mx-1 sm:block hidden">|</span>
                        <span>{duration}</span>
                    </div>
                    <p className="text-sm font-bold text-heading mt-1">
                        {price} <span className="text-gray-400">•</span>{" "}
                        {items}
                    </p>
                </div>
                {showDetails && (
                    <button type="button" className="text-heading shrink-0 flex justify-center items-center w-10 h-10 c-sm:h-auto c-sm:w-fit self-end font-medium border rounded-full border-[#D3D3D3] c-sm:px-4 c-sm:py-2 sm:static absolute top-3 right-3 z-10 c-sm:hover:bg-primary c-sm:bg-transparent bg-primary hover:text-white transition-all">
                        <span className="hidden sm:block">View Details</span>
                        <FaEye size={16} className=" sm:hidden " />
                    </button>
                )}
            </div>
            {/* Right side */}
            {isPast && (
                <button type="button" className="absolute sm:bottom-4 bottom-2 text-sm sm:text-base font-bold text-primary right-2 sm:right-4 ">
                    Book Again
                </button>
            )}
        </div>
    );
};

export default AppointmentCard;