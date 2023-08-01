import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { newRequest } from "@/utils";

// Components
import { TitleAndInfo, Filters } from "./components";
import { CardCategory } from "@/components";

import { TGigType } from "@/types";

const Gig = () => {
  const [sort, setSort] = useState("sales");
  const minRef = useRef<HTMLInputElement | null>(null);
  const maxRef = useRef<HTMLInputElement | null>(null);

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs?${search}${
            minRef.current?.value ? "&min=" + minRef.current.value : ""
          }${
            maxRef.current?.value ? "&max=" + maxRef.current.value : ""
          }&sort=${sort}`
        )
        .then((res) => res.data),
  });

  const reSort = (type: string) => {
    if (type === sort) return;

    setSort(type);
  };

  const onSubmitMinAndMax = () => {
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  return (
    <>
      <TitleAndInfo />
      <Filters
        minRef={minRef}
        maxRef={maxRef}
        onSubmitMinAndMax={onSubmitMinAndMax}
        sort={sort}
        reSort={reSort}
      />
      <div
        className="
        w-[85%] mb-14 mx-auto
        lg:w-[95%]
        2xl:w-[1400px]
      "
      >
        {isLoading ? (
          <div
            className="
            w-full grid grid-cols-1 gap-8 mx-auto
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
          >
            {[0, 1, 2, 3].map((value) => (
              <div
                className="w-full h-48 rounded-xl bg-gray-200 animate-pulse"
                key={value}
              ></div>
            ))}
          </div>
        ) : error ? (
          <span className="text-red-500 text-lg">
            Something went wrong, refresh the page
          </span>
        ) : (
          <div
            className="
            w-full grid grid-cols-1 gap-8 mx-auto
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
          >
            {data.map((info: TGigType) => (
              <CardCategory key={info._id} data={info} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Gig;
