import Logo from "@/assets/logo/logo-primary.svg";
import LanguageSelector from "@/components/common/LanguageSelector";
import PrimaryButtonRounded from "@/components/common/PrimaryButtonRounded";
import Container from "@/components/container/Container";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const menuOptions = [
    { id: 1, path: "/", name: "Home" },
    { id: 4, path: "/contact", name: "Support" },
  ];

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

  return (
    <header
      className={`${
        isScrolled ? "nav-active" : ""
      } duration-200 ease-in-out fixed top-0 left-0 w-full z-[50] c-lg:py-8 c-xsm:py-4`}
    >
      <Container className="flex items-center justify-between">
        {/* logo  */}
        <Link to={"/"} className="logo-width block">
          <img src={Logo} className="w-full h-full" alt="BOOKRAH logo" />
        </Link>

        {/* header right  */}
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Mobile Menu */}
          <MobileMenu isScrolled={isScrolled} />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {/* language selector */}
            <LanguageSelector
              className="hidden lg:block"
              triggerClassName={cn("text-light", isScrolled && "text-heading")}
            />

            <nav className="bg-heading flex items-center pl-8 pr-2.5 py-2.5 rounded-full gap-8">
              {/* menu  */}
              <div className="flex items-center gap-6">
                {menuOptions?.map((menu) => (
                  <Link
                    key={menu?.id}
                    className={cn(
                      "text-base font-medium capitalize inline-block text-white duration-200 ease-in-out hover:text-primary",
                      {
                        "text-primary": menu?.path === location?.pathname,
                      }
                    )}
                    to={menu?.path}
                  >
                    {menu?.name}
                  </Link>
                ))}
              </div>

              {/* action buttons */}
              <div className="flex items-center gap-3">
                {/* login button */}
                <PrimaryButtonRounded
                  path="/auth/sign-in"
                  className={
                    "bg-transparent border border-primary text-primary"
                  }
                  text={"Log In"}
                />
                {/* register business button */}
                <PrimaryButtonRounded
                  className={
                    "bg-primary text-heading hover:bg-transparent hover:text-primary border-primary"
                  }
                  path={"/for-business"}
                  text={"Register Your Business"}
                />
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
