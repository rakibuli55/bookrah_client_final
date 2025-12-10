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