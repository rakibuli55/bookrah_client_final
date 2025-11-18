import StarRating from "@/components/common/StartRating";
import { Clock, Heart, MapPin, Share2, Star } from "lucide-react";

const SalonHeader = () => {
  return (
    <div className="w-full font-medium c-lg:flex items-start justify-between mb-8">
      {/* Left side - Salon info */}
      <div className="w-full c-lg:flex c-xl:gap-3 c-lg:gap-[5px] justify-start items-center">
        <div className="flex items-center gap-2 c-lg:mt-0 c-xsm:mt-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">4.9</span>
            <StarRating rating={4.9} />
            <span className="text-primary ">(350)</span>
          </div>
        </div>

        <div className="flex items-center gap-2  c-lg:mt-0 c-xsm:mt-3">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">
            Closed - opens on Thursday at 10:00 AM
          </span>
        </div>
        <div className="c-md:flex items-center gap-2 c-lg:mt-0 c-xsm:mt-3">
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <MapPin size={18} className=" text-gray-500" />
            Parañaque, 1702 Metro Manila, Parañaque
          </span>
          <button className="text-sm text-primary cursor-pointer hover:underline c-md:mt-0 c-xsm:mt-3">
            Get directions
          </button>
        </div>
      </div>

      {/* Right side - Action buttons */}
      <div className="flex shrink-0 items-center gap-3 c-lg:mt-0 c-xsm:mt-3">
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
