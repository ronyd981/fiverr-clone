import { useContext } from "react";
import { newRequest } from "@/utils";
import { UseMutationResult, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useZorm } from "react-zorm";
import moment from "moment";
import { AiOutlineUser } from "react-icons/ai";

import { TMessageType, TUserType } from "@/types";
import MessageSchema from "./MessageSchema";
import { UserContext } from "@/context";
import { AxiosResponse } from "axios";

interface IMessageObject {
  conversationId: string;
  desc: string;
}
interface IProps {
  data: Array<TMessageType>;
  mutation: UseMutationResult<
    AxiosResponse<any, any>,
    unknown,
    IMessageObject,
    unknown
  >;
}

const MessageContainer = ({ data, mutation }: IProps) => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const userLog = id?.slice(0, 24);
  const otherUser = id?.slice(24);

  const { data: dataUserLog } = useQuery({
    queryKey: ["userLog"],
    queryFn: () =>
      newRequest.get(`/users/${userLog}`).then((res) => res.data as TUserType),
    enabled: !!userLog,
  });
  const { data: dataOtherUser } = useQuery({
    queryKey: ["otherUser"],
    queryFn: () =>
      newRequest
        .get(`/users/${otherUser}`)
        .then((res) => res.data as TUserType),
    enabled: !!otherUser,
  });

  const zorm = useZorm("message", MessageSchema, {
    async onValidSubmit(e) {
      e.preventDefault();

      let desc = e.data.desc;

      //@ts-ignore
      mutation.mutate({ conversationId: id, desc });

      e.target.reset();
    },
  });

  return (
    <div
      className="
      w-[90%] flex flex-col gap-2 mx-auto mb-12
      sm:w-[80%]
      lg:w-[1000px]
    "
    >
      <>
        <div className="w-full h-[55dvh] flex flex-col gap-4 no-scrollbar overflow-y-auto p-2 border-b mt-auto">
          {data.map((message) => (
            <div
              className={`
              w-[95%] flex gap-2
              lg:w-[70%]
              ${
                message.userId === user?._id
                  ? "self-end"
                  : "flex-row-reverse self-start"
              }
            `}
              key={message._id}
            >
              <div className="w-[calc(100%-48px)] flex flex-col gap-1">
                <div
                  className={`
                  w-full px-4 py-2 rounded-sm
                  ${
                    message.userId === user?._id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-primaryTitle"
                  }
                  `}
                >
                  <p>{message.desc}</p>
                </div>
                <span className="text-xs text-primaryText text-right">
                  {moment(message.createdAt).fromNow()}
                </span>
              </div>
              <figure className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 border">
                {message.userId === dataUserLog?._id ? (
                  <>
                    {dataUserLog?.image ? (
                      <img
                        src={dataUserLog?.image}
                        alt={dataUserLog?.username}
                        className="w-full h-full rounded-full object-cover"
                        title={dataUserLog?.username}
                      />
                    ) : (
                      <AiOutlineUser className="text-xl text-primaryText" />
                    )}
                  </>
                ) : (
                  <>
                    {dataOtherUser?.image ? (
                      <img
                        src={dataOtherUser?.image}
                        alt={dataUserLog?.username}
                        title={dataUserLog?.username}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <AiOutlineUser className="text-xl text-primaryText" />
                    )}
                  </>
                )}
              </figure>
            </div>
          ))}
        </div>
        <form className="w-full h-10 flex gap-2" ref={zorm.ref}>
          <input
            type="text"
            className="w-full h-full px-2 rounded-md outline-none border focus:border-primaryGreen"
            placeholder="Type a message"
            name={zorm.fields.desc()}
            autoComplete="off"
          />
          <button className="h-full bg-primaryGreen px-4 text-white font-bold text-sm">
            Send
          </button>
        </form>
      </>
    </div>
  );
};

export default MessageContainer;
