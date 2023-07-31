interface IData {
  id: number;
  title: string;
  list: Array<string>;
}

const Categories: IData = {
  id: 1,
  title: "Categories",
  list: [
    "Graphics & Design",
    "Digital Marketing",
    "Writing & Translation",
    "Video & Animation",
    "Music & Audio",
    "Programming & Tech",
    "Data",
    "Business",
    "Lifestyle",
    "Photography",
    "End-to-End Projects",
    "Sitemap",
  ],
};

const About: IData = {
  id: 2,
  title: "About",
  list: [
    "Careers",
    "Press & News",
    "Partnerships",
    "Privacy Policy",
    "Terms of Service",
    "Intellectual Property Claims",
    "Investor Relations",
  ],
};

const Support: IData = {
  id: 3,
  title: "Support",
  list: [
    "Help & Support",
    "Trust & Safety",
    "Selling on Fiverr",
    "Buying on Fiverr",
    "Fiverr Guides",
  ],
};

const Community: IData = {
  id: 4,
  title: "Community",
  list: [
    "Customer Success Stories",
    "Community Hub",
    "Forum",
    "Events",
    "Blog",
    "Influencers",
    "Affiliates",
    "Podcast",
    "Invite a Friend",
    "Become a Seller",
    "Community Standards",
  ],
};

const MoreFromFiverr: IData = {
  id: 5,
  title: "More from Fiverr",
  list: [
    "Fiverr Enterprise",
    "Fiverr Business",
    "Fiverr Pro",
    "Fiverr Logo Maker",
    "Get Inspired",
    "Fiverr Select",
    "ClearVoice",
    "Fiverr Workspace",
    "Learn",
    "Working Not Working",
  ],
};

export { Categories, About, Support, Community, MoreFromFiverr };
export const Data = [Categories, About, Support, Community, MoreFromFiverr];
