import { useContext } from "react";
import { useZorm } from "react-zorm";
import { FcGoogle } from "react-icons/fc";
import { GrClose } from "react-icons/gr";

import { removePreventScroll } from "@/utils";
import { UserContext } from "@/context";
import { useService } from "@/hooks";

import LoginSchema from "./LoginSchema";

// Components
import { WheelLoader, InputText } from "@/components";

interface IProps {
  changeModal: (modal: string | null) => void;
}

const Login = ({ changeModal }: IProps) => {
  const { saveData } = useContext(UserContext);

  const { serviceCall, loading, error } = useService();

  const zorm = useZorm("login", LoginSchema, {
    async onValidSubmit(e) {
      e.preventDefault();

      let username = e.data.username,
        password = e.data.password;

      try {
        let res = await serviceCall(
          { username, password },
          "post",
          "/auth/login"
        );

        //@ts-ignore
        saveData(res.data);
        changeModal(null);
        removePreventScroll();
      } catch (error) {
        // Nothing
      }
    },
  });

  return (
    <div
      className="
      w-full h-screen flex flex-col absolute bg-white pt-6
      sm:w-[400px] sm:h-[550px] sm:rounded-md sm:top-1/2 sm:left-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%]
    "
    >
      <GrClose
        className="text-2xl opacity-60 absolute right-2.5 top-2.5 cursor-pointer sm:hidden"
        onClick={() => {
          changeModal(null);
          removePreventScroll();
        }}
      />
      <h4
        className="
        text-xl font-bold text-primaryTitle text-center
        sm:text-2xl
      "
      >
        Sign In to Fiverr
      </h4>
      <section className="w-full flex flex-col gap-6 px-8 mt-14">
        <div className="w-full h-12 flex items-center px-4 rounded-sm border cursor-pointer relative hover:bg-[#00000005]">
          <FcGoogle className="text-3xl" />
          <div className="w-full h-full flex items-center justify-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-semibold text-[#222325] z-[-1]">
            Continue with Google
          </div>
        </div>
        <div className="w-full h-12 flex items-center">
          <span className="w-full border-t"></span>
          <span className="text-primaryText text-sm mx-2">OR</span>
          <span className="w-full border-t"></span>
        </div>
        <form className="w-full flex flex-col gap-4" ref={zorm.ref}>
          <InputText placeholder="Username" name="username" zorm={zorm} />
          <InputText
            placeholder="Password"
            name="password"
            zorm={zorm}
            type="password"
          />
          <button
            className={`
            w-full h-12 bg-primaryGreen text-white text-center text-lg rounded-sm hover:brightness-95
            ${loading && "cursor-not-allowed"}
            `}
            type="submit"
            disabled={loading}
          >
            Continue
          </button>
          {loading && <WheelLoader />}
          {error && (
            <span className="text-red-500 text-sm text-center">{error}</span>
          )}
        </form>
      </section>
      <footer className="mt-auto border-t">
        <div className="w-full py-4">
          <p className="text-center text-sm text-primaryText">
            Not a member yet?{" "}
            <span
              className="text-primaryGreen cursor-pointer"
              onClick={() => changeModal("register")}
            >
              Join now
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
