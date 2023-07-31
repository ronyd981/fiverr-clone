import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { useZorm } from "react-zorm";
import { toast } from "react-toastify";

import { useService } from "@/hooks";
import { uploadImage } from "@/firebase";
import { removePreventScroll } from "@/utils";

import RegisterSchema from "./RegisterSchema";

// Components
import { WheelLoader, InputText, Textarea, InputImage } from "@/components";

interface IProps {
  changeModal: (modal: string | null) => void;
}

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const Register = ({ changeModal }: IProps) => {
  const [isSeller, setIsSeller] = useState<boolean>(false);
  const [loadingImages, setLoadingImages] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<null | string>(null);

  const { serviceCall, loading, error } = useService();

  const handleInputChange = async (e: Event) => {
    //@ts-ignore
    const file = e.target.files[0];
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      setFile(null);
      setFileError(`${file.type} is not a type accepted`);
      return;
    }

    setFileError(null);
    setFile(file);
  };

  const zorm = useZorm("register", RegisterSchema, {
    async onValidSubmit(e) {
      e.preventDefault();

      let username = e.data.username,
        password = e.data.password,
        email = e.data.email,
        country = e.data.country,
        phone = e.data.phone,
        desc = e.data.desc;

      try {
        setLoadingImages(true);

        let url = file ? await uploadImage(file, "avatar") : null;

        await serviceCall(
          {
            username,
            password,
            email,
            country,
            isSeller,
            phone,
            desc,
            image: url,
          },
          "post",
          "/auth/register"
        );

        toast.success("User has been registered successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          theme: "light",
        });
        changeModal(null);
        removePreventScroll();
      } catch (error) {
        // Nothing
      } finally {
        setLoadingImages(false);
      }
    },
  });

  return (
    <div
      className="
      w-full h-screen flex flex-col absolute bg-white pt-6 overflow-y-auto
      sm:w-[400px] sm:h-[550px] sm:rounded-sm sm:top-1/2 sm:left-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%]
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
        Join Fiverr
      </h4>
      <section className="w-full flex flex-col gap-6 px-8 mt-14 mb-6">
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
          <InputText placeholder="Username*" name="username" zorm={zorm} />
          <InputText
            placeholder="johndoe@example.com*"
            name="email"
            zorm={zorm}
          />
          <InputText
            placeholder="Password*"
            name="password"
            zorm={zorm}
            type="password"
          />
          <InputImage
            file={file}
            handleChange={handleInputChange}
            inputError={fileError}
            setState={setFile}
            placeholder="Choose a profile image (Optional)"
            labelId="image"
          />
          <InputText placeholder="Country*" name="country" zorm={zorm} />
          <div className="w-full py-4">
            <h6
              className="
              text-xl font-bold text-primaryText
            "
            >
              I want to become a seller
            </h6>
          </div>
          <div className="w-full h-12 flex items-center gap-2">
            <label
              htmlFor="isSeller"
              className="text-primaryText"
              onClick={() => setIsSeller((prev) => !prev)}
            >
              Activate the seller acount
            </label>
            <input
              type="checkbox"
              id="isSeller"
              onClick={() => setIsSeller((prev) => !prev)}
            />
          </div>
          <InputText placeholder="Phone" name="phone" zorm={zorm} />
          <Textarea
            labelId="desc"
            placeholder="Description (Optional)"
            name="desc"
            zorm={zorm}
          />
          <button
            className={`
            w-full h-12 bg-primaryGreen text-white text-center text-lg rounded-sm hover:brightness-95
            ${loading || (loadingImages && "cursor-not-allowed")}
            `}
            type="submit"
            disabled={loading || loadingImages}
          >
            Continue
          </button>
        </form>
        <span className="text-sm text-primaryText text-center">
          By joining I agree to receive emails from Fiverr.
        </span>
        {loading || (loadingImages && <WheelLoader />)}
        {error && (
          <span className="text-red-500 text-sm text-center">{error}</span>
        )}
      </section>
      <footer className="mt-auto border-t">
        <div className="w-full py-4">
          <p className="text-center text-sm text-primaryText">
            Already a member?{" "}
            <span
              className="text-primaryGreen cursor-pointer"
              onClick={() => changeModal("login")}
            >
              Sign in
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Register;
