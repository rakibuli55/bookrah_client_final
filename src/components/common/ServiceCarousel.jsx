import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ServiceCard from './ServiceCard';

const ServiceCarousel = ({ title, services }) => {
  return (
    <div className="c-lg:mb-12">
      {/* Section Title */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="c-lg:text-2xl c-xsm:text-[20px] font-bold text-gray-900">{title}</h2>
        {/* Custom navigation buttons */}
        {/* <div className="flex items-center gap-2">
          <button className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div> */}
      </div>

      {/* Carousel */}
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {services.map((service) => (
            <CarouselItem
              key={service.id}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <ServiceCard service={service} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex c-4xl:-left-12 c-xsm:-left-4" />
        <CarouselNext className="hidden md:flex c-4xl:-right-12 c-xsm:-right-4" />
      </Carousel>
    </div>
  );
};

export default ServiceCarousel;
