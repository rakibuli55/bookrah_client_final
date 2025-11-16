import ServiceCarousel from '@/components/common/ServiceCarousel';
import Container from '@/components/container/Container';
import AboutSalonSection from '@/components/customer/website/serviceDetails/AboutSalonSection';
import BookingPanel from '@/components/customer/website/serviceDetails/BookingPanel';
import ImageGallery from '@/components/customer/website/serviceDetails/ImageGallery';
import ReviewsAndRatingsSection from '@/components/customer/website/serviceDetails/ReviewsAndRatingsSection';
import SalonHeader from '@/components/customer/website/serviceDetails/SalonHeader';
import ServicesSection from '@/components/customer/website/serviceDetails/ServicesSection';
import TeamMembersSection from '@/components/customer/website/serviceDetails/TeamMembersSection';
import {
  getRecommendedServices,
  getServicesByLocation,
} from '@/data/mockServices';

const ServiceDetailsPage = () => {
  const servicesByLocation = getServicesByLocation();
  const recommendedServices = getRecommendedServices();

  return (
    <div className="bg-theme-bg">
      <Container className="mt-36 font-satoshi pb-[104px]">
        <div className="border-t border-[#D7CBBF] pt-[44px] pb-[130px]">
          <div className=" flex items-center gap-2 text-muted font-satoshi font-medium text-sm mb-7">
            <p>Home</p>
            <div className="size-1.5 rounded-full bg-muted" />
            <p>Hair Salons</p>
            <div className="size-1.5 rounded-full bg-muted" />
            <p className="text-heading">Daol Salon - Aseana</p>
          </div>
          {/* Salon Name */}
          <h1 className="font-semibold text-[44px] leading-[52px] mb-5">
            Daol Salon - Aseana
          </h1>
          {/* Salon Header */}
          <SalonHeader />
          {/* Main Content Grid */}
          <div className="w-full flex flex-col gap-12">
            {/* Image Gallery */}
            <ImageGallery />
            <div className="w-full flex gap-6 items-start justify-between">
              <div className='w-full flex flex-col gap-8 justify-start'>
                {/* Services Section */}
                <ServicesSection />
                {/* Team Members */}
                <TeamMembersSection />
                {/* Reviews & Ratings */}
                <ReviewsAndRatingsSection />
                {/* About Salon */}
                <AboutSalonSection />
              </div>
              {/* Right Column - Booking Panel */}
              <BookingPanel />
            </div>
          </div>
          {/* Bottom Carousels */}
          <div className=" w-full mt-12 space-y-12">
            <ServiceCarousel
              title="Other locations"
              services={servicesByLocation}
            />
            <ServiceCarousel
              title="Venues nearby"
              services={recommendedServices}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetailsPage;
