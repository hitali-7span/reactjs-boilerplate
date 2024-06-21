import { useRoutes, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgot-password";
import Sidebar from "./components/layout/sidebar";
import MainLayout from "./components/layout/main-layout";
import NotFound from "./pages/not-found";
import LandingPageLayout from "./components/layout/landing-page-layout";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/layout",
      element: <MainLayout />,
    },
    {
      path: "layout2",
      element: <LandingPageLayout />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ];

  const router = useRoutes(routes);

  return <>{router}</>;
};

export default Router;
