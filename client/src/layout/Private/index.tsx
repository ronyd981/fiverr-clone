import { UserContext } from "@/context";
import { useEffect, useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import { ScreenLoading } from "@/components";

const Private = () => {
  const { token, removeData } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      removeData();
      navigate("/");
    }
  }, [token]);

  if (!token) return <ScreenLoading />;

  return (
    <>
      <Outlet />
    </>
  );
};

export default Private;
