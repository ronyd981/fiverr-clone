import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { newRequest } from "@/utils";

import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51NUKrcAVRA95sYpnymiVPpW14P6Pmhql6tO2DekCUa1amesaaeiFGEpTJvnsd98DxdDdZMkRzHjq44L9SXmzQ7wO00fyIWdBHx"
);

const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getPayment = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );

        setClientSecret(res.data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };

    getPayment();
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

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
