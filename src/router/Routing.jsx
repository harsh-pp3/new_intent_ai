// import Contact from "../components/contact/Contact";
import Home from "../components/home/Home";
import MainLayout from "../components/layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";

const Routing = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        // {
        //   path: "contact-us",
        //   element: <Contact />,
        // },
      ],
    },
  ]);
  return routes;
};

export default Routing;
