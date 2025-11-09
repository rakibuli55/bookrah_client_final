import CTASection from '@/components/business/website/CTASection';
import Container from '@/components/container/Container';

const banner =
  'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const TermsConditionsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="c-md:pt-[200px] c-xsm:pt-[150px] c-md:pb-[160px] c-xsm:pb-[120px] bg-cover bg-no-repeat bg-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <Container className="relative z-10">
          <div className="text-center">
            <h1 className="text-[#adadad] text-xl md:text-2xl lg:text-3xl font-light mb-4">
              Understanding Our
            </h1>
            <h2 className="text-white c-xsm:text-3xl c-md:text-[38px] lg:text-6xl xl:text-7xl font-bold leading-tight">
              Terms &<br />
              Conditions
            </h2>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="c-md:py-[80px] c-xsm:py-[60px] bg-[#F8F6F0]">
        <Container>
          <div className="max-w-4xl mx-auto c-md:space-y-8">
            {/* Introduction */}
            <div>
              <h3 className="c-xsm:text-[18px] c-md:text-2xl font-bold text-gray-800 mb-4">
                Introduction
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Bookrah. By using our website and services, you agree
                to comply with these Terms & Conditions. Please read them
                carefully.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="c-xsm:text-[18px] c-md:text-2xl font-bold text-gray-800 mb-4">
                Services
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Bookrah provides an online platform to facilitate bookings
                between clients and service providers. We are not the provider
                of any services listed on the platform.
              </p>
            </div>

            {/* User Accounts */}
            <div>
              <h3 className="c-xsm:text-[18px] c-md:text-2xl font-bold text-gray-800 mb-4">
                User Accounts
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Users must provide accurate information when creating accounts
                and keep their credentials secure.
              </p>
            </div>

            {/* Booking and Payment */}
            <div>
              <h3 className="c-xsm:text-[18px] c-md:text-2xl font-bold text-gray-800 mb-4">
                Booking and Payment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                All bookings are subject to availability and confirmation.
                Payment terms and cancellation policies vary by service provider
                and are clearly displayed during the booking process.
              </p>
            </div>

            {/* Liability */}
            <div>
              <h3 className="c-xsm:text-[18px] c-md:text-2xl font-bold text-gray-800 mb-4">
                Liability
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Bookrah does not guarantee the quality, safety, or legality of
                any services. Users agree that Bookrah is not liable for any
                issues arising from the booked services.
              </p>
            </div>

            {/* Privacy */}
            <div>
              <h3 className="c-xsm:text-[18px] c-md:text-2xl font-bold text-gray-800 mb-4">Privacy</h3>
              <p className="text-gray-700 leading-relaxed">
                User information is handled according to our Privacy Policy,
                ensuring data protection and confidentiality.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h3 className="c-xsm:text-[18px] c-md:text-2xl font-bold text-gray-800 mb-4">
                Changes to Terms
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Bookrah may update these Terms & Conditions at any time.
                Continued use of the platform constitutes acceptance of any
                changes.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="c-xsm:text-[18px] c-md:text-2xl font-bold text-gray-800 mb-4">Contact</h3>
              <p className="text-gray-700 leading-relaxed">
                For questions about these Terms, contact us at
                contact@bookrah.com.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection className={'c-lg:pt-3 c-lg:pb-[121px] c-md:pt-0 c-md:pb-20 c-xsm:pb-[60px] c-xsm:!pt-0 bg-[#F8F6F0]'} />
    </>
  );
};

export default TermsConditionsPage;
