import ServiceCarousel from '@/components/common/ServiceCarousel';
import Container from '@/components/container/Container';
import {
  getNewToBookrahServices,
  getRecommendedServices,
  getServicesByLocation,
} from '@/data/mockServices';

const ServicesSection = () => {
  const servicesByLocation = getServicesByLocation();
  const recommendedServices = getRecommendedServices();
  const newToBookrahServices = getNewToBookrahServices();

  return (
    <section className="c-lg:py-[104px] c-md:py-20 c-xsm:py-[60px] bg-gray-50">
      <Container>
        <div className="c-lg:space-y-12 c-xsm:space-y-8">
          {/* By Location Section */}
          <ServiceCarousel title="By Location" services={servicesByLocation} />

          {/* Recommended Section */}
          <ServiceCarousel title="Recommended" services={recommendedServices} />

          {/* New to Bookrah Section */}
          <ServiceCarousel
            title="New to Bookrah"
            services={newToBookrahServices}
          />
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
