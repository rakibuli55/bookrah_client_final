import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
    const faqData = [
        {
            id: "item-1",
            question: "What is BOOKRAH?",
            answer:
                "BOOKRAH is an online platform that connects clients with service providers, making it easy to discover and book appointments anytime, anywhere.",
        },
        {
            id: "item-2",
            question: "How do I book a service?",
            answer:
                "To book a service, browse through available service providers, select your preferred service and time slot, and complete the booking process through our platform.",
        },
        {
            id: "item-3",
            question: "Can I cancel or reschedule a booking?",
            answer:
                "Yes, you can cancel or reschedule your booking through your account dashboard. Please check the service provider's cancellation policy for any applicable fees or time restrictions.",
        },
        {
            id: "item-4",
            question: "Is my payment information safe?",
            answer:
                "Absolutely. We use industry-standard encryption and secure payment gateways to protect your payment information. Your financial data is never stored on our servers.",
        },
        {
            id: "item-5",
            question: "Do I need to create an account to book?",
            answer:
                "Yes, creating an account allows you to manage your bookings, save favorite service providers, and receive personalized recommendations.",
        },
        {
            id: "item-6",
            question: "How do service providers join BOOKRAH?",
            answer:
                "Service providers can join BOOKRAH by signing up through our business registration page, completing their profile, and submitting required verification documents.",
        },
        {
            id: "item-7",
            question: "Who do I contact if I have a problem with a booking?",
            answer:
                "If you experience any issues with your booking, you can contact our customer support team through the help center or reach out directly to the service provider through the platform's messaging system.",
        },
    ];

    // Split into two columns
    const column1 = faqData.filter((_, i) => i % 2 === 0);
    const column2 = faqData.filter((_, i) => i % 2 !== 0);

    // main render
    return (
        <div className="w-full shadow-2xs flex flex-col gap-4 justify-start p-4 lg:p-6 rounded-2xl bg-[#F9F9F9]">
            <p className=" text-xl md:text-2xl font-serif font-bold text-[#2C2C2C]">
                Frequently Asked Questions
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-14 lg:gap-y-4">
                {/* Column 1 */}
                <Accordion type="single" collapsible className="flex flex-col gap-4 lg:py-3">
                    {column1.map((faq) => (
                        <AccordionItem
                            key={faq.id}
                            value={faq.id}
                            className="border border-gray-200 rounded-xl px-4"
                        >
                            <AccordionTrigger className="text-base  font-bold hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="pt-3 text-sm text-gray-600 border-t mt-3">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                {/* Column 2 */}
                <Accordion type="single" collapsible className="flex flex-col gap-4 lg:py-3">
                    {column2.map((faq) => (
                        <AccordionItem
                            key={faq.id}
                            value={faq.id}
                            className="border border-gray-200 rounded-xl px-4"
                        >
                            <AccordionTrigger className="text-base font-bold hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="pt-3 text-sm text-gray-600 border-t mt-3">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default Faqs