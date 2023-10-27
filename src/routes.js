import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import Health from "./pages/health";
import { pageroutes } from "./data";
import About from "./pages/about";
import CareerAndFinances from "./pages/career-and-finance";
import Family from "./pages/family";
import Food from "./pages/food";
import Wellness from "./pages/wellness";
import SexRealtionShip from "./pages/sex-&-realtionship";
import Beauty from "./pages/beauty";
import Careers from "./pages/careers";

export const router = createBrowserRouter([
  {
    path: pageroutes.home,
    element: <Layout />,
    children: [
      {
        path: pageroutes.home,
        default: true,
        element: <Home />,
      },
      {
        path: pageroutes.health,
        element: <Health />,
      },
      {
        path: pageroutes.about,
        element: <About />,
      },
      {
        path: pageroutes.careerAndFinance,
        element: <CareerAndFinances />,
      },
      {
        path: pageroutes.family,
        element: <Family />,
      },
      {
        path: pageroutes.food,
        element: <Food />,
      },
      {
        path: pageroutes.wellness,
        element: <Wellness />,
      },
      {
        path: pageroutes.sexRealtionShip,
        element: <SexRealtionShip />,
      },
      {
        path: pageroutes.beauty,
        element: <Beauty />,
      },
      {
        path: pageroutes.careers,
        element: <Careers />,
      },
    ],
  },
  {
    path: "/*",
    element: (
      <>
        <Navigate to={pageroutes.home} replace />
      </>
    ),
  },
]);
