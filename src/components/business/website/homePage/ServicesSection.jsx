import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/container/Container";
import ServiceCard from "./serviceSection/ServiceCard";

const ServicesSection = () => {
  const allServices = [
    {
      id: 1,
      name: "Hair & Styling",
      image:
        "https://plus.unsplash.com/premium_photo-1669675936197-e06a30857ac3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "/business/hair-styling",
    },
    {
      id: 2,
      name: "Barbering",
      image:
        "https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "/business/barbering",
    },
    {
      id: 3,
      name: "Nails",
      image:
        "https://images.unsplash.com/photo-1690749138086-7422f71dc159?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "/business/nails",
    },
    {
      id: 4,
      name: "Eyebrows & Lashes",
      image:
        "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "/business/eyebrows-lashes",
    },
    {
      id: 5,
      name: "Hair Removal",
      image:
        "https://images.pexels.com/photos/9468564/pexels-photo-9468564.jpeg",
      path: "/business/hair-removal",
    },
    {
      id: 6,
      name: "Facials & Skincare",
      image:
        "https://plus.unsplash.com/premium_photo-1679750866818-50ae796e60db?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "/business/facials-skincare",
    },
    {
      id: 7,
      name: "Makeup",
      image:
        "https://images.unsplash.com/photo-1733145818828-645fc7499ca5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "/business/makeup",
    },
    {
      id: 8,
      name: "Massage",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "/business/massage",
    },
    {
      id: 9,
      name: "Spa & Wellness",
      image:
        "https://images.unsplash.com/photo-1630595271375-5073a6c0638b?q=80&w=1152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "/business/spa-wellness",
    },
    {
      id: 10,
      name: "Medical",
      image:
        "https://plus.unsplash.com/premium_photo-1674841252391-efd5fe8266d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "/business/medical",
    },
    {
      id: 11,
      name: "Fitness & Recovery",
      image:
        "https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "/business/fitness-recovery",
    },
    {
      id: 12,
      name: "Tattoo & Piercing",
      image:
        "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "/business/tattoo-piercing",
    },
    {
      id: 13,
      name: "Pet Grooming",
      image:
        "https://plus.unsplash.com/premium_photo-1663036401821-d60fe33f066f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "/business/pet-grooming",
    },
    {
      id: 14,
      name: "Tanning Studio",
      image:
        "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1083&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "/business/tanning-studio",
    },
  ];

  return (
    <section className="py-[104px] c-md:py-20 c-xsm:py-[60px] all-services-section">
      <Container>
        {/* title  */}
        <SectionTitle
          subTitle={"services"}
          title={"One platform, infinite possibilities"}
          desc={
            "Everything you need to grow and thrive. Fresha is packed with tools to boost sales, manage your calendar, and retain clients, so you can focus on what you do best."
          }
          btnText={"Book Now"}
          btnPath={"/"}
          className={"text-center"}
          isCenterDesc={true}
        />
        <div className="grid c-lg:grid-cols-3 c-xxl:gap-8 c-lg:gap-4 c-md:grid-cols-3 c-xsm:gap-3 c-md:mt-[55px] c-xsm:mt-10">
          {/* services  */}
          {allServices?.map((service) => (
            <ServiceCard key={service?.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
