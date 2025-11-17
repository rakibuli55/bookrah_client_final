import Navbar from "@/shared/customer/Navbar";
import Footer from "@/shared/Footer";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

const CustomerWebLayout = () => {
  const location = useLocation();

  // Hide Navbar on `/service/:slug/booking`
  const hideNavbar = /^\/service\/[^/]+\/booking$/.test(location.pathname);

  return (
    <div className="bg-white">
      <ScrollRestoration />
      {!hideNavbar && <Navbar />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default CustomerWebLayout;
