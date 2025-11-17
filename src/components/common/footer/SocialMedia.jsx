import useIsMobile from "@/hooks/useIsMobile";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";

const SocialMedia = ({ className }) => {
  const socialMedia = [
    {
      id: 3,
      name: "instagram",
      path: "https://www.instagram.com",
    },
    {
      id: 5,
      name: "linkedin",
      path: "https://www.linkedin.com",
    },
  ];

  const isMobileDeviceActive = useIsMobile(481);

  return (
    <ul className={`flex items-center c-md:gap-4 c-xsm:gap-3 ${className}`}>
      {socialMedia?.map((media) => (
        <li key={media?.id}>
          <Link
            to={media?.path}
            target="_blank"
            className="duration-200 ease-in-out hover:text-primary"
          >
            {media?.name === "facebook" ? (
              <CiFacebook size={isMobileDeviceActive ? 23 : 27} />
            ) : media?.name === "twitter" ? (
              <FaXTwitter />
            ) : media?.name === "instagram" ? (
              <FaInstagram />
            ) : media?.name === "youtube" ? (
              <FiYoutube />
            ) : media?.name === "linkedin" ? (
              <FaLinkedin />
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
