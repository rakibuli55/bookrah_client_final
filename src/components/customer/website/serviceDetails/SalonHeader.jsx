import { Clock, Heart, MapPin, Share2, Star } from 'lucide-react';

const SalonHeader = () => {
  return (
    <div className="flex items-start justify-between mb-8">
      {/* Left side - Salon info */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">4.9</span>
            <span className="text-sm text-gray-500">★★★★★ (350)</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">
            Closed - opens on Thursday at 10:00 AM
          </span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">
            Parañaque, 1702 Metro Manila, Parañaque
          </span>
          <button className="text-sm text-blue-600 hover:underline">
            Get directions
          </button>
        </div>
      </div>

      {/* Right side - Action buttons */}
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
          <Share2 className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default SalonHeader;
