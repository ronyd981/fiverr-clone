import { newRequest } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { MainContent, TableContent } from "./components";
import { ScreenLoading } from "@/components";

import { UserContext } from "@/context";
import { TUserType } from "@/types";

const MyGigs = () => {
  const { user } = useContext(UserContext);

  const id = user?._id;

  const navigate = useNavigate();

  const { isLoading } = useQuery({
    queryKey: ["userId"],
    queryFn: async () => {
      try {
        let res = await newRequest.get(`/users/${id}`);

        let data = res.data as TUserType;

        if (!data.isSeller) throw data;

        return data;
      } catch (error) {
        navigate("/");
        return error;
      }
    },
    enabled: !!id,
  });

  if (isLoading) return <ScreenLoading />;

  return (
    <>
      <MainContent />
      <TableContent />
    </>
  );
};

export default MyGigs;
