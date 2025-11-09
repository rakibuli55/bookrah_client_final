import { Outlet, ScrollRestoration } from "react-router-dom";
import authBanner from "../assets/images/auth-banner.png";
import AuthLeft from "../components/auth/AuthLeft";
import LanguageSelector from "../components/common/LanguageSelector";

const AuthLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <div
        className="auth-layout flex items-start c-md:p-6 c-xsm:p-4 bg-cover bg-no-repeat h-screen max-h-screen overflow-hidden"
        style={{ backgroundImage: `url(${authBanner})` }}
      >
        <AuthLeft />
        <div className="c-xl:w-1/2 c-xsm:w-full min-h-[calc(100vh-48px)] max-h-[calc(100vh-48px)] overflow-y-auto c-base:px-[135px] c-lg:px-[50px] c-xxxl:py-[42px] no-scrollbar">
          <div>
            <LanguageSelector
              className={`c-lg:py-[13px]  c-lg:px-[34px]  c-sm:py-[10px]  c-sm:px-4 c-xsm:py-2  c-xsm:px-3 bg-white rounded-[10px] border border-light w-fit`}
            />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
