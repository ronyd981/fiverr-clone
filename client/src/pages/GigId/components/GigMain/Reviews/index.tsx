import { newRequest } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { AiFillStar, AiOutlineUser } from "react-icons/ai";

import { TReviewType, TUserType } from "@/types";

interface IProps {
  data: TReviewType;
}

const Reviews = ({ data }: IProps) => {
  const {
    isLoading,
    error,
    data: userData,
  } = useQuery({
    queryKey: [`${data._id}`],
    queryFn: () =>
      newRequest(`/users/${data.userId}`).then((res) => {
        return res.data as TUserType;
      }),
  });

  return (
    <div className="w-full flex flex-col py-5 border-y">
      {/* User comment */}
      <div className="w-full flex gap-4 p-4">
        <div className="w-10 h-10 rounded-full bg-gray-200">
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
        <section className="w-[calc(100%-56px)] flex flex-col gap-2">
          <p className="text-primaryTitle font-bold">{userData?.username}</p>
          <div className="flex gap-2">
            <span className="text-primaryText text-xs">2 weeks ago</span>
            <div className="flex gap-2">
              {Array(data.star)
                .fill(0)
                .map((value, index) => (
                  <AiFillStar className="text-lg text-yellow-400" key={index} />
                ))}
            </div>
          </div>
          <p className="text-primaryText">{data.desc}</p>
        </section>
      </div>
      {/* Owner comment */}
      {/* <div className="w-full flex gap-4 p-4">
        <div className="w-10"></div>
        <section className="w-[calc(100%-56px)] flex flex-col gap-2">
          <p className="text-primaryTitle font-bold">Lorem Ipsum</p>
          <p className="text-primaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            animi commodi qui ab, aut perferendis eligendi soluta magnam
            repellat dolore tempora est doloremque, temporibus cupiditate cum
            quidem maxime adipisci quo!
          </p>
        </section>
      </div> */}
    </div>
  );
};

export default Reviews;
