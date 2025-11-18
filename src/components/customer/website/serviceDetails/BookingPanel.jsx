import StarRating from '@/components/common/StartRating';
import { ChevronDown, Clock, MapPin, Star } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const BookingPanel = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const handleBooking = () => {
    navigate(`/service/${slug}/booking`)
  }

  // main render
  return (
    <div className="bg-white rounded-lg border c-lg:w-[450px] shrink-0 font-satoshi border-gray-200 c-md:p-6 c-xsm:p-4 sticky top-4 c-lg:mt-0 c-xsm:mt-7">
      <h3 className="text-xl font-bold text-gray-900 c-md:mb-4 c-xsm:mb-2">
        Daol Salon - Aseana
      </h3>
      {/* Rating */}
      <div className="flex items-center font-semibold gap-1 mb-4">
        <StarRating className='c-md:text-xl' rating={4.9} />
        <span className="text-base  text-gray-700 ml-1">
          4.9
        </span>
        <span className='text-primary'>(350)</span>
      </div>
      {/* Book now button */}
      <button type="button" onClick={handleBooking} className="w-full cursor-pointer bg-primary text-gray-900 c-md:py-3 c-xsm:py-2 rounded-lg font-semibold hover:opacity-90 transition-colors mb-6">
        Book now
      </button>
      {/* Operating hours */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">
            Closed - opens on Thursday at 10:00 AM
          </span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
      {/* Location */}
      <div className="flex items-start gap-2">
        <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm text-gray-600 leading-relaxed">
            SECOND FLOOR, 8912 ASEAN AVENUE, BUILDING ASEANA CITY, Parañaque,
            1702 Metro Manila, ASEANA, Parañaque, 1702 Metro Manila,
            Parañaque, Metro Manila
          </p>
          <button className="text-sm text-primary font-semibold hover:underline mt-1">
            Get directions
          </button>
        </div>
      </div>

    </div>
  );
};

export default BookingPanel;
