// Components
import {
  MainContent,
  Tips,
  Tools,
  Business,
  Opinions,
  LogoMaker,
  InspiringWork,
  Guides,
  Banner,
} from "./components";
import { ServicesCard } from "@/components";

const Home = () => {
  return (
    <>
      <MainContent />
      <ServicesCard />
      <Tips />
      <Tools />
      <Business />
      <Opinions />
      <LogoMaker />
      <InspiringWork />
      <Guides />
      <Banner />
    </>
  );
};

export default Home;
