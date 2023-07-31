import { useState } from "react";
import { useZorm } from "react-zorm";
import { uploadImage } from "@/firebase";
import { useService } from "@/hooks";

import InputsSchema from "./InputsSchema";

// Components
import {
  InputText,
  Options,
  Textarea,
  WheelLoader,
  ImagesInput,
  InputImage,
} from "@/components";
import Features from "./Features";
import { toast } from "react-toastify";

interface ICat {
  name: string;
  cat: string;
}

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const Forms = () => {
  const [cover, setCover] = useState<File | null>(null);
  const [images, setImages] = useState<FileList | null>(null);
  const [coverError, setCoverError] = useState<null | string>(null);
  const [imagesError, setImagesError] = useState<null | string>(null);
  const [cat, setCat] = useState<ICat | null>(null);
  const [catError, setCatError] = useState<boolean>(false);
  const [features, setFeatures] = useState<Array<string>>([]);
  const [loadingImages, setLoadingImages] = useState<boolean>(false);

  const { serviceCall, loading, error } = useService();

  const handleInputChange = async (e: Event) => {
    //@ts-ignore
    const file = e.target.files[0];
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      setCover(null);
      setCoverError(`${file.type} is not a type accepted`);
      return;
    }

    setCoverError(null);
    setCover(file);
  };

  const handleInputImages = (e: Event) => {
    //@ts-ignore
    const files = e.target.files;
    let isValid = true;

    Array.prototype.forEach.call(files, function (file: File) {
      if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
        isValid = false;
      }
    });

    if (!isValid) {
      setImages(null);
      setImagesError(`File is not a type accepted`);
      return;
    }

    setImagesError(null);
    setImages(files);
  };

  const handleCatChange = (category: ICat) => {
    if (category === cat) return;

    setCatError(false);
    setCat(category);
  };

  const zorm = useZorm("create_gig", InputsSchema, {
    async onValidSubmit(e) {
      e.preventDefault();

      let title = e.data.title,
        desc = e.data.desc,
        shortTitle = e.data.shortTitle,
        shortDesc = e.data.shortDesc,
        deliveryTime = e.data.deliveryTime,
        price = e.data.price,
        revisionNumber = e.data.revisionNumber;

      if (!cover) return setCoverError("File is required");
      if (!images) return setImagesError("File is required");
      if (!cat) return setCatError(true);

      try {
        setLoadingImages(true);

        let url = cover ? await uploadImage(cover, "avatar") : null;

        let imagesArr: Array<string> = [];

        images &&
          (await Promise.all(
            Array.from(images).map(async (file: File) => {
              let url = await uploadImage(file, "gigs");
              imagesArr.push(url);
            })
          ));

        let res = await serviceCall(
          {
            title,
            desc,
            shortTitle,
            shortDesc,
            deliveryTime,
            price,
            cat: cat.cat,
            revisionNumber,
            features,
            cover: url,
            images: imagesArr,
          },
          "post",
          "/gigs"
        );

        if (!res) throw { message: "Something went wrong" };

        toast.success("Gig has been registered successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          theme: "light",
        });
        e.target.reset();
        setCat(null);
        setImages(null);
        setCover(null);
      } catch (error) {
        toast.error("Something went wrong, try again", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setLoadingImages(false);
      }
    },
  });

  return (
    <div className="flex flex-col gap-2 mb-12">
      <form
        className="
        w-[90%] mx-auto mb-14
        lg:w-[95%]
        2xl:w-[1400px]
      "
        ref={zorm.ref}
      >
        <fieldset
          disabled={loading || loadingImages}
          className="
          w-full flex flex-col gap-4
          lg:flex-row lg:gap-16
        "
        >
          <div
            className="
            w-full flex flex-col gap-4
            lg:w-6/12
          "
          >
            <InputText
              title="Title"
              labelId="title"
              placeholder="eg: I will do something I'm really good at"
              name="title"
              zorm={zorm}
            />
            <Options
              title="Category"
              placeholder="Choose category"
              handleChange={handleCatChange}
              cat={cat}
              catError={catError}
            />
            <InputImage
              file={cover}
              handleChange={handleInputChange}
              inputError={coverError}
              setState={setCover}
              placeholder="Select cover image *"
              title="Cover Image"
              labelId="cover"
            />
            <ImagesInput
              files={images}
              handleChange={handleInputImages}
              inputError={imagesError}
              setState={setImages}
              placeholder="Select image(s) *"
              title="Gig pictures"
              labelId="images"
            />
            <Textarea
              title="Description"
              labelId="desc"
              placeholder="Brief description to introduce your service to customers"
              name="desc"
              zorm={zorm}
            />
            <div className="mt-auto hidden lg:block">
              <button className="w-full h-10 text-white bg-primaryGreen font-bold hover:brightness-95">
                Create
              </button>
            </div>
          </div>
          <div
            className="
            w-full flex flex-col gap-4
            lg:w-6/12
          "
          >
            <InputText
              title="Service Title"
              labelId="shortTitle"
              placeholder="eg: One page web design"
              name="shortTitle"
              zorm={zorm}
            />
            <Textarea
              title="Short Description"
              labelId="shortDesc"
              placeholder="Short description of your service"
              name="shortDesc"
              zorm={zorm}
            />
            <InputText
              title="Delivery Time"
              labelId="deliveryTime"
              placeholder="eg: 3 days"
              name="deliveryTime"
              zorm={zorm}
            />
            <InputText
              title="Revision Number"
              labelId="revisionNumber"
              name="revisionNumber"
              zorm={zorm}
            />
            <Features features={features} setFeatures={setFeatures} />
            <InputText
              title="Price"
              labelId="price"
              placeholder="eg: $10"
              name="price"
              zorm={zorm}
            />
            <div className="lg:hidden">
              <button className="w-full h-10 text-white bg-primaryGreen font-bold hover:brightness-95">
                Create
              </button>
            </div>
          </div>
        </fieldset>
      </form>
      {loading || (loadingImages && <WheelLoader />)}
    </div>
  );
};

export default Forms;
