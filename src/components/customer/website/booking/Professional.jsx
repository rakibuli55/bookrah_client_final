import { mockProfessionals } from '@/data/mockServices'
import React from 'react'
import StepTitle from './StepTitle'
import any_professional from '@/assets/images/any_professional.png'
import recommended_professional from '@/assets/images/ranking.png'
import { FaStar } from 'react-icons/fa6'

const Professional = ({ bookingInfo, handleBookingInfoChange }) => {
    // create local combined list
    const professionalOptions = [
        {
            id: 'any',
            name: 'Any Professional',
            specialization: 'No preference',
            rating: '—',
            image: any_professional,
            type: 'any',
        },
        ...mockProfessionals,
        {
            id: 'recommended',
            name: 'Recommended Professional',
            specialization: 'Top rated by system',
            rating: '⭐',
            image: recommended_professional,
            type: 'recommended',
        },
    ]

    return (
        <div className="w-full flex flex-col justify-start items-start c-md:gap-8 c-xsm:gap-6">
            {/* Step title */}
            <StepTitle title={'Select Professional'} />

            {/* Professional List */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 md:h-auto c-lg:h-[500px] overflow-y-auto pr-2 2xl:grid-cols-3 gap-4 md:gap-6">
                {professionalOptions.map((professional) => (
                    <button
                        key={professional.id}
                        type="button"
                        onClick={() => handleBookingInfoChange('professional', professional)}
                        className={`px-5 py-14 transition-all duration-150 ease-in-out rounded-xl relative bg-white w-full flex flex-col justify-center hover:shadow-2xs cursor-pointer items-center ${bookingInfo.professional?.id === professional.id
                            ? 'border-primary border'
                            : 'border-transparent border'
                            }`}
                    >
                        {/* Image */}
                        <div className={`size-24 rounded-full overflow-hidden flex justify-center items-center  ${professional.id === 'any' || professional.id === 'recommended' ? 'p-4 bg-[#E6E4E2]' : 'bg-white'} `}>
                            <img
                                src={professional.image}
                                alt={professional.name}
                                className={`w-full h-full ${professional.id === 'any' || professional.id === 'recommended' ? 'object-contain' : 'object-cover'} rounded-full`}
                            />
                        </div>

                        {/* Info */}
                        <div className="flex -mt-4 flex-col justify-start items-center">
                            <div className="px-2 w-fit mb-3 text-xs border border-[#E6E4E2] py-1 flex gap-0.5 items-center justify-center bg-white rounded-full">
                                <span className="font-semibold">{professional.rating}</span>
                                {professional.rating !== '—' && <FaStar className="text-black" />}
                            </div>
                            <p className="text-center text-sm font-semibold">{professional.name}</p>
                            <p className="text-center text-xs text-[#767676]">{professional.specialization}</p>
                        </div>

                        {/* Selected Icon */}
                        <span className="absolute top-4 flex justify-center items-center right-4 border size-7 rounded-full p-1 border-primary">
                            {bookingInfo.professional?.id === professional.id && (
                                <span className="size-3 block shrink-0 bg-[#B89E66] rounded-full" />
                            )}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Professional
