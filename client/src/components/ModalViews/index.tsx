import { useEffect, MouseEvent } from "react";

import { preventScroll, removePreventScroll } from "@/utils";

// Components
import { Login, Register, MenuOptions } from "./export";

interface IModals {
  changeModal: (modal: string | null) => void;
  modalView: "login" | "register" | "menu-options" | null;
}

const ModalViews = ({ changeModal, modalView }: IModals) => {
  function closeModal(e: MouseEvent<HTMLDivElement>) {
    //@ts-ignore
    if (e.target.id === "parent-modal") {
      removePreventScroll();
      changeModal(null);
    }
  }

  useEffect(() => {
    preventScroll();
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", (e: any) => {
      if (e.key === "Escape") {
        removePreventScroll();
        changeModal(null);
      }
    });
  }, []);

  return (
    <div
      className="w-full h-screen top-0 left-0 fixed z-40 bg-[#00000075]"
      onClick={(e) => closeModal(e)}
      id="parent-modal"
    >
      <div className="w-0">
        {modalView === "login" && <Login changeModal={changeModal} />}
        {modalView === "register" && <Register changeModal={changeModal} />}
        {modalView === "menu-options" && (
          <MenuOptions changeModal={changeModal} />
        )}
      </div>
    </div>
  );
};

export default ModalViews;
