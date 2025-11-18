import SocialMedia from "@/components/common/footer/SocialMedia";
import Container from "@/components/container/Container";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo-primary.svg";

const Footer = () => {
  return (
    <footer className="bg-heading pt-[17px] web-footer">
      <Container>
        <div>
          {/* footer top  */}
          <div className="c-md:flex items-start c-lg:gap-20 c-sm:gap-4 c-lg:pb-[77px] c-xsm:pb-9">
            {/* about us  */}
            <div className="footer-box">
              <Link to={"/for-business/about-us"} className="title">
                About us
              </Link>
              <p>
                Learn more about our mission to connect clients with top local
                beauty and wellness professionals.
              </p>
            </div>
            <div className="footer-box">
              <Link
                to={"#faq-section"}
                className="title"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("faq-section");
                  section?.scrollIntoView({ top, behavior: "smooth" });
                }}
              >
                FAQ
              </Link>
              <p>
                Have questions? Find answers to the most common inquiries from
                clients and businesses.
              </p>
            </div>
            <div className="footer-box">
              <Link to={"/terms-conditions"} className="title">
                Terms & Conditions
              </Link>
              <p>
                Read the terms that govern the use of our platform for both
                service providers and clients.
              </p>
            </div>
            <div className="footer-box">
              <Link to={"/contact"} className="title">
                Contact Us
              </Link>
              <p>
                Need help or support? Reach out to us directly at
                <a
                  href="mailto:contact@bookrah.com"
                  className="text-primary hover:underline"
                >
                  {" "}
                  contact@bookrah.com
                </a>
              </p>
            </div>
          </div>
          {/* footer bottom  */}
          <div className="c-md:pt-10 c-xsm:py-10 c-md:pb-10 border-t border-[rgba(255,255,255,0.14)] flex c-md:flex-row c-md:items-center c-md:justify-between c-xsm:flex-col c-xsm:justify-center c-xsm:items-center c-xsm:gap-4">
            <Link to={"/"} className="inline-block logo-width">
              <img className="w-full h-full" src={Logo} alt="Logo" />
            </Link>
            {/* copyright  */}
            <p className="text-footer-para c-lg:text-base c-xsm:text-sm">
              Copyright © 2025 Bookrah. All Rights Reserved
            </p>
            {/* social media  */}
            <SocialMedia className={"text-[24px] text-white"} />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
