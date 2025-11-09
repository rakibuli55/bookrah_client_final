import DashCommonWrapper from "@/components/business/dashboard/common/DashCommonWrapper";
import ServicesHeader from "@/components/business/dashboard/servicesPage/ServicesHeader";
import ServicesList from "@/components/business/dashboard/servicesPage/ServicesList";

const ServicesPage = () => {
  return (
    <div>
      <DashCommonWrapper>
        {/* service header  */}
        <ServicesHeader />
        {/* service list  */}
        <ServicesList />
      </DashCommonWrapper>
    </div>
  );
};

export default ServicesPage;
