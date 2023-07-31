// Assets
import One from "@/assets/home/One.svg";
import Two from "@/assets/home/Two.svg";
import Three from "@/assets/home/Three.svg";
import Four from "@/assets/home/Four.svg";
import Five from "@/assets/home/Five.svg";
import Six from "@/assets/home/Six.svg";
import Seven from "@/assets/home/Seven.svg";
import Eight from "@/assets/home/Eight.svg";
import Nine from "@/assets/home/Nine.svg";
import Ten from "@/assets/home/Ten.svg";

interface IData {
  id: number;
  image: string;
  title: string;
}

const DATA_ONE: IData = {
  id: 1,
  image: One,
  title: "Graphics & Design",
};
const DATA_TWO: IData = {
  id: 2,
  image: Two,
  title: "Digital Marketing",
};
const DATA_THREE: IData = {
  id: 3,
  image: Three,
  title: "Writing & Translation",
};
const DATA_FOUR: IData = {
  id: 4,
  image: Four,
  title: "Video & Animation",
};
const DATA_FIVE: IData = {
  id: 5,
  image: Five,
  title: "Music & Audio",
};
const DATA_SIX: IData = {
  id: 6,
  image: Six,
  title: "Programming & Tech",
};
const DATA_SEVEN: IData = {
  id: 7,
  image: Seven,
  title: "Business",
};
const DATA_EIGHT: IData = {
  id: 8,
  image: Eight,
  title: "Lifestyle",
};
const DATA_NINE: IData = {
  id: 9,
  image: Nine,
  title: "Data",
};
const DATA_TEN: IData = {
  id: 10,
  image: Ten,
  title: "Photography",
};

export const DATA = [
  DATA_ONE,
  DATA_TWO,
  DATA_THREE,
  DATA_FOUR,
  DATA_FIVE,
  DATA_SIX,
  DATA_SEVEN,
  DATA_EIGHT,
  DATA_NINE,
  DATA_TEN,
];
