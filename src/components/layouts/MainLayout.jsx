import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../reusables/header/Header";
import Footer from "../reusables/footer/Footer";
// import LoaderAndCursor from "../reusables/LoaderAndCursor";

const MainLayout = () => {
  return (
    <>
      {/* <LoaderAndCursor /> */}
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
