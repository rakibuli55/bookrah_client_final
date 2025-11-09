import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    category: "Hair Cut",
    name: "Haircut & Styling",
    time: "10:00-10:05 AM",
    duration: "5 mins duration",
    description:
      "Refresh and care for your skin with our professional service designed to help you look and feel your best.",
    price: 120,
    items: 2,
  },
  {
    id: 2,
    category: "Hair Cut",
    name: "Hair Wash & Styling",
    time: "10:00-10:05 AM",
    duration: "5 mins duration",
    description:
      "Refresh and care for your skin with our professional service designed to help you look and feel your best.",
    price: 120,
    items: 1,
  },
  {
    id: 3,
    category: "Hair Cut",
    name: "Childeren's Cut",
    time: "10:00-10:05 AM",
    duration: "5 mins duration",
    description:
      "Refresh and care for your skin with our professional service designed to help you look and feel your best.",
    price: 120,
    items: 1,
  },
  {
    id: 4,
    category: "Skin Care",
    name: "Facial Wash",
    time: "10:00-10:05 AM",
    duration: "5 mins duration",
    description:
      "Refresh and care for your skin with our professional service designed to help you look and feel your best.",
    price: 120,
    items: 2,
  },
  {
    id: 5,
    category: "Skin Care",
    name: "Facial Wash and makeup",
    time: "10:00-10:05 AM",
    duration: "5 mins duration",
    description:
      "Refresh and care for your skin with our professional service designed to help you look and feel your best.",
    price: 120,
    items: 1,
  },
];

const groupServices = services.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = [];
  }
  acc[service.category].push(service);
  return acc;
}, {});

const ServicesList = () => {
  return (
    <div className="py-5 px-4 bg-white rounded-[16px] mt-[26px]">
      {Object.entries(groupServices).map(
        ([category, categoryServices], index) => (
          <div key={index} className="mb-8 last:mb-0">
            {/* cat header */}
            <div className="font-satoshi">
              <h3 className="title--sm !font-bold mb-4">{category}</h3>
              {/* action button  */}
            </div>
            {/*  service lists */}
            <div className="space-y-4">
              {categoryServices?.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ServicesList;
