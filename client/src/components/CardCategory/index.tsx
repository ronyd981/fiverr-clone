import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineUser } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";

import { newRequest } from "@/utils";

import { TGigType, TUserType } from "@/types";

interface IProps {
  data: TGigType;
}

const CardCategory = ({ data }: IProps) => {
  const {
    isLoading,
    error,
    data: userData,
  } = useQuery({
    queryKey: [`${data._id}`],
    queryFn: () =>
      newRequest.get(`/users/${data.userId}`).then((res) => {
        return res.data as TUserType;
      }),
  });

  return (
    <Link to={`/cat/${data.cat}/${data._id}`}>
      <div className="w-full h-full flex flex-col gap-2">
        <figure className="w-full h-48 bg-gray-200 rounded-xl">
          <img
            src={data.cover}
            className="w-full h-full object-cover rounded-xl"
            alt={data.shortDesc}
          />
        </figure>
        <div className="flex items-center gap-2">
          {isLoading ? (
            <>
              <div className="w-8 h-8 rounded-full bg-gray-200"></div>{" "}
              <span className="w-24 h-2 rounded-md bg-gray-200"></span>
            </>
          ) : error ? (
            <span className="text-sm text-red-500">Something went wrong</span>
          ) : (
            <>
              <div className="w-8 h-8 rounded-full">
                {userData?.image ? (
                  <figure className="w-full h-full border rounded-full">
                    <img
                      src={userData?.image}
                      className="w-full h-full rounded-full object-cover"
                      alt={userData?.username}
                    />
                  </figure>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-300 rounded-full">
                    <AiOutlineUser className="text-primaryTitle" />
                  </div>
                )}
              </div>
              <p className="text-sm text-primaryTitle font-bold truncate">
                {userData?.username}
              </p>
            </>
          )}
        </div>
        <p
          className="text-primaryText line-clamp-2 text-ellipsis"
          title={data.desc}
        >
          {data.desc}
        </p>
        <footer className="flex flex-col gap-2 mt-auto">
          <div className="flex items-center gap-0.5">
            {!isNaN(data.totalStars / data.starNumber) ? (
              Array(Math.round(data.totalStars / data.starNumber))
                .fill(0)
                .map((item, i) => (
                  <AiFillStar className="text-yellow-400" key={i} />
                ))
            ) : (
              <AiFillStar className="text-yellow-400" />
            )}
          </div>
          <span className="text-primaryTitle font-bold">
            From ${data.price}
          </span>
        </footer>
      </div>
    </Link>
  );
};

export default CardCategory;
