import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { newRequest } from "@/utils";
import { TUserType, TGigType } from "@/types";

// Components
import { GigInfo, GigMain } from "./components";
import { ScreenLoading } from "@/components";

const GigId = () => {
  const { gigId } = useParams();

  const id = gigId;

  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: [`${id}`],
    queryFn: async () => {
      try {
        let res = await newRequest.get(`/gigs/${id}`);

        return res.data as TGigType;
      } catch (error) {
        navigate("/");
      }
    },

    enabled: !!id,
  });

  const userId = data?.userId;

  const { data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => res.data as TUserType),
    enabled: !!userId,
  });

  if (isLoading) return <ScreenLoading />;

  return (
    <div
      className="
      w-[90%] flex items-start flex-col gap-6 mx-auto mt-6 mb-12
      lg:flex-row
      lg:w-[95%]
      2xl:w-[1400px]
    "
    >
      {isLoading ? (
        <div className="w-full flex items-center gap-12">
          <div
            className="
            w-full h-[300px] bg-gray-200
            lg:w-6/12
          "
          ></div>
          <div
            className="
            w-6/12 h-[300px] bg-gray-200 hidden lg:block
          "
          ></div>
        </div>
      ) : error ? (
        <span className="text-red-500">
          Something went wrong, reload the page
        </span>
      ) : (
        data &&
        userData && (
          <>
            <GigMain data={data} userData={userData} />
            <aside className="hidden lg:block sticky top-8">
              <GigInfo gigData={data} userData={userData} />
            </aside>
          </>
        )
      )}
    </div>
  );
};

export default GigId;
