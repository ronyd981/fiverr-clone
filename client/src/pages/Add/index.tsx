import { useContext } from "react";
import { UserContext } from "@/context";
import { useQuery } from "@tanstack/react-query";

// Components
import { useNavigate } from "react-router-dom";
import { Title, Forms } from "./components";
import { ScreenLoading } from "@/components";

import { TUserType } from "@/types";
import { newRequest } from "@/utils";

const Add = () => {
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
      <Title />
      <Forms />
    </>
  );
};

export default Add;
