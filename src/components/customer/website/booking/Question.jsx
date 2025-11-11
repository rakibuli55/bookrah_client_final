import React from 'react'
import StepTitle from './StepTitle'

const Question = ({ bookingInfo, handleBookingInfoChange }) => {
    const options = [
        { label: 'Yes', subLabel: 'This is my first visit', value: true },
        { label: 'No', subLabel: 'I’ve visited before', value: false },
    ]

    const OptionButton = ({ label, subLabel, value }) => {
        const isSelected = bookingInfo?.is_first_time === value
        return (
            <button
                type="button"
                onClick={() => handleBookingInfoChange("is_first_time", value)}
                className={`border overflow-hidden flex relative flex-col justify-start items-start gap-3 rounded-sm cursor-pointer transition-all duration-300 text-heading ease-in-out md:px-6 md:py-5 p-3 w-full ${isSelected ? 'border-primary' : 'border-[#CFCFCF]'
                    }`}
            >
                <div className="flex flex-col justify-start items-start">
                    <p className="text-base font-medium">{label}</p>
                    <p className="text-sm text-[#767676]">{subLabel}</p>
                </div>
                <span className="absolute top-2 md:top-4 flex justify-center items-center right-2 md:right-4 border size-5 md:size-7 rounded-full p-1 border-primary">
                    {isSelected && (
                        <span className="md:size-3 size-1.5 block shrink-0 bg-[#B89E66] rounded-full" />
                    )}
                </span>
            </button>
        )
    }

    return (
        <div className="w-full flex flex-col justify-start items-start gap-4 md:gap-8">
            <StepTitle title="Is this your first visit to Daol Salon -Aseana?" />
            <div className="w-full flex flex-col gap-4">
                {options.map((opt) => (
                    <OptionButton key={opt.value} {...opt} />
                ))}
            </div>
        </div>
    )
}

export default Question
