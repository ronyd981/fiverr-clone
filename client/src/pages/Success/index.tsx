import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { newRequest } from "@/utils";

const Success = () => {
  const navigate = useNavigate();

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const redirectToOrder = async () => {
      try {
        await newRequest.put("/orders", { payment_intent });

        setTimeout(() => {
          navigate("/orders");
        }, 2500);
      } catch (error) {
        console.log(error);
      }
    };

    redirectToOrder();
  }, []);

  return (
    <div
      className="
      w-[90%] flex items-center justify-center flex-col gap-4 mx-auto my-10
      sm:w-[80%]
      lg:w-[1000px]
    "
    >
      <AiFillCheckCircle className="text-5xl text-primaryGreen" />
      <h3 className="text-2xl text-primaryTitle font-bold text-center">
        Payment Successful
      </h3>
      <p className="text-primaryText text-center">
        You are being redirected to the Orders page, please do not close the
        page
      </p>
    </div>
  );
};

export default Success;
