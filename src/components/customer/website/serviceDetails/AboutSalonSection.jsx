import Tick from "@/components/icons/Tick";
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
  ]



  return (
    <div className="w-full flex flex-col gap-6 justify-start">
      <StepTitle title={"About Salone"} />
      <p className="text-gray-700 leading-relaxed text-base">
        Our salon, which has been in business for more than 20 years, is
        dedicated to enhancing both inner and outer beauty. It is our mission
        to deliver outstanding services that enhance confidence and reveal the
        true essence of beauty. In addition to using top-tier materials, we
        strive to achieve flawless styling by minimizing stress to the scalp.
        A natural and magnificent style is our main focus, consistently
        focusing on well-being and contentment.
      </p>
      {/* Location and Contact Information */}
      <div className="w-full flex flex-col gap-4">
        <div className="w-full rounded-lg overflow-hidden h-80  flex items-center justify-center">
          <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30905.29747935455!2d121.0148709!3d14.475374749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ce67d64f5983%3A0xe77318314336bc0f!2s1700%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sbd!4v1763127863028!5m2!1sen!2sbd" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p className="text-gray-700">
          <strong>Address:</strong> SECOND FLOOR, 8912 ASEAN AVENUE,
          BUILDING ASEANA CITY, Parañaque, 1702 Metro Manila, ASEAN,
          Parañaque, 1702 Metro Manila, Parañaque, Metro Manila
          <a href="#" className="text-primary font-bold hover:underline ml-2">
            Get directions
          </a>
        </p>
      </div>

      {/* Opening Times and Additional Information */}
      <table >
        <thead>
          <tr>
            <th className="text-start text-xl pb-2 font-semibold">Opening Times</th>
            <th className="text-start text-xl pb-2 font-semibold"></th>
            <th className="text-start text-xl pb-2 font-semibold">Additional Info</th>
          </tr>
        </thead>
        <tbody className="">
          {openingTimes.map((openingTime) => (
            <tr key={openingTime.id} className="group">
              <td className="font-medium pb-1 group-hover:scale-105 transition-all ease-in-out duration-300 ">
                <div className="flex justify-start items-center gap-1">
                  <span className="bg-green-600 size-2 rounded-full block shrink-0"></span>
                  <span>{openingTime.day}</span>
                </div>
              </td>
              <td className="font-medium pb-1 group-hover:scale-105 transition-all ease-in-out duration-300 ">
                {openingTime.time}
              </td>
              <td className="font-medium pb-1 group-hover:scale-105 transition-all ease-in-out duration-300 ">
                {openingTime.additional_info}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AboutSalonSection;
