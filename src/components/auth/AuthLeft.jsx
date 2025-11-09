import { Link, useLocation } from "react-router-dom";
import authroleImage from "../../assets/images/auth-role-select.png";
import professionalSignUpImage from "../../assets/images/professional-signup.png";
import Logo from "../../assets/logo/logo-white.svg";
const authImages = {
  "/auth/role-selection": authroleImage,
  "/auth/professional-signup": professionalSignUpImage,
};

const AuthLeft = () => {
  const location = useLocation();
  const image = authImages[location.pathname] || authroleImage;

  return (
    <div className="relative z-[1] h-full w-1/2 rounded-primary overflow-hidden c-xl:block c-xsm:hidden">
      <Link
        to={"/"}
        className="absolute top-[54px] left-[62px] w-[233px] h-10 z-[1]"
      >
        <img
          className="w-full h-full"
          src={Logo}
          alt="Logo"
        />
      </Link>
      <div className="h-full">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={location.pathname}
        />
      </div>
      <div className="h-full w-full bg-[rgba(0,0,0,0.1)] absolute top-0 left-0"></div>
    </div>
  );
};

export default AuthLeft;
