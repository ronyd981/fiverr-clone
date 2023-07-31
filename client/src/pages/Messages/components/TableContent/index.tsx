import { useContext } from "react";
import { newRequest } from "@/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import moment from "moment";

import { TConversationType } from "@/types";
import { UserContext } from "@/context";

const TableContent = () => {
  const { user, token } = useContext(UserContext);
  const userId = user?._id;

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest({
        method: "get",
        url: `/conversations/${userId}`,
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => res.data),
    enabled: !!userId,
  });

  const mutation = useMutation({
    mutationFn: (id: string) => {
      return newRequest({
        method: "put",
        url: `/conversations/${id}`,
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleRead = (id: string) => {
    mutation.mutate(id);
  };

  return (
    <div
      className="
      w-[90%] mx-auto mb-12
      lg:w-[95%]
      2xl:w-[1400px]
    "
    >
      {isLoading ? (
        <div className="w-full flex gap-2">
          <div
            className="
            w-[40%] h-10 rounded-sm bg-gray-200 animate-pulse
            lg:w-[20%]
          "
          ></div>
          <div
            className="
            w-[60%] h-10 rounded-sm bg-gray-200 animate-pulse
            lg:w-[40%]
          "
          ></div>
          <div className="w-[20%] h-10 rounded-sm bg-gray-200 animate-pulse hidden lg:block"></div>
          <div className="w-[20%] h-10 rounded-sm bg-gray-200 animate-pulse hidden lg:block"></div>
        </div>
      ) : error ? (
        <span className="text-red-500">
          Somenthing went wrong, please reload the page
        </span>
      ) : data.length > 0 ? (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  {user?.isSeller ? "Buyer" : "Seller"}
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Message
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((conversation: TConversationType) => (
                <tr className="bg-white border-b" key={conversation._id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {user?.isSeller
                      ? conversation.buyerId
                      : conversation.sellerId}
                  </th>
                  <td className="px-6 py-4 line-clamp-1">
                    <Link to={`/messages/${conversation.id}`}>
                      {conversation?.lastMessage
                        ? conversation.lastMessage
                        : "..."}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    {moment(conversation.createdAt).fromNow()}
                  </td>
                  <td className="py-4">
                    {((user?.isSeller && !conversation.readBySeller) ||
                      (!user?.isSeller && !conversation.readByBuyer)) && (
                      <button
                        className="max-w-max px-4 py-1.5 rounded-sm bg-primaryGreen text-white font-bold"
                        onClick={() => handleRead(conversation.id)}
                      >
                        Mark as Read
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <span className="text-blue-500">You don't have any messages yet</span>
      )}
    </div>
  );
};

export default TableContent;
