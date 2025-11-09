const AboutSalonSection = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        About this salon
      </h2>

      <div className="prose prose-gray max-w-none">
        <p className="text-gray-700 leading-relaxed text-base">
          Our salon, which has been in business for more than 20 years, is
          dedicated to enhancing both inner and outer beauty. It is our mission
          to deliver outstanding services that enhance confidence and reveal the
          true essence of beauty. In addition to using top-tier materials, we
          strive to achieve flawless styling by minimizing stress to the scalp.
          A natural and magnificent style is our main focus, consistently
          focusing on well-being and contentment.
        </p>
      </div>

      {/* Location and Contact Information */}
      <div className="mt-8">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Location & Contact
          </h3>

          {/* Map placeholder */}
          <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-8 h-8 mx-auto mb-2 bg-gray-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📍</span>
              </div>
              <p className="text-sm">Interactive Map</p>
              <p className="text-xs">ASEAN Avenue, Parañaque</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-gray-700">
              <strong>Address:</strong> SECOND FLOOR, 8912 ASEAN AVENUE,
              BUILDING ASEANA CITY, Parañaque, 1702 Metro Manila, ASEAN,
              Parañaque, 1702 Metro Manila, Parañaque, Metro Manila
            </p>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Get directions
            </a>
          </div>
        </div>
      </div>

      {/* Opening Times and Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Opening Times */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Opening times
          </h3>
          <div className="space-y-2">
            {[
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ].map((day) => (
              <div key={day} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">{day}:</span>
                <span className="text-gray-600">10:00 AM - 10:00 PM</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Additional information
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-semibold">✓</span>
              <span className="text-gray-700">Instant Confirmation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSalonSection;
