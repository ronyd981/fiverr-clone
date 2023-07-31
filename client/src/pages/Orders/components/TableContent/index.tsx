import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { GrContact } from "react-icons/gr";

import { newRequest } from "@/utils";
import { TOrderType } from "@/types";
import { UserContext } from "@/context";

const TableContent = () => {
  const { user } = useContext(UserContext);

  const userId = user?._id;

  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () => newRequest.get(`/orders`).then((res) => res.data),
    enabled: !!userId,
  });

  const handleContact = async (sellerId: string, buyerId: string) => {
    const conversationId = sellerId + buyerId;

    try {
      const res = await newRequest.get(
        `/conversations/single/${conversationId}`
      );

      navigate(`/messages/${res.data[0].id}`);
    } catch (error) {
      //@ts-ignore
      if (error.response.status === 404) {
        const res = await newRequest.post(`/conversations`, {
          to: user?.isSeller ? buyerId : sellerId,
        });

        navigate(`/messages/${res.data.id}`);
      }
    }
  };

  return (
    <div
      className="
      w-[90%] flex flex-col gap-2 mx-auto mb-12
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
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  {user?.isSeller ? "Buyer" : "Seller"}
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Contact
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((info: TOrderType) => (
                <tr className="bg-white border-b" key={info._id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <figure className="w-12 h-12 rounded-full border">
                      <img
                        src={info.img}
                        className="w-full h-full rounded-full object-cover"
                        alt={info.title}
                      />
                    </figure>
                  </th>
                  <td className="px-6 py-4">{info.title}</td>
                  <td className="px-6 py-4">${info.price}</td>
                  <td className="px-6 py-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-300 hover:border cursor-pointer"
                      onClick={() => handleContact(info.sellerId, info.buyerId)}
                    >
                      <GrContact className="text-lg" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <span className="text-blue-500">You don't have any orders yet</span>
      )}
      {/* */}
    </div>
  );
};

export default TableContent;
