import { ChevronDown, Clock, MapPin, Star } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const BookingPanel = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const handleBooking = () => {
    navigate(`/service/${slug}/booking`)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-4">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Daol Salon - Aseana
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        </div>
        <span className="text-sm font-medium text-gray-700 ml-1">
          4.9 (350)
        </span>
      </div>

      {/* Book now button */}
      <button type="button" onClick={handleBooking} className="w-full cursor-pointer bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors mb-6">
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
      <div>
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-gray-600 leading-relaxed">
              SECOND FLOOR, 8912 ASEAN AVENUE, BUILDING ASEANA CITY, Parañaque,
              1702 Metro Manila, ASEANA, Parañaque, 1702 Metro Manila,
              Parañaque, Metro Manila
            </p>
            <button className="text-sm text-blue-600 hover:underline mt-1">
              Get directions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPanel;
