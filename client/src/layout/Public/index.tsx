import { Outlet } from "react-router-dom";

// Components
import { Navbar, Footer } from "@/components";

const Public = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Public;
