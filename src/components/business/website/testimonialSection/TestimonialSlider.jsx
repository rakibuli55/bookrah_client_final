import { IoIosStar, IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import TextTruncate from "@/utils/TextTruncate";

// import required modules
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";

const TestimonialSlider = ({ slides }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <div className="relative c-xsm:pr-5">
      <Swiper
        onSwiper={setSwiperInstance}
        slidesPerView={"4"}
        spaceBetween={"24"}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper c-md:mt-12 c-xsm:mt-8"
      >
        {slides?.map((slide) => (
          <SwiperSlide key={slide?.id}>
            <div className="c-md:p-6 c-xsm:p-4 bg-testimonial-cardbg c-md:rounded-[24px] c-xsm:rounded-[12px] c-md:h-[340px]">
              <div className="flex items-center gap-1 text-[22px] text-[#FB9F33] c-md:mb-8 c-xsm:mb-4">
                {Array.from({ length: slide?.rating || 0 }).map((_, index) => (
                  <span key={index}>{<IoIosStar />}</span>
                ))}
              </div>
              <p className="c-md:text-[20px] c-xsm:text-[17px] font-bold text-heading mb-3">
                {TextTruncate(slide?.title, 10)}
              </p>
              <p>{TextTruncate(slide?.comment,20)}</p>
              <div className="c-md:mt-8 c-xsm:mt-5">
                <p className="text-heading font-medium capitalize">{slide?.commenter}</p>
                <p className="mt-1 text-paragraph">{slide?.post}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      <div className="cutom-swiper-navigation">
        <button
          className="btn-custom btn-prev"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <IoMdArrowBack />
        </button>
        <button
          className="btn-custom btn-next"
          onClick={() => swiperInstance?.slideNext()}
        >
          <IoArrowForward />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
