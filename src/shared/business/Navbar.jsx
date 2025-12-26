import UserProfile from "@/components/business/dashboard/navbar/UserProfile";
import PrimaryButtonRounded from "@/components/common/PrimaryButtonRounded";
import Container from "@/components/container/Container";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo/logo-primary.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // userdata
  const userInfo = useSelector((state) => state.userInfo);

  const menuOptions = [
    { id: 1, path: "#", name: "business type" },
    { id: 2, path: "/for-business/about-us", name: "about us" },
    { id: 3, path: "/for-business/pricing", name: "pricing" },
  ];

  const handleBusinessTypeClick = (e) => {
    e.preventDefault();
    sessionStorage.setItem("scrollToServices", "true");
    if (location.pathname === "/for-business") {
      scrollToServices();
    } else {
      navigate("/for-business", { state: { scrollToServices: true } });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.querySelector(".all-services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleMobileMenu = (open) => {
    setMobileMenuActive(open);
  };

  // handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuActive]);

  return (
    <>
      <header
        className={`${
          isScrolled ? "nav-active" : ""
        } duration-200 ease-in-out c-xxl:py-8 c-lg:py-7 c-md:py-6 c-xsm:py-3 fixed top-0 left-0 w-full z-[50]`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* logo  */}
            <Link to={"/"} className="logo-width block">
              <img src={Logo} className="w-full h-full" alt="logo" />
            </Link>
            {/* header right  */}
            <div className="flex items-center c-lg:gap-[56px] c-xsm:gap-5">
              {/* menu  */}
              <ul
                className={`c-xsm:flex c-lg:flex-row c-lg:relative c-lg:bg-transparent c-lg:h-auto c-lg:top-0 c-lg:items-center c-lg:gap-[56px] c-lg:pt-0 c-lg:p-0 c-lg:w-auto c-lg:z-[50] c-xsm:fixed c-xsm:h-screen c-xsm:bg-white c-xsm:p-5 c-xsm:z-[-1] c-xsm:pt-[110px] c-xsm:w-[220px] c-xsm:flex-col c-xsm:gap-3 duration-300 ease-in-out ${
                  mobileMenuActive
                    ? "c-xsm:left-0 c-xsm:top-0"
                    : "c-xsm:left-[-100%] c-lg:left-0"
                }`}
              >
                {menuOptions?.map((menu) => (
                  <li key={menu?.id} onClick={() => handleMobileMenu(false)}>
                    <Link
                      className={`text-base font-medium capitalize inline-block text-heading duration-200 ease-in-out hover:text-primary menu-link ${
                        menu?.path === location?.pathname
                          ? "active-menu-link"
                          : ""
                      }`}
                      to={menu?.path}
                      onClick={
                        menu?.name.trim().toLowerCase() === "business type"
                          ? (e) => handleBusinessTypeClick(e)
                          : undefined
                      }
                    >
                      {menu?.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* mobile hamburger  */}
              <div
                className="c-lg:hidden"
                onClick={() => handleMobileMenu(!mobileMenuActive)}
              >
                {mobileMenuActive ? (
                  <AiOutlineClose size={25} />
                ) : (
                  <CgMenu size={25} />
                )}
              </div>
              {/* login button  */}
              {userInfo.user ? (
                <>
                  <UserProfile user={userInfo?.user} />
                </>
              ) : (
                <div className="p-1 bg-heading rounded-[32px]">
                  <PrimaryButtonRounded
                    className={"w-fit"}
                    path={"/auth/sign-in?role=professional"}
                    text={"Log In"}
                  />
                </div>
              )}
            </div>
          </div>
        </Container>
      </header>
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[rgba(255,255,255,0.3)] z-[40] backdrop-blur-[4px] duration-200 ease-in-out ${
          mobileMenuActive ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => handleMobileMenu(false)}
      ></div>
    </>
  );
};

export default Navbar;
