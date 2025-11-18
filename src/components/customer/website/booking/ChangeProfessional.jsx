import { mockProfessionals } from '@/data/mockServices';
import React, { useState } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6';
import any_professional from '@/assets/images/any_professional.png';
import recommended_professional from '@/assets/images/ranking.png';
import { FaStar } from 'react-icons/fa';

const ChangeProfessional = ({ bookingInfo, handleBookingInfoChange }) => {
    const [isOpen, setIsOpen] = useState(false);

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
            rating: 'Top Rated',
            image: recommended_professional,
            type: 'recommended',
        },
    ];

    const toggleModal = () => setIsOpen(!isOpen);

    const selectProfessional = (professional) => {
        handleBookingInfoChange('professional', professional);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block">
            {/* Trigger Button */}
            <div
                onClick={toggleModal}
                className="flex gap-1 justify-center items-center py-0.5 px-1 rounded-full bg-white border border-[#D3D3D3] cursor-pointer select-none transition-all duration-200 hover:border-gray-400"
            >
                <img
                    src={bookingInfo?.professional?.image}
                    className="size-8 rounded-full object-cover shrink-0"
                    alt=""
                />
                <p className="text-xs line-clamp-1 text-heading font-bold px-1">
                    {bookingInfo?.professional?.name}
                </p>
                {isOpen ? (
                    <FaAngleUp size={16} className="text-gray-600" />
                ) : (
                    <FaAngleDown size={16} className="text-gray-600" />
                )}
            </div>

            {/* Animated Dropdown */}
            <div
                className={`
          absolute top-12 c-lg:left-1/2 c-xsm:left-0 c-lg:-translate-x-1/2 c-lg:w-4xl c-md:w-[340px] c-md:left-[-200px] c-lg:max-h-[600px] c-xsm:max-h-[500px] c-xsm:overflow-y-auto c-xsm:w-[325px] bg-white 
          shadow-lg rounded-xl c-lg:p-6 c-xsm:p-4 grid c-lg:grid-cols-3 c-xsm:grid-cols-1 gap-4 z-50
          transition-all duration-300 ease-out origin-top default-scrollbar
          ${isOpen
                        ? 'opacity-100 scale-y-100 translate-y-0 visible'
                        : 'opacity-0 scale-y-95 -translate-y-2 invisible'
                    }
        `}
                style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
            >
                {professionalOptions.map((professional) => {
                    const isSelected = bookingInfo.professional?.id === professional.id;

                    return (
                        <button
                            key={professional.id}
                            type="button"
                            onClick={() => selectProfessional(professional)}
                            className={`
                group relative px-5 py-14 rounded-xl bg-white w-full flex flex-col justify-center items-center
                border transition-all duration-200 ease-out
                ${isSelected
                                    ? 'border-[#B89E66] shadow-md ring-2 ring-[#B89E66]/20'
                                    : 'border-[#D3D3D3] hover:border-gray-400 hover:shadow-sm'
                                }
              `}
                        >
                            {/* Image */}
                            <div
                                className={`
                  size-24 rounded-full overflow-hidden flex justify-center items-center
                  ${professional.id === 'any' || professional.id === 'recommended'
                                        ? 'p-4 bg-[#E6E4E2]'
                                        : 'bg-white'
                                    }
                `}
                            >
                                <img
                                    src={professional.image}
                                    alt={professional.name}
                                    className={`
                    w-full h-full rounded-full transition-transform duration-200 group-hover:scale-105
                    ${professional.id === 'any' || professional.id === 'recommended'
                                            ? 'object-contain'
                                            : 'object-cover'
                                        }
                  `}
                                />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col justify-start items-center -mt-4">
                                <div className="px-2 mb-3 text-xs border border-[#E6E4E2] py-1 flex gap-0.5 items-center justify-center bg-white rounded-full">
                                    <span className="font-semibold">{professional.rating}</span>
                                    {professional.rating !== '—' && professional.rating !== 'Top Rated' && (
                                        <FaStar className="text-yellow-500" />
                                    )}
                                    {professional.rating === 'Top Rated' && (
                                        <span className="text-yellow-600 text-xs">Top Rated</span>
                                    )}
                                </div>
                                <p className="text-center text-sm font-semibold text-gray-900">
                                    {professional.name}
                                </p>
                                <p className="text-center text-xs text-[#767676]">
                                    {professional.specialization}
                                </p>
                            </div>

                            {/* Selected Checkmark */}
                            {isSelected && (
                                <span className="absolute top-4 right-4 size-7 rounded-full p-1 bg-[#B89E66] flex items-center justify-center shadow-sm">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Backdrop (optional) */}
            {isOpen && (
                <div
                    className="fixed inset-0 -z-10"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default ChangeProfessional;