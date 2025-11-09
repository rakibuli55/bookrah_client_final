const TrustedByCustomer = () => {
  const images = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/portrait-beautiful-young-woman_23-2148856070.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      image:
        "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="flex items-center justify-center c-sm:gap-3 c-xsm:gap-2 c-sm:mt-8 c-xsm:mt-6">
        {/* customer images  */}
      <div className="flex items-center">
        {
            images?.map((customerImg) => (
                <img key={customerImg?.id} src={customerImg?.image} className="c-sm:w-[44px] c-sm:h-[44px] c-xsm:w-[35px] c-xsm:h-[35px] object-cover rounded-full ml-[-14px] first:ml-0 border-[2px] border-white" alt="customer-img" />
            ))
        }
      </div>
      <p className="c-lg:text-base c-xsm:text-sm text-heading !font-playfair w-[200px] c-sm:leading-[180%]">Trusted by 21,000+ happy customers worldwide</p>
    </div>
  );
};

export default TrustedByCustomer;
