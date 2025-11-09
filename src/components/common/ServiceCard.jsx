import { Star } from 'lucide-react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, isFavorite = false }) => {
  const { name, image, rating, totalReviews, location, category } = service;

  return (
    <Link to="/service/slug">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer group">
        {/* Service Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
          {
            isFavorite && (
              <div className='bg-[rgba(246,245,236,0.35)] p-3 absolute top-3 right-3 rounded-full flex justify-center items-center'>
                <FaHeart className='text-red-500' />
              </div>
            )
          }
        </div>

        {/* Service Details */}
        <div className="p-4">
          {/* Service Name */}
          <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-1">
            {name}
          </h3>

          {/* Rating and Reviews */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-gray-900 text-gray-900" />
              <span className="text-sm font-medium text-gray-900 ml-1">
                {rating}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              ({totalReviews.toLocaleString()} reviews)
            </span>
          </div>

          {/* Location */}
          <p className="text-sm text-muted line-clamp-1">{location}</p>
          <div className="mt-4">
            <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-2 py-1 rounded-full border border-gray-300">
              {category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
