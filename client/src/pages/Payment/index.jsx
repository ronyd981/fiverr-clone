import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { newRequest } from "@/utils";
import { UserContext } from "@/context";
import { useQuery } from "@tanstack/react-query";

import CheckoutForm from "./CheckoutForm";
import { ScreenLoading } from "@/components";

const stripePromise = loadStripe(
  "pk_test_51NUKrcAVRA95sYpnymiVPpW14P6Pmhql6tO2DekCUa1amesaaeiFGEpTJvnsd98DxdDdZMkRzHjq44L9SXmzQ7wO00fyIWdBHx"
);

const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const { token, user } = useContext(UserContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const gigId = id;
  const userId = user?._id;

  const { isLoading } = useQuery({
    queryKey: [`${gigId}`],
    queryFn: async () => {
      try {
        let res = await newRequest.get(`/gigs/${gigId}`);

        const data = res.data;

        if (data.userId === user?._id) throw data;

        return data;
      } catch (error) {
        navigate("/");
        return error;
      } finally {
        setLoading(false);
      }
    },

    enabled: !!gigId && !!userId,
  });

  useEffect(() => {
    const getPayment = async () => {
      try {
        const res = await newRequest({
          method: "post",
          url: `/orders/create-payment-intent/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });

        setClientSecret(res.data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };

    if (!loading) {
      getPayment();
    }
  }, [loading]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  if (isLoading) return <ScreenLoading />;

  return (
    <div
      className="
      w-[90%] flex flex-col gap-2 mx-auto my-10
      sm:w-[80%]
      lg:w-[1000px]
    "
    >
      {clientSecret && (
        <>
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </>
      )}
    </div>
  );
};

export default Payment;
