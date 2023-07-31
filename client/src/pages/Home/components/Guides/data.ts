// Assets
import One from "@/assets/home/guides/One.webp";
import Two from "@/assets/home/guides/Two.webp";
import Three from "@/assets/home/guides/Three.webp";

interface IData {
  id: number;
  image: string;
  title: string;
  desc: string;
  alt: string;
}

const DATA_ONE: IData = {
  id: 1,
  image: One,
  title: "Start an online business and work from home",
  desc: "A complete guide to starting a small business online",
  alt: "Laptop",
};
const DATA_TWO: IData = {
  id: 2,
  image: Two,
  title: "Digital marketing made easy",
  desc: "A practical guide to understand what is digital marketing",
  alt: "Laptop",
};
const DATA_THREE: IData = {
  id: 3,
  image: Three,
  title: "Create a logo for your business",
  desc: "A step-by-step guide to create a memorable business logo",
  alt: "Writing desk",
};

export const DATA = [DATA_ONE, DATA_TWO, DATA_THREE];
