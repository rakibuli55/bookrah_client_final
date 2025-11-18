import Container from "@/components/container/Container"
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import Services from "@/components/customer/website/booking/Services";
import Professional from "@/components/customer/website/booking/Professional";
import Time from "@/components/customer/website/booking/Time";
import Confirm from "@/components/customer/website/booking/Confirm";
import Header from "@/components/customer/website/booking/Header";
import serviceImage from '../../assets/images/about-hero.png'
import StarRating from "@/components/common/StartRating";
import Question from "@/components/customer/website/booking/Question";
import { FaCalendarAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
const BookService = () => {
    // step form 
    const [step, setStep] = useState(0);
    const totalSteps = 5;
    // user booking info
    const [bookingInfo, setBookingInfo] = useState({
        service: null,
        professional: null,
        time: null,
        date: null,
        booking_note: null,
        is_first_time: true,
    });
    // one single handler to update booking info receives field and value an 
    const handleBookingInfoChange = (field, value) => {
        setBookingInfo((prev) => ({
            ...prev,
            [field]: value,
        }));
    }
    //  console.log("Booking info", bookingInfo);
    // next
    const handleNext = () => {
        if (step < totalSteps - 1) {
            setStep((prev) => prev + 1);
        }
    };
    // previous
    const handlePrev = () => {
        if (step > 0) {
            setStep((prev) => prev - 1);
        }
    };
    // Render booking steps
    const renderStep = (step) => {
        switch (step) {
            case 0:
                return <Services bookingInfo={bookingInfo} handleBookingInfoChange={handleBookingInfoChange} />;
            case 1:
                return <Professional bookingInfo={bookingInfo} handleBookingInfoChange={handleBookingInfoChange} />;
            case 2:
                return <Time bookingInfo={bookingInfo} handleBookingInfoChange={handleBookingInfoChange} />;
            case 3:
                return <Question bookingInfo={bookingInfo} handleBookingInfoChange={handleBookingInfoChange} />;
            case 4:
                return <Confirm bookingInfo={bookingInfo} handleBookingInfoChange={handleBookingInfoChange} />;

            default:
                return null;
        }
    };
    // hamburger menu state
    const hamburgers = ["Services", "Professional", "Time", "Question", "Confirm"];

    return (
        <div className="bg-theme-bg">
            <Container className="c-xxl:pb-[180px] c-lg:pb-[100px] c-xsm:pb-[60px] pt-3 sm:pt-8">
                {/* header */}
                <Header step={step} setStep={setStep} handlePrev={handlePrev} />
                {/* booking hamburger */}
                <div className="sm:mt-11 sm:mb-3.5 my-4 gap-2 flex font-semibold items-center c-md:mt-0 c-xsm:mt-6">
                    {hamburgers.map((item, index) => (
                        <div key={index} className={`flex items-center justify-center gap-1 text-xs sm:text-sm font-medium ${index === step ? 'text-heading' : 'text-[#ACACAC]'}`}>
                            <span>{item}</span>
                            {index < hamburgers.length - 1 && (
                                <FaAngleRight />
                            )}
                        </div>
                    ))}
                </div>
                {/* booking steps and sidebar */}
                <div className="w-full flex lg:flex-row flex-col justify-between items-start gap-6">
                    {/* booking steps */}
                    <div className="w-full">
                        {renderStep(step)}
                    </div>
                    {/* summery */}
                    <div className="xl:w-[450px] lg:w-96 w-full shrink-0 border border-[#E5E5E5] bg-[#F9F9F9] lg:p-6 p-4 rounded-lg flex flex-col md:gap-6 gap-4 justify-start">
                        {/* booking details */}
                        <div className="flex flex-col justify-start items-start gap-4">
                            <div className="flex justify-start gap-4 items-start">
                                <img src={serviceImage} alt="service" className="size-16 shrink-0 rounded-lg object-cover" />
                                <div>
                                    <p className="font-semibold text-base text-heading">Daol Salon - Aseana</p>
                                    <div className="flex justify-start items-center text-xs font-bold">
                                        <span className="mr-1">4.9</span>
                                        <StarRating rating={4.9} />
                                        <span className="text-sm text-[#767676] ml-1">(350)</span>
                                    </div>
                                    <p className="text-xs text-[#767676] mt-1">SECOND FLOOR, 8912 ASEAN AVENUE, BUIL…</p>
                                </div>
                            </div>
                            {/* time and info */}
                            <div className="w-full md:mt-3 flex flex-col justify-between items-start gap-3 ">
                                <div className="flex justify-start items-center gap-1">
                                    <FaCalendarAlt className="shrink-0" />
                                    <span className="text-[#767676] text-xs">Saturday, September 20</span>
                                </div>
                                <div className="flex justify-start items-center gap-1">
                                    <IoTimeOutline className="shrink-0" />
                                    <span className="text-[#767676] text-xs">10:00-10:05 AM (5 mins duration)</span>
                                </div>
                            </div>
                            {/* booking infos */}
                            {bookingInfo.service && (
                                <div className="w-full flex justify-between items-start gap-3 mt-3 md:mt-8">
                                    <div className="flex flex-col justify-start gap-1">
                                        <p className="text-heading text-base font-bold">{bookingInfo?.service?.name || ''}</p>
                                        <p className="text-[#767676]">{bookingInfo?.service?.duration || ''} with {bookingInfo?.professional?.name} {bookingInfo?.professional?.specialization}</p>
                                    </div>
                                    <p className="shrink-0 font-bold">₱{bookingInfo?.service?.price || 0}</p>
                                </div>
                            )}
                            {/* separator */}
                            <div className="w-full border-t md:mt-14 mt-3 border-[#E5E5E5]" />
                            {/* booking info total */}
                            <div className="flex w-full text-base font-semibold text-black justify-between items-center gap-2">
                                <span>Total</span>
                                <span>₱{bookingInfo.service?.price || 0 + bookingInfo.professional?.price || 0}</span>
                            </div>
                        </div>
                        {/* total and button */}
                        <button onClick={handleNext} className="w-full cursor-pointer disabled:opacity-50 disabled:bg-primary/50 bg-primary rounded-xl p-3 text-heading font-medium">
                            {step === totalSteps - 1 ? 'Confirm Booking' : 'Continue'}
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BookService