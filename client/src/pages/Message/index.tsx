import { useContext } from "react";
import { UserContext } from "@/context";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { newRequest } from "@/utils";

// Components
import { MessageFrom, MessageContainer } from "./components";
import { ScreenLoading } from "@/components";

import { TMessageType } from "@/types";

interface IMessageObject {
  conversationId: string;
  desc: string;
}

const Message = () => {
  const { id } = useParams();
  const messageId = id;
  const { token } = useContext(UserContext);

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["message"],
    queryFn: async () => {
      try {
        let res = await newRequest({
          method: "get",
          url: `/messages/${messageId}`,
          headers: { Authorization: `Bearer ${token}` },
        });

        return res.data as Array<TMessageType>;
      } catch (error) {
        navigate("/");
      }
    },
    enabled: !!messageId,
  });

  const mutation = useMutation({
    mutationFn: (message: IMessageObject) => {
      return newRequest({
        method: "post",
        url: "/messages",
        headers: { Authorization: `Bearer ${token}` },
        data: message,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["message"]);
    },
  });

  if (isLoading) return <ScreenLoading />;

  return (
    <>
      {isLoading
        ? ""
        : error
        ? ""
        : data && (
            <>
              <MessageFrom />
              <MessageContainer data={data} mutation={mutation} />
            </>
          )}
    </>
  );
};

export default Message;
