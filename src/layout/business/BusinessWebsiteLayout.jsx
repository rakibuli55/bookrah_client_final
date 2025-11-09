import Navbar from "@/shared/business/Navbar";
import Footer from "@/shared/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

const BusinessWebsiteLayout = () => {
  return (
    <div className="bg-white">
      <ScrollRestoration />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BusinessWebsiteLayout;
