// Assets
import CardOne from "@/assets/cards/One.webp";
import CardTwo from "@/assets/cards/Two.webp";
import CardThree from "@/assets/cards/Three.webp";
import CardFour from "@/assets/cards/Four.webp";
import CardFive from "@/assets/cards/Five.webp";
import CardSix from "@/assets/cards/Six.webp";
import CardSeven from "@/assets/cards/Seven.webp";
import CardEight from "@/assets/cards/Eight.webp";
import CardNine from "@/assets/cards/Nine.webp";
import CardTen from "@/assets/cards/Ten.webp";
import CardEleven from "@/assets/cards/Eleven.webp";

interface ICardsData {
  id: number;
  title: string;
  description: string;
  image: string;
  path: string;
}

const CARD_ONE: ICardsData = {
  id: 1,
  title: "AI Artists",
  description: "Add talent to AI",
  image: CardOne,
  path: "/cat/design",
};
const CARD_Two: ICardsData = {
  id: 2,
  title: "Logo Design",
  description: "Build your brand",
  image: CardTwo,
  path: "/cat/design",
};
const CARD_THREE: ICardsData = {
  id: 3,
  title: "Wordpress",
  description: "Customize your site",
  image: CardThree,
  path: "/cat/programming-tech",
};
const CARD_FOUR: ICardsData = {
  id: 4,
  title: "Voice Over",
  description: "Share your message",
  image: CardFour,
  path: "/cat/music-audio",
};
const CARD_FIVE: ICardsData = {
  id: 5,
  title: "Video Explainer",
  description: "Engage your audience",
  image: CardFive,
  path: "/cat/video-animation",
};
const CARD_SIX: ICardsData = {
  id: 6,
  title: "Social Media",
  description: "Reach more customers",
  image: CardSix,
  path: "/cat/online-marketing",
};
const CARD_SEVEN: ICardsData = {
  id: 7,
  title: "SEO",
  description: "Unlock growth online",
  image: CardSeven,
  path: "/cat/online-marketing",
};
const CARD_EIGHT: ICardsData = {
  id: 8,
  title: "Ilustration",
  description: "Color your dreams",
  image: CardEight,
  path: "/cat/design",
};
const CARD_NINE: ICardsData = {
  id: 9,
  title: "Translation",
  description: "Go global",
  image: CardNine,
  path: "/cat/writing-translation",
};
const CARD_TEN: ICardsData = {
  id: 10,
  title: "Data Entry",
  description: "Learn your business",
  image: CardTen,
  path: "/cat/data",
};
const CARD_ELEVEN: ICardsData = {
  id: 11,
  title: "Book Covers",
  description: "Showcase your story",
  image: CardEleven,
  path: "/cat/design",
};

export const CARDS_DATA = [
  CARD_ONE,
  CARD_Two,
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
