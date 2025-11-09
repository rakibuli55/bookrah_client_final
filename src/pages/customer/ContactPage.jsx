import PrimaryButton from "@/components/common/PrimaryButton";
import Container from "@/components/container/Container";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-theme-bg relative c-lg:mt-[100px] c-md:mt-7">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20 0c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container className="relative z-10 c-md:py-20 c-xsm:pt-20 c-xsm:pb-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 c-md:gap-12 c-xsm:gap-8 items-start">
          {/* Left Section - Get In Touch */}
          <div className="lg:col-span-1">
            <div className="max-w-md">
              <h1 className="title--lg c-md:mb-6 c-xsm:mb-3 text-heading">Get In Touch</h1>
              <p className="c-md:text-lg c-md:w-full c-xsm:w-[80%] c-xsm:text-base text-paragraph c-md:mb-8 c-xsm:mb-4 font-satoshi">
                For any inquiries or support, please contact us at:
              </p>
              <div className="flex items-center c-md:gap-4 c-xsm:gap-3">
                <div className="c-md:w-12 c-xsm:w-9 c-md:h-12 c-xsm:h-9 bg-primary rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-heading"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-lg text-heading font-satoshi">
                  contact@bookrah.com
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white c-md:rounded-[16px] c-xsm:rounded-[10px] c-md:p-8 c-xsm:p-4 lg:p-12 shadow-lg">
              <h2 className="title--lg mb-4 text-center text-heading">
                Contact Form
              </h2>
              <p className="c-md:text-lg c-xsm:text-base text-paragraph text-center mb-8 font-satoshi">
                Please fill out the form below and our team will get back to you
                shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base font-medium text-heading mb-3 font-satoshi"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full c-md:py-[13px] c-xsm:py-[10px] c-md:px-6 c-xsm:px-3 border border-[#cfcfcf] font-satoshi rounded-[10px] text-base text-paragraph focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-medium text-heading mb-3 font-satoshi"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full c-md:py-[13px] c-xsm:py-[10px] c-md:px-6 c-xsm:px-3 border border-[#cfcfcf] font-satoshi rounded-[10px] text-base text-paragraph focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-base font-medium text-heading mb-3 font-satoshi"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter your subject"
                    className="w-full c-md:py-[13px] c-xsm:py-[10px] c-md:px-6 c-xsm:px-3 border border-[#cfcfcf] font-satoshi rounded-[10px] text-base text-paragraph focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-base font-medium text-heading mb-3 font-satoshi"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here"
                    rows={6}
                    className="w-full c-md:py-[13px] c-xsm:py-[10px] c-md:px-6 c-xsm:px-3 border border-[#cfcfcf] font-satoshi rounded-[10px] text-base text-paragraph focus:outline-none focus:border-primary transition-colors resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="c-md:pt-4">
                  <PrimaryButton
                    type="submit"
                    className="w-full"
                    text="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
