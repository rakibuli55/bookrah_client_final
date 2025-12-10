import StepTitle from "../booking/StepTitle";

const AboutSalonSection = () => {
  const openingTimes = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 6:00 PM",
      additional_info: "Instant Confirmation",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "9:00 AM - 6:00 PM",
      additional_info: "",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "9:00 AM - 6:00 PM",
      additional_info: "",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 6:00 PM",
      additional_info: "",
    },
    {
      id: 5,
      day: "Friday",
      time: "9:00 AM - 6:00 PM",
      additional_info: "",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 justify-start">
      <StepTitle title={"About Salon"} />
      <p className="text-gray-700 leading-relaxed text-base c-md:mt-0 c-xsm:mt-[-10px]">
        Our salon, which has been in business for more than 20 years, is
        dedicated to enhancing both inner and outer beauty. It is our mission to
        deliver outstanding services that enhance confidence and reveal the true
        essence of beauty. In addition to using top-tier materials, we strive to
        achieve flawless styling by minimizing stress to the scalp. A natural
        and magnificent style is our main focus, consistently focusing on
        well-being and contentment.
      </p>
      {/* Location and Contact Information */}
      <div className="w-full flex flex-col gap-4">
        <div className="w-full rounded-lg overflow-hidden h-80  flex items-center justify-center">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30905.29747935455!2d121.0148709!3d14.475374749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ce67d64f5983%3A0xe77318314336bc0f!2s1700%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sbd!4v1763127863028!5m2!1sen!2sbd"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="text-gray-700 c-md:text-base c-xsm:text-sm">
          <strong>Address:</strong> SECOND FLOOR, 8912 ASEAN AVENUE, BUILDING
          ASEANA CITY, Parañaque, 1702 Metro Manila, ASEAN, Parañaque, 1702
          Metro Manila, Parañaque, Metro Manila
          <a href="#" className="text-primary font-bold hover:underline ml-2">
            Get directions
          </a>
        </p>
      </div>
      <div className="c-xl:grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        {/* LEFT COLUMN — OPENING TIMES */}
        <div className="c-xl:mb-0 c-xsm:mb-6">
          <h2 className="text-xl font-semibold mb-3 font-playfair">Opening times</h2>

          <div className="flex flex-col gap-2">
            {openingTimes.map((openingTime) => (
              <div
                key={openingTime.id}
                className="flex items-center justify-between"
              >
                {/* Day */}
                <div className="flex items-center gap-2">
                  <span className="bg-green-500 size-3 rounded-full"></span>
                  <span
                    className={`${
                      openingTime.isToday ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {openingTime.day}
                  </span>
                </div>

                {/* Time */}
                <div
                  className={`${
                    openingTime.isToday ? "font-semibold" : "font-normal"
                  }`}
                >
                  {openingTime.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — ADDITIONAL INFO */}
        <div>
          <h2 className="text-xl font-semibold mb-3 font-playfair">Additional information</h2>

          <div className="flex flex-col gap-3">
            {openingTimes.map((info) =>
              info.additional_info ? (
                <div key={info.id} className="flex items-center gap-2">
                  <span className="text-green-600 text-lg">✓</span>
                  <span>{info.additional_info}</span>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSalonSection;
