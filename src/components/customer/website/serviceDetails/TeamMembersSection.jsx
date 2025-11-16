import { mockProfessionals } from "@/data/mockServices";
import StepTitle from "../booking/StepTitle";
import { Star } from 'lucide-react';
import { FaStar } from "react-icons/fa";

const TeamMembersSection = () => {
  // create local combined list
  const teamMembers = [
    ...mockProfessionals,
  ]

  return (
    <div className="w-full border-t border-b border-primary py-10 gap-6 flex flex-col justify-start items-start">
      {/** Step title */}
      <StepTitle title={'Team Members'} />
      <div className="grid w-full grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 my-6">
        {teamMembers.map((professional) => (
          <div
            key={professional.id}
            className={`transition-all duration-150 ease-in-out rounded-xl relative  w-full flex flex-col justify-center hover:shadow-2xs cursor-pointer items-center `}
          >
            {/* Image */}
            <div className={`c-md:size-24 c-xsm:size-20 rounded-full overflow-hidden flex justify-center items-center  ${professional.id === 'any' || professional.id === 'recommended' ? 'p-4 bg-[#E6E4E2]' : 'bg-white'} `}>
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
          </div>
        ))}
      </div>
      {/** See all button */}
      <button className="px-6 py-2 bg-primary text-black font-semibold cursor-pointer rounded-full">
        See All
      </button>
    </div>
  );
};

export default TeamMembersSection;
