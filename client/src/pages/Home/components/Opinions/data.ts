// Assets
import One from "@/assets/home/carousel-opinions/One.webp";
import Two from "@/assets/home/carousel-opinions/Two.webp";
import Three from "@/assets/home/carousel-opinions/Three.webp";
import Four from "@/assets/home/carousel-opinions/Four.webp";

interface IData {
  id: number;
  image: string;
  role: string;
  desc: string;
  alt: string;
}

const CARD_ONE: IData = {
  id: 1,
  image: One,
  role: "Caitlin Tormey, Chief Commercial Officer",
  desc: `"We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."`,
  alt: "Women talking",
};
const CARD_TWO: IData = {
  id: 2,
  image: Two,
  role: "Kay Kim, Co-Founder",
  desc: `"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."`,
  alt: "People talking",
};
const CARD_THREE: IData = {
  id: 3,
  image: Three,
  role: "Tim and Dan Joo, Co-Founders",
  desc: `"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."`,
  alt: "People walking",
};
const CARD_FOUR: IData = {
  id: 4,
  image: Four,
  role: "Brighid Gannon (DNP, PMHNP-BC), Co-Founder",
  desc: `"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."`,
  alt: "Woman walking",
};

export const CARDS_DATA = [CARD_ONE, CARD_TWO, CARD_THREE, CARD_FOUR];
