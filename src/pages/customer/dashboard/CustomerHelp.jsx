import Faqs from "@/components/customer/dashboard/Faqs";
import LiveChat from "@/components/customer/dashboard/LiveChat";

const CustomerHelp = () => {

    return (
        <div className="w-full flex flex-col justify-start gap-4 lg:gap-10">
            {/* faqs */}
            <Faqs />
            {/* contact us and live chat */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                {/* contact us */}
                <div className="w-full py-8 md:py-16 c-xsm:py-5 rounded-2xl px-6 flex flex-col justify-center items-center bg-white border border-[#D7CBBF] shadow-primary ">
                    <p className="md:text-3xl text-2xl text-center font-bold">Still have a question?</p>
                    <p className="md:text-lg tex-base py-2  text-center text-paragraph font-medium">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. </p>
                    <button className="w-full mt-2 max-w-[470px] text-center c-md:p-4 c-xsm:p-[10px] text-heading rounded-xl bg-primary">
                        Contact us
                    </button>
                </div>
                {/* live chat */}
                <LiveChat />
            </div>
        </div>
    );
};

export default CustomerHelp;
