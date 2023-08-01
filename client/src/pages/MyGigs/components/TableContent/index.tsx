import { useContext } from "react";
import { UserContext } from "@/context";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AiFillDelete } from "react-icons/ai";

import { newRequest } from "@/utils";
import { TGigType } from "@/types";

const TableContent = () => {
  const { user, token } = useContext(UserContext);

  const id = user?._id;

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["userGigs"],
    queryFn: () =>
      newRequest({
        method: "get",
        url: `/gigs/?userId=${id}`,
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => res.data),
    // })
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationFn: (id: string) => {
      return newRequest({
        method: "delete",
        url: `/gigs/${id}`,
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userGigs"]);
    },
  });

  const deleteGig = (id: string) => {
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
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Sales
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((info: TGigType) => (
                <tr className="bg-white border-b" key={info._id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <figure className="w-12 h-12 rounded-full border">
                      <img
                        src={info.cover}
                        className="w-full h-full rounded-full object-cover"
                        alt={info.title}
                      />
                    </figure>
                  </th>
                  <td className="px-6 py-4">{info.shortDesc}</td>
                  <td className="px-6 py-4">${info.price}</td>
                  <td className="px-6 py-4">{info.sales}</td>
                  <td className="px-6 py-4">
                    <AiFillDelete
                      className="text-xl cursor-pointer text-red-500"
                      onClick={() => deleteGig(info._id)}
                    />
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
