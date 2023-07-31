import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

import { newRequest, validateToken } from "@/utils";
import { TUserType } from "@/types";

type TData = {
  user: TUserType | undefined;
  token: string | undefined;
  saveData: (userData: TUserType) => void;
  removeData: () => void;
};

export const UserContext = createContext<TData>({
  token: "",
  user: undefined,
  saveData: () => {},
  removeData: () => {},
});

export function UserProvider({ children }: { children: JSX.Element }) {
  const [token, setToken] = useState<string | undefined>(
    Cookies.get("access_token")
  );
  const [user, setUser] = useState<TUserType | undefined>(undefined);

  const saveData = (userData: TUserType) => {
    setUser(userData);
    localStorage.setItem("user_data", JSON.stringify(userData));
    setToken(Cookies.get("access_token"));
  };

  const removeData = async () => {
    try {
      await newRequest.post("/auth/logout");
      setToken(undefined);
      setUser(undefined);
      localStorage.removeItem("user_data");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //@ts-ignore
    const validate = validateToken(token);

    if (validate && localStorage.getItem("user_data")) {
      setToken(token);
      //@ts-ignore
      setUser(JSON.parse(localStorage.getItem("user_data")));
    } else {
      removeData();
    }
  }, []);

  const data = {
    user,
    token,
    saveData,
    removeData,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}
