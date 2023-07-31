import { createRoot } from "react-dom/client";
import App from "./App";
import { UserProvider } from "@/context";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root") as HTMLElement).render(
  <UserProvider>
    <>
      <App />
      <ToastContainer />
    </>
  </UserProvider>
);
