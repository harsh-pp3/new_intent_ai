import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routing from "./router/Routing";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={Routing()} />;
    </>
  );
}

export default App;
