// Assets
import One from "@/assets/home/carousel-work/One.webp";
import Two from "@/assets/home/carousel-work/Two.webp";
import Three from "@/assets/home/carousel-work/Three.webp";
import Four from "@/assets/home/carousel-work/Four.webp";
import Five from "@/assets/home/carousel-work/Five.webp";
import Six from "@/assets/home/carousel-work/Six.webp";
import Seven from "@/assets/home/carousel-work/Seven.webp";
import Eight from "@/assets/home/carousel-work/Eight.webp";
import Nine from "@/assets/home/carousel-work/Nine.webp";
import Ten from "@/assets/home/carousel-work/Ten.webp";
import Eleven from "@/assets/home/carousel-work/Eleven.webp";

interface IData {
  id: number;
  title: string;
  by: string;
  logo: string;
  image: string;
}

const CARD_ONE: IData = {
  id: 1,
  title: "Book Design",
  by: "annapietrangely",
  logo: "",
  image: One,
};
const CARD_TWO: IData = {
  id: 2,
  title: "Flyer Design",
  by: "spickex",
  logo: "",
  image: Two,
};
const CARD_THREE: IData = {
  id: 3,
  title: "Illustrations",
  by: "christophbrandl",
  logo: "",
  image: Three,
};
const CARD_FOUR: IData = {
  id: 4,
  title: "Web & Mobile Design",
  by: "skydesigner",
  logo: "",
  image: Four,
};
const CARD_FIVE: IData = {
  id: 5,
  title: "Animated Gifs",
  by: "lamonastudio",
  logo: "",
  image: Five,
};
const CARD_SIX: IData = {
  id: 6,
  title: "Product Photography",
  by: "passionshake",
  logo: "",
  image: Six,
};
const CARD_SEVEN: IData = {
  id: 7,
  title: "Portraits & Caricatures",
  by: "noneyn",
  logo: "",
  image: Seven,
};
const CARD_EIGHT: IData = {
  id: 8,
  title: "Social Media Design",
  by: "fernandobengüa",
  logo: "",
  image: Eight,
};
const CARD_NINE: IData = {
  id: 9,
  title: "Packaging Design",
  by: "mijalzagier",
  logo: "",
  image: Nine,
};
const CARD_TEN: IData = {
  id: 10,
  title: "Logo Design",
  by: "eveeelin",
  logo: "",
  image: Ten,
};
const CARD_ELEVEN: IData = {
  id: 11,
  title: "Logo Design",
  by: "bruno_malagrino",
  logo: "",
  image: Eleven,
};

export const DATA = [
  CARD_ONE,
  CARD_TWO,
  CARD_THREE,
  CARD_FOUR,
  CARD_FIVE,
  CARD_SIX,
  CARD_SEVEN,
  CARD_EIGHT,
  CARD_NINE,
  CARD_TEN,
  CARD_ELEVEN,
];
