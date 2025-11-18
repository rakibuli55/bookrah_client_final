import { Star } from 'lucide-react';
import StepTitle from '../booking/StepTitle';
import StarRating from '@/components/common/StartRating';

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
  // main render
  return (
    <div className="w-full c-md:gap-6 c-xsm:gap-3 flex flex-col justify-start items-start pb-10 border-b border-primary">
      {/** Step title */}
      <div className="c-md:flex w-full gap-4 items-center justify-between ">
        {/** Step title */}
        <StepTitle title={'Reviews & Ratings'} />
        <div className='flex c-md:justify-end items-center gap-1 font-bold c-md:text-base c-xsm:text-sm c-md:mt-0 c-xsm:mt-2'>
          <span>4.9</span>
          <span className='text-primary'>(350)</span>
          <StarRating rating={4.9} />
        </div>
      </div>
      {/** Reviews */}
      <div className="w-full mt-4 c-lg:grid grid-cols-2 c-xxl:gap-x-20 c-lg:gap-x-10 c-md:gap-x-8 gap-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0 c-lg:mt-0 c-xsm:mt-5">
            <div className="flex flex-col w-full items-start gap-3">
              {/* Avatar */}
              <div className="w-full flex justify-start items-start gap-2">
                {review.hasImage ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 border shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 shrink-0 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-700">
                      {review.avatar}
                    </span>
                  </div>
                )}
                <div className="flex w-full flex-col ">
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
              {/* Review Content */}
              <StarRating rating={review.rating} />
              <p className="text-gray-700 leading-relaxed">
                {review.text}
                <span className="text-primary font-bold hover:underline cursor-pointer ml-1">
                  ...Read more
                </span>
              </p>
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

export default ReviewsAndRatingsSection;
