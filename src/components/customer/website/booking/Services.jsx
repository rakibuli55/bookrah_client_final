import { useState } from "react";
import StepTitle from "./StepTitle"

const Services = ({ handleBookingInfoChange, bookingInfo }) => {
    const filterCategories = ['Featured', 'Man`s hair service', 'Women`s hair service', 'Unfurl Keratin', 'DAOL luxury treatment'];
    const [activeCategory, setActiveCategory] = useState(filterCategories[0]);
    const services = [
        {
            id: 1,
            name: "[MAN] cut",
            duration: "5 min",
            price: 1000,
        },
        {
            id: 2,
            name: "[WOMEN] 1 cut",
            duration: "5 min",
            price: 1000,
        },
        {
            id: 3,
            name: "[MAN] down perm (side)",
            duration: "5 min",
            price: 1000,
        },
        {
            id: 4,
            name: "Premium Head Spa",
            duration: "1 hr, 20 min",
            price: 2000,
        },
        {
            id: 5,
            name: "[WOMEN] down perm (side)",
            duration: "5 min",
            price: 1000,
        },
        {
            id: 6,
            name: "Premium Head Spa",
            duration: "1 hr, 20 min",
            price: 4000,
        },
    ];
    // main render
    return (
        <div className="w-full flex flex-col justify-start items-start gap-4 lg:gap-8">
            {/** Step title */}
            <StepTitle title={'Services'} />
            {/* Filter */}
            <div className="w-full flex gap-1 overflow-x-auto justify-start items-center">
                {filterCategories.map((category, index) => (
                    <button key={index} onClick={() => setActiveCategory(category)} className={`px-4 font-satoshi cursor-pointer capitalize transition-colors shrink-0 duration-150  overflow-hidden ease-in-out py-2 rounded-full text-xs md:text-sm font-medium ${category === activeCategory ? 'bg-[#d1b67a] text-heading' : ''}`}>
                        {category}
                    </button>
                ))}
            </div>
            {/* Services List */}
            <div className="w-full flex flex-col gap-4 lg:gap-5 justify-start items-start">
                <p className="font-semibold text-xl font-playfair">{activeCategory}</p>
                <div className="w-full grid grid-cols-1 c-md:gap-5 c-xsm:gap-4 c-md:max-h-[400px] lg:max-h-none overflow-y-auto pr-2">
                    {
                        services.map((service) => (
                            <button type="button" onClick={() => handleBookingInfoChange("service", service)} className={`border overflow-hidden flex relative flex-col justify-start items-start gap-3 bg-white rounded-xl cursor-pointer transition-all duration-300 text-heading ease-in-out md:px-6 md:py-5 p-3 w-full  ${bookingInfo.service?.id === service.id ? 'border-primary' : 'border-transparent'}`} key={service.id}>
                                <div className="flex flex-col justify-start items-start">
                                    <p className="md:text-base text-sm font-medium">{service.name}</p>
                                    <p className="md:text-sm text-xs text-[#767676]">{service.duration}</p>
                                </div>
                                <p className="font-semibold text-xs"> ₱{service.price} </p>
                                <span className="absolute top-4 flex justify-center items-center right-4 border size-6 md:size-7 rounded-full p-1 border-primary">
                                    {bookingInfo.service?.id === service.id && (
                                        <span className="md:size-3 size-2 block shrink-0 bg-[#B89E66] rounded-full" />
                                    )}
                                </span>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services