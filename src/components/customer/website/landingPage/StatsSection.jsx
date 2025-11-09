import Container from '@/components/container/Container';

const StatsSection = () => {
  return (
    <section
      className="c-lg:pt-[120px] c-lg:pb-[120px] c-md:py-20 c-xsm:py-[60px] bg-cover bg-no-repeat bg-center relative z-[1] overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <Container className="relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="c-xsm:text-[26px] c-md:text-4xl lg:text-6xl xl:text-7xl font-serif text-white c-md:mb-8 c-xsm:mb-6 leading-tight">
            The top-rated destination for beauty and wellness
          </h1>

          {/* Description */}
          <p className="c-xsm:text-base c-md:text-xl text-white/90 c-md:mb-16 c-xsm:mb-10 max-w-3xl mx-auto leading-relaxed">
            Bookrah, the premium destination for beauty and wellness in the
            Middle East
            <br />
            One platform. One solution. Trusted by salons, spas, and
            professionals.
          </p>

          {/* Stats Grid */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="c-xsm:text-[28px] c-md:text-6xl lg:text-5xl xl:text-7xl font-bold text-white c-md:mb-4 c-xsm:mb-2">
                355,000+
              </div>
              <div className="text-white/90 text-lg">
                Appointments Booked
                <br />
                On Bookrah
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px shrink-0 bg-white mx-auto h-[200px]"></div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="c-xsm:text-[28px] c-md:text-6xl lg:text-5xl xl:text-7xl font-bold text-white c-md:mb-4 c-xsm:mb-2">
                10,000+
              </div>
              <div className="text-white/90 text-lg">
                Partner Salons And Wellness
                <br />
                Business Across Saudi Arabia & MENA
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px shrink-0 bg-white mx-auto h-[200px]"></div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="c-xsm:text-[28px] c-md:text-6xl lg:text-5xl xl:text-7xl font-bold text-white c-md:mb-4 c-xsm:mb-2">
                50,000+
              </div>
              <div className="text-white/90 text-lg">
                Stylists, Barbers, And
                <br />
                Professionals
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
