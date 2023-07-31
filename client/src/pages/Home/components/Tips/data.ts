interface ITipsData {
  id: number;
  title: string;
  description: string;
}

const FirstTip: ITipsData = {
  id: 1,
  title: "Stick to your budget",
  description:
    "Find the right service for every price point. No hourly rates, just project-based pricing.",
};
const SecondTip: ITipsData = {
  id: 2,
  title: "Get quality work done quickly",
  description:
    "Hand your project over to a talented freelancer in minutes, get long-lasting results.",
};
const ThirdTip: ITipsData = {
  id: 3,
  title: "Pay when you're happy",
  description:
    "Upfront quotes mean no surprises. Payments only get released when you approve.",
};
const FourthTip: ITipsData = {
  id: 4,
  title: "Count on 24/7 support",
  description:
    "Our round-the-clock support team is available to help anytime, anywhere.",
};

export const TIPS_DATA = [FirstTip, SecondTip, ThirdTip, FourthTip];
