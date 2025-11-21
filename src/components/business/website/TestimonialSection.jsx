import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/container/Container";
import TestimonialSlider from "./testimonialSection/TestimonialSlider";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      title: "Bookrah is so easy to manage my team",
      comment:
        "I work with booth renters at my top-rated salon in Manhattan, New York City. I love Bookrah because it offers my clients a professional appointment booking experience with seamless online booking features, automated reminder emails",
      commenter: "Michael Brown",
      post: "Salon owner, NYC",
    },
    {
      id: 2,
      rating: 5,
      title: "Bookrah is so easy to manage my team",
      comment:
        "I work with booth renters at my top-rated salon in Manhattan, New York City. I love Bookrah because it offers my clients a professional appointment booking experience with seamless online booking features, automated reminder emails",
      commenter: "Michael Brown",
      post: "Salon owner, NYC",
    },
    {
      id: 3,
      rating: 5,
      title: "Bookrah is so easy to manage my team",
      comment:
        "I work with booth renters at my top-rated salon in Manhattan, New York City. I love Bookrah because it offers my clients a professional appointment booking experience with seamless online booking features, automated reminder emails",
      commenter: "Michael Brown",
      post: "Salon owner, NYC",
    },
    {
      id: 4,
      rating: 5,
      title: "Bookrah is so easy to manage my team",
      comment:
        "I work with booth renters at my top-rated salon in Manhattan, New York City. I love Bookrah because it offers my clients a professional appointment booking experience with seamless online booking features, automated reminder emails",
      commenter: "Michael Brown",
      post: "Salon owner, NYC",
    },
    {
      id: 5,
      rating: 5,
      title: "Bookrah is so easy to manage my team",
      comment:
        "I work with booth renters at my top-rated salon in Manhattan, New York City. I love Bookrah because it offers my clients a professional appointment booking experience with seamless online booking features, automated reminder emails",
      commenter: "Michael Brown",
      post: "Salon owner, NYC",
    },
    {
      id: 6,
      rating: 5,
      title: "Bookrah is so easy to manage my team",
      comment:
        "I work with booth renters at my top-rated salon in Manhattan, New York City. I love Bookrah because it offers my clients a professional appointment booking experience with seamless online booking features, automated reminder emails",
      commenter: "Michael Brown",
      post: "Salon owner, NYC",
    },
    {
      id: 7,
      rating: 5,
      title: "Bookrah is so easy to manage my team",
      comment:
        "I work with booth renters at my top-rated salon in Manhattan, New York City. I love Bookrah because it offers my clients a professional appointment booking experience with seamless online booking features, automated reminder emails",
      commenter: "Michael Brown",
      post: "Salon owner, NYC",
    },
    {
      id: 8,
      rating: 5,
      title: "Bookrah is so easy to manage my team",
      comment:
        "I work with booth renters at my top-rated salon in Manhattan, New York City. I love Bookrah because it offers my clients a professional appointment booking experience with seamless online booking features, automated reminder emails",
      commenter: "Michael Brown",
      post: "Salon owner, NYC",
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
