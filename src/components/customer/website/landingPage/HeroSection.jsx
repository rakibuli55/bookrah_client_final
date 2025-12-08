'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination'; // ← Add this

import Container from '@/components/container/Container';
import SearchBar from './heroSection/SearchBar';
import slide2 from "../../../../assets/images/hero-slide-2.jpg"
import slide3 from "../../../../assets/images/hero-slide-3.jpg"

const backgrounds = [
  'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=1170&auto=format&fit=crop',
  slide2,
  slide3,
];

const HeroSection = () => {
  return (
    <section className="relative c-lg:h-[95svh] c-xsm:h-auto c-md:py-20 c-xsm:pb-16 c-xsm:pt-11 bg-black">
      {/* Swiper Background */}
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]} // ← Add Pagination
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1500}
          loop={true}
          allowTouchMove={false}
          pagination={{
            clickable: true,
            
          }}
          className="h-full w-full hero-slider"
        >
          {backgrounds.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${src})`,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content */}
      <Container className="relative h-full flex flex-col justify-center pt-10 z-20">
        <div className="c-lg:space-y-14 c-xsm:space-y-8">
          <div className="space-y-6 text-white max-w-2xl 2xl:max-w-6xl">
            <h1 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-playfair font-semibold c-md:leading-[162%] tracking-[-2%]">
              Book your next beauty or wellness experience — in seconds
            </h1>

            <p className="c-lg:text-xl c-md:leading-[170%] tracking-[-2%] max-w-2xl font-satoshi text-gray-200">
              Discover handpicked salons, barbers, and spas across your favorite destinations.
              Enjoy exclusive deals, fast booking, and 24/7 support.
            </p>
          </div>

          <div className="max-w-6xl">
            <SearchBar />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;