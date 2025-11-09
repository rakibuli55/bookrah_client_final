import { Star } from 'lucide-react';

const ReviewsAndRatingsSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'Rosie R',
      date: 'Today at 5:26 PM',
      rating: 5,
      text: 'Great service and friendly staff! My hair turned out lighter than expected but still soft and manageable. The stylist was very professional and listened to what I wanted.',
      avatar: 'R',
      hasImage: false,
    },
    {
      id: 2,
      name: 'Dorothy Jane D',
      date: 'Thu, Sep 11, 2025 at 6:18 PM',
      rating: 5,
      text: 'Ms. Ella really did a great job giving me the haircut that I want. This is the second time I had my hair cut here and I am very satisfied with the service.',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0',
      hasImage: true,
    },
    {
      id: 3,
      name: 'Millet A',
      date: 'Thu, Sep 4, 2025 at 7:46 AM',
      rating: 5,
      text: 'Staff is very warm and accommodating. James did style my hair according to the shape of my face and I love the result. Will definitely come back!',
      avatar: 'M',
      hasImage: false,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Reviews & Ratings</h2>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-gray-900">4.9 (350)</span>
          <div className="flex">{renderStars(5)}</div>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-200 pb-6 last:border-b-0"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="flex-shrink-0">
                {review.hasImage ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-700">
                      {review.avatar}
                    </span>
                  </div>
                )}
              </div>

              {/* Review Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {renderStars(review.rating)}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {review.text}
                  <span className="text-blue-600 hover:underline cursor-pointer ml-1">
                    ...Read more
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 px-6 py-2 bg-[#D7CBBF] text-gray-800 font-medium rounded-md hover:bg-[#C4B5A8] transition-colors">
        See All
      </button>
    </div>
  );
};

export default ReviewsAndRatingsSection;
