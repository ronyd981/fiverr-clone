import { useState } from "react";
import { newRequest } from "@/utils";

export const useService = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const serviceCall = async (
    allData: Object,
    method: string,
    apiCall: string
  ) => {
    let res;
    try {
      setLoading(true);
      setError(null);

      res = await newRequest({
        method,
        url: apiCall,
        data: allData,
      });
    } catch (error) {
      //@ts-ignore
      setError(error.response.data);
    } finally {
      setLoading(false);
    }

    return res;
  };

  return {
    loading,
    serviceCall,
    error,
  };
};
