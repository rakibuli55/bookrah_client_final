
import BusinessDashboardLayout from "@/layout/business/BusinessDashboardLayout";
import BusinessWebsiteLayout from "@/layout/business/BusinessWebsiteLayout";
import CustomerWebLayout from "@/layout/customer/CustomerWebLayout";
import CustomerSignUpPage from "@/pages/authPages/authCustomer/CustomerSignUpPage";
import ForgotPasswordPage from "@/pages/authPages/common/ForgotPasswordPage";
import ForgotPasswordVerifyPage from "@/pages/authPages/common/ForgotPasswordVerifyPage";
import ResetPasswordPage from "@/pages/authPages/common/ResetPasswordPage";
import SignupVerifyPage from "@/pages/authPages/common/SignupVerifyPage";
import AboutPage from "@/pages/business/AboutPage";
import AddNewService from "@/pages/business/dashboard/AddNewService";
import BookingsPage from "@/pages/business/dashboard/BookingsPage";
import ClientsPage from "@/pages/business/dashboard/ClientsPage";
import ServicesPage from "@/pages/business/dashboard/ServicesPage";
import SettingsPage from "@/pages/business/dashboard/SettingsPage";
import AddNewMemberProfilePage from "@/pages/business/dashboard/staffEmployees/AddNewMemberProfilePage";
import ScheduledShiftsPage from "@/pages/business/dashboard/staffEmployees/ScheduledShiftsPage";
import TeamMembersPage from "@/pages/business/dashboard/staffEmployees/TeamMembersPage";
import HomePage from "@/pages/business/HomePage";
import PricingPage from "@/pages/business/PricingPage";
import ContactPage from "@/pages/customer/ContactPage";
import LandingPage from "@/pages/customer/LandingPage";
import TermsConditionsPage from "@/pages/customer/TermsConditionsPage";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import BusinessAccountSetupLayout from "../layout/business/BusinessAccountSetupLayout";
import BusinessSignUpPage from "../pages/authPages/authProfessional/BusinessSignUpPage";
import RoleSelectionPage from "../pages/authPages/common/RoleSelectionPage";
import SignInPage from "../pages/authPages/common/SignInPage";
import SearchPage from '@/pages/customer/SearchPage';
import ServiceDetailsPage from '@/pages/customer/ServiceDetailsPage';
import AddEditMemberEcontact from "@/pages/business/dashboard/staffEmployees/AddEditMemberEcontact";
import AddEditServices from "@/pages/business/dashboard/staffEmployees/AddEditServices";
import AddEditAddress from "@/pages/business/dashboard/staffEmployees/AddEditAddress";
import DashLandingPage from "@/pages/business/dashboard/DashLandingPage";
import BookService from "@/pages/customer/BookService";
import CustomerDashboardLayout from "@/layout/customer/CustomerDashboardLayout";
import CustomerDashboard from "@/pages/customer/dashboard/CustomerDashboard";
import CustomerFavorites from "@/pages/customer/dashboard/CustomerFavorites";
import CustomerAppointments from "@/pages/customer/dashboard/CustomerAppointments";
import CustomerProfile from "@/pages/customer/dashboard/CustomerProfile";
import CustomerSettings from "@/pages/customer/dashboard/CustomerSettings";
import CustomerHelp from "@/pages/customer/dashboard/CustomerHelp";
import CustomerNotification from "@/pages/customer/dashboard/CustomerNotification";

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: 'Something went wrong',
    children: [
      {
        path: 'role-selection',
        element: <RoleSelectionPage />,
      },
      {
        path: 'sign-in',
        element: <SignInPage />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPasswordPage />,
      },
      {
        path: 'forgot-password/otp-verification',
        element: <ForgotPasswordVerifyPage />,
      },
      {
        path: 'reset-password',
        element: <ResetPasswordPage />,
      },
      {
        path: 'signup/otp-verification',
        element: <SignupVerifyPage />,
      },
      // customer
      {
        path: 'customer-signup',
        element: <CustomerSignUpPage />,
      },
      // business
      {
        path: 'business-signup',
        element: <BusinessSignUpPage />,
      },
    ],
  },
  // business onboard routes
  {
    path: 'business/onboarding',
    element: <BusinessAccountSetupLayout />,
    errorElement: 'Something went wrong',
  },
  // business website routes
  {
    path: '/for-business',
    element: <BusinessWebsiteLayout />,
    errorElement: <div>Something went wrong</div>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about-us',
        element: <AboutPage />,
      },
      {
        path: 'pricing',
        element: <PricingPage />,
      },
    ],
  },
  // business dashboard routes
  {
    path: '/for-business/dashboard',
    element: <BusinessDashboardLayout />,
    errorElement: <div>Something went wrong</div>,
    children: [
      {
        index: true,
        element: <DashLandingPage />,
      },
      {
        path: 'bookings',
        element: <BookingsPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'services/add-new-service',
        element: <AddNewService />,
      },
      {
        path: 'clients',
        element: <ClientsPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: 'staffs-employees/team-members',
        element: <TeamMembersPage />,
      },
      {
        path: 'staffs-employees/scheduled-shifts',
        element: <ScheduledShiftsPage />,
      },
      {
        path: "staffs-employees/add/profile",
        element: <AddNewMemberProfilePage />,
      },
      {
        path: "staffs-employees/add-edit/:id/emergency-contact",
        element: <AddEditMemberEcontact />,
      },
      {
        path: "staffs-employees/add-edit/:id/address",
        element: <AddEditAddress />,
      },
      {
        path: "staffs-employees/add-edit/:id/services",
        element: <AddEditServices />,
      },
    ],
  },
  // customer routes
  {
    path: '',
    element: <CustomerWebLayout />,
    errorElement: 'something went wrong',
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'service/:slug',
        element: <ServiceDetailsPage />,
      },
      {
        path: 'service/:slug/booking',
        element: <BookService />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'terms-conditions',
        element: <TermsConditionsPage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <CustomerDashboardLayout />,
    errorElement: 'something went wrong',
    children: [
      {
        index: true,
        path: '/dashboard',
        element: <CustomerDashboard />,
      },
      {
        path: '/dashboard/favorites',
        element: <CustomerFavorites />,
      },
      {
        path: '/dashboard/appointments',
        element: <CustomerAppointments />,
      },
      {
        path: '/dashboard/profile',
        element: <CustomerProfile />,
      },
      {
        path: '/dashboard/settings',
        element: <CustomerSettings />,
      },
      {
        path: '/dashboard/settings/notifications',
        element: <CustomerNotification />,
      },
      {
        path: '/dashboard/help',
        element: <CustomerHelp />,
      }
    ],
  }
]);

export default router;
