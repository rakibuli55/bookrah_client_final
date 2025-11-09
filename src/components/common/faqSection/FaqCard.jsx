import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqCard = ({ faq }) => {
  return (
    <AccordionItem value={`item-${faq?.id}`} className={'faq-accordion-item !border-[rgba(82,82,90,0.2)] border-opacity-20'}>
      <AccordionTrigger className={'c-sm:py-6 c-xsm:py-4 c-lg:text-[20px] c-xsm:text-base text-heading'}>{faq?.question}</AccordionTrigger>
      <AccordionContent className={`c-lg:py-5 c-lg:px-6 c-xsm:p-4 c-md:rounded-[16px] c-xsm:rounded-[12px] bg-business-hero-feature-card mb-6`}>
        <p className="c-lg:text-base c-xsm:text-sm text-paragraph">{faq?.answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqCard;
