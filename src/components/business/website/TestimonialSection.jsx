import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/container/Container";
import TestimonialSlider from "./testimonialSection/TestimonialSlider";

const TestimonialSection = () => {
  const testimonials = [
  {
    id: 1,
    rating: 5,
    title: "A luxury experience for both our team and our clients.",
    comment:
      "Bookrah has elevated the way we operate. The interface is elegant, intuitive, and the premium booking flow is instantly noticeable to clients.",
    commenter: "Aisha Rahman",
    post: "Salon Owner — Riyadh",
  },
  {
    id: 2,
    rating: 5,
    title: "The booking flow feels seamless, modern, and beautifully polished.",
    comment:
      "Clients often praise how smooth the online booking is. Bookrah reflects the exact level of quality we want to represent.",
    commenter: "Karim Al Harbi",
    post: "Barber & Studio Manager — Jeddah",
  },
  {
    id: 3,
    rating: 5,
    title: "Bookrah brought structure and efficiency to our entire workflow.",
    comment:
      "Managing a large team is now effortless. Each stylist controls their schedule while everything stays perfectly organized in one place.",
    commenter: "Leila S.",
    post: "Spa Director — Dubai",
  },
  {
    id: 4,
    rating: 5,
    title: "Our no-show rate dropped dramatically thanks to Bookrah’s automated reminders.",
    comment:
      "The SMS and email notifications feel personal, professional, and consistently on-brand.",
    commenter: "Hanan Al Mutairi",
    post: "Lashes & Brow Studio Owner — Riyadh",
  },
  {
    id: 5,
    rating: 5,
    title: "Visually stunning, exceptionally intuitive — Bookrah is a next-level system.",
    comment:
      "Even our clients mention how luxurious the booking experience feels compared to others.",
    commenter: "Omar Ben youssef",
    post: "Founder & Grooming Specialist — Casablanca",
  },
  {
    id: 6,
    rating: 5,
    title: "A polished system with powerful tools and outstanding support.",
    comment:
      "Setup was effortless, the features are premium, and the support team is truly exceptional.",
    commenter: "Rawan Al-Jasser",
    post: "Studio Manager — Dammam",
  },
];

  return (
    <section className="c-lg:py-[104px] c-md:pt-20 c-md:pb-10 c-xsm:pt-[60px] c-xsm:pb-5">
      <Container className={'relative'}>
        {/* title  */}
        <SectionTitle
          title={"Top-rated by the industry"}
          desc={
            "Being the world's most-loved platform doesn't happen by accident. Our dedication to building the best-in-class booking software and delivering exceptional customer experience continues to be recognised in the industry time and time again."
          }
          className={"text-center"}
          isCenterDesc={true}
        />
      </Container>
      <div className="testimonial-slider-wrapper">
        <TestimonialSlider slides={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialSection;
