import { createContext, useState } from "react";

type TData = {
  modal: "login" | "register" | "menu-options" | null;
  changeModal: (modal: string | null) => void;
};

export const ModalViewsContext = createContext<TData>({
  modal: null,
  changeModal: () => {},
});

export const ModalProvider = ({ children }: { children: JSX.Element }) => {
  const [modal, setModal] = useState<
    "login" | "register" | "menu-options" | null
  >(null);

  const changeModal = (modal: string | null) => {
    if (modal === "login") {
      return setModal("login");
    }
    if (modal === "register") {
      return setModal("register");
    }
    if (modal === "menu-options") {
      return setModal("menu-options");
    }

    setModal(null);
  };

  const data = {
    modal,
    changeModal,
  };

  return (
    <ModalViewsContext.Provider value={data}>
      {children}
    </ModalViewsContext.Provider>
  );
};
