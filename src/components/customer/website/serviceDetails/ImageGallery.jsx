import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

const ImageGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop',
      alt: 'Modern luxury salon interior with white chairs and marble floor',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?q=80&w=1200&auto=format&fit=crop',
      alt: 'Stylish black salon chairs with ambient lighting',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop',
      alt: 'Elegant salon reception with gold accents and plush seating',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=1200&auto=format&fit=crop',
      alt: 'Minimalist salon station with large mirror and LED lighting',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1620332377425-48ff6080b2d8?q=80&w=1200&auto=format&fit=crop',
      alt: 'Hair washing area with comfortable reclining chairs',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1611143669185-af5f9107caba?q=80&w=1200&auto=format&fit=crop',
      alt: 'Barber shop corner with vintage leather chair and tools',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=1200&auto=format&fit=crop',
      alt: 'Spa-like salon with plants, wood tones, and soft lighting',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1621607512214-6829748016eb?q=80&w=1200&auto=format&fit=crop',
      alt: 'Nail salon station with organized polishes and modern lamps',
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      alt: 'Premium salon lounge with velvet sofa and coffee table',
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1580618672591-e8d1b14c6e07?q=80&w=1200&auto=format&fit=crop',
      alt: 'Hair color mixing station with professional products',
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1595475889360-78d8b5f9b7f7?q=80&w=1200&auto=format&fit=crop',
      alt: 'Outdoor salon patio with greenery and cozy seating',
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1631214439131-67d2b0f43a1c?q=80&w=1200&auto=format&fit=crop',
      alt: 'Close-up of stylist tools: scissors, combs, and brushes',
    },
  ];

  return (
    <div className="w-full c-lg:h-[580px] c-xsm:h-full c-lg:overflow-hidden c-lg:flex justify-between items-start gap-6">

      {/* Main Large Slider */}
      <div className="c-lg:w-[70%] c-xsm:w-full c-lg:h-full c-xsm:h-[250px]">
        <Swiper
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs]}
          className="h-full w-full"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="w-full h-full relative rounded-lg overflow-hidden cursor-pointer group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover rounded-lg w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-30 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Slider (2 per view, vertical) */}
      <div className="c-lg:w-[30%] h-full c-lg:block c-xsm:hidden">
        <Swiper
          onSwiper={setThumbsSwiper}
          direction="vertical"
          slidesPerView={2}
          spaceBetween={24}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="h-full w-full"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className=" w-full h-full relative rounded-lg overflow-hidden cursor-pointer group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover rounded-lg w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageGallery;