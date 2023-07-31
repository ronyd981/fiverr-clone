import { useQuery } from "@tanstack/react-query";

// Components
import {
  MainContent,
  Opinions,
  GigAbout,
  AboutTheSeller,
  Reviews,
  AddReview,
} from "./export";
import GigInfo from "../GigInfo";

import { TGigType, TUserType, TReviewType } from "@/types";

import { newRequest } from "@/utils";

interface IProps {
  data: TGigType;
  userData: TUserType;
}

const GigMain = ({ data, userData }: IProps) => {
  const {
    isLoading,
    error,
    data: dataReview,
  } = useQuery({
    queryKey: ["review"],
    queryFn: () => newRequest.get(`/reviews/${data._id}`),
  });

  return (
    <div
      className="
      w-full flex flex-col gap-10
      lg:w-[calc(100%-434px)]
    "
    >
      <>
        <MainContent userData={userData} gigData={data} />
        <div className="lg:hidden">
          <GigInfo gigData={data} userData={userData} />
        </div>
        <Opinions />
        <GigAbout gigData={data} />
        <AboutTheSeller userData={userData} />
        {isLoading ? (
          ""
        ) : error ? (
          ""
        ) : dataReview?.data.length > 0 ? (
          dataReview?.data.map((info: TReviewType) => (
            <div className="w-full flex flex-col gap-4" key={info._id}>
              <h6 className="text-xl font-bold text-primaryTitle">Reviews</h6>
              <Reviews data={info} />
            </div>
          ))
        ) : (
          <span className="text-blue-500">
            There are no references in this gig
          </span>
        )}
        {/* <AddReview /> */}
      </>
    </div>
  );
};

export default GigMain;
