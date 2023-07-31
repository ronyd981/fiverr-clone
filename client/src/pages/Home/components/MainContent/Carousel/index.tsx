import { useCarouselEffect } from "@/hooks";

// Assets
import ImageOne from "@/assets/carousel/one.webp";
import ImageTwo from "@/assets/carousel/two.webp";
import ImageThree from "@/assets/carousel/three.webp";
import ImageFour from "@/assets/carousel/four.webp";
import ImageFive from "@/assets/carousel/five.webp";
import ImageSix from "@/assets/carousel/six.webp";

const Carousel = () => {
  const counter = useCarouselEffect();

  return (
    <div
      className="
      hidden
      w-full h-full relative bg-gray-100 md:block slide
      "
    >
      {[ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, ImageSix].map(
        (image, index) => (
          <figure
            className={`
            w-full h-full transition duration-500 ease-out absolute
            ${index === counter ? "opacity-100" : "opacity-0"}
          `}
            key={index}
          >
            <img
              src={image}
              className={`
              w-full h-full object-cover
            `}
              alt="Carousel image"
            />
          </figure>
        )
      )}
    </div>
  );
};

export default Carousel;
