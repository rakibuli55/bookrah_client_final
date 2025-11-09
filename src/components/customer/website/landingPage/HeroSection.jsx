import Container from '@/components/container/Container';
import SearchBar from './heroSection/SearchBar';
const banner =
  'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const HeroSection = () => {
  return (
    <section className="c-lg:h-[95svh] c-md:py-20 c-xsm:pb-[60px] c-xsm:pt-[50px] bg-gradient-to-br from-gray-900 via-black to-gray-800 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${banner})` }}
        ></div>
      </div>

      <Container className="h-full flex flex-col justify-center pt-10">
        <div className="c-lg:space-y-14 c-xsm:space-y-8">
          {/* Headline */}
          <div className="space-y-6 text-light max-w-2xl 2xl:max-w-6xl">
            <h1 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-playfair font-semibold leading-[162%] tracking-[-2%]">
              Book your next beauty or wellness experience — in seconds
            </h1>

            <p className="c-lg:text-xl leading-[170%] tracking-[-2%] max-w-2xl font-satoshi">
              Discover handpicked salons, barber shop, and stays across your
              favorite destinations. Enjoy exclusive deals, fast booking, and
              24/7 support.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-6xl">
            <SearchBar />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
