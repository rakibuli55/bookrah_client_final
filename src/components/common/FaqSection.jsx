import { Accordion } from "@/components/ui/accordion";
import Container from "../container/Container";
import SectionTitle from "./SectionTitle";
import FaqCard from "./faqSection/FaqCard";
const FaqSection = () => {
  const faqData = [
    {
      id: 1,
      question: "What is BOOKRAH?",
      answer:
        "BOOKRAH is an online platform that connects clients with service providers, making it easy to discover and book appointments anytime, anywhere.",
    },
    {
      id: 2,
      question: "How do I book a service?",
      answer:
        "To book a service, browse through available service providers, select your preferred service and time slot, and complete the booking process through our platform.",
    },
    {
      id: 3,
      question: "Can I cancel or reschedule a booking?",
      answer:
        "Yes, you can cancel or reschedule your booking through your account dashboard. Please check the service provider's cancellation policy for any applicable fees or time restrictions.",
    },
    {
      id: 4,
      question: "Is my payment information safe?",
      answer:
        "Absolutely. We use industry-standard encryption and secure payment gateways to protect your payment information. Your financial data is never stored on our servers.",
    },
    {
      id: 5,
      question: "Do I need to create an account to book?",
      answer:
        "Yes, creating an account allows you to manage your bookings, save favorite service providers, and receive personalized recommendations.",
    },
    {
      id: 6,
      question: "How do service providers join BOOKRAH?",
      answer:
        "Service providers can join BOOKRAH by signing up through our business registration page, completing their profile, and submitting required verification documents.",
    },
    {
      id: 7,
      question: "Who do I contact if I have a problem with a booking?",
      answer:
        "If you experience any issues with your booking, you can contact our customer support team through the help center or reach out directly to the service provider through the platform's messaging system.",
    },
  ];
  return (
    <section className="c-lg:py-[104px] c-md:py-20 c-xsm:py-[60px]" id="faq-section">
      <Container>
        {/* title  */}
        <SectionTitle
          subTitle={"FAQs and Instant Answer"}
          title={"Frequently Asked Questions"}
          className={"text-center"}
        />

        {/* accordions  */}
        <Accordion
          type="single"
          collapsible
          className="c-lg:w-[805px] mx-auto c-sm:mt-8 c-xsm:mt-3"
          defaultValue="item-1"
        >
            {
                faqData?.map((faq) => (
                    <FaqCard key={faq?.id} faq={faq} />
                ))
            }
        </Accordion>
      </Container>
    </section>
  );
};

export default FaqSection;
